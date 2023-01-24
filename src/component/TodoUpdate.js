import React, { useEffect } from "react";
import styled from "styled-components";
import { BiPencil } from "react-icons/bi";

const UpdateBackground = styled.div`
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  animation: modal-bg-show 1s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const UpdateForm = styled.form`
  width: 50vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 60;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.25);
  animation: modal-show 1s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }

  div {
    color: white;
    font-size: 25px;
    font-weight: 600;
    color: #d9d9d9;
    text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
      1px 1px 1px rgba(0, 0, 0, 0.5);
  }
`;

const UpdateInput = styled.input`
  width: 60%;
  background: transparent;
  padding: 12px;
  border-style: hidden hidden solid;
  border-bottom: 1px solid rgba(234, 237, 240, 0.55);
  position: relative;
  margin-top: 40px;
  margin-bottom: 40px;
  z-index: 70;
  color: white;
  font-weight: 700;
  font-size: 16px;
`;

const SendButton = styled.button`
  background: transparent;
  border-radius: 4px;
  border: none;
  background: rgba(224, 224, 224, 0.25);
  box-shadow: 5px 5px 20px rgba(150, 150, 150, 0.4);
  width: 60px;
  height: 30px;
  cursor: pointer;
  text-align: center;
  font-size: 15px;
  color: white;
  position: relative;
  z-index: 80;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

function TodoUpdate({ onUpdateToggle, value, setValue, selectedTodo }) {
  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <UpdateBackground>
      <UpdateForm>
        <div>😗 업데이트할 항목 👇</div>
        {/*onSubmit={}*/}
        <UpdateInput
          value={value}
          selectedTodo={selectedTodo}
          onChange={onChange}
        />
        <SendButton type="submit">
          <BiPencil />
          수정
        </SendButton>
      </UpdateForm>
    </UpdateBackground>
  );
}

export default TodoUpdate;
