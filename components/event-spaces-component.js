import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const EventSpacesComponent = (props) => {
  return (
    <>
      <div
        className={`event-spaces-component-container1 UbuntuLight-14 thq-flex-column ${props.rootClassName} `}
      >
        <img
          id="HallPic-AI"
          alt={props.featureImageAlt}
          src={props.image1Src}
          loading={props.image1Loading}
          className="thq-img-ratio-4-3 event-spaces-component-image1"
        />
        <div className="event-spaces-component-actions thq-flex-row">
          <button className="event-spaces-component-button menu">
            <Link href="/gallery">
              <a className="event-spaces-component-link1 thq-button-outline">
                {props.action23 ?? (
                  <Fragment>
                    <span className="event-spaces-component-text4">
                      Explore Our Gallery Video
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
          </button>
          <Link href="/gallery">
            <a>
              <div className="event-spaces-component-container2">
                <span className="event-spaces-component-text2">
                  {props.text2101 ?? (
                    <Fragment>
                      <span className="event-spaces-component-text3">
                        Video Gallery
                      </span>
                    </Fragment>
                  )}
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 48 48"
                  className="event-spaces-component-icon1"
                >
                  <path
                    d="M28 6h14v14m0 9.474V39a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h9m7.8 16.2L41.1 6.9"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .event-spaces-component-container1 {
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
            display: none;
            transform: scale(0.99);
            border-width: 0px;
          }
          .event-spaces-component-link1 {
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
          .event-spaces-component-link1:hover {
            transform: scale(1);
            box-shadow: 1px 2px 25px 1px rgba(50, 0, 255, 0.4);
            border-color: var(--dl-color-primary-logo-color-2);
            border-style: solid;
            border-width: 1px;
            background-color: rgba(61, 19, 234, 0.3);
          }
          .event-spaces-component-container2 {
            gap: var(--dl-space-space-halfunit);
            width: auto;
            display: flex;
            align-self: flex-end;
            box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.44);
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 0.5px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-cardradius);
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            backdrop-filter: blur(3px);
            justify-content: center;
            text-decoration: none;
            background-color: rgba(2, 2, 2, 0.48);
          }
          .event-spaces-component-container2:hover {
            box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.48);
            border-color: rgba(0, 0, 0, 0.77);
            animation-name: fadeIn;
            animation-delay: 100ms;
            animation-duration: 1500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .event-spaces-component-text2 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 12px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 200;
            line-height: 1.9;
          }
          .event-spaces-component-icon1 {
            fill: #00ff38;
            color: #00ff38;
          }
          .event-spaces-component-text3 {
            display: inline-block;
          }
          .event-spaces-component-text4 {
            display: inline-block;
          }

          @media (max-width: 1200px) {
            .event-spaces-component-container1 {
              justify-content: center;
            }
          }
          @media (max-width: 991px) {
            .event-spaces-component-container1 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              max-width: 100%;
            }
            .event-spaces-component-image1 {
              width: 100%;
            }
            .event-spaces-component-link1 {
              font-size: 14px;
            }
          }
          @media (max-width: 599px) {
            .event-spaces-component-actions {
              align-self: center;
            }
            .event-spaces-component-icon1 {
              fill: #00ff38;
              color: #00ff38;
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
  text2101: undefined,
  image1Src: '/images/Marigold Images/big-hall-1500w.webp',
  action23: undefined,
  rootClassName: '',
  featureImageAlt: 'Luxurious Venue at Marigold Banquet Hall',
  image1Loading: 'lazy',
}

EventSpacesComponent.propTypes = {
  text2101: PropTypes.element,
  image1Src: PropTypes.string,
  action23: PropTypes.element,
  rootClassName: PropTypes.string,
  featureImageAlt: PropTypes.string,
  image1Loading: PropTypes.string,
}

export default EventSpacesComponent
