import React from 'react'

import PropTypes from 'prop-types'

const HeroPlaceholderImage4 = (props) => {
  return (
    <>
      <div className="hero-placeholder-image4-container">
        <img
          id="hero-1"
          alt={props.image5Alt1}
          src={props.image5Src1}
          className="hero-placeholder-image4-placeholder-image thq-img-ratio-1-1"
        />
      </div>
      <style jsx>
        {`
          .hero-placeholder-image4-container {
            display: flex;
            position: relative;
          }
          .hero-placeholder-image4-placeholder-image {
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

HeroPlaceholderImage4.defaultProps = {
  image5Alt1: 'Image highlighting our top-rated products',
  image5Src1: '/images/Marigold Images/hallpic-4-400w.webp',
}

HeroPlaceholderImage4.propTypes = {
  image5Alt1: PropTypes.string,
  image5Src1: PropTypes.string,
}

export default HeroPlaceholderImage4
