import PropTypes from "prop-types";
import { StyledStack } from "./Stack.style";

export const Stack = ({ children, spacing = 2, direction = "row", wrap = false }) => {
  return (
    <StyledStack spacing={spacing} direction={direction} wrap={wrap}>
      {children}
    </StyledStack>
  );
};

Stack.propTypes = {
  /**
   * Choose content for your stack
   */
  children: PropTypes.node,
  /**
   * Choose spacing between childrens
   */
  spacing: PropTypes.number,
  /**
   * Choose whether to transfer children to a new line or not
   */
  wrap: PropTypes.bool,
  /**
   * Choose how the children will be positioned. In a row or in a column
   */
  direction: PropTypes.oneOf(["row", "column"]),
};
