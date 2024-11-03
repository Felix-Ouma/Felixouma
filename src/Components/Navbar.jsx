// Navbar.js
import React, { useState } from 'react';
import { FaTwitter, FaLinkedin, FaInstagram, FaDribbble, FaYoutube, FaGithub, FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from './Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" className={styles.logo}>Felix Ouma</Link> {/* Link for Home */}
      </div>

      <div className={`${styles.leftSection} ${menuOpen ? styles.show : ''}`}>
        <Link to="/">Home</Link> {/* Link for Home */}
        <Link to="/portfolio" className={styles.active}>Portfolio</Link> {/* Link for Portfolio */}
        <Link to="/resume">Resume</Link>
        <Link to="/contacts">Contacts</Link>
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
