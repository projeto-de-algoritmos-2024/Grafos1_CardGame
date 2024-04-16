import React from 'react';
import Image from "next/image";

import styles from "./Modal.module.css";

type ModalType = {
    handleModal: VoidFunction;
}

export default function Modal({handleModal} : ModalType) {
    return (
        <div onClick={handleModal} className={styles.container}>
            <div className={styles.modal}>
                <h2 className={styles.title}>Teste Carta</h2>
                <Image 
                    className={styles.img}
                    src="https://cdn.ome.lt/4CmCTmA7fhZ2_iAvAyqk7BCSPhk=/987x0/smart/uploads/conteudo/fotos/intro-1702004665_copy.jpeg"
                    alt="Naruto"
                    width={150}
                    height={100}
                />
                <p className={styles.text}>Descrição kaaaioasdasdasdasdasad</p>
                <div className={styles.advantageContainer}>
                    <h3 className={styles.advantageTitle}>Cartas com vantagem</h3>
                    <p className={styles.advantage}>Saadasdasdasd asdasda</p>
                </div>
            </div>
        </div>
    );
}

