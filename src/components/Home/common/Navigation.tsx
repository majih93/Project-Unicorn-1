import React from "react";
import { ReactDOM } from "react";
import styled from "styled-components";

const Navigation = (props: any) => {
  return (
    <Base>
      <Container>
        <Menu>WHY</Menu>
        <Menu>WHO</Menu>
        <Menu>HOW</Menu>
      </Container>
    </Base>
  );
};

const Base = styled.div`
  /* border: 1px solid black; */
  width: 1440px;
  height: 72px;
  margin: 0 auto;
  position: relative;
`;

const Container = styled.div`
  /* border: 1px solid black; */
  width: 80%;
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Menu = styled.div`
  font-size: 16px;
  line-height: 23.68px;
  font-weight: 700;
`;

export default Navigation;
