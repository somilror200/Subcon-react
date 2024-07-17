import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer1.css'

const Footer1 = (props) => {
  return (
    <footer className="footer1-footer1 thq-section-padding">
      <div className="footer1-max-width thq-section-max-width">
        <div className="footer1-content">
          <div className="footer1-newsletter">
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              className="footer1-image1"
            />
            <div className="footer1-container">
              <span className="thq-body-small">
                For enquiries, please contact us at:
              </span>
            </div>
            <a
              href="mailto:orders@subcongroup.com.u?subject="
              className="footer1-text"
            >
              {props.text}
            </a>
            <div className="footer1-actions">
              <div className="footer1-form">
                <div className="footer1-container1"></div>
              </div>
              <span className="footer1-content2 thq-body-small">
                © 2024 Subcon P/L. All rights reserved.
              </span>
            </div>
          </div>
          <div className="footer1-links">
            <div className="footer1-column1">
              <strong className="thq-body-large footer1-column1-title">
                {props.column1Title}
              </strong>
              <div className="footer1-footer-links">
                <a
                  href="tel:+61425811894"
                  className="footer1-link1 thq-body-small"
                >
                  <span>Sonia Spiteri</span>
                  <br></br>
                </a>
                <a
                  href="tel:+61413063638"
                  className="footer1-link2 thq-body-small"
                >
                  <span>Ray Spiteri</span>
                  <br></br>
                </a>
              </div>
            </div>
            <div className="footer1-column2">
              <strong className="thq-body-large footer1-column2-title">
                {props.column2Title}
              </strong>
              <div className="footer1-footer-links1">
                <Link to="/about" className="footer1-link7 thq-body-small">
                  {props.link7}
                </Link>
                <Link to="/services" className="footer1-link8 thq-body-small">
                  {props.link8}
                </Link>
                <Link to="/gallery" className="footer1-link9 thq-body-small">
                  {props.link9}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer1-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer1-row">
            <span className="thq-body-small">{props.content3}</span>
            <div className="footer1-footer-links2">
              <span className="thq-body-small">{props.subconName}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer1.defaultProps = {
  termsLink: 'Subcon Pty Ltd',
  link9: 'Gallery',
  text: 'orders@subcongroup.com.au',
  link7: 'About Us',
  subconName: 'Subcon Pty Ltd',
  logoSrc:
    '/screenshot%202024-06-22%20at%2012.03.23%C3%A2%C2%80%C2%AFam-1400w.png',
  column2Title: 'Quick Links',
  logoAlt: 'logo',
  column1Title: 'Contact Us',
  privacyLink: '/privacy-policy',
  link8: 'Services',
  content3: 'Designed by Somil Garak',
}

Footer1.propTypes = {
  termsLink: PropTypes.string,
  link9: PropTypes.string,
  text: PropTypes.string,
  link7: PropTypes.string,
  subconName: PropTypes.string,
  logoSrc: PropTypes.string,
  column2Title: PropTypes.string,
  logoAlt: PropTypes.string,
  column1Title: PropTypes.string,
  privacyLink: PropTypes.string,
  link8: PropTypes.string,
  content3: PropTypes.string,
}

export default Footer1
