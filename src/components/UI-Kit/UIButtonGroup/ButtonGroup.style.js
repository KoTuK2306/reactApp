import styled from "styled-components";

export const StyledButtonForGroup = styled.button`
  width: 50px;
  height: 25px;
  font-weight: 700;
  border: 1px solid black;
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor};
  transition: all 0.4s;

  &:hover {
    background-color: aquamarine;
  }
  &:first-child {
    border-radius: 10px 0 0 10px;
  }
  &:last-child {
    border-radius: 0 10px 10px 0;
  }
`;
