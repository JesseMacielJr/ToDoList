import React from "react";
import styles from "./Search.module.css";

const Search = ({ search, setSearch }) => {
  return (
    <div className={styles.search}>
      <h2>Pesquisar</h2>
      <input
        type="text"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        placeholder="Digite para pesquisar"
      />
    </div>
  );
};

export default Search;
