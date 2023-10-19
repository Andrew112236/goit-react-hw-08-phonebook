import React from 'react';
import styles from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOperation';
import { Notify } from 'notiflix';
import { getContacts } from '../../redux/contacts/contactsSelectors';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(state => state.filter.filter);

  console.log(contacts);

  const filteredContacts = contacts?.filter(contact => {
    if (typeof contact.name === 'string') {
      return contact.name.toLowerCase().trim().includes(filter.toLowerCase());
    } else {
      return false;
    }
  });

  if (!filteredContacts?.length && filter.toLowerCase()) {
    Notify.warning(
      'No contacts matching your request',
      { delay: 2000 },
      {
        position: 'center-center',
      }
    );
  }
  console.log(filteredContacts);

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {filteredContacts?.map(({ id, name, number }) => (
        <li key={id} className={styles.label}>
          <p>
            {name}: {number}
          </p>
          <button
            className={styles.button}
            type="button"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
