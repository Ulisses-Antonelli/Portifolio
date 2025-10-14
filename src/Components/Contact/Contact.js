import React from "react";
import styles from './Contact.module.css';
import ContactLinkedin from "../ContactLinkedin/ContactLinkedin";
import ContactGithub from "../ContactGithub/ContactGithub";

export default function Contact() {
    return(
        <section className={styles.contactContainer}>
            <div className={styles.contactButtons}>
                <ContactLinkedin />
                <ContactGithub />
            </div>
            <div className={styles.description}>
                <p>
                Estudante do 6º Semestre do curso superior de Desenvolvimento de Software Multiplataforma na FATEC Zona Leste
                </p>
            </div>
            <div className={styles.emailContainer}>
                <p className={styles.emailText}>Ulisses.antonelli@fatec.sp.gov.br</p>
                <p className={styles.emailText}>Ulissesantonelli.projetos@gmail.com</p>
            </div>
        </section>
    );
}