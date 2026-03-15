import styles from "./SortSelect.module.css";

export default function SortSelect({ options, selectedSort, onSelectSort }) {
  return (
    <div className={styles.sortSelect}>
      <label htmlFor="sort-select" className={styles.label}>
        Sort by:
      </label>
      <select
        id="sort-select"
        className={styles.select}
        value={selectedSort}
        onChange={(e) => onSelectSort(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.key} value={option.key}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
