import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>RECROPPED.CO</div>

      <div className={styles.center}>
        <p>Open-source placeholder image generator</p>
      </div>
      <div className={styles.grid}>
      <a
          href="https://api.recropped.co/image?width=500&height=200"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Get started <span>-&gt;</span>
          </h2>
          <p>Click here to start using our service API</p>
        </a>
        <a
          href="https://docs.recropped.co"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about service features and API.</p>
        </a>
        <a
          href="https://github.com/recropped"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Contribute <span>-&gt;</span>
          </h2>
          <p>Be an active part of the community and contribute ideas, code and bug fixes.</p>
        </a>
      </div>
    </main>
  )
}
