import classNames from 'classnames';
import styles from './Banner.module.css';

const Banner = ({ page }) => {
    console.log(page);
    return (
        <section className={styles.banner__container}>
            <div className={classNames({
                [styles[`banner__image--${page}`]]: true
            })}></div>
        </section>
    );
}

export default Banner;