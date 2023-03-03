import classNames from 'classnames';
import { Fade } from 'react-awesome-reveal';
import styles from './DayShow.module.css';


const DayShow = ({ dayShows }) => {
  const date = dayShows[0].date;

  return (
    <div className={styles.show__container}>
      <div className={styles.lines}>
        <h1 className={styles.show__date}>{date}</h1>
      </div>
      <Fade direction='up' cascade duration={400} triggerOnce damping={0.1}>
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
      </Fade>
    </div>
  );
}

export default DayShow;