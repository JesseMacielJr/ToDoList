import React from "react";
import "./App.css";
import Todo from "./Components/Todo";
import TodoForm from "./Components/TodoForm";
import Search from "./Components/Search";
import Filter from "./Components/Filter";

const App = () => {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      text: "Criar funcionalidade modal no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Tomar 2L de água",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Fazer 1h de musculação",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 4,
      text: "Estudar aula 06 de Física 3",
      category: "Faculdade",
      isCompleted: false,
    },
    {
      id: 5,
      text: "Estudar detecção de objetos",
      category: "Pessoal",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = React.useState("");
  const [filter, setFilter] = React.useState("All");
  const [sort, setSort] = React.useState("Asc");

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: todos.length + 1,
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter(
      (todo) =>
        // todo.id !== id ? todo : null
        todo.id !== id
    );
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );

    // newTodos.map((todo) => {
    //   if (todo.id === id) todo.isCompleted = !todo.isCompleted;
    // });
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <div className="app">
        <h1>Lista de Tarefas</h1>
        <Search search={search} setSearch={setSearch} />
        <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
        <div className="todo-list">
          {todos
            .filter((todo) =>
              filter === "All"
                ? true
                : filter === "Completed"
                ? todo.isCompleted
                : !todo.isCompleted
            )
            .filter((todo) => todo.text.toLowerCase().includes(search))
            .sort((a, b) =>
              sort === "Asc"
                ? a.text.localeCompare(b.text)
                : b.text.localeCompare(a.text)
            )
            .map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
              />
            ))}
        </div>
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
