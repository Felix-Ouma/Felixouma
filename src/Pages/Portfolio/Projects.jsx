import React from 'react';
import styles from './Projects.module.css';

function Projects() {
  const projects = [
    {
      title: "Senje's Cuisines Food Delivery App Case Study",
      description: "Designed an app to help users find and order delicious food from local restaurants.",
      image: "https://res.cloudinary.com/dcmbm1sgc/image/upload/v1730496732/File_Cover_elwr6m.png",
      alt: "Senje's Cuisines Food Delivery App Case Study",
      url: "https://boltshift.vercel.app/",
    },
    {
      title: "Boltshift UI/UX Showcase",
      description: "Curated a collection of designs for a cross-platform e-commerce experience.",
      image: "https://res.cloudinary.com/dcmbm1sgc/image/upload/v1730496732/File_Cover_elwr6m.png",
      alt: "Boltshift UI/UX Showcase",
      url: "https://boltshift.vercel.app/",
    },
    {
      title: "Building a Premier Cross-platform eCommerce Experience",
      description: "Research, Design, & Engineering Case Study",
      image: "https://res.cloudinary.com/dcmbm1sgc/image/upload/v1730496732/File_Cover_elwr6m.png",
      alt: "Building a Premier Cross-platform eCommerce Experience",
      url: "https://boltshift.vercel.app/",
    },
    {
      title: "Mawingu Coffee Website Design",
      description: "Created a responsive website for Mawingu Coffee to showcase their products and services.",
      image: "https://res.cloudinary.com/dcmbm1sgc/image/upload/v1730496732/File_Cover_elwr6m.png",
      alt: "Mawingu Coffee Website Design",
      url: "https://boltshift.vercel.app/",
    },
    {
      title: "Iviti Crude Oil Refineries Website",
      description: "Developed a single-page website with sections for Iviti Crude Oil Refineries.",
      image: "https://res.cloudinary.com/dcmbm1sgc/image/upload/v1730496732/File_Cover_elwr6m.png",
      alt: "Iviti Crude Oil Refineries Website",
      url: "https://boltshift.vercel.app/",
    },
    {
      title: "E-commerce Product Filter Component",
      description: "Built a product filter component for an e-commerce site, including categories, brands, and price ranges.",
      image: "https://res.cloudinary.com/dcmbm1sgc/image/upload/v1730496732/File_Cover_elwr6m.png",
      alt: "E-commerce Product Filter Component",
      url: "https://boltshift.vercel.app/",
    },
    {
      title: "Responsive Navbar",
      description: "Implemented a responsive navigation bar with mobile-friendly styling.",
      image: "https://res.cloudinary.com/dcmbm1sgc/image/upload/v1730496732/File_Cover_elwr6m.png",
      alt: "Responsive Navbar",
      url: "https://boltshift.vercel.app/",
    },
    {
      title: "Sizzle Africa SEO Strategy",
      description: "Executed a comprehensive SEO strategy to improve search rankings and drive traffic for Sizzle Africa.",
      image: "https://res.cloudinary.com/dcmbm1sgc/image/upload/v1730496732/File_Cover_elwr6m.png",
      alt: "Sizzle Africa SEO Strategy",
      url: "https://boltshift.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description: "Designed and developed my own portfolio website to showcase personal projects and skills.",
      image: "https://res.cloudinary.com/dcmbm1sgc/image/upload/v1730496732/File_Cover_elwr6m.png",
      alt: "Portfolio Website",
      url: "https://boltshift.vercel.app/",
    },
  ];

  return (
    <div className={styles.projects}>
      {projects.map((project) => (
        <a href={project.url} className={styles.project} key={project.title} target="_blank" rel="noopener noreferrer">
          <img src={project.image} alt={project.alt} className={styles.images} />
          <div className={styles.overlay}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Projects;
