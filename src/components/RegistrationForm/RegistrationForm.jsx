import { Formik, Form, Field } from "formik";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field className={css.field} type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <Field className={css.field} type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.field} type="password" name="password" />
        </label>
        <button className={css.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
