import React from 'react';
import styles from './CvButton.module.css';

const CvButton = () => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.centerButton}>Download CV</button>
    </div>
  );
};

export default CvButton;
