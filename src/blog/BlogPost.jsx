import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const getIndex = async (isAR) => {
  const tryPaths = [isAR ? "/src/blog/content/ar/index.json" : "/src/blog/content/en/index.json",
                    isAR ? "/blog/ar/index.json" : "/blog/en/index.json"];
  for (const path of tryPaths) {
    const r = await fetch(path, { cache:"no-store" });
    if (r.ok) return r.json();
  }
  throw new Error("index.json not found");
};

export default function BlogPost({ lang = "en" }) {
  const { slug } = useParams();
  const isAR = lang === "ar";
  const [post, setPost] = useState(null);

  useEffect(() => {
    (async () => {
      const posts = await getIndex(isAR);
      const found = posts.find(p => p.slug === slug);
      setPost(found || null);
    })();
  }, [slug, isAR]);

  if (!post) return <div style={{maxWidth:900, margin:"40px auto", padding:"0 16px"}}>{isAR ? "جاري التحميل..." : "Loading..."}</div>;

  const pageUrl = isAR ? `https://mojaf-sa.com/ar/blog/${post.slug}` : `https://mojaf-sa.com/blog/${post.slug}`;
  const altUrl = isAR ? `https://mojaf-sa.com/blog/${post.slug}` : `https://mojaf-sa.com/ar/blog/${post.slug}`;

  return (
    <div style={{maxWidth: 900, margin:"24px auto", padding:"0 16px"}}>
      <Helmet>
        <title>{post.title} | MOJAF</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={(post.keywords||[]).join(", ")} />
        <link rel="canonical" href={pageUrl} />
        <link rel="alternate" href={pageUrl} hreflang={isAR ? "ar-SA" : "en-SA"} />
        <link rel="alternate" href={altUrl} hreflang={isAR ? "en-SA" : "ar-SA"} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={pageUrl} />
      </Helmet>

      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <h1 style={{margin:"8px 0"}}>{post.title}</h1>
        <div><a href={isAR ? `/blog/${post.slug}` : `/ar/blog/${post.slug}`}>{isAR ? "EN" : "العربية"}</a></div>
      </div>

      <img src={post.image} alt={post.title} style={{width:"100%", borderRadius:10, margin:"6px 0 16px"}} />

      <article style={{whiteSpace:"pre-wrap", lineHeight:1.8, color:"#0f172a"}}>
        {post.body}
      </article>
    </div>
  );
}