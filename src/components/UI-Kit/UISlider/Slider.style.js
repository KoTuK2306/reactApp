import styled from "styled-components";
import { rgba } from "polished";

export const SliderWrapper = styled.div`
  width: 100%;
`;

const sliderHeight = 5;
const mutateThumbSize = (size) => {
  const thumbSize = 20;
  return `${size * thumbSize}px`;
};
const calcRangePercent = (value, max) => {
  return (value / max) * 100;
};

export const StyledSlider = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  height: ${(props) => `${props.size * sliderHeight}px`};
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
    width: ${(props) => mutateThumbSize(props.size)};
    height: ${(props) => mutateThumbSize(props.size)};
    background-color: #f0f0f0;
    border-radius: 50%;
    transition: all 0.4s;
  }

  &::-moz-range-thumb {
    -moz-appearance: none;
    width: ${(props) => mutateThumbSize(props.size)};
    height: ${(props) => mutateThumbSize(props.size)};
    background-color: #f0f0f0;
    border-radius: 10px;
    transition: all 0.4s;
  }

  &:hover::-webkit-slider-thumb {
    box-shadow: ${`0 0 0px 5px ${rgba("#969696", 0.5)}`};
  }
  &:hover::-moz-range-thumb {
    box-shadow: ${`0 0 0px 5px ${rgba("#969696", 0.5)}`};
  }
`;
