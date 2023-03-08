import React from 'react'
import ContactForm from '../forms/ContactForm'
import Breadcrumb from '../partials/Breadcrumb'
import GoogleMaps from '../partials/GoogleMaps'
import Header from '../partials/Header'

const Contacts = () => {
  return (
    <>
      <Header />
      <Breadcrumb currentPage="Contacts" />
      <GoogleMaps />
      <ContactForm />
    </>
  )
}

export default Contacts