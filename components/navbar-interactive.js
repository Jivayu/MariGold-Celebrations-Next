import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const NavbarInteractive = (props) => {
  return (
    <>
      <div className={`navbar-interactive-container1 ${props.rootClassName} `}>
        <header
          data-thq="thq-navbar"
          className="navbar-interactive-navbar-interactive"
        >
          <a
            href="https://marigoldcelebration.in"
            className="navbar-interactive-link10"
          >
            <div className="navbar-interactive-container2">
              <img
                id="Marigold Celebration Brand Logo"
                alt={props.imageAlt}
                src={props.imageSrc}
                className="navbar-interactive-image"
              />
            </div>
          </a>
          <div
            data-thq="thq-navbar-nav"
            className="navbar-interactive-desktop-menu"
          >
            <nav className="navbar-interactive-links1">
              <Link href="/">
                <a className="navbar-interactive-link11">
                  {props.menu1 ?? (
                    <Fragment>
                      <span className="navbar-interactive-text18">Home</span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <Link href="/facilities-at-marigold-celebration">
                <a className="navbar-interactive-link12">
                  {props.menu2 ?? (
                    <Fragment>
                      <span className="navbar-interactive-text17">
                        Facilities
                      </span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <Link href="/gallery">
                <a className="navbar-interactive-link13">
                  {props.menu3 ?? (
                    <Fragment>
                      <span className="navbar-interactive-text27">Gallery</span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <Link href="/events">
                <a className="navbar-interactive-link14">
                  {props.menu4 ?? (
                    <Fragment>
                      <span className="navbar-interactive-text23">Events</span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <Link href="/price-plans">
                <a className="navbar-interactive-link15">
                  {props.menu41 ?? (
                    <Fragment>
                      <span className="navbar-interactive-text21">Plans</span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <Link href="/contacts">
                <a className="navbar-interactive-link16">
                  {props.menu5 ?? (
                    <Fragment>
                      <span className="navbar-interactive-text22">
                        Contacts
                      </span>
                    </Fragment>
                  )}
                </a>
              </Link>
            </nav>
            <div className="navbar-interactive-buttons">
              <button className="navbar-interactive-login button">
                <span>
                  {props.login ?? (
                    <Fragment>
                      <span className="navbar-interactive-text25">Login</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <a
                href="mailto:knowngate@gmail.com?subject=Enquiry For Marigold Celebration Hall Dates."
                className="navbar-interactive-mail-enquiry button"
              >
                <span className="navbar-interactive-text11">
                  {props.register ?? (
                    <Fragment>
                      <span className="navbar-interactive-text29">Enquiry</span>
                    </Fragment>
                  )}
                </span>
              </a>
              <a
                href="https://wa.me/+919356251657"
                target="_blank"
                rel="noreferrer noopener"
                className="navbar-interactive-link17"
              >
                <div className="navbar-interactive-container3">
                  <span className="navbar-interactive-text12">
                    {props.text21011 ?? (
                      <Fragment>
                        <span className="navbar-interactive-text24">
                          Explore Facilities
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 48 48"
                    className="navbar-interactive-icon10"
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
            </div>
          </div>
          <div
            data-thq="thq-burger-menu"
            className="navbar-interactive-burger-menu"
          >
            <svg viewBox="0 0 1024 1024" className="navbar-interactive-icon12">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="navbar-interactive-mobile-menu"
          >
            <div className="navbar-interactive-nav">
              <div className="navbar-interactive-top">
                <a
                  href="https://marigoldcelebration.in"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="navbar-interactive-link18"
                >
                  <img
                    alt={props.logoAlt}
                    src={props.logoSrc}
                    className="navbar-interactive-logo"
                  />
                </a>
                <div
                  data-thq="thq-close-menu"
                  className="navbar-interactive-close-menu"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="navbar-interactive-icon14"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navbar-interactive-links2">
                <Link href="/">
                  <a className="navbar-interactive-link19">
                    {props.mmenu1 ?? (
                      <Fragment>
                        <span className="navbar-interactive-text15">Home</span>
                      </Fragment>
                    )}
                  </a>
                </Link>
                <Link href="/facilities-at-marigold-celebration">
                  <a className="navbar-interactive-link20">
                    {props.mmenu2 ?? (
                      <Fragment>
                        <span className="navbar-interactive-text28">
                          Facilities
                        </span>
                      </Fragment>
                    )}
                  </a>
                </Link>
                <Link href="/gallery">
                  <a className="navbar-interactive-link21">
                    {props.mmenu3 ?? (
                      <Fragment>
                        <span className="navbar-interactive-text26">
                          Gallery
                        </span>
                      </Fragment>
                    )}
                  </a>
                </Link>
                <Link href="/events">
                  <a className="navbar-interactive-link22">
                    {props.mmenu4 ?? (
                      <Fragment>
                        <span className="navbar-interactive-text20">
                          Events
                        </span>
                      </Fragment>
                    )}
                  </a>
                </Link>
                <Link href="/contacts">
                  <a className="navbar-interactive-link23">
                    {props.mmenu5 ?? (
                      <Fragment>
                        <span className="navbar-interactive-text30">
                          Contacts
                        </span>
                      </Fragment>
                    )}
                  </a>
                </Link>
              </nav>
              <div className="navbar-interactive-container4">
                <div className="navbar-interactive-buttons-call">
                  <a
                    href="tel:+919356251657"
                    className="navbar-interactive-call-us button"
                  >
                    <span className="navbar-interactive-text13">
                      {props.register1 ?? (
                        <Fragment>
                          <span className="navbar-interactive-text19">
                            Call Enquiry
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                </div>
                <div className="navbar-interactive-buttons-whats-app">
                  <a
                    href="https://wa.me/+919356251657"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="navbar-interactive-whats-app-us button"
                  >
                    <span className="navbar-interactive-text14">
                      {props.register12 ?? (
                        <Fragment>
                          <span className="navbar-interactive-text16">
                            WhatsApp Enquiry
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="navbar-interactive-icon-group">
              <animate-on-reveal
                animation="fadeIn"
                duration="2000ms"
                delay="100ms"
                iteration="1"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  data-thq-animate-on-reveal="true"
                  className="navbar-interactive-icon16"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </animate-on-reveal>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="navbar-interactive-icon18"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="navbar-interactive-icon20"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .navbar-interactive-container1 {
            width: 100%;
            display: flex;
            z-index: 100;
            position: fixed;
            animation: inherit;
            box-shadow: 1px 3px 25px 0px rgba(9, 0, 64, 0.7);
            border-color: var(--dl-color-primary-logo-color-3);
            border-style: solid;
            border-width: 1px;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .navbar-interactive-navbar-interactive {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-halfunit);
            backdrop-filter: blur(7px);
            justify-content: space-between;
            background-color: rgba(245, 184, 60, 0.2);
          }
          .navbar-interactive-link10 {
            display: contents;
          }
          .navbar-interactive-container2 {
            display: flex;
            position: relative;
            text-decoration: none;
          }
          .navbar-interactive-image {
            flex: 1;
            width: auto;
            height: 50px;
            transform: scale(0.95);
            object-fit: cover;
            transition: 0.3s;
          }
          .navbar-interactive-image:hover {
            transform: scale(1);
          }
          .navbar-interactive-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .navbar-interactive-links1 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-interactive-link11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-weight: 300;
            line-height: 1.4;
            padding-top: 4px;
            padding-left: 6px;
            padding-right: 6px;
            padding-bottom: 4px;
            text-transform: capitalize;
            text-decoration: none;
            background-color: transparent;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .navbar-interactive-link11:hover {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            background-color: transparent;
          }
          .navbar-interactive-link11:active {
            fill: var(--dl-color-primary-100);
            color: var(--dl-color-primary-100);
          }
          .navbar-interactive-link12 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            transition: 0.3s;
            font-weight: 300;
            line-height: 1.4;
            padding-top: 4px;
            padding-left: 6px;
            padding-right: 6px;
            padding-bottom: 4px;
            text-transform: capitalize;
            text-decoration: none;
          }
          .navbar-interactive-link12:hover {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            background-color: transparent;
          }
          .navbar-interactive-link12:active {
            fill: var(--dl-color-primary-100);
            color: var(--dl-color-primary-100);
          }
          .navbar-interactive-link13 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-weight: 300;
            line-height: 1.4;
            padding-top: 4px;
            padding-left: 6px;
            padding-right: 6px;
            padding-bottom: 4px;
            text-transform: capitalize;
            text-decoration: none;
          }
          .navbar-interactive-link13:hover {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            background-color: transparent;
          }
          .navbar-interactive-link14 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-weight: 300;
            line-height: 1.4;
            padding-top: 4px;
            padding-left: 6px;
            padding-right: 6px;
            padding-bottom: 4px;
            text-transform: capitalize;
            text-decoration: none;
          }
          .navbar-interactive-link14:hover {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            border-radius: 0px;
            background-color: transparent;
          }
          .navbar-interactive-link15 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            display: none;
            font-size: 14px;
            font-style: normal;
            font-weight: 300;
            line-height: 1.4;
            padding-top: 4px;
            padding-left: 6px;
            padding-right: 6px;
            padding-bottom: 4px;
            text-transform: capitalize;
            text-decoration: none;
          }
          .navbar-interactive-link15:hover {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            border-radius: 0px;
            background-color: transparent;
          }
          .navbar-interactive-link16 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-weight: 300;
            line-height: 1.4;
            padding-top: 4px;
            padding-left: 6px;
            padding-right: 6px;
            padding-bottom: 4px;
            text-transform: capitalize;
            text-decoration: none;
          }
          .navbar-interactive-link16:hover {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            border-radius: 0px;
            background-color: transparent;
          }
          .navbar-interactive-buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-interactive-login {
            display: none;
            border-width: 0px;
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-interactive-mail-enquiry {
            display: none;
            transition: 0.3s;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-primary-logo-color-2);
            border-width: 0.5px;
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
            background-color: var(--dl-color-primary-logo-color-light);
          }
          .navbar-interactive-mail-enquiry:hover {
            opacity: 1;
            box-shadow: 3px 3px 20px 0px rgba(226, 164, 58, 0.65);
            border-color: var(--dl-color-primary-logo-color-2);
            border-width: 0.5px;
            background-color: rgba(216, 160, 51, 0.39);
          }
          .navbar-interactive-text11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 400;
            line-height: 1.6;
            text-transform: none;
            text-decoration: none;
          }
          .navbar-interactive-link17 {
            display: contents;
          }
          .navbar-interactive-container3 {
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
          .navbar-interactive-container3:hover {
            box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.48);
            border-color: #019a22;
          }
          .navbar-interactive-text12 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 12px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 200;
            line-height: 1.8;
          }
          .navbar-interactive-icon10 {
            fill: #00ff38;
            color: #00ff38;
          }
          .navbar-interactive-burger-menu {
            display: none;
          }
          .navbar-interactive-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-interactive-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: absolute;
            transform: translateY(-100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .navbar-interactive-nav {
            display: none;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-interactive-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navbar-interactive-link18 {
            display: contents;
          }
          .navbar-interactive-logo {
            height: 2rem;
            text-decoration: none;
          }
          .navbar-interactive-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-interactive-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-interactive-links2 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-interactive-link19 {
            font-size: 14px;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: none;
            text-decoration: none;
          }
          .navbar-interactive-link20 {
            font-size: 14px;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: none;
            text-decoration: none;
          }
          .navbar-interactive-link21 {
            font-size: 14px;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: none;
            text-decoration: none;
          }
          .navbar-interactive-link22 {
            font-size: 14px;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: none;
            text-decoration: none;
          }
          .navbar-interactive-link23 {
            font-size: 14px;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: none;
            text-decoration: none;
          }
          .navbar-interactive-buttons-call {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-interactive-call-us {
            text-decoration: none;
          }
          .navbar-interactive-text13 {
            font-size: 14px;
            font-family: 'Ubuntu';
            font-weight: 400;
            line-height: 1.4;
            text-transform: none;
            text-decoration: none;
          }
          .navbar-interactive-buttons-whats-app {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-interactive-whats-app-us {
            text-decoration: none;
          }
          .navbar-interactive-text14 {
            font-size: 14px;
            font-family: 'Ubuntu';
            font-weight: 400;
            line-height: 1.4;
            text-transform: none;
            text-decoration: none;
          }
          .navbar-interactive-icon-group {
            display: none;
          }
          .navbar-interactive-icon16 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-interactive-icon18 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-interactive-icon20 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-interactive-text15 {
            display: inline-block;
          }
          .navbar-interactive-text16 {
            display: inline-block;
          }
          .navbar-interactive-text17 {
            display: inline-block;
          }
          .navbar-interactive-text18 {
            display: inline-block;
          }
          .navbar-interactive-text19 {
            display: inline-block;
          }
          .navbar-interactive-text20 {
            display: inline-block;
          }
          .navbar-interactive-text21 {
            display: inline-block;
          }
          .navbar-interactive-text22 {
            display: inline-block;
          }
          .navbar-interactive-text23 {
            display: inline-block;
          }
          .navbar-interactive-text24 {
            display: inline-block;
          }
          .navbar-interactive-text25 {
            display: inline-block;
          }
          .navbar-interactive-text26 {
            display: inline-block;
          }
          .navbar-interactive-text27 {
            display: inline-block;
          }
          .navbar-interactive-text28 {
            display: inline-block;
          }
          .navbar-interactive-text29 {
            display: inline-block;
          }
          .navbar-interactive-text30 {
            display: inline-block;
          }

          @media (max-width: 767px) {
            .navbar-interactive-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .navbar-interactive-desktop-menu {
              display: none;
            }
            .navbar-interactive-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 599px) {
            .navbar-interactive-navbar-interactive {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-unit);
            }
            .navbar-interactive-container2 {
              gap: var(--dl-space-space-halfunit);
            }
            .navbar-interactive-image {
              flex: 1;
              width: auto;
              height: 50px;
              align-self: center;
            }
            .navbar-interactive-desktop-menu {
              display: none;
            }
            .navbar-interactive-icon10 {
              fill: #00ff38;
              color: #00ff38;
            }
            .navbar-interactive-burger-menu {
              display: flex;
            }
            .navbar-interactive-icon12 {
              fill: var(--dl-color-primary-logo-color-2);
              flex: 1;
              width: 34px;
              height: 34px;
            }
            .navbar-interactive-mobile-menu {
              height: 90vh;
              padding: var(--dl-space-space-oneandhalfunits);
              border-color: var(--dl-color-primary-logo-color-1);
              border-width: 2px;
              border-radius: var(--dl-radius-radius-cardradius);
              background-color: #060029;
              border-top-left-radius: var(--dl-radius-radius-cardradius);
              border-top-right-radius: var(--dl-radius-radius-cardradius);
              border-bottom-left-radius: var(--dl-radius-radius-buttonradius);
              border-bottom-right-radius: var(--dl-radius-radius-buttonradius);
            }
            .navbar-interactive-nav {
              display: flex;
              border-radius: var(--dl-radius-radius-radius4);
              border-top-left-radius: var(--dl-radius-radius-buttonradius);
              border-top-right-radius: var(--dl-radius-radius-buttonradius);
            }
            .navbar-interactive-top {
              padding: var(--dl-space-space-unit);
              box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.25);
              border-color: var(--dl-color-primary-logo-color-5);
              border-width: 1px;
              border-radius: var(--dl-radius-radius-buttonradius);
              background-color: #0a002f;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-left-radius: var(--dl-radius-radius-cardradius);
              border-bottom-right-radius: var(--dl-radius-radius-cardradius);
            }
            .navbar-interactive-logo {
              width: auto;
              height: 50px;
            }
            .navbar-interactive-icon14 {
              fill: var(--dl-color-primary-logo-color-2);
              width: 34px;
              height: 34px;
            }
            .navbar-interactive-links2 {
              gap: var(--dl-space-space-halfunit);
              width: 95%;
              align-self: center;
              align-items: center;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .navbar-interactive-link19 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
              width: 65%;
              height: 45px;
              text-align: center;
              font-family: Ubuntu;
              line-height: 2.8;
              border-color: var(--dl-color-primary-richblue);
              border-style: solid;
              border-width: 0.5px;
              border-radius: var(--dl-radius-radius-buttonradius);
              background-color: var(--dl-color-primary-logo-color-5);
            }
            .navbar-interactive-link20 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
              width: 65%;
              height: 45px;
              text-align: center;
              font-family: Ubuntu;
              line-height: 2.8;
              border-color: var(--dl-color-primary-richblue);
              border-style: solid;
              border-width: 0.5px;
              border-radius: var(--dl-radius-radius-buttonradius);
              background-color: var(--dl-color-primary-logo-color-5);
            }
            .navbar-interactive-link21 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
              width: 65%;
              height: 45px;
              text-align: center;
              font-family: Ubuntu;
              line-height: 2.8;
              border-color: var(--dl-color-primary-richblue);
              border-style: solid;
              border-width: 0.5px;
              border-radius: var(--dl-radius-radius-buttonradius);
              background-color: var(--dl-color-primary-logo-color-5);
            }
            .navbar-interactive-link22 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
              width: 65%;
              height: 45px;
              text-align: center;
              font-family: Ubuntu;
              line-height: 2.8;
              border-color: var(--dl-color-primary-richblue);
              border-style: solid;
              border-width: 0.5px;
              border-radius: var(--dl-radius-radius-buttonradius);
              background-color: var(--dl-color-primary-logo-color-5);
            }
            .navbar-interactive-link23 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
              width: 65%;
              height: 45px;
              text-align: center;
              font-family: Ubuntu;
              line-height: 2.8;
              border-color: var(--dl-color-primary-richblue);
              border-style: solid;
              border-width: 0.5px;
              border-radius: var(--dl-radius-radius-buttonradius);
              background-color: var(--dl-color-primary-logo-color-5);
            }
            .navbar-interactive-container4 {
              width: 80%;
              align-self: center;
            }
            .navbar-interactive-buttons-call {
              align-self: center;
              flex-direction: column;
            }
            .navbar-interactive-call-us {
              fill: var(--dl-color-primary-logo-color-1);
              color: var(--dl-color-primary-logo-color-1);
              width: 85%;
              box-shadow: 1px 3px 20px 0px rgba(0, 0, 0, 0.4);
              border-color: #1b1141;
              border-width: 1px;
              background-color: var(--dl-color-primary-logo-color-5);
            }
            .navbar-interactive-text13 {
              line-height: 1.8;
            }
            .navbar-interactive-buttons-whats-app {
              align-self: center;
              flex-direction: column;
            }
            .navbar-interactive-whats-app-us {
              fill: var(--dl-color-primary-logo-color-1);
              color: var(--dl-color-primary-logo-color-1);
              width: 85%;
              box-shadow: 1px 3px 20px 0px rgba(0, 0, 0, 0.4);
              border-color: #117138;
              border-width: 1px;
              background-color: #25d366;
            }
            .navbar-interactive-text14 {
              fill: var(--dl-color-gray-black);
              color: var(--dl-color-gray-black);
              line-height: 1.8;
            }
            .navbar-interactive-icon-group {
              display: flex;
              align-self: center;
            }
            .navbar-interactive-icon16 {
              fill: var(--dl-color-primary-logo-color-1);
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
              padding-top: 3px;
              border-color: #301865;
              border-width: 1px;
              margin-right: var(--dl-space-space-unit);
              padding-left: 3px;
              border-radius: var(--dl-radius-radius-round);
              padding-right: 3px;
              animation-name: pulse;
              padding-bottom: 3px;
              animation-delay: 50s;
              animation-duration: 900s;
              animation-direction: normal;
              animation-iteration-count: 3;
              animation-timing-function: linear;
            }
            .navbar-interactive-icon18 {
              fill: var(--dl-color-primary-logo-color-1);
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
              padding-top: 3px;
              border-color: #301865;
              border-width: 1px;
              margin-right: var(--dl-space-space-unit);
              padding-left: 3px;
              border-radius: var(--dl-radius-radius-round);
              padding-right: 3px;
              animation-name: none;
              padding-bottom: 3px;
              animation-delay: 0s;
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .navbar-interactive-icon20 {
              fill: var(--dl-color-primary-logo-color-1);
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
              padding-top: 3px;
              border-color: #301865;
              border-width: 1px;
              margin-right: var(--dl-space-space-unit);
              padding-left: 3px;
              border-radius: var(--dl-radius-radius-round);
              padding-right: 3px;
              animation-name: none;
              padding-bottom: 3px;
              animation-delay: 0s;
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .navbar-interactive-text16 {
              line-height: 1.4;
            }
            .navbar-interactive-text19 {
              line-height: 1.4;
            }
          }
          @media (max-width: 490px) {
            .navbar-interactive-navbar-interactive {
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .navbar-interactive-mobile-menu {
              padding: 14px;
            }
            .navbar-interactive-links2 {
              width: 100%;
            }
            .navbar-interactive-link19 {
              width: 75%;
              line-height: 3;
            }
            .navbar-interactive-link20 {
              width: 75%;
              line-height: 3;
            }
            .navbar-interactive-link21 {
              width: 75%;
              line-height: 3;
            }
            .navbar-interactive-link22 {
              width: 75%;
              line-height: 3;
            }
            .navbar-interactive-link23 {
              width: 75%;
              line-height: 3;
            }
            .navbar-interactive-call-us {
              width: 100%;
            }
            .navbar-interactive-whats-app-us {
              width: 100%;
            }
            .navbar-interactive-icon16 {
              fill: auto;
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
              padding: 3px;
              padding-top: 2px;
              border-color: auto;
              border-width: 1px;
              padding-left: 2px;
              border-radius: auto;
              padding-right: 2px;
              padding-bottom: 2px;
            }
            .navbar-interactive-icon18 {
              fill: auto;
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
              padding: 3px;
              padding-top: 2px;
              border-color: auto;
              border-width: 1px;
              padding-left: 2px;
              border-radius: auto;
              padding-right: 2px;
              padding-bottom: 2px;
            }
            .navbar-interactive-icon20 {
              fill: auto;
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
              padding: 3px;
              padding-top: 2px;
              border-color: auto;
              border-width: 1px;
              padding-left: 2px;
              border-radius: auto;
              padding-right: 2px;
              padding-bottom: 2px;
            }
          }
          @media (max-width: 479px) {
            .navbar-interactive-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .navbar-interactive-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

NavbarInteractive.defaultProps = {
  mmenu1: undefined,
  logoAlt: 'image',
  register12: undefined,
  menu2: undefined,
  menu1: undefined,
  register1: undefined,
  mmenu4: undefined,
  menu41: undefined,
  menu5: undefined,
  menu4: undefined,
  text21011: undefined,
  login: undefined,
  mmenu3: undefined,
  menu3: undefined,
  imageSrc: '/images/marigold-logo1.svg',
  imageAlt: 'logo',
  rootClassName: '',
  mmenu2: undefined,
  logoSrc: '/images/marigold-logo1.svg',
  register: undefined,
  mmenu5: undefined,
}

NavbarInteractive.propTypes = {
  mmenu1: PropTypes.element,
  logoAlt: PropTypes.string,
  register12: PropTypes.element,
  menu2: PropTypes.element,
  menu1: PropTypes.element,
  register1: PropTypes.element,
  mmenu4: PropTypes.element,
  menu41: PropTypes.element,
  menu5: PropTypes.element,
  menu4: PropTypes.element,
  text21011: PropTypes.element,
  login: PropTypes.element,
  mmenu3: PropTypes.element,
  menu3: PropTypes.element,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  mmenu2: PropTypes.element,
  logoSrc: PropTypes.string,
  register: PropTypes.element,
  mmenu5: PropTypes.element,
}

export default NavbarInteractive
