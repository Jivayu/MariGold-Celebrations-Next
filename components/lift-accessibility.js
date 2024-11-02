import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const LiftAccessibility = (props) => {
  return (
    <>
      <section
        id="Lift-Accessibility"
        className="lift-accessibility-lift-accessibility thq-flex-row thq-section-max-width"
      >
        <div className="lift-accessibility-container1 UbuntuLight-14 thq-flex-column">
          <img
            alt={props.featureImageAlt3}
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/images/Marigold Images/lifts-1500w.webp"
            srcSet="/images/Marigold Images//lifts-1500w.webp 1200w, /images/Marigold Images/lifts-tablet.webp 800w, /images/Marigold Images/lifts-mobile.webp 480w"
            className="thq-img-ratio-4-3 lift-accessibility-image1"
          />
          <div className="lift-accessibility-actions thq-flex-row">
            <button className="lift-accessibility-button menu">
              <span className="lift-accessibility-text10 thq-button-outline">
                {props.action234 ?? (
                  <Fragment>
                    <span className="lift-accessibility-text33">
                      Explore Our Gallery Video
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="lift-accessibility-content UbuntuLight-14 thq-flex-column">
          <div className="lift-accessibility-section-title UbuntuLight-14 thq-flex-column">
            <span className="lift-accessibility-text11 thq-body-small">
              {props.slogan3 ?? (
                <Fragment>
                  <span className="lift-accessibility-text23">
                    Elegance Redefined
                  </span>
                </Fragment>
              )}
            </span>
            <h2 className="lift-accessibility-text12 Ubuntu-Light-16">
              {props.sectionTitle3 ?? (
                <Fragment>
                  <span className="lift-accessibility-text26">
                    Seamless Access with 2 Spacious Lifts and Full Accessibility
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="lift-accessibility-text13 thq-body-large">
              {props.featureDescription4 ?? (
                <Fragment>
                  <span className="lift-accessibility-text25">
                    Marigold Celebration Hall is designed with guest convenience
                    in mind, featuring two large, modern lifts to ensure smooth
                    and efficient access to all event spaces. Our commitment to
                    accessibility ensures that every guest can move comfortably
                    throughout the venue.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="lift-accessibility-list1 thq-flex-row">
            <div className="lift-accessibility-list-item1 UbuntuLight-14 thq-flex-column">
              <h3 className="lift-accessibility-text14 Ubuntu-Light-16">
                {props.feature1Title3 ?? (
                  <Fragment>
                    <span className="lift-accessibility-text31">
                      Spacious, High-Capacity Lifts
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="lift-accessibility-text15 thq-body-small">
                {props.feature1Description3 ?? (
                  <Fragment>
                    <span className="lift-accessibility-text34">
                      <span>
                        Our two large lifts are built to accommodate groups with
                        ease, minimizing wait times and allowing for quick
                        transitions between floors.
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="lift-accessibility-list-item2 UbuntuLight-14 thq-flex-column">
              <h3 className="lift-accessibility-text16 Ubuntu-Light-16">
                {props.feature2Title3 ?? (
                  <Fragment>
                    <span className="lift-accessibility-text29">
                      Accessible for All Guests
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="lift-accessibility-text17 thq-body-small">
                {props.feature2Description3 ?? (
                  <Fragment>
                    <span className="lift-accessibility-text24">
                      We prioritize inclusivity, ensuring that all event areas
                      are fully accessible to guests of all abilities, providing
                      comfort and convenience for everyone.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="lift-accessibility-list2 thq-flex-row">
            <div className="lift-accessibility-list-item3 UbuntuLight-14 thq-flex-column">
              <h3 className="lift-accessibility-text18 Ubuntu-Light-16">
                {props.feature1Title31 ?? (
                  <Fragment>
                    <span className="lift-accessibility-text27">
                      Efficient Event Flow
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="lift-accessibility-text19 thq-body-small">
                {props.feature1Description31 ?? (
                  <Fragment>
                    <span className="lift-accessibility-text32">
                      With easy access to all halls and facilities, our lifts
                      support the smooth flow of guests throughout your event,
                      enhancing the overall experience.
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="lift-accessibility-container2">
                <p className="lift-accessibility-text20 thq-body-large">
                  {props.featureDescription22 ?? (
                    <Fragment>
                      <span className="lift-accessibility-text30">
                        Marigold Celebration Hall’s lift and accessibility
                        features add to a seamless and enjoyable experience,
                        catering to the needs of every guest attending your
                        special occasion.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="lift-accessibility-list-item4 UbuntuLight-14 thq-flex-column">
              <h3 className="lift-accessibility-text21">
                {props.feature2Title31 ?? (
                  <Fragment>
                    <span className="lift-accessibility-text28">
                      Accessible for All Guests
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="lift-accessibility-text22 thq-body-small">
                {props.feature2Description31 ?? (
                  <Fragment>
                    <span className="lift-accessibility-text37">
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
          .lift-accessibility-lift-accessibility {
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
          .lift-accessibility-container1 {
            gap: var(--dl-space-space-halfunit);
            max-width: 25%;
          }
          .lift-accessibility-actions {
            padding: var(--dl-space-space-unit);
            position: relative;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .lift-accessibility-button {
            fill: transparent;
            flex: 1;
            color: transparent;
            transform: scale(0.99);
            border-width: 0px;
          }
          .lift-accessibility-text10 {
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
          .lift-accessibility-text10:hover {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            transform: scale(1);
            box-shadow: 1px 1px 15px 1px rgba(60, 12, 231, 0.57);
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 0.5px;
            background-color: #251573;
          }
          .lift-accessibility-content {
            gap: var(--dl-space-space-unit);
          }
          .lift-accessibility-section-title {
            gap: var(--dl-space-space-halfunit);
            align-items: flex-start;
          }
          .lift-accessibility-text11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 400;
          }
          .lift-accessibility-text12 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
          }
          .lift-accessibility-text13 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .lift-accessibility-list1 {
            align-self: stretch;
            align-items: flex-start;
          }
          .lift-accessibility-list-item1 {
            gap: var(--dl-space-space-halfunit);
            max-width: 50%;
            align-items: flex-start;
          }
          .lift-accessibility-text14 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-style: normal;
          }
          .lift-accessibility-text15 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .lift-accessibility-list-item2 {
            gap: var(--dl-space-space-halfunit);
            align-items: flex-start;
          }
          .lift-accessibility-text16 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-style: normal;
          }
          .lift-accessibility-text17 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .lift-accessibility-list2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .lift-accessibility-list-item3 {
            gap: var(--dl-space-space-halfunit);
            max-width: 100%;
            align-items: flex-start;
          }
          .lift-accessibility-text18 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-style: normal;
          }
          .lift-accessibility-text19 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .lift-accessibility-container2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .lift-accessibility-text20 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .lift-accessibility-list-item4 {
            display: none;
            align-items: flex-start;
          }
          .lift-accessibility-text21 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .lift-accessibility-text22 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .lift-accessibility-text23 {
            display: inline-block;
          }
          .lift-accessibility-text24 {
            display: inline-block;
          }
          .lift-accessibility-text25 {
            display: inline-block;
          }
          .lift-accessibility-text26 {
            display: inline-block;
          }
          .lift-accessibility-text27 {
            display: inline-block;
          }
          .lift-accessibility-text28 {
            display: inline-block;
          }
          .lift-accessibility-text29 {
            display: inline-block;
          }
          .lift-accessibility-text30 {
            display: inline-block;
          }
          .lift-accessibility-text31 {
            display: inline-block;
          }
          .lift-accessibility-text32 {
            display: inline-block;
          }
          .lift-accessibility-text33 {
            display: inline-block;
          }
          .lift-accessibility-text34 {
            display: inline-block;
          }
          .lift-accessibility-text37 {
            display: inline-block;
          }
          @media (max-width: 1200px) {
            .lift-accessibility-lift-accessibility {
              align-items: stretch;
            }
            .lift-accessibility-container1 {
              justify-content: center;
            }
          }
          @media (max-width: 991px) {
            .lift-accessibility-lift-accessibility {
              gap: var(--dl-space-space-twounits);
              align-self: stretch;
              flex-direction: column;
            }
            .lift-accessibility-container1 {
              width: 100%;
              max-width: 100%;
            }
            .lift-accessibility-image1 {
              width: 100%;
            }
            .lift-accessibility-content {
              gap: var(--dl-space-space-unit);
              width: 100%;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .lift-accessibility-list1 {
              gap: var(--dl-space-space-halfunit);
              justify-content: center;
            }
            .lift-accessibility-list-item1 {
              width: 50%;
            }
            .lift-accessibility-list-item2 {
              width: 50%;
            }
            .lift-accessibility-list2 {
              gap: var(--dl-space-space-halfunit);
              justify-content: center;
            }
            .lift-accessibility-list-item3 {
              width: 100%;
            }
            .lift-accessibility-list-item4 {
              width: 50%;
            }
          }
          @media (max-width: 599px) {
            .lift-accessibility-actions {
              align-self: center;
            }
            .lift-accessibility-text11 {
              font-size: 10px;
            }
            .lift-accessibility-list1 {
              gap: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .lift-accessibility-list-item1 {
              width: 100%;
              max-width: 100%;
            }
            .lift-accessibility-text15 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .lift-accessibility-list-item2 {
              width: 100%;
            }
            .lift-accessibility-text17 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .lift-accessibility-list-item3 {
              width: 100%;
            }
            .lift-accessibility-text19 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .lift-accessibility-text22 {
              font-size: 12px;
              font-family: Ubuntu;
            }
          }
          @media (max-width: 479px) {
            .lift-accessibility-lift-accessibility {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .lift-accessibility-actions {
              width: 100%;
              flex-wrap: wrap;
              margin-top: var(--dl-space-space-unit);
            }
            .lift-accessibility-list1 {
              flex-direction: column;
            }
            .lift-accessibility-list2 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

LiftAccessibility.defaultProps = {
  slogan3: undefined,
  feature2Description3: undefined,
  featureDescription4: undefined,
  sectionTitle3: undefined,
  feature1Title31: undefined,
  feature2Title31: undefined,
  featureImageAlt3: 'Luxurious Venue at Marigold Banquet Hall',
  feature2Title3: undefined,
  featureDescription22: undefined,
  feature1Title3: undefined,
  feature1Description31: undefined,
  action234: undefined,
  feature1Description3: undefined,
  feature2Description31: undefined,
}

LiftAccessibility.propTypes = {
  slogan3: PropTypes.element,
  feature2Description3: PropTypes.element,
  featureDescription4: PropTypes.element,
  sectionTitle3: PropTypes.element,
  feature1Title31: PropTypes.element,
  feature2Title31: PropTypes.element,
  featureImageAlt3: PropTypes.string,
  feature2Title3: PropTypes.element,
  featureDescription22: PropTypes.element,
  feature1Title3: PropTypes.element,
  feature1Description31: PropTypes.element,
  action234: PropTypes.element,
  feature1Description3: PropTypes.element,
  feature2Description31: PropTypes.element,
}

export default LiftAccessibility
