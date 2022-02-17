import styled from "styled-components";

export const StyledStack = styled.div`
  display: flex;
  gap: ${(props) => `${props.spacing * 0.25}rem`};
  flex-wrap: ${(props) => (props.isWrap ? "wrap" : "nowrap")};
  flex-direction: ${(props) => props.direction};
`;
