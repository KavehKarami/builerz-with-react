import React from 'react';

const Form = (props) => {
  return (
    <form name={props.formName} id={props.formId} noValidate="novalidate">
      {props.children}

      <div>
        <button className="btn" type="submit" id={props.btnId}>Send Message</button>
      </div>
    </form>

  );
}

export default Form;