import React from "react";
import Social from "../components/Contact/Social";
import ContactForm from "../components/Contact/ContactForm";

const ContactPage = () => (
  <div className="container">
    <div className="row contact">
      <div className="col-lg-6">
        <Social />
      </div>
      <div className="col-lg-6">
        <ContactForm />
      </div>
    </div>
  </div>
);

export default ContactPage;
