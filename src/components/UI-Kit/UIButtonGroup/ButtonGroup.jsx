import PropTypes from "prop-types";
import { StyledButtonForGroup } from "./ButtonGroup.style";

export const ButtonGroup = (children, backgroundColor = "red") => {
  return (
    <>
      {children.map((child) => (
        <StyledButtonForGroup backgroundColor={backgroundColor}>{child}</StyledButtonForGroup>
      ))}
    </>
  );
};

ButtonGroup.propTypes = {
  /**
   * Choose content for your button
   */
  children: PropTypes.array.isRequired,
  backgroundColor: PropTypes.string,
};
