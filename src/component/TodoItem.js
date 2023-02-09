import React from "react";
import styled, { css } from "styled-components";
import { RiDeleteBack2Line } from "react-icons/ri";
import { RxBox } from "react-icons/rx";
import { CgCheckR } from "react-icons/cg";

const Delete = styled.div`
  font-size: 20px;
  padding-right: 15px;
  color: #dee2e6;
  cursor: pointer;
  &:hover {
    color: rgba(0, 0, 0, 0.6);
    padding-right: 15px;
  }
  display: none;
`;

const TodoItemBox = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 10px;
  &:hover {
    ${Delete} {
      display: initial;
    }
  }
  ${(props) =>
    props.checked
      ? css`
          background-color: transparent;
        `
      : css`
          background-color: rgba(205, 207, 208, 0.25);
          border-radius: 10px;
        `}
`;

const CheckBox = styled.div`
  width: 30px;
  height: 30px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
  margin-right: 15px;
  color: white;
  cursor: pointer;
  font-size: 25px;
`;

const Text = styled.div`
  flex: 1;
  font-size: 1.3rem;
  font-weight: 600;
  color: #e3e6e8;
  ${(props) =>
    props.checked &&
    css`
      color: #ced4da;
      text-decoration: line-through;
      font-size: 1.3rem;
      font-weight: 400;
    `}
`;

const TodoItem = ({
  todo,
  onCheck,
  onDelete,
  onUpdateToggle,
  onChangeSelectedTodo,
}) => {
  const { id, checked, text } = todo;

  return (
    <TodoItemBox checked={checked}>
      <CheckBox>
        {checked ? (
          <CgCheckR
            checked={checked}
            onClick={() => {
              onCheck(todo.id);
            }}
          />
        ) : (
          <RxBox
            checked={checked}
            onClick={() => {
              onCheck(todo.id);
            }}
          />
        )}
      </CheckBox>
      <Text
        checked={checked}
        onClick={() => {
          onChangeSelectedTodo(todo);
          onUpdateToggle();
        }}
      >
        {text}
      </Text>
      <Delete>
        <RiDeleteBack2Line
          onClick={() => {
            onDelete(id);
          }}
        />
      </Delete>
    </TodoItemBox>
  );
};

export default TodoItem;
