import React from 'react';
import styles from './Projects.module.css';

function Projects() {
  const projects = [
    {
      title: "Senje's Cuisines Food Delivery App Case Study",
      description: "Designed an app to help users find and order delicious food from local restaurants.",
      image: "https://res.cloudinary.com/dcmbm1sgc/image/upload/v1730496732/File_Cover_elwr6m.png",
      alt: "Senje's Cuisines Food Delivery App Case Study",
    },
    {
      title: "Boltshift UI/UX Showcase",
      description: "Curated a collection of designs for a cross-platform e-commerce experience.",
      image: "https://res.cloudinary.com/dcmbm1sgc/image/upload/v1730496732/File_Cover_elwr6m.png",
      alt: "Boltshift UI/UX Showcase",
    },
    {
      title: "Building a Premier Cross-platform eCommerce Experience",
      description: "Research, Design, & Engineering Case Study",
      image: "https://res.cloudinary.com/dcmbm1sgc/image/upload/v1730496732/File_Cover_elwr6m.png",
      alt: "Building a Premier Cross-platform eCommerce Experience",
    },
    {
      title: "Building a Premier Cross-platform eCommerce Experience",
      description: "Research, Design, & Engineering Case Study",
      image: "https://res.cloudinary.com/dcmbm1sgc/image/upload/v1730496732/File_Cover_elwr6m.png",
      alt: "Building a Premier Cross-platform eCommerce Experience",
    },
    {
      title: "Building a Premier Cross-platform eCommerce Experience",
      description: "Research, Design, & Engineering Case Study",
      image: "https://res.cloudinary.com/dcmbm1sgc/image/upload/v1730496732/File_Cover_elwr6m.png",
      alt: "Building a Premier Cross-platform eCommerce Experience",
    },
    {
      title: "Building a Premier Cross-platform eCommerce Experience",
      description: "Research, Design, & Engineering Case Study",
      image: "https://res.cloudinary.com/dcmbm1sgc/image/upload/v1730496732/File_Cover_elwr6m.png",
      alt: "Building a Premier Cross-platform eCommerce Experience",
    },
    // Add more projects here
  ];

  return (
    <div className={styles.projects}>
      {projects.map((project) => (
        <div className={styles.project} key={project.title}>
          <img src={project.image} alt={project.alt} className={styles.images} />
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectDescription}>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;