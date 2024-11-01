import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Hero = (props) => {
  return (
    <>
      <main id="hero" className={`hero-header77 ${props.rootClassName} `}>
        <div id="hero-11" className="hero-max-width thq-section-max-width">
          <div className="hero-column thq-section-padding">
            <img
              id="Brand Logo Marigold Celebration"
              alt={props.imageAlt}
              src={props.imageSrc}
              className="hero-image"
            />
            <div className="hero-content1">
              <h1
                id="Banquet Hall &amp; Big Events Services in Hingna, Nagpur"
                className="hero-text1 Ubuntu-Light-18"
              >
                {props.heading1 ?? (
                  <Fragment>
                    <span className="hero-text7">
                      Banquet Hall &amp; Big Events Services in Hingna, Nagpur
                    </span>
                  </Fragment>
                )}
              </h1>
              <p id="Brandline" className="hero-text2 Ubuntu-Regular-14">
                &quot;Celebrate Life’s Special Moments at Marigold Banquet Hall.
                Perfect Weddings, Grand Events, and unforgettable Memories await
                in our Elegant, Spacious Venue.&quot;
              </p>
              <div className="hero-actions1">
                <button className="hero-button1 thq-button-filled">
                  <span className="thq-body-small">
                    {props.action1 ?? (
                      <Fragment>
                        <span className="hero-text6">Shop Now</span>
                      </Fragment>
                    )}
                  </span>
                </button>
                <button className="hero-button2 thq-button-outline menu">
                  <span className="hero-text4">
                    {props.action2 ?? (
                      <Fragment>
                        <span className="hero-text8">Services</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="hero-actions2 thq-flex-row">
                <button className="hero-button3 menu">
                  <Link href="/facilities-at-marigold-celebration">
                    <a className="hero-link thq-button-outline">
                      {props.action21 ?? (
                        <Fragment>
                          <span className="hero-text9">
                            Explore Our Facilities
                          </span>
                        </Fragment>
                      )}
                    </a>
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-content2">
            <div className="hero-row1">
              <img
                id="Marigold Celebration Main Hall - 3"
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero-placeholder-image10 thq-img-ratio-1-1"
              />
              <div className="hero-placeholder-image11 thq-img-ratio-1-1"></div>
              <img
                id="Marigold Celebration Main Hall - 4"
                alt={props.image3Alt}
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/images/Marigold Images/hallpic-4-1400w.webp"
                srcSet="/images/Marigold Images//hallpic-4-1400w.webp 1200w, /images/Marigold Images/hallpic-4-tablet.webp 800w, /images/Marigold Images/hallpic-4-mobile.webp 480w"
                className="hero-placeholder-image12 thq-img-ratio-1-1"
              />
            </div>
            <div className="hero-row2">
              <img
                id="hero-1"
                alt={props.image5Alt1}
                src={props.image5Src1}
                className="hero-placeholder-image13 thq-img-ratio-1-1"
              />
              <img
                id="hero-2"
                alt={props.image6Alt1}
                src={props.image6Src1}
                className="hero-placeholder-image14 thq-img-ratio-1-1"
              />
              <img
                id="hero-3"
                alt={props.image6Alt12}
                src={props.image6Src12}
                className="hero-placeholder-image15 thq-img-ratio-1-1"
              />
            </div>
            <div className="hero-row3">
              <img
                alt={props.image4Alt11}
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/images/Marigold Images/marigold11-1400w.webp"
                srcSet="/images/Marigold Images//marigold11-1400w.webp 1200w, /images/Marigold Images/marigold11-tablet.webp 800w, /images/Marigold Images/marigold11-mobile.webp 480w"
                className="hero-placeholder-image16 thq-img-ratio-1-1"
              />
              <img
                id="hero-4"
                alt={props.image5Alt11}
                src={props.image5Src11}
                className="hero-placeholder-image17 thq-img-ratio-1-1"
              />
              <img
                id="hero-5"
                alt={props.image6Alt11}
                src={props.image6Src11}
                className="hero-placeholder-image18 thq-img-ratio-1-1"
              />
              <img
                alt={props.image7Alt11}
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/images/Marigold Images/marigold11-1400w.webp"
                srcSet="/images/Marigold Images//marigold11-1400w.webp 1200w, /images/Marigold Images/marigold11-tablet.webp 800w, /images/Marigold Images/marigold11-mobile.webp 480w"
                className="hero-placeholder-image19 thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div>
      </main>
      <style jsx>
        {`
          .hero-header77 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            margin-top: 66px;
            align-items: center;
            flex-shrink: 0;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: center;
          }
          .hero-max-width {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .hero-column {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 40%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-primary-logo-color-1);
            border-style: dotted;
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
            background-size: auto, contain, contain;
            justify-content: center;
            background-image: url('/images/marigold-brand-name%20-%20copy11-1400w.webp');
            background-repeat: bottom;
            background-position: center, bottom, top lefttop;
          }
          .hero-image {
            width: 200px;
            transform: scale(0.95);
            object-fit: cover;
            transition: 0.3s;
          }
          .hero-image:hover {
            transform: scale(1);
          }
          .hero-content1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .hero-text1 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            text-align: center;
          }
          .hero-text2 {
            color: var(--dl-color-primary-logo-color-2);
            font-style: normal;
            text-align: center;
          }
          .hero-actions1 {
            gap: var(--dl-space-space-unit);
            width: 55%;
            display: flex;
            flex-wrap: wrap;
            align-self: center;
            align-items: flex-start;
          }
          .hero-button1 {
            flex: 1;
            display: none;
          }
          .hero-button2 {
            flex: 1;
            display: none;
            transform: scale(0.96);
            transition: 0.3s;
            padding-top: var(--dl-space-space-halfunit);
            border-color: #380fe1;
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-buttonradius);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(245, 184, 60, 0.1);
          }
          .hero-button2:hover {
            transform: scale(1);
            box-shadow: 3px 3px 25px 1px rgba(15, 0, 255, 0.25);
            background-color: rgba(71, 60, 245, 0.21);
          }
          .hero-text4 {
            color: var(--dl-color-primary-logo-color-2);
            font-size: 14px;
            transform: scale(0.96);
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 400;
            line-height: 1.6;
            text-transform: capitalize;
            text-decoration: none;
          }
          .hero-text4:hover {
            transform: scale(1);
          }
          .hero-actions2 {
            padding: var(--dl-space-space-unit);
            position: relative;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .hero-button3 {
            fill: transparent;
            flex: 1;
            color: transparent;
            transform: scale(0.99);
            border-width: 0px;
          }
          .hero-link {
            fill: var(--dl-color-primary-logo-color-2);
            color: var(--dl-color-primary-logo-color-2);
            font-size: 14px;
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
          .hero-link:hover {
            transform: scale(1);
            box-shadow: 3px 3px 25px 1px rgba(50, 0, 255, 0.41);
            border-style: dotted;
            border-width: 0.5px;
            background-color: rgba(13, 7, 247, 0.2);
          }
          .hero-content2 {
            gap: var(--dl-space-space-halfunit);
            width: 60%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero-row1 {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: auto;
            display: none;
            align-items: flex-start;
            justify-content: center;
          }
          .hero-placeholder-image10 {
            width: 360px;
            height: 360px;
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 2px;
            border-radius: 10px;
          }
          .hero-placeholder-image11 {
            width: 360px;
            height: 360px;
            display: flex;
            padding: var(--dl-space-space-twounits);
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-primary-logo-color-1);
            border-style: dotted;
            border-width: 2px;
            padding-left: var(--dl-space-space-unit);
            border-radius: 10px;
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            background-size: cover;
            background-image: url('/images/Marigold Images/marigold11-1400w.webp');
            background-position: center;
          }
          .hero-placeholder-image11:hover {
            box-shadow: 3px 3px 20px 0px rgba(245, 184, 60, 0.67);
          }
          .hero-placeholder-image12 {
            width: 360px;
            height: 360px;
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 2px;
            border-radius: 10px;
          }
          .hero-row2 {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .hero-placeholder-image13 {
            width: 360px;
            height: 360px;
            align-self: stretch;
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius10);
          }
          .hero-placeholder-image14 {
            width: 360px;
            height: 360px;
            align-self: stretch;
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius10);
          }
          .hero-placeholder-image15 {
            width: 360px;
            height: 360px;
            align-self: stretch;
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius10);
          }
          .hero-row3 {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .hero-placeholder-image16 {
            width: 360px;
            height: 360px;
            align-self: stretch;
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius10);
          }
          .hero-placeholder-image17 {
            width: 360px;
            height: 360px;
            align-self: stretch;
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius10);
          }
          .hero-placeholder-image18 {
            width: 360px;
            height: 360px;
            align-self: stretch;
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius10);
          }
          .hero-placeholder-image19 {
            width: 360px;
            height: 360px;
            align-self: stretch;
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius10);
          }
          .hero-text6 {
            display: inline-block;
          }
          .hero-text7 {
            display: inline-block;
          }
          .hero-text8 {
            display: inline-block;
          }
          .hero-text9 {
            display: inline-block;
          }

          @media (max-width: 1200px) {
            .hero-row1 {
              flex: 0 0 auto;
            }
          }
          @media (max-width: 991px) {
            .hero-header77 {
              flex-direction: column;
            }
            .hero-max-width {
              flex-direction: column;
            }
            .hero-column {
              gap: var(--dl-space-space-unit);
              width: 100%;
            }
            .hero-content1 {
              align-items: center;
            }
            .hero-actions1 {
              width: 35%;
            }
            .hero-content2 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .hero-actions1 {
              width: 100%;
              justify-content: center;
            }
            .hero-content2 {
              padding: var(--dl-space-space-threeunits);
            }
            .hero-row1 {
              width: 100%;
              flex-direction: column;
            }
            .hero-placeholder-image10 {
              width: 100%;
            }
            .hero-placeholder-image11 {
              width: 100%;
            }
            .hero-placeholder-image12 {
              width: 100%;
            }
            .hero-row2 {
              width: 100%;
              display: none;
            }
            .hero-row3 {
              width: 100%;
              display: none;
            }
          }
          @media (max-width: 599px) {
            .hero-header77 {
              margin-top: 80px;
            }
            .hero-column {
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .hero-content2 {
              padding: var(--dl-space-space-halfunit);
            }
            .hero-row1 {
              gap: 4px;
              flex: 1;
            }
            .hero-placeholder-image10 {
              width: 360px;
            }
            .hero-placeholder-image11 {
              width: 360px;
            }
            .hero-placeholder-image12 {
              width: 360px;
            }
            .hero-row2 {
              gap: 5px;
              display: flex;
            }
            .hero-row3 {
              gap: 5px;
              display: flex;
            }
            .heroroot-class-name {
              margin-top: var(--dl-space-space-sixunits);
            }
          }
          @media (max-width: 479px) {
            .hero-column {
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .hero-actions1 {
              flex-direction: column;
            }
            .hero-button1 {
              width: 100%;
            }
            .hero-actions2 {
              width: 100%;
              flex-wrap: wrap;
              margin-top: var(--dl-space-space-unit);
            }
            .hero-content2 {
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 399px) {
            .hero-header77 {
              gap: var(--dl-space-space-halfunit);
              margin-top: 85px;
            }
            .hero-column {
              padding: var(--dl-space-space-unit);
            }
            .hero-content2 {
              padding: var(--dl-space-space-unit);
            }
            .hero-row2 {
              gap: auto;
            }
            .hero-row3 {
              gap: auto;
            }
            .heroroot-class-name {
              margin-top: 100px;
            }
          }
        `}
      </style>
    </>
  )
}

Hero.defaultProps = {
  action1: undefined,
  imageAlt: 'image',
  heading1: undefined,
  rootClassName: '',
  image1Src: '/images/Marigold Images/hallpic-4-1400w.webp',
  image5Src11: '/images/Marigold Images/hallpic-1-1400w.webp',
  action2: undefined,
  image6Alt12: 'Image of our customer support team',
  image6Src12: '/images/Marigold Images/hallpic-4-1400w.webp',
  image3Alt: 'Image representing customer satisfaction',
  image5Alt1: 'Image highlighting our top-rated products',
  image5Src1: '/images/Marigold Images/hallpic-4-1400w.webp',
  image6Alt11: 'Image of our customer support team',
  image6Src1: '/images/Marigold Images/marigold11-1400w.webp',
  image4Alt11: 'Image showing our latest offers',
  image6Alt1: 'Image of our customer support team',
  image1Alt: 'Image showcasing our products',
  image7Alt11: 'Image displaying our company values',
  action21: undefined,
  imageSrc: '/images/marigold-logo1.svg',
  image6Src11: '/images/Marigold Images/hallpic-5-1400w.webp',
  image5Alt11: 'Image highlighting our top-rated products',
}

Hero.propTypes = {
  action1: PropTypes.element,
  imageAlt: PropTypes.string,
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
  image1Src: PropTypes.string,
  image5Src11: PropTypes.string,
  action2: PropTypes.element,
  image6Alt12: PropTypes.string,
  image6Src12: PropTypes.string,
  image3Alt: PropTypes.string,
  image5Alt1: PropTypes.string,
  image5Src1: PropTypes.string,
  image6Alt11: PropTypes.string,
  image6Src1: PropTypes.string,
  image4Alt11: PropTypes.string,
  image6Alt1: PropTypes.string,
  image1Alt: PropTypes.string,
  image7Alt11: PropTypes.string,
  action21: PropTypes.element,
  imageSrc: PropTypes.string,
  image6Src11: PropTypes.string,
  image5Alt11: PropTypes.string,
}

export default Hero
