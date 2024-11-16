import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Sponsors = (props) => {
  return (
    <>
      <section className="sponsors-sponsors">
        <div className="sponsors-header">
          <div className="sponsors-section-numeral">
            <div className="sponsors-divide"></div>
            <p className="sponsors-text1">
              {props.text ?? (
                <Fragment>
                  <span className="sponsors-text4">03</span>
                </Fragment>
              )}
            </p>
          </div>
          <div data-aos="fade-right" className="sponsors-heading">
            <h2 className="sponsors-title">
              {props.title ?? (
                <Fragment>
                  <span className="sponsors-text3">Sponsors</span>
                </Fragment>
              )}
            </h2>
            <p className="sponsors-caption">
              {props.caption ?? (
                <Fragment>
                  <span className="sponsors-text2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="sponsors-brands">
          <div className="sponsors-brand1 brand">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="sponsors-image1"
            />
          </div>
          <div className="sponsors-brand2 brand">
            <img
              alt={props.imageAlt1}
              src={props.imageSrc1}
              className="sponsors-image2"
            />
          </div>
          <div className="sponsors-brand3 brand">
            <img
              alt={props.imageAlt2}
              src={props.imageSrc2}
              className="sponsors-image3"
            />
          </div>
          <div className="sponsors-brand4 brand">
            <img
              alt={props.imageAlt3}
              src={props.imageSrc3}
              className="sponsors-image4"
            />
          </div>
          <div className="sponsors-brand5 brand">
            <img
              alt={props.imageAlt4}
              src={props.imageSrc4}
              className="sponsors-image5"
            />
          </div>
          <div className="sponsors-brand6 brand">
            <img
              alt={props.imageAlt5}
              src={props.imageSrc5}
              className="sponsors-image6"
            />
          </div>
          <div className="sponsors-brand7 brand">
            <img
              alt={props.imageAlt6}
              src={props.imageSrc6}
              className="sponsors-image7"
            />
          </div>
          <div className="sponsors-brand8 brand">
            <img
              alt={props.imageAlt7}
              src={props.imageSrc7}
              className="sponsors-image8"
            />
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .sponsors-sponsors {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .sponsors-header {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .sponsors-section-numeral {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .sponsors-divide {
            width: 100px;
            height: 1px;
            display: flex;
            margin-top: 4px;
            align-items: center;
            flex-direction: row;
            background-color: #000000;
          }
          .sponsors-heading {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sponsors-title {
            font-size: 90px;
            font-style: normal;
            font-weight: 600;
            line-height: 100px;
          }
          .sponsors-caption {
            font-size: 18px;
            line-height: 27px;
          }
          .sponsors-brands {
            width: 100%;
            display: grid;
            align-items: flex-start;
            flex-direction: column;
            grid-template-rows: repeat(2, 1fr);
            grid-template-columns: repeat(4, 1fr);
          }
          .sponsors-brand1 {
            border-radius: var(--dl-radius-radius-radius10);
          }
          .sponsors-image1 {
            object-fit: cover;
          }
          .sponsors-brand2 {
            border-radius: var(--dl-radius-radius-radius10);
          }
          .sponsors-image2 {
            object-fit: cover;
          }
          .sponsors-brand3 {
            border-radius: var(--dl-radius-radius-radius10);
          }
          .sponsors-image3 {
            object-fit: cover;
          }
          .sponsors-brand4 {
            border-radius: var(--dl-radius-radius-radius10);
            border-right-width: 0px;
          }
          .sponsors-image4 {
            object-fit: cover;
          }
          .sponsors-brand5 {
            border-radius: var(--dl-radius-radius-radius10);
            border-top-width: 1px;
          }
          .sponsors-image5 {
            object-fit: cover;
          }
          .sponsors-brand6 {
            border-radius: var(--dl-radius-radius-radius10);
            border-top-width: 1px;
          }
          .sponsors-image6 {
            object-fit: cover;
          }
          .sponsors-brand7 {
            border-radius: var(--dl-radius-radius-radius10);
            border-top-width: 1px;
          }
          .sponsors-image7 {
            object-fit: cover;
          }
          .sponsors-brand8 {
            border-radius: var(--dl-radius-radius-radius10);
            border-top-width: 1px;
            border-right-width: 0px;
          }
          .sponsors-image8 {
            object-fit: cover;
          }
          .sponsors-text2 {
            display: inline-block;
          }
          .sponsors-text3 {
            display: inline-block;
          }
          .sponsors-text4 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .sponsors-brands {
              grid-template-rows: repeat(4, 1fr);
              grid-template-columns: repeat(2, 1fr);
            }
            .sponsors-brand2 {
              border-right-width: 0px;
            }
            .sponsors-brand3 {
              border-top-width: 1px;
            }
            .sponsors-brand4 {
              border-top-width: 1px;
            }
            .sponsors-brand6 {
              border-right-width: 0px;
            }
          }
          @media (max-width: 599px) {
            .sponsors-sponsors {
              gap: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .sponsors-divide {
              width: 50px;
            }
            .sponsors-heading {
              gap: var(--dl-space-space-unit);
            }
            .sponsors-title {
              font-size: 30px;
              line-height: 33px;
            }
            .sponsors-caption {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
          }
          @media (max-width: 480px) {
            .sponsors-divide {
              width: 20px;
            }
            .sponsors-text1 {
              font-size: 16px;
              line-height: 24px;
            }
            .sponsors-image1 {
              width: 75%;
            }
            .sponsors-image2 {
              width: 75%;
            }
            .sponsors-image3 {
              width: 75%;
            }
            .sponsors-image4 {
              width: 75%;
            }
            .sponsors-image5 {
              width: 75%;
            }
            .sponsors-image6 {
              width: 75%;
            }
            .sponsors-image7 {
              width: 75%;
            }
            .sponsors-image8 {
              width: 75%;
            }
          }
        `}
      </style>
    </>
  )
}

Sponsors.defaultProps = {
  imageAlt4: 'image',
  imageSrc: '/images/brand-1.svg',
  imageAlt: 'image',
  imageSrc2: '/images/brand-3.svg',
  imageAlt2: 'image',
  imageAlt1: 'image',
  caption: undefined,
  imageAlt5: 'image',
  imageSrc5: '/images/brand-6.svg',
  title: undefined,
  imageAlt6: 'image',
  imageSrc7: '/images/brand-8.svg',
  imageSrc4: '/images/brand-5.svg',
  imageAlt3: 'image',
  imageAlt7: 'image',
  text: undefined,
  imageSrc6: '/images/brand-7.svg',
  imageSrc1: '/images/brand-2.svg',
  imageSrc3: '/images/brand-4.svg',
}

Sponsors.propTypes = {
  imageAlt4: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageAlt1: PropTypes.string,
  caption: PropTypes.element,
  imageAlt5: PropTypes.string,
  imageSrc5: PropTypes.string,
  title: PropTypes.element,
  imageAlt6: PropTypes.string,
  imageSrc7: PropTypes.string,
  imageSrc4: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageAlt7: PropTypes.string,
  text: PropTypes.element,
  imageSrc6: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageSrc3: PropTypes.string,
}

export default Sponsors
