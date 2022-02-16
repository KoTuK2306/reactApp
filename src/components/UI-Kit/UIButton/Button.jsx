import PropTypes from "prop-types";
import { StyledButton } from "./ButtonStyled";

export const Button = ({
  children,
  backgroundColor = "red",
  size = "md",
  onClick,
  variant = "standart",
  textColor = "black",
}) => {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;

  let isBorder = "";
  if (variant === "text") {
    backgroundColor = "rgba(0, 0, 0, 0)";
    isBorder = "none";
  }
  if (variant === "bordered") {
    isBorder = `1px solid ${backgroundColor}`;
    backgroundColor = "rgba(0, 0, 0, 0)";
  }

  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: isBorder,
    color: textColor,
    variant,
  };

  return (
    <StyledButton style={style} onClick={onClick}>
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
