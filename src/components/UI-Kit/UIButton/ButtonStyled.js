import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 5px;
  cursor: pointer;
  border: none;
  transition: all 0.5s;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
`;
