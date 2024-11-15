import React from 'react'

import PropTypes from 'prop-types'

const HeroPlaceholderImage1 = (props) => {
  return (
    <>
      <div className="hero-placeholder-image1-container">
        <img
          id="hero-2"
          alt={props.image6Alt1}
          loading="lazy"
          src="/images/Marigold Images/stage%20decore-400h.webp"
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
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius10);
          }
        `}
      </style>
    </>
  )
}

HeroPlaceholderImage1.defaultProps = {
  image6Alt1: 'Image of our customer support team',
}

HeroPlaceholderImage1.propTypes = {
  image6Alt1: PropTypes.string,
}

export default HeroPlaceholderImage1
