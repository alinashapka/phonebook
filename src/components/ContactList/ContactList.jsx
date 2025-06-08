import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import clsx from "clsx";
import css from "./ContactList.module.css";

export default function ContactList() {
    const filteredContacts = useSelector(selectFilteredContacts);

    return (<div className={clsx(css.wrapper)}>
        <ul className={clsx(css.list)}>
        {filteredContacts.map(contact => (<li className={clsx(css.item)} key={contact.id}>
            <Contact contact={contact} />
        </li>))}
    </ul>
        </div>)
};