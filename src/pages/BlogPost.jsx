import { useParams, Link } from 'react-router-dom'
import posts from '../data/blogs.json'
import { Helmet } from 'react-helmet-async'
export default function BlogPost(){
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)
  if(!post){
    return <main style={{padding:'24px'}}><h1>Post not found</h1><Link to="/blog">Back to blog</Link></main>
  }
  return (
    <main style={{padding:'24px', maxWidth:900, margin:'0 auto'}}>
      <Helmet>
        <title>{post.title} – MOJAF</title>
        <link rel="canonical" href={`https://mojaf-sa.com/blog/${post.slug}.html`}/>
        <meta name="description" content={post.description}/>
        <meta name="keywords" content={post.keywords}/>
        <meta property="og:image" content={post.image}/>
      </Helmet>
      <p><Link to="/blog">← Back to blog</Link></p>
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} style={{maxWidth:'100%', borderRadius:8}} />
      {post.content.split('\n\n').map((para, i) => <p key={i} style={{lineHeight:1.7}}>{para}</p>)}
    </main>
  )
}
