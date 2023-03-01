import Button from "components/Button";
import styles from './InformationsSection.module.css';

// images
import homeImage from 'assets/images/programodromo.png'; // Home page

const InformationsSection = ({ title, children, hasButton, page, image }) => {
  return (
    <section className={styles.informations__container}>
      {
        page === 'home' ?
          <div className={styles.informations__image}>
            <img src={homeImage} alt="Pessoas assistindo um show" className={styles.image} />
          </div>
          :
          <div className={styles.informations__image}>
            <img src={image} alt="" className={styles.image} />
          </div>
      }
      <div className={styles.informations__info}>
        <h6 className={styles.informations__title}>{title}</h6>
        <p className={styles.informations__text}>
          {children}
        </p>
        {
          hasButton ?
            <div className={styles.informations__button}>
              <Button>Comprar ingresso!</Button>
            </div>
            :
            <></>
        }
      </div>
    </section>
  );
}

export default InformationsSection;