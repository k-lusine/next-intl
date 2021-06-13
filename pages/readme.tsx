import styles from '../styles/Home.module.css';
import configs from '../country-config/config.json';

export default function Readme({date}: {date: string}) {
  return (
    <div className={styles.container}>
      <h1>Content from github</h1>
      <p>The content below is powered from Github repo. Feel free to edit <a href="https://github.com/k-lusine/country-config"> this file</a> and refresh the page</p>
      <pre>{JSON.stringify(configs)}</pre>

      <div>This page uses incremental SSG. Updated every 10secs. Last updated at: <strong>{date}</strong></div>
      </div>
  )
}

export async function getStaticProps() {
  const date = Date.now();

  return {
    props: {
      date,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}