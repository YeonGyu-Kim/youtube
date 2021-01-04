import React, { memo, useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
    console.log(value);
  };
  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={styles.container}>
      <div className={styles.home}>
        <img
          className={styles.home__icon}
          src='images/logo.png'
          alt='logo'
        ></img>
        <span className={styles.title}>YouTubesss</span>
      </div>

      <input
        ref={inputRef}
        className={styles.input}
        type='text'
        placeholder='Search..'
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type='submit' onClick={onClick}>
        <img
          className={styles.searchBtn}
          src='images/search.png'
          alt='search'
        />
      </button>
    </header>
  );
});

export default SearchHeader;
