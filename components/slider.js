import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Slider = (props) => {
  return (
    <>
      <div className={`slider-container1 ${props.rootClassName} `}>
        <div
          data-thq="slider"
          data-autoplay="true"
          data-navigation="true"
          data-pagination="true"
          data-pause-autoplay-on-mouse-enter="true"
          className="slider-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="slider-slider-slide1 swiper-slide"
            >
              <div className="slider-container2">
                <h1
                  id="Banquet Hall &amp; Big Events Services in Hingna, Nagpur"
                  className="slider-text1"
                >
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="slider-text5">
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
                    className="slider-text2 UbuntuLight-14"
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
              className="slider-slider-slide2 swiper-slide"
            >
              <div className="slider-container3">
                <h1
                  id="Banquet Hall &amp; Big Events Services in Hingna, Nagpur"
                  className="slider-text3"
                >
                  {props.heading11 ?? (
                    <Fragment>
                      <span className="slider-text6">
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
                    className="slider-text4 UbuntuLight-14"
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
            className="slider-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
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
            className="slider-slider-button-prev swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="slider-slider-button-next swiper-button-next"
          ></div>
        </div>
      </div>
      <style jsx>
        {`
          .slider-container1 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            border-radius: var(--dl-radius-radius-radius10);
            justify-content: center;
          }
          .slider-slider {
            width: 100%;
            height: 100%;
            display: block;
            border-radius: var(--dl-radius-radius-radius10);
          }
          .slider-slider-slide1 {
            width: 100%;
            height: 100%;
            display: flex;
            background-size: cover;
            justify-content: center;
            background-image: url('/images/Marigold Images/banquet%20hall%20-final%20%20day%20view-hero-1stpart-1500w.webp');
            background-repeat: no-repeat;
            background-position: center;
          }
          .slider-container2 {
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
          .slider-text1 {
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
          .slider-text2 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-style: normal;
            text-align: center;
            border-radius: var(--dl-radius-radius-radius10);
            backdrop-filter: blur(4px);
          }
          .slider-slider-slide2 {
            width: 100%;
            height: 100%;
            display: flex;
            background-size: cover;
            justify-content: center;
            background-image: url('/images/Marigold Images/banquet%20hall%20-final%20%20day%20view-hero-2ndpart-1500w.webp');
            background-repeat: no-repeat;
            background-position: center;
          }
          .slider-container3 {
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
          .slider-text3 {
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
          .slider-text4 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-style: normal;
            text-align: center;
            border-radius: var(--dl-radius-radius-radius10);
            backdrop-filter: blur(4px);
          }
          .slider-slider-pagination {
            display: block;
          }
          .slider-slider-button-prev {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
          }
          .slider-slider-button-next {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
          }
          .slider-text5 {
            display: inline-block;
          }
          .slider-text6 {
            display: inline-block;
          }
          .sliderroot-class-name {
            width: 100%;
            object-fit: cover;
          }
          @media (max-width: 599px) {
            .slider-text1 {
              font-size: 14px;
              font-family: Ubuntu;
            }
            .slider-text3 {
              font-size: 14px;
              font-family: Ubuntu;
            }
          }
          @media (max-width: 490px) {
            .slider-slider {
              align-self: center;
              border-radius: var(--dl-radius-radius-radius4);
            }
          }
        `}
      </style>
    </>
  )
}

Slider.defaultProps = {
  heading1: undefined,
  rootClassName: '',
  heading11: undefined,
}

Slider.propTypes = {
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
  heading11: PropTypes.element,
}

export default Slider
