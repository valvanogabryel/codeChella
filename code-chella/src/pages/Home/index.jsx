import Banner from "components/Banner";
import Container from "components/Container/Container";
import InformationsSection from "components/InformationsSection";
import styles from './Home.module.css';
import Shows from "./Shows";

const Home = () => {
  return (
    <>
      <Banner page='home' />
      <Container>
        <InformationsSection
          title='< 11 e 12 de Março > Programódromo de São Paulo'
          page='home'
          hasButton
        >
          Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!
        </InformationsSection>

        <Shows />
        <div className={styles.image}>
          {/* image */}
        </div>
      </Container>
    </>
  );
}

export default Home;