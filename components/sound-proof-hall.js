import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const SoundProofHall = (props) => {
  return (
    <>
      <section
        id="SoundProof-Hall"
        className="sound-proof-hall-sound-proof-hall thq-flex-row thq-section-max-width"
      >
        <div className="sound-proof-hall-container UbuntuLight-14 thq-flex-column">
          <img
            alt={props.featureImageAlt211}
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/images/Marigold Images/soundproof-1500w.webp"
            srcSet="/images/Marigold Images//soundproof-1500w.webp 1200w, /images/Marigold Images/soundproof-tablet.webp 800w, /images/Marigold Images/soundproof-mobile.webp 480w"
            className="sound-proof-hall-image1 thq-img-ratio-4-3"
          />
          <div className="sound-proof-hall-actions thq-flex-row">
            <button className="sound-proof-hall-button menu">
              <span className="sound-proof-hall-text10 thq-button-outline">
                {props.action233 ?? (
                  <Fragment>
                    <span className="sound-proof-hall-text24">
                      Explore Our Gallery Video
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="sound-proof-hall-content UbuntuLight-14 thq-flex-column">
          <div className="sound-proof-hall-section-title UbuntuLight-14 thq-flex-column">
            <span className="sound-proof-hall-text11 thq-body-small">
              {props.slogan211 ?? (
                <Fragment>
                  <span className="sound-proof-hall-text26">
                    Elegance Redefined
                  </span>
                </Fragment>
              )}
            </span>
            <h2 className="sound-proof-hall-text12">
              {props.sectionTitle211 ?? (
                <Fragment>
                  <span className="sound-proof-hall-text35">
                    Soundproof Hall for Uninterrupted Events
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="sound-proof-hall-text13 thq-body-large">
              {props.featureDescription311 ?? (
                <Fragment>
                  <span className="sound-proof-hall-text23">
                    At Marigold Celebration Hall, we prioritize an immersive and
                    focused experience for every event. Our soundproof hall is
                    designed to eliminate outside noise, ensuring that all
                    attention remains on the moment. This specialized feature
                    enhances a variety of occasions, from wedding ceremonies to
                    corporate presentations and musical performances.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="sound-proof-hall-list1 thq-flex-row">
            <div className="sound-proof-hall-list-item1 UbuntuLight-14 thq-flex-column">
              <h3 className="sound-proof-hall-text14">
                {props.feature1Title212 ?? (
                  <Fragment>
                    <span className="sound-proof-hall-text31">
                      Enhanced Acoustics
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="sound-proof-hall-text15 thq-body-small">
                {props.feature1Description212 ?? (
                  <Fragment>
                    <span className="sound-proof-hall-text34">
                      The hall’s soundproofing not only prevents external noise
                      interference but also optimizes internal acoustics,
                      delivering clear and impactful sound for speeches, music,
                      and presentations.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="sound-proof-hall-list-item2 UbuntuLight-14 thq-flex-column">
              <h3 className="sound-proof-hall-text16">
                {props.feature2Title212 ?? (
                  <Fragment>
                    <span className="sound-proof-hall-text25">
                      Privacy &amp; Exclusivity
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="sound-proof-hall-text17 thq-body-small">
                {props.feature2Description212 ?? (
                  <Fragment>
                    <span className="sound-proof-hall-text32">
                      Guests can enjoy an intimate, private setting without
                      distractions, ideal for celebrations and business
                      functions where confidentiality and focus are paramount.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="sound-proof-hall-list2 thq-flex-row">
            <div className="sound-proof-hall-list-item3 UbuntuLight-14 thq-flex-column">
              <h3 className="sound-proof-hall-text18">
                {props.feature1Title2111 ?? (
                  <Fragment>
                    <span className="sound-proof-hall-text33">
                      Uninterrupted Experience
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="sound-proof-hall-text19 thq-body-small">
                {props.feature1Description2111 ?? (
                  <Fragment>
                    <span className="sound-proof-hall-text29">
                      Our soundproof hall ensures that your event proceeds
                      seamlessly, with no disturbances, allowing guests to fully
                      immerse themselves in the experience.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="sound-proof-hall-list-item4 UbuntuLight-14 thq-flex-column">
              <h3 className="sound-proof-hall-text20">
                {props.feature2Title2111 ?? (
                  <Fragment>
                    <span className="sound-proof-hall-text27">
                      Attention to Detail
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="sound-proof-hall-text21 thq-body-small">
                {props.feature2Description2111 ?? (
                  <Fragment>
                    <span className="sound-proof-hall-text28">
                      From backdrops to table settings, every detail is
                      meticulously managed, ensuring a cohesive and visually
                      impressive experience.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <p className="sound-proof-hall-text22 thq-body-large">
            {props.featureDescription2111 ?? (
              <Fragment>
                <span className="sound-proof-hall-text30">
                  Marigold’s soundproof hall provides a refined and
                  distraction-free atmosphere, making it the perfect setting for
                  events that demand attention to every detail.
                </span>
              </Fragment>
            )}
          </p>
        </div>
      </section>
      <style jsx>
        {`
          .sound-proof-hall-sound-proof-hall {
            gap: var(--dl-space-space-threeunits);
            position: relative;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .sound-proof-hall-container {
            gap: var(--dl-space-space-halfunit);
            max-width: 25%;
          }
          .sound-proof-hall-image1 {
            width: 100%;
          }
          .sound-proof-hall-actions {
            padding: var(--dl-space-space-unit);
            position: relative;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .sound-proof-hall-button {
            fill: transparent;
            flex: 1;
            color: transparent;
            transform: scale(0.99);
            border-width: 0px;
          }
          .sound-proof-hall-text10 {
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
          .sound-proof-hall-text10:hover {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            transform: scale(1);
            box-shadow: 1px 1px 15px 1px rgba(60, 12, 231, 0.57);
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 0.5px;
            background-color: #251573;
          }
          .sound-proof-hall-content {
            gap: var(--dl-space-space-unit);
          }
          .sound-proof-hall-section-title {
            gap: var(--dl-space-space-halfunit);
            align-items: flex-start;
          }
          .sound-proof-hall-text11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 400;
          }
          .sound-proof-hall-text12 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 18px;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
            text-transform: none;
            text-decoration: none;
          }
          .sound-proof-hall-text13 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .sound-proof-hall-list1 {
            align-self: stretch;
            align-items: flex-start;
          }
          .sound-proof-hall-list-item1 {
            gap: var(--dl-space-space-halfunit);
            max-width: 50%;
            align-items: flex-start;
          }
          .sound-proof-hall-text14 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 16px;
            font-style: normal;
            font-weight: 300;
          }
          .sound-proof-hall-text15 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .sound-proof-hall-list-item2 {
            gap: var(--dl-space-space-halfunit);
            align-items: flex-start;
          }
          .sound-proof-hall-text16 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 16px;
            font-style: normal;
            font-weight: 300;
          }
          .sound-proof-hall-text17 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .sound-proof-hall-list2 {
            gap: var(--dl-space-space-halfunit);
            align-self: stretch;
            align-items: flex-start;
          }
          .sound-proof-hall-list-item3 {
            gap: var(--dl-space-space-halfunit);
            max-width: 100%;
            align-items: flex-start;
          }
          .sound-proof-hall-text18 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 16px;
            font-style: normal;
            font-weight: 300;
          }
          .sound-proof-hall-text19 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .sound-proof-hall-list-item4 {
            display: none;
            align-items: flex-start;
          }
          .sound-proof-hall-text20 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-style: normal;
            font-weight: 300;
          }
          .sound-proof-hall-text21 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .sound-proof-hall-text22 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .sound-proof-hall-text23 {
            display: inline-block;
          }
          .sound-proof-hall-text24 {
            display: inline-block;
          }
          .sound-proof-hall-text25 {
            display: inline-block;
          }
          .sound-proof-hall-text26 {
            display: inline-block;
          }
          .sound-proof-hall-text27 {
            display: inline-block;
          }
          .sound-proof-hall-text28 {
            display: inline-block;
          }
          .sound-proof-hall-text29 {
            display: inline-block;
          }
          .sound-proof-hall-text30 {
            display: inline-block;
          }
          .sound-proof-hall-text31 {
            display: inline-block;
          }
          .sound-proof-hall-text32 {
            display: inline-block;
          }
          .sound-proof-hall-text33 {
            display: inline-block;
          }
          .sound-proof-hall-text34 {
            display: inline-block;
          }
          .sound-proof-hall-text35 {
            display: inline-block;
          }
          @media (max-width: 1200px) {
            .sound-proof-hall-sound-proof-hall {
              align-items: stretch;
            }
            .sound-proof-hall-container {
              justify-content: center;
            }
          }
          @media (max-width: 991px) {
            .sound-proof-hall-sound-proof-hall {
              gap: var(--dl-space-space-twounits);
              align-self: stretch;
              flex-direction: column;
            }
            .sound-proof-hall-container {
              max-width: 100%;
            }
            .sound-proof-hall-image1 {
              width: 100%;
            }
            .sound-proof-hall-content {
              gap: var(--dl-space-space-oneandhalfunits);
              width: 100%;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .sound-proof-hall-list1 {
              gap: var(--dl-space-space-halfunit);
            }
            .sound-proof-hall-list-item1 {
              width: 50%;
            }
            .sound-proof-hall-list-item2 {
              width: 50%;
            }
            .sound-proof-hall-list2 {
              gap: var(--dl-space-space-halfunit);
            }
            .sound-proof-hall-list-item3 {
              max-width: 100%;
            }
            .sound-proof-hall-list-item4 {
              width: 50%;
            }
          }
          @media (max-width: 599px) {
            .sound-proof-hall-actions {
              align-self: center;
            }
            .sound-proof-hall-text11 {
              font-size: 10px;
            }
            .sound-proof-hall-list1 {
              gap: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .sound-proof-hall-list-item1 {
              width: 100%;
              max-width: 100%;
            }
            .sound-proof-hall-text15 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .sound-proof-hall-list-item2 {
              width: 100%;
            }
            .sound-proof-hall-text17 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .sound-proof-hall-text19 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .sound-proof-hall-text21 {
              font-size: 12px;
              font-family: Ubuntu;
            }
          }
          @media (max-width: 479px) {
            .sound-proof-hall-sound-proof-hall {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .sound-proof-hall-actions {
              width: 100%;
              flex-wrap: wrap;
              margin-top: var(--dl-space-space-unit);
            }
            .sound-proof-hall-list1 {
              flex-direction: column;
            }
            .sound-proof-hall-list2 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

SoundProofHall.defaultProps = {
  featureDescription311: undefined,
  action233: undefined,
  feature2Title212: undefined,
  slogan211: undefined,
  feature2Title2111: undefined,
  feature2Description2111: undefined,
  feature1Description2111: undefined,
  featureDescription2111: undefined,
  feature1Title212: undefined,
  feature2Description212: undefined,
  featureImageAlt211: 'Luxurious Venue at Marigold Banquet Hall',
  feature1Title2111: undefined,
  feature1Description212: undefined,
  sectionTitle211: undefined,
}

SoundProofHall.propTypes = {
  featureDescription311: PropTypes.element,
  action233: PropTypes.element,
  feature2Title212: PropTypes.element,
  slogan211: PropTypes.element,
  feature2Title2111: PropTypes.element,
  feature2Description2111: PropTypes.element,
  feature1Description2111: PropTypes.element,
  featureDescription2111: PropTypes.element,
  feature1Title212: PropTypes.element,
  feature2Description212: PropTypes.element,
  featureImageAlt211: PropTypes.string,
  feature1Title2111: PropTypes.element,
  feature1Description212: PropTypes.element,
  sectionTitle211: PropTypes.element,
}

export default SoundProofHall
