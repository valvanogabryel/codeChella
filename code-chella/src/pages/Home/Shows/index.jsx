import DayShow from "./DayShow";
import styles from './Shows.module.css';
import shows from './shows.json';

const Shows = () => {
    const saturdayShows = shows[0].saturday;
    const sundayShows = shows[1].sunday;

    return (
        <section className={styles.shows__container}>
            <h3 className={styles.shows__title}>/Line-Up/</h3>
            <div className={styles.shows__days}>
                <DayShow dayShows={saturdayShows} />
                <DayShow dayShows={sundayShows} />
            </div>
        </section>
    );
}

export default Shows;