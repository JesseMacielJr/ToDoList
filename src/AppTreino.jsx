// import React from "react";

// function App() {
//   const [tarefas, setTarefas] = React.useState([
//     {
//       id: 1,
//       text: "Criar funcionalidade modal no sistema",
//       category: "Trabalho",
//       isCompleted: false,
//     },
//     {
//       id: 2,
//       text: "Tomar 2L de água",
//       category: "Pessoal",
//       isCompleted: false,
//     },
//     {
//       id: 3,
//       text: "Fazer 1h de musculação",
//       category: "Pessoal",
//       isCompleted: false,
//     },
//     {
//       id: 4,
//       text: "Estudar aula 06 de Física 3",
//       category: "Faculdade",
//       isCompleted: false,
//     },
//     {
//       id: 5,
//       text: "Estudar detecção de objetos",
//       category: "Pessoal",
//       isCompleted: false,
//     },
//   ]);
//   const [todosAtuais, setTodosAtuais] = React.useState(tarefas);
//   const [todosAtuaisAux, setTodosAtuaisAux] = React.useState(tarefas);
//   const [inputFiltro, setInputFiltro] = React.useState("");
//   const [tiposButton, setTiposButton] = React.useState(
//     Array.from(new Set(tarefas.map((tarefa) => tarefa.category)))
//   );

//   function filterItems(listaItems, type, value) {
//     const novaLista = listaItems.filter((listaItem) =>
//       listaItem[type].toLowerCase().startsWith(value.toLowerCase())
//     );
//     return novaLista;
//   }

//   function handleChange(e) {
//     e.preventDefault();
//     const novoValor = e.target.value;
//     setInputFiltro(novoValor);
//     if (novoValor) {
//       setTodosAtuais(filterItems(tarefas, "text", novoValor));
//       setTodosAtuaisAux(filterItems(tarefas, "text", novoValor));
//     } else {
//       setTodosAtuais(tarefas);
//       setTodosAtuaisAux(tarefas);
//     }
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     const novaLista = filterItems(
//       todosAtuaisAux,
//       "category",
//       e.target.textContent
//     );
//     setTodosAtuais(novaLista);
//   }

//   return (
//     <div>
//       <div>
//         <form>
//           <input type="text" value={inputFiltro} onChange={handleChange} />
//         </form>
//       </div>
//       <div>
//         <form>
//           {tiposButton.map((tipoButton) => {
//             return (
//               <button key={tipoButton} onClick={handleSubmit}>
//                 {tipoButton}
//               </button>
//             );
//           })}
//         </form>
//       </div>
//       <div>
//         {todosAtuais.map((todoAtuais) => {
//           return (
//             <div key={todoAtuais.id}>
//               <h1>{todoAtuais.text}</h1>
//               <p>{todoAtuais.category}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;

//
//
//
// Forma mais otimizada
//
//
//

import React from "react";

function App() {
  const [tarefas, setTarefas] = React.useState([
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

  const [filtroTexto, setFiltroTexto] = React.useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = React.useState("");
  const [tiposButton, setTiposButton] = React.useState(
    Array.from(new Set(tarefas.map((tarefa) => tarefa.category)))
  );

  const handleChangeTexto = (e) => {
    setFiltroTexto(e.target.value);
  };

  const handleClickCategoria = (e) => {
    e.preventDefault();
    if (categoriaSelecionada === e.target.textContent) {
      setCategoriaSelecionada("");
    } else {
      setCategoriaSelecionada(e.target.textContent);
    }
  };

  const tarefasFiltradas = tarefas.filter((tarefa) => {
    const textoEmLowerCase = tarefa.text.toLowerCase();
    const filtroEmLowerCase = filtroTexto.toLowerCase();
    return (
      textoEmLowerCase.includes(filtroEmLowerCase) &&
      (categoriaSelecionada === "" || tarefa.category === categoriaSelecionada)
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Filtrar por texto"
        value={filtroTexto}
        onChange={handleChangeTexto}
      />
      <form>
        {tiposButton.map((tipoButton) => {
          return (
            <button key={tipoButton} onClick={handleClickCategoria}>
              {tipoButton}
            </button>
          );
        })}
      </form>
      <div>
        {tarefasFiltradas.map((tarefa) => (
          <div key={tarefa.id}>
            <h1>{tarefa.text}</h1>
            <p>{tarefa.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
