import React from 'react'

import PropTypes from 'prop-types'

import Slider from './slider'

const HeroBrandWallSlider = (props) => {
  return (
    <>
      <div className={`hero-brand-wall-slider-column ${props.rootClassName} `}>
        <Slider rootClassName="sliderroot-class-name"></Slider>
      </div>
      <style jsx>
        {`
          .hero-brand-wall-slider-column {
            width: 40%;
            height: auto;
            display: flex;
            padding: 0px;
            position: relative;
            align-self: stretch;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
            justify-content: space-between;
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
            .hero-brand-wall-sliderroot-class-name {
              height: 600px;
            }
          }
          @media (max-width: 599px) {
            .hero-brand-wall-slider-column {
              height: 600px;
              max-height: 600px;
              background-size: cover, contain;
              background-position: center, bottom, top lefttop;
            }
            .hero-brand-wall-sliderroot-class-name {
              height: 500px;
            }
          }
          @media (max-width: 490px) {
            .hero-brand-wall-slider-column {
              padding: 0px;
              background-position: bottom, bottom, top lefttop;
            }
            .hero-brand-wall-sliderroot-class-name {
              height: 600px;
            }
          }
          @media (max-width: 479px) {
            .hero-brand-wall-slider-column {
              padding: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

HeroBrandWallSlider.defaultProps = {
  rootClassName: '',
}

HeroBrandWallSlider.propTypes = {
  rootClassName: PropTypes.string,
}

export default HeroBrandWallSlider
