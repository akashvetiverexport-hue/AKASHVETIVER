export function setupLoading() {
  document.documentElement.classList.add('has-loading-ui')
  const progress = document.createElement('div')
  progress.className = 'site-progress'; progress.hidden = true
  progress.innerHTML = '<span class="site-progress-track" aria-hidden="true"></span><span class="sr-only" role="status" aria-live="polite"></span>'
  document.body.append(progress)
  const status = progress.lastElementChild as HTMLElement
  let delay = 0, hide = 0, busy = false, frame = 0
  const sync = () => {
    frame = 0
    const next = Boolean(document.querySelector('[aria-busy="true"]:not(button)'))
    if (next === busy) return
    busy = next; clearTimeout(delay); clearTimeout(hide)
    if (busy) {
      progress.dataset.state = 'loading'
      delay = window.setTimeout(() => { progress.hidden = false; status.textContent = 'Loading, please wait.' }, 180)
    } else {
      progress.dataset.state = 'done'; status.textContent = ''
      hide = window.setTimeout(() => { progress.hidden = true }, 220)
    }
  }
  const photoSelector = '.product-image, .dialog-image, .showcase-image-frame, .showcase-thumb, .bulk-image, .craft-photo'
  const photo = (image: HTMLImageElement) => {
    const parent = image.parentElement
    if (!parent?.matches(photoSelector) || !image.getAttribute('src')) return
    const ready = image.complete && image.naturalWidth > 0
    parent.classList.toggle('photo-loading', !ready && !image.complete)
    parent.classList.toggle('photo-error', image.complete && !image.naturalWidth)
  }
  const imageEvent = (event: Event) => { if (event.target instanceof HTMLImageElement) photo(event.target) }
  document.addEventListener('load', imageEvent, true); document.addEventListener('error', imageEvent, true)
  const scan = (node: Node) => {
    if (!(node instanceof Element)) return
    if (node instanceof HTMLImageElement) photo(node)
    node.querySelectorAll<HTMLImageElement>('img').forEach(photo)
  }
  const observer = new MutationObserver(records => {
    for (const record of records) {
      if (record.type === 'childList') record.addedNodes.forEach(scan)
      else if (record.target instanceof HTMLImageElement) photo(record.target)
    }
    if (!frame) frame = requestAnimationFrame(sync)
  })
  observer.observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ['aria-busy','src'] })
  scan(document.body); sync()
  window.addEventListener('pagehide', event => {
    if (event.persisted) return
    observer.disconnect(); clearTimeout(delay); clearTimeout(hide); cancelAnimationFrame(frame)
  })
}
