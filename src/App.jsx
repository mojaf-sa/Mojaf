import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Safe lazy wrapper: if a file is missing or errors, we render a placeholder instead of crashing.
function safeLazy(importer, fallback) {
  return React.lazy(async () => {
    try {
      const mod = await importer();
      return mod && mod.default ? { default: mod.default } : { default: fallback };
    } catch (e) {
      console.warn("Optional section failed to load:", e);
      return { default: fallback };
    }
  });
}

const Placeholder = ({ title }) => (
  <div style={{maxWidth:1100,margin:"24px auto",padding:"0 16px",opacity:0.75,fontFamily:"system-ui,Segoe UI"}}>
    <div style={{border:"1px dashed #cbd5e1",borderRadius:12,padding:16}}>
      <strong>{title}</strong> loaded as placeholder (component not found yet). Layout is preserved.
    </div>
  </div>
);

// Try your original sections; if any are missing, a tiny placeholder shows instead of a blank screen.
// If your files are in different paths, you can adjust these imports later.
const Header          = safeLazy(() => import("./Header.jsx"),          () => <Placeholder title="Header" />);
const Hero            = safeLazy(() => import("./Hero.jsx"),            () => <Placeholder title="Hero" />);
const AboutUs         = safeLazy(() => import("./AboutUs.jsx"),         () => <Placeholder title="About Us" />);
const ServicesSection = safeLazy(() => import("./ServicesSection.jsx"), () => <Placeholder title="Services" />);
const Contact         = safeLazy(() => import("./Contact.jsx"),         () => <Placeholder title="Contact" />);
const Footer          = safeLazy(() => import("./Footer.jsx"),          () => <Placeholder title="Footer" />);

const Home = () => (
  <>
    <Suspense fallback={<div style={{padding:16}}>Loading header…</div>}><Header /></Suspense>
    <Suspense fallback={<div style={{padding:16}}>Loading hero…</div>}><Hero /></Suspense>

    {/* keep your blog link line if you had one */}
    <div style={{ maxWidth: '1200px', margin: '16px auto', padding: '0 20px' }}>
      <p style={{ marginTop: 12 }}>
        Read our <a href="/blog.html">Blog</a> for city-specific guides.
      </p>
    </div>

    <Suspense fallback={<div style={{padding:16}}>Loading about…</div>}><AboutUs /></Suspense>
    <Suspense fallback={<div style={{padding:16}}>Loading services…</div>}><ServicesSection /></Suspense>
    <Suspense fallback={<div style={{padding:16}}>Loading contact…</div>}><Contact /></Suspense>
    <Suspense fallback={<div style={{padding:16}}>Loading footer…</div>}><Footer /></Suspense>
  </>
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Keep your existing static blog + Arabic landing */}
      <Route path="/blog" element={<Navigate to="/blog.html" replace />} />
      <Route path="/ar"   element={<Navigate to="/ar/"      replace />} />

      {/* 404 fallback */}
      <Route
        path="*"
        element={
          <div style={{padding:"2rem", fontFamily:"system-ui,Segoe UI"}}>
            <h1>Page not found</h1>
            <p>Try the <a href="/">Home</a> or the <a href="/blog.html">Blog</a>.</p>
          </div>
        }
      />
    </Routes>
  );
}
