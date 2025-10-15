import React from "react";
import CardProject from "../CardProject/CardProject";
import styles from "./ContainerCardProject.module.css";

export default function ContainerCardProject({ projects }) {
    return (
        <>
            <div className={styles.borda}>
                <p className={styles.borderText}>
                    • Node.js • React • Java • Spring Boot • MySQL • Kotlin • Android • KMP •
                </p>
            </div>
            <div className={styles.grid}>
                {projects.map((project) => (
                    <div key={project.title} className={styles.projectCard}>
                        <CardProject {...project} />
                    </div>
                ))}
            </div>
        </>
    );
}