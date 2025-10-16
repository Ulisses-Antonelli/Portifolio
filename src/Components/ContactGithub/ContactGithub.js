import React from "react";
import styles from "./ContactGithub.module.css";
import imageGitHub from "../../assets/imageGitHub.svg"

export default function ContactGithub() {
    return(
        <a
            href="https://github.com/Ulisses-Antonelli"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactGithub}
        >
            <img
                src={imageGitHub}
                alt="Github"
                className={styles.contactGithubIcon}
            />
        </a>
    )
}