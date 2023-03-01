import Banner from "components/Banner";
import InformationsSection from "components/InformationsSection";

import image1 from 'assets/images/experience/image1.png';
import image2 from 'assets/images/experience/image2.png';
import image3 from 'assets/images/experience/image3.png';

const Experience = () => {
  return (
    <>
      <Banner page='experience' />
      <main>
        <InformationsSection
          title='Acessibilidade e Inclusão'
          page='experience'
          image={image1}>
          Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos!  Isso está presente no  espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile, visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e crianças!
        </InformationsSection>
        <InformationsSection
          title='Sustentabilidade'
          page='experience'
          image={image2}>
          Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo.
        </InformationsSection>
        <InformationsSection
          title='Atrações'
          page='experience'
          image={image3}>
          Intervenções artísticas e culturais para todos os gostos! Durante os intervalos dos shows, nossa experiência contará com recreação para crianças, oficina de cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de alimentação, roda gigante e outros brinquedos!
        </InformationsSection>
      </main>
    </>
  );
}

export default Experience;