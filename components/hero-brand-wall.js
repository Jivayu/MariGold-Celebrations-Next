import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import BrandLogo from './brand-logo'

const HeroBrandWall = (props) => {
  return (
    <>
      <div className="hero-brand-wall-column thq-section-padding">
        <BrandLogo></BrandLogo>
        <div className="hero-brand-wall-content">
          <div className="hero-brand-wall-container1">
            <h1
              id="Banquet Hall &amp; Big Events Services in Hingna, Nagpur"
              className="hero-brand-wall-text10 Ubuntu-Light-18"
            >
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero-brand-wall-text17">
                    Banquet Hall &amp; Big Events Services in Hingna, Nagpur
                  </span>
                </Fragment>
              )}
            </h1>
            <animate-on-reveal
              animation="fadeIn"
              duration="2000ms"
              delay="100ms"
              direction="normal"
              easing="ease"
              iteration="1"
            >
              <p
                id="Brandline"
                data-thq-animate-on-reveal="true"
                className="hero-brand-wall-text11 UbuntuLight-14"
              >
                &quot;Celebrate Life’s Special Moments at Marigold Banquet Hall.
                Perfect Weddings, Grand Events, and unforgettable Memories await
                in our Elegant, Spacious Venue.&quot;
              </p>
            </animate-on-reveal>
          </div>
          <div className="hero-brand-wall-actions1">
            <button className="hero-brand-wall-button1 thq-button-filled">
              <span className="thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="hero-brand-wall-text16">Shop Now</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="hero-brand-wall-button2 thq-button-outline menu">
              <span className="hero-brand-wall-text13">
                {props.action2 ?? (
                  <Fragment>
                    <span className="hero-brand-wall-text18">Services</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
          <div className="hero-brand-wall-actions2 thq-flex-row">
            <button className="hero-brand-wall-button3 menu">
              <Link href="/facilities-at-marigold-celebration">
                <a className="hero-brand-wall-link1 thq-button-outline">
                  {props.action21 ?? (
                    <Fragment>
                      <span className="hero-brand-wall-text19">
                        Explore Our Facilities
                      </span>
                    </Fragment>
                  )}
                </a>
              </Link>
            </button>
          </div>
          <Link href="/facilities-at-marigold-celebration">
            <a className="hero-brand-wall-link2">
              <div className="hero-brand-wall-container2">
                <span className="hero-brand-wall-text15">
                  {props.text2101 ?? (
                    <Fragment>
                      <span className="hero-brand-wall-text20">
                        Explore Facillities
                      </span>
                    </Fragment>
                  )}
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 48 48"
                  className="hero-brand-wall-icon1"
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
          .hero-brand-wall-column {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 40%;
            display: flex;
            opacity: 0.9;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            transform: scale(0.98);
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-primary-logo-color-1);
            border-style: solid;
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
            background-size: cover, contain, autoauto;
            justify-content: flex-end;
            background-image: url('/images/Marigold Images/2023-05-15-1500w.webp'),
              url('/images/marigold-brand-name%20-%20copy11-1500w.webp');
            background-repeat: bottom, top lefttop;
            background-position: center, bottom, top lefttop;
          }
          .hero-brand-wall-content {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .hero-brand-wall-container1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.5);
            border-width: 0.5px;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
            background-color: rgba(2, 2, 2, 0.48);
          }
          .hero-brand-wall-text10 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            text-align: center;
          }
          .hero-brand-wall-text11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-style: normal;
            text-align: center;
          }
          .hero-brand-wall-actions1 {
            gap: var(--dl-space-space-unit);
            width: 55%;
            display: flex;
            flex-wrap: wrap;
            align-self: center;
            align-items: flex-start;
          }
          .hero-brand-wall-button1 {
            flex: 1;
            display: none;
          }
          .hero-brand-wall-button2 {
            flex: 1;
            display: none;
            transform: scale(0.96);
            transition: 0.3s;
            padding-top: var(--dl-space-space-halfunit);
            border-color: #380fe1;
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-buttonradius);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(245, 184, 60, 0.1);
          }
          .hero-brand-wall-button2:hover {
            transform: scale(1);
            box-shadow: 3px 3px 25px 1px rgba(15, 0, 255, 0.25);
            background-color: rgba(71, 60, 245, 0.21);
          }
          .hero-brand-wall-text13 {
            color: var(--dl-color-primary-logo-color-2);
            font-size: 14px;
            transform: scale(0.96);
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 400;
            line-height: 1.6;
            text-transform: capitalize;
            text-decoration: none;
          }
          .hero-brand-wall-text13:hover {
            transform: scale(1);
          }
          .hero-brand-wall-actions2 {
            display: none;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .hero-brand-wall-button3 {
            fill: transparent;
            flex: 1;
            color: transparent;
            transform: scale(0.99);
            border-width: 0px;
          }
          .hero-brand-wall-link1 {
            fill: var(--dl-color-primary-logo-color-2);
            color: var(--dl-color-primary-logo-color-2);
            font-size: 14px;
            transform: scale(0.97);
            font-style: normal;
            text-align: center;
            transition: 0.5;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.6;
            border-color: #380fe1;
            border-style: dotted;
            border-width: 0.5px;
            text-transform: capitalize;
            text-decoration: none;
            background-color: rgba(245, 184, 60, 0.1);
          }
          .hero-brand-wall-link1:hover {
            transform: scale(1);
            box-shadow: 3px 3px 25px 1px rgba(50, 0, 255, 0.41);
            border-style: dotted;
            border-width: 0.5px;
            background-color: rgba(13, 7, 247, 0.2);
          }
          .hero-brand-wall-link2 {
            display: contents;
          }
          .hero-brand-wall-container2 {
            gap: var(--dl-space-space-halfunit);
            width: auto;
            display: flex;
            align-self: center;
            box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.4);
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(0, 0, 0, 0.87);
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
          .hero-brand-wall-container2:hover {
            box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.48);
            border-color: rgba(0, 0, 0, 0.77);
            animation-name: fadeIn;
            animation-delay: 100ms;
            animation-duration: 1500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .hero-brand-wall-text15 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 12px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 200;
            line-height: 1.9;
          }
          .hero-brand-wall-icon1 {
            fill: #00ff38;
            color: #00ff38;
          }
          .hero-brand-wall-text16 {
            display: inline-block;
          }
          .hero-brand-wall-text17 {
            display: inline-block;
          }
          .hero-brand-wall-text18 {
            display: inline-block;
          }
          .hero-brand-wall-text19 {
            display: inline-block;
          }
          .hero-brand-wall-text20 {
            display: inline-block;
          }
          @media (max-width: 1200px) {
            .hero-brand-wall-column {
              background-size: auto, contain;
            }
          }
          @media (max-width: 991px) {
            .hero-brand-wall-column {
              gap: var(--dl-space-space-unit);
              width: 100%;
              background-size: cover, contain;
              background-repeat: no-repeat, bottom;
              background-position: bottom, bottom, top lefttop;
            }
            .hero-brand-wall-content {
              align-items: center;
            }
            .hero-brand-wall-actions1 {
              width: 35%;
            }
          }
          @media (max-width: 767px) {
            .hero-brand-wall-actions1 {
              width: 100%;
              justify-content: center;
            }
          }
          @media (max-width: 599px) {
            .hero-brand-wall-column {
              padding: var(--dl-space-space-oneandhalfunits);
              background-size: cover, contain;
            }
            .hero-brand-wall-icon1 {
              fill: #00ff38;
              color: #00ff38;
            }
          }
          @media (max-width: 479px) {
            .hero-brand-wall-column {
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .hero-brand-wall-actions1 {
              flex-direction: column;
            }
            .hero-brand-wall-button1 {
              width: 100%;
            }
            .hero-brand-wall-actions2 {
              width: 100%;
              flex-wrap: wrap;
              margin-top: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 399px) {
            .hero-brand-wall-column {
              padding: var(--dl-space-space-unit);
              background-position: right, bottom, top lefttop;
            }
          }
        `}
      </style>
    </>
  )
}

HeroBrandWall.defaultProps = {
  action1: undefined,
  heading1: undefined,
  action2: undefined,
  action21: undefined,
  text2101: undefined,
}

HeroBrandWall.propTypes = {
  action1: PropTypes.element,
  heading1: PropTypes.element,
  action2: PropTypes.element,
  action21: PropTypes.element,
  text2101: PropTypes.element,
}

export default HeroBrandWall
