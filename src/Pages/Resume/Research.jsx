import React from 'react';
import styles from './Research.module.css';
import Tools from './Tools';

function Research() {
  return (
  <>
    <div className={styles.bitWork}>
      <h2 className={styles.tittles}>Research & Development Tools</h2>
      <p className={styles.description}>
      I’m a highly competent individual with mastery in a wide variety of professional-grade design applications. These are the preferred tools that I've been working on to streamline my design & research processes, but I'm always open to learning new methodologies, approaches, & strategies.
      </p>
    </div>
    <Tools />
  </>
  );
}

export default Research;
 