import styled from "styled-components";
import { rgba } from "polished";

export const SliderWrapper = styled.div`
  width: 100%;
`;

export const StyledSlider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  outline: none;
  border-radius: 5px;
  background: ${(props) =>
    `linear-gradient(90deg, ${props.primarySliderColor}  ${props.value}%, ${props.secondarySliderColor} ${props.value}%)`};
  opacity: 0.8;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background-color: #f0f0f0;
    border-radius: 10px;
    transition: all 0.4s;
  }

  &:hover::-webkit-slider-thumb {
    box-shadow: ${`0 0 0px 5px ${rgba("#969696", 0.5)}`};
  }
`;
