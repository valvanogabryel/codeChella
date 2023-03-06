import Banner from "components/Banner";
import Container from "components/Container/Container";
import InformationsSection from "components/InformationsSection";
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
      <Container>
        <section className={styles.sectors__section}>
          <div className={styles.sectors__image}>
            {/* image */}
          </div>
          <div className={styles.sectors__wrapper}>
            <p className={styles.sectors__subtitle}>Legenda:</p>
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
                    >{/*square*/}</span>
                    <li>
                      {sector.name}
                    </li>
                  </div>
                ))
              }
            </ul>
          </div>
        </section>
        <section>
          <h6 className={styles.sectors__details}>Mais detalhes sobre os setores:</h6>

          <div className={styles.sectors__informations}>
            <InformationsSection
              title='Pista'
              page='sectors'
              id={1}
            >
              Pista convencional, atendida pelos bares e banheiros das laterais do estádio. Espaço amplo, com local para sentar e descansar. Separada da pista premium por uma grade.
            </InformationsSection>
            <InformationsSection
              title='Pista Premium'
              page='sectors'
              id={2}
            >
              Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área.
            </InformationsSection>
            <InformationsSection
              title='Cadeiras'
              page='sectors'
              id={3}
            >
              Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada em relação às pistas.
            </InformationsSection>
          </div>

        </section>
      </Container>
    </>
  );
}

export default Sectors;