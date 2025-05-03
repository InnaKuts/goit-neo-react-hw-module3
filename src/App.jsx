import { useState, useEffect } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { nanoid } from "nanoid";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts
      ? JSON.parse(savedContacts)
      : [
          { id: nanoid(), name: "Rosie Simpson", number: "459-12-56" },
          { id: nanoid(), name: "Hermione Kline", number: "443-89-12" },
          { id: nanoid(), name: "Eden Clements", number: "645-17-79" },
          { id: nanoid(), name: "Annie Copeland", number: "227-91-26" },
        ];
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleDeleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onAddContact={handleAddContact} />
          <SearchBox value={filter} onChange={handleFilterChange} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={handleDeleteContact}
          />
        </div>
      </div>
    </>
  );
}

export default App;
