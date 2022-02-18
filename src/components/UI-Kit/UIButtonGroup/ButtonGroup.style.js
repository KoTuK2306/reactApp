import styled from "styled-components";
import { isBorderedOrText, transformBoxShadowColor } from "../UIButton/Button.style";
import { darken, rgba, lighten } from "polished";

const leftRightBorder = (func, coefficient, color, size) => `${size}px solid ${func(coefficient, color)}`;
const isStandartOrText = (variant) => {
  if (variant === "standart" || variant === "text") return variant === "standart" || variant === "text";
};

export const StyledButtonForGroup = styled.button`
  min-width: 50px;
  min-height: 25px;
  padding: ${(props) => props.buttonSize};
  font-weight: 700;
  border: ${(props) =>
    isStandartOrText(props.variant) ? "none" : leftRightBorder(darken, 0.1, props.backgroundColor, 1)};

  border-left: ${(props) => leftRightBorder(darken, 0.1, props.backgroundColor, 0.5)};

  border-right: ${(props) => leftRightBorder(darken, 0.1, props.backgroundColor, 0.5)};

  color: ${(props) => props.textColor};
  cursor: pointer;
  background-color: ${(props) => (isBorderedOrText(props.variant) ? `${rgba("#fff", 0)}` : props.backgroundColor)};
  transition: all 0.4s;

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
  &:first-child {
    border-left: ${(props) =>
      isStandartOrText(props.variant) ? "none" : leftRightBorder(darken, 0.1, props.backgroundColor, 1)};
    border-radius: 10px 0 0 10px;
  }
  &:last-child {
    border-right: ${(props) =>
      isStandartOrText(props.variant) ? "none" : leftRightBorder(darken, 0.1, props.backgroundColor, 1)};
    border-radius: 0 10px 10px 0;
  }
`;
