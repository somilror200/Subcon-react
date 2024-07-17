import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './hero91.css'

const Hero91 = (props) => {
  return (
    <div className="hero91-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero91-image"
      />
      <div className="hero91-container"></div>
      <div className="hero91-max-width thq-section-max-width">
        <div className="hero91-content">
          <h1 className="hero91-text thq-heading-1">{props.heading1}</h1>
          <p className="hero91-text1 thq-body-large">{props.content1}</p>
          <div className="hero91-actions">
            <Link to="/about" className="hero91-button thq-button-filled">
              <span className="hero91-text2 thq-body-small">
                {props.action1}
              </span>
            </Link>
            <Link to="/contact" className="hero91-button1 thq-button-outline">
              <span className="hero91-text3 thq-body-small">
                {props.action2}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero91.defaultProps = {
  action2: 'Contact Us',
  image1Alt: 'Residential Concrete Construction',
  image1Src: '/services-steel-image-1500w.jpg',
  heading1: 'Top-Quality Concrete Solutions for Your Home',
  content1:
    'Subcon P/L specializes in residential slab construction services in Western Melbourne, Northern Melbourne, and the Ballarat region.',
  action1: 'Learn More',
}

Hero91.propTypes = {
  action2: PropTypes.string,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
}

export default Hero91
