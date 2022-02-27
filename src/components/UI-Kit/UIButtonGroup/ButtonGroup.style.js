import styled from "styled-components";
import { darken, rgba, lighten } from "polished";
import { isBorderedOrText, transformBoxShadowColor } from "../UIButton/Button.style";

const getBorderStyle = (func, coefficient, color, size) => `${size}px solid ${func(coefficient, color)}`;
export const isStandartOrText = (variant) => variant === "standart" || variant === "text";

export const StyledButtonForGroup = styled.button`
  min-width: 50px;
  min-height: 25px;
  padding: ${(props) => props.buttonSize};
  font-weight: 700;
  border: ${(props) =>
    isStandartOrText(props.variant) ? "none" : getBorderStyle(darken, 0.1, props.backgroundColor, 1)};

  border-left: ${(props) => getBorderStyle(darken, 0.1, props.backgroundColor, 0.5)};

  border-right: ${(props) => getBorderStyle(darken, 0.1, props.backgroundColor, 0.5)};

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
      isStandartOrText(props.variant) ? "none" : getBorderStyle(darken, 0.1, props.backgroundColor, 1)};
    border-radius: ${(props) => `${props.buttonHeight * 2}rem 0 0 ${props.buttonHeight * 2}rem`};
  }
  &:last-child {
    border-right: ${(props) =>
      isStandartOrText(props.variant) ? "none" : getBorderStyle(darken, 0.1, props.backgroundColor, 1)};
    border-radius: ${(props) => `0 ${props.buttonHeight * 2}rem ${props.buttonHeight * 2}rem 0`};
  }
`;
