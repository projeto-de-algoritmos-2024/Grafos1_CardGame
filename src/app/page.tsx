"use client";
import React, { useState } from 'react';
import styles from "./page.module.css";
import {Card, CardTypes} from "@/components/Card/Card";
import CardsJson from '@/utils/cards.json';
import Modal from "@/components/Modal/Modal";
import { bfs } from '@/utils/bfs';


export default function Home() {
    const [cardSelected, setCardSelected] = useState<CardTypes>({
        power: '',
        title: '',
        image: {
            src: '',
            alt: '',
        },
        description: '',
        cardTypes: '',
    });
    const [actualCardAdvantage, setActualCardAdvantage] = useState(['']);

    const exitModal = () => {
        setCardSelected({
            ...cardSelected,
            title: ''
        })
    }

    const handleCard = (Card: CardTypes) => {
        setCardSelected(Card);

        const advantage = bfs(Card);
        setActualCardAdvantage(advantage);
    }

    const [isModalOpen, setIsModalOpen] = useState(false); 

    const test = () => {
        const response = bfs(CardsJson.data[4]);
        console.log({response});
    }

    return (
        <main onClick={test} className={styles.main}>
            {cardSelected.title && <Modal
                title={cardSelected.title}
                image={cardSelected.image}
                description={cardSelected.description}
                advantage={actualCardAdvantage}
                handleModal={exitModal}
            />}

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
                        <Card onClick={() => handleCard({title, image, description, cardTypes, power})} key={title} power={power} title={title} image={image} description={description} cardTypes={cardTypes} />
                    ))
                }s
            </div>
        </main>
    );
}
