import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TodoTemplate from "./component/TodoTemplate";
import TodoNav from "./component/TodoNav";
import TodoHead from "./component/TodoHead";
import TodoList from "./component/TodoList";
import TodoCreate from "./component/TodoCreate";
import TodoUpdate from "./component/TodoUpdate";

const GlobalStyle = createGlobalStyle`
* {
  font-family:'Pretendard';
;
}
body {
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: 100vh;

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
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
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch("/todos")
      .then((res) => res.json())
      .then((todoData) => setToods(todoData));
  }, [refresh]);

  let left = todos.filter((todo) => todo.checked === false).length;

  //! 할일생성하기
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

  //! 완료 여부 변경하기
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

    const updated = {
      checked: !checked,
    };

    fetch(`/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updated),
    }).then((res) => {
      if (res.ok) {
        setRefresh((prev) => !prev);
      } else {
        throw Error("완료여부 변경실패ㅠㅠ");
      }
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
    fetch(`/todos/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        const updated = todos.filter((todo) => todo.id !== id);
        setToods(updated);
      }
    });
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
              setRefresh={setRefresh}
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
