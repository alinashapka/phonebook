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
    <div className={css.container}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Enter name"
      ></input>
    </div>
  );
}
