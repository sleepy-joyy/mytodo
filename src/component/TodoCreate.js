import React, { useState } from "react";
import styled, { css } from "styled-components";
import { BiPencil } from "react-icons/bi";

const CreateFormPositioner = styled.div`
  width: 100%;
  left: 0;
  bottom: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background-color: transparent;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 50px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 90%;
  background: transparent;
  padding: 12px;
  border-style: solid hidden solid;
  border-top: 1px solid rgba(234, 237, 240, 0.35);
  border-bottom: 1px solid rgba(234, 237, 240, 0.35);
  position: relative;
  z-index: 10;
  color: white;
  ::placeholder {
    color: white;
  }
`;

const Button = styled.button`
  background: transparent;
  border-style: solid hidden solid;
  border-top: 1px solid rgba(234, 237, 240, 0.35);
  border-bottom: 1px solid rgba(234, 237, 240, 0.35);
  width: 50px;
  height: 41px;
  cursor: pointer;
  text-align: center;
  font-size: 23px;
  color: white;
  position: relative;
  z-index: 20;
  display: flex;
  align-items: center;
`;

function TodoCreate({ onCreateTodo }) {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onCreateTodo(value);
    setValue("");
  };

  return (
    <CreateFormPositioner>
      <InsertForm onSubmit={onSubmit}>
        <Input placeholder="새로운 할 일" value={value} onChange={onChange} />
        <Button type="submit">
          <BiPencil />
        </Button>
      </InsertForm>
    </CreateFormPositioner>
  );
}

export default TodoCreate;
