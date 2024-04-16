import React from 'react';
import styles from './Card.module.css';
import Image from "next/image";
import {ColorType} from "@/utils/colorType";

type CardTypes = {
    onClick?: VoidFunction;
    power: string;
    title: string;
    image: {
        src: string;
        alt: string;
    }
    description: string;
    cardTypes: string;
}

export const Card = ({onClick, power, title, image, description, cardTypes}: CardTypes) => (
    <div onClick={onClick} style={{border: `2px solid ${ColorType[cardTypes]}`}}  className={styles.container}>
        <p className={styles.cardPowerContainer}>{power}</p>
        <Image
            src={image.src}
            alt={image.alt}
            className={styles.cardImage}
            width={100}
            height={76}
        />

        <p className={styles.cardTitle}>{title}</p>

        <p className={styles.cardDescription}>{description}</p>

        <div className={styles.cardType}>
            <p className={styles.cardTypeText}>Tipo:</p>
                <p
                    className={styles.cardTypeListText}
                    style={{color: ColorType[cardTypes], marginLeft: '4px'}}
                >
                    {cardTypes}
                </p> 
        </div>
    </div>
)

