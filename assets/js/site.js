const sliderImages = [
  'https://hhic.sa/wp-content/uploads/2023/11/Pic-2.png',
  'https://hhic.sa/wp-content/uploads/2023/11/Pic-5.png',
  'https://images.pexels.com/photos/6444268/pexels-photo-6444268.jpeg',
  'https://images.pexels.com/photos/7745977/pexels-photo-7745977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/16641362/pexels-photo-16641362/free-photo-of-empty-room-in-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/259988/pexels-photo-259988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
]

function initSlider () {
  const slider = document.querySelector('.hero-slider')
  if (!slider) return

  const track = slider.querySelector('.hero-slider-track')
  const dotsWrapper = slider.querySelector('.slider-dots')
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl'

  const texts = isRTL
    ? {
        kicker: 'مورد سعودي موثوق',
        title: 'مواد التشطيب والبناء مع تسليم ملتزم بالمواعيد',
        description: 'أرضيات SPC و LVT، حواف الجدران والأرضيات، العزل، المسامير ومواد تجهيز الكبائن المسبقة في الرياض وجدة والمنطقة الشرقية.',
        primary: 'استعرض المنتجات',
        secondary: 'اطلب عرض سعر'
      }
    : {
        kicker: 'Trusted Saudi Supplier',
        title: 'Construction & Finishing Materials, Delivered On Schedule',
        description: 'Vinyl & SPC flooring, wall and floor skirting, insulation, fasteners and portacabin fit-out materials for contractors in Riyadh, Jeddah and the Eastern Province.',
        primary: 'Explore Products',
        secondary: 'Request a Quote'
      }

  sliderImages.forEach((url, index) => {
    const slide = document.createElement('div')
    slide.className = 'hero-slide'
    slide.style.backgroundImage = `url(${url})`

    const content = document.createElement('div')
    content.className = 'hero-slide-content'
    content.innerHTML = `
      <div class="hero-kicker">${texts.kicker}</div>
      <h1 class="hero-title">${texts.title}</h1>
      <p class="hero-description">${texts.description}</p>
      <div class="hero-actions">
        <a class="btn-primary" href="${isRTL ? '/ar/products/' : '/products/'}">${texts.primary}</a>
        <a class="btn-secondary" href="${isRTL ? '/ar/contact/' : '/contact/'}">${texts.secondary}</a>
      </div>
    `
    slide.appendChild(content)
    track.appendChild(slide)

    const dot = document.createElement('button')
    dot.type = 'button'
    dot.setAttribute('aria-label', isRTL ? `انتقل إلى الشريحة ${index + 1}` : `Go to slide ${index + 1}`)
    dot.addEventListener('click', () => goToSlide(index))
    dotsWrapper.appendChild(dot)
  })

  let current = 0
  const slides = Array.from(slider.querySelectorAll('.hero-slide'))
  const dots = Array.from(slider.querySelectorAll('.slider-dots button'))

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

  activate(0)
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


function injectHomeSwitch () {
  if (document.querySelector('.home-switch')) return
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl'
  const a = document.createElement('a')
  a.href = isRTL ? '/ar/' : '/'
  a.className = 'home-switch'
  a.setAttribute('aria-label', isRTL ? 'العودة إلى الصفحة الرئيسية' : 'Back to home')
  a.textContent = isRTL ? '⌂ الرئيسية' : '⌂ Home'
  document.body.appendChild(a)
}

function injectSeoDefaults () {
  const lang = document.documentElement.lang || 'en'
  const existingRobots = document.querySelector('meta[name="robots"]')
  if (!existingRobots) {
    const robots = document.createElement('meta')
    robots.name = 'robots'
    robots.content = 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
    document.head.appendChild(robots)
  }

  const canonical = document.querySelector('link[rel="canonical"]')
  const canonicalHref = canonical ? canonical.href : window.location.origin + window.location.pathname

  if (!document.querySelector('meta[property="og:title"]') && document.title) {
    const ogTitle = document.createElement('meta')
    ogTitle.setAttribute('property', 'og:title')
    ogTitle.content = document.title
    document.head.appendChild(ogTitle)
  }

  if (!document.querySelector('meta[property="og:url"]')) {
    const ogUrl = document.createElement('meta')
    ogUrl.setAttribute('property', 'og:url')
    ogUrl.content = canonicalHref
    document.head.appendChild(ogUrl)
  }

  if (!document.querySelector('meta[property="og:type"]')) {
    const ogType = document.createElement('meta')
    ogType.setAttribute('property', 'og:type')
    ogType.content = 'website'
    document.head.appendChild(ogType)
  }

  if (!document.querySelector('script[data-seo="webpage"]')) {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      inLanguage: lang,
      name: document.title,
      url: canonicalHref,
      isPartOf: {
        '@type': 'WebSite',
        name: 'MOJAF',
        url: 'https://mojaf-sa.com/'
      }
    }
    const el = document.createElement('script')
    el.type = 'application/ld+json'
    el.dataset.seo = 'webpage'
    el.textContent = JSON.stringify(schema)
    document.head.appendChild(el)
  }
}

function main () {
  initSlider()
  initNav()
  highlightActiveLinks()
  injectHomeSwitch()
  injectSeoDefaults()
}

document.addEventListener('DOMContentLoaded', main)
