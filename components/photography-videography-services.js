import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const PhotographyVideographyServices = (props) => {
  return (
    <>
      <section
        id="Photography and Videography"
        className={`photography-videography-services-premium-washrooms thq-flex-row thq-section-max-width ${props.rootClassName} `}
      >
        <div className="photography-videography-services-container1 UbuntuLight-14 thq-flex-column">
          <img
            alt={props.featureImageAlt311}
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/images/Marigold Images/photo-video-services-1500w.webp"
            loading="lazy"
            srcSet="/images/Marigold Images//photo-video-services-1500w.webp 1200w, /images/Marigold Images/photo-video-services-tablet.webp 800w, /images/Marigold Images/photo-video-services-mobile.webp 480w"
            className="thq-img-ratio-4-3 photography-videography-services-image1"
          />
          <div className="photography-videography-services-actions thq-flex-row">
            <button className="photography-videography-services-button menu">
              <span className="photography-videography-services-text10 thq-button-outline">
                {props.action23411 ?? (
                  <Fragment>
                    <span className="photography-videography-services-text27">
                      Explore Our Facilities
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="photography-videography-services-content UbuntuLight-14 thq-flex-column">
          <div className="photography-videography-services-section-title UbuntuLight-14 thq-flex-column">
            <span className="photography-videography-services-text11 thq-body-small">
              {props.slogan311 ?? (
                <Fragment>
                  <span className="photography-videography-services-text34">
                    Elegance Redefined
                  </span>
                </Fragment>
              )}
            </span>
            <h2 className="photography-videography-services-text12">
              {props.sectionTitle311 ?? (
                <Fragment>
                  <span className="photography-videography-services-text31">
                    Photography and Videography Services to Capture Every Moment
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="photography-videography-services-text13 thq-body-large">
              {props.featureDescription411 ?? (
                <Fragment>
                  <span className="photography-videography-services-text26">
                    Marigold Celebration Hall offers professional photography
                    and videography support to preserve the unforgettable
                    moments of your special event. Our experienced team ensures
                    that each highlight is beautifully captured, providing you
                    with lasting memories.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="photography-videography-services-list1 thq-flex-row">
            <div className="photography-videography-services-list-item1 UbuntuLight-14 thq-flex-column">
              <h3 className="photography-videography-services-text14">
                {props.feature1Title321 ?? (
                  <Fragment>
                    <span className="photography-videography-services-text24">
                      Experienced Professionals
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="photography-videography-services-text15 thq-body-small">
                {props.feature1Description321 ?? (
                  <Fragment>
                    <span className="photography-videography-services-text25">
                      Our skilled photographers and videographers specialize in
                      capturing every detail, from candid moments to grand
                      celebrations.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="photography-videography-services-list-item2 UbuntuLight-14 thq-flex-column">
              <h3 className="photography-videography-services-text16">
                {props.feature2Title321 ?? (
                  <Fragment>
                    <span className="photography-videography-services-text35">
                      State-of-the-Art Equipment
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="photography-videography-services-text17 thq-body-small">
                {props.feature2Description321 ?? (
                  <Fragment>
                    <span className="photography-videography-services-text33">
                      Using high-quality cameras, lighting, and editing tools,
                      we deliver crisp, vibrant photos and videos that tell the
                      story of your event.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="photography-videography-services-list2 thq-flex-row">
            <div className="photography-videography-services-list-item3 UbuntuLight-14 thq-flex-column">
              <h3 className="photography-videography-services-text18">
                {props.feature1Title3111 ?? (
                  <Fragment>
                    <span className="photography-videography-services-text28">
                      Customized Packages
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="photography-videography-services-text19 thq-body-small">
                {props.feature1Description3111 ?? (
                  <Fragment>
                    <span className="photography-videography-services-text30">
                      Whether you need full coverage or specific highlights, our
                      flexible service packages cater to your unique
                      requirements and budget.
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="photography-videography-services-container2">
                <p className="photography-videography-services-text20 thq-body-large">
                  {props.featureDescription2211 ?? (
                    <Fragment>
                      <span className="photography-videography-services-text32">
                        With Marigold’s photography and videography services,
                        you can relive the magic of your event through stunning
                        visuals that last a lifetime.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="photography-videography-services-list-item4 UbuntuLight-14 thq-flex-column">
              <h3 className="photography-videography-services-text21">
                {props.feature2Title3111 ?? (
                  <Fragment>
                    <span className="photography-videography-services-text29">
                      Accessible for All Guests
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="photography-videography-services-text22 thq-body-small">
                {props.feature2Description3111 ?? (
                  <Fragment>
                    <span className="photography-videography-services-text23">
                      We prioritize inclusivity, ensuring that all event areas
                      are fully accessible to guests of all abilities, providing
                      comfort and convenience for everyone.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .photography-videography-services-premium-washrooms {
            gap: var(--dl-space-space-threeunits);
            position: relative;
            border-color: var(--dl-color-primary-logo-color-3);
            border-style: dotted;
            border-width: 1px;
            margin-bottom: var(--dl-space-space-halfunit);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .photography-videography-services-container1 {
            max-width: 25%;
          }
          .photography-videography-services-actions {
            padding: var(--dl-space-space-unit);
            position: relative;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .photography-videography-services-button {
            fill: transparent;
            flex: 1;
            color: transparent;
            transform: scale(0.99);
            border-width: 0px;
          }
          .photography-videography-services-text10 {
            font-size: 12px;
            transform: scale(0.97);
            font-style: normal;
            text-align: center;
            transition: 0.5;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 2;
            border-color: #380fe1;
            border-style: dotted;
            border-width: 0.5px;
            text-transform: capitalize;
            text-decoration: none;
            background-color: rgba(245, 184, 60, 0.1);
          }
          .photography-videography-services-text10:hover {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            transform: scale(1);
            box-shadow: 1px 1px 15px 1px rgba(60, 12, 231, 0.57);
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 0.5px;
            background-color: #251573;
          }
          .photography-videography-services-content {
            gap: var(--dl-space-space-unit);
          }
          .photography-videography-services-section-title {
            gap: var(--dl-space-space-halfunit);
            align-items: flex-start;
          }
          .photography-videography-services-text11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 400;
          }
          .photography-videography-services-text12 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 18px;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
            text-transform: none;
            text-decoration: none;
          }
          .photography-videography-services-text13 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .photography-videography-services-list1 {
            align-self: stretch;
            align-items: flex-start;
          }
          .photography-videography-services-list-item1 {
            gap: var(--dl-space-space-halfunit);
            width: 50%;
            max-width: 50%;
            align-items: flex-start;
          }
          .photography-videography-services-text14 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 16px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .photography-videography-services-text15 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .photography-videography-services-list-item2 {
            gap: var(--dl-space-space-halfunit);
            width: 50%;
            align-items: flex-start;
          }
          .photography-videography-services-text16 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 16px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .photography-videography-services-text17 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .photography-videography-services-list2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .photography-videography-services-list-item3 {
            gap: var(--dl-space-space-halfunit);
            max-width: 100%;
            align-items: flex-start;
          }
          .photography-videography-services-text18 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 16px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .photography-videography-services-text19 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .photography-videography-services-container2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .photography-videography-services-text20 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .photography-videography-services-list-item4 {
            display: none;
            align-items: flex-start;
          }
          .photography-videography-services-text21 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .photography-videography-services-text22 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .photography-videography-services-text23 {
            display: inline-block;
          }
          .photography-videography-services-text24 {
            display: inline-block;
          }
          .photography-videography-services-text25 {
            display: inline-block;
          }
          .photography-videography-services-text26 {
            display: inline-block;
          }
          .photography-videography-services-text27 {
            display: inline-block;
          }
          .photography-videography-services-text28 {
            display: inline-block;
          }
          .photography-videography-services-text29 {
            display: inline-block;
          }
          .photography-videography-services-text30 {
            display: inline-block;
          }
          .photography-videography-services-text31 {
            display: inline-block;
          }
          .photography-videography-services-text32 {
            display: inline-block;
          }
          .photography-videography-services-text33 {
            display: inline-block;
          }
          .photography-videography-services-text34 {
            display: inline-block;
          }
          .photography-videography-services-text35 {
            display: inline-block;
          }

          @media (max-width: 1200px) {
            .photography-videography-services-premium-washrooms {
              align-items: stretch;
            }
            .photography-videography-services-container1 {
              justify-content: center;
            }
          }
          @media (max-width: 991px) {
            .photography-videography-services-premium-washrooms {
              gap: var(--dl-space-space-twounits);
              align-self: stretch;
              flex-direction: column;
            }
            .photography-videography-services-container1 {
              width: 100%;
              max-width: 100%;
            }
            .photography-videography-services-image1 {
              width: 100%;
            }
            .photography-videography-services-text10 {
              font-size: 14px;
            }
            .photography-videography-services-content {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .photography-videography-services-section-title {
              gap: var(--dl-space-space-halfunit);
            }
            .photography-videography-services-list1 {
              gap: var(--dl-space-space-halfunit);
              justify-content: center;
            }
            .photography-videography-services-list-item1 {
              gap: var(--dl-space-space-halfunit);
              width: 50%;
            }
            .photography-videography-services-list-item2 {
              gap: var(--dl-space-space-halfunit);
              width: 50%;
            }
            .photography-videography-services-list2 {
              gap: var(--dl-space-space-halfunit);
              justify-content: center;
            }
            .photography-videography-services-list-item3 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
            }
            .photography-videography-services-list-item4 {
              width: 50%;
            }
          }
          @media (max-width: 599px) {
            .photography-videography-services-actions {
              align-self: center;
            }
            .photography-videography-services-content {
              gap: var(--dl-space-space-unit);
            }
            .photography-videography-services-section-title {
              gap: var(--dl-space-space-halfunit);
            }
            .photography-videography-services-text11 {
              font-size: 10px;
            }
            .photography-videography-services-list1 {
              gap: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .photography-videography-services-list-item1 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              max-width: 100%;
            }
            .photography-videography-services-text15 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .photography-videography-services-list-item2 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              max-width: 100%;
            }
            .photography-videography-services-text17 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .photography-videography-services-list-item3 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
            }
            .photography-videography-services-text19 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .photography-videography-services-text22 {
              font-size: 12px;
              font-family: Ubuntu;
            }
          }
          @media (max-width: 479px) {
            .photography-videography-services-premium-washrooms {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .photography-videography-services-actions {
              width: 100%;
              flex-wrap: wrap;
              margin-top: var(--dl-space-space-unit);
            }
            .photography-videography-services-list1 {
              flex-direction: column;
            }
            .photography-videography-services-list2 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

PhotographyVideographyServices.defaultProps = {
  feature2Description3111: undefined,
  feature1Title321: undefined,
  feature1Description321: undefined,
  featureDescription411: undefined,
  action23411: undefined,
  feature1Title3111: undefined,
  feature2Title3111: undefined,
  feature1Description3111: undefined,
  sectionTitle311: undefined,
  featureDescription2211: undefined,
  feature2Description321: undefined,
  slogan311: undefined,
  rootClassName: '',
  featureImageAlt311: 'Luxurious Venue at Marigold Banquet Hall',
  feature2Title321: undefined,
}

PhotographyVideographyServices.propTypes = {
  feature2Description3111: PropTypes.element,
  feature1Title321: PropTypes.element,
  feature1Description321: PropTypes.element,
  featureDescription411: PropTypes.element,
  action23411: PropTypes.element,
  feature1Title3111: PropTypes.element,
  feature2Title3111: PropTypes.element,
  feature1Description3111: PropTypes.element,
  sectionTitle311: PropTypes.element,
  featureDescription2211: PropTypes.element,
  feature2Description321: PropTypes.element,
  slogan311: PropTypes.element,
  rootClassName: PropTypes.string,
  featureImageAlt311: PropTypes.string,
  feature2Title321: PropTypes.element,
}

export default PhotographyVideographyServices
