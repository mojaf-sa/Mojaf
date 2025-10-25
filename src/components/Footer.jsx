import { useI18n } from '../i18n'
export default function Footer(){
  const { t } = useI18n()
  return <footer style={{padding:'30px 20px', textAlign:'center', borderTop:'1px solid #e5e7eb', marginTop:40}}>{t.footer}</footer>
}
