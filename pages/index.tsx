import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {IntlProvider, FormattedMessage as T} from 'react-intl'
import useTranslations from '../hooks/useTranslations'

export default function Home() {
  const {messages, currentLocale, defaultLocale} = useTranslations();
  return (
    messages ? <IntlProvider messages={messages||{}} locale={currentLocale} defaultLocale={defaultLocale}>
    <div className={styles.container}>
      This is home page  {' '}
      <T id="hello"/>
      <Link href='evolve'><a href='/'>External</a></Link>
    </div>
  </IntlProvider> : <div>Loading</div>
    
  )
}
