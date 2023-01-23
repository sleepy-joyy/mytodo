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

  &:before {
    content: "";
    position: absolute;
    left: 5%;
    bottom: 0;
    height: 1px;
    width: 90%;
    border-bottom: 1px solid rgba(234, 237, 240, 0.35);
  }
  h1 {
    margin: 0;
    position: absolute;
    top: 22px;
    left: 30px;
    font-size: 20px;
    color: white;
  }
  span {
    color: white;
    font-size: 14px;
  }
`;

function TodoHead({ ttlTodo, leftTodo }) {
  return (
    <TodoHeadBlock>
      <h1>
        {Today.year}년 {Today.momth}월 {Today.day}일 {WeekDayKr}
      </h1>
      <span>
        오늘의 할일 총 {ttlTodo}개 중 {leftTodo}개 남았어요!🙂
      </span>
    </TodoHeadBlock>
  );
}

export default TodoHead;
