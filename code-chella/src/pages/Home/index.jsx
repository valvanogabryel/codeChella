import Banner from "components/Banner";
import Header from "components/Header";
import InformationsSection from "components/InformationsSection";
import styles from './Home.module.css';
import Shows from "./Shows";
import Footer from "components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <main className={styles.container}>
        <InformationsSection
          title='< 11 e 12 de Março > Programódromo de São Paulo'
          hasButton
        >
          Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!
        </InformationsSection>
        <Shows />
        <div className={styles.image}>
          {/* image */}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;