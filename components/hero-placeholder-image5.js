import React from 'react'

import PropTypes from 'prop-types'

const HeroPlaceholderImage5 = (props) => {
  return (
    <>
      <div className="hero-placeholder-image5-container">
        <img
          id="hero-3"
          alt={props.image6Alt12}
          src="/images/Marigold Images/stage-decore-400h.webp"
          loading="lazy"
          className="hero-placeholder-image5-placeholder-image thq-img-ratio-1-1"
        />
      </div>
      <style jsx>
        {`
          .hero-placeholder-image5-container {
            display: flex;
            position: relative;
          }
          .hero-placeholder-image5-placeholder-image {
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

HeroPlaceholderImage5.defaultProps = {
  image6Alt12: 'Image of our customer support team',
}

HeroPlaceholderImage5.propTypes = {
  image6Alt12: PropTypes.string,
}

export default HeroPlaceholderImage5
