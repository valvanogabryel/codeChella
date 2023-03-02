import Banner from "components/Banner";
import styles from './Sectors.module.css';

const Sectors = () => {
  return (
    <>
      <Banner page='sectors' />
      <section className={styles.sectors__container}>
        <div className={styles.sectors__image}>
          {/* image */}
        </div>
        <div>
          <h6>Legenda:</h6>
        </div>
      </section>
    </>
  );
}

export default Sectors;