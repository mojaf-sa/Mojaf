import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import en from './en.json'
import ar from './ar.json'
const dicts = { en, ar }
const I18nContext = createContext()
export const I18nProvider = ({ children }) => {
  const [locale, setLocale] = useState('en')
  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
    document.body.style.fontFamily = locale === 'ar' ? 'Tahoma, Arial' : 'Inter, Arial'
  }, [locale])
  const t = useMemo(() => dicts[locale], [locale])
  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>
}
export const useI18n = () => useContext(I18nContext)
