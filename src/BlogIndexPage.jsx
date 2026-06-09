import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { featuredBlogs, additionalBlogLinks } from './blogData';
import { FaArrowRight, FaBookOpen, FaFilePdf, FaPhoneAlt } from 'react-icons/fa';

const catalogLinks = [
  { title: 'SPC Flooring Catalog', href: '/catalogs/SPC-Flooring-Catalog.pdf' },
  { title: 'Wall Skirting Catalog', href: '/catalogs/Wall-Skirting-Catalog.pdf' },
  { title: 'Fasteners Catalog', href: '/catalogs/Fasteners-Catalog.pdf' },
  { title: 'Doors Hardware Catalog', href: '/catalogs/Doors-Hardware-Catalog.pdf' },
  { title: 'Wall Panels Catalog', href: '/catalogs/Wall-Panels-Catalog.pdf' },
  { title: 'Acoustic Wall Panels Catalog', href: '/catalogs/Acoustic-Wall-Panels-Catalog.pdf' },
  { title: 'Screws Catalog', href: '/catalogs/Screws-Catalog.pdf' },
  { title: 'WPC Doors Catalog', href: '/catalogs/WPC-Doors-Catalog.pdf' }
];

const BlogIndexPage = () => {
  return (
    <>
      <Header />
      <main className="blog-index-page">
        <section className="blog-index-hero">
          <div className="blog-index-container">
            <span className="blog-index-kicker"><FaBookOpen /> MOJAF Knowledge Center</span>
            <h1>MOJAF Blog – Building Materials, Fasteners, Flooring &amp; Wall Skirting Saudi Arabia</h1>
            <p>
              Professional articles for contractors, builders, procurement teams and fit-out companies sourcing fasteners supplier Saudi Arabia guidance, wall and floor skirting, SPC, vinyl and LVT flooring, construction supplies and portacabin materials across Riyadh, Jeddah, Dammam and Saudi Arabia.
            </p>
          </div>
        </section>

        <section className="blog-index-section">
          <div className="blog-index-container">
            <div className="blog-index-grid">
              {featuredBlogs.map((post) => (
                <article className="blog-index-card" key={post.href}>
                  <a href={post.href} className="blog-index-image" aria-label={`Read ${post.title}`}>
                    <img src={post.image} alt={`${post.title} article`} loading="lazy" />
                  </a>
                  <div className="blog-index-body">
                    <span>{post.category}</span>
                    <h2><a href={post.href}>{post.title}</a></h2>
                    <p>{post.excerpt}</p>
                    <a className="blog-index-read" href={post.href}>Read full guide <FaArrowRight /></a>
                  </div>
                </article>
              ))}
            </div>

            <div className="blog-index-more">
              <h2>More MOJAF SEO Guides</h2>
              <div className="blog-index-link-grid">
                {additionalBlogLinks.map((item) => (
                  <a href={item.href} key={item.href}>{item.title} <FaArrowRight /></a>
                ))}
              </div>
            </div>

            <div className="blog-index-resources">
              <div>
                <h2>Download MOJAF Catalogs</h2>
                <p>Use these PDF catalog links for submittals, procurement planning and product discussions.</p>
              </div>
              <div className="blog-index-catalogs">
                {catalogLinks.map((item) => (
                  <a href={item.href} key={item.href} target="_blank" rel="noopener noreferrer"><FaFilePdf /> {item.title}</a>
                ))}
              </div>
            </div>

            <div className="blog-index-cta">
              <h2>Need pricing, samples or stock confirmation?</h2>
              <p>Contact MOJAF for building materials, fasteners, wall skirting, SPC flooring and portacabin material supply across Saudi Arabia.</p>
              <a href="/contact/"><FaPhoneAlt /> Contact MOJAF</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .blog-index-page { background: #f8fafc; color: #0a2540; }
        .blog-index-container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .blog-index-hero {
          padding: 95px 0 80px;
          background: linear-gradient(135deg, rgba(10,37,64,0.94), rgba(10,37,64,0.78)), url('/herobg.avif') center/cover;
          color: #fff;
          text-align: center;
        }
        .blog-index-kicker {
          display: inline-flex; align-items: center; gap: 8px; color: #d4af37; font-weight: 800;
          text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 14px;
        }
        .blog-index-hero h1 { max-width: 940px; margin: 0 auto 18px; font-size: clamp(2.2rem, 5vw, 4rem); line-height: 1.12; }
        .blog-index-hero p { max-width: 820px; margin: 0 auto; color: rgba(255,255,255,0.86); font-size: 1.12rem; line-height: 1.8; }
        .blog-index-section { padding: 80px 0; }
        .blog-index-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 26px; }
        .blog-index-card { background: #fff; border-radius: 22px; overflow: hidden; border: 1px solid rgba(10,37,64,0.08); box-shadow: 0 18px 45px rgba(10,37,64,0.08); transition: all .3s ease; }
        .blog-index-card:hover { transform: translateY(-8px); box-shadow: 0 26px 60px rgba(10,37,64,0.14); }
        .blog-index-image { display: block; height: 205px; overflow: hidden; background: #e8eef5; }
        .blog-index-image img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s ease; }
        .blog-index-card:hover img { transform: scale(1.06); }
        .blog-index-body { padding: 25px; }
        .blog-index-body span { display: inline-block; color: #d4af37; font-weight: 800; font-size: .82rem; text-transform: uppercase; letter-spacing: .08em; margin-bottom: 10px; }
        .blog-index-body h2 { font-size: 1.25rem; line-height: 1.35; margin: 0 0 12px; }
        .blog-index-body h2 a { color: #0a2540; text-decoration: none; }
        .blog-index-body p { color: #607083; margin: 0 0 18px; line-height: 1.75; }
        .blog-index-read { display: inline-flex; align-items: center; gap: 8px; color: #0a2540; font-weight: 800; text-decoration: none; }
        .blog-index-read svg { color: #d4af37; }
        .blog-index-more, .blog-index-resources, .blog-index-cta { margin-top: 46px; background: #fff; border-radius: 24px; padding: 34px; border: 1px solid rgba(10,37,64,0.08); box-shadow: 0 18px 45px rgba(10,37,64,0.07); }
        .blog-index-more h2, .blog-index-resources h2, .blog-index-cta h2 { margin: 0 0 16px; color: #0a2540; }
        .blog-index-link-grid, .blog-index-catalogs { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 14px; }
        .blog-index-link-grid a, .blog-index-catalogs a { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 14px 16px; border-radius: 14px; background: #f8fafc; color: #0a2540; text-decoration: none; font-weight: 700; border: 1px solid rgba(10,37,64,0.08); }
        .blog-index-link-grid a svg, .blog-index-catalogs a svg { color: #d4af37; flex-shrink: 0; }
        .blog-index-resources { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 24px; align-items: start; }
        .blog-index-resources p, .blog-index-cta p { color: #607083; line-height: 1.75; margin: 0; }
        .blog-index-cta { text-align: center; background: linear-gradient(135deg, #0a2540, #123d63); color: #fff; }
        .blog-index-cta h2 { color: #fff; }
        .blog-index-cta p { color: rgba(255,255,255,0.78); max-width: 760px; margin: 0 auto 22px; }
        .blog-index-cta a { display: inline-flex; align-items: center; gap: 10px; background: #d4af37; color: #0a2540; padding: 14px 24px; border-radius: 999px; font-weight: 900; text-decoration: none; }
        @media (max-width: 992px) { .blog-index-grid { grid-template-columns: repeat(2, minmax(0,1fr)); } .blog-index-resources { grid-template-columns: 1fr; } }
        @media (max-width: 640px) { .blog-index-grid, .blog-index-link-grid, .blog-index-catalogs { grid-template-columns: 1fr; } .blog-index-section { padding: 60px 0; } .blog-index-more, .blog-index-resources, .blog-index-cta { padding: 24px; } }
      `}</style>
    </>
  );
};

export default BlogIndexPage;
