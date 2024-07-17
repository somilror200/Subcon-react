import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Hero17 from '../components/hero17'
import CTA26 from '../components/cta26'
import Footer1 from '../components/footer1'
import './gallery.css'

const Gallery = (props) => {
  return (
    <div className="gallery-container">
      <Helmet>
        <title>Gallery - Subcon PL Website</title>
        <meta property="og:title" content="Gallery - Subcon PL Website" />
      </Helmet>
      <Navbar4></Navbar4>
      <Hero17></Hero17>
      <CTA26></CTA26>
      <Footer1></Footer1>
    </div>
  )
}

export default Gallery
