import styles from "./SearchBar.module.css";

export default function SearchBar({ searchTerm, onSearch }) {
  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search for a Podcast..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />

      <button
        type="button"
        className={styles.searchButton}
        onClick={() => onSearch(searchTerm)}
        aria-label="Search podcasts"
      >
        Search
      </button>
    </div>
  );
}
