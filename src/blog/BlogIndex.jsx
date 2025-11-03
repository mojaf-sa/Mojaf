import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const fetchJSON = async (path) => {
  const res = await fetch(path, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load blog index");
  return res.json();
};

export default function BlogIndex({ lang = "en" }) {
  const [posts, setPosts] = useState([]);
  const loc = useLocation();
  const isAR = lang === "ar";

  useEffect(() => {
    const p = isAR ? "/src/blog/content/ar/index.json" : "/src/blog/content/en/index.json";
    const tryPaths = [p, isAR ? "/blog/ar/index.json" : "/blog/en/index.json"];
    (async () => {
      for (const path of tryPaths) {
        try {
          const data = await fetchJSON(path);
          setPosts(data);
          return;
        } catch (e) {}
      }
    })();
  }, [isAR]);

  const title = isAR ? "المدونة — MOJAF" : "Blog — MOJAF";
  const desc = isAR ? "مقالات موجاف حول مواد البناء والتشطيب في السعودية." : "MOJAF articles about building and finishing materials in Saudi Arabia.";

  return (
    <div style={{maxWidth: "1100px", margin: "24px auto", padding: "0 16px"}}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={isAR ? "https://mojaf-sa.com/ar/blog" : "https://mojaf-sa.com/blog"} />
        <link rel="alternate" href="https://mojaf-sa.com/blog" hreflang="en-SA" />
        <link rel="alternate" href="https://mojaf-sa.com/ar/blog" hreflang="ar-SA" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
      </Helmet>

      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"8px 0 16px"}}>
        <h1 style={{margin:0}}>{isAR ? "المدونة" : "Blog"}</h1>
        <div>
          <a href={isAR ? "/" : "/ar/"}>{isAR ? "EN" : "العربية"}</a>
        </div>
      </div>

      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(260px,1fr))", gap:"16px"}}>
        {posts.map(p => (
          <article key={p.slug} style={{border:"1px solid #e5e7eb", borderRadius:12, overflow:"hidden", background:"#fff"}}>
            <img src={p.image} alt={p.title} style={{width:"100%", height:160, objectFit:"cover"}} />
            <div style={{padding:14}}>
              <h3 style={{marginTop:0, marginBottom:8}}>{p.title}</h3>
              <p style={{marginTop:0, color:"#475569"}}>{p.description}</p>
              <Link to={isAR ? `/ar/blog/${p.slug}` : `/blog/${p.slug}`} style={{fontWeight:600}}>
                {isAR ? "اقرأ المزيد" : "Read more"}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}