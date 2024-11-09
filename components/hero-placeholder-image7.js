import React from 'react'

import PropTypes from 'prop-types'

const HeroPlaceholderImage7 = (props) => {
  return (
    <>
      <div className="hero-placeholder-image7-container">
        <img
          alt={props.image7Alt11}
          src="/images/Marigold Images/marigold11-400h.webp"
          loading="lazy"
          className="hero-placeholder-image7-placeholder-image thq-img-ratio-1-1"
        />
      </div>
      <style jsx>
        {`
          .hero-placeholder-image7-container {
            display: flex;
            position: relative;
          }
          .hero-placeholder-image7-placeholder-image {
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

HeroPlaceholderImage7.defaultProps = {
  image7Alt11: 'Image displaying our company values',
}

HeroPlaceholderImage7.propTypes = {
  image7Alt11: PropTypes.string,
}

export default HeroPlaceholderImage7
