function initSlider () {
  const slider = document.querySelector('.hero-slider')
  if (!slider) return

  const track = slider.querySelector('.hero-slider-track')
  const dotsWrapper = slider.querySelector('.slider-dots')
  const slides = Array.from(track.querySelectorAll('.hero-slide'))
  if (!slides.length) return

  dotsWrapper.innerHTML = ''
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl'

  const dots = slides.map((slide, index) => {
    const dot = document.createElement('button')
    dot.type = 'button'
    const label = slide.dataset.slideLabel || `${isRTL ? 'شريحة' : 'Slide'} ${index + 1}`
    dot.setAttribute('aria-label', isRTL ? `انتقل إلى ${label}` : `Go to ${label}`)
    dot.addEventListener('click', () => goToSlide(index))
    dotsWrapper.appendChild(dot)
    return dot
  })

  let current = slides.findIndex(slide => slide.classList.contains('active'))
  if (current === -1) current = 0

  function activate (idx) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx)
    })
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === idx)
    })
    current = idx
  }

  function goToSlide (idx) {
    activate(idx)
    resetInterval()
  }

  let intervalId
  function startInterval () {
    intervalId = window.setInterval(() => {
      const next = (current + 1) % slides.length
      activate(next)
    }, 7000)
  }

  function resetInterval () {
    window.clearInterval(intervalId)
    startInterval()
  }

  activate(current)
  startInterval()
}

function initNav () {
  const toggle = document.querySelector('.hamburger')
  const nav = document.querySelector('.nav-links')
  if (!toggle || !nav) return

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open')
  })

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open')
    })
  })
}

function highlightActiveLinks () {
  const path = window.location.pathname.replace(/index\.html$/, '')
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href')
    if (!href) return
    const normalized = href.replace(/index\.html$/, '')
    if (normalized === path || normalized === `${path}index.html`) {
      link.classList.add('active')
    }
  })
}

function main () {
  initSlider()
  initNav()
  highlightActiveLinks()
}

document.addEventListener('DOMContentLoaded', main)
