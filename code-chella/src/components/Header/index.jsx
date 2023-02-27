import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { AiOutlineMenu } from 'react-icons/ai';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <AiOutlineMenu />
        </header>
    );
}

export default Header;