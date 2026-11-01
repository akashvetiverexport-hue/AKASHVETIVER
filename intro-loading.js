(() => {
  document.documentElement.classList.add('has-loading-ui');
  const revealImage = image => { image.src = image.dataset.src; delete image.dataset.src; };
  if ('IntersectionObserver' in window) {
    const photos = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { photos.unobserve(entry.target); revealImage(entry.target); } });
    }, {rootMargin:'350px'});
    document.querySelectorAll('img[data-src]').forEach(image => photos.observe(image));
    window.addEventListener('pagehide', event => { if (!event.persisted) photos.disconnect(); });
  } else document.querySelectorAll('img[data-src]').forEach(revealImage);
  if (!document.documentElement.classList.contains('intro-pending') && !document.documentElement.classList.contains('intro-reveal')) document.querySelector('.brand-intro')?.remove();
})();
