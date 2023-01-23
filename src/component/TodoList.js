import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodolistBox = styled.div`
  flex: 1; //디브가 차지할수있는 모든영역차지
  padding: 10px;
  overflow-y: auto; //내용이 넘칠때만 스크롤바표시
  /* background-color: gray; */

  ul {
    list-style: none;
    padding-left: 0;
    margin-top: 0;
  }
`;

function TodoList({ todos, onCheck }) {
  return (
    <TodolistBox>
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} onCheck={onCheck}></TodoItem>
        ))}
      </ul>
    </TodolistBox>
  );
}

export default TodoList;
