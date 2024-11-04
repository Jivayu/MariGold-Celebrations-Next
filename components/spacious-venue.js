import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import EventSpacesComponent from './event-spaces-component'

const SpaciousVenue = (props) => {
  return (
    <>
      <section
        id="Spacious-Space"
        className={`spacious-venue-spacious-venue thq-flex-row thq-section-max-width ${props.rootClassName} `}
      >
        <EventSpacesComponent
          action23={
            <Fragment>
              <span className="spacious-venue-text10">
                Explore Our Gallery Video
              </span>
            </Fragment>
          }
          rootClassName="event-spaces-componentroot-class-name"
        ></EventSpacesComponent>
        <div className="spacious-venue-content UbuntuLight-14 thq-flex-column">
          <div className="spacious-venue-section-title UbuntuLight-14 thq-flex-column">
            <span className="spacious-venue-text11 thq-body-small">
              {props.slogan ?? (
                <Fragment>
                  <span className="spacious-venue-text26">
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
                  <span className="spacious-venue-text24">
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
                    <span className="spacious-venue-text25">
                      The Grand Banquet Hall
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="spacious-venue-text15 thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="spacious-venue-text21">
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
                    <span className="spacious-venue-text22">
                      Private Event Rooms
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="spacious-venue-text17 thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="spacious-venue-text23">
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
          <div className="spacious-venue-container">
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
          }
          .spacious-venue-text10 {
            display: inline-block;
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
          .spacious-venue-container {
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

          @media (max-width: 1200px) {
            .spacious-venue-spacious-venue {
              align-items: stretch;
            }
          }
          @media (max-width: 991px) {
            .spacious-venue-spacious-venue {
              gap: var(--dl-space-space-unit);
              align-self: stretch;
              flex-direction: column;
              padding-bottom: var(--dl-space-space-unit);
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
  feature1Description: undefined,
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
  feature1Description: PropTypes.element,
  rootClassName: PropTypes.string,
  feature2Title: PropTypes.element,
  feature2Description: PropTypes.element,
  featureDescription: PropTypes.element,
  feature1Title: PropTypes.element,
  slogan: PropTypes.element,
}

export default SpaciousVenue
