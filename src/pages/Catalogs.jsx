import { Helmet } from 'react-helmet-async'
export default function Catalogs(){
  return (
    <main style={padding:'24px'}>
      <Helmet>
        <title>Catalogs – MOJAF</title>
        <link rel="canonical" href={`https://mojaf-sa.com/catalogs/`} />
        <meta name="description" content="Catalogs page – MOJAF in Saudi Arabia"/>
      </Helmet>
      <h1>Catalogs</h1>
      <p>Content placeholder for Catalogs. Replace with your actual details, product lists and images.</p>
    </main>
  )
}
