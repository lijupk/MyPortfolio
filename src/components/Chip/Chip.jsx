import styles from './Chip.module.css';

const ChipRow = ({ children }) => {
    return (
        <div className={styles.chipRow}>
            {children}
        </div>
    );
};

const Chip = ({ text }) => {
    return (
        <span className={styles.chip}>
            {text}
        </span>
    );
};

export { ChipRow, Chip };
