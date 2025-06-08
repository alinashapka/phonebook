import { Formik, Form, Field } from "formik";
import clsx from "clsx";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(register(values));
        actions.resetForm();
    };

    return (
        <Formik initialValues={{
            name: "",
            email: "",
            password: "",
        }} onSubmit={handleSubmit} className={clsx(css.container)}>
            <Form className={clsx(css.form)} autoComplete="off">
                <label className={css.label}>
          Username
          <Field type="text" name="name" />
        </label>
                <label className={clsx(css.label)}>
                    Email
                    <Field type="email" name="email" />
                </label>
                <label className={clsx(css.label)}>
                    Password
                    <Field type="password" name="password" />
                </label>
                <button type="submit">Register</button>
            </Form>
        </Formik>
    );
}