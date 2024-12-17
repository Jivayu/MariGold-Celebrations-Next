import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const HeroPlaceholderImage6 = (props) => {
  return (
    <>
      <div className="hero-placeholder-image6-container">
        <img
          alt={props.image4Alt11}
          src="/images/Marigold Images/marigold11-300h.webp"
          loading="lazy"
          className="hero-placeholder-image6-placeholder-image thq-img-ratio-1-1"
        />
      </div>
      <style jsx>
        {`
          .hero-placeholder-image6-container {
            display: flex;
            position: relative;
          }
          .hero-placeholder-image6-placeholder-image {
            max-width: 340px;
            align-self: stretch;
            border-radius: var(--dl-radius-radius-radius10);
          }
          @media (max-width: 991px) {
            .hero-placeholder-image6-placeholder-image {
              width: 280px;
              height: 280px;
            }
          }
        `}
      </style>
    </>
  )
}

HeroPlaceholderImage6.defaultProps = {
  image4Alt11: 'Image showing our latest offers',
}

HeroPlaceholderImage6.propTypes = {
  image4Alt11: PropTypes.string,
}

export default HeroPlaceholderImage6
