import React from 'react'

import PropTypes from 'prop-types'

const BrandLogo = (props) => {
  return (
    <>
      <a href="https://marigoldcelebration.in">
        <div className={`brand-logo-container ${props.rootClassName} `}>
          <img
            id="Marigold Celebration Brand Logo"
            alt={props.imageAlt}
            src={props.imageSrc}
            loading="lazy"
            className="brand-logo-image"
          />
        </div>
      </a>
      <style jsx>
        {`
          .brand-logo-container {
            display: flex;
            padding: 2px;
            position: relative;
            border-radius: var(--dl-radius-radius-radius10);
            backdrop-filter: blur(2px);
            text-decoration: none;
            background-color: rgba(6, 6, 6, 0.2);
          }
          .brand-logo-image {
            flex: 1;
            width: 100%;
            height: 100%;
            transform: scale(0.95);
            object-fit: cover;
            transition: 0.3s;
          }
          .brand-logo-image:hover {
            transform: scale(1);
          }
          .brand-logoroot-class-name1 {
            width: 100px;
            display: none;
          }
          .brand-logoroot-class-name2 {
            flex: 1;
            width: 60px;
            display: none;
            align-self: center;
          }
          .brand-logoroot-class-name3 {
            flex: 1;
            width: 12%;
            height: auto;
            align-self: center;
          }
          @media (max-width: 1200px) {
            .brand-logoroot-class-name3 {
              align-self: center;
            }
          }
          @media (max-width: 991px) {
            .brand-logoroot-class-name3 {
              width: 20%;
              align-self: center;
            }
          }
          @media (max-width: 599px) {
            .brand-logo-container {
              gap: var(--dl-space-space-halfunit);
            }
            .brand-logo-image {
              flex: 1;
              width: 65px;
              height: auto;
              align-self: center;
            }
            .brand-logoroot-class-name3 {
              flex: 1;
              width: auto;
              height: 3%;
              display: none;
              align-self: center;
            }
          }
          @media (max-width: 399px) {
            .brand-logo-image {
              height: auto;
            }
            .brand-logoroot-class-name3 {
              width: 30%;
              height: 40px;
            }
          }
        `}
      </style>
    </>
  )
}

BrandLogo.defaultProps = {
  imageAlt: 'image',
  rootClassName: '',
  imageSrc: '/images/marigold-logo1.svg',
}

BrandLogo.propTypes = {
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default BrandLogo
