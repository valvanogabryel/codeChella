import DayShow from "./DayShow";
import styles from './Shows.module.css';

const Shows = () => {
    return (
        <section className={styles.shows__container}>
            <h3 className={styles.shows__title}>/Line-Up/</h3>
            <DayShow />
            <DayShow />
        </section>
    );
}

export default Shows;