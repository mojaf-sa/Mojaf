(function () {
  if (document.documentElement.dataset.blogEnhancementsApplied) return
  document.documentElement.dataset.blogEnhancementsApplied = '1'

  const styleId = 'blog-enhancements-style'
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style')
    style.id = styleId
    style.textContent = `
      .blog-home-banner {
        max-width: 1100px;
        margin: 12px auto 0;
        padding: 0 16px;
        display: flex;
        justify-content: flex-start;
      }
      .blog-home-button {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 6px 16px;
        border-radius: 999px;
        background: #0a4c8a;
        color: #fff !important;
        font-weight: 600;
        text-decoration: none;
        box-shadow: 0 8px 18px rgba(10, 76, 138, 0.18);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }
      .blog-home-button::before {
        content: '\u2190';
        font-size: 14px;
      }
      .blog-home-button:hover {
        transform: translateY(-1px);
        box-shadow: 0 12px 26px rgba(10, 76, 138, 0.22);
      }
      [dir="rtl"] .blog-home-banner {
        justify-content: flex-end;
      }
      [dir="rtl"] .blog-home-button::before {
        content: '\u2192';
      }
      .blog-product-gallery {
        display: grid;
        gap: 18px;
        margin: 32px auto;
        padding: 0 16px;
        max-width: 1100px;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      }
      .blog-product-gallery a {
        display: block;
        border-radius: 16px;
        overflow: hidden;
        border: 1px solid #d7e1f1;
        background: #f6f8fc;
        text-decoration: none;
        color: inherit;
        box-shadow: 0 10px 24px rgba(15, 35, 95, 0.08);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }
      .blog-product-gallery a:hover {
        transform: translateY(-2px);
        box-shadow: 0 16px 32px rgba(15, 35, 95, 0.12);
      }
      .blog-product-gallery img {
        display: block;
        width: 100%;
        height: 180px;
        object-fit: cover;
      }
      .blog-product-gallery span {
        display: block;
        padding: 14px 16px 18px;
        font-weight: 600;
        color: #0a1f44;
      }
      @media (max-width: 640px) {
        .blog-product-gallery {
          gap: 14px;
          margin: 26px auto;
        }
        .blog-product-gallery img {
          height: 160px;
        }
      }
    `
    document.head.appendChild(style)
  }

  const main = document.querySelector('main') || document.body
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl'

  if (!document.querySelector('.blog-home-button, .home-button')) {
    const banner = document.createElement('nav')
    banner.className = 'blog-home-banner'
    const link = document.createElement('a')
    link.className = 'blog-home-button'
    link.href = '/'
    link.textContent = isRTL ? 'العودة للرئيسية' : 'Back to Home'
    link.setAttribute('lang', isRTL ? 'ar' : 'en')
    banner.appendChild(link)
    const referenceNode = (main && main !== document.body) ? main : document.body.firstElementChild
    if (referenceNode) {
      document.body.insertBefore(banner, referenceNode)
    } else {
      document.body.appendChild(banner)
    }
  }

  if (!document.querySelector('.blog-product-gallery')) {
    const gallery = document.createElement('div')
    gallery.className = 'blog-product-gallery'

    const cards = isRTL
      ? [
        { href: '/ar/products/#flooring-skirting', img: '/floorth.png', alt: 'أرضيات SPC وفينيل من موجاف', label: 'حزم الأرضيات' },
        { href: '/ar/products/#fasteners-portacabin', img: '/screwsth.png', alt: 'مسامير ومثبتات من موجاف', label: 'مسامير ومثبتات' },
        { href: '/ar/products/#flooring-skirting', img: '/psSkirting.png', alt: 'حواف جدران من موجاف', label: 'أنظمة الحواف' }
      ]
      : [
        { href: '/products/#flooring-skirting', img: '/floorth.png', alt: 'SPC and vinyl flooring palettes from MOJAF', label: 'Flooring Packages' },
        { href: '/products/#fasteners-portacabin', img: '/screwsth.png', alt: 'Fasteners and anchors stocked by MOJAF', label: 'Fasteners & Hardware' },
        { href: '/products/#flooring-skirting', img: '/psSkirting.png', alt: 'Wall skirting accessories supplied by MOJAF', label: 'Wall Skirting Systems' }
      ]

    cards.forEach(card => {
      const anchor = document.createElement('a')
      anchor.href = card.href
      anchor.setAttribute('aria-label', `${card.label} — explore products`)

      const picture = document.createElement('img')
      picture.src = card.img
      picture.alt = card.alt
      picture.loading = 'lazy'
      anchor.appendChild(picture)

      const caption = document.createElement('span')
      caption.textContent = card.label
      anchor.appendChild(caption)

      gallery.appendChild(anchor)
    })

    if (main) {
      main.appendChild(gallery)
    } else {
      document.body.appendChild(gallery)
    }
  }
})()
