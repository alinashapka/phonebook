import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

export default function AuthNav() {
    return (
        <div className={clsx(css.wrapper)}>
        <NavLink className={clsx(css.link)} to="/register">Register</NavLink>
            <NavLink className={clsx(css.link)} to="/login">Log In</NavLink>
            </div>
    );
}