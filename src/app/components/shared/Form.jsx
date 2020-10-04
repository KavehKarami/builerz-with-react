import React from 'react';

const Form = (props) => {
  return (
    <form name={props.formName} id={props.formId} noValidate="novalidate">
      {props.children}

      <div className={props.btnGpClass}>
        <button className="btn" type="submit" id={props.btnId}>{props.btnText}</button>
      </div>
    </form>

  );
}

export default Form;