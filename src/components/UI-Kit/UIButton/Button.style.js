import styled from "styled-components";
import { darken, rgba, lighten } from "polished";

const transformBoxShadowColor = (func, color, coefficient = 0.2, sizeOfShadow = 40) => {
  return `0 0 ${sizeOfShadow}px ${sizeOfShadow}px ${func(coefficient, color)} inset`;
};

const isBorderedOrText = (variant) => {
  if (variant === "bordered" || variant === "text") return variant === "bordered" || variant === "text";
};

export const StyledButton = styled.button`
  border-radius: 5px;
  font-weight: 700;
  cursor: pointer;
  border: ${(props) =>
    props.variant === "text" || props.variant === "standart" ? "none" : `1px solid ${props.backgroundColor}`};
  background-color: ${(props) => (isBorderedOrText(props.variant) ? `${rgba("#fff", 0)}` : props.backgroundColor)};
  padding: ${(props) => props.size};
  color: ${(props) => props.textColor};
  transition: ${(props) => (isBorderedOrText(props.variant) ? "all 0.3s ease-in-out" : "all 0.3s")};

  &:hover {
    box-shadow: ${(props) =>
      isBorderedOrText(props.variant)
        ? transformBoxShadowColor(darken, props.backgroundColor, 0)
        : transformBoxShadowColor(lighten, props.backgroundColor)};
  }
  &:active {
    box-shadow: ${(props) =>
      isBorderedOrText(props.variant)
        ? transformBoxShadowColor(lighten, props.backgroundColor)
        : transformBoxShadowColor(darken, props.backgroundColor)};
  }
`;