import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

declare global {
  interface Window {
    VETTIVER_SCROLL?: { setPosition: (top: number) => void }
    VETTIVER_REFRESH?: () => void
  }
}
export function setupMotion() {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)')
  const fine = matchMedia('(pointer: fine)')
  let instance: Lenis | undefined
  const modalState = () => {
    if (!instance) return
    if (document.querySelector('dialog[open]')) instance.stop()
    else if (instance.isStopped) instance.start()
  }
  const configure = () => {
    instance?.destroy(); instance = undefined; delete window.VETTIVER_SCROLL
    if (reduced.matches || !fine.matches) return
    instance = new Lenis({
      autoRaf: true, smoothWheel: true, lerp: 0.14, syncTouch: false,
      anchors: false, respectReducedMotion: true,
      prevent: node => Boolean(node.closest('dialog, input, textarea, select, .filters, [data-native-scroll]')),
    })
    instance.on('scroll', () => window.ScrollTrigger?.update?.())
    window.VETTIVER_SCROLL = { setPosition: top => instance?.scrollTo(top, { immediate: true, force: true }) }
    modalState()
  }
  configure(); reduced.addEventListener('change', configure); fine.addEventListener('change', configure)
  const modalObserver = new MutationObserver(modalState)
  modalObserver.observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ['open'] })

  // Batch geometry work until scrolling is quiet. Repeated refreshes during
  // a gesture can interrupt the animation and make the page feel sticky.
  let lastScroll = 0, timer = 0
  window.addEventListener('scroll', () => { lastScroll = performance.now() }, { passive: true })
  const flush = () => {
    if (performance.now() - lastScroll < 160) { timer = window.setTimeout(flush, 180); return }
    instance?.resize(); window.ScrollTrigger?.refresh(true)
  }
  window.VETTIVER_REFRESH = () => { clearTimeout(timer); timer = window.setTimeout(flush, 180) }
  window.addEventListener('pageshow', () => { instance?.resize(); modalState() })
  window.addEventListener('pagehide', event => {
    if (event.persisted) return
    clearTimeout(timer); instance?.destroy(); modalObserver.disconnect()
  })
}
