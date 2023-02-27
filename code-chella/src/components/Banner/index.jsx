import styles from './Banner.module.css';

const Banner = () => {
    return (
        <section className={styles.banner__container}>
            {/* Primeira mudança. Use div e não img, já que vamos usar background-image no css */}
            <div className={styles.banner__image}></div> 
        </section>
    );
}

export default Banner;