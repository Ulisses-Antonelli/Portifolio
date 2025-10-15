import React from "react";
import styles from "./CardProject.module.css";
import Button from "../Button/Button";
import { icons } from "../../assets/icons";

export default function CardProject({ image, title, description, links, technologies, semester }) {
    return (
        <div className={styles.card} >
            <div className={styles.imageContainer}>
                <img src={image} alt={title} className={styles.image} />
                <h2 className={styles.overlayTitle}>{title}</h2>
            </div>
            <div className={styles.containerDescripion}>
                <p>{description}</p>
                <div className={styles.containerLinks}>
                    <div className={styles.links}>
                        <Button href={links.project} target="_blank" rel="noopener noreferrer">Acessar</Button>
                        <Button href={links.github} target="_blank" rel="noopener noreferrer">GitHub</Button>
                        <Button href="https://fateczl.edu.br/arquivos/Grade%20DSM.pdf" target="_blank" rel="noopener noreferrer">{semester}</Button>
                    </div>
                    <div className={styles.technologies}>
                        {technologies.map((tech, index) => (
                            <>
                                <span key={index}>
                                    {icons[tech] || <span>{tech}</span>}
                                </span>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}