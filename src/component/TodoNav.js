import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faBars } from "@fortawesome/free-solid-svg-icons";

const TodoNavigation = styled.nav`
  width: auto;
  height: 65px;
  background-color: rgba(255, 255, 255, 0.1);
  display: inline-block;
  color: white;
  border-radius: 15px 15px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 48px;

  h2 {
    padding-left: 25px;
    font-size: 2rem;
  }

  .icon {
    width: 30px;
    height: 30px;
    padding: 15px;
  }

  .iconLeft {
    width: 30px;
    height: 30px;
    padding: 15px 0px 15px 15px;
    margin-right: -5px;
  }
`;

function TodoNav() {
  const [GoingBack, SetGoingBack] = useState(false);
  return (
    <TodoNavigation>
      {GoingBack ? (
        <>
          <FontAwesomeIcon icon={faAngleLeft} size="2x" className="iconLeft" />
        </>
      ) : null}
      <h2>TODO</h2>
      <FontAwesomeIcon icon={faBars} size="2x" className="icon" />
    </TodoNavigation>
  );
}

export default TodoNav;
