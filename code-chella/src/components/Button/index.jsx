// React
import { ReactComponent as TicketIcon } from 'components/Button/icons/ticket_icon.svg';
import { ReactComponent as ArrowIcon } from 'components/Button/icons/arrow_icon.svg';
// Utils
import classNames from 'classnames';
// Styles
import styles from './Button.module.css';

const Button = ({ children, type, isValid }) => {
  const {
    isNotValid,
    isDateValid
  } = isValid;

  const isSubmit = () => {
    return type === 'submit';
  }
  return (
    isSubmit() ?
      <button
        type='submit'
        className={classNames({
          [styles.button]: true,
          [styles['button--disabled']]: isNotValid || !isDateValid

        })}
        disabled={isNotValid || !isDateValid}
      >
        {children}
        <ArrowIcon />
      </button>
      :
      <button
        type='button'
        className={styles.button}
      >
        {children}
        <TicketIcon />
      </button>

  );
}

export default Button;