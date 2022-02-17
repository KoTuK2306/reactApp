import PropTypes from "prop-types";
import { StyledButton } from "./Button.style";

export const Button = ({
  children,
  backgroundColor = "red",
  size = "md",
  onClick,
  variant = "standart",
  textColor = "black",
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
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["standart", "bordered", "text"]),
  textColor: PropTypes.string,
};
