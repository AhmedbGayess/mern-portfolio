import React from "react";
import { connect } from "react-redux";
import validator from "validator";
import { sendMessage } from "../../store/actions/message";
import FormInputField from "../Common/FormInputField";
import FormTextArea from "../Common/FormTextArea";

class ContactForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    step: 1,
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    subjectError: "",
    messageError: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async e => {
    e.preventDefault();

    const { firstName, lastName, email, subject, message } = this.state;

    await this.validate();

    if (
      this.state.firstNameError ||
      this.state.lastNameError ||
      this.state.emailError ||
      this.state.subjectError ||
      this.state.messageError
    ) {
      return;
    }
    await this.props.sendMessage({
      firstName,
      lastName,
      email,
      subject,
      message
    });
    this.setState({ step: 2 });
  };

  validate = () => {
    const { firstName, lastName, email, subject, message } = this.state;
    if (firstName.length < 2) {
      this.setState({ firstNameError: "Please add your first name" });
    } else {
      this.setState({ firstNameError: "" });
    }
    if (lastName.length < 2) {
      this.setState({ lastNameError: "Please add your last name" });
    } else {
      this.setState({ lastNameError: "" });
    }
    if (email === "" || !validator.isEmail(email)) {
      this.setState({ emailError: "Please add a valid email address" });
    } else {
      this.setState({ emailError: "" });
    }
    if (subject.length < 2) {
      this.setState({ subjectError: "Please add a subject for your message" });
    } else {
      this.setState({ subjectError: "" });
    }
    if (message.length < 50) {
      this.setState({
        messageError: "Please add your message (At least 50 characters)"
      });
    } else {
      this.setState({ messageError: "" });
    }
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      subject,
      message,
      step,
      firstNameError,
      lastNameError,
      emailError,
      subjectError,
      messageError
    } = this.state;
    let content;
    if (step === 1) {
      content = (
        <div className="mb-5">
          <form className="p-3 border rounded shadow" onSubmit={this.onSubmit}>
            <FormInputField
              name="firstName"
              label="First Name"
              placeholder="Your first name"
              onChange={this.onChange}
              value={firstName}
              error={firstNameError}
            />
            <FormInputField
              label="Last Name"
              name="lastName"
              placeholder="Your last name"
              onChange={this.onChange}
              value={lastName}
              error={lastNameError}
            />
            <FormInputField
              label="Email Address"
              name="email"
              placeholder="Your email address"
              onChange={this.onChange}
              value={email}
              error={emailError}
            />
            <FormInputField
              label="Subject"
              name="subject"
              placeholder="What's the subject of your message"
              onChange={this.onChange}
              value={subject}
              error={subjectError}
            />
            <FormTextArea
              onChange={this.onChange}
              label="Message"
              name="message"
              placeholder="Your message"
              value={message}
              error={messageError}
            />
            <div className="text-center">
              <button className="message-button">SUBMIT YOUR MESSAGE</button>
            </div>
          </form>
        </div>
      );
    } else {
      content = (
        <div className="message-sent">
          <div className="alert alert-success text-center success mt-5">
            Thank you for sending me a message, I'll get back to you shortly.
          </div>
        </div>
      );
    }
    return <div>{content}</div>;
  }
}

export default connect(null, { sendMessage })(ContactForm);
