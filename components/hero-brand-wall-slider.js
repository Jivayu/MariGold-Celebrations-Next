import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import BrandLogo from './brand-logo'

const HeroBrandWallSlider = (props) => {
  return (
    <>
      <div
        className={`hero-brand-wall-slider-column thq-section-padding ${props.rootClassName} `}
      >
        <BrandLogo rootClassName="brand-logoroot-class-name8"></BrandLogo>
        <div className="hero-brand-wall-slider-content">
          <div className="hero-brand-wall-slider-container1">
            <h1
              id="Banquet Hall &amp; Big Events Services in Hingna, Nagpur"
              className="hero-brand-wall-slider-text10"
            >
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero-brand-wall-slider-text20">
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
                className="hero-brand-wall-slider-text11 UbuntuLight-14"
              >
                &quot;Celebrate Life’s Special Moments at Marigold Banquet Hall.
                Perfect Weddings, Grand Events, and unforgettable Memories await
                in our Elegant, Spacious Venue.&quot;
              </p>
            </animate-on-reveal>
          </div>
          <div className="hero-brand-wall-slider-actions1">
            <button className="hero-brand-wall-slider-button1 thq-button-filled">
              <span className="thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="hero-brand-wall-slider-text18">
                      Shop Now
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="hero-brand-wall-slider-button2 thq-button-outline menu">
              <span className="hero-brand-wall-slider-text13">
                {props.action2 ?? (
                  <Fragment>
                    <span className="hero-brand-wall-slider-text17">
                      Services
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
          <div className="hero-brand-wall-slider-actions2 thq-flex-row">
            <button className="hero-brand-wall-slider-button3 menu">
              <Link href="/facilities-at-marigold-celebration">
                <a className="hero-brand-wall-slider-link1 thq-button-outline">
                  {props.action21 ?? (
                    <Fragment>
                      <span className="hero-brand-wall-slider-text16">
                        Explore Our Facilities
                      </span>
                    </Fragment>
                  )}
                </a>
              </Link>
            </button>
          </div>
          <Link href="/facilities-at-marigold-celebration">
            <a>
              <div className="hero-brand-wall-slider-container2">
                <span className="hero-brand-wall-slider-text15">
                  {props.text21011 ?? (
                    <Fragment>
                      <span className="hero-brand-wall-slider-text19">
                        Explore Facilities
                      </span>
                    </Fragment>
                  )}
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 48 48"
                  className="hero-brand-wall-slider-icon1"
                >
                  <path
                    d="M28 6h14v14m0 9.474V39a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h9m7.8 16.2L41.1 6.9"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </a>
          </Link>
        </div>
        <div
          data-thq="slider"
          data-autoplay="true"
          data-navigation="true"
          data-pagination="true"
          data-pause-autoplay-on-mouse-enter="true"
          className="hero-brand-wall-slider-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="hero-brand-wall-slider-slider-slide1 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="hero-brand-wall-slider-slider-slide2 swiper-slide"
            ></div>
          </div>
          <div
            data-thq="slider-pagination"
            className="hero-brand-wall-slider-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
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
      </div>
      <style jsx>
        {`
          .hero-brand-wall-slider-column {
            width: 40%;
            display: flex;
            padding: 0px;
            position: relative;
            align-self: stretch;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
            justify-content: flex-end;
          }
          .hero-brand-wall-slider-content {
            gap: var(--dl-space-space-halfunit);
            display: none;
            align-items: center;
            flex-direction: column;
          }
          .hero-brand-wall-slider-container1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
          }
          .hero-brand-wall-slider-text10 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-buttonradius);
            padding-right: var(--dl-space-space-halfunit);
            text-transform: none;
            backdrop-filter: blur(3px);
            text-decoration: none;
            background-color: rgba(0, 0, 0, 0.5);
          }
          .hero-brand-wall-slider-text11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-style: normal;
            text-align: center;
            border-radius: var(--dl-radius-radius-radius10);
            backdrop-filter: blur(3px);
            background-color: rgba(0, 0, 0, 0.22);
          }
          .hero-brand-wall-slider-actions1 {
            gap: var(--dl-space-space-unit);
            width: 55%;
            display: flex;
            flex-wrap: wrap;
            align-self: center;
            align-items: flex-start;
          }
          .hero-brand-wall-slider-button1 {
            flex: 1;
            display: none;
          }
          .hero-brand-wall-slider-button2 {
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
          .hero-brand-wall-slider-button2:hover {
            transform: scale(1);
            box-shadow: 3px 3px 25px 1px rgba(15, 0, 255, 0.25);
            background-color: rgba(71, 60, 245, 0.21);
          }
          .hero-brand-wall-slider-text13 {
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
          .hero-brand-wall-slider-text13:hover {
            transform: scale(1);
          }
          .hero-brand-wall-slider-actions2 {
            display: none;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .hero-brand-wall-slider-button3 {
            fill: transparent;
            flex: 1;
            color: transparent;
            transform: scale(0.99);
            border-width: 0px;
          }
          .hero-brand-wall-slider-link1 {
            fill: var(--dl-color-primary-logo-color-2);
            color: var(--dl-color-primary-logo-color-2);
            font-size: 14px;
            transform: scale(0.97);
            font-style: normal;
            text-align: center;
            transition: 0.5;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.6;
            border-color: #380fe1;
            border-style: dotted;
            border-width: 0.5px;
            text-transform: capitalize;
            text-decoration: none;
            background-color: rgba(245, 184, 60, 0.1);
          }
          .hero-brand-wall-slider-link1:hover {
            transform: scale(1);
            box-shadow: 3px 3px 25px 1px rgba(50, 0, 255, 0.41);
            border-style: dotted;
            border-width: 0.5px;
            background-color: rgba(13, 7, 247, 0.2);
          }
          .hero-brand-wall-slider-container2 {
            gap: var(--dl-space-space-halfunit);
            width: auto;
            display: flex;
            align-self: center;
            box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.4);
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(0, 0, 0, 0.87);
            border-width: 0.5px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-cardradius);
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            backdrop-filter: blur(3px);
            justify-content: center;
            text-decoration: none;
            background-color: rgba(2, 2, 2, 0.48);
          }
          .hero-brand-wall-slider-container2:hover {
            box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.48);
            border-color: var(--dl-color-primary-logo-color-1);
          }
          .hero-brand-wall-slider-text15 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 12px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 200;
            line-height: 1.8;
          }
          .hero-brand-wall-slider-icon1 {
            fill: #00ff38;
            color: #00ff38;
          }
          .hero-brand-wall-slider-slider {
            width: 100%;
            height: 100%;
            display: inline-block;
          }
          .hero-brand-wall-slider-slider-slide1 {
            display: flex;
            background-size: cover;
            background-image: url('/images/Marigold Images/banquet%20hall%20-final%20%20day%20view-hero-1stpart-1500w.webp');
            background-repeat: no-repeat;
            background-position: center;
          }
          .hero-brand-wall-slider-slider-slide2 {
            display: flex;
            background-size: cover;
            background-image: url('/images/Marigold Images/banquet%20hall%20-final%20%20day%20view-hero-2ndpart-1500w.webp');
            background-repeat: no-repeat;
            background-position: center;
          }
          .hero-brand-wall-slider-slider-pagination {
            display: block;
          }
          .hero-brand-wall-slider-text16 {
            display: inline-block;
          }
          .hero-brand-wall-slider-text17 {
            display: inline-block;
          }
          .hero-brand-wall-slider-text18 {
            display: inline-block;
          }
          .hero-brand-wall-slider-text19 {
            display: inline-block;
          }
          .hero-brand-wall-slider-text20 {
            display: inline-block;
          }
          .hero-brand-wall-sliderroot-class-name {
            padding: 0px;
          }
          @media (max-width: 1200px) {
            .hero-brand-wall-slider-column {
              background-size: cover, contain;
              background-position: bottom right, bottom, top lefttop;
            }
          }
          @media (max-width: 991px) {
            .hero-brand-wall-slider-column {
              width: 100%;
              height: 600px;
              max-height: 600px;
              background-size: cover, contain;
              justify-content: center;
              background-repeat: no-repeat, bottom;
              background-position: right, bottom, top lefttop;
            }
            .hero-brand-wall-slider-content {
              align-items: center;
            }
            .hero-brand-wall-slider-actions1 {
              width: 35%;
            }
            .hero-brand-wall-sliderroot-class-name {
              height: 600px;
            }
          }
          @media (max-width: 767px) {
            .hero-brand-wall-slider-actions1 {
              width: 100%;
              justify-content: center;
            }
          }
          @media (max-width: 599px) {
            .hero-brand-wall-slider-column {
              height: 500px;
              max-height: 500px;
              background-size: cover, contain;
              background-position: center, bottom, top lefttop;
            }
            .hero-brand-wall-slider-text10 {
              font-size: 14px;
              font-family: Ubuntu;
            }
            .hero-brand-wall-slider-icon1 {
              fill: #00ff38;
              color: #00ff38;
            }
            .hero-brand-wall-sliderroot-class-name {
              height: 500px;
            }
          }
          @media (max-width: 480px) {
            .hero-brand-wall-slider-column {
              padding: 0px;
              background-position: bottom, bottom, top lefttop;
            }
            .hero-brand-wall-slider-slider {
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .hero-brand-wall-slider-column {
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .hero-brand-wall-slider-actions1 {
              flex-direction: column;
            }
            .hero-brand-wall-slider-button1 {
              width: 100%;
            }
            .hero-brand-wall-slider-actions2 {
              width: 100%;
              flex-wrap: wrap;
              margin-top: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

HeroBrandWallSlider.defaultProps = {
  action21: undefined,
  action2: undefined,
  action1: undefined,
  rootClassName: '',
  text21011: undefined,
  heading1: undefined,
}

HeroBrandWallSlider.propTypes = {
  action21: PropTypes.element,
  action2: PropTypes.element,
  action1: PropTypes.element,
  rootClassName: PropTypes.string,
  text21011: PropTypes.element,
  heading1: PropTypes.element,
}

export default HeroBrandWallSlider
