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
        <p className={styles.category}>({todo.category})</p>
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
