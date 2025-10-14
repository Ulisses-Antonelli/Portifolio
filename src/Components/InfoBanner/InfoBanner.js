import styles from "./InfoBanner.module.css";
import Icon from "../../assets/Icon_skills.svg";

export default function InfoBanner({ title, description, icon }) {
    return (
        <div className={styles.banner}>
            <div className={styles.container}>
                <h1 className={styles.title}>{title}</h1>
                {icon && <img src={Icon} alt="Icone relacionado as habilidades" />}
            </div>
            <p className={styles.description}>{description}</p>
        </div>
    );
}