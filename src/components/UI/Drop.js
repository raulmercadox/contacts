import styles from './Drop.module.css';

const Drop = (props) => {
    return <div className={styles.drop} onClick={props.onClose}>

    </div>
};

export default Drop;