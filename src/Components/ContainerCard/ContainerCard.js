import React from "react";
import Card from "../Card/Card";
import styles from "./ContainerCard.module.css";

export default function Container({ cards, style }) {
    return (
        <div className={styles.container} style={style?.container}>
            {cards.map((card) => (
                <Card
                    key={card.id}
                    label={card.label}
                    description={card.description}
                    link={card.link}
                    color={card.color}
                    style={card.style}
                />
            ))}
        </div>
    );
}