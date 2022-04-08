import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oiglr4c",
        "template_gw323hr",
        form.current,
        "aDzNa_yTXzggtx3-w"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert("Message sent succesfully");
  };

  return (
    <div class="contact-container" id="contact-container">
      <form ref={form} onSubmit={sendEmail}>
        <h3>GET IN TOUCH</h3>
        <label>Name</label>
        <input type="text" name="name" placeholder="name" />
        <label>Email</label>
        <input type="email" name="user_email" placeholder="email" />
        <label>Message</label>
        <textarea name="message" rows="4" placeholder="message" />
        <input type="submit" value="Send" className="btn" />
      </form>
    </div>
  );
};

export default Contact;
