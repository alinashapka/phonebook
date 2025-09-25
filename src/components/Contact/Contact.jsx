import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <div className={css.wrapper}>
      <div className={css.subwrapper}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
