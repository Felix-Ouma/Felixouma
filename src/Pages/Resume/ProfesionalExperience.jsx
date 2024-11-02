import React from 'react';
import styles from './ProfesionalExperience.module.css';
import Tools from './Tools';
import Experiences from './Experiences';

function ProfesionalExperience() {
  return (
  <>
    <div className={styles.bitWork}>
      <h2 className={styles.tittles}>My Professional Experience</h2>
      <p className={styles.description}>
      I've worked with top global and Kenyan corporations, brands, start-ups, and agencies alongside building my own product portfolio. For the past several years, I have implemented product innovation & met the business goals of organizations across a broad range of industries.      </p>
    </div>
    <Experiences />
  </>
  );
}

export default ProfesionalExperience;
 