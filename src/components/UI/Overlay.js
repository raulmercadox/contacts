import styles from './Overlay.module.css';

const Overlay = (props) => {
    return (
    <div className={styles.overlay}>
        <div className={styles.title}>Mensaje del Sistema</div>
        <div className={styles.message}>{props.message}</div>
        <div className={styles.buttons}>
            <button className={styles.button}>Cerrar</button>
        </div>
    </div>
    )
}

export default Overlay;