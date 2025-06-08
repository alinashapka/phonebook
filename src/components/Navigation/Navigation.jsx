import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    const getActiveLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

    return (
        <nav className={clsx(css.wrapper)}>
            <NavLink className={getActiveLinkClass} to="/">Home</NavLink>
            {isLoggedIn && (
                <NavLink className={getActiveLinkClass} to="/contacts">Contacts</NavLink>
            )}
        </nav>
    );
}