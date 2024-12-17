import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const GeneratorBackup = (props) => {
  return (
    <>
      <section
        id="Generator-Backup"
        className="generator-backup-generator-backup thq-flex-row thq-section-max-width"
      >
        <div className="generator-backup-container1 UbuntuLight-14 thq-flex-column">
          <img
            alt={props.featureImageAlt22}
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/images/Marigold Images/generator-1500w.webp"
            srcSet="/images/Marigold Images//generator-1500w.webp 1200w, /images/Marigold Images/generator-tablet.webp 800w, /images/Marigold Images/generator-mobile.webp 480w"
            className="generator-backup-image1 thq-img-ratio-4-3"
          />
          <div className="generator-backup-actions thq-flex-row">
            <button className="generator-backup-button menu">
              <span className="generator-backup-text10 thq-button-outline">
                {props.action2311 ?? (
                  <Fragment>
                    <span className="generator-backup-text24">
                      Explore Our Facilities
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="generator-backup-content UbuntuLight-14 thq-flex-column">
          <div className="generator-backup-section-title UbuntuLight-14 thq-flex-column">
            <span className="generator-backup-text11 thq-body-small">
              {props.slogan22 ?? (
                <Fragment>
                  <span className="generator-backup-text35">
                    Elegance Redefined
                  </span>
                </Fragment>
              )}
            </span>
            <h2 className="generator-backup-text12 Ubuntu-Light-16">
              {props.sectionTitle22 ?? (
                <Fragment>
                  <span className="generator-backup-text23">
                    Reliable 24/7 Generator Backup for Uninterrupted Events
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="generator-backup-text13 thq-body-large">
              {props.featureDescription32 ?? (
                <Fragment>
                  <span className="generator-backup-text32">
                    At Marigold Celebration Hall, we understand the importance
                    of a flawless event experience. Our 24/7 generator backup
                    ensures that your celebration proceeds without disruption,
                    regardless of external power situations.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="generator-backup-list1 thq-flex-row">
            <div className="generator-backup-list-item1 UbuntuLight-14 thq-flex-column">
              <h3 className="generator-backup-text14 Ubuntu-Light-16">
                {props.feature1Title22 ?? (
                  <Fragment>
                    <span className="generator-backup-text29">
                      Continuous Power Supply
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="generator-backup-text15 thq-body-small">
                {props.feature1Description22 ?? (
                  <Fragment>
                    <span className="generator-backup-text30">
                      Our backup generator activates instantly during any power
                      fluctuation, providing uninterrupted lighting, sound, and
                      comfort throughout your event.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="generator-backup-list-item2 UbuntuLight-14 thq-flex-column">
              <h3 className="generator-backup-text16 Ubuntu-Light-16">
                {props.feature2Title22 ?? (
                  <Fragment>
                    <span className="generator-backup-text25">
                      Enhanced Guest Comfort
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="generator-backup-text17 thq-body-small">
                {props.feature2Description22 ?? (
                  <Fragment>
                    <span className="generator-backup-text34">
                      From air conditioning to audio-visual systems, every
                      essential service remains fully operational, ensuring your
                      guests’ experience is seamless and enjoyable.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="generator-backup-list2 thq-flex-row">
            <div className="generator-backup-list-item3 UbuntuLight-14 thq-flex-column">
              <h3 className="generator-backup-text18 Ubuntu-Light-16">
                {props.feature1Title221 ?? (
                  <Fragment>
                    <span className="generator-backup-text26">
                      Peace of Mind
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="generator-backup-text19 thq-body-small">
                {props.feature1Description221 ?? (
                  <Fragment>
                    <span className="generator-backup-text31">
                      With our reliable power backup, you can relax and focus on
                      the event, knowing that every detail will run smoothly,
                      regardless of external factors.
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="generator-backup-container2">
                <p className="generator-backup-text20 thq-body-large">
                  {props.featureDescription212 ?? (
                    <Fragment>
                      <span className="generator-backup-text33">
                        Marigold Celebration Hall’s generator backup adds an
                        essential layer of security to your event, allowing you
                        to celebrate with confidence and ease.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="generator-backup-list-item4 UbuntuLight-14 thq-flex-column">
              <h3 className="generator-backup-text21">
                {props.feature2Title221 ?? (
                  <Fragment>
                    <span className="generator-backup-text28">
                      Enhanced Guest Comfort
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="generator-backup-text22 thq-body-small">
                {props.feature2Description221 ?? (
                  <Fragment>
                    <span className="generator-backup-text27">
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
          .generator-backup-generator-backup {
            gap: var(--dl-space-space-threeunits);
            position: relative;
          }
          .generator-backup-container1 {
            gap: var(--dl-space-space-halfunit);
            max-width: 25%;
          }
          .generator-backup-image1 {
            width: 100%;
          }
          .generator-backup-actions {
            padding: var(--dl-space-space-unit);
            position: relative;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .generator-backup-button {
            fill: transparent;
            flex: 1;
            color: transparent;
            transform: scale(0.99);
            border-width: 0px;
          }
          .generator-backup-text10 {
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
          .generator-backup-text10:hover {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            transform: scale(1);
            box-shadow: 1px 1px 15px 1px rgba(60, 12, 231, 0.57);
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 0.5px;
            background-color: #251573;
          }
          .generator-backup-content {
            gap: var(--dl-space-space-unit);
          }
          .generator-backup-section-title {
            gap: var(--dl-space-space-halfunit);
            align-items: flex-start;
          }
          .generator-backup-text11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 400;
          }
          .generator-backup-text12 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
          }
          .generator-backup-text13 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .generator-backup-list1 {
            align-self: stretch;
            align-items: flex-start;
          }
          .generator-backup-list-item1 {
            gap: var(--dl-space-space-halfunit);
            min-width: 50%;
            align-items: flex-start;
          }
          .generator-backup-text14 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-style: normal;
          }
          .generator-backup-text15 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .generator-backup-list-item2 {
            gap: var(--dl-space-space-halfunit);
            align-items: flex-start;
          }
          .generator-backup-text16 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-style: normal;
          }
          .generator-backup-text17 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .generator-backup-list2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .generator-backup-list-item3 {
            gap: var(--dl-space-space-halfunit);
            min-width: 50%;
            align-items: flex-start;
          }
          .generator-backup-text18 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-style: normal;
          }
          .generator-backup-text19 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .generator-backup-container2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .generator-backup-text20 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .generator-backup-list-item4 {
            display: none;
            align-items: flex-start;
          }
          .generator-backup-text21 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-style: normal;
            font-weight: 300;
          }
          .generator-backup-text22 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .generator-backup-text23 {
            display: inline-block;
          }
          .generator-backup-text24 {
            display: inline-block;
          }
          .generator-backup-text25 {
            display: inline-block;
          }
          .generator-backup-text26 {
            display: inline-block;
          }
          .generator-backup-text27 {
            display: inline-block;
          }
          .generator-backup-text28 {
            display: inline-block;
          }
          .generator-backup-text29 {
            display: inline-block;
          }
          .generator-backup-text30 {
            display: inline-block;
          }
          .generator-backup-text31 {
            display: inline-block;
          }
          .generator-backup-text32 {
            display: inline-block;
          }
          .generator-backup-text33 {
            display: inline-block;
          }
          .generator-backup-text34 {
            display: inline-block;
          }
          .generator-backup-text35 {
            display: inline-block;
          }
          @media (max-width: 1200px) {
            .generator-backup-generator-backup {
              align-items: stretch;
            }
            .generator-backup-container1 {
              justify-content: center;
            }
          }
          @media (max-width: 991px) {
            .generator-backup-generator-backup {
              gap: var(--dl-space-space-twounits);
              align-self: stretch;
              flex-direction: column;
            }
            .generator-backup-container1 {
              max-width: 100%;
            }
            .generator-backup-image1 {
              width: 100%;
            }
            .generator-backup-content {
              gap: var(--dl-space-space-unit);
              width: 100%;
            }
            .generator-backup-list1 {
              gap: var(--dl-space-space-halfunit);
            }
            .generator-backup-list-item1 {
              width: 50%;
            }
            .generator-backup-list-item2 {
              width: 50%;
            }
            .generator-backup-list2 {
              gap: var(--dl-space-space-halfunit);
            }
            .generator-backup-list-item3 {
              width: 100%;
            }
            .generator-backup-list-item4 {
              width: 50%;
            }
          }
          @media (max-width: 599px) {
            .generator-backup-actions {
              align-self: center;
            }
            .generator-backup-content {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .generator-backup-text11 {
              font-size: 10px;
            }
            .generator-backup-list1 {
              gap: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .generator-backup-list-item1 {
              width: 100%;
              min-width: 100%;
            }
            .generator-backup-text15 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .generator-backup-list-item2 {
              width: 100%;
            }
            .generator-backup-text17 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .generator-backup-list-item3 {
              width: 100%;
              min-width: 100%;
            }
            .generator-backup-text19 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .generator-backup-text22 {
              font-size: 12px;
              font-family: Ubuntu;
            }
          }
          @media (max-width: 479px) {
            .generator-backup-generator-backup {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .generator-backup-actions {
              width: 100%;
              flex-wrap: wrap;
              margin-top: var(--dl-space-space-unit);
            }
            .generator-backup-list1 {
              flex-direction: column;
            }
            .generator-backup-list2 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

GeneratorBackup.defaultProps = {
  sectionTitle22: undefined,
  action2311: undefined,
  feature2Title22: undefined,
  feature1Title221: undefined,
  feature2Description221: undefined,
  feature2Title221: undefined,
  feature1Title22: undefined,
  feature1Description22: undefined,
  feature1Description221: undefined,
  featureDescription32: undefined,
  featureDescription212: undefined,
  feature2Description22: undefined,
  slogan22: undefined,
  featureImageAlt22: 'Luxurious Venue at Marigold Banquet Hall',
}

GeneratorBackup.propTypes = {
  sectionTitle22: PropTypes.element,
  action2311: PropTypes.element,
  feature2Title22: PropTypes.element,
  feature1Title221: PropTypes.element,
  feature2Description221: PropTypes.element,
  feature2Title221: PropTypes.element,
  feature1Title22: PropTypes.element,
  feature1Description22: PropTypes.element,
  feature1Description221: PropTypes.element,
  featureDescription32: PropTypes.element,
  featureDescription212: PropTypes.element,
  feature2Description22: PropTypes.element,
  slogan22: PropTypes.element,
  featureImageAlt22: PropTypes.string,
}

export default GeneratorBackup
