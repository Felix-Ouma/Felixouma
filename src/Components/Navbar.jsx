// Navbar.js
import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram, FaDribbble, FaYoutube, FaGithub } from "react-icons/fa";
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <a href="#home">Home</a>
        <a href="#portfolio" className={styles.active}>Portfolio</a>
        <a href="#resume">Resume</a>
        <a href="#tutorials">Tutorials</a>
        <a href="#contacts">Contacts</a>
      </div>
      <div className={styles.logo}>PaulMbingu</div>
      <div className={styles.rightSection}>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaLinkedin />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaInstagram />
        </a>
        <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaDribbble />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaYoutube />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
