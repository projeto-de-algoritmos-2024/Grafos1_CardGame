import styles from "./page.module.css";

export default function Home() {
  return (
      <main className={styles.main}>
          <h1 className={styles.title}>Card Game</h1>
          <p className={styles.description}>Saiba quais cartas tem vantagens sobre as outras!</p>

          <div className={styles.container}>
              <div className={styles.test}/>
              <div className={styles.test}/>

              <div className={styles.test}/>
              <div className={styles.test}/>
          </div>
      </main>
  );
}
