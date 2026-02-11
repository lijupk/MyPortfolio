import { FaArrowUp } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerText}>
                <p>Copyright &copy; 2024 Liju Pullely Kochappan | All Rights Reserved.</p>
            </div>

            <div className={styles.footerIconTop}>
                <a href="#home"><FaArrowUp /></a>
            </div>
        </footer>
    );
};

export default Footer;
