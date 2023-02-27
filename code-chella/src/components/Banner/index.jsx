import styles from './Banner.module.css';
import bannerMobile from './images/home-banner-mobile.png';

const Banner = () => {
    return (
        <section className={styles.banner__container}>
            <img src={bannerMobile} alt="Banner da code chella" className={styles.banner__image} />
        </section>
    );
}

export default Banner;