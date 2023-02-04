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
  min-height: 50px;
  line-height: 50px;
  border-style: solid hidden solid;
  border-top: 1px solid rgba(234, 237, 240, 0.35);
  border-bottom: 1px solid rgba(234, 237, 240, 0.35);
  position: relative;
  z-index: 10;
  color: white;
  ::placeholder {
    color: white;
    font-family: "GangwonEduSaeeum_OTFMediumA";
    font-size: 25px;
  }
  &:focus {
    outline: 2px solid rgba(200, 168, 157, 0.41);
    color: white;
    font-family: "GangwonEduSaeeum_OTFMediumA";
    font-weight: 700;
    font-size: 25px;
  }
`;

const Button = styled.button`
  background: transparent;
  border-color: rgba(234, 237, 240, 0.35);
  border-radius: 10px;
  margin-left: 20px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  text-align: center;
  font-size: 25px;
  color: white;
  position: relative;
  z-index: 20;
  display: flex;
  align-items: center;
`;

function TodoCreate({ value, setValue, onCreateTodo }) {
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
        <Input
          placeholder=" 새로운 할일 🤓"
          value={value}
          onChange={onChange}
        />
        <Button type="submit">
          <BiPencil />
        </Button>
      </InsertForm>
    </CreateFormPositioner>
  );
}

export default TodoCreate;
