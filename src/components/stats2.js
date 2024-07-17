import React from 'react'

import PropTypes from 'prop-types'

import './stats2.css'

const Stats2 = (props) => {
  return (
    <div className="stats2-container thq-section-padding">
      <div className="stats2-container1">
        <img
          alt={props.imageAlt1}
          src={props.imageSrc1}
          className="stats2-image"
        />
      </div>
      <div className="stats2-container2">
        <div className="stats2-container3">
          <h1 className="stats2-text">{props.heading}</h1>
          <span className="stats2-text1">{props.text}</span>
          <h1 className="stats2-text2">{props.heading2}</h1>
          <h1 className="stats2-text3">{props.heading3}</h1>
          <span>{props.text1}</span>
        </div>
      </div>
    </div>
  )
}

Stats2.defaultProps = {
  stat3Description:
    'Serving Western Melbourne, Northern Melbourne, and Ballarat region',
  imageSrc: '9a4c17af-faff-4d4f-a923-1e3ae74ce270',
  heading: 'Over 12 years of experience',
  stat2Description: 'Specializing in residential slab construction services',
  image1Alt: 'Concrete construction',
  heading1: 'Company Stats',
  stat4Description: 'Providing top-quality concrete solutions',
  text: 'Extensive experience in the concrete industry',
  imageAlt: 'image',
  stat1: 'Over 12 years of experience',
  content2: 'Collaboration with leading builders',
  heading2: 'Top Quality Concrete Solutions',
  text1:
    'Specializing in top-quality residential slab construction and services.',
  stat4: 'Top-quality concrete solutions',
  content1: 'Residential slab construction services',
  stat3: 'Western Melbourne, Northern Melbourne, Ballarat region',
  imageSrc1: '/about-image-1500w.png',
  image1Src: '9a4c17af-faff-4d4f-a923-1e3ae74ce270',
  heading3: 'Specialization in residential slab',
  stat1Description: 'Extensive experience in the concrete industry',
  imageAlt1: 'image',
  stat2: 'Specialization in residential slab construction',
}

Stats2.propTypes = {
  stat3Description: PropTypes.string,
  imageSrc: PropTypes.string,
  heading: PropTypes.string,
  stat2Description: PropTypes.string,
  image1Alt: PropTypes.string,
  heading1: PropTypes.string,
  stat4Description: PropTypes.string,
  text: PropTypes.string,
  imageAlt: PropTypes.string,
  stat1: PropTypes.string,
  content2: PropTypes.string,
  heading2: PropTypes.string,
  text1: PropTypes.string,
  stat4: PropTypes.string,
  content1: PropTypes.string,
  stat3: PropTypes.string,
  imageSrc1: PropTypes.string,
  image1Src: PropTypes.string,
  heading3: PropTypes.string,
  stat1Description: PropTypes.string,
  imageAlt1: PropTypes.string,
  stat2: PropTypes.string,
}

export default Stats2
