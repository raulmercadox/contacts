import style from './App.module.css';
import Card from './components/UI/Card';
import {useState} from "react";
import ContactForm from "./components/Contact/ContactForm";

function App() {
    const [contacts, setStateContacts] = useState([]);

    const addContact = (contact) => {
        setStateContacts(prevValue => [...prevValue, contact]);
    }

    const listContacts = <Card>
    {contacts.map(contact => {
        return <input className={style.contact} type='text' key={contact.key} value={`${contact.name} (${contact.age} years old)`} disabled/>
    })}
    </Card>

    return (
    <div className={style.App}>
        <Card>
            <ContactForm onSubmitContact={addContact}></ContactForm>
        </Card>
        {contacts.length > 0 && listContacts}
    </div>
    );
}

export default App;