import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const EventSpacesComponent = (props) => {
  return (
    <>
      <div
        className={`event-spaces-component-container UbuntuLight-14 thq-flex-column ${props.rootClassName} `}
      >
        <img
          alt={props.featureImageAlt}
          sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
          src="/images/Marigold Images/big-hall-1500w.webp"
          loading="lazy"
          srcSet="/images/Marigold Images//big-hall-1500w.webp 1200w, /images/Marigold Images/big-hall-tablet.webp 800w, /images/Marigold Images/big-hall-mobile.webp 480w"
          className="thq-img-ratio-4-3 event-spaces-component-image1"
        />
        <div className="event-spaces-component-actions thq-flex-row">
          <button className="event-spaces-component-button menu">
            <Link href="/gallery">
              <a className="event-spaces-component-link thq-button-outline">
                {props.action23 ?? (
                  <Fragment>
                    <span className="event-spaces-component-text2">
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
          .event-spaces-component-container {
            gap: var(--dl-space-space-halfunit);
            position: relative;
            max-width: 25%;
          }
          .event-spaces-component-actions {
            padding: var(--dl-space-space-unit);
            position: relative;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .event-spaces-component-button {
            fill: transparent;
            flex: 1;
            color: transparent;
            transform: scale(0.99);
            border-width: 0px;
          }
          .event-spaces-component-link {
            font-size: 14px;
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
          .event-spaces-component-link:hover {
            transform: scale(1);
            box-shadow: 1px 2px 25px 1px rgba(50, 0, 255, 0.4);
            border-color: var(--dl-color-primary-logo-color-2);
            border-style: solid;
            border-width: 1px;
            background-color: rgba(61, 19, 234, 0.3);
          }
          .event-spaces-component-text2 {
            display: inline-block;
          }

          @media (max-width: 1200px) {
            .event-spaces-component-container {
              justify-content: center;
            }
          }
          @media (max-width: 991px) {
            .event-spaces-component-container {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              max-width: 100%;
            }
            .event-spaces-component-image1 {
              width: 100%;
            }
            .event-spaces-component-link {
              font-size: 14px;
            }
          }
          @media (max-width: 599px) {
            .event-spaces-component-actions {
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .event-spaces-component-actions {
              width: 100%;
              flex-wrap: wrap;
              margin-top: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

EventSpacesComponent.defaultProps = {
  action23: undefined,
  rootClassName: '',
  featureImageAlt: 'Luxurious Venue at Marigold Banquet Hall',
}

EventSpacesComponent.propTypes = {
  action23: PropTypes.element,
  rootClassName: PropTypes.string,
  featureImageAlt: PropTypes.string,
}

export default EventSpacesComponent
