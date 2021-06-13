import styles from '../styles/Home.module.css'
import { FormattedMessage as T} from 'react-intl'

export default function About() {
  return (
    <div className={styles.container}>
      <h1><T id="hello"/> I am the about page</h1>
    </div>
  )
}
