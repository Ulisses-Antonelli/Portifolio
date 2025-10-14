import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({ label, description, link, color, style }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (link) {
            if (link.startsWith('/')) {
                navigate(link);
            } else {
                window.location.href = link;
            }
        }
    };

    return (
        <div
            className={styles.card}
            style={{ backgroundColor: color, ...style?.card }}
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter") handleClick();
            }}
        >
            <div className={styles.content} style={style?.content}>
                <p className={styles.label} style={style?.label}>{label}</p>
                <div className={styles.description} style={style?.description}>{description}</div>
            </div>
        </div>
    );
}



