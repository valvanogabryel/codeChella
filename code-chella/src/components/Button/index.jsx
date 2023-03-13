// React
import { ReactComponent as TicketIcon } from 'components/Button/icons/ticket_icon.svg';
import { ReactComponent as ArrowIcon } from 'components/Button/icons/arrow_icon.svg';
// Components
import InvalidMessages from 'components/InvalidMessages';
// Utils
import classNames from 'classnames';
// Styles
import styles from './Button.module.css';

const Button = ({ children, type, formFields }) => {
  if (type === 'submit') {
    const {
      fullName,
      email,
      birthDate
    } = formFields;

    const isNotValid = fullName.length < 8 || email.length < 10;

    const isValidDate = (birthDate) => {
      let regEx = /^\d{4}-\d{2}-\d{2}$/;

      if (!birthDate.match(regEx)) return false;

      let date = new Date(birthDate);
      let dateNum = date.getTime();

      if (!dateNum && dateNum !== 0) return false;

      if (date.getFullYear() < 1900) return false;

      return date.toISOString().slice(0, 10) === birthDate;
    }

    return (
      <>
        <button
          type={type}
          className={classNames({
            [styles.button]: true,
            [styles['button--disabled']]: isNotValid || !isValidDate(birthDate)
          })}
          disabled={isNotValid || !isValidDate(birthDate)}
        >
          {children}
          <ArrowIcon />
        </button>
        <InvalidMessages
          isNotValid={isNotValid}
          isValidDate={isValidDate(birthDate)}
        />
      </>
    );
  }

  return (
    <>
      <button
        type={type}
        className={classNames({
          [styles.button]: true,
        })}
      >
        {children}
        <TicketIcon />
      </button>
    </>
  );
}

export default Button;