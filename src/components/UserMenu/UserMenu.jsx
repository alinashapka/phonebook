import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

export default function UserMenu() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const handleLogOut = () => {
        dispatch(logOut());
    };

    return (
        <div className={clsx(css.wrapper)}>
            <p className={clsx(css.greeting)}>Welcome, {user.name}</p>
            <button type="button" onClick={handleLogOut}>Log Out</button>
        </div>
    );
}