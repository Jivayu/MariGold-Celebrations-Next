import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const PremiumWashrooms = (props) => {
  return (
    <>
      <section
        id="Premium-Washrooms"
        className="premium-washrooms-premium-washrooms thq-flex-row thq-section-max-width"
      >
        <div className="premium-washrooms-container1 UbuntuLight-14 thq-flex-column">
          <img
            alt={props.featureImageAlt31}
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/images/Marigold Images/washrooms-1500w.webp"
            srcSet="/images/Marigold Images//washrooms-1500w.webp 1200w, /images/Marigold Images/washrooms-tablet.webp 800w, /images/Marigold Images/washrooms-mobile.webp 480w"
            className="thq-img-ratio-4-3 premium-washrooms-image1"
          />
          <div className="premium-washrooms-actions thq-flex-row">
            <button className="premium-washrooms-button menu">
              <span className="premium-washrooms-text10 thq-button-outline">
                {props.action2341 ?? (
                  <Fragment>
                    <span className="premium-washrooms-text25">
                      Explore Our Gallery Video
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="premium-washrooms-content UbuntuLight-14 thq-flex-column">
          <div className="premium-washrooms-section-title UbuntuLight-14 thq-flex-column">
            <span className="premium-washrooms-text11 thq-body-small">
              {props.slogan31 ?? (
                <Fragment>
                  <span className="premium-washrooms-text27">
                    Elegance Redefined
                  </span>
                </Fragment>
              )}
            </span>
            <h2 className="premium-washrooms-text12">
              {props.sectionTitle31 ?? (
                <Fragment>
                  <span className="premium-washrooms-text30">
                    Premium Washrooms and Changing Areas for Guest Comfort
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="premium-washrooms-text13 thq-body-large">
              {props.featureDescription41 ?? (
                <Fragment>
                  <span className="premium-washrooms-text34">
                    Marigold Celebration Hall offers top-tier washrooms and
                    private changing areas, ensuring the highest standards of
                    comfort and convenience for you and your guests. Our
                    facilities are designed with elegance and functionality in
                    mind, providing a refined experience at every event.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="premium-washrooms-list1 thq-flex-row">
            <div className="premium-washrooms-list-item1 UbuntuLight-14 thq-flex-column">
              <h3 className="premium-washrooms-text14">
                {props.feature1Title32 ?? (
                  <Fragment>
                    <span className="premium-washrooms-text28">
                      Modern &amp; Spacious
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="premium-washrooms-text15 thq-body-small">
                {props.feature1Description32 ?? (
                  <Fragment>
                    <span className="premium-washrooms-text35">
                      Our premium washrooms feature contemporary design, ample
                      space, and superior amenities, adding a touch of luxury to
                      your event.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="premium-washrooms-list-item2 UbuntuLight-14 thq-flex-column">
              <h3 className="premium-washrooms-text16">
                {props.feature2Title32 ?? (
                  <Fragment>
                    <span className="premium-washrooms-text24">
                      Impeccably Maintained
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="premium-washrooms-text17 thq-body-small">
                {props.feature2Description32 ?? (
                  <Fragment>
                    <span className="premium-washrooms-text23">
                      Our team ensures that washrooms and changing areas remain
                      clean and well-stocked throughout the event, prioritizing
                      guest satisfaction.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="premium-washrooms-list2 thq-flex-row">
            <div className="premium-washrooms-list-item3 UbuntuLight-14 thq-flex-column">
              <h3 className="premium-washrooms-text18">
                {props.feature1Title311 ?? (
                  <Fragment>
                    <span className="premium-washrooms-text26">
                      Private Changing Areas
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="premium-washrooms-text19 thq-body-small">
                {props.feature1Description311 ?? (
                  <Fragment>
                    <span className="premium-washrooms-text31">
                      Designed for privacy and convenience, our changing areas
                      allow guests to refresh or prepare with ease, making them
                      ideal for weddings and multi-event gatherings.
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="premium-washrooms-container2">
                <p className="premium-washrooms-text20 thq-body-large">
                  {props.featureDescription221 ?? (
                    <Fragment>
                      <span className="premium-washrooms-text33">
                        With Marigold Celebration Hall’s premium facilities,
                        every aspect of your event reflects sophistication,
                        ensuring an enjoyable and comfortable experience for all
                        attendees.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="premium-washrooms-list-item4 UbuntuLight-14 thq-flex-column">
              <h3 className="premium-washrooms-text21">
                {props.feature2Title311 ?? (
                  <Fragment>
                    <span className="premium-washrooms-text32">
                      Accessible for All Guests
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="premium-washrooms-text22 thq-body-small">
                {props.feature2Description311 ?? (
                  <Fragment>
                    <span className="premium-washrooms-text29">
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
          .premium-washrooms-premium-washrooms {
            gap: var(--dl-space-space-threeunits);
            position: relative;
            border-color: var(--dl-color-primary-logo-color-3);
            border-style: dotted;
            border-width: 1px;
            margin-bottom: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .premium-washrooms-container1 {
            max-width: 25%;
          }
          .premium-washrooms-actions {
            padding: var(--dl-space-space-unit);
            position: relative;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .premium-washrooms-button {
            fill: transparent;
            flex: 1;
            color: transparent;
            transform: scale(0.99);
            border-width: 0px;
          }
          .premium-washrooms-text10 {
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
          .premium-washrooms-text10:hover {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            transform: scale(1);
            box-shadow: 1px 1px 15px 1px rgba(60, 12, 231, 0.57);
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 0.5px;
            background-color: #251573;
          }
          .premium-washrooms-content {
            gap: var(--dl-space-space-unit);
          }
          .premium-washrooms-section-title {
            align-items: flex-start;
          }
          .premium-washrooms-text11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 400;
          }
          .premium-washrooms-text12 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 18px;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
            text-transform: none;
            text-decoration: none;
          }
          .premium-washrooms-text13 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .premium-washrooms-list1 {
            align-self: stretch;
            align-items: flex-start;
          }
          .premium-washrooms-list-item1 {
            max-width: 50%;
            align-items: flex-start;
          }
          .premium-washrooms-text14 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 16px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .premium-washrooms-text15 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .premium-washrooms-list-item2 {
            width: 50%;
            align-items: flex-start;
          }
          .premium-washrooms-text16 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 16px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .premium-washrooms-text17 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .premium-washrooms-list2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .premium-washrooms-list-item3 {
            max-width: 100%;
            align-items: flex-start;
          }
          .premium-washrooms-text18 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 16px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .premium-washrooms-text19 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .premium-washrooms-container2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .premium-washrooms-text20 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .premium-washrooms-list-item4 {
            display: none;
            align-items: flex-start;
          }
          .premium-washrooms-text21 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .premium-washrooms-text22 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .premium-washrooms-text23 {
            display: inline-block;
          }
          .premium-washrooms-text24 {
            display: inline-block;
          }
          .premium-washrooms-text25 {
            display: inline-block;
          }
          .premium-washrooms-text26 {
            display: inline-block;
          }
          .premium-washrooms-text27 {
            display: inline-block;
          }
          .premium-washrooms-text28 {
            display: inline-block;
          }
          .premium-washrooms-text29 {
            display: inline-block;
          }
          .premium-washrooms-text30 {
            display: inline-block;
          }
          .premium-washrooms-text31 {
            display: inline-block;
          }
          .premium-washrooms-text32 {
            display: inline-block;
          }
          .premium-washrooms-text33 {
            display: inline-block;
          }
          .premium-washrooms-text34 {
            display: inline-block;
          }
          .premium-washrooms-text35 {
            display: inline-block;
          }
          @media (max-width: 1200px) {
            .premium-washrooms-premium-washrooms {
              align-items: stretch;
            }
            .premium-washrooms-container1 {
              justify-content: center;
            }
          }
          @media (max-width: 991px) {
            .premium-washrooms-premium-washrooms {
              gap: var(--dl-space-space-twounits);
              align-self: stretch;
              flex-direction: column;
            }
            .premium-washrooms-container1 {
              width: 100%;
              max-width: 100%;
            }
            .premium-washrooms-image1 {
              width: 100%;
            }
            .premium-washrooms-content {
              gap: var(--dl-space-space-oneandhalfunits);
              width: 100%;
            }
            .premium-washrooms-list1 {
              gap: var(--dl-space-space-halfunit);
              justify-content: center;
            }
            .premium-washrooms-list-item1 {
              width: 50%;
            }
            .premium-washrooms-list-item2 {
              width: 50%;
            }
            .premium-washrooms-list2 {
              gap: var(--dl-space-space-halfunit);
              justify-content: center;
            }
            .premium-washrooms-list-item3 {
              width: 100%;
            }
            .premium-washrooms-list-item4 {
              width: 50%;
            }
          }
          @media (max-width: 599px) {
            .premium-washrooms-actions {
              align-self: center;
            }
            .premium-washrooms-text11 {
              font-size: 10px;
            }
            .premium-washrooms-text15 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .premium-washrooms-text17 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .premium-washrooms-list-item3 {
              width: 100%;
            }
            .premium-washrooms-text19 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .premium-washrooms-text22 {
              font-size: 12px;
              font-family: Ubuntu;
            }
          }
          @media (max-width: 479px) {
            .premium-washrooms-premium-washrooms {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .premium-washrooms-actions {
              width: 100%;
              flex-wrap: wrap;
              margin-top: var(--dl-space-space-unit);
            }
            .premium-washrooms-list1 {
              flex-direction: column;
            }
            .premium-washrooms-list2 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

PremiumWashrooms.defaultProps = {
  feature2Description32: undefined,
  feature2Title32: undefined,
  action2341: undefined,
  feature1Title311: undefined,
  slogan31: undefined,
  feature1Title32: undefined,
  feature2Description311: undefined,
  sectionTitle31: undefined,
  featureImageAlt31: 'Luxurious Venue at Marigold Banquet Hall',
  feature1Description311: undefined,
  feature2Title311: undefined,
  featureDescription221: undefined,
  featureDescription41: undefined,
  feature1Description32: undefined,
}

PremiumWashrooms.propTypes = {
  feature2Description32: PropTypes.element,
  feature2Title32: PropTypes.element,
  action2341: PropTypes.element,
  feature1Title311: PropTypes.element,
  slogan31: PropTypes.element,
  feature1Title32: PropTypes.element,
  feature2Description311: PropTypes.element,
  sectionTitle31: PropTypes.element,
  featureImageAlt31: PropTypes.string,
  feature1Description311: PropTypes.element,
  feature2Title311: PropTypes.element,
  featureDescription221: PropTypes.element,
  featureDescription41: PropTypes.element,
  feature1Description32: PropTypes.element,
}

export default PremiumWashrooms
