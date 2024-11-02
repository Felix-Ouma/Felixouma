import React from "react";
import { FaLinkedin, FaDribbble, FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a href="https://www.linkedin.com/in/felixouma" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaLinkedin />
        </a>
        <a href="https://dribbble.com/felolearn01" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaDribbble />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100091803387677" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaFacebook />
        </a>
        <a href="https://github.com/Felix-Ouma" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/felixouma" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaInstagram />
        </a>
        <a href="https://twitter.com/felixouma" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaTwitter />
        </a>
      </div>
      <p className={styles.footerText}>© {new Date().getFullYear()} Felix Ouma. All rights reserved. Other intellectual properties belong to their respective owners. Some case studies are modified or hidden due to non-disclosure agreements..</p>
    </footer>
  );
};

export default Footer;
