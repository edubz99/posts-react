import React from 'react';
import './form-input.styles.scss';

const FormInput = ({handleChange, ...otherProps}) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {
      otherProps.label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {
          otherProps.label
        }
      </label>
    ) : null}
  </div>
)

export default FormInput;
