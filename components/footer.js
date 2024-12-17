import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import BrandLogo from './brand-logo'

const Footer = (props) => {
  return (
    <>
      <footer
        id="footer"
        className={`footer-footer1 thq-section-padding ${props.rootClassName} `}
      >
        <div className="footer-max-width thq-section-max-width">
          <div className="footer-content">
            <div className="footer-footer-content">
              <BrandLogo rootClassName="brand-logoroot-class-name3"></BrandLogo>
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="footer-image"
              />
              <p className="footer-content1">
                &quot;Celebrate Life’s Special Moments at Marigold Banquet Hall.
                Perfect Weddings, Grand Events, and unforgettable Memories await
                in our Elegant, Spacious Venue.&quot;
              </p>
              <div className="footer-actions">
                <p className="footer-content2 thq-body-small">
                  {props.content2 ?? (
                    <Fragment>
                      <span className="footer-text30">
                        We warmly invite you to visit and explore Marigold
                        Banquet Hall. It would be our pleasure to assist you
                        with your event planning needs and show you everything
                        we have to offer!
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="footer-links">
              <div className="footer-column1">
                <strong className="footer-column1-title">
                  {props.column1Title ?? (
                    <Fragment>
                      <span className="footer-text13">Contact Us</span>
                    </Fragment>
                  )}
                </strong>
                <div className="footer-footer-links1">
                  <a
                    href="https://marigoldcelebration.in"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link1"
                  >
                    {props.link1 ?? (
                      <Fragment>
                        <span className="footer-text24">Home</span>
                      </Fragment>
                    )}
                  </a>
                  <Link href="/facilities-at-marigold-celebration">
                    <a className="footer-link14">
                      {props.link2 ?? (
                        <Fragment>
                          <span className="footer-text15">Facilities</span>
                        </Fragment>
                      )}
                    </a>
                  </Link>
                  <Link href="/gallery">
                    <a className="footer-link15">
                      {props.link3 ?? (
                        <Fragment>
                          <span className="footer-text29">Gallery</span>
                        </Fragment>
                      )}
                    </a>
                  </Link>
                  <Link href="/events">
                    <a className="footer-link16">
                      {props.link4 ?? (
                        <Fragment>
                          <span className="footer-text12">Events</span>
                        </Fragment>
                      )}
                    </a>
                  </Link>
                  <Link href="/contacts">
                    <a className="footer-link17">
                      {props.link5 ?? (
                        <Fragment>
                          <span className="footer-text19">Contacts</span>
                        </Fragment>
                      )}
                    </a>
                  </Link>
                </div>
              </div>
              <div className="footer-column2">
                <strong className="footer-column2-title">
                  {props.column2Title ?? (
                    <Fragment>
                      <span className="footer-text27">Services</span>
                    </Fragment>
                  )}
                </strong>
                <div className="footer-footer-links2">
                  <a
                    href="https://marigoldcelebration.in"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link6"
                  >
                    {props.link6 ?? (
                      <Fragment>
                        <span className="footer-text17">Corporate Events</span>
                      </Fragment>
                    )}
                  </a>
                  <a
                    href="https://marigoldcelebration.in"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link7"
                  >
                    {props.link7 ?? (
                      <Fragment>
                        <span className="footer-text28">
                          Weddings Plannings
                        </span>
                      </Fragment>
                    )}
                  </a>
                  <a
                    href="https://marigoldcelebration.in"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link8"
                  >
                    {props.link8 ?? (
                      <Fragment>
                        <span className="footer-text20">
                          <span>Events Management</span>
                          <br></br>
                        </span>
                      </Fragment>
                    )}
                  </a>
                  <a
                    href="https://marigoldcelebration.in"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link9"
                  >
                    {props.link9 ?? (
                      <Fragment>
                        <span className="footer-text25">Special Occasions</span>
                      </Fragment>
                    )}
                  </a>
                  <a
                    href="https://marigoldcelebration.in"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link10"
                  >
                    {props.link10 ?? (
                      <Fragment>
                        <span className="footer-text16">Book Now</span>
                      </Fragment>
                    )}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-credits">
            <div className="footer-divider thq-divider-horizontal"></div>
            <div className="footer-row">
              <span className="footer-content3">
                {props.content3 ?? (
                  <Fragment>
                    <span className="footer-text11">MariGold Celebration</span>
                  </Fragment>
                )}
              </span>
              <div className="footer-footer-links3">
                <div className="footer-container1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="footer-icon1"
                  >
                    <g
                      fill="none"
                      color="currentColor"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M11.47 22c-3.992 0-5.989 0-7.23-1.172C3 19.657 3 17.771 3 14v-4c0-3.771 0-5.657 1.24-6.828C5.481 2 7.478 2 11.47 2h1.06c3.993 0 5.989 0 7.23 1.172C21 4.343 21 6.229 21 10m-9.5 12H13M8 7h8m-8 5h5"></path>
                      <path d="m17.5 18.59l-.902 3.153a.2.2 0 0 0 .268.235l1.985-.793a.4.4 0 0 1 .298 0l2.004.8a.2.2 0 0 0 .27-.226l-.764-3.268M22 15.995A3 3 0 0 0 19 13c-1.657 0-3 1.341-3 2.995a2.997 2.997 0 0 0 3 2.995c1.657 0 3-1.34 3-2.995"></path>
                    </g>
                  </svg>
                  <span className="footer-mob-link12">
                    {props.termsLink1 ?? (
                      <Fragment>
                        <span className="footer-text14">T &amp; C</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="footer-container2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    className="footer-icon5"
                  >
                    <path
                      d="M6 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-6 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3-12a8 8 0 1 0 7.87 6.56a.5.5 0 0 0-.867-.24A2 2 0 0 1 13.5 7a.56.56 0 0 0-.44-.548a2 2 0 0 1-.954-3.386a.5.5 0 0 0-.232-.845A8 8 0 0 0 10 2m-7 8a7 7 0 0 1 7.871-6.946a3 3 0 0 0 1.647 4.282a3 3 0 0 0 4.471 2.269q.01.195.011.395a7 7 0 1 1-14 0"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className="footer-mob-link13">
                    {props.cookiesLink1 ?? (
                      <Fragment>
                        <span className="footer-text26">C &amp; P</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <span className="footer-link11">
                  {props.privacyLink ?? (
                    <Fragment>
                      <span className="footer-text31">privacy policy.</span>
                    </Fragment>
                  )}
                </span>
                <span className="footer-link12">
                  {props.termsLink ?? (
                    <Fragment>
                      <span className="footer-text18">
                        terms &amp; conditions.
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="footer-link13">
                  {props.cookiesLink ?? (
                    <Fragment>
                      <span className="footer-text23">cookie policy.</span>
                    </Fragment>
                  )}
                </span>
                <div className="footer-container3">
                  <span className="footer-mob-link11">
                    {props.privacyLink1 ?? (
                      <Fragment>
                        <span className="footer-text10">P P</span>
                      </Fragment>
                    )}
                  </span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="footer-icon7"
                  >
                    <path
                      d="M30 15a6 6 0 1 0-10 4.46V29l4-1.884L28 29v-9.54A5.98 5.98 0 0 0 30 15m-4 10.848l-2-.942l-2 .942V20.65a5.9 5.9 0 0 0 4 0ZM24 19a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M14 2a6.007 6.007 0 0 0-6 6v6H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11v-2H6V16h9v-2h-5V8a4 4 0 0 1 7.92-.8l1.96-.4A6.02 6.02 0 0 0 14 2"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer-footer1 {
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.83);
          }
          .footer-max-width {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-size: contain;
            background-image: url('/images/circle-background.svg');
            background-repeat: repeat;
            background-position: top left;
          }
          .footer-content {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .footer-footer-content {
            gap: var(--dl-space-space-unit);
            width: 40%;
            display: flex;
            align-self: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .footer-image {
            width: 50px;
            display: none;
            object-fit: cover;
          }
          .footer-content1 {
            fill: var(--dl-color-primary-logo-color-3);
            color: var(--dl-color-primary-logo-color-3);
            font-size: 12px;
            text-align: center;
          }
          .footer-actions {
            gap: 16px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .footer-content2 {
            fill: var(--dl-color-primary-logo-color-2);
            color: var(--dl-color-primary-logo-color-2);
            font-size: 12px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.2;
            text-decoration: none;
          }
          .footer-links {
            width: 60%;
            display: flex;
            flex-grow: 1;
            align-self: center;
            justify-content: flex-start;
          }
          .footer-column1 {
            gap: var(--dl-space-space-unit);
            width: 30%;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .footer-column1-title {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 1.4;
            text-transform: capitalize;
            text-decoration: none;
          }
          .footer-footer-links1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-link1 {
            fill: var(--dl-color-primary-logo-color-2);
            color: var(--dl-color-primary-logo-color-2);
            font-size: 12px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
            text-transform: capitalize;
            text-decoration: none;
          }
          .footer-link14 {
            fill: var(--dl-color-primary-logo-color-2);
            color: var(--dl-color-primary-logo-color-2);
            font-size: 12px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
            text-transform: capitalize;
            text-decoration: none;
          }
          .footer-link15 {
            fill: var(--dl-color-primary-logo-color-2);
            color: var(--dl-color-primary-logo-color-2);
            font-size: 12px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
            text-transform: capitalize;
            text-decoration: none;
          }
          .footer-link16 {
            fill: var(--dl-color-primary-logo-color-2);
            color: var(--dl-color-primary-logo-color-2);
            font-size: 12px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
            text-transform: capitalize;
            text-decoration: none;
          }
          .footer-link17 {
            fill: var(--dl-color-primary-logo-color-2);
            color: var(--dl-color-primary-logo-color-2);
            font-size: 12px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
            text-transform: capitalize;
            text-decoration: none;
          }
          .footer-column2 {
            gap: var(--dl-space-space-unit);
            width: 70%;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .footer-column2-title {
            color: var(--dl-color-primary-logo-color-1);
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 1.4;
            text-transform: capitalize;
            text-decoration: none;
          }
          .footer-footer-links2 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-link6 {
            fill: var(--dl-color-primary-logo-color-2);
            color: var(--dl-color-primary-logo-color-2);
            font-size: 12px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
            text-transform: capitalize;
            text-decoration: none;
          }
          .footer-link7 {
            fill: var(--dl-color-primary-logo-color-2);
            color: var(--dl-color-primary-logo-color-2);
            font-size: 12px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
            text-transform: capitalize;
            text-decoration: none;
          }
          .footer-link8 {
            fill: var(--dl-color-primary-logo-color-2);
            color: var(--dl-color-primary-logo-color-2);
            font-size: 12px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
            text-transform: capitalize;
            text-decoration: none;
          }
          .footer-link9 {
            fill: var(--dl-color-primary-logo-color-2);
            color: var(--dl-color-primary-logo-color-2);
            font-size: 12px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
            text-transform: capitalize;
            text-decoration: none;
          }
          .footer-link10 {
            fill: var(--dl-color-primary-logo-color-2);
            color: var(--dl-color-primary-logo-color-2);
            font-size: 12px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
            text-transform: capitalize;
            text-decoration: none;
          }
          .footer-credits {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-divider {
            background-color: var(--dl-color-primary-logo-color-3);
          }
          .footer-row {
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: space-between;
          }
          .footer-content3 {
            fill: var(--dl-color-primary-logo-color-2);
            color: var(--dl-color-primary-logo-color-2);
            font-size: 12px;
            font-style: italic;
            font-weight: 300;
            line-height: 1.2;
            text-transform: none;
            text-decoration: none;
          }
          .footer-footer-links3 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: flex-start;
          }
          .footer-container1 {
            display: none;
            align-items: flex-start;
          }
          .footer-mob-link12 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 8px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 300;
            line-height: 1.4;
            padding-top: 1px;
            border-color: var(--dl-color-primary-logo-color-4);
            border-width: 1px;
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-buttonradius);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: 1px;
            text-transform: capitalize;
            text-decoration: none;
            background-color: rgba(245, 184, 60, 0.12);
          }
          .footer-container2 {
            display: none;
            align-items: flex-start;
          }
          .footer-mob-link13 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 8px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 300;
            line-height: 1.5;
            padding-top: 1px;
            border-color: var(--dl-color-primary-logo-color-4);
            border-width: 1px;
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-buttonradius);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: 1px;
            text-transform: capitalize;
            text-decoration: none;
            background-color: rgba(245, 184, 60, 0.12);
          }
          .footer-link11 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 8px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 2;
            padding-top: 1px;
            border-color: var(--dl-color-primary-logo-color-4);
            border-width: 1px;
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-buttonradius);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: 1px;
            text-transform: capitalize;
            text-decoration: none;
            background-color: rgba(245, 184, 60, 0.12);
          }
          .footer-link12 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 8px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 2;
            padding-top: 1px;
            border-color: var(--dl-color-primary-logo-color-4);
            border-width: 1px;
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-buttonradius);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: 1px;
            text-transform: capitalize;
            text-decoration: none;
            background-color: rgba(245, 184, 60, 0.12);
          }
          .footer-link13 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 8px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 2;
            padding-top: 1px;
            border-color: var(--dl-color-primary-logo-color-4);
            border-width: 1px;
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-buttonradius);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: 1px;
            text-transform: capitalize;
            text-decoration: none;
            background-color: rgba(245, 184, 60, 0.12);
          }
          .footer-container3 {
            gap: var(--dl-space-space-halfunit);
            display: none;
            align-items: center;
          }
          .footer-mob-link11 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            width: 14px;
            height: 14px;
            font-size: 8px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 300;
            line-height: 1.8;
            text-transform: capitalize;
            text-decoration: none;
            background-color: rgba(245, 184, 60, 0.12);
          }
          .footer-icon7 {
            width: 14px;
            height: 14px;
          }
          .footer-text10 {
            display: inline-block;
          }
          .footer-text11 {
            display: inline-block;
          }
          .footer-text12 {
            display: inline-block;
          }
          .footer-text13 {
            display: inline-block;
          }
          .footer-text14 {
            display: inline-block;
          }
          .footer-text15 {
            display: inline-block;
          }
          .footer-text16 {
            display: inline-block;
          }
          .footer-text17 {
            display: inline-block;
          }
          .footer-text18 {
            display: inline-block;
          }
          .footer-text19 {
            display: inline-block;
          }
          .footer-text20 {
            display: inline-block;
          }
          .footer-text23 {
            display: inline-block;
          }
          .footer-text24 {
            display: inline-block;
          }
          .footer-text25 {
            display: inline-block;
          }
          .footer-text26 {
            display: inline-block;
          }
          .footer-text27 {
            display: inline-block;
          }
          .footer-text28 {
            display: inline-block;
          }
          .footer-text29 {
            display: inline-block;
          }
          .footer-text30 {
            display: inline-block;
          }
          .footer-text31 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .footer-footer-content {
              width: 300px;
            }
            .footer-content1 {
              text-align: center;
            }
            .footer-content2 {
              text-align: center;
            }
            .footer-link11 {
              line-height: 2;
            }
            .footer-link12 {
              line-height: 2;
            }
            .footer-link13 {
              line-height: 2;
            }
          }
          @media (max-width: 767px) {
            .footer-content {
              flex-direction: column;
            }
            .footer-footer-content {
              width: 100%;
            }
            .footer-links {
              width: 100%;
              align-items: flex-start;
              justify-content: center;
            }
            .footer-column1 {
              align-items: center;
            }
            .footer-footer-links1 {
              align-self: center;
            }
            .footer-column2 {
              align-items: center;
            }
            .footer-footer-links2 {
              align-self: center;
            }
            .footer-row {
              gap: var(--dl-space-space-unit);
              flex-direction: column;
              justify-content: flex-start;
            }
          }
          @media (max-width: 599px) {
            .footer-footer1 {
              padding: var(--dl-space-space-unit);
            }
            .footer-content {
              align-items: center;
            }
            .footer-footer-content {
              width: 100%;
              align-items: center;
              flex-direction: column;
            }
            .footer-image {
              width: 50px;
              display: flex;
            }
            .footer-actions {
              align-items: center;
            }
            .footer-links {
              display: none;
            }
            .footer-column1 {
              width: auto;
            }
            .footer-row {
              align-self: stretch;
              flex-direction: row;
              justify-content: flex-start;
            }
            .footer-content3 {
              font-size: 12px;
              font-style: normal;
              font-family: Ubuntu;
              font-weight: 300;
              line-height: 1.6;
            }
            .footer-footer-links3 {
              display: none;
              align-self: stretch;
              align-items: center;
              flex-direction: row;
              justify-content: center;
            }
            .footer-container1 {
              gap: var(--dl-space-space-halfunit);
              display: flex;
              align-items: center;
              flex-direction: row-reverse;
              justify-content: center;
            }
            .footer-icon1 {
              fill: var(--dl-color-primary-logo-color-2);
              color: var(--dl-color-primary-logo-color-2);
              width: 14px;
              height: 14px;
              display: flex;
              align-self: center;
            }
            .footer-mob-link12 {
              display: flex;
              font-size: 8px;
              font-style: normal;
              font-family: Ubuntu;
              font-weight: 300;
              line-height: 2;
              padding-top: 0px;
              border-width: 0px;
              padding-left: 4px;
              padding-right: 0px;
              padding-bottom: 0px;
              background-color: transparent;
            }
            .footer-container2 {
              gap: var(--dl-space-space-halfunit);
              display: flex;
              align-items: center;
              flex-direction: row-reverse;
              justify-content: center;
            }
            .footer-icon5 {
              fill: var(--dl-color-primary-logo-color-2);
              color: var(--dl-color-primary-logo-color-2);
              width: 14px;
              height: 14px;
              display: flex;
            }
            .footer-mob-link13 {
              color: var(--dl-color-primary-logo-color-1);
              display: flex;
              font-size: 8px;
              font-style: normal;
              font-family: Ubuntu;
              font-weight: 300;
              line-height: 2;
              padding-top: 0px;
              border-width: 0px;
              padding-left: 4px;
              padding-right: 0px;
              padding-bottom: 0px;
              text-transform: capitalize;
              text-decoration: none;
              background-color: transparent;
            }
            .footer-link11 {
              display: none;
              font-size: 9px;
              font-family: Poppins;
            }
            .footer-link12 {
              display: none;
              font-size: 9px;
              font-family: Poppins;
            }
            .footer-link13 {
              display: none;
              font-size: 9px;
              font-family: Poppins;
            }
            .footer-container3 {
              display: flex;
            }
            .footer-mob-link11 {
              gap: 1px;
              color: var(--dl-color-primary-logo-color-1);
              width: 14px;
              height: 14px;
              display: flex;
              font-size: 8px;
              font-style: normal;
              font-family: Ubuntu;
              font-weight: 300;
              line-height: 2;
              padding-top: 0px;
              border-width: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
              text-transform: capitalize;
              justify-content: space-between;
              text-decoration: none;
              background-color: transparent;
            }
            .footer-icon7 {
              fill: var(--dl-color-primary-logo-color-1);
              color: var(--dl-color-primary-logo-color-1);
              width: 14px;
              height: 14px;
              display: flex;
              align-self: center;
            }
          }
          @media (max-width: 490px) {
            .footer-content1 {
              text-align: center;
            }
            .footer-content2 {
              text-align: center;
            }
            .footer-row {
              align-items: center;
              justify-content: flex-start;
            }
            .footer-content3 {
              font-size: 10px;
            }
            .footer-footer-links3 {
              gap: var(--dl-space-space-halfunit);
              width: auto;
              flex-direction: row;
            }
          }
          @media (max-width: 479px) {
            .footer-actions {
              width: 100%;
            }
            .footer-links {
              flex-direction: column;
            }
            .footer-column1 {
              width: 100%;
              max-width: 100%;
              align-items: center;
              justify-content: center;
            }
            .footer-footer-links1 {
              align-items: center;
              justify-content: center;
            }
            .footer-column2 {
              width: 100%;
              max-width: 100%;
              align-items: center;
              justify-content: center;
            }
            .footer-footer-links2 {
              align-items: center;
              justify-content: center;
            }
            .footer-credits {
              gap: var(--dl-space-space-unit);
            }
            .footer-row {
              align-items: center;
              justify-content: center;
            }
            .footer-footer-links3 {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  privacyLink1: undefined,
  imageSrc: '/images/marigold-logo1.svg',
  rootClassName: '',
  content3: undefined,
  link4: undefined,
  column1Title: undefined,
  termsLink1: undefined,
  link2: undefined,
  link10: undefined,
  link6: undefined,
  termsLink: undefined,
  link5: undefined,
  link8: undefined,
  cookiesLink: undefined,
  link1: undefined,
  imageAlt: 'image',
  link9: undefined,
  cookiesLink1: undefined,
  column2Title: undefined,
  link7: undefined,
  link3: undefined,
  content2: undefined,
  privacyLink: undefined,
}

Footer.propTypes = {
  privacyLink1: PropTypes.element,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  content3: PropTypes.element,
  link4: PropTypes.element,
  column1Title: PropTypes.element,
  termsLink1: PropTypes.element,
  link2: PropTypes.element,
  link10: PropTypes.element,
  link6: PropTypes.element,
  termsLink: PropTypes.element,
  link5: PropTypes.element,
  link8: PropTypes.element,
  cookiesLink: PropTypes.element,
  link1: PropTypes.element,
  imageAlt: PropTypes.string,
  link9: PropTypes.element,
  cookiesLink1: PropTypes.element,
  column2Title: PropTypes.element,
  link7: PropTypes.element,
  link3: PropTypes.element,
  content2: PropTypes.element,
  privacyLink: PropTypes.element,
}

export default Footer
