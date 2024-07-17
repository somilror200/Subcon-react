import React from 'react'

import PropTypes from 'prop-types'

import './hero8.css'

const Hero8 = (props) => {
  return (
    <div className="hero8-header26 thq-section-padding">
      <div className="hero8-max-width thq-section-max-width thq-flex-column">
        <div className="hero8-column">
          <div className="hero8-content">
            <h1 className="hero8-text thq-heading-1">{props.heading1}</h1>
            <h1 className="hero8-text01">{props.heading}</h1>
            <div className="hero8-actions">
              <span>{props.text1}</span>
            </div>
          </div>
        </div>
        <span className="hero8-text03">{props.text2}</span>
        <h1 className="hero8-text04">{props.heading2}</h1>
        <span>{props.text3}</span>
        <h1 className="hero8-text06">{props.heading3}</h1>
        <span>{props.text4}</span>
        <h1 className="hero8-text08">{props.heading4}</h1>
        <span>{props.text5}</span>
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="thq-img-ratio-16-9"
        />
      </div>
    </div>
  )
}

Hero8.defaultProps = {
  heading4: 'Our Commitment',
  action1: 'About Subcon PL',
  heading2: 'Our Story',
  text: 'Text',
  heading: 'About Subcon',
  content1:
    'Subcon P/L specializes in top-quality concrete solutions for residential slab construction in Western Melbourne, Northern Melbourne, and the Ballarat region.',
  text3:
    "Ray Spiteri, a seasoned expert in the concrete industry, founded Subcon PL over 12 years ago with a vision to provide superior concrete solutions to Melbourne's residential sector. Ray's extensive hands-on experience and leadership have been instrumental in shaping Subcon PL into the trusted company it is today.",
  text4:
    'Our team is our greatest asset. Comprising over 50 skilled workers, including professional concreters and certified excavators and bobcat operators, we bring a wealth of knowledge and expertise to every project. We are committed to maintaining the highest standards of workmanship and safety, ensuring that our clients receive the best possible results.',
  text1:
    "Welcome to Subcon PL, Melbourne's premier residential concrete slab company. Founded and directed by Ray Spiteri, Subcon PL has established a reputation for excellence in the concrete industry. With over 20 years of experience, Ray has built a team of over 50 dedicated professionals committed to delivering top-quality concrete services.",
  text5:
    "We are dedicated to providing exceptional customer service and ensuring complete satisfaction with every project. Our team's professionalism, combined with our extensive industry experience, guarantees that we deliver top-notch results every time.  Thank you for considering Subcon PL for your residential concrete needs. We look forward to working with you to bring your vision to life.",
  action2: 'Contact us',
  heading3: 'Our Team',
  text2:
    "Our expertise extends across a wide range of services including concrete slabs, excavation, piers, and base preparations. At Subcon PL, we pride ourselves on our team's proficiency and dedication. Our professional concreters, certified excavators, and skilled bobcat operators ensure that every project is executed with precision and care.",
  heading1: 'Leading Concrete Company in Melbourne',
  image1Alt: 'Residential slab construction services',
  image1Src:
    'https://images.unsplash.com/photo-1528901166007-3784c7dd3653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTA0MTczNXw&ixlib=rb-4.0.3&q=80&w=1080',
}

Hero8.propTypes = {
  heading4: PropTypes.string,
  action1: PropTypes.string,
  heading2: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  content1: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text1: PropTypes.string,
  text5: PropTypes.string,
  action2: PropTypes.string,
  heading3: PropTypes.string,
  text2: PropTypes.string,
  heading1: PropTypes.string,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Hero8
