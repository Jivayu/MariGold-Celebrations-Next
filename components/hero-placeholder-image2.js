import React from 'react'

import PropTypes from 'prop-types'

const HeroPlaceholderImage2 = (props) => {
  return (
    <>
      <div className="hero-placeholder-image2-container">
        <img
          id="hero-4"
          alt={props.image5Alt11}
          src={props.image5Src11}
          loading="lazy"
          className="hero-placeholder-image2-placeholder-image thq-img-ratio-1-1"
        />
      </div>
      <style jsx>
        {`
          .hero-placeholder-image2-container {
            display: flex;
            position: relative;
          }
          .hero-placeholder-image2-placeholder-image {
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

HeroPlaceholderImage2.defaultProps = {
  image5Src11: '/images/Marigold Images/hallpic-1-400h.webp',
  image5Alt11: 'Image highlighting our top-rated products',
}

HeroPlaceholderImage2.propTypes = {
  image5Src11: PropTypes.string,
  image5Alt11: PropTypes.string,
}

export default HeroPlaceholderImage2
