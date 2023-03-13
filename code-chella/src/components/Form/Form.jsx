import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "components/Button";
import FormInput from "./FormInput/FormInput";

import styles from './Form.module.css';
import validate from "utils/validate";
import InvalidMessages from "components/InvalidMessages";

const Form = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [ticketType, setTicketType] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const navigate = useNavigate();

  const formValues = {
    fullName,
    email,
    ticketType,
    birthDate
  };

  const handleFullNameChange = (value) => {
    setFullName(value);
  }

  const handleEmailChange = (value) => {
    setEmail(value);
  }

  const handleTicketTypeChange = value => {
    setTicketType(value);
  }

  const handleBirthDateChange = value => {
    setBirthDate(value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    navigate(`/user/`, { state: formValues });
  };

  const isValid = validate(formValues);

  return (
    <section className={styles.form__container}>
      <form onSubmit={handleFormSubmit}>
        <FormInput
          type='text'
          label='Nome Completo:'
          name='fullName'
          onValueChange={handleFullNameChange}
        />
        <FormInput
          type='email'
          label='Email:'
          name='email'
          onValueChange={handleEmailChange}
        />
        <div className={styles.form__grid}>
          <FormInput type='select' onValueChange={handleTicketTypeChange} />
          <FormInput
            type='date'
            label='Data de nascimento:'
            name='birthDate'
            onValueChange={handleBirthDateChange}
          />
        </div>
        <div className={styles.button__wrapper}>
          <Button
            type='submit'
            isValid={isValid}
          >
            Avançar!
          </Button>
        </div>
        {
          isValid.isNotValid || !isValid.isDateValid ?
            <InvalidMessages
              isNotValid={isValid.isNotValid}
              isValidDate={isValid.isDateValid}
            />
            :
            <></>
        }
      </form>
    </section >
  );
}

export default Form;