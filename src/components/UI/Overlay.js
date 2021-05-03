import styles from './Overlay.module.css';

const Overlay = (props) => {
    return (
    <div className={styles.overlay}>
        {props.message}
    </div>
    )
}

export default Overlay;