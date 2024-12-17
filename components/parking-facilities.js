import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ParkingFacilities = (props) => {
  return (
    <>
      <section
        id="Parking-Facilities"
        className="parking-facilities-parking-facilities thq-flex-row thq-section-max-width"
      >
        <div className="parking-facilities-container1 UbuntuLight-14 thq-flex-column">
          <img
            alt={props.featureImageAlt2111}
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/images/Marigold Images/parking-1500w.webp"
            srcSet="/images/Marigold Images//parking-1500w.webp 1200w, /images/Marigold Images/parking-tablet.webp 800w, /images/Marigold Images/parking-mobile.webp 480w"
            className="parking-facilities-image1 thq-img-ratio-4-3"
          />
          <div className="parking-facilities-actions thq-flex-row">
            <button className="parking-facilities-button menu">
              <span className="parking-facilities-text10 thq-button-outline">
                {props.action2331 ?? (
                  <Fragment>
                    <span className="parking-facilities-text31">
                      Explore Our Facilities
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="parking-facilities-content UbuntuLight-14 thq-flex-column">
          <div className="parking-facilities-section-title UbuntuLight-14 thq-flex-column">
            <span className="parking-facilities-text11 thq-body-small">
              {props.slogan2111 ?? (
                <Fragment>
                  <span className="parking-facilities-text26">
                    Elegance Redefined
                  </span>
                </Fragment>
              )}
            </span>
            <h2 className="parking-facilities-text12">
              {props.sectionTitle2111 ?? (
                <Fragment>
                  <span className="parking-facilities-text24">
                    Convenient Inside &amp; Outside Parking Facilities
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="parking-facilities-text13 thq-body-large">
              {props.featureDescription3111 ?? (
                <Fragment>
                  <span className="parking-facilities-text32">
                    Marigold Celebration Hall offers spacious and secure parking
                    facilities to ensure a stress-free arrival and departure
                    experience for all your guests. With ample parking spaces
                    both inside and outside, we accommodate gatherings of any
                    size, allowing your event to proceed smoothly.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="parking-facilities-list1 thq-flex-row">
            <div className="parking-facilities-list-item1 UbuntuLight-14 thq-flex-column">
              <h3 className="parking-facilities-text14">
                {props.feature1Title2121 ?? (
                  <Fragment>
                    <span className="parking-facilities-text25">
                      Spacious Parking Capacity
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="parking-facilities-text15 thq-body-small">
                {props.feature1Description2121 ?? (
                  <Fragment>
                    <span className="parking-facilities-text23">
                      Our parking area is designed to accommodate a high volume
                      of vehicles, providing easy access for all attendees.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="parking-facilities-list-item2 UbuntuLight-14 thq-flex-column">
              <h3 className="parking-facilities-text16">
                {props.feature2Title2121 ?? (
                  <Fragment>
                    <span className="parking-facilities-text33">
                      On-Site Assistance
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="parking-facilities-text17 thq-body-small">
                {props.feature2Description2121 ?? (
                  <Fragment>
                    <span className="parking-facilities-text28">
                      Dedicated attendants are available to guide guests to
                      parking spaces, offering convenience and efficient traffic
                      flow.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="parking-facilities-list2 thq-flex-row">
            <div className="parking-facilities-list-item3 UbuntuLight-14 thq-flex-column">
              <h3 className="parking-facilities-text18">
                {props.feature1Title21111 ?? (
                  <Fragment>
                    <span className="parking-facilities-text35">
                      Secure and Accessible
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="parking-facilities-text19 thq-body-small">
                {props.feature1Description21111 ?? (
                  <Fragment>
                    <span className="parking-facilities-text29">
                      With security measures in place, guests can feel confident
                      leaving their vehicles while they enjoy the event, while
                      designated parking areas ensure accessibility for all.
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="parking-facilities-container2">
                <p className="parking-facilities-text20 thq-body-large">
                  {props.featureDescription21111 ?? (
                    <Fragment>
                      <span className="parking-facilities-text30">
                        Our inside and outside parking facilities enhance the
                        overall guest experience, allowing everyone to arrive
                        with ease and focus on enjoying the occasion at Marigold
                        Celebration Hall.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="parking-facilities-list-item4 UbuntuLight-14 thq-flex-column">
              <h3 className="parking-facilities-text21">
                {props.feature2Title21111 ?? (
                  <Fragment>
                    <span className="parking-facilities-text27">
                      Attention to Detail
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="parking-facilities-text22 thq-body-small">
                {props.feature2Description21111 ?? (
                  <Fragment>
                    <span className="parking-facilities-text34">
                      From backdrops to table settings, every detail is
                      meticulously managed, ensuring a cohesive and visually
                      impressive experience.
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
          .parking-facilities-parking-facilities {
            gap: var(--dl-space-space-threeunits);
            position: relative;
          }
          .parking-facilities-container1 {
            gap: var(--dl-space-space-halfunit);
            max-width: 25%;
          }
          .parking-facilities-image1 {
            width: 100%;
          }
          .parking-facilities-actions {
            padding: var(--dl-space-space-unit);
            position: relative;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .parking-facilities-button {
            fill: transparent;
            flex: 1;
            color: transparent;
            transform: scale(0.99);
            border-width: 0px;
          }
          .parking-facilities-text10 {
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
          .parking-facilities-text10:hover {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            transform: scale(1);
            box-shadow: 1px 1px 15px 1px rgba(60, 12, 231, 0.57);
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 0.5px;
            background-color: #251573;
          }
          .parking-facilities-content {
            gap: var(--dl-space-space-unit);
          }
          .parking-facilities-section-title {
            gap: var(--dl-space-space-halfunit);
            align-items: flex-start;
          }
          .parking-facilities-text11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 400;
          }
          .parking-facilities-text12 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 18px;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
            text-transform: none;
            text-decoration: none;
          }
          .parking-facilities-text13 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .parking-facilities-list1 {
            align-self: stretch;
            align-items: flex-start;
          }
          .parking-facilities-list-item1 {
            gap: var(--dl-space-space-halfunit);
            max-width: 50%;
            align-items: flex-start;
          }
          .parking-facilities-text14 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 16px;
            font-style: normal;
            font-weight: 300;
          }
          .parking-facilities-text15 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .parking-facilities-list-item2 {
            gap: var(--dl-space-space-halfunit);
            align-items: flex-start;
          }
          .parking-facilities-text16 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 16px;
            font-style: normal;
            font-weight: 300;
          }
          .parking-facilities-text17 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .parking-facilities-list2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .parking-facilities-list-item3 {
            gap: var(--dl-space-space-halfunit);
            max-width: 100%;
            align-items: flex-start;
          }
          .parking-facilities-text18 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 16px;
            font-style: normal;
            font-weight: 300;
          }
          .parking-facilities-text19 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .parking-facilities-container2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .parking-facilities-text20 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .parking-facilities-list-item4 {
            display: none;
            align-items: flex-start;
          }
          .parking-facilities-text21 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-style: normal;
            font-weight: 300;
          }
          .parking-facilities-text22 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .parking-facilities-text23 {
            display: inline-block;
          }
          .parking-facilities-text24 {
            display: inline-block;
          }
          .parking-facilities-text25 {
            display: inline-block;
          }
          .parking-facilities-text26 {
            display: inline-block;
          }
          .parking-facilities-text27 {
            display: inline-block;
          }
          .parking-facilities-text28 {
            display: inline-block;
          }
          .parking-facilities-text29 {
            display: inline-block;
          }
          .parking-facilities-text30 {
            display: inline-block;
          }
          .parking-facilities-text31 {
            display: inline-block;
          }
          .parking-facilities-text32 {
            display: inline-block;
          }
          .parking-facilities-text33 {
            display: inline-block;
          }
          .parking-facilities-text34 {
            display: inline-block;
          }
          .parking-facilities-text35 {
            display: inline-block;
          }
          @media (max-width: 1200px) {
            .parking-facilities-parking-facilities {
              align-items: stretch;
            }
            .parking-facilities-container1 {
              justify-content: center;
            }
          }
          @media (max-width: 991px) {
            .parking-facilities-parking-facilities {
              gap: var(--dl-space-space-twounits);
              align-self: stretch;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-unit);
            }
            .parking-facilities-container1 {
              max-width: 100%;
            }
            .parking-facilities-image1 {
              width: 100%;
            }
            .parking-facilities-content {
              gap: var(--dl-space-space-oneandhalfunits);
              width: 100%;
            }
            .parking-facilities-list1 {
              gap: var(--dl-space-space-halfunit);
            }
            .parking-facilities-list-item1 {
              width: 50%;
            }
            .parking-facilities-list-item2 {
              width: 50%;
            }
            .parking-facilities-list2 {
              gap: var(--dl-space-space-halfunit);
            }
            .parking-facilities-list-item3 {
              width: 100%;
            }
            .parking-facilities-list-item4 {
              width: 50%;
            }
          }
          @media (max-width: 599px) {
            .parking-facilities-actions {
              align-self: center;
            }
            .parking-facilities-text11 {
              font-size: 10px;
            }
            .parking-facilities-list1 {
              gap: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .parking-facilities-list-item1 {
              width: 100%;
              max-width: 100%;
            }
            .parking-facilities-text15 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .parking-facilities-list-item2 {
              width: 100%;
            }
            .parking-facilities-text17 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .parking-facilities-text19 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .parking-facilities-text22 {
              font-size: 12px;
              font-family: Ubuntu;
            }
          }
          @media (max-width: 479px) {
            .parking-facilities-parking-facilities {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .parking-facilities-actions {
              width: 100%;
              flex-wrap: wrap;
              margin-top: var(--dl-space-space-unit);
            }
            .parking-facilities-list1 {
              flex-direction: column;
            }
            .parking-facilities-list2 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

ParkingFacilities.defaultProps = {
  feature1Description2121: undefined,
  sectionTitle2111: undefined,
  feature1Title2121: undefined,
  slogan2111: undefined,
  feature2Title21111: undefined,
  feature2Description2121: undefined,
  feature1Description21111: undefined,
  featureDescription21111: undefined,
  action2331: undefined,
  featureDescription3111: undefined,
  feature2Title2121: undefined,
  feature2Description21111: undefined,
  featureImageAlt2111: 'Luxurious Venue at Marigold Banquet Hall',
  feature1Title21111: undefined,
}

ParkingFacilities.propTypes = {
  feature1Description2121: PropTypes.element,
  sectionTitle2111: PropTypes.element,
  feature1Title2121: PropTypes.element,
  slogan2111: PropTypes.element,
  feature2Title21111: PropTypes.element,
  feature2Description2121: PropTypes.element,
  feature1Description21111: PropTypes.element,
  featureDescription21111: PropTypes.element,
  action2331: PropTypes.element,
  featureDescription3111: PropTypes.element,
  feature2Title2121: PropTypes.element,
  feature2Description21111: PropTypes.element,
  featureImageAlt2111: PropTypes.string,
  feature1Title21111: PropTypes.element,
}

export default ParkingFacilities
