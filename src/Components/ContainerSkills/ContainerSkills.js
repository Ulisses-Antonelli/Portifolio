import React from "react";
import CardSkills from "../CardSkills/CardSkills";
import styles from "./ContainerSkills.module.css";
import { useState } from "react";

export default function ContainerSkills({ cards }) {

    const [activeCard, setActiveCard] = useState(null);

    return(
        <div 
            className={styles.container}
        >
            {cards.map((card) => (
                <CardSkills
                    key={card.id}
                    label={card.label}
                    description={card.description}
                    link={card.link}
                    color={card.color}
                    isActive={activeCard === card.id}
                    onHover={() => setActiveCard(card.id)}
                />
            ))}
        </div>
    );
}