import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaDribbble, FaYoutube, FaGithub, FaFacebook } from "react-icons/fa";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      {/* Avatar Section */}
      <div className={styles.avatarSection}></div>
      {/* Center Section for text and buttons */}
      <div className={styles.centerSection}>
        <div className={styles.logo}>Felix Ouma</div>
        <p className={styles.introText}>Hi there, my name is Felix, I am an elite</p>
        <h1 className={styles.title}>Frontend Developer (UI/UX) & SEO Strategist</h1>
        <p className={styles.description}>
          Helping businesses build innovative, user-centric, design-led software.
        </p>
        <button className={styles.button}>Portfolio & Resume</button>
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
        </div>
      </div>
    </div>
  );
};

export default Home;
