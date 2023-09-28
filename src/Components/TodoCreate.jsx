import React from "react";
import styles from "./TodoCreate.module.css";
import TodoForm from "./TodoForm";

const TodoCreate = ({ addTodo }) => {
  const [isModal, setIsModal] = React.useState(false);

  function handleClick() {
    setIsModal(!isModal);
  }

  function handleOutside(e) {
    if (e.target === e.currentTarget) setIsModal(false);
  }

  return (
    <div className={styles.todoCreate}>
      <button onClick={handleClick}>Criar Tarefa</button>
      <div
        className={`${isModal && styles.open} ${styles.todoModal}`}
        onClick={handleOutside}
      >
        <TodoForm
          className={styles.teste}
          addTodo={addTodo}
          setIsModal={setIsModal}
          isModal={isModal}
        />
      </div>
    </div>
  );
};

export default TodoCreate;
