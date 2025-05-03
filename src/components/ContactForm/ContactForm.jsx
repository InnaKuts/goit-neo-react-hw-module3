import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .max(50, "Name must be at most 50 characters")
        .required("Name is required"),
      number: Yup.string()
        .min(3, "Number must be at least 3 characters")
        .max(50, "Number must be at most 50 characters")
        .required("Number is required")
        .matches(
          /^[0-9-]+$/,
          "Phone number must contain only digits and dashes"
        ),
    }),
    onSubmit: (values, { resetForm }) => {
      onAddContact(values);
      resetForm();
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter name"
          className={styles.input}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className={styles.error}>{formik.errors.name}</div>
        ) : null}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="number" className={styles.label}>
          Number
        </label>
        <input
          id="number"
          name="number"
          type="text"
          placeholder="Enter number"
          className={styles.input}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.number}
        />
        {formik.touched.number && formik.errors.number ? (
          <div className={styles.error}>{formik.errors.number}</div>
        ) : null}
      </div>

      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
