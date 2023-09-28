import styles from "./Filter.module.css";

const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className={styles.filter}>
      <h2>Filtrar</h2>
      <div className={styles["filter-options"]}>
        <div>
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
        <div>
          <p>Ordem alfabética:</p>
          <button onClick={({ target }) => setSort(target.innerText)}>
            Asc
          </button>
          <button onClick={({ target }) => setSort(target.innerText)}>
            Desc
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
