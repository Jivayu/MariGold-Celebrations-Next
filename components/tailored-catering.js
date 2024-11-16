import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import CateringComponent from './catering-component'

const TailoredCatering = (props) => {
  return (
    <>
      <section
        id="Catering-Services"
        className={`tailored-catering-tailored-catering thq-flex-row thq-section-max-width ${props.rootClassName} `}
      >
        <CateringComponent
          action231={
            <Fragment>
              <span className="tailored-catering-text10">
                Explore Our Gallery Video
              </span>
            </Fragment>
          }
          rootClassName="catering-componentroot-class-name"
        ></CateringComponent>
        <div className="tailored-catering-content UbuntuLight-14 thq-flex-column">
          <div className="tailored-catering-section-title UbuntuLight-14 thq-flex-column">
            <span className="tailored-catering-text11 thq-body-small">
              {props.slogan2 ?? (
                <Fragment>
                  <span className="tailored-catering-text23">
                    Elegance Redefined
                  </span>
                </Fragment>
              )}
            </span>
            <h2 className="tailored-catering-text12 Ubuntu-Light-16">
              {props.sectionTitle2 ?? (
                <Fragment>
                  <span className="tailored-catering-text26">
                    Tailored Catering Services to Delight Every Plate
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="tailored-catering-text13 thq-body-large">
              {props.featureDescription3 ?? (
                <Fragment>
                  <span className="tailored-catering-text19">
                    At Marigold Celebration Hall, we understand that exceptional
                    cuisine is at the heart of every memorable event. Our
                    tailored catering services offer a wide selection of
                    culinary experiences, meticulously crafted to suit your
                    unique event and personal preferences.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="tailored-catering-list thq-flex-row">
            <div className="tailored-catering-list-item1 UbuntuLight-14 thq-flex-column">
              <h3 className="tailored-catering-text14 Ubuntu-Light-16">
                {props.feature1Title2 ?? (
                  <Fragment>
                    <span className="tailored-catering-text25">
                      Customizable Menus
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="tailored-catering-text15 thq-body-small">
                {props.feature1Description2 ?? (
                  <Fragment>
                    <span className="tailored-catering-text24">
                      From traditional Indian flavors to contemporary
                      international dishes, our expert culinary team
                      collaborates with you to design a menu that perfectly
                      reflects your tastes and enhances the occasion.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="tailored-catering-list-item2 UbuntuLight-14 thq-flex-column">
              <h3 className="tailored-catering-text16 Ubuntu-Light-16">
                {props.feature2Title2 ?? (
                  <Fragment>
                    <span className="tailored-catering-text20">
                      Flawless Presentation
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="tailored-catering-text17 thq-body-small">
                {props.feature2Description2 ?? (
                  <Fragment>
                    <span className="tailored-catering-text22">
                      Each dish is presented with style and elegance, adding
                      visual appeal that complements the theme and ambiance of
                      your event. Our attentive staff ensures smooth,
                      professional service from start to finish, allowing you
                      and your guests to enjoy a seamless dining experience.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="tailored-catering-container">
            <p className="tailored-catering-text18 thq-body-large">
              {props.featureDescription21 ?? (
                <Fragment>
                  <span className="tailored-catering-text21">
                    Our attentive staff ensures smooth, professional service
                    from start to finish, allowing you and your guests to enjoy
                    a seamless dining experience. With Marigold’s catering
                    services, every meal is an opportunity to create lasting
                    memories, making your event truly unforgettable.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .tailored-catering-tailored-catering {
            gap: var(--dl-space-space-threeunits);
            position: relative;
          }
          .tailored-catering-text10 {
            display: inline-block;
          }
          .tailored-catering-content {
            gap: var(--dl-space-space-unit);
          }
          .tailored-catering-section-title {
            gap: var(--dl-space-space-halfunit);
            align-items: flex-start;
          }
          .tailored-catering-text11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 400;
          }
          .tailored-catering-text12 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
          }
          .tailored-catering-text13 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .tailored-catering-list {
            align-self: stretch;
            align-items: flex-start;
          }
          .tailored-catering-list-item1 {
            gap: var(--dl-space-space-halfunit);
            min-width: 50%;
            align-items: flex-start;
          }
          .tailored-catering-text14 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-style: normal;
          }
          .tailored-catering-text15 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .tailored-catering-list-item2 {
            gap: var(--dl-space-space-halfunit);
            align-items: flex-start;
          }
          .tailored-catering-text16 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-style: normal;
          }
          .tailored-catering-text17 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .tailored-catering-container {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .tailored-catering-text18 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .tailored-catering-text19 {
            display: inline-block;
          }
          .tailored-catering-text20 {
            display: inline-block;
          }
          .tailored-catering-text21 {
            display: inline-block;
          }
          .tailored-catering-text22 {
            display: inline-block;
          }
          .tailored-catering-text23 {
            display: inline-block;
          }
          .tailored-catering-text24 {
            display: inline-block;
          }
          .tailored-catering-text25 {
            display: inline-block;
          }
          .tailored-catering-text26 {
            display: inline-block;
          }

          @media (max-width: 1200px) {
            .tailored-catering-tailored-catering {
              align-items: stretch;
            }
          }
          @media (max-width: 991px) {
            .tailored-catering-tailored-catering {
              gap: var(--dl-space-space-twounits);
              align-self: stretch;
              flex-direction: column;
            }
            .tailored-catering-content {
              gap: var(--dl-space-space-oneandhalfunits);
              width: 100%;
              padding-bottom: var(--dl-space-space-unit);
            }
            .tailored-catering-list {
              gap: var(--dl-space-space-halfunit);
              flex-direction: row;
            }
            .tailored-catering-list-item1 {
              width: 50%;
            }
            .tailored-catering-list-item2 {
              width: 50%;
              max-width: 50%;
            }
          }
          @media (max-width: 599px) {
            .tailored-catering-section-title {
              gap: var(--dl-space-space-halfunit);
            }
            .tailored-catering-text11 {
              font-size: 10px;
            }
            .tailored-catering-list {
              gap: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .tailored-catering-list-item1 {
              width: 100%;
              min-width: 100%;
            }
            .tailored-catering-text15 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .tailored-catering-list-item2 {
              width: 100%;
              max-width: 100%;
            }
            .tailored-catering-text17 {
              font-size: 12px;
              font-family: Ubuntu;
            }
          }
          @media (max-width: 490px) {
            .tailored-catering-text12 {
              font-size: 16px;
            }
            .tailored-catering-list {
              gap: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .tailored-catering-list-item1 {
              width: 100%;
              min-width: 100%;
            }
            .tailored-catering-text14 {
              font-size: 14px;
            }
            .tailored-catering-list-item2 {
              width: 100%;
              max-width: 100%;
            }
            .tailored-catering-text16 {
              font-size: 14px;
            }
          }
          @media (max-width: 479px) {
            .tailored-catering-tailored-catering {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .tailored-catering-list {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

TailoredCatering.defaultProps = {
  featureDescription3: undefined,
  feature2Title2: undefined,
  featureDescription21: undefined,
  feature2Description2: undefined,
  rootClassName: '',
  slogan2: undefined,
  feature1Description2: undefined,
  feature1Title2: undefined,
  sectionTitle2: undefined,
}

TailoredCatering.propTypes = {
  featureDescription3: PropTypes.element,
  feature2Title2: PropTypes.element,
  featureDescription21: PropTypes.element,
  feature2Description2: PropTypes.element,
  rootClassName: PropTypes.string,
  slogan2: PropTypes.element,
  feature1Description2: PropTypes.element,
  feature1Title2: PropTypes.element,
  sectionTitle2: PropTypes.element,
}

export default TailoredCatering
