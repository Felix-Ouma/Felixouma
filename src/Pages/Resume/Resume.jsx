import React from 'react'
import Navbar from '../../Components/Navbar'
import QuickProfile from './QuickProfile'
import Footer from '../../Components/Footer'
import ResearchProcess from './ResearchProcess'
import Research from './Research'
import ProfesionalExperience from './ProfesionalExperience'

const Resume = () => {
  return (
    <>
    <Navbar />
    <QuickProfile />
    <ResearchProcess />
    <Research />
    <ProfesionalExperience />
    <Footer />
    </>
  )
}

export default Resume