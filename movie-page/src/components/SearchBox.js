import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from '../styles/SearchBox.module.css';

const SearchBox = (props) => {
  return (
    <div className={styles.searchBox}>
      <FaSearch size={20} />
      e.target.value
      <input
        className={styles.searchBox}
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder='Type to search...'></input>
    </div>
  );
};

export default SearchBox;
