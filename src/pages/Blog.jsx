import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import posts from '../data/blogs.json'
export default function Blog(){
  return (
    <main style={{padding:'24px'}}>
      <Helmet>
        <title>Blog – MOJAF</title>
        <link rel="canonical" href="https://mojaf-sa.com/blog/"/>
        <meta name="description" content="Articles and buyer guides for building materials in Saudi Arabia."/>
      </Helmet>
      <h1>Blog</h1>
      <div style={{display:'grid', gap:16}}>
        {posts.map(p => (
          <article key={p.slug} style={{border:'1px solid #e5e7eb', borderRadius:12, padding:16}}>
            <img src={p.image} alt={p.title} style={{maxWidth:'100%', borderRadius:8}} />
            <h2 style={{margin:'8px 0'}}>
              <Link to={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            <p>{p.description}</p>
          </article>
        ))}
      </div>
    </main>
  )
}
