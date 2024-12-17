import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const AudioVisualEquipment = (props) => {
  return (
    <>
      <section
        id="Audio-Visual-Equipment"
        className="audio-visual-equipment-audio-visual-equipment thq-flex-row thq-section-max-width"
      >
        <div className="audio-visual-equipment-container1 UbuntuLight-14 thq-flex-column">
          <img
            alt={props.featureImageAlt221}
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/images/Marigold Images/av-equipments-1500w.webp"
            srcSet="/images/Marigold Images//av-equipments-1500w.webp 1200w, /images/Marigold Images/av-equipments-tablet.webp 800w, /images/Marigold Images/av-equipments-mobile.webp 480w"
            className="audio-visual-equipment-image1 thq-img-ratio-4-3"
          />
          <div className="audio-visual-equipment-actions thq-flex-row">
            <button className="audio-visual-equipment-button menu">
              <span className="audio-visual-equipment-text10 thq-button-outline">
                {props.action23111 ?? (
                  <Fragment>
                    <span className="audio-visual-equipment-text26">
                      Explore Our Facilities
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="audio-visual-equipment-content UbuntuLight-14 thq-flex-column">
          <div className="audio-visual-equipment-section-title UbuntuLight-14 thq-flex-column">
            <span className="audio-visual-equipment-text11 thq-body-small">
              {props.slogan221 ?? (
                <Fragment>
                  <span className="audio-visual-equipment-text27">
                    Elegance Redefined
                  </span>
                </Fragment>
              )}
            </span>
            <h2 className="audio-visual-equipment-text12 Ubuntu-Light-16">
              {props.sectionTitle221 ?? (
                <Fragment>
                  <span className="audio-visual-equipment-text23">
                    Advanced Audio-Visual Equipment and Technology for Impactful
                    Events
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="audio-visual-equipment-text13 thq-body-large">
              {props.featureDescription321 ?? (
                <Fragment>
                  <span className="audio-visual-equipment-text24">
                    Marigold Celebration Hall is equipped with state-of-the-art
                    audio-visual technology to elevate every event, ensuring
                    powerful and immersive experiences for your guests. From
                    impactful presentations to unforgettable celebrations, our
                    AV setup enhances every occasion.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="audio-visual-equipment-list1 thq-flex-row">
            <div className="audio-visual-equipment-list-item1 UbuntuLight-14 thq-flex-column">
              <h3 className="audio-visual-equipment-text14 Ubuntu-Light-16">
                {props.feature1Title222 ?? (
                  <Fragment>
                    <span className="audio-visual-equipment-text34">
                      High-Definition Sound &amp; Projection
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="audio-visual-equipment-text15 thq-body-small">
                {props.feature1Description222 ?? (
                  <Fragment>
                    <span className="audio-visual-equipment-text31">
                      Our advanced sound systems and high-resolution projectors
                      bring crystal-clear audio and visuals, adding vibrancy to
                      speeches, music, and multimedia displays.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="audio-visual-equipment-list-item2 UbuntuLight-14 thq-flex-column">
              <h3 className="audio-visual-equipment-text16 Ubuntu-Light-16">
                {props.feature2Title222 ?? (
                  <Fragment>
                    <span className="audio-visual-equipment-text32">
                      Seamless Connectivity
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="audio-visual-equipment-text17 thq-body-small">
                {props.feature2Description222 ?? (
                  <Fragment>
                    <span className="audio-visual-equipment-text35">
                      With easy-to-use connectivity options, our AV technology
                      supports various devices, enabling smooth transitions and
                      flawless presentations.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="audio-visual-equipment-list2 thq-flex-row">
            <div className="audio-visual-equipment-list-item3 UbuntuLight-14 thq-flex-column">
              <h3 className="audio-visual-equipment-text18 Ubuntu-Light-16">
                {props.feature1Title2211 ?? (
                  <Fragment>
                    <span className="audio-visual-equipment-text29">
                      On-Site Technical Support
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="audio-visual-equipment-text19 thq-body-small">
                {props.feature1Description2211 ?? (
                  <Fragment>
                    <span className="audio-visual-equipment-text33">
                      Our dedicated AV team provides expert assistance, ensuring
                      equipment operates seamlessly, so you can focus on your
                      event without any interruptions.
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="audio-visual-equipment-container2">
                <p className="audio-visual-equipment-text20 thq-body-large">
                  {props.featureDescription2121 ?? (
                    <Fragment>
                      <span className="audio-visual-equipment-text25">
                        With Marigold Celebration Hall’s cutting-edge
                        audio-visual equipment, every event becomes a dynamic
                        experience, leaving a lasting impression on your guests.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="audio-visual-equipment-list-item4 UbuntuLight-14 thq-flex-column">
              <h3 className="audio-visual-equipment-text21">
                {props.feature2Title2211 ?? (
                  <Fragment>
                    <span className="audio-visual-equipment-text30">
                      Enhanced Guest Comfort
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="audio-visual-equipment-text22 thq-body-small">
                {props.feature2Description2211 ?? (
                  <Fragment>
                    <span className="audio-visual-equipment-text28">
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
          .audio-visual-equipment-audio-visual-equipment {
            gap: var(--dl-space-space-threeunits);
            position: relative;
          }
          .audio-visual-equipment-container1 {
            gap: var(--dl-space-space-halfunit);
            max-width: 25%;
          }
          .audio-visual-equipment-image1 {
            width: 100%;
          }
          .audio-visual-equipment-actions {
            padding: var(--dl-space-space-unit);
            position: relative;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .audio-visual-equipment-button {
            fill: transparent;
            flex: 1;
            color: transparent;
            transform: scale(0.99);
            border-width: 0px;
          }
          .audio-visual-equipment-text10 {
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
          .audio-visual-equipment-text10:hover {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            transform: scale(1);
            box-shadow: 1px 1px 15px 1px rgba(60, 12, 231, 0.57);
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 0.5px;
            background-color: #251573;
          }
          .audio-visual-equipment-content {
            gap: var(--dl-space-space-unit);
          }
          .audio-visual-equipment-section-title {
            gap: var(--dl-space-space-halfunit);
            align-items: flex-start;
          }
          .audio-visual-equipment-text11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 400;
          }
          .audio-visual-equipment-text12 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
          }
          .audio-visual-equipment-text13 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .audio-visual-equipment-list1 {
            align-self: stretch;
            align-items: flex-start;
          }
          .audio-visual-equipment-list-item1 {
            gap: var(--dl-space-space-halfunit);
            min-width: 50%;
            align-items: flex-start;
          }
          .audio-visual-equipment-text14 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-style: normal;
          }
          .audio-visual-equipment-text15 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .audio-visual-equipment-list-item2 {
            gap: var(--dl-space-space-halfunit);
            align-items: flex-start;
          }
          .audio-visual-equipment-text16 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-style: normal;
          }
          .audio-visual-equipment-text17 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .audio-visual-equipment-list2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .audio-visual-equipment-list-item3 {
            gap: var(--dl-space-space-halfunit);
            min-width: 50%;
            align-items: flex-start;
          }
          .audio-visual-equipment-text18 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-style: normal;
          }
          .audio-visual-equipment-text19 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .audio-visual-equipment-container2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .audio-visual-equipment-text20 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .audio-visual-equipment-list-item4 {
            display: none;
            align-items: flex-start;
          }
          .audio-visual-equipment-text21 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-style: normal;
            font-weight: 300;
          }
          .audio-visual-equipment-text22 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .audio-visual-equipment-text23 {
            display: inline-block;
          }
          .audio-visual-equipment-text24 {
            display: inline-block;
          }
          .audio-visual-equipment-text25 {
            display: inline-block;
          }
          .audio-visual-equipment-text26 {
            display: inline-block;
          }
          .audio-visual-equipment-text27 {
            display: inline-block;
          }
          .audio-visual-equipment-text28 {
            display: inline-block;
          }
          .audio-visual-equipment-text29 {
            display: inline-block;
          }
          .audio-visual-equipment-text30 {
            display: inline-block;
          }
          .audio-visual-equipment-text31 {
            display: inline-block;
          }
          .audio-visual-equipment-text32 {
            display: inline-block;
          }
          .audio-visual-equipment-text33 {
            display: inline-block;
          }
          .audio-visual-equipment-text34 {
            display: inline-block;
          }
          .audio-visual-equipment-text35 {
            display: inline-block;
          }
          @media (max-width: 1200px) {
            .audio-visual-equipment-audio-visual-equipment {
              align-items: stretch;
            }
            .audio-visual-equipment-container1 {
              justify-content: center;
            }
          }
          @media (max-width: 991px) {
            .audio-visual-equipment-audio-visual-equipment {
              gap: var(--dl-space-space-twounits);
              align-self: stretch;
              flex-direction: column;
            }
            .audio-visual-equipment-container1 {
              max-width: 100%;
            }
            .audio-visual-equipment-image1 {
              width: 100%;
            }
            .audio-visual-equipment-content {
              gap: var(--dl-space-space-oneandhalfunits);
              width: 100%;
              height: auto;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .audio-visual-equipment-list1 {
              gap: var(--dl-space-space-halfunit);
            }
            .audio-visual-equipment-list-item1 {
              width: 50%;
            }
            .audio-visual-equipment-list-item2 {
              width: 50%;
            }
            .audio-visual-equipment-list2 {
              gap: var(--dl-space-space-halfunit);
            }
            .audio-visual-equipment-list-item3 {
              width: 100%;
            }
            .audio-visual-equipment-list-item4 {
              width: 50%;
            }
          }
          @media (max-width: 599px) {
            .audio-visual-equipment-actions {
              align-self: center;
            }
            .audio-visual-equipment-text11 {
              font-size: 10px;
            }
            .audio-visual-equipment-list1 {
              gap: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .audio-visual-equipment-list-item1 {
              width: 100%;
              min-width: 100%;
            }
            .audio-visual-equipment-text15 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .audio-visual-equipment-list-item2 {
              width: 100%;
            }
            .audio-visual-equipment-text17 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .audio-visual-equipment-list-item3 {
              width: 100%;
            }
            .audio-visual-equipment-text19 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .audio-visual-equipment-text22 {
              font-size: 12px;
              font-family: Ubuntu;
            }
          }
          @media (max-width: 479px) {
            .audio-visual-equipment-audio-visual-equipment {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .audio-visual-equipment-actions {
              width: 100%;
              flex-wrap: wrap;
              margin-top: var(--dl-space-space-unit);
            }
            .audio-visual-equipment-list1 {
              flex-direction: column;
            }
            .audio-visual-equipment-list2 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

AudioVisualEquipment.defaultProps = {
  sectionTitle221: undefined,
  featureDescription321: undefined,
  featureDescription2121: undefined,
  action23111: undefined,
  slogan221: undefined,
  feature2Description2211: undefined,
  feature1Title2211: undefined,
  feature2Title2211: undefined,
  featureImageAlt221: 'Luxurious Venue at Marigold Banquet Hall',
  feature1Description222: undefined,
  feature2Title222: undefined,
  feature1Description2211: undefined,
  feature1Title222: undefined,
  feature2Description222: undefined,
}

AudioVisualEquipment.propTypes = {
  sectionTitle221: PropTypes.element,
  featureDescription321: PropTypes.element,
  featureDescription2121: PropTypes.element,
  action23111: PropTypes.element,
  slogan221: PropTypes.element,
  feature2Description2211: PropTypes.element,
  feature1Title2211: PropTypes.element,
  feature2Title2211: PropTypes.element,
  featureImageAlt221: PropTypes.string,
  feature1Description222: PropTypes.element,
  feature2Title222: PropTypes.element,
  feature1Description2211: PropTypes.element,
  feature1Title222: PropTypes.element,
  feature2Description222: PropTypes.element,
}

export default AudioVisualEquipment
