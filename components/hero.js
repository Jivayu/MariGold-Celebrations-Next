import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import HeroBrandWall from './hero-brand-wall'
import HeroPlaceholderImage1 from './hero-placeholder-image1'

const Hero = (props) => {
  return (
    <>
      <main id="hero" className={`hero-header77 ${props.rootClassName} `}>
        <div id="hero-11" className="hero-max-width thq-section-max-width">
          <HeroBrandWall
            heading1={
              <Fragment>
                <span className="hero-text1">
                  Banquet Hall &amp; Big Events Services in Hingna, Nagpur
                </span>
              </Fragment>
            }
            action1={
              <Fragment>
                <span className="hero-text2">Shop Now</span>
              </Fragment>
            }
            action2={
              <Fragment>
                <span className="hero-text3">Services</span>
              </Fragment>
            }
            action21={
              <Fragment>
                <span className="hero-text4">Explore Our Facilities</span>
              </Fragment>
            }
          ></HeroBrandWall>
          <div className="hero-content">
            <div className="hero-row1">
              <img
                id="Marigold Celebration Main Hall - 3"
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero-placeholder-image1 thq-img-ratio-1-1"
              />
              <div className="hero-placeholder-image2 thq-img-ratio-1-1"></div>
              <img
                id="Marigold Celebration Main Hall - 4"
                alt={props.image3Alt}
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/images/Marigold Images/hallpic-4-1400w.webp"
                srcSet="/images/Marigold Images//hallpic-4-1400w.webp 1200w, /images/Marigold Images/hallpic-4-tablet.webp 800w, /images/Marigold Images/hallpic-4-mobile.webp 480w"
                className="hero-placeholder-image3 thq-img-ratio-1-1"
              />
            </div>
            <div className="hero-row2">
              <img
                id="hero-1"
                alt={props.image5Alt1}
                src={props.image5Src1}
                className="hero-placeholder-image4 thq-img-ratio-1-1"
              />
              <HeroPlaceholderImage1></HeroPlaceholderImage1>
              <img
                id="hero-3"
                alt={props.image6Alt12}
                src={props.image6Src12}
                className="hero-placeholder-image5 thq-img-ratio-1-1"
              />
            </div>
            <div className="hero-row3">
              <img
                alt={props.image4Alt11}
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/images/Marigold Images/marigold11-1400w.webp"
                srcSet="/images/Marigold Images//marigold11-1400w.webp 1200w, /images/Marigold Images/marigold11-tablet.webp 800w, /images/Marigold Images/marigold11-mobile.webp 480w"
                className="hero-placeholder-image6 thq-img-ratio-1-1"
              />
              <img
                id="hero-4"
                alt={props.image5Alt11}
                src={props.image5Src11}
                className="hero-placeholder-image7 thq-img-ratio-1-1"
              />
              <img
                id="hero-5"
                alt={props.image6Alt11}
                src={props.image6Src11}
                className="hero-placeholder-image8 thq-img-ratio-1-1"
              />
              <img
                alt={props.image7Alt11}
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/images/Marigold Images/marigold11-1400w.webp"
                srcSet="/images/Marigold Images//marigold11-1400w.webp 1200w, /images/Marigold Images/marigold11-tablet.webp 800w, /images/Marigold Images/marigold11-mobile.webp 480w"
                className="hero-placeholder-image9 thq-img-ratio-1-1"
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
          .hero-text1 {
            display: inline-block;
          }
          .hero-text2 {
            display: inline-block;
          }
          .hero-text3 {
            display: inline-block;
          }
          .hero-text4 {
            display: inline-block;
          }
          .hero-content {
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
          .hero-placeholder-image1 {
            width: 360px;
            height: 360px;
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 2px;
            border-radius: 10px;
          }
          .hero-placeholder-image2 {
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
          .hero-placeholder-image2:hover {
            box-shadow: 3px 3px 20px 0px rgba(245, 184, 60, 0.67);
          }
          .hero-placeholder-image3 {
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
          .hero-placeholder-image4 {
            width: 360px;
            height: 360px;
            align-self: stretch;
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius10);
          }
          .hero-placeholder-image5 {
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
          .hero-placeholder-image6 {
            width: 360px;
            height: 360px;
            align-self: stretch;
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius10);
          }
          .hero-placeholder-image7 {
            width: 360px;
            height: 360px;
            align-self: stretch;
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius10);
          }
          .hero-placeholder-image8 {
            width: 360px;
            height: 360px;
            align-self: stretch;
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius10);
          }
          .hero-placeholder-image9 {
            width: 360px;
            height: 360px;
            align-self: stretch;
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius10);
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
            .hero-content {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .hero-content {
              padding: var(--dl-space-space-threeunits);
            }
            .hero-row1 {
              width: 100%;
              flex-direction: column;
            }
            .hero-placeholder-image1 {
              width: 100%;
            }
            .hero-placeholder-image2 {
              width: 100%;
            }
            .hero-placeholder-image3 {
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
            .hero-content {
              padding: var(--dl-space-space-halfunit);
            }
            .hero-row1 {
              gap: 4px;
              flex: 1;
            }
            .hero-placeholder-image1 {
              width: 360px;
            }
            .hero-placeholder-image2 {
              width: 360px;
            }
            .hero-placeholder-image3 {
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
            .hero-content {
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
            .hero-content {
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
  rootClassName: '',
  image1Src: '/images/Marigold Images/hallpic-4-1400w.webp',
  image5Src11: '/images/Marigold Images/hallpic-1-1400w.webp',
  image6Alt12: 'Image of our customer support team',
  image6Src12: '/images/Marigold Images/hallpic-4-1400w.webp',
  image3Alt: 'Image representing customer satisfaction',
  image5Alt1: 'Image highlighting our top-rated products',
  image5Src1: '/images/Marigold Images/hallpic-4-1400w.webp',
  image6Alt11: 'Image of our customer support team',
  image4Alt11: 'Image showing our latest offers',
  image1Alt: 'Image showcasing our products',
  image7Alt11: 'Image displaying our company values',
  image6Src11: '/images/Marigold Images/hallpic-5-1400w.webp',
  image5Alt11: 'Image highlighting our top-rated products',
}

Hero.propTypes = {
  rootClassName: PropTypes.string,
  image1Src: PropTypes.string,
  image5Src11: PropTypes.string,
  image6Alt12: PropTypes.string,
  image6Src12: PropTypes.string,
  image3Alt: PropTypes.string,
  image5Alt1: PropTypes.string,
  image5Src1: PropTypes.string,
  image6Alt11: PropTypes.string,
  image4Alt11: PropTypes.string,
  image1Alt: PropTypes.string,
  image7Alt11: PropTypes.string,
  image6Src11: PropTypes.string,
  image5Alt11: PropTypes.string,
}

export default Hero
