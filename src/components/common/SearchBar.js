import { useState } from 'react';

import styles from '../../styles/SearchBar.module.css';
import searchIcon from '../../assets/icons/search-icon.svg';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className={styles.searchBarWrapper}>
      <label className={styles.searchBarLabel} htmlFor="searchTerm">
        <span>Filter the list of countries</span>
        <input
          className={styles.searchBarInput}
          type="text"
          id="searchTerm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Filter countries..."
          data-testid="search-input"
        />
        <img
          className={styles.searchBarIcon}
          src={searchIcon}
          alt="search icon"
        />
      </label>
    </div>
  );
}

export default SearchBar;
