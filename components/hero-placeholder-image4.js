import React from 'react'

import PropTypes from 'prop-types'

const HeroPlaceholderImage4 = (props) => {
  return (
    <>
      <div className="hero-placeholder-image4-container">
        <img
          id="hero-1"
          alt={props.image5Alt1}
          src="/images/Marigold Images/open%20area%202-400h.webp"
          loading="lazy"
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
            border-radius: var(--dl-radius-radius-radius10);
          }
        `}
      </style>
    </>
  )
}

HeroPlaceholderImage4.defaultProps = {
  image5Alt1: 'Image highlighting our top-rated products',
}

HeroPlaceholderImage4.propTypes = {
  image5Alt1: PropTypes.string,
}

export default HeroPlaceholderImage4
