import styled from "styled-components";
import { darken, rgba, lighten } from "polished";

export const StyledButton = styled.button`
  border-radius: 5px;
  cursor: pointer;
  border: ${(props) =>
    props.variant === "text" || props.variant === "standart" ? "none" : `1px solid ${props.backgroundColor}`};
  background-color: ${(props) =>
    props.variant === "bordered" || props.variant === "text" ? `${rgba("#fff", 0)}` : props.backgroundColor};
  padding: ${(props) => props.size};
  color: ${(props) => props.textColor};
  transition: ${(props) =>
    props.variant === "bordered" || props.variant === "text" ? "all 0.3s ease-in-out" : "all 0.3s"};

  &:hover {
    box-shadow: ${(props) =>
      props.variant === "bordered" || props.variant === "text"
        ? `0 0 40px 40px ${props.backgroundColor} inset`
        : `0 0 40px 40px ${lighten(0.2, props.backgroundColor)} inset`};
  }
  &:active {
    box-shadow: ${(props) =>
      props.variant === "bordered" || props.variant === "text"
        ? `0 0 40px 40px ${lighten(0.3, props.backgroundColor)} inset`
        : `0 0 40px 40px ${darken(0.2, props.backgroundColor)} inset`};
  }
`;
