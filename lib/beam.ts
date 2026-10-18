export const clamp = (v: number, lo: number, hi: number): number => v < lo ? lo : v > hi ? hi : v
export const hexToRgb = (hex: string, fallback = "174, 204, 135"): string => {
  const match = /^#?([\da-f]{3}|[\da-f]{6})$/i.exec((hex || "").trim())
  if (!match) return fallback
  const h = match[1].length === 3 ? match[1].replace(/./g, c => c + c) : match[1]
  const n = parseInt(h, 16)
  return ((n >> 16) & 255) + ", " + ((n >> 8) & 255) + ", " + (n & 255)
}
export const fitSize = (measuredAt100: number, target: number, cap: number): number => {
  if (!(measuredAt100 > 0) || !(target > 0)) return 0
  const size = 100 * target / measuredAt100
  return cap > 0 ? Math.min(size, cap) : size
}
export const beamTarget = (u: number, lo = 30, hi = 82): number => lo + (hi - lo) * clamp(Number.isFinite(u) ? u : .5, 0, 1)
export const drift = (t: number, centre = 58, amp = 9): number => centre + amp * (.7 * Math.sin(t * .21) + .3 * Math.sin(t * .077 + 1.3))
export const approach = (from: number, to: number, k: number, dt: number): number => to + (from - to) * Math.pow(1 - clamp(k, 0, 1), clamp(dt, 0, .1) * 60)
export const baselineAt = (ascent: number, descent: number): number => !(ascent > 0) || !(descent >= 0) ? .8 : clamp(((100 - ascent - descent) / 2 + ascent) / 100, .5, 1.2)
export const wordHeight = (fontSize: number, baseline: number, cut: number): number => Math.max(0, fontSize * (baseline + clamp(Number.isFinite(cut) ? cut : 0, -.4, .4)))
