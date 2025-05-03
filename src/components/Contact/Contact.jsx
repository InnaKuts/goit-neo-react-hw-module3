import { FaUser, FaPhone } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
  return (
    <div className={styles.contact}>
      <div className={styles.info}>
        <div className={styles.field}>
          <FaUser className={styles.icon} />
          <p>{name}</p>
        </div>
        <div className={styles.field}>
          <FaPhone className={styles.icon} />
          <p>{number}</p>
        </div>
      </div>
      <button type="button" className={styles.deleteBtn} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
