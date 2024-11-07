import React from 'react'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import Conect from './Conect'
import ContactForm from './ContactForm'
import FormText from './FormText'

const Contacts = () => {
  return (
    <>
    <Navbar />
    <Conect />
    <FormText />
    <ContactForm />
    <Footer />
    </>
  )
}

export default Contacts