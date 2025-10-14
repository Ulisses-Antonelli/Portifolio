import React from "react";
import styles from './Banner.module.css';
import Logo from "../../assets/Logo.svg";
import BannerImage from "../../assets/BannerImage.png";

export default function Banner() {
    return(
        <section className={styles.banner}>
            <div className={styles.bannerContent}>
                <h1 className={styles.bannerTitle}>FullStack Developer</h1>
            </div>
            <div className={styles.bannerLogo}>
                <img src={Logo} alt="Logo central do site" />
            </div>
            <div className={styles.bannerImageContainer}>
                <img
                    className={styles.bannerImage}
                    src={BannerImage}
                    alt="Imagem ilustrativa do lado direito"
                />
                <p className={styles.bannerCaption}>Olá, eu sou Ulisses Antonelli</p>
            </div>
        </section>
    )
}
