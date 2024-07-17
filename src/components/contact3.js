import React from 'react'

import PropTypes from 'prop-types'

import './contact3.css'

const Contact3 = (props) => {
  return (
    <div className="contact3-contact20 thq-section-padding">
      <div className="contact3-max-width thq-section-max-width">
        <div className="contact3-section-title">
          <span className="thq-body-small">{props.content2}</span>
          <div className="contact3-content">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="contact3-text02 thq-body-large"></p>
          </div>
        </div>
        <div className="contact3-row">
          <div className="contact3-content1">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact3-contact-info">
              <div className="contact3-content2">
                <h3 className="contact3-text03 thq-heading-3">Email</h3>
                <p className="contact3-text04 thq-body-large"></p>
              </div>
              <a
                href="mailto:sonia@subcongroup.com.au?subject="
                className="contact3-email thq-body-small"
              >
                {props.email1}
              </a>
            </div>
          </div>
          <div className="contact3-content3">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact3-contact-info1">
              <div className="contact3-content4">
                <h3 className="contact3-text05 thq-heading-3">Phone</h3>
                <p className="contact3-text06 thq-body-large"></p>
              </div>
              <a
                href="tel:+61425811894"
                className="contact3-phone-contact thq-body-small"
              >
                <span>+61425811894</span>
                <br></br>
              </a>
            </div>
          </div>
          <div className="contact3-content5">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
            </svg>
            <div className="contact3-contact-info2">
              <div className="contact3-content6">
                <h3 className="contact3-text09 thq-heading-3">Office</h3>
                <p className="contact3-text10 thq-body-large"></p>
              </div>
              <span className="contact3-address thq-body-small">
                {props.address1}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact3.defaultProps = {
  content2: 'Get in touch with us today!',
  heading1: 'Contact Us',
  address1: '38 Peterpaul Way, Truganina, 3029',
  email1: 'sonia@subcongroup.com.au',
  phone1: '+61413063638',
}

Contact3.propTypes = {
  content2: PropTypes.string,
  heading1: PropTypes.string,
  address1: PropTypes.string,
  email1: PropTypes.string,
  phone1: PropTypes.string,
}

export default Contact3
