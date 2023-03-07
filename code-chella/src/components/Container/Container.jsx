import classNames from 'classnames';
import styles from './Container.module.css';

const Container = ({ children, page }) => {
    return (
        <main className={classNames({
            [styles.container]: true,
            [styles[`container--${page}`]]: true
        })}>
            {children}
        </main>
    );
}

export default Container;