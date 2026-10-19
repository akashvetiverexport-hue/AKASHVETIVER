import { cp, mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { build } from 'vite'

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
  'index.html', 'products.html', 'styles.css', 'hero.css', 'craft.css',
  'request-flow.css', 'script.js', 'request-flow.js', 'site-config.js',
  'logo.png', 'logo-transparent.png',
]
for (const file of files) await cp(path.join(root, file), path.join(output, file))
const publicExtensions = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif', '.svg', '.mp4', '.webm', '.ttf', '.woff', '.woff2', '.js'])
for (const directory of ['images', 'assets/fonts', 'assets/icons', 'assets/vendor']) {
  await cp(path.join(root, directory), path.join(output, directory), {
    recursive: true,
    filter: async source => {
      const info = await stat(source)
      if (path.basename(source).startsWith('.')) return false
      return info.isDirectory() || publicExtensions.has(path.extname(source))
    },
  })
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
for (const page of ['index.html', 'products.html']) {
  const html = await readFile(path.join(output, page), 'utf8')
  for (const match of html.matchAll(/(?:src|href|poster)="([^"]+)"/g)) {
    const value = match[1].split(/[?#]/)[0]
    if (!value || /^(?:[a-z]+:|\/\/)/i.test(value)) continue
    const target = path.resolve(output, value.replace(/^\//, ''))
    if (!target.startsWith(output + path.sep)) throw new Error(`Unsafe page asset: ${value}`)
    await stat(target)
  }
}
console.log(`Deployment ready: dist (${count} public files, ${(bytes / 1048576).toFixed(1)} MiB). Drafts, tools, source and credentials excluded.`)
