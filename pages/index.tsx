import Link from "next/link";
import styles from "../styles/Home.module.css";
import { IntlProvider, FormattedMessage as T } from "react-intl";
import useTranslations from "../hooks/useTranslations";

export default function Home() {
  const { messages = {}, currentLocale, defaultLocale } = useTranslations();

  return messages ? (
    <IntlProvider
      messages={messages}
      locale={currentLocale}
      defaultLocale={defaultLocale}
    >
      <div className={styles.container}>
        <h1>This is home page</h1>
        <T id="hello" /> - I am a localized message
        <Link href={messages.routes.about} locale={currentLocale}>
          <a>About us</a>
        </Link>
        <footer>
          <h3>Switch languages</h3>
          <ul>
            <li>
              <Link href={"/"} locale={"en-US"}>
                <a>English</a>
              </Link>
            </li>
            <li>
              <Link href={"/"} locale={"es"}>
                <a>Spanish</a>
              </Link>
            </li>
            <li>
              <Link href={"/"} locale={"hy"}>
                <a>Armenian</a>
              </Link>
            </li>
            <li>
              <Link href={"/"} locale={"ru"}>
                <a>Russian</a>
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </IntlProvider>
  ) : (
    <div>Loading</div>
  );
}
