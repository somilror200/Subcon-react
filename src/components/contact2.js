import React from 'react'

import PropTypes from 'prop-types'

import './contact2.css'

const Contact2 = (props) => {
  return (
    <div className="contact2-contact20 thq-section-padding">
      <div className="contact2-max-width thq-section-max-width">
        <div className="contact2-section-title">
          <span className="thq-body-small">{props.content2}</span>
          <div className="contact2-content">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="contact2-text2 thq-body-large">{props.content1}</p>
          </div>
        </div>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="thq-img-ratio-16-9"
        />
        <div className="contact2-row">
          <div className="contact2-content1">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact2-contact-info">
              <div className="contact2-content2">
                <h3 className="contact2-text3 thq-heading-3">Email</h3>
              </div>
              <a
                href="mailto:sonia@subcongroup.com.au?subject="
                className="contact2-email thq-body-small"
              >
                {props.email1}
              </a>
            </div>
          </div>
          <div className="contact2-content3">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact2-contact-info1">
              <div className="contact2-content4">
                <h3 className="contact2-text4 thq-heading-3">Phone</h3>
              </div>
              <a
                href="tel:+61425811894"
                className="contact2-phone thq-body-small"
              >
                {props.phone1}
              </a>
            </div>
          </div>
          <div className="contact2-content5">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
            </svg>
            <div className="contact2-contact-info2">
              <div className="contact2-content6">
                <h3 className="contact2-text5 thq-heading-3">Office</h3>
              </div>
              <span className="contact2-address thq-body-small">
                {props.address1}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact2.defaultProps = {
  phone1: '+61425811894',
  content1:
    'Contact Us  Reach out to us today to discuss how we can assist you with your next concrete project!',
  content4:
    'Contact Us  Reach out to us today to discuss how we can assist you with your next concrete project!',
  content3:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  content2: 'Get in touch with us today!',
  email1: 'sonia@subcongroup.com.au',
  imageSrc:
    'https://images.unsplash.com/photo-1657073901075-e6b444568dc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTExMjE4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  address1: '38 Petepaul Way, Truganina, 3029',
  imageAlt: 'image',
  content5:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  heading1: 'Contact Us',
}

Contact2.propTypes = {
  phone1: PropTypes.string,
  content1: PropTypes.string,
  content4: PropTypes.string,
  content3: PropTypes.string,
  content2: PropTypes.string,
  email1: PropTypes.string,
  imageSrc: PropTypes.string,
  address1: PropTypes.string,
  imageAlt: PropTypes.string,
  content5: PropTypes.string,
  heading1: PropTypes.string,
}

export default Contact2
