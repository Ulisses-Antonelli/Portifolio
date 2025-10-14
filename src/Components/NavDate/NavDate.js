import { useState, useEffect } from 'react';
import styles from './NavDate.module.css';

export default function NavDate() {

    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const now = new Date();
        const formattedDate = now.toLocaleDateString('pt-BR'); // Formato: DD/MM/YYYY
        setCurrentDate(formattedDate);
    }, []);

    return (
        <div className={styles.date}>
            {currentDate}
        </div>
    )
}