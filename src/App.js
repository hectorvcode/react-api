import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const [todos, setTodos] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    // console.log(response.status)
    const responseJson = await response.json();
    setTodos(responseJson);
    // console.log(responseJson)
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="App">
      Hola Mundo
      <ul>
        {!todos
          ? "Cargando"
          : todos.map((todo, index) => {
              return (
                <li key={index}>
                  {todo.title} {todo.completed ? "✅" : "❌"}
                </li>
              );
            })}
      </ul>
    </div>
  );
}

export default App;
