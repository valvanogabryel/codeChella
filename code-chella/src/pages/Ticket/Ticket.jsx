import Banner from "components/Banner";
import Container from "components/Container/Container";
import TicketCard from "components/TicketCard/TicketCard";
import Title from "components/Title/Title";
import { useLocation } from "react-router-dom";


const Ticket = () => {
  const location = useLocation();
  const { state } = location;

  const { fullName,
    ticketType,
  } = state;

  return (
    <>
      <Banner page='user' />
      <Container>
        <Title>Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</Title>
        <TicketCard name={fullName} sector={ticketType} />
      </Container>
    </>
  );
}

export default Ticket;