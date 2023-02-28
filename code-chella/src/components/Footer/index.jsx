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
            <div>
                <BlackLogo style={{
                    filter: `brightness(0.2)`
                }} />
            </div>
            <div>
                <p>Acesse nossas redes:</p>
                <ul>
                    {socialMedias.map((Media, index) => (
                        <li key={index}><Link><Media /></Link></li>
                    ))}
                </ul>
            </div>
            <div>
                <p>Desenvolvido por <Link>Gabryel Valvano</Link>.</p>
                <p>Projeto fictício sem fins comerciais.</p>
            </div>
        </footer>
    );
}

export default Footer;