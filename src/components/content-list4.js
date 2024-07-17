import React from 'react'

import PropTypes from 'prop-types'

import './content-list4.css'

const ContentList4 = (props) => {
  return (
    <div className="content-list4-container thq-section-padding">
      <div className="content-list4-max-width thq-section-max-width thq-flex-column">
        <div className="content-list4-content thq-flex-column">
          <ul className="content-list4-ul thq-flex-column">
            <li className="content-list4-li thq-flex-column list-item">
              <h2 className="content-list4-heading7 thq-heading-2">
                {props.heading7}
              </h2>
              <p className="content-list4-content7 thq-body-small">
                {props.content7}
              </p>
              <ul className="list">
                <li className="list-item">
                  <span>
                    Piers Pouring: Reliable pier construction for stable
                    foundations.
                  </span>
                </li>
                <li className="list-item">
                  <span>
                    Base Prepration: Thorough base preparation for a strong
                    foundation.
                  </span>
                </li>
                <li className="list-item">
                  <span>
                    Steel Reinforcement: Robust steel reinforcement for enhanced
                    structural integrity.
                  </span>
                </li>
                <li className="list-item">
                  <span>
                    Slab Pouring and Finishing: High-quality slabs designed for
                    durability and performance.
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="content-list4-content1 thq-flex-column content-list4-content1 thq-body-small">
          <ul className="content-list4-ul2 thq-flex-column">
            <li className="content-list4-li05 thq-flex-column list-item">
              <h2 className="content-list4-heading1 thq-heading-2">
                {props.heading1}
              </h2>
              <p>{props.content1}</p>
              <ul className="content-list4-ul3 thq-flex-column">
                <li className="list-item">
                  <h3 className="thq-heading-3">{props.heading2}</h3>
                  <p className="thq-body-small">{props.content2}</p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">{props.heading3}</h3>
                  <p className="thq-body-small">{props.content3}</p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">{props.heading4}</h3>
                  <p className="thq-body-small">{props.content4}</p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">{props.heading5}</h3>
                  <p className="thq-body-small">{props.content5}</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList4.defaultProps = {
  content13:
    'Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam tempore aut ipsam iusto in sunt repellat ex voluptatum inventore ab facilis galisum ea consequatur consequuntur. Ab voluptas voluptatem eum consequatur aspernatur non laboriosam atque est labore asperiores a neque quos.  Ea nemo modi hic dicta saepe et veritatis maiores At praesentium aliquid. Sed dolores architecto non doloribus quia eos consectetur commodi non tenetur vitae est neque omnis.  Non perspiciatis velit At aliquam rerum ut officiis ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores tempora in officiis sunt eum voluptatem tenetur sit iste reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut esse sunt ad saepe maiores vel perferendis veritatis. Ex magni fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora doloribus sed accusantium nobis eum praesentium quod.',
  heading6: 'Cookies',
  heading11: 'General',
  heading10: 'Refund Policy',
  content9:
    "At Subcon PL, we pride ourselves on offering a comprehensive range of top-quality concrete services tailored to meet the unique needs of our clients. Our experienced team and state-of-the-art equipment ensure that every project is executed with precision and excellence. Here's what we specialize in:",
  heading13: 'Refunds',
  heading8: 'General Terms and Conditions',
  heading5: 'Get in Touch',
  content11:
    'Lorem ipsum dolor sit amet. Nam nihil facilis sit consequuntur internos qui minima rerum ut molestias laudantium aut iusto deserunt. Aut voluptatibus excepturi qui officia laudantium est repellendus tempore hic sunt debitis.  Ut galisum tempore in enim fugit eum pariatur possimus est tenetur nemo et sint sint et dolores Quis. Aut illum perspiciatis rem architecto culpa et fuga aliquid. Est omnis praesentium ut nisi internos rem quod totam et similique quis. Est tempore cumque aut recusandae labore qui error molestiae et possimus quia!  Eum Quis asperiores non nihil tempora qui quia voluptatem aut aspernatur aspernatur aut asperiores labore et sapiente quaerat qui suscipit quia. Ea nesciunt iste aut temporibus culpa sit dignissimos quaerat eum architecto voluptatum et nemo velit At harum harum.',
  heading3: 'Why Choose Us',
  content6:
    'Ut doloremque aliquam qui veniam deserunt sit voluptates iusto et unde quod ut quam unde ut nemo eius! Ut saepe consequuntur non quibusdam soluta aut maiores eaque et rerum error nam incidunt saepe aut nihil voluptatem. 33 nulla quaerat est doloremque voluptatem ut libero magnam id placeat aliquid. Ea minus totam est inventore minus sed temporibus aperiam At ratione maiores eum libero consequatur aut laborum exercitationem.',
  heading9: 'Products and Services',
  heading12: 'Damages and issues',
  content5:
    'Ready to start your residential concrete project? Contact Subcon P/L today to discuss your needs and receive a personalized quote. Let us help you build the foundation for your dream home with our top-quality concrete services.',
  content12:
    'Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam tempore aut ipsam iusto in sunt repellat ex voluptatum inventore ab facilis galisum ea consequatur consequuntur. Ab voluptas voluptatem eum consequatur aspernatur non laboriosam atque est labore asperiores a neque quos.  Ea nemo modi hic dicta saepe et veritatis maiores At praesentium aliquid. Sed dolores architecto non doloribus quia eos consectetur commodi non tenetur vitae est neque omnis.  Non perspiciatis velit At aliquam rerum ut officiis ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores tempora in officiis sunt eum voluptatem tenetur sit iste reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut esse sunt ad saepe maiores vel perferendis veritatis. Ex magni fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora doloribus sed accusantium nobis eum praesentium quod.',
  heading7: 'Our Services',
  content4:
    'With over 20 years of experience in the concrete industry, Ray Spiteri and our expert team provide professional consulting services. We offer valuable insights and recommendations to help you make informed decisions about your concrete projects.',
  content1:
    'Subcon P/L is a leading concrete company specializing in residential slab construction in Western Melbourne, Northern Melbourne, and the Ballarat region. With over 12 years of experience, we have established ourselves as a trusted partner for top-quality concrete solutions.',
  content10:
    'Lorem ipsum dolor sit amet. Vel dolores illum est aperiam quis nam voluptatem quia et omnis autem qui dolore ullam sed fugiat cumque! Qui accusamus assumenda et molestias eius et error sunt. Id recusandae nostrum ea officiis voluptatem in nisi consequatur sed quia tenetur sit alias molestias qui illum soluta.  Est nesciunt perferendis eum sint rerum 33 cupiditate dolorem id corrupti laboriosam ut debitis veniam ut ipsam fugit vel sunt consequatur. Et nobis quasi et cumque adipisci aut molestiae eligendi quo inventore dicta ea suscipit sequi sed veritatis nemo.',
  heading2: 'Our Services',
  heading4: 'Professional Consulting',
  content7:
    "At Subcon PL, we pride ourselves on offering a comprehensive range of top-quality concrete services tailored to meet the unique needs of our clients. Our experienced team and state-of-the-art equipment ensure that every project is executed with precision and excellence. Here's what we specialize in:",
  content2:
    'We offer a range of concrete services tailored to meet the needs of residential projects. Our services include slab construction, foundation pouring, driveway installation, and more. We work closely with leading builders to ensure the highest quality standards are met.',
  heading1: 'About Subcon P/L',
  content3:
    'At Subcon P/L, we prioritize customer satisfaction and quality craftsmanship. Our team of experienced professionals is dedicated to delivering exceptional results on every project. With our attention to detail and commitment to excellence, you can trust us to bring your concrete vision to life.',
}

ContentList4.propTypes = {
  content13: PropTypes.string,
  heading6: PropTypes.string,
  heading11: PropTypes.string,
  heading10: PropTypes.string,
  content9: PropTypes.string,
  heading13: PropTypes.string,
  heading8: PropTypes.string,
  heading5: PropTypes.string,
  content11: PropTypes.string,
  heading3: PropTypes.string,
  content6: PropTypes.string,
  heading9: PropTypes.string,
  heading12: PropTypes.string,
  content5: PropTypes.string,
  content12: PropTypes.string,
  heading7: PropTypes.string,
  content4: PropTypes.string,
  content1: PropTypes.string,
  content10: PropTypes.string,
  heading2: PropTypes.string,
  heading4: PropTypes.string,
  content7: PropTypes.string,
  content2: PropTypes.string,
  heading1: PropTypes.string,
  content3: PropTypes.string,
}

export default ContentList4
