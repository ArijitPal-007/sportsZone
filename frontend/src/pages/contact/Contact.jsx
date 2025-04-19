import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Fill out the form below to get in touch.</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name</label>
          <input 
            type="text" 
            placeholder="Enter your name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            required 
          />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required 
          />
        </div>
        <div className="input-group">
          <label>Message</label>
          <textarea 
            rows="4" 
            placeholder="Enter your message" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            autoComplete="off"
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
