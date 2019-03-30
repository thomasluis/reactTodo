import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend",
      isCompleted: false
    },
    {
      text: "Play show",
      isCompleted: false
    }
  ]);

  return (
    <div className="app">
      <div className="todo-list" />
    </div>
  );
};

export default App;
