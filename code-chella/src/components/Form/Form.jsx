import Button from "components/Button";
import FormInput from "./FormInput/FormInput";

import styles from './Form.module.css';

const Form = () => {
  return (
    <section className={styles.form__container}>
      <form>
        <FormInput
          type='text'
          label='Nome Completo:'
          name='name'
        />
        <FormInput
          type='email'
          label='Email:'
          name='email'
        />
        <FormInput type='select' />
        <FormInput
          type='date'
          label='Data de nascimento:'
          name='birthdate'
        />
        <div className={styles.button__wrapper}>
          <Button>Avançar!</Button>
        </div>
      </form>
    </section>
  );
}

export default Form;