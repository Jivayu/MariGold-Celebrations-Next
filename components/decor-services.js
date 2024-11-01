import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const DecorServices = (props) => {
  return (
    <>
      <section
        id="Decor-Services"
        className={`decor-services-decor-services thq-flex-row thq-section-max-width ${props.rootClassName} `}
      >
        <div className="decor-services-container1 UbuntuLight-14 thq-flex-column">
          <img
            alt={props.featureImageAlt21}
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/images/Marigold Images/decor-2-1500w.webp"
            srcSet="/images/Marigold Images//decor-2-1500w.webp 1200w, /images/Marigold Images/decor-2-tablet.webp 800w, /images/Marigold Images/decor-2-mobile.webp 480w"
            className="decor-services-image1 thq-img-ratio-4-3"
          />
          <div className="decor-services-actions thq-flex-row">
            <button className="decor-services-button menu">
              <span className="decor-services-text10 thq-button-outline">
                {props.action232 ?? (
                  <Fragment>
                    <span className="decor-services-text26">
                      Explore Our Facilities
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="decor-services-content UbuntuLight-14 thq-flex-column">
          <div className="decor-services-section-title UbuntuLight-14 thq-flex-column">
            <span className="decor-services-text11 thq-body-small">
              {props.slogan21 ?? (
                <Fragment>
                  <span className="decor-services-text29">
                    Elegance Redefined
                  </span>
                </Fragment>
              )}
            </span>
            <h2 className="decor-services-text12">
              {props.sectionTitle21 ?? (
                <Fragment>
                  <span className="decor-services-text27">
                    Professional Decor Services to Elevate Every Event
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="decor-services-text13 thq-body-large">
              {props.featureDescription31 ?? (
                <Fragment>
                  <span className="decor-services-text31">
                    Marigold Celebration Hall offers premier decor services
                    designed to transform your vision into a captivating
                    reality. Whether it’s a luxurious wedding, a corporate
                    event, or an intimate gathering, our decor team brings
                    creativity, expertise, and precision to every event.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="decor-services-list1 thq-flex-row">
            <div className="decor-services-list-item1 UbuntuLight-14 thq-flex-column">
              <h3 className="decor-services-text14">
                {props.feature1Title21 ?? (
                  <Fragment>
                    <span className="decor-services-text23">
                      Custom Themes &amp; Styling
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="decor-services-text15 thq-body-small">
                {props.feature1Description21 ?? (
                  <Fragment>
                    <span className="decor-services-text35">
                      From classic elegance to modern sophistication, we work
                      closely with you to design decor that aligns with your
                      theme, color palette, and desired ambiance.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="decor-services-list-item2 UbuntuLight-14 thq-flex-column">
              <h3 className="decor-services-text16">
                {props.feature2Title21 ?? (
                  <Fragment>
                    <span className="decor-services-text30">
                      Floral Arrangements &amp; Centerpieces
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="decor-services-text17 thq-body-small">
                {props.feature2Description21 ?? (
                  <Fragment>
                    <span className="decor-services-text32">
                      Stunning floral displays and bespoke centerpieces are
                      thoughtfully crafted to add elegance and personality to
                      your event setting.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="decor-services-list2 thq-flex-row">
            <div className="decor-services-list-item3 UbuntuLight-14 thq-flex-column">
              <h3 className="decor-services-text18">
                {props.feature1Title211 ?? (
                  <Fragment>
                    <span className="decor-services-text24">
                      Lighting &amp; Ambiance
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="decor-services-text19 thq-body-small">
                {props.feature1Description211 ?? (
                  <Fragment>
                    <span className="decor-services-text34">
                      Our customizable lighting options enhance every space,
                      creating the perfect mood for your celebration, whether
                      it’s a soft romantic glow or a vibrant and energetic
                      atmosphere.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="decor-services-list-item4 UbuntuLight-14 thq-flex-column">
              <h3 className="decor-services-text20">
                {props.feature2Title211 ?? (
                  <Fragment>
                    <span className="decor-services-text33">
                      Attention to Detail
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="decor-services-text21 thq-body-small">
                {props.feature2Description211 ?? (
                  <Fragment>
                    <span className="decor-services-text28">
                      From backdrops to table settings, every detail is
                      meticulously managed, ensuring a cohesive and visually
                      impressive experience.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="decor-services-container2">
            <p className="decor-services-text22 thq-body-large">
              {props.featureDescription211 ?? (
                <Fragment>
                  <span className="decor-services-text25">
                    With Marigold Celebration Hall’s professional decor
                    services, each event becomes a memorable masterpiece,
                    reflecting your unique style and leaving a lasting
                    impression on your guests.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .decor-services-decor-services {
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
          .decor-services-container1 {
            max-width: 25%;
          }
          .decor-services-image1 {
            width: 100%;
          }
          .decor-services-actions {
            padding: var(--dl-space-space-unit);
            position: relative;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .decor-services-button {
            fill: transparent;
            flex: 1;
            color: transparent;
            transform: scale(0.99);
            border-width: 0px;
          }
          .decor-services-text10 {
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
          .decor-services-text10:hover {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            transform: scale(1);
            box-shadow: 1px 1px 15px 1px rgba(60, 12, 231, 0.57);
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 0.5px;
            background-color: #251573;
          }
          .decor-services-content {
            gap: var(--dl-space-space-unit);
          }
          .decor-services-section-title {
            align-items: flex-start;
          }
          .decor-services-text11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 400;
          }
          .decor-services-text12 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 18px;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
            text-transform: none;
            text-decoration: none;
          }
          .decor-services-text13 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .decor-services-list1 {
            align-self: stretch;
            align-items: flex-start;
          }
          .decor-services-list-item1 {
            max-width: 50%;
            align-items: flex-start;
          }
          .decor-services-text14 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 16px;
            font-style: normal;
            font-weight: 300;
          }
          .decor-services-text15 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .decor-services-list-item2 {
            align-items: flex-start;
          }
          .decor-services-text16 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 16px;
            font-style: normal;
            font-weight: 300;
          }
          .decor-services-text17 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .decor-services-list2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .decor-services-list-item3 {
            max-width: 50%;
            align-items: flex-start;
          }
          .decor-services-text18 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 16px;
            font-style: normal;
            font-weight: 300;
          }
          .decor-services-text19 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .decor-services-list-item4 {
            align-items: flex-start;
          }
          .decor-services-text20 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 16px;
            font-style: normal;
            font-weight: 300;
          }
          .decor-services-text21 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .decor-services-container2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .decor-services-text22 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .decor-services-text23 {
            display: inline-block;
          }
          .decor-services-text24 {
            display: inline-block;
          }
          .decor-services-text25 {
            display: inline-block;
          }
          .decor-services-text26 {
            display: inline-block;
          }
          .decor-services-text27 {
            display: inline-block;
          }
          .decor-services-text28 {
            display: inline-block;
          }
          .decor-services-text29 {
            display: inline-block;
          }
          .decor-services-text30 {
            display: inline-block;
          }
          .decor-services-text31 {
            display: inline-block;
          }
          .decor-services-text32 {
            display: inline-block;
          }
          .decor-services-text33 {
            display: inline-block;
          }
          .decor-services-text34 {
            display: inline-block;
          }
          .decor-services-text35 {
            display: inline-block;
          }

          @media (max-width: 1200px) {
            .decor-services-decor-services {
              align-items: stretch;
            }
            .decor-services-container1 {
              justify-content: center;
            }
          }
          @media (max-width: 991px) {
            .decor-services-decor-services {
              gap: var(--dl-space-space-twounits);
              align-self: stretch;
              flex-direction: column;
            }
            .decor-services-container1 {
              max-width: 100%;
            }
            .decor-services-image1 {
              width: 100%;
            }
            .decor-services-content {
              gap: var(--dl-space-space-oneandhalfunits);
              width: 100%;
            }
            .decor-services-list1 {
              gap: var(--dl-space-space-halfunit);
            }
            .decor-services-list-item1 {
              width: 50%;
            }
            .decor-services-list-item2 {
              width: 50%;
            }
            .decor-services-list2 {
              gap: var(--dl-space-space-halfunit);
            }
            .decor-services-list-item3 {
              width: 50%;
            }
            .decor-services-list-item4 {
              width: 50%;
            }
          }
          @media (max-width: 599px) {
            .decor-services-actions {
              align-self: center;
            }
            .decor-services-text11 {
              font-size: 10px;
            }
            .decor-services-text15 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .decor-services-text17 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .decor-services-text19 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .decor-services-text21 {
              font-size: 12px;
              font-family: Ubuntu;
            }
          }
          @media (max-width: 479px) {
            .decor-services-decor-services {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .decor-services-actions {
              width: 100%;
              flex-wrap: wrap;
              margin-top: var(--dl-space-space-unit);
            }
            .decor-services-list1 {
              flex-direction: column;
            }
            .decor-services-list2 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

DecorServices.defaultProps = {
  featureImageAlt21: 'Luxurious Venue at Marigold Banquet Hall',
  feature1Title21: undefined,
  feature1Title211: undefined,
  featureDescription211: undefined,
  action232: undefined,
  sectionTitle21: undefined,
  feature2Description211: undefined,
  slogan21: undefined,
  feature2Title21: undefined,
  rootClassName: '',
  featureDescription31: undefined,
  feature2Description21: undefined,
  feature2Title211: undefined,
  feature1Description211: undefined,
  feature1Description21: undefined,
}

DecorServices.propTypes = {
  featureImageAlt21: PropTypes.string,
  feature1Title21: PropTypes.element,
  feature1Title211: PropTypes.element,
  featureDescription211: PropTypes.element,
  action232: PropTypes.element,
  sectionTitle21: PropTypes.element,
  feature2Description211: PropTypes.element,
  slogan21: PropTypes.element,
  feature2Title21: PropTypes.element,
  rootClassName: PropTypes.string,
  featureDescription31: PropTypes.element,
  feature2Description21: PropTypes.element,
  feature2Title211: PropTypes.element,
  feature1Description211: PropTypes.element,
  feature1Description21: PropTypes.element,
}

export default DecorServices
