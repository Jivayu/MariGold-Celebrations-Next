import React from 'react'

import PropTypes from 'prop-types'

const HeroPlaceholderImage3 = (props) => {
  return (
    <>
      <div className="hero-placeholder-image3-container">
        <img
          id="hero-5"
          alt={props.image6Alt11}
          loading="lazy"
          src="/images/Marigold Images/banquet%20hall%20-%20evening%20view-%202nd%20half-400w.webp"
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
}

HeroPlaceholderImage3.propTypes = {
  image6Alt11: PropTypes.string,
}

export default HeroPlaceholderImage3
