import Banner from "components/Banner";
import Header from "components/Header";
import InformationsSection from "components/InformationsSection";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <InformationsSection
        title='< 11 e 12 de Março > Programódromo de São Paulo'
        hasButton
      >
        Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!
      </InformationsSection>
    </>
  );
}

export default Home;