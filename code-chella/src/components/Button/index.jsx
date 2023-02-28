import { ReactComponent as TicketIcon } from 'components/Button/icons/local_activity.svg';
import styles from './Button.module.css';

const Button = ({ children }) => {
    return (
        <button
            type="button"
            className={styles.button}
        >
            {children}
            <TicketIcon />
        </button>
    );
}

export default Button;