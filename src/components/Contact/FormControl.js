import styles from './FormControl.module.css';

const FormControl = (props) => {
    const setValue = e => {
        props.onChange(e.target.value);
    }

    return (
        <div className={styles["form-control"]}>
            <label>{props.label}</label>
            <input type={props.type} onChange={setValue} value={props.initialValue}/>
        </div>
    );
};

export default FormControl;