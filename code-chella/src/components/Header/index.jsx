import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { useEffect, useState } from 'react';
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      if (scrollTop > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function preventScrolling() {
    if (isActive) {
      document.body.style.overflow = 'scroll';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }

  return (
    <div className={`${scrolled ? 'scrolled' : ''}`}>


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
                onClick={() => {
                  setMode(!isActive);
                  preventScrolling();
                }}
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
              onClick={() => {
                setMode(!isActive);
                preventScrolling();
              }}
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
    </div>
  );
}

export default Header;