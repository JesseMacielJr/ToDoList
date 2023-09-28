import React from "react";
import styles from "./TodoForm.module.css";

const TodoForm = ({ addTodo, isModal, setIsModal }) => {
  const [value, setValue] = React.useState("");
  const [category, setCategory] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;

    addTodo(value, category);
    setValue("");
    setCategory("");
    setIsModal(!isModal);
  };

  return (
    <div className={styles["todo-form"]}>
      {/* <h2>Criar tarefa:</h2> */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o título"
          value={value}
          onChange={({ target }) => setValue(target.value)}
        />
        <select
          value={category}
          onChange={({ target }) => setCategory(target.value)}
          required
        >
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Faculdade">Faculdade</option>
        </select>
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;
