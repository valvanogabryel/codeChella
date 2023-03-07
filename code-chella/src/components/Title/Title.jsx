import classNames from 'classnames';
import { JackInTheBox } from 'react-awesome-reveal';
import styles from './Title.module.css';

const Title = ({ children, font = 'typography' }) => {
    return (
        <JackInTheBox triggerOnce>
            <h1 className={classNames({
                [styles.title]: true,
                [styles[`title--${font}`]]: true
            })}>{children}</h1>
        </JackInTheBox>
    );
}

export default Title;