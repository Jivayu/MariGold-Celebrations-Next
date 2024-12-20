import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const HeroPlaceholderImage1 = (props) => {
  return (
    <>
      <div className="hero-placeholder-image1-container">
        <img
          id="hero-2"
          alt={props.image6Alt1}
          src="/images/Marigold Images/stage%20decore-400h.webp"
          loading="lazy"
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
            width: 100%;
            align-self: normal;
            min-height: 360px;
            object-fit: cover;
            aspect-ratio: 1/1;
            border-radius: var(--dl-radius-radius-radius10);
          }
          @media (max-width: 991px) {
            .hero-placeholder-image1-placeholder-image {
              width: 280px;
              height: 280px;
            }
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
