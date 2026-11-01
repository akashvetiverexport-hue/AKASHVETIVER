import { cp, mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { build } from 'vite'
import { createHash } from 'node:crypto'

const root = fileURLToPath(new URL('../', import.meta.url))
const output = path.resolve(root, 'dist')
const marker = path.join(output, '.site-build')
// Only remove this script's own generated output, never a source directory.
if (output !== path.join(root, 'dist')) throw new Error('Unsafe output path')
try {
  const entries = await readdir(output)
  if (entries.length && !entries.includes('.site-build')) {
    throw new Error('dist already contains unmanaged files; move them before building')
  }
  await rm(output, { recursive: true, force: true })
} catch (error) {
  if (error.code !== 'ENOENT') throw error
}
await mkdir(output, { recursive: true })
await writeFile(marker, 'Generated deployment output; safe to rebuild.\n')

// A fresh bundle avoids publishing obsolete chunks from the local preview build.
await build({ root, build: { outDir: 'dist/assets/react', emptyOutDir: true } })
const files = [
  'manifest.json', 'robots.txt', 'sitemap.xml', 'llms.txt', 'llms-full.txt', 'legal.html', 'legal.css', 'product-page.css', 'intro-loading.js', 'index.html', 'products.html', 'styles.css', 'hero.css', 'craft.css',
  'request-flow.css', 'script.js', 'request-flow.js', 'site-config.js',
  'logo.png', 'logo-transparent.png', 'catalog.js', 'commerce.js', 'commerce.css', 'catalog-data.js', 'admin.html', 'admin.css', 'admin-studio.css', '_headers',
]
for (const file of files) await cp(path.join(root, file), path.join(output, file))
// Cloudflare permits one wildcard per rule. Cache hashed chunks by exact name;
// fixed entry points keep their normal revalidation behavior after deployment.
const chunks = (await readdir(path.join(output, 'assets/react'))).filter(name => /-.+\.js$/.test(name))
let assetHeaders = await readFile(path.join(output, '_headers'), 'utf8')
// Keep the strict CSP in sync with the tiny first-paint bootstraps.
const bootstrapHashes=[]
for (const file of ['index.html','products.html']) {
  const html=await readFile(path.join(output,file),'utf8')
  for (const match of html.matchAll(/<script data-(?:intro|catalog)-bootstrap>([\s\S]*?)<\/script>/g)) bootstrapHashes.push("'sha256-"+createHash('sha256').update(match[1]).digest('base64')+"'")
}
assetHeaders=assetHeaders.replace(/script-src 'self'(?: 'sha256-[^']+')*;/,"script-src 'self' "+bootstrapHashes.join(' ')+';')
for (const chunk of chunks) assetHeaders += `\n/assets/react/${chunk}\n  Cache-Control: public, max-age=31536000, immutable\n`
await writeFile(path.join(output, '_headers'), assetHeaders)
const publicExtensions = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif', '.svg', '.mp4', '.webm', '.ttf', '.woff', '.woff2', '.js'])
for (const directory of ['images/optimized', 'assets/fonts', 'assets/icons', 'assets/vendor']) {
  await cp(path.join(root, directory), path.join(output, directory), {
    recursive: true,
    filter: async source => {
      const info = await stat(source)
      if (path.basename(source).startsWith('.')) return false
      return info.isDirectory() || publicExtensions.has(path.extname(source))
    },
  })
}
// Keep source PNGs and superseded videos in the repository, out of production.
await mkdir(path.join(output, 'images/hero'), { recursive: true })
await cp(path.join(root,'images/hero/vetiver-harvest-loop.mp4'),path.join(output,'images/hero/vetiver-harvest-loop.mp4'))
// Public configuration only. Never expose a privileged key in the browser.
if (process.env.SUPABASE_PUBLISHABLE_KEY) {
  const key = process.env.SUPABASE_PUBLISHABLE_KEY
  let publicKey = key.startsWith('sb_publishable_')
  if (!publicKey) { try { publicKey = JSON.parse(Buffer.from(key.split('.')[1], 'base64url')).role === 'anon' } catch {} }
  if (!publicKey) throw new Error('SUPABASE_PUBLISHABLE_KEY must be publishable/anon, never a secret or service-role key')
  let config = await readFile(path.join(output,'site-config.js'),'utf8')
  config = config.replace("supabasePublishableKey: ''", 'supabasePublishableKey: '+JSON.stringify(key))
  if (process.env.VETTIVER_CATALOG_SOURCE === 'supabase') config = config.replace("catalogSource: 'local'", "catalogSource: 'supabase'")
  await writeFile(path.join(output,'site-config.js'),config)
}
let count = 0
let bytes = 0
async function check(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name)
    if (entry.isDirectory()) { await check(file); continue }
    if (file === marker) continue
    const info = await stat(file)
    if (info.size > 25 * 1024 * 1024) throw new Error(`Asset exceeds 25 MiB: ${file}`)
    count++
    bytes += info.size
  }
}
await check(output)
// Verify local page assets before deployment (including video data-src).
for (const page of ['index.html', 'products.html', 'admin.html']) {
  const html = await readFile(path.join(output, page), 'utf8')
  for (const match of html.matchAll(/(?:src|href|poster)="([^"]+)"/g)) {
    const value = match[1].split(/[?#]/)[0]
    if (!value || /^(?:[a-z]+:|\/\/)/i.test(value)) continue
    // Product pages are rendered by the Worker from the published live catalog.
    if (/^\/pieces\/product-[a-z0-9-]{1,90}$/.test(value)) continue
    const target = path.resolve(output, value.replace(/^\//, ''))
    if (!target.startsWith(output + path.sep)) throw new Error(`Unsafe page asset: ${value}`)
    await stat(target)
  }
}
console.log(`Deployment ready: dist (${count} public files, ${(bytes / 1048576).toFixed(1)} MiB). Drafts, tools, source and credentials excluded.`)

