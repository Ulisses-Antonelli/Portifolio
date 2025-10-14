import React from "react";
import styles from "./CardSkills.module.css";

export default function CardSkills({ label, description, link, color, isActive, onHover }) {
    return (
        <div
        className={`${styles.card} ${isActive ? styles.active : ""}`}
        onMouseEnter={onHover}
            style={{ backgroundColor: color }}
            onClick={() => (window.location.href = link)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter") (window.location.href = link);
            }}
        >
            <div className={styles.content}>
                <p className={styles.label}>{label}</p>
                <div className={styles.description}>{description}</div>
            </div>
        </div>
    );
}



