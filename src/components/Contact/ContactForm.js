import FormControl from "./FormControl";
import React, {useState} from "react";
import styles from './ContactForm.module.css';
import Modal from '../UI/Modal';

const ContactForm = (props) => {

    const [userName, setStateUserName] = useState('');
    const [age, setStateAge] = useState('');
    const [message, setStateMessage] = useState('');
    const [valid, setStateValid] = useState(true);

    const setUserName = (aValue) => {
        setStateUserName(aValue);
    }

    const setAge = (aValue) => {
        setStateAge(aValue);
    }

    const submitContact = event => {
        event.preventDefault();
        if (userName.trim().length === 0)
        {
            setStateMessage('Especifique un nombre');
            setStateValid(false);
            return;
        }
        if (age.trim().length === 0)
        {
            setStateMessage('Especifique una edad');
            setStateValid(false);
            return;
        }
        if (Number(age) < 0) {
            setStateMessage('Especifique una edad mayor a 0');
            setStateValid(false);
            return;
        }
        const contact = {
            name : userName,
            age: age,
            key: Math.random().toString()
        };
        props.onSubmitContact(contact);
        setStateUserName('');
        setStateAge('');
    };

    return (
      <React.Fragment>
          {!valid && <Modal message={message}></Modal>}
          <FormControl label="Username" onChange={setUserName} initialValue={userName} type="text"></FormControl>
          <FormControl label="Age (Years)" onChange={setAge} initialValue={age} type="number"></FormControl>
          <button className={styles.button} type="submit" onClick={submitContact}>Add User</button>
      </React.Fragment>
    );
}

export default ContactForm;