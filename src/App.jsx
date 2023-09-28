import React from "react";
import "./App.css";
import Todo from "./Components/Todo";
import Search from "./Components/Search";
import Filter from "./Components/Filter";
import TodoCreate from "./Components/TodoCreate";

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
      text: "Fazer reunião diária",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 5,
      text: "Estudar detecção de objetos",
      category: "Faculdade",
      isCompleted: false,
    },
    {
      id: 6,
      text: "Devolver livro",
      category: "Faculdade",
      isCompleted: false,
    },
    // {
    //   id: 7,
    //   text: "Estudar Java",
    //   category: "Faculdade",
    //   isCompleted: false,
    // },
    // {
    //   id: 8,
    //   text: "Tocar violão e teclado",
    //   category: "Pessoal",
    //   isCompleted: false,
    // },
  ]);

  const [search, setSearch] = React.useState("");
  const [filter, setFilter] = React.useState("All");
  const [sortAlphabetic, setSortAlphabetic] = React.useState("");
  const [filterCategory, setFilterCategory] = React.useState("");

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
        <Filter
          filter={filter}
          setFilter={setFilter}
          sortAlphabetic={sortAlphabetic}
          setSortAlphabetic={setSortAlphabetic}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
        />
        <TodoCreate addTodo={addTodo} />
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
              sortAlphabetic === "Asc"
                ? a.text.localeCompare(b.text)
                : sortAlphabetic === "Desc"
                ? b.text.localeCompare(a.text)
                : a.id > b.id
            )
            .filter((todo) =>
              filterCategory ? todo.category === filterCategory : todo
            )
            .map((todo) => (
              <Todo
                key={todo.id}
                todos={todos}
                todo={todo}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
                // editTodo={editTodo}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;
