// Learning.jsx
import React from 'react';
import styles from './LearningSchools.module.css';
import CvButton from './CvButton';

const LearningSchools = () => {
  return (
        <>
        <div className={styles.container}>
      <img
        src="https://res.cloudinary.com/dcmbm1sgc/image/upload/v1730547973/cuk_nfoubc.jpg"
        alt="Nielsen Norman Group"
        className={styles.logo}
      />
      <img
        src="https://amaniinstitute.org/wp-content/uploads/2016/09/nairobits.png"
        alt="Nielsen Norman Group"
        className={styles.logo}
      />
      <img
        src="https://i.pinimg.com/236x/d5/97/c9/d597c9205ef8f6671a1dd9a5a35dfb2d.jpg"
        alt="Nielsen Norman Group"
        className={styles.logo}
      />
      <img
        src="https://i.pinimg.com/236x/38/71/a2/3871a2297f67e9ea985aabf0ebfd5919.jpg"
        alt="Coursera"
        className={styles.logo}
      />
      <img
        src="https://powerlearnprojectafrica.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.c8000b08.png&w=256&q=75"
        alt="Interaction Design Foundation"
        className={styles.logo}
      />
      <img
        src="https://i.pinimg.com/236x/f9/bf/09/f9bf092c4afb02b2cf61a81779db96d4.jpg"
        alt="Udemy"
        className={styles.logo}
      />
      <img
        src="https://i.pinimg.com/236x/40/26/6a/40266aa91d83b991faee5c9529858a59.jpg"
        alt="Udemy"
        className={styles.logo}
      />
      <img
        src="https://res.cloudinary.com/dcmbm1sgc/image/upload/v1730547541/Adplist_yyirum.png"
        alt="ADP List"
        className={styles.logo}
      />
      
    </div>
    <CvButton />
    </>
      );
};

export default LearningSchools;
