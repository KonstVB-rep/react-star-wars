import React from 'react';
import PropTypes from "prop-types";
import {Div, Input} from "./styled";
import iconClose from './img/close-rectangle-f-svgrepo-com.svg'

const UiInput = ({value='',handleInputChange,placeholder,classes}) => (
  <Div className={classes} value={value}>
    <Input type = "text" value = {value} onChange = {(e) => handleInputChange(e.target.value)}
              placeholder = {placeholder} />
    <img src={iconClose} alt={"Clear input"} onClick={() => handleInputChange('')}/>
  </Div>
  );


UiInput.propTypes = {
  value: PropTypes.string,
  handleInputChange: PropTypes.func,
  placeholder: PropTypes.string,
  classes: PropTypes.string,
};

export default UiInput;