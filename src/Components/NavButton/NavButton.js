import React from 'react';
import styles from './NavButton.module.css'
import { useLocation } from 'react-router-dom';
import Button from '../Button/Button';

const textOptions = ['Home', 'About', 'Portifólio']

export default function NavButton() {

    const location = useLocation();

    const createPath = (text) => {
        return `/${text
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s+/g, '-')}`; // Substitui espaços por hífen, se necessário
    };
    return (
        <div className={styles.buttonContainer}>
            {textOptions.map((text) => {
                const path = createPath(text);
                return (
                    <Button 
                        key={text} 
                        to={path}
                        className={`
                                ${styles.buttonNavigation}
                                ${location.pathname === path ? styles.buttonDestacado : ""}
                            `}
                        >
                            {text}
                    </Button>
                );
            })}
        </div>
    );
}

