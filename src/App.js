import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import bg from "./bg.jpg";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TodoTemplate from "./component/TodoTemplate";
import TodoNav from "./component/TodoNav";
import TodoHead from "./component/TodoHead";
import TodoList from "./component/TodoList";
import TodoCreate from "./component/TodoCreate";
import TodoUpdate from "./component/TodoUpdate";

const GlobalStyle = createGlobalStyle`
* {
  font-family:'GangwonEduSaeeum_OTFMediumA';
;
}
body {
  background-image: url(${bg});
  display:flex;
  justify-content:center;
  align-items:center;
}
`;

function App() {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [updateToggle, setupdateToggle] = useState(false);
  const [value, setValue] = useState("");
  // const [todos, setToods] = useState([
  //   {
  //     id: 1,
  //     text: "상세페이지 UX개선",
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     text: "강아지 산책",
  //     checked: false,
  //   },
  //   {
  //     id: 3,
  //     text: "줌미팅 10AM",
  //     checked: false,
  //   },
  // ]);
  const [todos, setToods] = useState([]);

  useEffect(() => {
    fetch("/todos")
      .then((res) => res.json())
      .then((todoData) => setToods(todoData));
  }, []);

  let left = todos.filter((todo) => todo.checked === false).length;

  // const onCreateTodo = (text) => {
  //   if (text === "") {
  //     return alert("할 일을 입력해 주세요");
  //   } else {
  //     const todo = {
  //       id: todos.length + 1,
  //       text,
  //       checked: false,
  //     };
  //     setToods((todos) => todos.concat(todo));
  //   }
  // };

  const onCreateTodo = (text) => {
    if (text === "") {
      return alert("할 일을 입력해 주세요");
    } else {
      const todo = {
        id: todos.length + 1,
        text,
        checked: false,
      };

      fetch("/todos", {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(todo),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw Error("투두 생성 실패ㅠㅠ");
          }
        })
        .then((jsonData) => {
          setToods([...todos, jsonData]);
        });
    }
  };

  // const onCheck = (id) => {
  //   setToods((todos) =>
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, checked: !todo.checked } : todo
  //     )
  //   );
  // };

  const onCheck = (id) => {
    const index = todos.findIndex((obj) => obj.id === id);
    const checked = todos[index].checked;
    console.log(checked);
    const updated = { checked: !checked };
    console.log(updated);

    fetch(`/todos/${id}`, {
      method: "patch",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updated),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("완료여부 변경실패ㅠㅠ");
        }
      })
      .then((jsonData) => {
        setToods([jsonData]);
      });

    // setToods((todos) =>
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, checked: !todo.checked } : todo
    //   )
    // );
  };

  const onUpdateToggle = () => {
    setupdateToggle((prev) => !prev);
  };

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const onDelete = (id) => {
    setToods((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <TodoTemplate>
          <TodoNav />
          <TodoHead ttlTodo={todos.length} leftTodo={left} />
          <TodoList
            todos={todos}
            onCheck={onCheck}
            onUpdateToggle={onUpdateToggle}
            onChangeSelectedTodo={onChangeSelectedTodo}
            onDelete={onDelete}
          />
          {updateToggle && (
            <TodoUpdate
              value={value}
              setValue={setValue}
              setToods={setToods}
              onUpdateToggle={onUpdateToggle}
              selectedTodo={selectedTodo}
              // onUpdate={onUpdate}
            />
          )}
          <TodoCreate
            value={value}
            setValue={setValue}
            onCreateTodo={onCreateTodo}
          />
        </TodoTemplate>
      </div>
    </>
  );
}

export default App;
