import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const LocationWithHighwayAccess = (props) => {
  return (
    <>
      <section
        id="Location With Highway Access"
        className="location-with-highway-access-audio-visual-equipment thq-flex-row thq-section-max-width"
      >
        <div className="location-with-highway-access-container1 UbuntuLight-14 thq-flex-column">
          <img
            alt={props.featureImageAlt2211}
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/images/Marigold Images/highways-1500w.webp"
            srcSet="/images/Marigold Images//highways-1500w.webp 1200w, /images/Marigold Images/highways-tablet.webp 800w, /images/Marigold Images/highways-mobile.webp 480w"
            className="location-with-highway-access-image1 thq-img-ratio-4-3"
          />
          <div className="location-with-highway-access-actions thq-flex-row">
            <button className="location-with-highway-access-button menu">
              <span className="location-with-highway-access-text10 thq-button-outline">
                {props.action231111 ?? (
                  <Fragment>
                    <span className="location-with-highway-access-text23">
                      Explore Our Facilities
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="location-with-highway-access-content UbuntuLight-14 thq-flex-column">
          <div className="location-with-highway-access-section-title UbuntuLight-14 thq-flex-column">
            <span className="location-with-highway-access-text11 thq-body-small">
              {props.slogan2211 ?? (
                <Fragment>
                  <span className="location-with-highway-access-text31">
                    Elegance Redefined
                  </span>
                </Fragment>
              )}
            </span>
            <h2 className="location-with-highway-access-text12 Ubuntu-Light-16">
              {props.sectionTitle2211 ?? (
                <Fragment>
                  <span className="location-with-highway-access-text27">
                    Prime, Iconic Location with Easy Highway Access and Google
                    Maps Convenience
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="location-with-highway-access-text13 thq-body-large">
              {props.featureDescription3211 ?? (
                <Fragment>
                  <span className="location-with-highway-access-text34">
                    Located in the heart of Hingna, Nagpur, Marigold Celebration
                    Hall boasts an iconic, central position with broad highway
                    connectivity and easy Google Maps navigation for seamless
                    guest arrival.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="location-with-highway-access-list1 thq-flex-row">
            <div className="location-with-highway-access-list-item1 UbuntuLight-14 thq-flex-column">
              <h3 className="location-with-highway-access-text14 Ubuntu-Light-16">
                {props.feature1Title2221 ?? (
                  <Fragment>
                    <span className="location-with-highway-access-text24">
                      Highly Accessible Location
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="location-with-highway-access-text15 thq-body-small">
                {props.feature1Description2221 ?? (
                  <Fragment>
                    <span className="location-with-highway-access-text26">
                      Positioned strategically in Hingna, Nagpur, our venue
                      offers straightforward access from major highways, making
                      it convenient for guests coming from all parts of the city
                      and beyond.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="location-with-highway-access-list-item2 UbuntuLight-14 thq-flex-column">
              <h3 className="location-with-highway-access-text16 Ubuntu-Light-16">
                {props.feature2Title2221 ?? (
                  <Fragment>
                    <span className="location-with-highway-access-text29">
                      Effortless Navigation via Google Maps
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="location-with-highway-access-text17 thq-body-small">
                {props.feature2Description2221 ?? (
                  <Fragment>
                    <span className="location-with-highway-access-text28">
                      Our precise Google Maps location ensures smooth navigation
                      for all attendees, enhancing the ease of reaching the
                      venue without hassle.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="location-with-highway-access-list2 thq-flex-row">
            <div className="location-with-highway-access-list-item3 UbuntuLight-14 thq-flex-column">
              <h3 className="location-with-highway-access-text18 Ubuntu-Light-16">
                {props.feature1Title22111 ?? (
                  <Fragment>
                    <span className="location-with-highway-access-text33">
                      Prestigious &amp; Central Setting
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="location-with-highway-access-text19 thq-body-small">
                {props.feature1Description22111 ?? (
                  <Fragment>
                    <span className="location-with-highway-access-text32">
                      Known for its iconic presence, Marigold Celebration Hall
                      provides an impressive backdrop for any event,
                      contributing to the overall experience and convenience of
                      your celebration.
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="location-with-highway-access-container2">
                <p className="location-with-highway-access-text20 thq-body-large">
                  {props.featureDescription21211 ?? (
                    <Fragment>
                      <span className="location-with-highway-access-text35">
                        Marigold’s prime location and accessible layout ensure
                        an unforgettable, stress-free experience for hosts and
                        guests alike.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="location-with-highway-access-list-item4 UbuntuLight-14 thq-flex-column">
              <h3 className="location-with-highway-access-text21">
                {props.feature2Title22111 ?? (
                  <Fragment>
                    <span className="location-with-highway-access-text30">
                      Enhanced Guest Comfort
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="location-with-highway-access-text22 thq-body-small">
                {props.feature2Description22111 ?? (
                  <Fragment>
                    <span className="location-with-highway-access-text25">
                      From air conditioning to audio-visual systems, every
                      essential service remains fully operational, ensuring your
                      guests’ experience is seamless and enjoyable.
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
          .location-with-highway-access-audio-visual-equipment {
            gap: var(--dl-space-space-threeunits);
            position: relative;
          }
          .location-with-highway-access-container1 {
            gap: var(--dl-space-space-halfunit);
            max-width: 25%;
          }
          .location-with-highway-access-image1 {
            width: 100%;
          }
          .location-with-highway-access-actions {
            padding: var(--dl-space-space-unit);
            position: relative;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .location-with-highway-access-button {
            fill: transparent;
            flex: 1;
            color: transparent;
            transform: scale(0.99);
            border-width: 0px;
          }
          .location-with-highway-access-text10 {
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
          .location-with-highway-access-text10:hover {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            transform: scale(1);
            box-shadow: 1px 1px 15px 1px rgba(60, 12, 231, 0.57);
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 0.5px;
            background-color: #251573;
          }
          .location-with-highway-access-content {
            gap: var(--dl-space-space-unit);
          }
          .location-with-highway-access-section-title {
            gap: var(--dl-space-space-halfunit);
            align-items: flex-start;
          }
          .location-with-highway-access-text11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 400;
          }
          .location-with-highway-access-text12 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
          }
          .location-with-highway-access-text13 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .location-with-highway-access-list1 {
            align-self: stretch;
            align-items: flex-start;
          }
          .location-with-highway-access-list-item1 {
            gap: var(--dl-space-space-halfunit);
            width: 50%;
            align-items: flex-start;
          }
          .location-with-highway-access-text14 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-style: normal;
          }
          .location-with-highway-access-text15 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .location-with-highway-access-list-item2 {
            gap: var(--dl-space-space-halfunit);
            width: 50%;
            align-items: flex-start;
          }
          .location-with-highway-access-text16 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-style: normal;
          }
          .location-with-highway-access-text17 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .location-with-highway-access-list2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .location-with-highway-access-list-item3 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            min-width: 50%;
            align-items: flex-start;
          }
          .location-with-highway-access-text18 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-style: normal;
          }
          .location-with-highway-access-text19 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .location-with-highway-access-container2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .location-with-highway-access-text20 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .location-with-highway-access-list-item4 {
            display: none;
            align-items: flex-start;
          }
          .location-with-highway-access-text21 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-style: normal;
            font-weight: 300;
          }
          .location-with-highway-access-text22 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .location-with-highway-access-text23 {
            display: inline-block;
          }
          .location-with-highway-access-text24 {
            display: inline-block;
          }
          .location-with-highway-access-text25 {
            display: inline-block;
          }
          .location-with-highway-access-text26 {
            display: inline-block;
          }
          .location-with-highway-access-text27 {
            display: inline-block;
          }
          .location-with-highway-access-text28 {
            display: inline-block;
          }
          .location-with-highway-access-text29 {
            display: inline-block;
          }
          .location-with-highway-access-text30 {
            display: inline-block;
          }
          .location-with-highway-access-text31 {
            display: inline-block;
          }
          .location-with-highway-access-text32 {
            display: inline-block;
          }
          .location-with-highway-access-text33 {
            display: inline-block;
          }
          .location-with-highway-access-text34 {
            display: inline-block;
          }
          .location-with-highway-access-text35 {
            display: inline-block;
          }
          @media (max-width: 1200px) {
            .location-with-highway-access-audio-visual-equipment {
              align-items: stretch;
            }
            .location-with-highway-access-container1 {
              justify-content: center;
            }
          }
          @media (max-width: 991px) {
            .location-with-highway-access-audio-visual-equipment {
              gap: var(--dl-space-space-twounits);
              align-self: stretch;
              flex-direction: column;
            }
            .location-with-highway-access-container1 {
              max-width: 100%;
            }
            .location-with-highway-access-image1 {
              width: 100%;
            }
            .location-with-highway-access-content {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .location-with-highway-access-list1 {
              gap: var(--dl-space-space-halfunit);
            }
            .location-with-highway-access-list-item1 {
              width: 50%;
            }
            .location-with-highway-access-list-item2 {
              width: 50%;
              height: 100%;
            }
            .location-with-highway-access-list2 {
              gap: var(--dl-space-space-halfunit);
            }
            .location-with-highway-access-list-item3 {
              width: 100%;
            }
            .location-with-highway-access-list-item4 {
              width: 50%;
            }
          }
          @media (max-width: 599px) {
            .location-with-highway-access-actions {
              align-self: center;
            }
            .location-with-highway-access-text11 {
              font-size: 10px;
            }
            .location-with-highway-access-list1 {
              gap: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .location-with-highway-access-list-item1 {
              width: 100%;
            }
            .location-with-highway-access-text15 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .location-with-highway-access-list-item2 {
              width: 100%;
              height: auto;
            }
            .location-with-highway-access-text17 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .location-with-highway-access-list-item3 {
              width: 100%;
            }
            .location-with-highway-access-text19 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .location-with-highway-access-text22 {
              font-size: 12px;
              font-family: Ubuntu;
            }
          }
          @media (max-width: 479px) {
            .location-with-highway-access-audio-visual-equipment {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .location-with-highway-access-actions {
              width: 100%;
              flex-wrap: wrap;
              margin-top: var(--dl-space-space-unit);
            }
            .location-with-highway-access-list1 {
              flex-direction: column;
            }
            .location-with-highway-access-list2 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

LocationWithHighwayAccess.defaultProps = {
  action231111: undefined,
  feature1Title2221: undefined,
  feature2Description22111: undefined,
  featureImageAlt2211: 'Luxurious Venue at Marigold Banquet Hall',
  feature1Description2221: undefined,
  sectionTitle2211: undefined,
  feature2Description2221: undefined,
  feature2Title2221: undefined,
  feature2Title22111: undefined,
  slogan2211: undefined,
  feature1Description22111: undefined,
  feature1Title22111: undefined,
  featureDescription3211: undefined,
  featureDescription21211: undefined,
}

LocationWithHighwayAccess.propTypes = {
  action231111: PropTypes.element,
  feature1Title2221: PropTypes.element,
  feature2Description22111: PropTypes.element,
  featureImageAlt2211: PropTypes.string,
  feature1Description2221: PropTypes.element,
  sectionTitle2211: PropTypes.element,
  feature2Description2221: PropTypes.element,
  feature2Title2221: PropTypes.element,
  feature2Title22111: PropTypes.element,
  slogan2211: PropTypes.element,
  feature1Description22111: PropTypes.element,
  feature1Title22111: PropTypes.element,
  featureDescription3211: PropTypes.element,
  featureDescription21211: PropTypes.element,
}

export default LocationWithHighwayAccess
