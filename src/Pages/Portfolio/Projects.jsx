import React from 'react';
import styles from './Projects.module.css';

function Projects() {
  const projects = [

    {
      title: "Boltshift UI/UX Showcase",
      description: "Curated a collection of designs for a cross-platform e-commerce experience.",
      image: "https://res.cloudinary.com/dcmbm1sgc/image/upload/v1730496732/File_Cover_elwr6m.png",
      alt: "Boltshift UI/UX Showcase",
      url: "https://boltshift.vercel.app/",
    },
    
    {
      title: "Iviti Crude Oil Refineries Website",
      description: "Developed a single-page website with sections for Iviti Crude Oil Refineries.",
      image: "https://res.cloudinary.com/dcmbm1sgc/image/upload/v1730791672/ivitiPage_ytky9v.jpg",
      alt: "Iviti Crude Oil Refineries Website",
      url: "https://ivitioilrefinery.com/",
    },
    {
      "title": "Little Lemon Restaurant - Fresh Mediterranean Flavors",
      "description": "Experience the vibrant, authentic Mediterranean cuisine at Little Lemon Restaurant.",
      "image": "https://res.cloudinary.com/dcmbm1sgc/image/upload/v1730793403/LittleLemon_o3tqvh.jpg", 
      "alt": "Little Lemon Restaurant - Fresh Mediterranean Flavors",
      "url": "https://little-lemon-restaurant-iota.vercel.app/"
    },

    {
      title: "Mawingu Coffee Website Design",
      description: "Created a responsive website for Mawingu Coffee to showcase their products and services.",
      image: "https://res.cloudinary.com/dcmbm1sgc/image/upload/v1730792299/Mawingu_u9blg2.jpg",
      alt: "Mawingu Coffee Website Design",
      url: "https://demo.mawingucoffee.com/"
    },
    
    {
      "title": "eCommerce Filter - Refine Your Shopping Experience",
      "description": "An intuitive eCommerce filtering system to help users easily find products by category, brand, and price range.",
      "image": "https://res.cloudinary.com/dcmbm1sgc/image/upload/v1730796365/Filter_sfdiwq.jpg",
      "alt": "eCommerce Filter - Refine Your Shopping Experience",
      "url": "https://ecomerece-filter.vercel.app/"
    },    
    {
      title: "EmroseCare Services",
      description: "Implemented a responsive navigation bar with mobile-friendly styling.",
      image: "https://res.cloudinary.com/dcmbm1sgc/image/upload/v1730792778/Emrose_zlqjq4.jpg",
      alt: "Responsive Navbar",
      url: "https://emrosecareservices.com/",
    },
    {
      "title": "Explore the World - Felix Ouma's Travel Website",
      "description": "Discover breathtaking destinations and travel tips with Felix Ouma's travel website.",
      "image": "https://res.cloudinary.com/dcmbm1sgc/image/upload/v1730793755/Travel_gxxj39.jpg",
      "alt": "Explore the World - Felix Ouma's Travel Website",
      "url": "https://felix-ouma.github.io/Travel-website/index.html#About"
    },

    {
      "title": "University Web Tutorial - Learn and Grow",
      "description": "A comprehensive guide for students to explore academic resources and university life tips.",
      "image": "https://res.cloudinary.com/dcmbm1sgc/image/upload/v1730794601/University_u4kncr.jpg",
      "alt": "University Web Tutorial - Learn and Grow",
      "url": "https://university-web-tutorial-git-main-felix-ouma.vercel.app/"
    },
       
    {
      "title": "Felix Ouma - Portfolio",
      "description": "Explore Felix Ouma's portfolio showcasing projects in web development and design.",
      "image": "https://res.cloudinary.com/dcmbm1sgc/image/upload/v1730194533/3d-portrait-people_ektuqn.jpg",
      "alt": "Felix Ouma - Portfolio",
      "url": "https://felixouma.vercel.app/"
    }
    
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
