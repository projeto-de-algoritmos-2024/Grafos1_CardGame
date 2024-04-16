"use client";

import React, { useState } from 'react';
import styles from "./page.module.css";
import { Card } from "@/components/Card/Card";
import CardsJson from '@/utils/cards.json';
import Modal from "@/components/Modal/Modal";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false); 

    return (
        <main className={styles.main}>
            {isModalOpen && <Modal handleModal={() => setIsModalOpen(!isModalOpen)} />}

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
                        <Card onClick={() => setIsModalOpen(!isModalOpen)} key={title} power={power} title={title} image={image} description={description} cardTypes={cardTypes} />
                    ))
                }s
            </div>
        </main>
    );
}
