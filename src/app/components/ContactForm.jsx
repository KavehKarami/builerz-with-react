import React from 'react';
import Form from "./shared/Form"
import Input from "./shared/Input"
import Textarea from "./shared/Textarea"

const ContactForm = () => {
  return (
    <div className="contact-form">
      <div id="success"></div>
      <Form btnText="Send Message" formName="sentMessage" formId="contactForm" btnId="sendMessageButton">
        <Input type="text" id="name" placeholder="Your Name" required="required" dataValidationMessage="Please enter your name" />
        <Input type="email" id="email" placeholder="Your Email" required="required" dataValidationMessage="Please enter your email" />
        <Input type="text" id="subject" placeholder="Subject" required="required" dataValidationMessage="Please enter a subject" />
        <Textarea id="message" placeholder="Message" required="required" dataValidationMessage="Please enter your message" />
      </Form>
    </div>
  );
}

export default ContactForm;