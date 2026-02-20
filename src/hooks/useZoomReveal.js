import { useEffect } from 'react'

export function useZoomReveal(options = {}) {
  const {
    container = typeof document !== 'undefined' ? document.body : null,
    selector = 'img[data-zoom-reveal]',
    threshold = 0.2,
    stagger = 120,
    duration = 700,
    easing = 'cubic-bezier(0.22, 1, 0.36, 1)',
    once = true,
  } = options

  useEffect(() => {
    if (!container) return

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const nodes = Array.from(container.querySelectorAll(selector))
    if (nodes.length === 0) return

    nodes.forEach((el, i) => {
      el.style.setProperty('--zr-delay', `${i * stagger}ms`)
      el.style.setProperty('--zr-duration', `${duration}ms`)
      el.style.setProperty('--zr-ease', easing)
      if (prefersReduced) {
        el.dataset.reduced = 'true'
      }
    })

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          const el = entry.target
          if (entry.intersectionRatio >= threshold) {
            el.classList.add('is-visible')
            if (once) {
              obs.unobserve(el)
            }
          } else if (!once) {
            el.classList.remove('is-visible')
          }
        })
      },
      { threshold: [0, threshold, 1], rootMargin: '0px' }
    )

    nodes.forEach((el) => observer.observe(el))

    return () => {
      nodes.forEach((el) => observer.unobserve(el))
      observer.disconnect()
    }
  }, [container, selector, threshold, stagger, duration, easing, once])
}
