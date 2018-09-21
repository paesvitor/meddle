import React from "react";
import PropTypes from "prop-types";
import DefaultButton from "./types/DefaultButton";
import OutlineButton from "./types/OutlineButton";
import ButtonLoading from "./types/LoadingButton";

const BUTTON_TYPES = {
  default: DefaultButton,
  outline: OutlineButton
};

const Button = props => {
  const { children, type, loading } = props;
  const Handler = BUTTON_TYPES[type];

  return (
    <Handler {...props} disabled={loading}>
      <div>{children}</div>
      {loading && <ButtonLoading>Loading</ButtonLoading>}
    </Handler>
  );
};

Button.propTypes = {
  /**
   * Button color options
   */
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "info",
    "danger",
    "warning"
  ]),
  /**
   * Button size options
   */
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
  /**
   * Button type options
   */
  type: PropTypes.oneOf(["default", "flat", "outline"])
};

Button.defaultProps = {
  color: "primary",
  size: "md",
  type: "default"
};

export default Button;