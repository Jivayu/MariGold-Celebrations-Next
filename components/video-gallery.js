import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import BrandLogo from './brand-logo'

const VideoGallery = (props) => {
  return (
    <>
      <section
        id="VIdeo-1"
        className={`video-gallery-testimonial13 thq-section-padding ${props.rootClassName} `}
      >
        <div className="video-gallery-max-width thq-section-max-width">
          <div className="video-gallery-content">
            <div className="video-gallery-stars">
              <img
                alt={props.company1LogoAlt}
                src="/images/marigold-logo1.svg"
                className="video-gallery-logo"
              />
              <BrandLogo rootClassName="brand-logoroot-class-name2"></BrandLogo>
              <div className="video-gallery-container1">
                <div className="video-gallery-container2">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="video-gallery-icon10 thq-icon-small"
                  >
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    className="video-gallery-icon12 thq-icon-small"
                  >
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    className="video-gallery-icon14 thq-icon-small"
                  >
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    className="video-gallery-icon16 thq-icon-small"
                  >
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    className="video-gallery-icon18 thq-icon-small"
                  >
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                </div>
                <div className="video-gallery-actions thq-flex-row">
                  <button className="video-gallery-button menu">
                    <span className="video-gallery-text10 thq-button-outline">
                      {props.action23 ?? (
                        <Fragment>
                          <span className="video-gallery-text20">
                            Google Business Profile
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
                <Link href="/gallery">
                  <a className="video-gallery-link">
                    <div className="video-gallery-container3">
                      <span className="video-gallery-text11">
                        {props.text21011 ?? (
                          <Fragment>
                            <span className="video-gallery-text21">
                              Visit Gallery
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 48 48"
                        className="video-gallery-icon20"
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
            <div className="video-gallery-container4">
              <p className="video-gallery-text12 thq-body-large">
                {props.review1 ?? (
                  <Fragment>
                    <span className="video-gallery-text19">
                      Our wedding at Marigold Banquet Hall was a dream come
                      true! The venue was stunning, the food was delicious, and
                      the staff went above and beyond to make our day special.
                    </span>
                  </Fragment>
                )}
              </p>
              <p className="video-gallery-text13 thq-body-large">
                {props.review11 ?? (
                  <Fragment>
                    <span className="video-gallery-text17">
                      We warmly invite you to visit and explore Marigold Banquet
                      Hall. It would be our pleasure to assist you with your
                      event planning needs and show you everything we have to
                      offer!
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="video-gallery-avatar">
              <div className="video-gallery-avatar-content">
                <animate-on-reveal
                  duration="2000ms"
                  delay="100ms"
                  direction="normal"
                  easing="linear"
                  iteration="1"
                >
                  <span
                    data-thq-animate-on-reveal="true"
                    className="video-gallery-text14 thq-body-small"
                  >
                    {props.author1Name ?? (
                      <Fragment>
                        <span className="video-gallery-text16">
                          MariGold Celebration - Hingna, Nagpur
                        </span>
                      </Fragment>
                    )}
                  </span>
                </animate-on-reveal>
                <animate-on-reveal
                  animation="fadeIn"
                  duration="2000ms"
                  delay="100ms"
                  direction="normal"
                  easing="linear"
                  iteration="1"
                >
                  <span
                    data-thq-animate-on-reveal="true"
                    className="video-gallery-text15 thq-body-small"
                  >
                    {props.author1Position ?? (
                      <Fragment>
                        <span className="video-gallery-text18">
                          marigoldcelebration.in
                        </span>
                      </Fragment>
                    )}
                  </span>
                </animate-on-reveal>
              </div>
            </div>
          </div>
          <div className="video-gallery-container5">
            <video
              id="marigold-celebration-video"
              src={props.videoSrc}
              muted="true"
              poster="/images/Marigold Images/marigold-celebration-banner-1400w.webp"
              preload="auto"
              autoPlay="true"
              controls="true"
              className="video-gallery-video thq-img-ratio-16-9"
            ></video>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .video-gallery-testimonial13 {
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .video-gallery-max-width {
            display: flex;
            position: relative;
            align-items: center;
            justify-content: space-between;
          }
          .video-gallery-content {
            gap: var(--dl-space-space-unit);
            width: 40%;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .video-gallery-stars {
            gap: var(--dl-space-space-halfunit);
            fill: var(--dl-color-theme-primary1);
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
          }
          .video-gallery-logo {
            width: 60px;
            height: auto;
          }
          .video-gallery-container1 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .video-gallery-container2 {
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
          }
          .video-gallery-icon10 {
            fill: var(--dl-color-primary-logo-color-1);
          }
          .video-gallery-icon12 {
            fill: var(--dl-color-primary-logo-color-1);
          }
          .video-gallery-icon14 {
            fill: var(--dl-color-primary-logo-color-1);
          }
          .video-gallery-icon16 {
            fill: var(--dl-color-primary-logo-color-1);
          }
          .video-gallery-icon18 {
            fill: var(--dl-color-primary-logo-color-1);
          }
          .video-gallery-actions {
            display: none;
            position: relative;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .video-gallery-button {
            fill: transparent;
            flex: 1;
            color: transparent;
            transform: scale(0.99);
            border-width: 0px;
          }
          .video-gallery-text10 {
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
          .video-gallery-text10:hover {
            transform: scale(1);
            box-shadow: 1px 2px 25px 1px rgba(50, 0, 255, 0.4);
            border-color: var(--dl-color-primary-logo-color-2);
            border-style: dotted;
            border-width: 0.5px;
            background-color: rgba(61, 19, 234, 0.3);
          }
          .video-gallery-link {
            display: contents;
          }
          .video-gallery-container3 {
            gap: var(--dl-space-space-halfunit);
            width: auto;
            display: flex;
            align-self: flex-end;
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
          .video-gallery-container3:hover {
            box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.48);
            border-color: #00831b;
          }
          .video-gallery-text11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 12px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 200;
            line-height: 1.8;
          }
          .video-gallery-icon20 {
            fill: #00ff38;
            color: #00ff38;
          }
          .video-gallery-container4 {
            gap: var(--dl-space-space-halfunit);
            width: 80%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .video-gallery-text12 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 12px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .video-gallery-text13 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .video-gallery-avatar {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 80%;
            display: flex;
            align-items: center;
          }
          .video-gallery-avatar-content {
            flex: 1;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .video-gallery-text14 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 500;
          }
          .video-gallery-text15 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 12px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .video-gallery-container5 {
            gap: var(--dl-space-space-halfunit);
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .video-gallery-video {
            width: 100%;
            height: auto;
            box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.3);
            aspect-ratio: 16/9;
            border-color: var(--dl-color-primary-logo-color-4);
            border-width: 0.5px;
            border-radius: var(--dl-radius-radius-radius10);
          }
          .video-gallery-text16 {
            display: inline-block;
          }
          .video-gallery-text17 {
            display: inline-block;
          }
          .video-gallery-text18 {
            display: inline-block;
          }
          .video-gallery-text19 {
            display: inline-block;
          }
          .video-gallery-text20 {
            display: inline-block;
          }
          .video-gallery-text21 {
            display: inline-block;
          }
          .video-galleryroot-class-name {
            margin-top: 0px;
          }
          .video-galleryroot-class-name1 {
            align-self: center;
          }
          @media (max-width: 1200px) {
            .video-gallery-max-width {
              gap: 0;
              justify-content: space-between;
            }
            .video-gallery-content {
              width: 45%;
            }
            .video-gallery-container5 {
              width: 45%;
            }
            .video-gallery-video {
              width: 100%;
              height: auto;
            }
          }
          @media (max-width: 991px) {
            .video-gallery-max-width {
              flex-direction: column;
            }
            .video-gallery-content {
              width: 100%;
              align-self: center;
              align-items: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              justify-content: center;
            }
            .video-gallery-avatar {
              gap: 0;
              width: 100%;
              justify-content: space-between;
            }
            .video-gallery-container5 {
              width: 100%;
            }
            .video-gallery-video {
              height: auto;
              transform: scale(0.9);
            }
          }
          @media (max-width: 599px) {
            .video-gallery-content {
              padding-left: 0px;
              padding-right: 0px;
            }
            .video-gallery-actions {
              align-self: center;
            }
            .video-gallery-icon20 {
              fill: #00ff38;
              color: #00ff38;
            }
            .video-gallery-video {
              height: auto;
              transform: scale(1);
            }
          }
          @media (max-width: 490px) {
            .video-gallery-video {
              transform: scale(1);
            }
          }
          @media (max-width: 479px) {
            .video-gallery-actions {
              width: 100%;
              flex-wrap: wrap;
              margin-top: var(--dl-space-space-unit);
            }
            .video-gallery-text12 {
              text-align: center;
            }
            .video-gallery-text13 {
              text-align: center;
            }
            .video-gallery-avatar {
              flex-direction: column;
            }
            .video-gallery-avatar-content {
              align-items: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

VideoGallery.defaultProps = {
  author1Name: undefined,
  rootClassName: '',
  review11: undefined,
  company1LogoAlt: 'Marigold Banquet Hall Logo',
  author1Position: undefined,
  review1: undefined,
  action23: undefined,
  text21011: undefined,
  videoSrc:
    'https://lh3.googleusercontent.com/p/AF1QipNdsFSNysuVAA8K0LKl1H0i7CqKeEsD5BMd6IAm=mm,37,22,18',
}

VideoGallery.propTypes = {
  author1Name: PropTypes.element,
  rootClassName: PropTypes.string,
  review11: PropTypes.element,
  company1LogoAlt: PropTypes.string,
  author1Position: PropTypes.element,
  review1: PropTypes.element,
  action23: PropTypes.element,
  text21011: PropTypes.element,
  videoSrc: PropTypes.string,
}

export default VideoGallery
