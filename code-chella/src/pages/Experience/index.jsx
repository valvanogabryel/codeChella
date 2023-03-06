import Banner from "components/Banner";
import Container from "components/Container/Container";
import InformationsSection from "components/InformationsSection";

const Experience = () => {
  return (
    <>
      <Banner page='experience' />
      <Container>
        <InformationsSection
          title='Acessibilidade e Inclusão'
          page='experience'
          id={1}
        >
          Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos!  Isso está presente no  espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile, visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e crianças!
        </InformationsSection>
        <InformationsSection
          title='Sustentabilidade'
          page='experience'
          id={2}
        >
          Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo.
        </InformationsSection>
        <InformationsSection
          title='Atrações'
          page='experience'
          id={3}
        >
          Intervenções artísticas e culturais para todos os gostos! Durante os intervalos dos shows, nossa experiência contará com recreação para crianças, oficina de cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de alimentação, roda gigante e outros brinquedos!
        </InformationsSection>
      </Container>
    </>
  );
}

export default Experience;