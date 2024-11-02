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
            className="brand-logo-image"
          />
        </div>
      </a>
      <style jsx>
        {`
          .brand-logo-container {
            display: flex;
            position: relative;
            text-decoration: none;
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
          .brand-logoroot-class-name {
            width: 50px;
            height: auto;
          }
          .brand-logoroot-class-name1 {
            width: 100px;
          }
          .brand-logoroot-class-name2 {
            flex: 1;
            width: 100px;
            align-self: center;
          }
          .brand-logoroot-class-name3 {
            flex: 1;
            width: 12%;
            height: auto;
            align-self: center;
          }
          @media (max-width: 1200px) {
            .brand-logoroot-class-name {
              width: 50px;
              height: auto;
            }
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
              width: auto;
              align-self: center;
            }
            .brand-logoroot-class-name {
              width: auto;
              height: 50px;
            }
            .brand-logoroot-class-name3 {
              flex: 1;
              width: 20%;
              height: auto;
              align-self: center;
            }
          }
          @media (max-width: 399px) {
            .brand-logo-image {
              height: auto;
            }
            .brand-logoroot-class-name {
              width: 75px;
              height: 50px;
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
