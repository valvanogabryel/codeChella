// React
import { useState } from 'react';
// React (Icons)
import { RiArrowDropDownFill as DropDownIcon } from 'react-icons/ri';
import { RiArrowDropUpFill as LiftUpIcon } from 'react-icons/ri';
// Styles
import styles from './Dropdown.module.css';

const Dropdown = ({ title, children }) => {
  const [isActive, setMode] = useState(false);

  const handleMode = () => {
    setMode(!isActive);
  }

  return (
    <div className={styles.information}>
      <div className={styles.information__header}>
        <h2 className={styles.information__title}>{title}</h2>
        {
          isActive ?
            <LiftUpIcon
              size={48}
              className={styles.dropdown__icon}
              onClick={handleMode} />
            :
            <DropDownIcon
              size={48}
              className={styles.dropdown__icon}
              onClick={handleMode}
            />
        }
      </div>
      <div className={styles.information__textWrapper}>
        {
          isActive &&
          <p className={styles.information__text}>{children}</p>
        }
      </div>
    </div>
  );
}

export default Dropdown;