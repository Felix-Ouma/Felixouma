import React from 'react';
import styles from './Experiences.module.css';

const Experiences = () => {
  return (
    <>
      <div className={styles.container}>
        <img src="https://res.cloudinary.com/dcmbm1sgc/image/upload/v1730543052/sizzle_africa_logo-removebg-preview_ft6xri.png" alt="Sizzle Africa Logo" className={styles.logo} />
        <div className={styles.content}>
          <h2>Frontend Developer & SEO Strategist: Sizzle Africa (September 2024 - Present)</h2>
          <ul>
            <li>Developed dynamic user interfaces using React, Next.js, JavaScript, and TypeScript, enhancing user engagement by 30%.</li>
            <li>Collaborated with UI/UX designers to create visually appealing, responsive designs, resulting in a 20% boost in user satisfaction.</li>
            <li>Worked closely with back-end teams, reducing integration issues by 40% and improving data flow for a seamless user experience.</li>
            <li>Optimized page load times by 35% with efficient coding practices, enhancing both performance and SEO metrics.</li>
            <li>Implemented mobile-first design principles, increasing mobile engagement by 25% and improving accessibility.</li>
            <li>Led site-wide performance optimization, cutting load times by 50% and significantly boosting SEO rankings.</li>
            <li>Executed advanced SEO strategies, including keyword research and on-page optimization, to drive organic traffic.</li>
            <li>Ensured 99.9% uptime through proactive monitoring and cross-team collaboration, providing users with consistent access.</li>
            <li>Analyzed and reported on SEO and engagement metrics, providing actionable insights for growth strategies.</li>
            <li>Mentored front-end team members on React and Next.js best practices, contributing to higher code quality and team efficiency.</li>
          </ul>
        </div>
      </div>

      <div className={styles.container}>
        <img src="https://excite.company/assets/ExciteLogo.svg" alt="Excite Logo" className={styles.logo} />
        <div className={styles.content}>
          <h2>Frontend Developer: Excite! Innovation Company (December 2023 - October 2024)</h2>
          <ul>
            <li>Built engaging user interfaces with React, JavaScript, and TypeScript, resulting in a 30% increase in user interaction.</li>
            <li>Integrated front-end components seamlessly with applications, improving development efficiency by 25%.</li>
            <li>Partnered with UI/UX teams to deliver high-quality, user-centered designs, raising user satisfaction by 20%.</li>
            <li>Collaborated with back-end developers to streamline data integration, reducing front-end issues by 40%.</li>
            <li>Enhanced web performance by reducing page load times by 35% through optimized React components and efficient coding.</li>
            <li>Focused on mobile responsiveness, achieving a 25% increase in mobile engagement and ensuring a seamless experience on all devices.</li>
            <li>Conducted code reviews, improving code quality and reducing bugs by 30%, resulting in smoother user interactions.</li>
            <li>Maintained 99.9% uptime, providing users with reliable, uninterrupted access to web applications.</li>
            <li>Engaged in team discussions to align front-end development with project goals, ensuring cohesive, user-focused solutions.</li>
            <li>Promoted best practices in front-end development, driving team productivity and elevating project quality.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experiences;
