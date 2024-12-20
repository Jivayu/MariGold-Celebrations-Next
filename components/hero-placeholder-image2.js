import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const HeroPlaceholderImage2 = (props) => {
  return (
    <>
      <div className="hero-placeholder-image2-container">
        <img
          id="hero-4"
          alt={props.image5Alt11}
          src="/images/Marigold Images/banquet%20hall%20-%20evening%20view-%201st%20half-300w.webp"
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
            align-self: stretch;
            min-height: 350px;
            border-radius: var(--dl-radius-radius-radius10);
          }
          @media (max-width: 991px) {
            .hero-placeholder-image2-placeholder-image {
              width: 280px;
              height: 280px;
            }
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
