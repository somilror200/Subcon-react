import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'react-dangerous-html';
import PropTypes from 'prop-types'

import './hero17.css'

const Hero17 = (props) => {
  return (  
    <div className="hero17-header78">
      <div className="hero17-column thq-section-max-width thq-section-padding">
        <div className="hero17-content">
          <h1 className="hero17-text thq-heading-1">{props.heading1}</h1>
          <p className="hero17-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="hero17-actions">
          <Link to="/contact" className="hero17-button thq-button-filled">
            <span className="thq-body-small">{props.action1}</span>
          </Link>
          <Link to="/about" className="hero17-button1 thq-button-outline">
            <span className="thq-body-small">{props.action2}</span>
          </Link>
        </div>
      </div>
      <div className="hero17-content1">
        <div className="hero17-row-container thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image01 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image02 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image03 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image04 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero17-placeholder-image05 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image06 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image07 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image08 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image09 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              //alt="Hero Image"
              alt={props.image11Alt}
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
        <div className="hero17-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero17-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero17-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="hero17-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-placeholder-image19 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero17-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero17-placeholder-image22 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              //alt="Hero Image"
              alt={props.image11Alt}
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image23 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero17-container1">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero17.defaultProps = {
  image9Alt: 'Hero Image',
  action1: 'Contact Us',
  image1Alt: 'Concrete Construction',
  image11Src: '/gallery-11-1500w.png',
  image4Src: '/gallery-4-1500w.png',
  image10Src: '/galley-10-1500w.jpg',
  image3Src: '/gallery-3-1500w.png',
  image7Alt: 'Ballarat Region Builders',
  image1Src: '/gallery-1-1500w.png',
  image6Alt: 'Northern Melbourne Builders',
  image5Alt: 'Western Melbourne Builders',
  image7Src: '/gallery-7-1500w.jpg',
  heading1: 'Top-Quality Concrete Solutions',
  image12Alt: 'Hero Image',
  content1:
    'Subcon P/L specializes in residential slab construction with over 12 years of experience. We work with leading builders in Western Melbourne, Northern Melbourne, and the Ballarat region. Contact us for all your concrete needs.',
  image2Src: '/gallery-2-1500w.jpg',
  image2Alt: 'Residential Slab Construction',
  image11Alt: 'Hero Image',
  image4Alt: 'Quality Workmanship',
  image8Src: '/gallery-8-1500w.jpg',
  image5Src: '/gallery-5-1500w.jpg',
  image6Src: '/gallery-6-1500w.png',
  image10Alt: 'Hero Image',
  image3Alt: 'Experienced Team',
  image12Src: '/gallery-12-1500w.png',
  image8Alt: 'Hero Image',
  action2: 'Learn More',
  image9Src: '/gallery-9-1500w.jpg',
}

Hero17.propTypes = {
  image9Alt: PropTypes.string,
  action1: PropTypes.string,
  image1Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image4Src: PropTypes.string,
  image10Src: PropTypes.string,
  image3Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image7Src: PropTypes.string,
  heading1: PropTypes.string,
  image12Alt: PropTypes.string,
  content1: PropTypes.string,
  image2Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image11Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image8Src: PropTypes.string,
  image5Src: PropTypes.string,
  image6Src: PropTypes.string,
  image10Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image12Src: PropTypes.string,
  image8Alt: PropTypes.string,
  action2: PropTypes.string,
  image9Src: PropTypes.string,
}

export default Hero17
