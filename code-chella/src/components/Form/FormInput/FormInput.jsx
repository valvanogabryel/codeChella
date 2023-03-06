import styles from './FormInput.module.css';

const FormInput = ({ type, label, name }) => {
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
                            name="ticket-type"
                            id="ticket-type"
                            className={styles.input}
                        >
                            <option value="">Tipo de ingresso</option>
                            <option value="common">Pista Comum</option>
                            <option value="premium">Pista Premium</option>
                            <option value="chairsup">Cadeiras térreo</option>
                            <option value="chairsdown">Cadeiras Superiores</option>
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
                        />
                    </div>
            }
        </>
    );
}

export default FormInput;