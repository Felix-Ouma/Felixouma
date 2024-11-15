import React from 'react';
import styles from './Conect.module.css';
import CvButton from '../Resume/CvButton';
import ContactSection from './ContactSection';

function Conect () {
  return (
  <>
    <div className={styles.bitWork}>
      <h2 className={styles.tittles}>Let's work Together</h2>
      <p className={styles.description}>
      I'm always excited to work on the next big product! I'm open to full-time offers and long-term contracts., Please feel free to reach out </p>  
    </div>
    <ContactSection />
    <CvButton />
  </>
  );
}

export default Conect;
 