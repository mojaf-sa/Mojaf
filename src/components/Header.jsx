import { Link, NavLink } from 'react-router-dom'
import { useI18n } from '../i18n'
import './header.css'
export default function Header(){
  const { t, locale, setLocale } = useI18n()
  return (
    <header className="hdr">
      <Link to="/" className="brand">
        <img src="/assets/logo.svg" alt="MOJAF logo" width="100" height="28" />
      </Link>
      <nav className="nav">
        <NavLink to="/">{t.nav.home}</NavLink>
        <NavLink to="/products">{t.nav.products}</NavLink>
        <NavLink to="/services">{t.nav.services}</NavLink>
        <NavLink to="/catalogs">{t.nav.catalogs}</NavLink>
        <NavLink to="/blog">{t.nav.blog}</NavLink>
        <NavLink to="/contact">{t.nav.contact}</NavLink>
      </nav>
      <button className="lang" onClick={()=> setLocale(locale === 'en' ? 'ar' : 'en')}>{t.nav.language}</button>
    </header>
  )
}
