import { Helmet } from 'react-helmet-async'
import { useI18n } from '../i18n'
export default function Home(){
  const { t } = useI18n()
  return (
    <main style={{padding:'24px'}}>
      <Helmet>
        <title>MOJAF – Building Materials in Saudi Arabia</title>
        <link rel="canonical" href="https://mojaf-sa.com/"/>
        <meta name="description" content="MOJAF supplies gypsum boards, cement boards, SPC/LVT flooring, fasteners and wall skirting across Saudi Arabia."/>
        <meta name="keywords" content="building materials, gypsum boards, cement boards, SPC flooring, LVT, fasteners, skirting, Saudi Arabia"/>
      </Helmet>
      <section style={{display:'grid', gap:12}}>
        <h1>{t.heroTitle}</h1>
        <p>MOJAF is a distributor of interior finishing materials: gypsum and cement boards, SPC/LVT flooring, screws and fasteners, wall skirting and insulation. We deliver to Riyadh, Jeddah, Dammam and other cities.</p>
        <a href="/contact" className="btn">{t.cta}</a>
      </section>
    </main>
  )
}
