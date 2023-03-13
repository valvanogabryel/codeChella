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

          >
            A partir de 16 anos, todo mundo pode entrar. De 13 a 15 anos, tem que estar acompanhado dos pais ou responsáveis legais. Menores de 10 anos não podem entrar.
          </Dropdown>
          <Dropdown
            title='Quais são os setores disponíveis?'
          >
            Pista Comum
            <br />
            Pista Premium
            <br />
            Cadeiras Térreo
            <br />
            Cadeiras Superiores
            <br />
            <br />
            Para mais informações, confira a <Link to='/sectors' className={styles.informations__link}>página de setores</Link>
          </Dropdown>
          <Dropdown
            title='Quais são os itens proibidos?'
          >
            Garrafas, latas, bebidas, utensílios de armazenagem, embalagens rígidas com tampa, capacetes, cadeiras ou bancos, armas de fogo e armas brancas, objetos pontiagudos, cortantes e/ou perfurantes, correntes e cinturões, fogos de artifício, objetos de vidro, substâncias inflamáveis, cigarro eletrônico, corrosivas e ou tóxicas, revistas, jornais, livros e copo térmico ou similares.
          </Dropdown>
          <Dropdown
            title='Quem tem direito a meia-entrada?'
          >
            De acordo com a Lei Federal, têm direito ao benefício da meia-entrada aqueles que preencherem os requisitos e apresentarem os documentos que comprovem.
          </Dropdown>
        </section>
      </Container>
    </>
  );
}

export default Informations;