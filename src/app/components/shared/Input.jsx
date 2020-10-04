import React from 'react';

const Input = (props) => {
  return (

    <div className="control-group">
      {props.isLabel && <label htmlFor={props.labelFor}>{props.labelText}</label>}
      <input type={props.type} className="form-control" id={props.id} placeholder={props.placeholder} required={props.required || false} data-validation-required-message={props.dataValidationMessage} />
      <p className="help-block text-danger">{props.text || ""}</p>
    </div>

  );
}

export default Input;