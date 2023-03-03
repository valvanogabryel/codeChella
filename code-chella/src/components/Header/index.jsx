import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { useState } from 'react';
import {
  HiMenu,
  HiMenuAlt2
} from 'react-icons/hi';
import styles from './Header.module.css';
import MenuList from './MenuList';
import classNames from 'classnames';
import { Link } from 'react-router-dom';


const Header = () => {
  const [isActive, setMode] = useState(false);

  return (
    <header className={styles.header}>
      <Link to='/' style={{ display: 'contents' }}>
        <Logo
          className={styles.header__logo}
          style={{ zIndex: 1 }}
          to='/'
        />
      </Link>
      {
        isActive ?
          <>
            <HiMenuAlt2
              color='white'
              size={32}
              onClick={() => setMode(!isActive)}
              className={classNames({
                [styles.header__menu]: true,
                [styles['header__menu--active']]: isActive
              })}
            />
            <MenuList />
          </>
          :
          <HiMenu
            color='white'
            size={32}
            onClick={() => setMode(!isActive)}
            className={classNames({
              [styles.header__menu]: true,
              [styles['header__menu--active']]: isActive
            })}
          />
      }
      <div className={styles.menu__wrapper}>
        <MenuList />
      </div>

    </header>
  );
}

export default Header;