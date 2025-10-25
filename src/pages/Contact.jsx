import { Helmet } from 'react-helmet-async'
export default function Contact(){
  return (
    <main style={{padding:'24px'}}>
      <Helmet>
        <title>Contact – MOJAF</title>
        <link rel="canonical" href="https://mojaf-sa.com/contact/"/>
        <meta name="description" content="Contact MOJAF for quotes and deliveries across Saudi Arabia."/>
      </Helmet>
      <h1>Contact</h1>
      <p>Email: info@mojaf-sa.com • Phone/WhatsApp: +966-xxx-xxx-xxxx</p>
      <p>Address: Riyadh, Saudi Arabia</p>
    </main>
  )
}
