import React from "react";
import styles from "./ContactLinkedin.module.css";

export default function ContactLinkedin() {
    return(
        <a
            href="https://www.linkedin.com/in/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLinkedin}
        >
        Linkedin
        </a>
    )
}