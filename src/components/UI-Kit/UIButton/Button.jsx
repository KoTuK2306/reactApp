import PropTypes from "prop-types";
import { StyledButton } from "./Button.style";

export const Button = ({
  children,
  backgroundColor = "red",
  size = "md",
  onClick,
  variant = "standart",
  textColor = "black",
  radius = 5,
}) => {
  let buttonSize = "0.5rem 1rem";
  if (size === "lg") buttonSize = `${1.5 * 0.5}rem ${1.5 * 1}rem`;
  if (size === "sm") buttonSize = `${0.75 * 0.5}rem ${0.75 * 1}rem`;

  return (
    <StyledButton
      backgroundColor={backgroundColor}
      size={buttonSize}
      onClick={onClick}
      variant={variant}
      textColor={textColor}
      radius={radius}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  /**
   * Choose content for your button
   */
  children: PropTypes.node.isRequired,
  /**
   * Choose color for your button
   */
  backgroundColor: PropTypes.string,
  /**
   * Choose size of your button
   */
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onClick: PropTypes.func.isRequired,
  /**
   * Choose one of three variant of your button
   */
  variant: PropTypes.oneOf(["standart", "bordered", "text"]),
  /**
   * Select the color of the text contained in the button
   */
  textColor: PropTypes.string,
  /**
   * Configure radius of your button
   */
  radius: PropTypes.number,
};
