import React, { memo, useRef } from "react";
import { useHistory } from "react-router-dom";
import styles from "./search_header.module.css";

const SearchHeader = memo(({ onSearch, selectVideo }) => {
  const history = useHistory();
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
    history.push("/");
  };
  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const goHome = () => {
    selectVideo(null);
    history.push("/");
    window.location.reload();
  };

  return (
    <header className={styles.container}>
      <div className={styles.home}>
        <img
          className={styles.home__icon}
          src='images/logo.png'
          alt='logo'
        ></img>
        <span className={styles.title} onClick={goHome}>
          YouTube
        </span>
      </div>

      <section className={styles.searchContainer}>
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
      </section>
    </header>
  );
});

export default SearchHeader;
