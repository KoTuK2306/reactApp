import PropTypes from "prop-types";
import { StyledLabel, StyledCheckbox, StyledDiv, Background, Circle } from "./SwitchableCheckbox.style";

export const SwitchableCheckbox = ({
  text,
  textColor = "#000",
  checkedCheckbox = "#7309AA",
  uncheckedCheckbox = "#7E7E7E",
  checkboxBackground = "#ddd",
  size = "md",
}) => {
  let scale = 1;
  if (size === "sm") scale = 0.5;
  if (size === "lg") scale = 1.75;

  return (
    <StyledDiv>
      <StyledLabel scale={scale} textColor={textColor}>
        <Background checkboxBackground={checkboxBackground} scale={scale} />
        <StyledCheckbox checkedCheckbox={checkedCheckbox} scale={scale} type="checkbox" />
        <Circle uncheckedCheckbox={uncheckedCheckbox} scale={scale} />
        {text}
      </StyledLabel>
    </StyledDiv>
  );
};

SwitchableCheckbox.propTypes = {
  /**
   * Input lable text
   */
  text: PropTypes.string.isRequired,
  /**
   * Choose color for lable text
   */
  textColor: PropTypes.string,
  /**
   * Choose color for checked checkbox
   */
  checkedCheckbox: PropTypes.string,
  /**
   * Choose color for uncheckedCheckbox checkbox
   */
  uncheckedCheckbox: PropTypes.string,
  /**
   * Choose color for checkbox background
   */
  checkboxBackground: PropTypes.string,
  /**
   * Choose size of your switchable checkbox
   */
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
