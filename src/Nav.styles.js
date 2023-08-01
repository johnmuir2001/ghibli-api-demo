import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 100vw;
  height: 80px;
  background-color: gray;
  padding: 5px 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavItem = styled.p`
  margin: 0 70px;
  padding: 20px 30px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;
