import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const PhotoSliderGallery = (props) => {
  return (
    <>
      <section
        id="gallery-1"
        className={`photo-slider-gallery-container1 thq-section-padding ${props.rootClassName} `}
      >
        <div className="photo-slider-gallery-max-width thq-section-max-width">
          <div className="photo-slider-gallery-container2 thq-flex-row">
            <div
              data-thq="slider"
              data-loop="true"
              data-autoplay="false"
              data-navigation="true"
              data-pagination="true"
              data-reverse-direction="true"
              className="photo-slider-gallery-slider swiper"
            >
              <div data-thq="slider-wrapper" className="swiper-wrapper">
                <div
                  data-thq="slider-slide"
                  className="photo-slider-gallery-slider-slide1 swiper-slide"
                ></div>
                <div
                  data-thq="slider-slide"
                  className="photo-slider-gallery-slider-slide2 swiper-slide"
                ></div>
                <div
                  data-thq="slider-slide"
                  className="photo-slider-gallery-slider-slide3 swiper-slide"
                ></div>
                <div
                  data-thq="slider-slide"
                  className="photo-slider-gallery-slider-slide4 swiper-slide"
                ></div>
                <div
                  data-thq="slider-slide"
                  className="photo-slider-gallery-slider-slide5 swiper-slide"
                ></div>
                <div
                  data-thq="slider-slide"
                  className="photo-slider-gallery-slider-slide6 swiper-slide"
                ></div>
              </div>
              <div
                data-thq="slider-pagination"
                className="photo-slider-gallery-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
              >
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet swiper-pagination-bullet-active"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
              </div>
              <div
                data-thq="slider-button-prev"
                className="photo-slider-gallery-slider-button-prev swiper-button-prev"
              ></div>
              <div
                data-thq="slider-button-next"
                className="photo-slider-gallery-slider-button-next swiper-button-next"
              ></div>
            </div>
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="photo-slider-gallery-placeholder-image thq-img-ratio-16-9"
            />
            <div className="photo-slider-gallery-column">
              <span className="photo-slider-gallery-text10 Ubuntu-Light-16">
                {props.content1 ?? (
                  <Fragment>
                    <span className="photo-slider-gallery-text18">
                      Our Grand Majestic Halls &amp; Dining Court.
                    </span>
                  </Fragment>
                )}
              </span>
              <p className="photo-slider-gallery-text11 Ubuntu-Light-12">
                {props.content2 ?? (
                  <Fragment>
                    <span className="photo-slider-gallery-text14">
                      Here are some Refined and Versatile Images for Our types
                      of banquet hall spaces From MariGold Celebration.
                    </span>
                  </Fragment>
                )}
              </p>
              <p className="photo-slider-gallery-text12 Ubuntu-Light-Itallic-14">
                {props.content21 ?? (
                  <Fragment>
                    <span className="photo-slider-gallery-text15">
                      <span>
                        We warmly invite you to visit and explore Marigold
                        Banquet Hall. It would be our pleasure to assist you
                        with your event planning needs and show you everything
                        we have to offer!
                      </span>
                      <br className="p"></br>
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="photo-slider-gallery-actions thq-flex-row">
                <button className="photo-slider-gallery-button menu">
                  <span className="photo-slider-gallery-text13 thq-button-outline">
                    {props.action21 ?? (
                      <Fragment>
                        <span className="photo-slider-gallery-text19">
                          Explore Our Gallery
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .photo-slider-gallery-container1 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .photo-slider-gallery-max-width {
            gap: 80px;
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .photo-slider-gallery-container2 {
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .photo-slider-gallery-slider {
            width: 90%;
            height: 450px;
            display: inline-block;
            transition: 0.5s;
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius10);
          }

          .photo-slider-gallery-slider-slide1 {
            display: flex;
            background-size: cover;
            background-image: url('/images/Marigold Images/hallpic-1-1400w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .photo-slider-gallery-slider-slide2 {
            display: flex;
            background-size: cover;
            background-image: url('/images/Marigold Images/hallpic-1-1400w.webp');
            background-repeat: no-repeat;
            background-position: center;
          }
          .photo-slider-gallery-slider-slide3 {
            display: flex;
            background-size: cover;
            background-image: url('/images/Marigold Images/hallpic-1-1400w.webp');
            background-position: bottom;
          }
          .photo-slider-gallery-slider-slide4 {
            display: flex;
            background-size: cover;
            background-image: url('/images/Marigold Images/hall-photo-scaled-1400w.webp');
            background-repeat: no-repeat;
            background-position: center;
          }
          .photo-slider-gallery-slider-slide5 {
            display: flex;
            background-size: cover;
            background-image: url('/images/Marigold Images/hall-front-photo-scaled-1400w.webp');
            background-repeat: no-repeat;
            background-position: bottom;
          }
          .photo-slider-gallery-slider-slide6 {
            display: flex;
            background-size: cover;
            background-image: url('/images/Marigold Images/marigold-11-1400w.webp');
            background-repeat: no-repeat;
            background-position: center;
          }
          .photo-slider-gallery-slider-pagination {
            display: block;
          }
          .photo-slider-gallery-slider-button-prev {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
          }
          .photo-slider-gallery-slider-button-next {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
          }
          .photo-slider-gallery-placeholder-image {
            height: 100%;
            display: none;
            flex-grow: 1;
            max-height: 400px;
          }
          .photo-slider-gallery-column {
            gap: var(--dl-space-space-unit);
            width: 60%;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-direction: column;
          }
          .photo-slider-gallery-text10 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-style: italic;
          }
          .photo-slider-gallery-text11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
          }
          .photo-slider-gallery-text12 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            line-height: 1.4;
          }
          .photo-slider-gallery-actions {
            padding: var(--dl-space-space-unit);
            position: relative;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .photo-slider-gallery-button {
            fill: transparent;
            flex: 1;
            color: transparent;
            transform: scale(0.99);
            border-width: 0px;
          }
          .photo-slider-gallery-text13 {
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
          .photo-slider-gallery-text13:hover {
            transform: scale(1);
            box-shadow: 3px 3px 25px 1px rgba(50, 0, 255, 0.41);
            border-style: dotted;
            border-width: 0.5px;
            background-color: rgba(61, 19, 234, 0.2);
          }
          .photo-slider-gallery-text14 {
            display: inline-block;
          }
          .photo-slider-gallery-text15 {
            display: inline-block;
          }
          .photo-slider-gallery-text18 {
            display: inline-block;
          }
          .photo-slider-gallery-text19 {
            display: inline-block;
          }
          @media (max-width: 1200px) {
            .photo-slider-gallery-slider {
              height: 420px;
            }
          }
          @media (max-width: 991px) {
            .photo-slider-gallery-container2 {
              flex-direction: column;
            }
            .photo-slider-gallery-slider {
              width: 100%;
              height: 500px;
            }
            .photo-slider-gallery-placeholder-image {
              width: 100%;
            }
            .photo-slider-gallery-column {
              gap: var(--dl-space-space-unit);
              width: 90%;
            }
          }
          @media (max-width: 599px) {
            .photo-slider-gallery-container1 {
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .photo-slider-gallery-slider {
              height: 360px;
              border-radius: var(--dl-radius-radius-radius10);
            }
            .photo-slider-gallery-column {
              width: 95%;
              padding-left: var(--dl-space-space-unit);
            }
            .photo-slider-gallery-actions {
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .photo-slider-gallery-actions {
              width: 100%;
              flex-wrap: wrap;
              margin-top: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 399px) {
            .photo-slider-gallery-slider {
              height: 240px;
            }
            .photo-slider-gallery-column {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

PhotoSliderGallery.defaultProps = {
  rootClassName: '',
  content2: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1628578569073-8ee77295315d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTY4MjIwOXw&ixlib=rb-4.0.3&q=80&w=1080',
  content21: undefined,
  content1: undefined,
  action21: undefined,
  image1Alt: 'Image1Alt',
}

PhotoSliderGallery.propTypes = {
  rootClassName: PropTypes.string,
  content2: PropTypes.element,
  image1Src: PropTypes.string,
  content21: PropTypes.element,
  content1: PropTypes.element,
  action21: PropTypes.element,
  image1Alt: PropTypes.string,
}

export default PhotoSliderGallery
