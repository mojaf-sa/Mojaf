import { Helmet } from 'react-helmet-async'
export default function Products(){
  return (
    <main style={padding:'24px'}>
      <Helmet>
        <title>Products – MOJAF</title>
        <link rel="canonical" href={`https://mojaf-sa.com/products/`} />
        <meta name="description" content="Products page – MOJAF in Saudi Arabia"/>
      </Helmet>
      <h1>Products</h1>
      <p>Content placeholder for Products. Replace with your actual details, product lists and images.</p>
    </main>
  )
}
