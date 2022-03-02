import { useState } from "react";
import PropTypes from "prop-types";
import { SliderWrapper, StyledSlider } from "./RangeSlider.style";

export const RangeSlider = ({
  min = 0,
  max = 100,
  firstSliderColor = "#c3b1e1",
  secondSliderColor = "#d6d6d6",
  size = "md",
  step = 1,
}) => {
  const [rangeRatio, setRangeRatio] = useState(50);
  const handleChange = (event) => setRangeRatio(event.target.value);
  let rangeSizeRatio = 1;
  if (size === "sm") rangeSizeRatio = 0.75;
  if (size === "lg") rangeSizeRatio = 2;
  return (
    <SliderWrapper>
      <StyledSlider
        onChange={handleChange}
        firstSliderColor={firstSliderColor}
        secondSliderColor={secondSliderColor}
        type="range"
        min={min}
        max={max}
        step={step}
        size={rangeSizeRatio}
        value={rangeRatio}
      />
    </SliderWrapper>
  );
};

RangeSlider.propTypes = {
  /**
   * Choose first color for your slider
   */
  firstSliderColor: PropTypes.string,
  /**
   * Choose second color for your slider
   */
  secondSliderColor: PropTypes.string,
  /**
   * Choose size for your range
   */
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  /**
   * Choose min value for your slider
   */
  min: PropTypes.number,
  /**
   * Choose max value for your slider
   */
  max: PropTypes.number,
  /**
   * Choose step for your slider
   */
  step: PropTypes.number,
};
