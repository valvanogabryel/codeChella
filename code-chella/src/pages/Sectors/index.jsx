import Banner from "components/Banner";
import { Fragment } from "react";
import styles from './Sectors.module.css';

const Sectors = () => {
  const sectors = [
    {
      name: 'Pista Premium',
      id: 1,
      color: '#0E7DF1'
    },
    {
      name: 'Pista Comum',
      id: 2,
      color: '#FE016E'
    },
    {
      name: 'Cadeiras térreo',
      id: 3,
      color: '#01A89E'
    },
    {
      name: 'Cadeiras Superiores',
      id: 4,
      color: '#3F51B5'
    },
    {
      name: 'Rampas',
      id: 5,
      color: '#0E7DF1'
    }
  ];

  return (
    <>
      <Banner page='sectors' />
      <section className={styles.sectors__container}>
        <div className={styles.sectors__image}>
          {/* image */}
        </div>
        <div className={styles.sectors__wrapper}>
          <h6 className={styles.sectors__subtitle}>Legenda:</h6>
          <ul className={styles.sectors__list}>
            {
              sectors.map(sector => (
                <div
                  key={sector.id}
                  className={styles.sector__item}
                >
                  <span
                    style={{ background: sector.color }}
                    className={styles.sector__box}
                  ></span>
                  <li>
                    {sector.name}
                  </li>
                </div>
              ))
            }
          </ul>
        </div>
      </section>
    </>
  );
}

export default Sectors;