import React from 'react'

import PropTypes from 'prop-types'

const HeroPlaceholderImage3 = (props) => {
  return (
    <>
      <div className="hero-placeholder-image3-container">
        <img
          id="hero-5"
          alt={props.image6Alt11}
          src="/images/Marigold Images/banquet%20hall%20-%20evening%20view-%202nd%20half-300w.webp"
          loading="lazy"
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
            max-width: 340px;
            align-self: stretch;
            border-radius: var(--dl-radius-radius-radius10);
          }
          @media (max-width: 991px) {
            .hero-placeholder-image3-placeholder-image {
              width: 280px;
              height: 280px;
            }
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
