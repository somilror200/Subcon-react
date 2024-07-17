import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Hero91 from '../components/hero91'
import ContentList4 from '../components/content-list4'
import Footer1 from '../components/footer1'
import './services.css'

const Services = (props) => {
  return (
    <div className="services-container">
      <Helmet>
        <title>Services - Subcon PL Website</title>
        <meta property="og:title" content="Services - Subcon PL Website" />
      </Helmet>
      <Navbar4></Navbar4>
      <Hero91></Hero91>
      <ContentList4></ContentList4>
      <Footer1></Footer1>
    </div>
  )
}

export default Services
