import React from 'react';
import styles from "./page.module.css";
import { Card } from "@/components/Card/Card";
import CardsJson from '@/utils/cards.json';

export default function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Card Game</h1>
            <p className={styles.description}>Saiba quais cartas tem vantagens sobre as outras!</p>

            <div className={styles.container}>
                {
                    CardsJson.data.map(({
                        title,
                        image,
                        description,
                        cardTypes,
                        power,
                    }) => (
                        <Card key={title} power={power} title={title} image={image} description={description} cardTypes={cardTypes} />
                    ))
                }
            </div>
        </main>
    );
}
