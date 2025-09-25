import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { ContactSchema } from "../ContactSchema";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

import css from "./ContactForm.module.css";

export default function ContactForm() {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, helpers) => {
    dispatch(addContact(values));
    helpers.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameId}>
          Name
        </label>
        <Field
          className={css.field}
          type="text"
          name="name"
          placeholder="Name"
          id={nameId}
        />
        <ErrorMessage name="name" component="span" />
        <label className={css.label} htmlFor={numberId}>
          Number
        </label>
        <Field
          className={css.field}
          type="tel"
          name="number"
          placeholder="Number"
          id={numberId}
        />
        <ErrorMessage name="number" component="span" />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
