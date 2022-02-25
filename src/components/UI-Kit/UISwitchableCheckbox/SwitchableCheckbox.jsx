import PropTypes from "prop-types";
import { StyledLabel, StyledCheckbox } from "./SwitchableCheckbox.style";

export const SwitchableCheckbox = ({
  text,
  textColor = "#000",
  checkedCheckbox = "#7309AA",
  uncheckedCheckbox = "#7E7E7E",
  checkboxBackground = "#ddd",
}) => {
  return (
    <>
      <StyledCheckbox
        type="checkbox"
        id={`check${text}`}
        checkedCheckbox={checkedCheckbox}
        uncheckedCheckbox={uncheckedCheckbox}
        checkboxBackground={checkboxBackground}
      ></StyledCheckbox>
      <StyledLabel for={`check${text}`} textColor={textColor}>
        {text}
      </StyledLabel>
    </>
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
};
