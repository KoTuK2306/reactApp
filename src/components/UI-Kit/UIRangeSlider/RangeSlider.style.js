import styled, { css } from "styled-components";
import { rgba } from "polished";

const SLIDER_HEIGHT = 5;

export const SliderWrapper = styled.div`
  width: 100%;
`;

const mutateThumbSize = (size) => {
  const thumbSize = 20;
  return `${size * thumbSize}px`;
};
const calcRangePercent = (value, max) => {
  return Math.abs((value / max) * 100);
};

const thumbStyle = css`
  width: ${(props) => mutateThumbSize(props.size)};
  height: ${(props) => mutateThumbSize(props.size)};
  background-color: #f0f0f0;
  border-radius: 50%;
  transition: all 0.4s;
`;
const hoverThumbStyle = css`
  box-shadow: ${`0 0 0px 5px ${rgba("#969696", 0.5)}`};
`;

export const StyledSlider = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  height: ${(props) => `${props.size * SLIDER_HEIGHT}px`};
  outline: none;
  border-radius: 5px;
  background: ${(props) =>
    `linear-gradient(90deg, ${props.firstSliderColor}  ${calcRangePercent(props.value, props.max)}%, ${
      props.secondSliderColor
    } ${calcRangePercent(props.value, props.max)}%)`};
  opacity: 0.8;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    ${thumbStyle}
  }
  &::-moz-range-thumb {
    -moz-appearance: none;
    border: none;
    ${thumbStyle}
  }

  &:hover::-webkit-slider-thumb {
    ${hoverThumbStyle}
  }
  &:hover::-moz-range-thumb {
    ${hoverThumbStyle}
  }
`;
