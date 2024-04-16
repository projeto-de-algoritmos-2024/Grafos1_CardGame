import React from 'react';
import Image from "next/image";

import styles from "./Modal.module.css";

type ModalType = {
    handleModal: VoidFunction;
    title: string;
    description: string;
    image: {
        src: string;
        alt: string;
    }
    advantage: string[]
}

export default function Modal({handleModal, title, description, image, advantage} : ModalType) {
    return (
        <div onClick={handleModal} className={styles.container}>
            <div className={styles.modal}>
                <h2 className={styles.title}>{title}</h2>
                <Image 
                    className={styles.img}
                    src={image.src}
                    alt={image.alt}
                    width={150}
                    height={100}
                />
                <div className={styles.advantageContainer}>
                    <h3 className={styles.advantageTitle}>Cartas com vantagem</h3>
                    <p className={styles.advantage}>
                        {advantage.map((item, index) => {
                            if(index === 0) return item;
                            return `, ${item}`
                        })}
                    </p>
                </div>
            </div>
        </div>
    );
}

