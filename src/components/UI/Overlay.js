import styles from './Overlay.module.css';

const Overlay = (props) => {
    return (
    <div id='overlay' className={styles.overlay}>
        <div className={styles.title}>Mensaje del Sistema</div>
        <div className={styles.message}>{props.message}</div>
        <div className={styles.buttons}>
            <button className={styles.button} onClick={props.onClose}>Cerrar</button>
        </div>
    </div>
    )
}

export default Overlay;