import React from 'react';
import styles from './Button.module.css';
import { Link } from 'react-router-dom';

export default function Button({ to, href, children, className, ...rest }) {
    if (to) {
        return (
        <Link to={to} className={`${styles.buttonNavigation} ${className}`} {...rest}>
            {children}
        </Link>
        );
    } else if (href) {
        return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={`${styles.button} ${className}`} {...rest}>
            {children}
        </a>
        );
    } else {
        return (
        <button className={`${styles.button} ${className}`} {...rest}>
            {children}
        </button>
        );
    }
}
