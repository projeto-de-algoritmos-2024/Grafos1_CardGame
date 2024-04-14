import styles from './Card.module.css';
import Image from "next/image";

export const Card = () => (
    <div className={styles.container} style={{border: '2px solid #525256'}}>
        <p className={styles.cardPowerContainer}>5</p>
        <Image
            src="https://cdn.ome.lt/4CmCTmA7fhZ2_iAvAyqk7BCSPhk=/987x0/smart/uploads/conteudo/fotos/intro-1702004665_copy.jpeg"
            alt="Naruto"
            className={styles.cardImage}
            width={100}
            height={76}
        />

        <p className={styles.cardTitle}>Gigante de aço</p>

        <p className={styles.cardDescription}> Gigante com poderes de aço, super resistente...</p>

        <div className={styles.cardType}>
                <p className={styles.cardTypeText}>Tipo:</p>
                <p className={styles.cardTypeListText}>Aço</p>
        </div>
    </div>
)

