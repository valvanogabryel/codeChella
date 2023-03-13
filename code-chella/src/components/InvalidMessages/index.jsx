import { Fade } from "react-awesome-reveal";
import styles from './InvalidMessages.module.css';


const InvalidMessages = ({ isNotValid, isValidDate }) => {
  return (
    <Fade cascade>
      <div className={styles.error__container}>
        {
          isNotValid &&
          <span className={styles.error__text}>- Preencha os dados corretamente -</span>
        }
        {
          !isValidDate &&
          <span className={styles.error__text}>- Insira uma data válida -</span>
        }
      </div>
    </Fade>
  );
}

export default InvalidMessages;