import classNames from "classnames";
import Button from "components/Button";
import styles from './InformationsSection.module.css';

const InformationsSection = ({ title, children, hasButton, page, id }) => {
  return (
    <section className={classNames({
      [styles.informations__container]: true,
      [styles['informations__container--sectors']]: page === 'sectors'
    })}>

      <div className={classNames({
        [styles.informations__image]: true,
        [styles[`informations__image--${page}`]]: true,
        [styles[`informations__image--${page}-${id}`]]: true
      })}>
        {/* <img src={homeImage} alt="Pessoas assistindo um show" className={styles.image} /> */}
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
    </section >
  );
}

export default InformationsSection;