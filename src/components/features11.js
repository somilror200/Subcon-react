import React from 'react'

import PropTypes from 'prop-types'

import './features11.css'

const Features11 = (props) => {
  return (
    <div className="features11-layout251 thq-section-padding">
      <div className="features11-max-width thq-section-max-width">
        <div className="thq-flex-row features11-section-title">
          <div className="features11-column thq-flex-column">
            <span className="thq-body-small">{props.slogan}</span>
            <h2 className="thq-heading-2 features11-text1">
              {props.sectionTitle}
            </h2>
          </div>
          <span className="thq-body-small">{props.sectionDescription}</span>
        </div>
        <div className="features11-content">
          <div className="features11-row thq-flex-row">
            <div className="features11-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features11-feature1-image"
              />
              <div className="features11-content1 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature1Title}</h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features11-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features11-feature2-image"
              />
              <div className="features11-content2 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features11-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features11-feature3-image"
              />
              <div className="features11-content3 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features11-actions"></div>
      </div>
    </div>
  )
}

Features11.defaultProps = {
  feature1Description: 'Impeccably smooth finish to give best quality slabs',
  feature1ImageSrc: '/superior-finish-1400w.jpg',
  mainAction: 'High-Quality Concrete Solutions',
  slogan: 'Building Strong Foundations for Your Home',
  secondaryAction: 'Collaboration with Leading Builders',
  feature2ImageSrc: '/timely-project-completion-300h.jpeg',
  feature2ImageAlt: 'Timely Project Completion Image',
  feature1Title: 'Superior Finish',
  feature3Title: 'Durable and Long-Lasting Results',
  feature3ImageAlt: 'Durable and Long-Lasting Results Image',
  feature2Description:
    'Efficient construction process ensuring timely completion of projects',
  feature2Title: 'Timely Project Completion',
  feature3ImageSrc: '/durable-slab-300h.jpeg',
  sectionDescription:
    'Discover the top features of our residential slab construction services',
  feature3Description:
    'Using high-quality materials for durable and long-lasting concrete slabs',
  sectionTitle: 'Key Features',
  feature1ImageAlt: 'Customized Slab Designs Image',
}

Features11.propTypes = {
  feature1Description: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  mainAction: PropTypes.string,
  slogan: PropTypes.string,
  secondaryAction: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3Title: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature2Description: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature3Description: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
}

export default Features11
