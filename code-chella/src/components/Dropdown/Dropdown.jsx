import classNames from 'classnames';
import { RiArrowDropDownFill as DropDownIcon } from 'react-icons/ri';
import styles from './Dropdown.module.css';

const Dropdown = ({ title, text }) => {
    return (
        <div className={styles.information}>
            <div className={classNames({
                [styles.information__header]: true,
                [styles['information__header--hasText']]: text
            })}>
                <h2 className={styles.information__title}>{title}</h2>
                <DropDownIcon
                    size={48}
                    className={styles.dropdown__icon}
                />
            </div>
            {
                text ?
                    <p className={styles.information__text}>{text}</p>
                    :
                    <></>
            }
        </div>
    );
}

export default Dropdown;