import styled, { keyframes } from "styled-components";

const BORDER_WEIGHT = 16;
const SPINNER_SIZE = 120;

const mutateBorder = (sizeRatio, color) => `${BORDER_WEIGHT * sizeRatio}px solid ${color}`;

const rotate = keyframes`
  0% { 
    transform: rotate(0deg); 
  }
  100% { 
    transform: rotate(360deg); 
  }
`;

export const StyledDiv = styled.div`
  border: ${(props) => mutateBorder(props.sizeRatio, props.primaryBorderColor)};
  border-top: ${(props) => mutateBorder(props.sizeRatio, props.secondaryBorderColor)};
  border-radius: 50%;
  width: ${(props) => `${SPINNER_SIZE * props.sizeRatio}px`};
  height: ${(props) => `${SPINNER_SIZE * props.sizeRatio}px`};
  animation: ${rotate} 2s linear infinite;
`;
