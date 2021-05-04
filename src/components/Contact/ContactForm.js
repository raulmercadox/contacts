import React, {useState, useRef} from "react";
import styles from './ContactForm.module.css';
import Modal from '../UI/Modal';

const ContactForm = (props) => {

    // const [userName, setStateUserName] = useState('');
    // const [age, setStateAge] = useState('');
    const [message, setStateMessage] = useState('');
    const [valid, setStateValid] = useState(true);
    const theNameRef = useRef();
    const theAgeRef = useRef();

    // const setUserName = (aValue) => {
    //     setStateUserName(aValue);
    // }
    //
    // const setAge = (aValue) => {
    //     setStateAge(aValue);
    // }

    const onClose = () => {
        setStateValid(true);
    }

    const submitContact = event => {
        event.preventDefault();
        const theName = theNameRef.current.value;
        const theAge = theAgeRef.current.value;
        if (theName.trim().length === 0)
        {
            setStateMessage('Especifique un nombre');
            setStateValid(false);
            return;
        }
        if (theAge.trim().length === 0)
        {
            setStateMessage('Especifique una edad');
            setStateValid(false);
            return;
        }
        if (Number(theAge) < 0) {
            setStateMessage('Especifique una edad mayor a 0');
            setStateValid(false);
            return;
        }
        const contact = {
            name : theName,
            age: theAge,
            key: Math.random().toString()
        };
        props.onSubmitContact(contact);
        // setStateUserName('');
        // setStateAge('');
        theNameRef.current.value = '';
        theAgeRef.current.value = '';
    };

    return (
      <React.Fragment>
          {!valid && <Modal message={message} onClose={onClose}></Modal>}
          <div className={styles["form-control"]}>
              <label>Username</label>
              <input type="text" ref={theNameRef} />
          </div>
          <div className={styles["form-control"]}>
              <label>Age (Years)</label>
              <input type="number" ref={theAgeRef}/>
          </div>
          <button className={styles.button} type="submit" onClick={submitContact}>Add User</button>
      </React.Fragment>
    );
}

export default ContactForm;