import React from 'react'

import PropTypes from 'prop-types'

const HeroPlaceholderImage3 = (props) => {
  return (
    <>
      <div className="hero-placeholder-image3-container">
        <img
          id="hero-5"
          alt={props.image6Alt11}
          src={props.image6Src11}
          className="hero-placeholder-image3-placeholder-image thq-img-ratio-1-1"
        />
      </div>
      <style jsx>
        {`
          .hero-placeholder-image3-container {
            display: flex;
            position: relative;
          }
          .hero-placeholder-image3-placeholder-image {
            width: 360px;
            height: 360px;
            align-self: stretch;
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius10);
          }
        `}
      </style>
    </>
  )
}

HeroPlaceholderImage3.defaultProps = {
  image6Alt11: 'Image of our customer support team',
  image6Src11: '/images/Marigold Images/hallpic-5-400h.webp',
}

HeroPlaceholderImage3.propTypes = {
  image6Alt11: PropTypes.string,
  image6Src11: PropTypes.string,
}

export default HeroPlaceholderImage3
