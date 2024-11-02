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
            width: 200px;
            transform: scale(0.95);
            object-fit: cover;
            transition: 0.3s;
          }
          .brand-logo-image:hover {
            transform: scale(1);
          }
          .brand-logoroot-class-name {
            width: 3.4rem;
            height: 3.4rem;
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
            width: 5rem;
            align-self: center;
          }
        `}
      </style>
    </>
  )
}

BrandLogo.defaultProps = {
  imageAlt: 'image',
  imageSrc: '/images/marigold-logo1.svg',
  rootClassName: '',
}

BrandLogo.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BrandLogo
