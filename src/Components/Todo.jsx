import styles from "./Todo.module.css";
import React from "react";
import TodoForm from "./TodoForm";
import TodoFormEdit from "./TodoFormEdit";

const Todo = ({
  todos,
  todo,
  removeTodo,
  completeTodo,
  filterCategory,
  setFilterCategory,
}) => {
  const [isModal, setIsModal] = React.useState(false);

  function handleClick() {
    setIsModal(!isModal);
  }

  function handleOutside(e) {
    if (e.target === e.currentTarget) setIsModal(false);
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
                ? "#04b704a9"
                : "#7373f2a7",
          }}
          onClick={handleFilterCategory}
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
        <button className={styles.edit} onClick={handleClick}>
          Editar
        </button>
        <button className={styles.remove} onClick={() => removeTodo(todo.id)}>
          X
        </button>
      </div>
      <div
        className={`${isModal && styles.open} ${styles.todoModal}`}
        onClick={handleOutside}
      >
        <TodoFormEdit
          todos={todos}
          todo={todo}
          setIsModal={setIsModal}
          isModal={isModal}
        />
      </div>
    </div>
  );
};

export default Todo;
