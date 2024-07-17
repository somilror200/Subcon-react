import React from 'react'

import PropTypes from 'prop-types'

import './logos1.css'

const Logos1 = (props) => {
  return (
    <div
      className={`logos1-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="logos1-max-width thq-section-max-width">
        <h2 className="logos1-text thq-heading-2">{props.heading1}</h2>
        <div className="thq-grid-6">
          <img
            alt="Subcon P/L logo"
            src="/ahb-logo-1400w.jpeg"
            className="logos1-logo1 thq-img-ratio-16-9"
          />
          <img
            alt="Residential slab construction services"
            src="/carlisle-logo-1400w.jpeg"
            className="logos1-logo2 thq-img-ratio-16-9"
          />
          <img
            alt="Western Melbourne services"
            src="/henley-logo-1400w.png"
            className="logos1-logo3 thq-img-ratio-16-9"
          />
          <img
            alt="Northern Melbourne services"
            src="/aplace-logo-1400w.jpeg"
            className="logos1-logo4 thq-img-ratio-16-9"
          />
          <img
            alt="Ballarat region services"
            src="/sherridon-logo-1400w.webp"
            className="logos1-logo5 thq-img-ratio-16-9"
          />
          <img
            alt="Logo6"
            src="/royston-logo-1400w.png"
            className="logos1-logo6 thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Logos1.defaultProps = {
  rootClassName: '',
  heading1: "Trusted by the Australia's best builders to build credibility",
}

Logos1.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
}

export default Logos1
