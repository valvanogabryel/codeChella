import Button from "components/Button";
import showImage from 'assets/images/programodromo.png';
import styles from './InformationsSection.module.css';


const InformationsSection = ({ title, children, hasButton }) => {
  return (
    <section className={styles.informations__container}>
      <div className={styles.informations__image}>
        <img src={showImage} alt="Pessoas assistindo um show" />
      </div>
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