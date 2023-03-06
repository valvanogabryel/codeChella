import { JackInTheBox } from 'react-awesome-reveal';
import styles from './Title.module.css';

const Title = ({ children }) => {
    return (
        <JackInTheBox triggerOnce>
            <h1 className={styles.title}>{children}</h1>
        </JackInTheBox>
    );
}

export default Title;