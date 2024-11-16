import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import BrandLogo from './brand-logo'

const HeroBrandWall2 = (props) => {
  return (
    <>
      <div
        className={`hero-brand-wall-2-column thq-section-padding ${props.rootClassName} `}
      >
        <div
          data-thq="slider"
          data-loop="true"
          data-autoplay="true"
          data-navigation="false"
          data-pagination="false"
          data-pause-autoplay-on-mouse-enter="true"
          className="hero-brand-wall-2-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="hero-brand-wall-2-slider-slide1 swiper-slide"
            >
              <div className="hero-brand-wall-2-black-half-cover1">
                <div className="hero-brand-wall-2-content1">
                  <BrandLogo rootClassName="brand-logoroot-class-name4"></BrandLogo>
                  <div className="hero-brand-wall-2-container1">
                    <h1
                      id="Banquet Hall &amp; Big Events Services in Hingna, Nagpur"
                      className="hero-brand-wall-2-text10"
                    >
                      {props.heading1 ?? (
                        <Fragment>
                          <span className="hero-brand-wall-2-text26">
                            Banquet Hall &amp; Big Events Services in Hingna,
                            Nagpur
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
                        className="hero-brand-wall-2-text11 UbuntuLight-14"
                      >
                        &quot;Celebrate Life’s Special Moments at Marigold
                        Banquet Hall. Perfect Weddings, Grand Events, and
                        unforgettable Memories await in our Elegant, Spacious
                        Venue.&quot;
                      </p>
                    </animate-on-reveal>
                  </div>
                  <div className="hero-brand-wall-2-actions1">
                    <button className="hero-brand-wall-2-button1 thq-button-filled">
                      <span className="thq-body-small">
                        {props.action1 ?? (
                          <Fragment>
                            <span className="hero-brand-wall-2-text24">
                              Shop Now
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                    <button className="hero-brand-wall-2-button2 thq-button-outline menu">
                      <span className="hero-brand-wall-2-text13">
                        {props.action2 ?? (
                          <Fragment>
                            <span className="hero-brand-wall-2-text22">
                              Services
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                  </div>
                  <div className="hero-brand-wall-2-actions2 thq-flex-row">
                    <button className="hero-brand-wall-2-button3 menu">
                      <Link href="/facilities-at-marigold-celebration">
                        <a className="hero-brand-wall-2-link1 thq-button-outline">
                          {props.action21 ?? (
                            <Fragment>
                              <span className="hero-brand-wall-2-text25">
                                Explore Our Facilities
                              </span>
                            </Fragment>
                          )}
                        </a>
                      </Link>
                    </button>
                  </div>
                  <Link href="/facilities-at-marigold-celebration">
                    <a className="hero-brand-wall-2-link2">
                      <div className="hero-brand-wall-2-container2">
                        <span className="hero-brand-wall-2-text15">
                          {props.text21011 ?? (
                            <Fragment>
                              <span className="hero-brand-wall-2-text23">
                                Explore Facilities
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 48 48"
                          className="hero-brand-wall-2-icon1"
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
            </div>
            <div
              data-thq="slider-slide"
              className="hero-brand-wall-2-slider-slide2 swiper-slide"
            >
              <div className="hero-brand-wall-2-black-half-cover2">
                <div className="hero-brand-wall-2-content2">
                  <BrandLogo rootClassName="brand-logoroot-class-name6"></BrandLogo>
                  <div className="hero-brand-wall-2-container3">
                    <h1
                      id="Banquet Hall &amp; Big Events Services in Hingna, Nagpur"
                      className="hero-brand-wall-2-text16"
                    >
                      {props.heading12 ?? (
                        <Fragment>
                          <span className="hero-brand-wall-2-text27">
                            Banquet Hall &amp; Big Events Services in Hingna,
                            Nagpur
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
                        className="hero-brand-wall-2-text17 UbuntuLight-14"
                      >
                        &quot;Celebrate Life’s Special Moments at Marigold
                        Banquet Hall. Perfect Weddings, Grand Events, and
                        unforgettable Memories await in our Elegant, Spacious
                        Venue.&quot;
                      </p>
                    </animate-on-reveal>
                  </div>
                  <div className="hero-brand-wall-2-actions3">
                    <button className="hero-brand-wall-2-button4 thq-button-filled">
                      <span className="thq-body-small">
                        {props.action12 ?? (
                          <Fragment>
                            <span className="hero-brand-wall-2-text29">
                              Shop Now
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                    <button className="hero-brand-wall-2-button5 thq-button-outline menu">
                      <span className="hero-brand-wall-2-text19">
                        {props.action23 ?? (
                          <Fragment>
                            <span className="hero-brand-wall-2-text30">
                              Services
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                  </div>
                  <div className="hero-brand-wall-2-actions4 thq-flex-row">
                    <button className="hero-brand-wall-2-button6 menu">
                      <Link href="/facilities-at-marigold-celebration">
                        <a className="hero-brand-wall-2-link3 thq-button-outline">
                          {props.action212 ?? (
                            <Fragment>
                              <span className="hero-brand-wall-2-text31">
                                Explore Our Facilities
                              </span>
                            </Fragment>
                          )}
                        </a>
                      </Link>
                    </button>
                  </div>
                  <Link href="/facilities-at-marigold-celebration">
                    <a className="hero-brand-wall-2-link4">
                      <div className="hero-brand-wall-2-container4">
                        <span className="hero-brand-wall-2-text21">
                          {props.text210112 ?? (
                            <Fragment>
                              <span className="hero-brand-wall-2-text28">
                                Explore Facilities
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 48 48"
                          className="hero-brand-wall-2-icon3"
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
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="hero-brand-wall-2-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="hero-brand-wall-2-slider-button-prev swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="hero-brand-wall-2-slider-button-next swiper-button-next"
          ></div>
        </div>
      </div>
      <style jsx>
        {`
          .hero-brand-wall-2-column {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 40%;
            display: flex;
            padding: 0px;
            position: relative;
            align-self: stretch;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
            justify-content: flex-end;
          }
          .hero-brand-wall-2-slider {
            width: 100%;
            height: 100%;
            display: inline-block;
          }
          .hero-brand-wall-2-slider-slide1 {
            display: flex;
            position: relative;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
            background-size: cover;
            justify-content: flex-end;
            background-image: url('/images/Marigold Images/banquet%20hall%20-final%20%20day%20view-hero-1stpart-1500w.webp');
            background-position: right;
          }
          .hero-brand-wall-2-black-half-cover1 {
            width: 100%;
            height: 30%;
            display: flex;
            align-self: center;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
            backdrop-filter: blur(2px);
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.5);
            border-top-left-radius: var(--dl-radius-radius-buttonradius);
            border-top-right-radius: var(--dl-radius-radius-buttonradius);
          }
          .hero-brand-wall-2-content1 {
            gap: var(--dl-space-space-halfunit);
            width: 95%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .hero-brand-wall-2-container1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: center;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
          }
          .hero-brand-wall-2-text10 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-buttonradius);
            padding-right: var(--dl-space-space-halfunit);
            text-transform: none;
            text-decoration: none;
          }
          .hero-brand-wall-2-text11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-style: normal;
            text-align: center;
            border-radius: var(--dl-radius-radius-radius10);
          }
          .hero-brand-wall-2-actions1 {
            gap: var(--dl-space-space-unit);
            width: 55%;
            display: flex;
            flex-wrap: wrap;
            align-self: center;
            align-items: flex-start;
          }
          .hero-brand-wall-2-button1 {
            flex: 1;
            display: none;
          }
          .hero-brand-wall-2-button2 {
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
          .hero-brand-wall-2-button2:hover {
            transform: scale(1);
            box-shadow: 3px 3px 25px 1px rgba(15, 0, 255, 0.25);
            background-color: rgba(71, 60, 245, 0.21);
          }
          .hero-brand-wall-2-text13 {
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
          .hero-brand-wall-2-text13:hover {
            transform: scale(1);
          }
          .hero-brand-wall-2-actions2 {
            display: none;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .hero-brand-wall-2-button3 {
            fill: transparent;
            flex: 1;
            color: transparent;
            transform: scale(0.99);
            border-width: 0px;
          }
          .hero-brand-wall-2-link1 {
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
          .hero-brand-wall-2-link1:hover {
            transform: scale(1);
            box-shadow: 3px 3px 25px 1px rgba(50, 0, 255, 0.41);
            border-style: dotted;
            border-width: 0.5px;
            background-color: rgba(13, 7, 247, 0.2);
          }
          .hero-brand-wall-2-link2 {
            display: contents;
          }
          .hero-brand-wall-2-container2 {
            gap: var(--dl-space-space-halfunit);
            width: auto;
            display: flex;
            align-self: center;
            box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.4);
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
          .hero-brand-wall-2-container2:hover {
            box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.48);
            border-color: var(--dl-color-primary-logo-color-1);
          }
          .hero-brand-wall-2-text15 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 12px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 200;
            line-height: 1.8;
          }
          .hero-brand-wall-2-icon1 {
            fill: #00ff38;
            color: #00ff38;
          }
          .hero-brand-wall-2-slider-slide2 {
            display: flex;
            align-items: flex-end;
            border-radius: var(--dl-radius-radius-radius10);
            background-size: cover;
            justify-content: center;
            background-image: url('/images/Marigold Images/banquet%20hall%20-final%20%20day%20view-hero-2ndpart-1500w.webp');
            background-position: right;
          }
          .hero-brand-wall-2-black-half-cover2 {
            width: 100%;
            height: 30%;
            display: flex;
            align-self: flex-end;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
            backdrop-filter: blur(2px);
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.5);
            border-top-left-radius: var(--dl-radius-radius-buttonradius);
            border-top-right-radius: var(--dl-radius-radius-buttonradius);
          }
          .hero-brand-wall-2-content2 {
            gap: var(--dl-space-space-halfunit);
            width: 95%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .hero-brand-wall-2-container3 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: center;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
          }
          .hero-brand-wall-2-text16 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-buttonradius);
            padding-right: var(--dl-space-space-halfunit);
            text-transform: none;
            text-decoration: none;
          }
          .hero-brand-wall-2-text17 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-style: normal;
            text-align: center;
            border-radius: var(--dl-radius-radius-radius10);
          }
          .hero-brand-wall-2-actions3 {
            gap: var(--dl-space-space-unit);
            width: 55%;
            display: flex;
            flex-wrap: wrap;
            align-self: center;
            align-items: flex-start;
          }
          .hero-brand-wall-2-button4 {
            flex: 1;
            display: none;
          }
          .hero-brand-wall-2-button5 {
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
          .hero-brand-wall-2-button5:hover {
            transform: scale(1);
            box-shadow: 3px 3px 25px 1px rgba(15, 0, 255, 0.25);
            background-color: rgba(71, 60, 245, 0.21);
          }
          .hero-brand-wall-2-text19 {
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
          .hero-brand-wall-2-text19:hover {
            transform: scale(1);
          }
          .hero-brand-wall-2-actions4 {
            display: none;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .hero-brand-wall-2-button6 {
            fill: transparent;
            flex: 1;
            color: transparent;
            transform: scale(0.99);
            border-width: 0px;
          }
          .hero-brand-wall-2-link3 {
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
          .hero-brand-wall-2-link3:hover {
            transform: scale(1);
            box-shadow: 3px 3px 25px 1px rgba(50, 0, 255, 0.41);
            border-style: dotted;
            border-width: 0.5px;
            background-color: rgba(13, 7, 247, 0.2);
          }
          .hero-brand-wall-2-link4 {
            display: contents;
          }
          .hero-brand-wall-2-container4 {
            gap: var(--dl-space-space-halfunit);
            width: auto;
            display: flex;
            align-self: center;
            box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.4);
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
          .hero-brand-wall-2-container4:hover {
            box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.48);
            border-color: var(--dl-color-primary-logo-color-1);
          }
          .hero-brand-wall-2-text21 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 12px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 200;
            line-height: 1.8;
          }
          .hero-brand-wall-2-icon3 {
            fill: #00ff38;
            color: #00ff38;
          }
          .hero-brand-wall-2-slider-pagination {
            display: none;
          }
          .hero-brand-wall-2-slider-button-prev {
            display: none;
          }
          .hero-brand-wall-2-slider-button-next {
            display: none;
          }
          .hero-brand-wall-2-text22 {
            display: inline-block;
          }
          .hero-brand-wall-2-text23 {
            display: inline-block;
          }
          .hero-brand-wall-2-text24 {
            display: inline-block;
          }
          .hero-brand-wall-2-text25 {
            display: inline-block;
          }
          .hero-brand-wall-2-text26 {
            display: inline-block;
          }
          .hero-brand-wall-2-text27 {
            display: inline-block;
          }
          .hero-brand-wall-2-text28 {
            display: inline-block;
          }
          .hero-brand-wall-2-text29 {
            display: inline-block;
          }
          .hero-brand-wall-2-text30 {
            display: inline-block;
          }
          .hero-brand-wall-2-text31 {
            display: inline-block;
          }

          @media (max-width: 1200px) {
            .hero-brand-wall-2-container1 {
              align-self: center;
            }
            .hero-brand-wall-2-slider-slide2 {
              background-size: cover;
              background-position: top left;
            }
            .hero-brand-wall-2-container3 {
              align-self: center;
            }
          }
          @media (max-width: 991px) {
            .hero-brand-wall-2-column {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              max-height: 600px;
            }
            .hero-brand-wall-2-slider-slide1 {
              background-size: cover;
              background-position: right;
            }
            .hero-brand-wall-2-black-half-cover1 {
              height: 40%;
            }
            .hero-brand-wall-2-content1 {
              align-items: center;
            }
            .hero-brand-wall-2-actions1 {
              width: 35%;
            }
            .hero-brand-wall-2-black-half-cover2 {
              height: 40%;
            }
            .hero-brand-wall-2-content2 {
              align-items: center;
            }
            .hero-brand-wall-2-actions3 {
              width: 35%;
            }
            .hero-brand-wall-2root-class-name {
              height: 600px;
            }
          }
          @media (max-width: 767px) {
            .hero-brand-wall-2-actions1 {
              width: 100%;
              justify-content: center;
            }
            .hero-brand-wall-2-actions3 {
              width: 100%;
              justify-content: center;
            }
          }
          @media (max-width: 599px) {
            .hero-brand-wall-2-column {
              padding: 0px;
              max-height: 450px;
            }
            .hero-brand-wall-2-black-half-cover1 {
              height: 45%;
            }
            .hero-brand-wall-2-content1 {
              left: 31px;
              bottom: 58px;
            }
            .hero-brand-wall-2-text10 {
              font-size: 14px;
              font-family: Ubuntu;
            }
            .hero-brand-wall-2-icon1 {
              fill: #00ff38;
              color: #00ff38;
            }
            .hero-brand-wall-2-black-half-cover2 {
              height: 45%;
            }
            .hero-brand-wall-2-content2 {
              left: 31px;
              bottom: 58px;
            }
            .hero-brand-wall-2-text16 {
              font-size: 14px;
              font-family: Ubuntu;
            }
            .hero-brand-wall-2-icon3 {
              fill: #00ff38;
              color: #00ff38;
            }
            .hero-brand-wall-2root-class-name {
              height: 450px;
            }
          }
          @media (max-width: 479px) {
            .hero-brand-wall-2-column {
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .hero-brand-wall-2-actions1 {
              flex-direction: column;
            }
            .hero-brand-wall-2-button1 {
              width: 100%;
            }
            .hero-brand-wall-2-actions2 {
              width: 100%;
              flex-wrap: wrap;
              margin-top: var(--dl-space-space-unit);
            }
            .hero-brand-wall-2-actions3 {
              flex-direction: column;
            }
            .hero-brand-wall-2-button4 {
              width: 100%;
            }
            .hero-brand-wall-2-actions4 {
              width: 100%;
              flex-wrap: wrap;
              margin-top: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 399px) {
            .hero-brand-wall-2-column {
              padding: 0px;
              background-position: bottom, bottom, top lefttop;
            }
            .hero-brand-wall-2-black-half-cover1 {
              height: 50%;
            }
            .hero-brand-wall-2-content1 {
              left: 15px;
              bottom: 97px;
            }
            .hero-brand-wall-2-black-half-cover2 {
              height: 50%;
            }
            .hero-brand-wall-2-content2 {
              left: 15px;
              bottom: 97px;
            }
          }
        `}
      </style>
    </>
  )
}

HeroBrandWall2.defaultProps = {
  rootClassName: '',
  action2: undefined,
  text21011: undefined,
  action1: undefined,
  action21: undefined,
  heading1: undefined,
  heading12: undefined,
  text210112: undefined,
  action12: undefined,
  action23: undefined,
  action212: undefined,
}

HeroBrandWall2.propTypes = {
  rootClassName: PropTypes.string,
  action2: PropTypes.element,
  text21011: PropTypes.element,
  action1: PropTypes.element,
  action21: PropTypes.element,
  heading1: PropTypes.element,
  heading12: PropTypes.element,
  text210112: PropTypes.element,
  action12: PropTypes.element,
  action23: PropTypes.element,
  action212: PropTypes.element,
}

export default HeroBrandWall2
