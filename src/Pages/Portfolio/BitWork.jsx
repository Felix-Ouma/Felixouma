import React, { useEffect, useState } from 'react';
import styles from './BitWork.module.css';
import CvButton from '../Resume/CvButton';

function BitWork() {
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
      <h2 className={styles.tittles}>A Bit About My Work</h2>
      <p className={styles.description}>
        As an experienced Frontend Developer and SEO strategist, I build products from ideation to launch and seamlessly integrate the brand across the customer journey. My visual designs are adaptable to brand requirements and my feedback systems are formulated with best practices in logic, UX, design systems, engineering, and accessibility. Below are case studies of projects I have worked on. Enjoy!
      </p>
      <CvButton />
    </div>
  );
}

export default BitWork;
