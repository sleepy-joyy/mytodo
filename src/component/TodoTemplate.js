import React from "react";
import styled from "styled-components";
import phonetemplate from "../14template.png"; //png img 를 div의 백그라운드로쓰기위해 임포트

const TodotemplateBlock = styled.div`
  width: 393px;
  height: 752px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);
  background-image: url(${phonetemplate}); //url = " 이렇게말고" (함수처럼) 변수로 담아와서쓴다.
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  position: relative;
`;

function Todotemplate({ children }) {
  return <TodotemplateBlock>{children}</TodotemplateBlock>;
}

export default Todotemplate;
