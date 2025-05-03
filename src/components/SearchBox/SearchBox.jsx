import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={styles.searchBox}>
      <p className={styles.label}>Find contacts by name</p>
      <input
        type="text"
        className={styles.input}
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
