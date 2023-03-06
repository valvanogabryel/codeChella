import { ReactComponent as TicketIcon } from 'components/Button/icons/ticket_icon.svg';
import { ReactComponent as ArrowIcon } from 'components/Button/icons/arrow_icon.svg';

import styles from './Button.module.css';
import 'animate.css';

const Button = ({ children, page }) => {
  return (
    <button
      type="button"
      className={styles.button}
      onMouseOver={(event) => { event.target.className = `${styles.button} animate__animated animate__bounce` }}
    >
      {children}
      {
        page === 'home' ?
          <TicketIcon />
          :
          <ArrowIcon />
      }
    </button>
  );
}

export default Button;