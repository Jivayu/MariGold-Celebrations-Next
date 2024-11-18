import React from 'react'

import PropTypes from 'prop-types'

const Slider = (props) => {
  return (
    <>
      <div className={`slider-container ${props.rootClassName} `}>
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
            ></div>
            <div
              data-thq="slider-slide"
              className="slider-slider-slide2 swiper-slide"
            ></div>
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
          .slider-container {
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
            align-self: flex-start;
            border-radius: var(--dl-radius-radius-radius10);
          }
          .slider-slider-slide1 {
            width: 100%;
            height: 100%;
            display: flex;
            background-size: cover;
            background-image: url('/images/Marigold Images/banquet%20hall%20-final%20%20day%20view-hero-1stpart-1500w.webp');
            background-repeat: no-repeat;
            background-position: center;
          }
          .slider-slider-slide2 {
            width: 100%;
            height: 100%;
            display: flex;
            background-size: cover;
            background-image: url('/images/Marigold Images/banquet%20hall%20-final%20%20day%20view-hero-2ndpart-1500w.webp');
            background-repeat: no-repeat;
            background-position: center;
          }
          .slider-slider-pagination {
            display: block;
          }
          .sliderroot-class-name {
            width: 100%;
            height: 100%;
            object-fit: cover;
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
  rootClassName: '',
}

Slider.propTypes = {
  rootClassName: PropTypes.string,
}

export default Slider
