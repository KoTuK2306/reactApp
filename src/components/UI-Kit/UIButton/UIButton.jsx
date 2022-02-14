import PropTypes from "prop-types";
import cn from "classnames";
import classes from "./UIButton.module.css";

export const UIButton = (props) => {
  return <button className={cn(classes[props.variant])}>{props.text}</button>;
};

UIButton.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
};
