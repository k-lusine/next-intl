import Link from "next/link";
import styles from "../styles/Home.module.css";
import {injectIntl, useIntl, FormattedMessage as T } from "react-intl";

type DataType = any[]; 
export async function getStaticProps() {
  const data: DataType = [];
  for (let i = 1; i <=3; i++) {
    data.push(process.env['ENV_' + i])
  }
  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default function Home({data}: {data: DataType}) {
  const intl = useIntl();
  
  return ( <div className={styles.container}>
        <h1>This is home page SSG</h1>
        <T id="hello" /> - I am a localized message
        <Link href={intl.formatMessage({id: 'routes.about'})} locale={intl.locale}>
          <a>About us</a>
        </Link>
        {data.map(d => <li>{d}</li>)}
        <footer>
          <h3>Switch languages </h3>
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
  );
}
