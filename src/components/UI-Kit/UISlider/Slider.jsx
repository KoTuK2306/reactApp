/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { SliderWrapper, StyledSlider } from "./Slider.style";

export const Slider = ({
  backgroundColor = "#d3d3d3",
  min = 0,
  max = 100,
  primarySliderColor = "#c3b1e1",
  secondarySliderColor = "#d6d6d6",
}) => {
  const [num, setNum] = useState(50);
  const hundleChange = (event) => setNum(event.target.value);

  return (
    <SliderWrapper>
      <StyledSlider
        onChange={hundleChange}
        backgroundColor={backgroundColor}
        primarySliderColor={primarySliderColor}
        secondarySliderColor={secondarySliderColor}
        type="range"
        min={min}
        max={max}
        step={1}
        value={num}
      />
    </SliderWrapper>
  );
};

Slider.propTypes = {
  /**
   * Choose background сolor for your slider
   */
  backgroundColor: PropTypes.string,
  /**
   * Choose min value for your slider
   */
  min: PropTypes.number,
  /**
   * Choose max value for your slider
   */
  max: PropTypes.number,
  /**
   * Choose primary color for your slider
   */
  primarySliderColor: PropTypes.string,
  /**
   * Choose secondary color for your slider
   */
  secondarySliderColor: PropTypes.string,
};
