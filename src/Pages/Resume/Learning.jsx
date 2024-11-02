import React from 'react';
import styles from './Learning.module.css';
import LearningSchools from './LearningSchools';
function Learning() {
  return (
  <>
    <div className={styles.bitWork}>
      <h2 className={styles.tittles}>Learning & Growth Strategy</h2>
      <p className={styles.description}>
      Design & research techniques & tools are constantly evolving. This is because modern users are highly empowered with information to make brand choices. To make sure that I'm keeping up with the industry, I have enrolled in several world-class online research & design learning platforms.
      </p>
    </div>
    <LearningSchools />
  </>
  );
}

export default Learning;
 