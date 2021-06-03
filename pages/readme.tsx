import styles from '../styles/Home.module.css';
import configs from '../data/forum/config.json';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Content from github</h1>
      <p>The content below is powered from Github repo. Feel free to edit <a href="https://github.com/k-lusine/forum/blob/master/config.json"> this file</a> and refresh the page</p>
      <pre>{JSON.stringify(configs)}</pre>
      </div>
  )
}
