import classNames from 'classnames';
import styles from './DayShow.module.css';


const DayShow = ({ dayShows }) => {
    const date = dayShows[0].date;

    return (
        <div className={styles.show__container}>
            <div className={styles.lines}>
                <h1 className={styles.show__date}>{date}</h1>
            </div>
            <ul className={styles.show__list}>
                {
                    dayShows.map(show => (
                        <li
                            key={show.id}
                            className={classNames({
                                [styles.show__band]: true,
                                [styles[`show__band--${show.id}`]]: true,
                                [styles[`${show.class}`]]: true
                            })}
                        >
                            {show.band}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default DayShow;