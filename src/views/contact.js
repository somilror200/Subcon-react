import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Contact2 from '../components/contact2'
import Logos1 from '../components/logos1'
import Footer1 from '../components/footer1'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Subcon PL Website</title>
        <meta property="og:title" content="Contact - Subcon PL Website" />
      </Helmet>
      <Navbar4></Navbar4>
      <Contact2></Contact2>
      <Logos1 rootClassName="logos1-root-class-name"></Logos1>
      <Footer1></Footer1>
    </div>
  )
}

export default Contact
