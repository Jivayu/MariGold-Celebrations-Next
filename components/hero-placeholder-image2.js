import React from 'react'

import PropTypes from 'prop-types'

const HeroPlaceholderImage2 = (props) => {
  return (
    <>
      <div className="hero-placeholder-image2-container">
        <img
          id="hero-4"
          alt={props.image5Alt11}
          src="/images/Marigold Images/banquet%20hall%20-%20evening%20view-%201st%20half-400w.webp"
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
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius10);
          }
        `}
      </style>
    </>
  )
}

HeroPlaceholderImage2.defaultProps = {
  image5Alt11: 'Image highlighting our top-rated products',
}

HeroPlaceholderImage2.propTypes = {
  image5Alt11: PropTypes.string,
}

export default HeroPlaceholderImage2
