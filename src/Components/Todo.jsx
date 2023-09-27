import styles from "./Todo.module.css";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
      className={styles.todo}
      style={{
        textDecoration: todo.isCompleted ? "line-through" : "",
        backgroundColor: todo.isCompleted ? "#fcfcfc" : "#fff",
      }}
    >
      <div className={styles.content}>
        <p>{todo.text}</p>
        <span
          className={styles.category}
          style={{
            background:
              todo.category === "Trabalho"
                ? "#f60d0d7d"
                : todo.category === "Faculdade"
                ? "#08de08a9"
                : "#7373f2a7",
          }}
        >
          {todo.category}
        </span>
      </div>
      <div>
        <button
          className={styles.complete}
          onClick={() => completeTodo(todo.id)}
        >
          {todo.isCompleted ? "Desfazer" : "Completar"}
        </button>
        <button className={styles.remove} onClick={() => removeTodo(todo.id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Todo;
