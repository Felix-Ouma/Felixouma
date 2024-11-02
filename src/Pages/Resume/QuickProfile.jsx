import React, { useEffect, useState } from 'react';
import styles from './QuickProfile.module.css';

function QuickProfile() {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setFade(scrollTop > 100); // Adjust this value to control the fade start point
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${styles.bitWork} ${fade ? styles.fadeOut : ''}`}>
      <h2 className={styles.tittles}>Quick Profile</h2>
      <img src="https://res.cloudinary.com/dcmbm1sgc/image/upload/v1730188160/Annotation_2024-07-24_195406_tadpsn.jpg" alt="Profile" className={styles.profileImage} />
      <p className={styles.description}>
        I'm a self-motivated, innovative, and quality assurance person with diverse knowledge in the design and computer technology industries. My combined passions for visual art & problem-solving brought me here, to a position where I can demystify the everyday problems of users & empower them with delightful experiences & solutions.
      </p>
      <blockquote className={styles.quote}>
        "If you do build a great experience, customers tell each other about that. Word of mouth is very powerful." - Jeff Bezos
      </blockquote>
    </div>
  );
}

export default QuickProfile;
