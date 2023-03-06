// React
import { Link } from "react-router-dom";
// components
import Banner from "components/Banner";
import Container from "components/Container/Container";
import Dropdown from "components/Dropdown/Dropdown";
// styles
import styles from './Informations.module.css';
import Title from "components/Title/Title";

const Informations = () => {
  return (
    <>
      <Banner page='informations' />
      <Container>
        <Title>Perguntas Frequentes:</Title>
        <section className={styles.informations__container}>
          <Dropdown
            title='Quais serão as atrações?'
          >
            Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o segundo (12/03) com bandas pop. <Link to="/" className={styles.informations__link}>Confira o line-up em detalhes clicando neste link!</Link>
          </Dropdown>
          <Dropdown
            title='Qual é a classificação etária?'
          />
          <Dropdown
            title='Quais são os setores disponíveis?'
          />
          <Dropdown
            title='Quais são os itens proibidos?'
          />
          <Dropdown
            title='Quais são os itens proibidos?'
          />
        </section>
      </Container>
    </>
  );
}

export default Informations;