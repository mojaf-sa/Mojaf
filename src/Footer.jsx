import React from 'react';

export default function Footer() {
  return (
    <footer style={{background:"#0a2540", color:"#fff", padding:"40px 0"}}>
      <div style={{maxWidth:1200, margin:"0 auto", padding:"0 20px"}}>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:24}}>
          <div>
            <h4 style={{marginBottom:8}}>MOJAF</h4>
            <p style={{margin:0}}>Your Procurement Partner — Saudi Arabia</p>
            <p style={{marginTop:12}}>Email: <a href="mailto:info@mojaf-sa.com" style={{color:"#d4af37"}}>info@mojaf-sa.com</a></p>
            <p>Phone: +966 56 840 1900</p>
          </div>

          <div>
            <h4>Quick links</h4>
            <ul style={{listStyle:"none", padding:0, margin:0}}>
              <li><a href="/" style={{color:"rgba(255,255,255,0.9)"}}>Home</a></li>
              <li><a href="/about" style={{color:"rgba(255,255,255,0.9)"}}>About</a></li>
              <li><a href="/services" style={{color:"rgba(255,255,255,0.9)"}}>Services</a></li>
              <li><a href="/all-products" style={{color:"rgba(255,255,255,0.9)"}}>Products</a></li>
              <li><a href="/contact" style={{color:"rgba(255,255,255,0.9)"}}>Contact</a></li>
              <li><a href="/blog/" style={{color:"rgba(255,255,255,0.9)"}}>Blog</a></li>
            </ul>
          </div>

          <div>
            <h4>Blog (English)</h4>
            <ul style={{listStyle:"none", padding:0, margin:0}}>
              <li><a href="/blog/" style={{color:"rgba(255,255,255,0.9)"}}>Blog index</a></li>
              <li><a href="/blog/blog-post-1.html">Pillar Blog 1</a></li>
              <li><a href="/blog/blog-post-2.html">Pillar Blog 2</a></li>
              <li><a href="/blog/blog-post-3.html">Pillar Blog 3</a></li>
              <li><a href="/blog/blog-post-4.html">Pillar Blog 4</a></li>
              <li><a href="/blog/blog-post-5.html">Pillar Blog 5</a></li>
              <li><a href="/blog/blog-post-6.html">Pillar Blog 6</a></li>
              <li><a href="/blog/blog-post-7.html">Pillar Blog 7</a></li>
              <li><a href="/blog/blog-post-8.html">Pillar Blog 8</a></li>
              <li><a href="/blog/blog-post-9.html">Pillar Blog 9</a></li>
              <li><a href="/blog/blog-post-10.html">Pillar Blog 10</a></li>
              <li><a href="/blog/blog-post-11.html">Pillar Blog 11</a></li>
              <li><a href="/blog/blog-post-12.html">Pillar Blog 12</a></li>
              <li><a href="/blog/blog-post-13.html">Pillar Blog 13</a></li>
              <li><a href="/blog/blog-post-14.html">Pillar Blog 14</a></li>
              <li><a href="/blog/blog-post-15.html">Pillar Blog 15</a></li>
              <li><a href="/blog/blog-post-16.html">Pillar Blog 16</a></li>
              <li><a href="/blog/blog-post-17.html">Pillar Blog 17</a></li>
              <li><a href="/blog/blog-post-18.html">Pillar Blog 18</a></li>
              <li><a href="/blog/blog-post-19.html">Pillar Blog 19</a></li>
              <li><a href="/blog/blog-post-20.html">Pillar Blog 20</a></li>
            </ul>
          </div>

          <div>
            <h4>Landing pages & Arabic</h4>
            <ul style={{listStyle:"none", padding:0, margin:0}}>
              <li><a href="/landing/landing-1.html">Landing Page 1</a></li>
              <li><a href="/landing/landing-2.html">Landing Page 2</a></li>
              <li><a href="/landing/landing-3.html">Landing Page 3</a></li>
              <li><a href="/landing/landing-4.html">Landing Page 4</a></li>
              <li><a href="/landing/landing-5.html">Landing Page 5</a></li>
              <li><a href="/landing/landing-6.html">Landing Page 6</a></li>
              <li><a href="/landing/landing-7.html">Landing Page 7</a></li>
              <li><a href="/landing/landing-8.html">Landing Page 8</a></li>
              <li><a href="/landing/landing-9.html">Landing Page 9</a></li>
              <li><a href="/landing/landing-10.html">Landing Page 10</a></li>

              <li style={{marginTop:10}}><strong>Arabic</strong></li>
              <li><a href="/blog-ar/">المدونة العربية</a></li>
              <li><a href="/blog-ar/مدونة-1.html">مدونة 1</a></li>
              <li><a href="/blog-ar/مدونة-2.html">مدونة 2</a></li>
              <li><a href="/landing-ar/الصفحة-1.html">الصفحة الهبوط 1</a></li>
            </ul>
          </div>
        </div>

        <div style={{borderTop:"1px solid rgba(255,255,255,0.08)", marginTop:24, paddingTop:16, textAlign:"center"}}>
          <small style={{color:"rgba(255,255,255,0.6)"}}>&copy; {new Date().getFullYear()} MOJAF. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
