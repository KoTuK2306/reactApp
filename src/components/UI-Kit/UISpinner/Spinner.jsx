import PropTypes from "prop-types";
import { StyledDiv } from "./Spinner.style";

export const Spinner = ({ sizeRatio = 1.0, primaryBorderColor = "#f3f3f3", secondaryBorderColor = "#c3b1e1" }) => {
  return (
    <StyledDiv
      sizeRatio={sizeRatio}
      primaryBorderColor={primaryBorderColor}
      secondaryBorderColor={secondaryBorderColor}
    />
  );
};

Spinner.propTypes = {
  /**
   * Choose size coefficient for your boot logo
   */
  sizeRatio: PropTypes.oneOf([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]),
  /**
   * Choose primary border color for your boot logo
   */
  primaryBorderColor: PropTypes.string,
  /**
   * Choose secondary border color for your boot logo
   */
  secondaryBorderColor: PropTypes.string,
};
