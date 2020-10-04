import React from 'react';

const Textarea = (props) => {
  return (
    <div className="control-group">
      <textarea className="form-control" id={props.id} placeholder={props.placeholder} required={props.required || false} data-validation-required-message={props.dataValidationMessage} >
      </textarea>
      <p className="help-block text-danger">{props.text}</p>
    </div>
  );
}

export default Textarea;