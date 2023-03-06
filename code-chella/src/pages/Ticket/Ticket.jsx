import Container from "components/Container/Container";

import Banner from "components/Banner";
import Title from "components/Title/Title";
import Form from "components/Form/Form";

const Ticket = () => {
  return (
    <>
      <Banner page='ticket' />
      <Container>
        <Title>Preencha o formulário a seguir:</Title>
        <Form />
      </Container>
    </>
  );
}

export default Ticket;