import React, { useEffect } from "react";
import styled from "styled-components";
import { BiPencil } from "react-icons/bi";
import { MdClose } from "react-icons/md";

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
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  z-index: 100;
  border-radius: 20px;
  background-color: rgba(255, 238, 221, 0.75);
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

  #xIcon {
    position: relative;
    font-size: 40px;
    position: absolute;
    top: 20px;
    left: 90%;
    color: #bcaaa4;
    z-index: 200;
  }
  h3 {
    color: #bcaaa4;
    font-size: 45px;
    font-weight: 600;
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
  z-index: 150;
  color: #ffeedd;
  font-weight: 700;
  font-size: 35px;
  font-family: "GangwonEduSaeeum_OTFMediumA";
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5);

  &:focus {
    outline: none;
    border-radius: 5px;
    background-color: #c8a89d;
  }
`;

const SendButton = styled.button`
  background: transparent;
  font-family: "GangwonEduSaeeum_OTFMediumA";
  border-radius: 4px;
  border: none;
  background: rgba(224, 224, 224, 0.25);
  box-shadow: 5px 5px 20px rgba(150, 150, 150, 0.5);
  width: 120px;
  height: 50px;
  flex-grow: 0;
  margin-bottom: 60px;
  cursor: pointer;
  text-align: center;
  font-size: 40px;
  color: #bcaaa4;
  position: relative;
  z-index: 80;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

function TodoUpdate({
  onUpdateToggle,
  value,
  setValue,
  selectedTodo,
  setToods,
}) {
  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onUpdate = (id, text) => {
    setToods((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
    onUpdateToggle();
    setValue("");
  };

  return (
    <UpdateBackground>
      <UpdateForm
        onSubmit={(e) => {
          e.preventDefault();
          onUpdate(selectedTodo.id, value);
        }}
      >
        <MdClose id="xIcon" onClick={onUpdateToggle} />
        <h3> 업데이트할 항목 😎 </h3>
        <UpdateInput
          value={value}
          selectedTodo={selectedTodo}
          onChange={onChange}
        />
        <SendButton type="submit">
          <BiPencil
            onClick={(e) => {
              e.preventDefault();
              onUpdate(selectedTodo.id, value);
            }}
          />
          수정
        </SendButton>
      </UpdateForm>
    </UpdateBackground>
  );
}

export default TodoUpdate;
