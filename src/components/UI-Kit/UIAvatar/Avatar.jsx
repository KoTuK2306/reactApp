import PropTypes from "prop-types";
import { StyledAvatar } from "./Avatar.style";

export const Avatar = ({
  children = "",
  size = "md",
  textColor = "",
  backgroundColor = "",
  variant = "rounded",
  src = "",
}) => {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 2;
  return (
    <StyledAvatar scale={scale} src={src} backgroundColor={backgroundColor} textColor={textColor} variant={variant}>
      {children}
    </StyledAvatar>
  );
};

Avatar.propTypes = {
  /**
   * Сhoose children for your avatar (don't use if you uses image)
   */
  children: PropTypes.node,
  /**
   * Сhoose size of your avatar
   */
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  /**
   * Сhoose color for your avatar text (use this if you use text avatar)
   */
  textColor: PropTypes.string,
  /**
   * Сhoose color for your avatar background (use this if you use text avatar)
   */
  backgroundColor: PropTypes.string,
  /**
   * Сhoose variant for your avatar
   */
  variant: PropTypes.oneOf(["rounded", "square"]),
  /**
   * Specify the path to the image
   */
  src: PropTypes.string,
};
