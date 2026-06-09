import React from 'react';
import { Link } from 'react-router-dom';

const heroImages = [
  'https://hhic.sa/wp-content/uploads/2023/11/Pic-2.png',
  'https://hhic.sa/wp-content/uploads/2023/11/Pic-5.png',
  'https://images.pexels.com/photos/6444268/pexels-photo-6444268.jpeg',
  'https://images.pexels.com/photos/7745977/pexels-photo-7745977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
];

const SafeHero = () => {
  return (
    <section className="tg-safe-hero" aria-label="MOJAF Trading hero section">
      <style>{`
        .tg-safe-hero {
          position: relative;
          min-height: 82vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          color: #fff;
          background: #111827;
        }
        .tg-safe-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: linear-gradient(90deg, rgba(7, 12, 24, .92), rgba(7, 12, 24, .68), rgba(7, 12, 24, .45)), url('${heroImages[0]}');
          background-position: center;
          background-size: cover;
          animation: tgHeroZoom 18s ease-in-out infinite alternate;
        }
        .tg-safe-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 20%, rgba(255, 215, 0, .18), transparent 30%), radial-gradient(circle at 78% 36%, rgba(226, 30, 38, .22), transparent 28%);
          pointer-events: none;
        }
        .tg-safe-hero-inner {
          position: relative;
          z-index: 1;
          width: min(1180px, calc(100% - 36px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          gap: 38px;
          align-items: center;
          padding: 80px 0;
        }
        .tg-safe-kicker {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
          color: #ffd700;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: .12em;
          text-transform: uppercase;
        }
        .tg-safe-kicker::before { content: ''; width: 54px; height: 2px; background: #ffd700; display: inline-block; }
        .tg-safe-hero h1 {
          margin: 0;
          font-size: clamp(2.7rem, 6vw, 5.7rem);
          line-height: .98;
          letter-spacing: -.055em;
          font-weight: 900;
        }
        .tg-safe-hero h1 span { color: #ffd700; }
        .tg-safe-lead {
          max-width: 770px;
          margin: 24px 0 0;
          font-size: clamp(1.04rem, 1.5vw, 1.28rem);
          line-height: 1.75;
          color: rgba(255,255,255,.88);
        }
        .tg-safe-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 32px; }
        .tg-safe-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 0 24px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 800;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .tg-safe-btn:hover { transform: translateY(-2px); }
        .tg-safe-btn.primary { background: #ffd700; color: #111827; box-shadow: 0 14px 34px rgba(255, 215, 0, .28); }
        .tg-safe-btn.dark { background: #e21e26; color: #fff; box-shadow: 0 14px 34px rgba(226, 30, 38, .26); }
        .tg-safe-btn.outline { color: #fff; border: 1px solid rgba(255,255,255,.42); background: rgba(255,255,255,.08); backdrop-filter: blur(8px); }
        .tg-safe-panel {
          border: 1px solid rgba(255,255,255,.18);
          background: rgba(255,255,255,.11);
          border-radius: 28px;
          padding: 22px;
          box-shadow: 0 30px 70px rgba(0,0,0,.35);
          backdrop-filter: blur(14px);
        }
        .tg-safe-panel-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .tg-safe-card {
          min-height: 136px;
          border-radius: 20px;
          padding: 18px;
          background: rgba(255,255,255,.14);
          border: 1px solid rgba(255,255,255,.14);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          overflow: hidden;
          position: relative;
        }
        .tg-safe-card::before { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, transparent, rgba(0,0,0,.5)); }
        .tg-safe-card h3, .tg-safe-card p { position: relative; z-index: 1; margin: 0; }
        .tg-safe-card h3 { font-size: 1.04rem; color: #fff; }
        .tg-safe-card p { color: rgba(255,255,255,.78); font-size: .9rem; margin-top: 5px; }
        .tg-safe-card:nth-child(1) { background-image: url('${heroImages[1]}'); background-size: cover; background-position: center; }
        .tg-safe-card:nth-child(2) { background-image: url('${heroImages[2]}'); background-size: cover; background-position: center; }
        .tg-safe-card:nth-child(3) { background-image: url('${heroImages[3]}'); background-size: cover; background-position: center; }
        .tg-safe-card:nth-child(4) { background: linear-gradient(135deg, #e21e26, #111827); }
        .tg-safe-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 14px; }
        .tg-safe-stat { border-radius: 18px; padding: 14px; background: rgba(0,0,0,.32); text-align: center; }
        .tg-safe-stat strong { display:block; font-size:1.55rem; color:#ffd700; line-height:1; }
        .tg-safe-stat span { display:block; font-size:.8rem; color:rgba(255,255,255,.8); margin-top:6px; }
        @keyframes tgHeroZoom { from { transform: scale(1); } to { transform: scale(1.06); } }
        @media (max-width: 920px) {
          .tg-safe-hero-inner { grid-template-columns: 1fr; padding: 60px 0; }
          .tg-safe-panel { display: none; }
        }
        @media (max-width: 640px) {
          .tg-safe-hero { min-height: 76vh; }
          .tg-safe-actions { flex-direction: column; }
          .tg-safe-btn { width: 100%; }
        }
      `}</style>
      <div className="tg-safe-hero-inner">
        <div>
          <div className="tg-safe-kicker">Welcome to MOJAF</div>
          <h1>Explore World Class <span>Construction</span> & Building Materials</h1>
          <p className="tg-safe-lead">
            MOJAF Trading supplies fasteners, screws, wall skirting, SPC/LVT flooring, wall panels, doors, insulation boards, portacabin materials and project procurement support across Riyadh, Jeddah, Dammam and the wider KSA market.
          </p>
          <div className="tg-safe-actions">
            <Link className="tg-safe-btn primary" to="/products">Explore Products</Link>
            <a className="tg-safe-btn dark" href="https://wa.me/966568401900" target="_blank" rel="noopener noreferrer">WhatsApp Quote</a>
            <Link className="tg-safe-btn outline" to="/catalogs">Download Catalogs</Link>
          </div>
        </div>
        <aside className="tg-safe-panel" aria-label="Featured categories">
          <div className="tg-safe-panel-grid">
            <div className="tg-safe-card"><h3>Portacabin Materials</h3><p>Project-ready modular supply</p></div>
            <div className="tg-safe-card"><h3>Fasteners & Screws</h3><p>Bulk construction hardware</p></div>
            <div className="tg-safe-card"><h3>SPC / LVT Flooring</h3><p>Commercial flooring solutions</p></div>
            <div className="tg-safe-card"><h3>Wall Skirting</h3><p>PS, PVC, MDF & aluminum profiles</p></div>
          </div>
          <div className="tg-safe-stats">
            <div className="tg-safe-stat"><strong>KSA</strong><span>Supply Coverage</span></div>
            <div className="tg-safe-stat"><strong>BOQ</strong><span>Quote Support</span></div>
            <div className="tg-safe-stat"><strong>PDF</strong><span>Catalog Access</span></div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default SafeHero;
