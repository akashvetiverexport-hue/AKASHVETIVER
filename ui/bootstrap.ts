import { setupMotion } from './motion'
import { setupLoading } from './loading'
setupMotion()
setupLoading()
// Collection browsing uses plain HTML and JavaScript. Load React only when
// an interactive section is approaching, including navigation to an anchor.
const roots = [...document.querySelectorAll('#product-showcase-root, #bulk-order-root, #testimonials-root, #footer-root')]
if (roots.length) {
  let started = false
  const load = () => {
    if (started) return
    started = true
    observer.disconnect()
    import('./main').catch(() => {
      started = false
      roots.forEach(root => {
        root.querySelectorAll('.section-placeholder').forEach(node => node.remove())
        const error = document.createElement('div'); error.className = 'section-load-error'; error.setAttribute('role', 'status')
        error.textContent = 'This section couldn’t load. Please check your connection.'
        const retry = document.createElement('button'); retry.type = 'button'; retry.textContent = 'Reload page'; retry.onclick = () => location.reload()
        error.append(retry); root.append(error)
      })
    })
  }
  const observer = new IntersectionObserver(entries => {
    if (!entries.some(entry => entry.isIntersecting)) return
    load()
  }, { rootMargin: '600px' })
  roots.forEach(root => observer.observe(root))
  window.addEventListener('vettiver:navigate', event => {
    const id = (event as CustomEvent<{id:string}>).detail.id
    if (['products','contact','reviews'].includes(id)) load()
  })
}
