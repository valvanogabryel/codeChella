import { ReactComponent as Logo } from 'assets/images/logo.svg';
import qrCode from './image/qrcode.png';
import codeChellaIcon from './image/favicon.png'

import styles from './TicketCard.module.css';

const TicketCard = ({ name, sector }) => {
  return (
    <section className={styles.card__container}>
      <div className={styles.card__logos}>
        <Logo style={{
          filter: `brightness(0.3)`,
          transform: 'scale(0.5)',
          width: 'auto'
        }}
        />
        <img
          src={codeChellaIcon}
          alt=""
          style={{
            filter: `brightness(5)`,
            transform: 'scale(0.3)',
            width: 'auto'
          }}
        />
      </div>
      <div className={styles.teste}>
        <div className={styles.card__qrcode}>
          <img
            src={qrCode}
            alt="QR CODE"
          />
        </div>
        <div className={styles.card__info}>
          <h2 className={styles.card__username}>{name}</h2>
          <p className={styles.card__text}>Ingresso: Cortesia</p>
          <p className={styles.card__text}>Setor: {sector}</p>
          <p className={styles.card__text}>Data: 11/03</p>
          <p className={styles.card__text}>Local: Rio de Janeiro - RJ</p>
        </div>
      </div>
    </section >
  );
}

export default TicketCard;