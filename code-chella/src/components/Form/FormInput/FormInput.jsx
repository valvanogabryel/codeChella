import { useState } from 'react';
import styles from './FormInput.module.css';

const FormInput = ({ type, label, name, onValueChange }) => {
  const [value, setValue] = useState('');

  const handleValueChange = event => {
    const newValue = event.target.value;
    setValue(newValue);
    onValueChange(newValue);
  }

  return (
    <>
      {
        type === 'select' ?
          <div className={styles.input__container}>
            <label
              htmlFor="ticket-type"
              className={styles.input__label}
            >
              Tipo de ingresso:
            </label>
            <select
              value={value}
              name="ticket-type"
              id="ticket-type"
              className={styles.input}
              required
              onChange={handleValueChange}
            >
              <option value="">Tipo de ingresso</option>
              <option value="pista comum">Pista Comum</option>
              <option value="pista premium">Pista Premium</option>
              <option value="cadeiras térreo">Cadeiras térreo</option>
              <option value="cadeiras superiores">Cadeiras Superiores</option>
              <option value="rampas">Rampas</option>
            </select>
          </div>
          :
          <div className={styles.input__container}>
            <label
              htmlFor={name}
              className={styles.input__label}
            >
              {label}
            </label>
            <input
              type={type}
              name={name}
              id={name}
              className={styles.input}
              required
              value={value}
              onChange={handleValueChange}
            />
          </div>
      }
    </>
  );
}

export default FormInput;