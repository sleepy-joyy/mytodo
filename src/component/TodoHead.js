import React from "react";
import styled from "styled-components";

const getDate = new Date();

let Today = {
  year: getDate.getFullYear(),
  momth: getDate.getMonth() + 1,
  day: getDate.getDate(),
  weekDay: getDate.getDay(),
};

let weekDays = ["(일)", "(월)", "(화)", "(수)", "(목)", "(금)", "(토)"];
let WeekDayKr = weekDays[Today.weekDay];

const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;

  &:before {
    //할일 밑 하얀선 적용
    content: "";
    position: absolute;
    left: 5%;
    bottom: 0;
    height: 1px;
    width: 90%;
    border-bottom: 1px solid rgba(234, 237, 240, 0.45);
  }
  h1 {
    margin: 0;
    position: absolute;
    top: 22px;
    left: 30px;
    font-size: 1.5rem;
    color: white;
  }
  span {
    margin-top: 10px;
    color: white;
    font-size: 1.2rem;
  }
`;

function TodoHead({ ttlTodo, leftTodo }) {
  return (
    <TodoHeadBlock>
      <h1>
        {Today.year}년 {Today.momth}월 {Today.day}일 {WeekDayKr}
      </h1>
      <span>
        {ttlTodo && leftTodo === 0
          ? "😍 멋지네요! 해야할 일을 다했어요!😍"
          : `오늘의 할일 총 ${ttlTodo}개 중 ${leftTodo}개 남았어요!🙂`}
      </span>
    </TodoHeadBlock>
  );
}

export default TodoHead;
