import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const CateringComponent = (props) => {
  return (
    <>
      <div className="catering-component-container UbuntuLight-14 thq-flex-column">
        <img
          alt={props.featureImageAlt2}
          src="/images/Marigold Images/buffet-2-200h.webp"
          className="catering-component-image1 thq-img-ratio-4-3"
        />
        <div className="catering-component-actions thq-flex-row">
          <button className="catering-component-button menu">
            <Link href="/gallery">
              <a className="catering-component-link thq-button-outline">
                {props.action231 ?? (
                  <Fragment>
                    <span className="catering-component-text2">
                      Explore Our Gallery Video
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .catering-component-container {
            gap: var(--dl-space-space-halfunit);
            position: relative;
            max-width: 25%;
          }
          .catering-component-image1 {
            width: 100%;
          }
          .catering-component-actions {
            padding: var(--dl-space-space-unit);
            position: relative;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .catering-component-button {
            fill: transparent;
            flex: 1;
            color: transparent;
            transform: scale(0.99);
            border-width: 0px;
          }
          .catering-component-link {
            font-size: 12px;
            transform: scale(0.97);
            font-style: normal;
            text-align: center;
            transition: 0.5;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 2;
            border-color: #380fe1;
            border-style: dotted;
            border-width: 0.5px;
            text-transform: capitalize;
            text-decoration: none;
            background-color: rgba(245, 184, 60, 0.1);
          }
          .catering-component-link:hover {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            transform: scale(1);
            box-shadow: 1px 1px 15px 1px rgba(60, 12, 231, 0.57);
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 0.5px;
            background-color: #251573;
          }
          .catering-component-text2 {
            display: inline-block;
          }
          @media (max-width: 1200px) {
            .catering-component-container {
              justify-content: center;
            }
          }
          @media (max-width: 991px) {
            .catering-component-container {
              gap: var(--dl-space-space-halfunit);
              max-width: 100%;
            }
            .catering-component-image1 {
              width: 100%;
            }
          }
          @media (max-width: 599px) {
            .catering-component-actions {
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .catering-component-actions {
              width: 100%;
              flex-wrap: wrap;
              margin-top: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 399px) {
            .catering-component-link {
              font-size: 14px;
              font-family: Ubuntu;
            }
          }
        `}
      </style>
    </>
  )
}

CateringComponent.defaultProps = {
  featureImageAlt2: 'Luxurious Venue at Marigold Banquet Hall',
  action231: undefined,
}

CateringComponent.propTypes = {
  featureImageAlt2: PropTypes.string,
  action231: PropTypes.element,
}

export default CateringComponent
