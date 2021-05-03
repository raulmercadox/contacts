import FormControl from "./FormControl";
import {useState} from "react";
import styles from './ContactForm.module.css';

const ContactForm = (props) => {

    const [userName, setStateUserName] = useState('');
    const [age, setStateAge] = useState('');
    const [message, setStateMessage] = useState('');

    const setUserName = (aValue) => {
        setStateUserName(aValue);
    }

    const setAge = (aValue) => {
        setStateAge(aValue);
    }

    const submitContact = event => {
        event.preventDefault();
        let valid = true;
        if (userName.trim().length === 0)
        {
            setStateMessage('Especifique un nombre');
            valid = false;
        }
        if (age.trim().length === 0)
        {
            setStateMessage('Especifique una edad');
            valid = false;
        }
        if (Number(age) < 0)
        {
            setStateMessage('Especifique una edad mayor a 0');
            valid = false;
        }
        if (!valid)
        {

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
      <div>
          <FormControl label="Username" onChange={setUserName} initialValue={userName} type="text"></FormControl>
          <FormControl label="Age (Years)" onChange={setAge} initialValue={age} type="number"></FormControl>
          <button className={styles.button} type="submit" onClick={submitContact}>Add User</button>
      </div>
    );
};

export default ContactForm;