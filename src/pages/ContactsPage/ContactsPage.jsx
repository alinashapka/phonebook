import { useMemo, useEffect } from 'react';
import { useDebounce } from "use-debounce";
import { useDispatch, useSelector } from "react-redux";
import { addContact, fetchContacts } from "../../redux/contacts/operations";
import { selectContacts, selectLoading, selectError } from "../../redux/contacts/selectors";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import clsx from 'clsx';
import css from './ContactsPage.module.css';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addNewContacts = (addedContact) => {
    dispatch(addContact(addedContact));
  };

 const handleFilterChange = (value) => {
    dispatch(changeFilter(value));
  };

  const [debouncedFilter] = useDebounce(filter, 300);

const visibleNames = useMemo(() => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(debouncedFilter.toLowerCase())
  );
}, [debouncedFilter, contacts]);

  
    return (
        <div className={clsx(css.container)}>
            <h1 className={clsx(css.title)}>Phonebook</h1>
            <ContactForm onSubmit={addNewContacts} />
            <SearchBox text={filter} onChange={handleFilterChange} />
            {loading && <p>Loading contacts, please wait...</p>}
            {error && <p>Error message</p>}
            <ContactList contacts={visibleNames} />
        </div>
    );
};

