import React from 'react';
import { Link } from 'react-router-dom';

const images = [
  'https://images.pexels.com/photos/6444268/pexels-photo-6444268.jpeg',
  'https://images.pexels.com/photos/7745977/pexels-photo-7745977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/16641362/pexels-photo-16641362/free-photo-of-empty-room-in-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
];

const MojafHero = () => (
  <>
    <section className="mojaf-hero">
      <div className="mojaf-overlay" />
      <img className="mojaf-hero-img" src={images[0]} alt="MOJAF construction materials Saudi Arabia" />
      <div className="mojaf-hero-content">
        <div className="mojaf-kicker"><span />Welcome to MOJAF</div>
        <h1>Explore World class<br />Construction & Building Materials</h1>
        <p>The complete solution for construction and building materials across Riyadh, Jeddah, Dammam and Saudi Arabia.</p>
        <Link to="/products" className="mojaf-hero-btn">Explore Products</Link>
      </div>
      <div className="mojaf-thumbs">
        {images.slice(1).map((image) => <img key={image} src={image} alt="MOJAF materials" />)}
      </div>
    </section>
    <section className="mojaf-features">
      <div><strong>Affordable Pricing</strong><p>Competitive prices without compromising quality.</p></div>
      <div><strong>Uncompromising Quality</strong><p>High quality standards for contractors and projects.</p></div>
      <div><strong>Availability</strong><p>Timely access through a wide supply network.</p></div>
    </section>
    <style>{`
      .mojaf-hero{position:relative;height:65vh;min-height:500px;overflow:hidden;background:#111}.mojaf-hero-img{width:100%;height:100%;object-fit:cover;display:block}.mojaf-overlay{position:absolute;inset:0;background:rgba(0,0,0,.45);z-index:1}.mojaf-hero-content{position:absolute;top:40%;left:10%;transform:translateY(-50%);z-index:2;color:#fff;max-width:620px;padding:2rem}.mojaf-kicker{display:flex;align-items:center;gap:12px;text-transform:uppercase;letter-spacing:1px;font-weight:300}.mojaf-kicker span{width:40px;height:2px;background:#d4af37;display:block}.mojaf-hero h1{font-size:2.6rem;line-height:1.2;margin:1.5rem 0;font-weight:700;text-transform:capitalize;text-shadow:1px 1px 3px rgba(0,0,0,.5)}.mojaf-hero p{font-size:1.1rem;line-height:1.7;max-width:460px;text-shadow:1px 1px 2px rgba(0,0,0,.5);border-left:4px solid #d4af37;padding-left:15px}.mojaf-hero-btn{display:inline-flex;margin-top:1.5rem;background:#d4af37;color:#fff;text-decoration:none;padding:12px 32px;border-radius:4px;font-weight:600}.mojaf-thumbs{position:absolute;right:8%;bottom:26px;z-index:3;display:flex;gap:12px}.mojaf-thumbs img{width:92px;height:62px;border-radius:10px;object-fit:cover;border:2px solid rgba(255,255,255,.85);box-shadow:0 8px 24px rgba(0,0,0,.25)}.mojaf-features{padding:4rem 2rem;background:#f9f9f9;display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:2rem;max-width:1200px;margin:0 auto}.mojaf-features div{background:#fff;border-radius:8px;padding:2rem;text-align:center;box-shadow:0 5px 15px rgba(0,0,0,.05)}.mojaf-features strong{display:block;color:#222;margin-bottom:1rem}.mojaf-features p{color:#555;margin:0;line-height:1.6}@media(max-width:768px){.mojaf-hero-content{left:0;width:100%;text-align:center}.mojaf-hero p{border-left:0;padding-left:0;margin:0 auto}.mojaf-thumbs{display:none}.mojaf-hero h1{font-size:2rem}}
    `}</style>
  </>
);

export default MojafHero;
