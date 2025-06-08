import { useMemo, useEffect } from 'react';
import { useDebounce } from "use-debounce";
import { useDispatch, useSelector } from "react-redux";
import { addContact, fetchContacts } from "../redux/contactsOps";
import { selectContacts, selectLoading, selectError } from "../redux/contactsSlice";
import { changeFilter, selectNameFilter } from "../redux/filtersSlice";
import ContactForm from './ContactForm';
import SearchBox from './SearchBox';
import ContactList from './ContactList';
import clsx from 'clsx';
import css from './App.module.css';

function App() {
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
      <SearchBox text={filter} onChange={handleFilterChange}/>
      {loading && <p>Loading contacts, please wait...</p>}
      {error && <p>Error message</p>}
      <ContactList contacts={visibleNames} />
</div>
  )
}

export default App
