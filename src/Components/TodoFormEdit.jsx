import React from "react";
import styles from "./TodoFormEdit.module.css";

const TodoFormEdit = ({ todos, todo, isModal, setIsModal }) => {
  const [value, setValue] = React.useState("");
  const [category, setCategory] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;

    todos.map((todoAtual) => {
      if (todoAtual.id === todo.id) {
        todoAtual.text = value;
        todoAtual.category = category;
      }
    });

    setValue("");
    setCategory("");
    setIsModal(!isModal);
  };

  React.useEffect(() => {
    setValue(todo.text);
    setCategory(todo.category);
  }, [todo, isModal]);

  return (
    <div className={styles["todo-form"]}>
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
        <button type="submit">Editar tarefa</button>
      </form>
    </div>
  );
};

export default TodoFormEdit;
