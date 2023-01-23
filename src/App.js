import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import bg from "./bg.jpg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TodoTemplate from "./component/TodoTemplate";
import TodoNav from "./component/TodoNav";
import TodoHead from "./component/TodoHead";
import TodoList from "./component/TodoList";
import TodoCreate from "./component/TodoCreate";

const GlobalStyle = createGlobalStyle`
body {
  background-image: url(${bg});
}
`;

function App() {
  let [todos, setToods] = useState([
    {
      id: 1,
      text: "상세페이지 UX개선",
      checked: true,
    },
    {
      id: 2,
      text: "강아지 산책",
      checked: false,
    },
    {
      id: 3,
      text: "줌미팅 10AM",
      checked: false,
    },
  ]);

  let left = todos.filter((todo) => todo.checked === false).length;

  const onCreateTodo = (text) => {
    if (text === "") {
      return alert("할 일을 입력해 주세요");
    } else {
      const todo = {
        id: todos.length + 1,
        text,
        checked: false,
      };
      setToods((todos) => todos.concat(todo));
    }
  };

  const onCheck = (id) => {
    setToods((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <TodoTemplate>
          <TodoNav />
          <TodoHead ttlTodo={todos.length} leftTodo={left} />
          <TodoList todos={todos} onCheck={onCheck} />
          <TodoCreate onCreateTodo={onCreateTodo} />
        </TodoTemplate>
      </div>
    </>
  );
}

export default App;
