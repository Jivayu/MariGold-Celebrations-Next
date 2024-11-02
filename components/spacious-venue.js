import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const SpaciousVenue = (props) => {
  return (
    <>
      <section
        id="Spacious-Space"
        className={`spacious-venue-spacious-venue thq-flex-row thq-section-max-width ${props.rootClassName} `}
      >
        <div className="spacious-venue-container1 UbuntuLight-14 thq-flex-column">
          <img
            alt={props.featureImageAlt}
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/images/Marigold Images/big-hall-1500w.webp"
            srcSet="/images/Marigold Images//big-hall-1500w.webp 1200w, /images/Marigold Images/big-hall-tablet.webp 800w, /images/Marigold Images/big-hall-mobile.webp 480w"
            className="thq-img-ratio-4-3 spacious-venue-image1"
          />
          <div className="spacious-venue-actions thq-flex-row">
            <button className="spacious-venue-button menu">
              <Link href="/gallery">
                <a className="spacious-venue-link thq-button-outline">
                  {props.action23 ?? (
                    <Fragment>
                      <span className="spacious-venue-text21">
                        Explore Our Gallery Video
                      </span>
                    </Fragment>
                  )}
                </a>
              </Link>
            </button>
          </div>
        </div>
        <div className="spacious-venue-content UbuntuLight-14 thq-flex-column">
          <div className="spacious-venue-section-title UbuntuLight-14 thq-flex-column">
            <span className="spacious-venue-text11 thq-body-small">
              {props.slogan ?? (
                <Fragment>
                  <span className="spacious-venue-text27">
                    Elegance Redefined
                  </span>
                </Fragment>
              )}
            </span>
            <h2 className="spacious-venue-text12 Ubuntu-Light-18">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="spacious-venue-text20">
                    Versatile Event Spaces for Every Occasion
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="spacious-venue-text13 thq-body-large">
              {props.featureDescription ?? (
                <Fragment>
                  <span className="spacious-venue-text25">
                    At Marigold Celebration Hall, we offer adaptable event
                    spaces designed to cater to a variety of gatherings, from
                    intimate gatherings to grand celebrations. Each space is
                    thoughtfully designed to provide a refined, comfortable
                    environment suited to your unique event needs.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="spacious-venue-list thq-flex-row">
            <div className="spacious-venue-list-item1 UbuntuLight-14 thq-flex-column">
              <h3 className="spacious-venue-text14 Ubuntu-Light-16">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="spacious-venue-text26">
                      The Grand Banquet Hall
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="spacious-venue-text15 thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="spacious-venue-text22">
                      Perfect for large-scale events such as weddings, corporate
                      galas, and conferences, our main hall boasts a spacious,
                      elegant design with the capacity to host up to 2000
                      guests. It’s ideal for creating a grand atmosphere and
                      leaving a lasting impression.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="spacious-venue-list-item2 UbuntuLight-14 thq-flex-column">
              <h3 className="spacious-venue-text16 Ubuntu-Light-16">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="spacious-venue-text23">
                      Private Event Rooms
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="spacious-venue-text17 thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="spacious-venue-text24">
                      For more personal celebrations like engagement parties,
                      milestone birthdays, or smaller business meetings, our
                      flexible private rooms offer an intimate ambiance with
                      personalized setup options, ensuring every detail aligns
                      with your vision.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="spacious-venue-container2">
            <p className="spacious-venue-text18 thq-body-large">
              {props.featureDescription2 ?? (
                <Fragment>
                  <span className="spacious-venue-text19">
                    Each space is equipped with high-end amenities and the
                    latest audio-visual technology, ensuring an unforgettable
                    experience for both you and your guests. Whatever the
                    occasion, Marigold Celebration Hall provides the perfect
                    setting for a seamless and memorable event.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .spacious-venue-spacious-venue {
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
          .spacious-venue-container1 {
            gap: var(--dl-space-space-halfunit);
            max-width: 25%;
          }
          .spacious-venue-actions {
            padding: var(--dl-space-space-unit);
            position: relative;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .spacious-venue-button {
            fill: transparent;
            flex: 1;
            color: transparent;
            transform: scale(0.99);
            border-width: 0px;
          }
          .spacious-venue-link {
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
          .spacious-venue-link:hover {
            transform: scale(1);
            box-shadow: 1px 2px 25px 1px rgba(50, 0, 255, 0.4);
            border-color: var(--dl-color-primary-logo-color-2);
            border-style: solid;
            border-width: 1px;
            background-color: rgba(61, 19, 234, 0.3);
          }
          .spacious-venue-content {
            gap: var(--dl-space-space-unit);
          }
          .spacious-venue-section-title {
            gap: var(--dl-space-space-halfunit);
            align-items: flex-start;
          }
          .spacious-venue-text11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 400;
          }
          .spacious-venue-text12 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
          }
          .spacious-venue-text13 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .spacious-venue-list {
            align-self: stretch;
            align-items: flex-start;
          }
          .spacious-venue-list-item1 {
            gap: var(--dl-space-space-halfunit);
            max-width: 50%;
            align-items: flex-start;
          }
          .spacious-venue-text14 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-style: normal;
          }
          .spacious-venue-text15 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .spacious-venue-list-item2 {
            gap: var(--dl-space-space-halfunit);
            align-items: flex-start;
          }
          .spacious-venue-text16 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-style: normal;
          }
          .spacious-venue-text17 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .spacious-venue-container2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .spacious-venue-text18 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .spacious-venue-text19 {
            display: inline-block;
          }
          .spacious-venue-text20 {
            display: inline-block;
          }
          .spacious-venue-text21 {
            display: inline-block;
          }
          .spacious-venue-text22 {
            display: inline-block;
          }
          .spacious-venue-text23 {
            display: inline-block;
          }
          .spacious-venue-text24 {
            display: inline-block;
          }
          .spacious-venue-text25 {
            display: inline-block;
          }
          .spacious-venue-text26 {
            display: inline-block;
          }
          .spacious-venue-text27 {
            display: inline-block;
          }

          @media (max-width: 1200px) {
            .spacious-venue-spacious-venue {
              align-items: stretch;
            }
            .spacious-venue-container1 {
              justify-content: center;
            }
          }
          @media (max-width: 991px) {
            .spacious-venue-spacious-venue {
              gap: var(--dl-space-space-unit);
              align-self: stretch;
              flex-direction: column;
              padding-bottom: var(--dl-space-space-unit);
            }
            .spacious-venue-container1 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              max-width: 100%;
            }
            .spacious-venue-image1 {
              width: 100%;
            }
            .spacious-venue-link {
              font-size: 14px;
            }
            .spacious-venue-content {
              gap: var(--dl-space-space-oneandhalfunits);
              width: 100%;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .spacious-venue-list {
              gap: var(--dl-space-space-halfunit);
              justify-content: center;
            }
            .spacious-venue-list-item1 {
              width: 50%;
            }
            .spacious-venue-list-item2 {
              width: 50%;
            }
          }
          @media (max-width: 599px) {
            .spacious-venue-actions {
              align-self: center;
            }
            .spacious-venue-section-title {
              gap: var(--dl-space-space-halfunit);
            }
            .spacious-venue-text11 {
              font-size: 10px;
            }
            .spacious-venue-list {
              gap: var(--dl-space-space-unit);
              flex-direction: column;
              justify-content: flex-start;
            }
            .spacious-venue-list-item1 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              max-width: 100%;
            }
            .spacious-venue-text15 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .spacious-venue-list-item2 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
            }
            .spacious-venue-text17 {
              font-size: 12px;
              font-family: Ubuntu;
            }
          }
          @media (max-width: 479px) {
            .spacious-venue-spacious-venue {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .spacious-venue-actions {
              width: 100%;
              flex-wrap: wrap;
              margin-top: var(--dl-space-space-unit);
            }
            .spacious-venue-list {
              flex-direction: column;
            }
          }
          @media (max-width: 399px) {
            .spacious-venue-list {
              gap: var(--dl-space-space-unit);
              justify-content: flex-start;
            }
            .spacious-venue-list-item1 {
              width: 100%;
              max-width: 100%;
            }
            .spacious-venue-text14 {
              font-size: 14px;
            }
            .spacious-venue-list-item2 {
              width: 100%;
            }
            .spacious-venue-text16 {
              font-size: 14px;
            }
          }
        `}
      </style>
    </>
  )
}

SpaciousVenue.defaultProps = {
  featureDescription2: undefined,
  sectionTitle: undefined,
  action23: undefined,
  feature1Description: undefined,
  featureImageAlt: 'Luxurious Venue at Marigold Banquet Hall',
  rootClassName: '',
  feature2Title: undefined,
  feature2Description: undefined,
  featureDescription: undefined,
  feature1Title: undefined,
  slogan: undefined,
}

SpaciousVenue.propTypes = {
  featureDescription2: PropTypes.element,
  sectionTitle: PropTypes.element,
  action23: PropTypes.element,
  feature1Description: PropTypes.element,
  featureImageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  feature2Title: PropTypes.element,
  feature2Description: PropTypes.element,
  featureDescription: PropTypes.element,
  feature1Title: PropTypes.element,
  slogan: PropTypes.element,
}

export default SpaciousVenue
