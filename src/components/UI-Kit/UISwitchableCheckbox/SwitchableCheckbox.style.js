import styled from "styled-components";

export const StyledLabel = styled.label`
  color: ${(props) => props.textColor};
  cursor: pointer;
  user-select: none;
`;

export const StyledCheckbox = styled.input`
  opacity: 0;
  position: absolute;
  left: -90000px;
  top: -90000px;

  & + label {
    position: relative;
    display: flex;
    font-size: 40px;
    align-items: center;
  }

  & + label::before {
    content: "";
    width: 80px;
    height: 40px;
    background-color: ${(props) => props.checkboxBackground};
    border-radius: 20px;
    margin-right: 15px;
  }

  & + label::after {
    position: absolute;
    left: 2.5px;
    content: "";
    width: 35px;
    height: 35px;
    background-color: ${(props) => props.uncheckedCheckbox};
    border-radius: 20px;
    transition: all 0.5s;
  }

  &:checked + label::after {
    left: 43px;
    background-color: ${(props) => props.checkedCheckbox};
  }
`;
