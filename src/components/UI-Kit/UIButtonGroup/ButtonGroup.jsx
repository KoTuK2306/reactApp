import PropTypes from "prop-types";
import { StyledButtonForGroup } from "./ButtonGroup.style";

export const ButtonGroup = ({
  items,
  backgroundColor = "red",
  textColor = "black",
  size = "md",
  variant = "standart",
  onClick,
}) => {
  let buttonSize = "0.5rem 1rem";
  let buttonHeight = "0.5";
  if (size === "lg") {
    buttonSize = `${1.5 * 0.5}rem ${1.5 * 1}rem`;
    buttonHeight = buttonHeight * 1.5;
  }
  if (size === "sm") {
    buttonSize = `${0.75 * 0.5}rem ${0.75 * 1}rem`;
    buttonHeight = buttonHeight * 0.75;
  }
  return (
    <>
      {items.map((item) => (
        <StyledButtonForGroup
          backgroundColor={backgroundColor}
          textColor={textColor}
          buttonSize={buttonSize}
          variant={variant}
          onClick={onClick}
          buttonHeight={buttonHeight}
        >
          {item}
        </StyledButtonForGroup>
      ))}
    </>
  );
};

ButtonGroup.propTypes = {
  /**
   * Choose content for your button
   */
  items: PropTypes.array.isRequired,
  /**
   * Choose color for your button
   */
  backgroundColor: PropTypes.string,
  /**
   * Choose color for text in button
   */
  textColor: PropTypes.string,
  /**
   * Choose size of your button
   */
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  /**
   * Choose one of three variant of your button
   */
  variant: PropTypes.oneOf(["standart", "bordered", "text"]),
  onClick: PropTypes.func.isRequired,
};
