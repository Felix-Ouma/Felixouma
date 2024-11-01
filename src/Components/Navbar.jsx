import React, { useState } from 'react';
import { FaTwitter, FaLinkedin, FaInstagram, FaDribbble, FaYoutube, FaGithub, FaBars } from "react-icons/fa";
import styles from './Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Felix Ouma</div>

      <div className={`${styles.leftSection} ${menuOpen ? styles.show : ''}`}>
        <a href="#home">Home</a>
        <a href="#portfolio" className={styles.active}>Portfolio</a>
        <a href="#resume">Resume</a>
        <a href="#tutorials">Tutorials</a>
        <a href="#contacts">Contacts</a>
      </div>

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
        <div className={styles.menuToggle} onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
