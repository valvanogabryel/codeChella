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
    {
      media: BsWhatsapp,
      path: 'https://web.whatsapp.com/',
      id: 1
    },
    {
      media: BsTwitch,
      path: 'https://www.twitch.tv/',
      id: 2
    },
    {
      media: BsInstagram,
      path: 'https://www.instagram.com/',
      id: 3
    },
    {
      media: BsTwitter,
      path: 'https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D',
      id: 4
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>

        <div className={styles.footer__logo}>
          <BlackLogo style={{
            filter: `brightness(0.3)`
          }} />
        </div>
        <div className={styles.medias__container}>
          <p className={styles.medias__text}>Acesse nossas redes:</p>
          <ul className={styles.medias__list}>
            {socialMedias.map((media) => (
              <li
                key={media.id}
                className={styles.medias}
              >
                <Link
                  to={media.path}
                  target='_blank'
                >
                  <media.media
                    size={32}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.disclaimer}>
        <p className={styles.text}>Desenvolvido por
          <Link style={{
            fontStyle: 'italic',
            cursor: 'pointer',
            textDecoration: 'underline'
          }}
            to='https://github.com/valvanogabryel'
            target='_blank'
          >
            Gabryel Valvano
          </Link>.
        </p>
        <p className={styles.text}>Projeto fictício sem fins comerciais.</p>
      </div>
    </footer >
  );
}

export default Footer;