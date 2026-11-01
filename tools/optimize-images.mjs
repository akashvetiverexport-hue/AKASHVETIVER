import sharp from 'sharp'
import { readdir, mkdir, readFile, writeFile, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const report = []
async function walk(directory) {
  for (const item of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, item.name)
    if (item.isDirectory()) { if (item.name !== 'optimized') await walk(file); continue }
    if (!/\.(png|jpe?g)$/i.test(item.name)) continue
    const relative = path.relative(root, file).replaceAll('\\', '/')
    const destination = relative.replace(/^images\//, 'images/optimized/').replace(/\.[^.]+$/, '.webp')
    const product = relative.startsWith('images/products/')
    const max = product ? 1200 : relative.startsWith('images/hero/') ? 1920 : 1200
    const output = path.join(root, destination)
    await mkdir(path.dirname(output), { recursive: true })
    const input = await readFile(file)
    const metadata = await sharp(input, { limitInputPixels: 40000000 }).metadata()
    const data = await sharp(input, { limitInputPixels: 40000000 }).rotate().resize({ width: max, height: max, fit: 'inside', withoutEnlargement: true }).webp({ quality: 84, alphaQuality: 100, effort: 5 }).toBuffer()
    await writeFile(output, data)
    const entry = { source: relative, output: destination, originalBytes: input.length, bytes: data.length, originalWidth: metadata.width, originalHeight: metadata.height }
    if (product) {
      const thumb = destination.replace('.webp', '-thumb.webp')
      const small = await sharp(input).rotate().resize({ width: 320, height: 320, fit: 'inside', withoutEnlargement: true }).webp({ quality: 78, alphaQuality: 100, effort: 5 }).toBuffer()
      await writeFile(path.join(root, thumb), small)
      entry.thumbnail = thumb; entry.thumbnailBytes = small.length
    }
    report.push(entry)
  }
}
await walk(path.join(root, 'images'))
await mkdir(path.join(root, '.drafts'), { recursive: true })
await writeFile(path.join(root, '.drafts/image-optimization.json'), JSON.stringify(report, null, 2) + '\n')
const original = report.reduce((n, x) => n + x.originalBytes, 0)
const optimized = report.reduce((n, x) => n + x.bytes + (x.thumbnailBytes || 0), 0)
console.log(JSON.stringify({ images: report.length, originalBytes: original, optimizedBytesIncludingThumbnails: optimized, reductionPercent: +(100 * (1-optimized/original)).toFixed(1) }))
