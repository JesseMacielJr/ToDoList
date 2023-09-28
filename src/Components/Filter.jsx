import styles from "./Filter.module.css";

const Filter = ({
  filter,
  setFilter,
  sortAlphabetic,
  setSortAlphabetic,
  filterCategory,
  setFilterCategory,
}) => {
  function handleSortAlphabetic(e) {
    const buttonActive = e.target.innerText;

    if (buttonActive === sortAlphabetic) {
      setSortAlphabetic("");
    } else {
      setSortAlphabetic(buttonActive);
    }
  }

  function handleFilterCategory(e) {
    const buttonActive = e.target.innerText;

    if (buttonActive === filterCategory) {
      setFilterCategory("");
    } else {
      setFilterCategory(buttonActive);
    }
  }

  return (
    <div className={styles.filter}>
      <h2>Filtrar</h2>
      <div className={styles["filter-options"]}>
        <div className={styles.filterStatus}>
          <p>Status:</p>
          <select
            value={filter}
            onChange={({ target }) => setFilter(target.value)}
          >
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incompleted">Incompletas</option>
          </select>
        </div>
        <div className={styles.ordemAlfabetica}>
          <p>Ordem alfabética:</p>
          <button
            className={sortAlphabetic === "Asc" ? styles.active : ""}
            onClick={handleSortAlphabetic}
          >
            Asc
          </button>
          <button
            className={sortAlphabetic === "Desc" ? styles.active : ""}
            onClick={handleSortAlphabetic}
          >
            Desc
          </button>
        </div>
        <div className={styles.ordemCategoria}>
          <p>Categoria:</p>
          <button
            className={filterCategory === "Faculdade" ? styles.active : ""}
            onClick={handleFilterCategory}
          >
            Faculdade
          </button>
          <button
            className={filterCategory === "Pessoal" ? styles.active : ""}
            onClick={handleFilterCategory}
          >
            Pessoal
          </button>
          <button
            className={filterCategory === "Trabalho" ? styles.active : ""}
            onClick={handleFilterCategory}
          >
            Trabalho
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
