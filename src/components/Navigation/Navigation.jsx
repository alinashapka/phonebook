import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav className={clsx(css.wrapper)}>
            <NavLink className={clsx(css.link)} to="/">Home</NavLink>
            {isLoggedIn && (
                <NavLink className={clsx(css.link)} to="/contacts">Contacts</NavLink>
            )}
        </nav>
    );
}