import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
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
    alert("message sent");
  };

  return (
    <div class="contact-container" id="contact-container">
      <form ref={form} onSubmit={handleSubmit}>
        <h3>GET IN TOUCH</h3>
        <label>Name</label>
        <input type="text" required name="name" placeholder="name" />
        <label>Email</label>
        <input type="email" required name="email" placeholder="email" />

        <label>Message</label>
        <textarea required name="message" rows="4" placeholder="message" />
        <input type="submit" value="Send" className="btn" />
      </form>
    </div>
  );
};

export default Contact;
