import React from 'react'

import PropTypes from 'prop-types'

const HeroPlaceholderImage1 = (props) => {
  return (
    <>
      <div className="hero-placeholder-image1-container">
        <img
          id="hero-2"
          alt={props.image6Alt1}
          src={props.image6Src1}
          className="hero-placeholder-image1-placeholder-image thq-img-ratio-1-1"
        />
      </div>
      <style jsx>
        {`
          .hero-placeholder-image1-container {
            display: flex;
            position: relative;
          }
          .hero-placeholder-image1-placeholder-image {
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

HeroPlaceholderImage1.defaultProps = {
  image6Src1: '/images/Marigold Images/marigold11-400h.webp',
  image6Alt1: 'Image of our customer support team',
}

HeroPlaceholderImage1.propTypes = {
  image6Src1: PropTypes.string,
  image6Alt1: PropTypes.string,
}

export default HeroPlaceholderImage1
