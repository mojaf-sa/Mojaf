import React from 'react'
import { createRoot } from 'react-dom/client'
function App(){return (<div style={{fontFamily:'system-ui, sans-serif', padding:'2rem'}}><h1>MOJAF</h1><p>React+Vite scaffold. Your site pages live in <code>/public</code>.</p><p><a href="/blog/">Blog</a> · <a href="/products/">Products</a> · <a href="/contact/">Contact</a></p></div>)}
createRoot(document.getElementById('root')).render(<App />)
