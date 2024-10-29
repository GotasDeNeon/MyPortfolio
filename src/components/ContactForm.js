import React from 'react';
import './ContactForm';

const ContactForm = () => (
  <section className="contact">
    <h3>Contact Me</h3>
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Address:
        <input type="text" name="address" />
      </label>
      <button type="submit">submit</button>
    </form>
  </section>
);

export default ContactForm;
