import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  return (
    <div className={styles.contactContainer}>
      <a href="https://www.google.com/maps/search/?api=1&query=Nairobi,Kenya" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
        <FaMapMarkerAlt className={styles.icon} />
        <h4>OUR MAIN OFFICE</h4>
        <p>Nairobi, Kenya</p>
      </a>
      
      <a href="tel:+254115888327" className={styles.contactItem}>
        <FaPhone className={styles.icon} />
        <h4>PHONE NUMBER</h4>
        <p>+254 115 888 327</p>
      </a>
      
      <a href="https://wa.me/254115888327" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
        <FaWhatsapp className={styles.icon} />
        <h4>WHATSAPP</h4>
        <p>+254 115 888 327</p>
      </a>
      
      <a href="mailto:felixouma859@gmail.com" className={styles.contactItem}>
        <FaEnvelope className={styles.icon} />
        <h4>EMAIL</h4>
        <p>felixouma859@gmail.com</p>
      </a>
    </div>
  );
};

export default ContactSection;
