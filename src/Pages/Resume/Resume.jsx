import React from 'react'
import Navbar from '../../Components/Navbar'
import QuickProfile from './QuickProfile'
import Footer from '../../Components/Footer'
import ResearchProcess from './ResearchProcess'
import Research from './Research'
import ProfesionalExperience from './ProfesionalExperience'
import Learning from './Learning'

const Resume = () => {
  return (
    <>
    <Navbar />
    <QuickProfile />
    <ResearchProcess />
    <Research />
    <ProfesionalExperience />
    <Learning />
    <Footer />
    </>
  )
}

export default Resume