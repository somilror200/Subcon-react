import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './hero9.css'

const Hero9 = (props) => {
  return (
    <div className="hero9-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero9-image"
      />
      <div className="hero9-container"></div>
      <div className="hero9-max-width thq-section-max-width">
        <div className="hero9-content">
          <h1 className="hero9-text thq-heading-1">{props.heading1}</h1>
          <p className="hero9-text1 thq-body-large">{props.content1}</p>
          <div className="hero9-actions">
            <Link to="/about" className="hero9-button thq-button-filled">
              <span className="hero9-text2 thq-body-small">
                {props.action1}
              </span>
            </Link>
            <Link to="/contact" className="hero9-button1 thq-button-outline">
              <span className="hero9-text3 thq-body-small">
                {props.action2}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero9.defaultProps = {
  action2: 'Contact Us',
  image1Src: '/slab_bg%20(1)-1500w.jpg',
  action1: 'Learn More',
  imageSrc: '33561121-6d47-4a33-a2a0-eea4f10382d9',
  imageAlt: 'image',
  heading1: 'Welcome to Subcon P/L',
  image1Alt: 'Residential Slab Construction',
  content1: 'Your go-to concrete company for residential slabs',
}

Hero9.propTypes = {
  action2: PropTypes.string,
  image1Src: PropTypes.string,
  action1: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  heading1: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
}

export default Hero9
