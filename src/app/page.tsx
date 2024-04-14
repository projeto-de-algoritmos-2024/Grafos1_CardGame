import styles from "./page.module.css";
import { Card } from "@/components/Card/Card";

export default function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Card Game</h1>
            <p className={styles.description}>Saiba quais cartas tem vantagens sobre as outras!</p>

            <div className={styles.container}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </main>
    );
}
