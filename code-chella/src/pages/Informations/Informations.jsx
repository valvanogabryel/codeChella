import Banner from "components/Banner";
import Container from "components/Container/Container";
import Dropdown from "components/Dropdown/Dropdown";
import styles from './Informations.module.css';

const Informations = () => {
  return (
    <>
      <Banner page='informations' />
      <Container>
        <h1 className={styles.title}>Perguntas Frequentes:</h1>
        <section className={styles.informations__container}>
          <Dropdown
            title='Quais serão as atrações?'
            text='Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o segundo (12/03) com bandas pop. Confira o line-up em detalhes clicando neste link!'
          />
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