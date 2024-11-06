import React from 'react';
import styles from './CvButton.module.css';

const CvButton = () => {
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1_tnbXx7l9dTIQNVS_i4w4vB1WXsVUY57/view?usp=sharing', '_blank');
  };

  return (
    <div className={styles.buttonContainer}>
      <button className={styles.centerButton} onClick={handleDownload}>
        View My Resume
      </button>
    </div>
  );
};

export default CvButton;
