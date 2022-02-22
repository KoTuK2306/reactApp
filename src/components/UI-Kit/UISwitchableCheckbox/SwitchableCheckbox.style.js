import styled from "styled-components";
import { rgba } from "polished";

const checkboxWidth = 80;
const checkboxHeight = 40;

export const Circle = styled.div`
  position: relative;
  z-index: 10;
  width: ${(props) => `${(checkboxWidth * props.scale) / 2 - 5}px`};
  height: ${(props) => `${checkboxHeight * props.scale - 5}px`};
  background-color: ${(props) => props.uncheckedCheckbox};
  border-radius: 50%;
  left: ${(props) => `${-1 * (checkboxWidth * props.scale - 2.5)}px`};
  transition: all 0.3s;
  margin-right: ${(props) => (props.scale === 0.5 ? `-5px` : `${-1 * (checkboxWidth / 2 - 5 - 10 * props.scale)}px`)};
`;

export const Background = styled.div`
  position: relative;
  z-index: -20;
  background-color: ${(props) => props.checkboxBackground};
  width: ${(props) => `${checkboxWidth * props.scale}px`};
  height: ${(props) => `${checkboxHeight * props.scale}px`};
  border-radius: ${(props) => (props.scale === 1.75 ? "40px" : `${checkboxWidth / 4}px`)};
  transition: all 0.3s;
`;

export const StyledLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${(props) => `${20 * props.scale}px`};
  font-weight: 500;
  color: ${(props) => props.textColor};
  cursor: pointer;
  user-select: none;

  &:hover {
    ${Background} {
      box-shadow: ${`0px 0px 4px 3px ${rgba("#000", 0.5)} inset`};
    }
  }
`;

export const StyledCheckbox = styled.input`
  display: none;
  &:checked + ${Circle} {
    left: ${(props) => `${-1 * ((checkboxWidth * props.scale) / 2 - 2.5)}px`};
    background-color: ${(props) => props.checkedCheckbox};
  }
`;

export const StyledDiv = styled.div`
  display: flex;
`;
