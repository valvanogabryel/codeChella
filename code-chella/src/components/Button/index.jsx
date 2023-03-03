import { ReactComponent as TicketIcon } from 'components/Button/icons/local_activity.svg';
import styles from './Button.module.css';
import 'animate.css';

const Button = ({ children }) => {
    return (
        <button
            type="button"
            className={styles.button}
            onMouseOver={(event) => { event.target.className = `${styles.button} animate__animated animate__bounce` }}
        >
            {children}
            <TicketIcon />
        </button>
    );
}

export default Button;