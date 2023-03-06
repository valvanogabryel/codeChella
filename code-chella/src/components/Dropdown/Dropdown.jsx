import { RiArrowDropDownFill as DropDownIcon } from 'react-icons/ri';
import styles from './Dropdown.module.css';

const Dropdown = ({ title, children }) => {
  return (
    <div className={styles.information}>
      <div className={styles.information__header}>
        <h2 className={styles.information__title}>{title}</h2>
        <DropDownIcon
          size={48}
          className={styles.dropdown__icon}
        />
      </div>
      {
        children ?
          <p className={styles.information__text}>{children}</p>
          :
          <></>
      }
    </div>
  );
}

export default Dropdown;