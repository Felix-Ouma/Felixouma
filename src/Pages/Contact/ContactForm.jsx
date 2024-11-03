import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    subject: '',
    message: '',
    linkedin: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_jt6p6xp',      // Replace with your EmailJS Service ID
      'template_cqv0vef',     // Replace with your EmailJS Template ID
      {
        fullName: formData.fullName,
        companyName: formData.companyName,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        linkedin: formData.linkedin
      },
      'qVvtOVNDWSt_hyP-e'           // Replace with your EmailJS User ID
    )
    .then((result) => {
      console.log('Email successfully sent!', result.status, result.text);
      alert('Message sent successfully!');
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <label>
        Full Name *
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="e.g. Felix Ouma"
          required
        />
      </label>

      <label>
        Business/Company Name
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="e.g. Google"
        />
      </label>

      <label>
        Email Address *
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="e.g. felixouma859@gmail.com"
          required
        />
      </label>

      <label>
        Email Subject *
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="e.g. Frontend Developer"
          required
        />
      </label>

      <label>
        Message *
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message..."
          required
        ></textarea>
      </label>

      <label>
        Your LinkedIn Profile
        <input
          type="url"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="e.g. linkedin.com/in/Felixouma"
        />
      </label>

      <button type="submit" className={styles.submitButton}>Submit</button>
    </form>
  );
};

export default ContactForm;
