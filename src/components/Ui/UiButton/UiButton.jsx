import React from "react";
import PropTypes from "prop-types";
import { Button } from "./styled";

const UiButton = ({ text, onClick, disabled, theme = "dark" }) => {
  return (
    <Button onClick={onClick} disabled={disabled} theme={theme}>
      {text}
    </Button>
  );
};

UiButton.prototype = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
};

export default UiButton;
