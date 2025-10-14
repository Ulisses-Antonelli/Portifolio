import styles from './Header.module.css'
import NavDate from '../NavDate/NavDate';
import NavButton from '../NavButton/NavButton';


export default function Header() {
    return (
        <header className={styles.navigation}>
            <nav>
                <NavDate />
                <NavButton />
            </nav>
        </header>
    )
}
