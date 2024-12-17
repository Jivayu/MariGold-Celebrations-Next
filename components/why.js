import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Why = (props) => {
  return (
    <>
      <section className="why-why">
        <div className="why-header">
          <div className="why-section-numeral">
            <div className="why-divide"></div>
            <p className="why-text10">
              {props.text ?? (
                <Fragment>
                  <span className="why-text11">04</span>
                </Fragment>
              )}
            </p>
          </div>
          <div data-aos="fade-right" className="why-heading">
            <h2 className="why-title1">
              {props.title ?? (
                <Fragment>
                  <span className="why-text13">Why OnConf</span>
                </Fragment>
              )}
            </h2>
            <p className="why-caption">
              {props.caption ?? (
                <Fragment>
                  <span className="why-text16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="why-brands">
          <div className="why-row">
            <div className="why-item1">
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="why-image1"
              />
              <div className="why-details1">
                <h3 className="why-title2">
                  {props.title1 ?? (
                    <Fragment>
                      <span className="why-text14">Networking</span>
                    </Fragment>
                  )}
                </h3>
                <p className="why-description1">
                  {props.description ?? (
                    <Fragment>
                      <span className="why-text12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="why-item2">
              <img
                alt={props.imageAlt1}
                src={props.imageSrc1}
                className="why-image2"
              />
              <div className="why-details2">
                <h3 className="why-title3">
                  {props.title2 ?? (
                    <Fragment>
                      <span className="why-text15">Learning</span>
                    </Fragment>
                  )}
                </h3>
                <p className="why-description2">
                  {props.description1 ?? (
                    <Fragment>
                      <span className="why-text17">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="why-item3">
              <img
                alt={props.imageAlt2}
                src={props.imageSrc2}
                className="why-image3"
              />
              <div className="why-details3">
                <h3 className="why-title4">
                  {props.title3 ?? (
                    <Fragment>
                      <span className="why-text18">Developing</span>
                    </Fragment>
                  )}
                </h3>
                <p className="why-description3">
                  {props.description2 ?? (
                    <Fragment>
                      <span className="why-text19">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .why-why {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .why-header {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .why-section-numeral {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .why-divide {
            width: 100px;
            height: 1px;
            display: flex;
            margin-top: 4px;
            align-items: center;
            flex-direction: row;
            background-color: #000000;
          }
          .why-heading {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .why-title1 {
            font-size: 90px;
            font-style: normal;
            font-weight: 600;
            line-height: 100px;
          }
          .why-caption {
            font-size: 18px;
            line-height: 27px;
          }
          .why-brands {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .why-row {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .why-item1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .why-image1 {
            height: 200px;
            object-fit: cover;
          }
          .why-details1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .why-title2 {
            font-size: 50px;
            font-style: normal;
            font-weight: 600;
            line-height: 60px;
          }
          .why-description1 {
            font-size: 18px;
            line-height: 27px;
          }
          .why-item2 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .why-image2 {
            height: 200px;
            object-fit: cover;
          }
          .why-details2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .why-title3 {
            font-size: 50px;
            font-style: normal;
            font-weight: 600;
            line-height: 60px;
          }
          .why-description2 {
            font-size: 18px;
            line-height: 27px;
          }
          .why-item3 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .why-image3 {
            height: 200px;
            object-fit: cover;
          }
          .why-details3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .why-title4 {
            font-size: 50px;
            font-style: normal;
            font-weight: 600;
            line-height: 60px;
          }
          .why-description3 {
            font-size: 18px;
            line-height: 27px;
          }
          .why-text11 {
            display: inline-block;
          }
          .why-text12 {
            display: inline-block;
          }
          .why-text13 {
            display: inline-block;
          }
          .why-text14 {
            display: inline-block;
          }
          .why-text15 {
            display: inline-block;
          }
          .why-text16 {
            display: inline-block;
          }
          .why-text17 {
            display: inline-block;
          }
          .why-text18 {
            display: inline-block;
          }
          .why-text19 {
            display: inline-block;
          }
          @media (max-width: 599px) {
            .why-why {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .why-divide {
              width: 50px;
            }
            .why-heading {
              gap: var(--dl-space-space-unit);
            }
            .why-title1 {
              font-size: 30px;
              line-height: 33px;
            }
            .why-caption {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .why-row {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .why-item1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .why-image1 {
              height: 60px;
            }
            .why-details1 {
              gap: var(--dl-space-space-unit);
            }
            .why-title2 {
              font-size: 24px;
              line-height: 28px;
            }
            .why-description1 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .why-item2 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .why-image2 {
              height: 60px;
            }
            .why-details2 {
              gap: var(--dl-space-space-unit);
            }
            .why-title3 {
              font-size: 24px;
              line-height: 28px;
            }
            .why-description2 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .why-item3 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .why-image3 {
              height: 60px;
            }
            .why-details3 {
              gap: var(--dl-space-space-unit);
            }
            .why-title4 {
              font-size: 24px;
              line-height: 28px;
            }
            .why-description3 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
          }
          @media (max-width: 490px) {
            .why-divide {
              width: 20px;
            }
            .why-text10 {
              font-size: 16px;
              line-height: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

Why.defaultProps = {
  text: undefined,
  description: undefined,
  title: undefined,
  title1: undefined,
  imageSrc: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  title2: undefined,
  imageAlt2: 'image',
  caption: undefined,
  description1: undefined,
  imageSrc2: '/images/why-3.svg',
  imageSrc1: '/images/why-2.svg',
  imageAlt1: 'image',
  title3: undefined,
  imageAlt: 'image',
  description2: undefined,
}

Why.propTypes = {
  text: PropTypes.element,
  description: PropTypes.element,
  title: PropTypes.element,
  title1: PropTypes.element,
  imageSrc: PropTypes.string,
  title2: PropTypes.element,
  imageAlt2: PropTypes.string,
  caption: PropTypes.element,
  description1: PropTypes.element,
  imageSrc2: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt1: PropTypes.string,
  title3: PropTypes.element,
  imageAlt: PropTypes.string,
  description2: PropTypes.element,
}

export default Why
