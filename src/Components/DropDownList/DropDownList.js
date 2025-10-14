import { React, useState } from "react";
import styles from "./DropDownList.module.css";


export default function DropDownList({ options, onSelect }) {

    const [ isOpen, setIsOpen ] = useState(false);
    const [ selected, setSelected ] = useState("Filtrar Por tecnologia");

    const UpdateSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
        onSelect(option);
    };

    return(
        <div className={styles.dropdown}>
            <div className={styles.selected} onClick={() => setIsOpen(!isOpen)}>
                {selected}
            </div>
            {isOpen && (
                <ul className={styles.options}>
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className={styles.option}
                            onClick={() => UpdateSelect(option)}>
                                {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}