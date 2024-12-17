import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

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
            align-self: stretch;
            min-height: 360px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius10);
          }
          @media (max-width: 991px) {
            .hero-placeholder-image4-placeholder-image {
              width: 280px;
              height: 280px;
            }
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
