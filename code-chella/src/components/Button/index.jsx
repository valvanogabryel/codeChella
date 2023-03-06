import { ReactComponent as TicketIcon } from 'components/Button/icons/ticket_icon.svg';
import { ReactComponent as ArrowIcon } from 'components/Button/icons/arrow_icon.svg';

import styles from './Button.module.css';
import 'animate.css';

const Button = ({ children, page, type }) => {
  return (
    <button
      type={type}
      className={styles.button}
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