// React
import { useLocation } from "react-router-dom";
// Components
import Banner from "components/Banner";
import Container from "components/Container/Container";
import TicketCard from "components/TicketCard/TicketCard";
import Title from "components/Title/Title";
// Styles
import styles from './Ticket.module.css';

const Ticket = () => {
  const location = useLocation();
  const { state } = location;

  const { fullName,
    ticketType,
  } = state;

  const page = 'user';

  return (
    <>
      <Banner page={page} />
      <Container page={page}>
        <Title font='raleway'>Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</Title>
        <TicketCard name={fullName} sector={ticketType} />
        <div className={styles.separator}>
          {/* Blank */}
        </div>
      </Container>
    </>
  );
}

export default Ticket;