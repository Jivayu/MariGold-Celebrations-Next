import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import HeroPlaceholderImage4 from './hero-placeholder-image4'
import HeroPlaceholderImage1 from './hero-placeholder-image1'
import HeroPlaceholderImage5 from './hero-placeholder-image5'
import HeroPlaceholderImage6 from './hero-placeholder-image6'
import HeroPlaceholderImage2 from './hero-placeholder-image2'
import HeroPlaceholderImage3 from './hero-placeholder-image3'
import HeroPlaceholderImage7 from './hero-placeholder-image7'

const Hero1 = (props) => {
  return (
    <>
      <main id="hero" className={`hero1-header77 ${props.rootClassName} `}>
        <div
          data-thq="slider"
          data-loop="false"
          data-autoplay="true"
          data-navigation="true"
          data-pagination="true"
          data-autoplay-delay="2000"
          className="hero1-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="hero1-slider-slide1 swiper-slide"
            >
              <div className="hero1-container1">
                <h1
                  id="Banquet Hall &amp; Big Events Services in Hingna, Nagpur"
                  className="hero1-text1"
                >
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="hero1-text6">
                        Banquet Hall &amp; Big Events Services in Hingna, Nagpur
                      </span>
                    </Fragment>
                  )}
                </h1>
                <animate-on-reveal
                  animation="fadeIn"
                  duration="2000ms"
                  delay="100ms"
                  direction="normal"
                  easing="ease"
                  iteration="1"
                >
                  <p
                    id="Brandline"
                    data-thq-animate-on-reveal="true"
                    className="hero1-text2 UbuntuLight-14"
                  >
                    &quot;Celebrate Life’s Special Moments at Marigold Banquet
                    Hall. Perfect Weddings, Grand Events, and unforgettable
                    Memories await in our Elegant, Spacious Venue.&quot;
                  </p>
                </animate-on-reveal>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="hero1-slider-slide2 swiper-slide"
            >
              <div className="hero1-container2">
                <h1
                  id="Banquet Hall &amp; Big Events Services in Hingna, Nagpur"
                  className="hero1-text3"
                >
                  {props.heading11 ?? (
                    <Fragment>
                      <span className="hero1-text5">
                        Banquet Hall &amp; Big Events Services in Hingna, Nagpur
                      </span>
                    </Fragment>
                  )}
                </h1>
                <animate-on-reveal
                  animation="fadeIn"
                  duration="2000ms"
                  delay="100ms"
                  direction="normal"
                  easing="ease"
                  iteration="1"
                >
                  <p
                    id="Brandline"
                    data-thq-animate-on-reveal="true"
                    className="hero1-text4 UbuntuLight-14"
                  >
                    &quot;Celebrate Life’s Special Moments at Marigold Banquet
                    Hall. Perfect Weddings, Grand Events, and unforgettable
                    Memories await in our Elegant, Spacious Venue.&quot;
                  </p>
                </animate-on-reveal>
              </div>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="hero1-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
        <div className="hero1-content">
          <div className="hero1-row1">
            <img
              id="Marigold Celebration Main Hall - 3"
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero1-placeholder-image1 thq-img-ratio-1-1"
            />
            <div className="hero1-placeholder-image2 thq-img-ratio-1-1"></div>
            <img
              id="Marigold Celebration Main Hall - 4"
              alt={props.image3Alt}
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/images/Marigold Images/hallpic-4-1500w.webp"
              srcSet="/images/Marigold Images//hallpic-4-1500w.webp 1200w, /images/Marigold Images/hallpic-4-tablet.webp 800w, /images/Marigold Images/hallpic-4-mobile.webp 480w"
              className="hero1-placeholder-image3 thq-img-ratio-1-1"
            />
          </div>
          <div className="hero1-row2">
            <HeroPlaceholderImage4></HeroPlaceholderImage4>
            <HeroPlaceholderImage1></HeroPlaceholderImage1>
            <HeroPlaceholderImage5></HeroPlaceholderImage5>
          </div>
          <div className="hero1-row3">
            <HeroPlaceholderImage6></HeroPlaceholderImage6>
            <HeroPlaceholderImage2></HeroPlaceholderImage2>
            <HeroPlaceholderImage3></HeroPlaceholderImage3>
            <HeroPlaceholderImage7></HeroPlaceholderImage7>
          </div>
        </div>
      </main>
      <style jsx>
        {`
          .hero1-header77 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            margin-top: var(--dl-space-space-fourunits);
            min-height: 720px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: row;
            justify-content: center;
          }
          .hero1-slider {
            width: 40%;
            height: 710px;
            display: inline-block;
            border-radius: var(--dl-radius-radius-radius10);
          }
          .hero1-slider-slide1 {
            display: flex;
            background-size: cover;
            background-image: url('/images/Marigold Images/banquet%20hall%20-final%20%20day%20view-hero-1stpart-1500w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .hero1-container1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: flex-end;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius10);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            background-color: rgba(0, 0, 0, 0.5);
          }
          .hero1-text1 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-buttonradius);
            padding-right: var(--dl-space-space-halfunit);
            text-transform: none;
            backdrop-filter: blur(4px);
            text-decoration: none;
          }
          .hero1-text2 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-style: normal;
            text-align: center;
            border-radius: var(--dl-radius-radius-radius10);
            backdrop-filter: blur(4px);
          }
          .hero1-slider-slide2 {
            display: flex;
            background-size: cover;
            background-image: url('/images/Marigold Images/banquet%20hall%20-final%20%20day%20view-hero-2ndpart-1500w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .hero1-container2 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: flex-end;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius10);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            background-color: rgba(0, 0, 0, 0.5);
          }
          .hero1-text3 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-buttonradius);
            padding-right: var(--dl-space-space-halfunit);
            text-transform: none;
            backdrop-filter: blur(4px);
            text-decoration: none;
          }
          .hero1-text4 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-style: normal;
            text-align: center;
            border-radius: var(--dl-radius-radius-radius10);
            backdrop-filter: blur(4px);
          }
          .hero1-slider-pagination {
            display: block;
          }
          .hero1-content {
            gap: 4px;
            width: 60%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: center;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .hero1-row1 {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: auto;
            display: none;
            align-items: flex-start;
            justify-content: center;
          }
          .hero1-placeholder-image1 {
            width: 360px;
            height: 360px;
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 2px;
            border-radius: 10px;
          }
          .hero1-placeholder-image2 {
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
            background-image: url('/images/Marigold Images/marigold11-1500w.webp');
            background-position: center;
          }
          .hero1-placeholder-image2:hover {
            box-shadow: 3px 3px 20px 0px rgba(245, 184, 60, 0.67);
          }
          .hero1-placeholder-image3 {
            width: 360px;
            height: 360px;
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 2px;
            border-radius: 10px;
          }
          .hero1-row2 {
            gap: 4px;
            width: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .hero1-row3 {
            gap: var(--dl-space-space-halfunit);
            width: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .hero1-text5 {
            display: inline-block;
          }
          .hero1-text6 {
            display: inline-block;
          }

          @media (max-width: 1200px) {
            .hero1-row1 {
              flex: 0 0 auto;
            }
          }
          @media (max-width: 991px) {
            .hero1-header77 {
              flex-direction: column;
            }
            .hero1-slider {
              width: 100%;
            }
            .hero1-slider-slide2 {
              background-size: cover;
              background-position: center;
            }
            .hero1-content {
              width: 100%;
              min-height: 550px;
            }
            .hero1-row2 {
              flex: 0 0 auto;
            }
          }
          @media (max-width: 767px) {
            .hero1-content {
              padding: var(--dl-space-space-threeunits);
            }
            .hero1-row1 {
              width: 100%;
              flex-direction: column;
            }
            .hero1-placeholder-image1 {
              width: 100%;
            }
            .hero1-placeholder-image2 {
              width: 100%;
            }
            .hero1-placeholder-image3 {
              width: 100%;
            }
            .hero1-row2 {
              width: 100%;
              display: none;
            }
            .hero1-row3 {
              width: 100%;
              display: none;
            }
          }
          @media (max-width: 599px) {
            .hero1-text1 {
              font-size: 14px;
              font-family: Ubuntu;
            }
            .hero1-slider-slide2 {
              background-position: top;
            }
            .hero1-text3 {
              font-size: 14px;
              font-family: Ubuntu;
            }
            .hero1-content {
              padding: 0px;
            }
            .hero1-row1 {
              gap: 4px;
              flex: 1;
            }
            .hero1-placeholder-image1 {
              width: 360px;
            }
            .hero1-placeholder-image2 {
              width: 360px;
            }
            .hero1-placeholder-image3 {
              width: 360px;
            }
            .hero1-row2 {
              gap: 5px;
              flex: 0 0 auto;
              display: flex;
            }
            .hero1-row3 {
              gap: 5px;
              display: flex;
            }
            .hero1root-class-name {
              margin-top: var(--dl-space-space-fiveunits);
            }
          }
          @media (max-width: 490px) {
            .hero1-content {
              padding: 0px;
            }
            .hero1-row2 {
              gap: auto;
            }
            .hero1-row3 {
              gap: auto;
            }
            .hero1root-class-name {
              margin-top: 65px;
            }
          }
          @media (max-width: 479px) {
            .hero1-content {
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Hero1.defaultProps = {
  rootClassName: '',
  heading11: undefined,
  image1Src: '/images/Marigold Images/hallpic-4-1500w.webp',
  heading1: undefined,
  image3Alt: 'Image representing customer satisfaction',
  image1Alt: 'Image showcasing our products',
}

Hero1.propTypes = {
  rootClassName: PropTypes.string,
  heading11: PropTypes.element,
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
  image3Alt: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default Hero1
