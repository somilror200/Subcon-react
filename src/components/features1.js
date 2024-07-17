import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <span className="thq-body-small">{props.slogan}</span>
            <h2 className="thq-heading-2 features1-text1">
              {props.sectionTitle}
            </h2>
          </div>
          <span className="thq-body-small">{props.sectionDescription}</span>
        </div>
        <div className="features1-content">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="features1-feature1-image thq-img-ratio-4-3"
              />
              <div className="features1-content1 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature1Title}</h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="features1-feature2-image thq-img-ratio-4-3"
              />
              <div className="features1-content2 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="features1-feature3-image thq-img-ratio-4-3"
              />
              <div className="features1-content3 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions">
          <Link to="/services" className="features1-button thq-button-filled">
            <span className="thq-body-small">{props.mainAction}</span>
          </Link>
          <Link to="/contact" className="features1-button1 thq-button-outline">
            <span className="thq-body-small">{props.secondaryAction}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  slogan: 'Building Strong Foundations for Your Home',
  feature1ImageAlt: 'Experienced Team Image',
  feature3ImageAlt: 'Service Area Image',
  mainAction: 'View Our Services',
  feature3Title: 'Wide Service Area',
  secondaryAction: 'Contact Us',
  feature2ImageAlt: 'Partnerships Image',
  feature1ImageSrc: '/experienced-team-1400w.jpg',
  sectionDescription:
    'Discover the key features that set Subcon P/L apart from the rest.',
  feature3ImageSrc: '/vic-map-subcon-400h.jpg',
  feature2Title: 'Partnerships with Leading Builders',
  sectionTitle: 'Our Features',
  feature1Title: 'Experienced Team',
  feature2Description:
    'We collaborate with AHB group, Carlisle Homes, and Henley Homes to deliver top-quality concrete solutions.',
  feature2ImageSrc: '/builders-logo-500h.jpg',
  feature1Description:
    'With over 12 years of experience, our team at Subcon P/L is highly skilled in residential slab construction.',
  feature3Description:
    'Operating in Western Melbourne, Northern Melbourne, and the Ballarat region, we cater to a broad geographical area.',
}

Features1.propTypes = {
  slogan: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  mainAction: PropTypes.string,
  feature3Title: PropTypes.string,
  secondaryAction: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2Description: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3Description: PropTypes.string,
}

export default Features1
