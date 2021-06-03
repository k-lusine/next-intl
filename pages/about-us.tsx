import styles from '../styles/Home.module.css'
import {IntlProvider, FormattedMessage as T} from 'react-intl'
import useTranslations from '../hooks/useTranslations'

export default function Home() {
  const {messages, currentLocale, defaultLocale} = useTranslations();
  
  return (
    messages ? <IntlProvider messages={messages||{}} locale={currentLocale} defaultLocale={defaultLocale}>
    <div className={styles.container}>
      <h1><T id="hello"/> I am the about page</h1>
    </div>
  </IntlProvider> : <div>Loading</div>
  )
}
