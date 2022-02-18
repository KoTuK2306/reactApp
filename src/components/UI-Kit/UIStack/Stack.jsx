import PropTypes from "prop-types";
import { StyledStack } from "./Stack.style";

export const Stack = ({ children, spacing = 2, direction = "row", isWrap = false }) => {
  return (
    <StyledStack spacing={spacing} direction={direction} isWrap={isWrap}>
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
  isWrap: PropTypes.bool,
  /**
   * Choose how the children will be positioned. In a row or in a column
   */
  direction: PropTypes.oneOf(["row", "column"]),
};
