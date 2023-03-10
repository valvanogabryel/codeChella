import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './MenuList.module.css';

const MenuList = () => {
  const navigationItems = [
    {
      name: 'A experiência',
      path: '/experience'
    },
    {
      name: 'Mapa de Setores',
      path: '/sectors'
    },
    {
      name: 'Informações',
      path: '/info'
    },
    {
      name: 'Ingresso',
      path: '/ticket'
    }
  ];

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        {
          navigationItems.map((item, index) =>
            <li
              key={index}
              className={styles.navbar__item}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) => (
                  classNames({
                    [styles.link]: true,
                    [styles['link--active']]: isActive
                  })
                )
                }
              >{item.name}</NavLink>
            </li>
          )
        }
      </ul>
    </nav >
  );
}

export default MenuList;