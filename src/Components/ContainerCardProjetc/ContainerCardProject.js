import React, { useState } from "react";
import CardProject from "../CardProject/CardProject";
import styles from "./ContainerCardProject.module.css";

export default function ContainerCardProject({ projects }) {

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 4;
    const startIndex = currentPage * itemsPerPage;
    const paginatedProjects = projects.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className={styles.borda}>
            <div className={styles.grid}>
                {paginatedProjects.map((project, index) => {
                    let className;
                    if (index === 0) className = styles.featured;
                    else if (index === 1) className = styles.small1;
                    else if (index === 2) className = styles.small2;
                    else className = styles.large;
                    
                    return (
                        <div key={project.title} className={className}>
                            <CardProject {...project} />
                        </div>
                    );
                })}
            </div>
            {/*<div className={styles.pagination}>
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                    disabled={currentPage === 0}
                >
                Anterior
                </button>
                <button
                    onClick={() =>
                        setCurrentPage((prev) => startIndex + itemsPerPage >= projects.length ? prev : prev + 1)
                    }
                    disabled={startIndex + itemsPerPage >= projects.length}
                >
                    Próximo
                </button>
            </div>*/}
        </div>
    );
}