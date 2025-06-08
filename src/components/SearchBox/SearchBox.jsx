import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

import clsx from "clsx";
import css from "./SearchBox.module.css";

export default function SearchBox() {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleChange = (event) => {
        dispatch(changeFilter(event.target.value));
    };

    return (
        <div className={clsx(css.container)}>
            <p className={clsx(css.text)}>Find contacts by name</p>
            <input className={clsx(css.input)} type="text" value={filter} onChange={handleChange}></input>
        </div>
    );
};