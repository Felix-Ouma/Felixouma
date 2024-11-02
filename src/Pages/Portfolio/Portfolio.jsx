import React from 'react'
import Navbar from '../../Components/Navbar'
import BitWork from './BitWork'
import Projects from './Projects'
import Footer from '../../Components/Footer'

const Portfolio = () => {
  return (
    <div>
        <Navbar />
        <BitWork />
        <Projects /> 
        <Footer />
    </div>
  )
}

export default Portfolio