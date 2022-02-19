import styled from "styled-components";
import { darken, rgba, lighten } from "polished";
import { isStandartOrText } from "../UIButtonGroup/ButtonGroup.style";

export const transformBoxShadowColor = (func, color, coefficient = 0.2, sizeOfShadow = 40) =>
  `0 0 ${sizeOfShadow}px ${sizeOfShadow}px ${func(coefficient, color)} inset`;

export const isBorderedOrText = (variant) => variant === "bordered" || variant === "text";

export const StyledButton = styled.button`
  border-radius: ${(props) => `${props.radius}px`};
  font-weight: 700;
  cursor: pointer;
  border: ${(props) => (isStandartOrText(props.variant) ? "none" : `1px solid ${props.backgroundColor}`)};
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
