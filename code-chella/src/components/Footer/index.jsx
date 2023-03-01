import { ReactComponent as BlackLogo } from 'assets/images/logo.svg';
import {
  BsWhatsapp,
  BsTwitch,
  BsInstagram,
  BsTwitter
} from 'react-icons/bs';
import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

const Footer = () => {
  const socialMedias = [
    BsWhatsapp,
    BsTwitch,
    BsInstagram,
    BsTwitter
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logo}>
        <BlackLogo style={{
          filter: `brightness(0.2)`
        }} />
      </div>
      <div className={styles.medias__container}>
        <p className={styles.medias__text}>Acesse nossas redes:</p>
        <ul className={styles.medias__list}>
          {socialMedias.map((Media, index) => (
            <li
              key={index}
              className={styles.medias}
            >
              <Link>
                <Media />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.disclaimer}>
        <p className={styles.text}>Desenvolvido por <Link>Gabryel Valvano</Link>.</p>
        <p className={styles.text}>Projeto fictício sem fins comerciais.</p>
      </div>
    </footer >
  );
}

export default Footer;