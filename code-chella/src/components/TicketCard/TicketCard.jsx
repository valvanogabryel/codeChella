import { ReactComponent as Logo } from 'assets/images/logo.svg';
import qrCode from './image/qrcode.png';

const TicketCard = ({ name, sector }) => {
  return (
    <section>
      <Logo />
      <img
        src={qrCode}
        alt="QR CODE"
      />
      <div>
        <h2>{name}</h2>
        <p>Ingresso: Cortesia</p>
        <p>Setor: {sector}</p>
        <p>Data: 11/03</p>
        <p>Local: Rio de Janeiro - RJ</p>
      </div>
    </section>
  );
}

export default TicketCard;