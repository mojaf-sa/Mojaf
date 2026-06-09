import React from 'react';
import { FaArrowRight, FaBookOpen } from 'react-icons/fa';
import { featuredBlogs } from './blogData';

const BlogPreview = () => {
  return (
    <section className="mojaf-blog-preview" aria-labelledby="blog-preview-title">
      <div className="mojaf-blog-container">
        <div className="mojaf-blog-heading" data-aos="fade-up">
          <span className="mojaf-blog-kicker"><FaBookOpen /> MOJAF Insights</span>
          <h2 id="blog-preview-title">Building Materials Guides for Saudi Contractors</h2>
          <p>
            Explore practical buying guides for fasteners supplier Saudi Arabia searches, screw supplier in Riyadh/Jeddah/Dammam needs, wall skirting and floor skirting, SPC, vinyl and LVT flooring, construction supplies and portacabin materials in Saudi Arabia.
          </p>
        </div>

        <div className="mojaf-blog-grid">
          {featuredBlogs.map((post, index) => (
            <article className="mojaf-blog-card" key={post.href} data-aos="fade-up" data-aos-delay={index * 80}>
              <a href={post.href} className="mojaf-blog-image-link" aria-label={`Read ${post.title}`}>
                <img src={post.image} alt={`${post.title} guide by MOJAF`} loading="lazy" />
              </a>
              <div className="mojaf-blog-card-body">
                <span>{post.category}</span>
                <h3><a href={post.href}>{post.title}</a></h3>
                <p>{post.excerpt}</p>
                <a className="mojaf-blog-read" href={post.href}>Read article <FaArrowRight /></a>
              </div>
            </article>
          ))}
        </div>

        <div className="mojaf-blog-actions" data-aos="fade-up">
          <a className="mojaf-blog-primary" href="/blog/">View all MOJAF blog posts</a>
          <a className="mojaf-blog-secondary" href="/catalogs/">Download catalogs</a>
          <a className="mojaf-blog-secondary" href="/contact/">Request a quote</a>
        </div>
      </div>

      <style>{`
        .mojaf-blog-preview {
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 52%, #fff8df 100%);
          padding: 90px 0;
          position: relative;
          overflow: hidden;
        }
        .mojaf-blog-preview::before {
          content: '';
          position: absolute;
          width: 360px;
          height: 360px;
          right: -120px;
          top: -120px;
          border-radius: 50%;
          background: rgba(212, 175, 55, 0.16);
        }
        .mojaf-blog-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }
        .mojaf-blog-heading {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 46px;
        }
        .mojaf-blog-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #d4af37;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 12px;
        }
        .mojaf-blog-heading h2 {
          color: #0a2540;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.15;
          margin: 0 0 16px;
        }
        .mojaf-blog-heading p {
          color: #5f6f83;
          font-size: 1.08rem;
          line-height: 1.8;
          margin: 0;
        }
        .mojaf-blog-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 26px;
        }
        .mojaf-blog-card {
          background: #ffffff;
          border: 1px solid rgba(10, 37, 64, 0.08);
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 18px 45px rgba(10, 37, 64, 0.09);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .mojaf-blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 60px rgba(10, 37, 64, 0.14);
        }
        .mojaf-blog-image-link {
          display: block;
          height: 190px;
          background: #eef2f7;
          overflow: hidden;
        }
        .mojaf-blog-image-link img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .mojaf-blog-card:hover img {
          transform: scale(1.06);
        }
        .mojaf-blog-card-body {
          padding: 24px;
        }
        .mojaf-blog-card-body span {
          display: inline-block;
          color: #d4af37;
          font-size: 0.82rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 10px;
        }
        .mojaf-blog-card-body h3 {
          margin: 0 0 12px;
          font-size: 1.22rem;
          line-height: 1.35;
        }
        .mojaf-blog-card-body h3 a {
          color: #0a2540;
          text-decoration: none;
        }
        .mojaf-blog-card-body p {
          color: #607083;
          margin: 0 0 18px;
          line-height: 1.7;
        }
        .mojaf-blog-read {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #0a2540;
          font-weight: 800;
          text-decoration: none;
        }
        .mojaf-blog-read svg {
          color: #d4af37;
        }
        .mojaf-blog-actions {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 42px;
        }
        .mojaf-blog-primary,
        .mojaf-blog-secondary {
          border-radius: 999px;
          padding: 14px 24px;
          font-weight: 800;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .mojaf-blog-primary {
          background: #d4af37;
          color: #0a2540;
          box-shadow: 0 12px 28px rgba(212, 175, 55, 0.28);
        }
        .mojaf-blog-secondary {
          border: 1px solid rgba(10, 37, 64, 0.18);
          color: #0a2540;
          background: #ffffff;
        }
        .mojaf-blog-primary:hover,
        .mojaf-blog-secondary:hover {
          transform: translateY(-3px);
        }
        @media (max-width: 992px) {
          .mojaf-blog-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 640px) {
          .mojaf-blog-preview { padding: 70px 0; }
          .mojaf-blog-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default BlogPreview;
