import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const MobileFacilities2 = (props) => {
  const [faq2Visible, setFaq2Visible] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq1Visible, setFaq1Visible] = useState(false)
  return (
    <>
      <section
        id="Mobile-Facilities-2"
        className="mobile-facilities-2faq8 thq-section-padding"
      >
        <h1 className="mobile-facilities-2-text10 Ubuntu-Light-16">
          {props.heading ?? (
            <Fragment>
              <span className="mobile-facilities-2-text31">
                Facilities At Marigold Celebration
              </span>
            </Fragment>
          )}
        </h1>
        <div className="mobile-facilities-2-max-width thq-flex-row thq-section-max-width">
          <div className="mobile-facilities-2-list UbuntuLight-14 thq-flex-column">
            <img
              alt={props.imageAlt1}
              src={props.imageSrc1}
              className="mobile-facilities-2-image"
            />
            <div className="mobile-facilities-2-faq1">
              <div className="mobile-facilities-2-trigger1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="mobile-facilities-2-icon10"
                >
                  <path
                    d="M16 4c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m4.78 3.58C19.93 7.21 19 7 18 7c-.67 0-1.31.1-1.92.28c.58.55.92 1.32.92 2.15V10h5v-.57c0-.81-.5-1.53-1.22-1.85M6 6c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m1.92 1.28C7.31 7.1 6.67 7 6 7c-1 0-1.93.21-2.78.58C2.5 7.9 2 8.62 2 9.43V10h5v-.57c0-.83.34-1.6.92-2.15M10 4c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m6 6H8v-.57c0-.81.5-1.53 1.22-1.85C10.07 7.21 11 7 12 7s1.93.21 2.78.58C15.5 7.9 16 8.62 16 9.43M15 16c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m6 6h-8v-.57c0-.81.5-1.53 1.22-1.85C15.07 19.21 16 19 17 19s1.93.21 2.78.58c.72.32 1.22 1.04 1.22 1.85M5 16c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m6 6H3v-.57c0-.81.5-1.53 1.22-1.85C5.07 19.21 6 19 7 19s1.93.21 2.78.58c.72.32 1.22 1.04 1.22 1.85M12.75 14v2h-1.5v-2H9l3-3l3 3Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p className="mobile-facilities-2-faq1-question UbuntuLight-14">
                  {props.faq1Question ?? (
                    <Fragment>
                      <span className="mobile-facilities-2-text29">
                        Spacious Venue with Capacity
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="mobile-facilities-2-icons-container1">
                  {!faq1Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="mobile-facilities-2-icon12"
                      >
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq1Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="mobile-facilities-2-icon14"
                      >
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq1Visible && (
                <div className="mobile-facilities-2-container12">
                  <div className="mobile-facilities-2-icon-container1"></div>
                  <p className="mobile-facilities-2-text11 Ubuntu-Light-Gap-12">
                    <span>
                      Celebrate your special day at Marigold Banquet Hall, where
                      love stories come to life. Our grand hall provides the
                      perfect backdrop for weddings and receptions,
                      accommodating up to 2000 guests in a luxurious and
                      beautifully decorated setting. Whether it’s a traditional
                      wedding or a modern celebration, we ensure every detail is
                      handled with care—from bespoke décor and catering to
                      photography and entertainment. Let us help you create the
                      wedding of your dreams.Engagements, sangeet, mehendi, or
                      cocktail parties—whatever your pre-wedding celebration
                      needs, Marigold Banquet Hall offers the perfect venue. Our
                      beautifully designed event spaces can be customized with
                      elegant décor, entertainment, and personalized catering,
                      making every moment leading up to your wedding as magical
                      as the big day itself.
                    </span>
                    <br></br>
                  </p>
                </div>
              )}
            </div>
            <div className="mobile-facilities-2-faq2">
              <div
                onClick={() => setFaq2Visible(!faq2Visible)}
                className="mobile-facilities-2-trigger2"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  className="mobile-facilities-2-icon16"
                >
                  <g fill="none" stroke="currentColor" stroke-width="4">
                    <path d="M6 42h36M6 36h36" stroke-linecap="round"></path>
                    <path
                      d="M9 25c0-8.284 6.716-15 15-15s15 6.716 15 15v11H9z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path d="M17 25v4" stroke-linecap="round"></path>
                    <path d="M28 10V8a4 4 0 0 0-8 0v2"></path>
                  </g>
                </svg>
                <p className="mobile-facilities-2-faq2-question1 UbuntuLight-14">
                  {props.faq2Question ?? (
                    <Fragment>
                      <span className="mobile-facilities-2-text30">
                        Fine Dining Catering
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="mobile-facilities-2-icons-container2">
                  {!faq2Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="mobile-facilities-2-icon22"
                      >
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq2Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="mobile-facilities-2-icon24"
                      >
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq2Visible && (
                <div className="mobile-facilities-2-container15">
                  <div className="mobile-facilities-2-icon-container2"></div>
                  <p className="mobile-facilities-2-text14 Ubuntu-Light-Gap-12">
                    <span className="p">
                      Celebrate life’s milestones at Marigold Banquet Hall with
                      a memorable birthday or anniversary event. Whether you’re
                      planning a grand celebration or an intimate gathering, our
                      versatile spaces can be tailored to meet your specific
                      needs. We offer a range of event services, including
                      themed décor, delicious catering, entertainment options,
                      and more, ensuring a fun and joyful celebration for all
                      your guests.
                    </span>
                    <br></br>
                    <br className="p"></br>
                    <span className="p">
                      From family reunions to cultural celebrations, Marigold
                      Banquet Hall is well-equipped to host all types of social
                      gatherings. Our spacious venue, complete with flexible
                      seating arrangements and premium services, provides a
                      comfortable and welcoming environment for families and
                      friends to come together and celebrate. We ensure that
                      every event is personalized to reflect the unique needs of
                      the occasion.
                    </span>
                  </p>
                </div>
              )}
            </div>
            <div className="mobile-facilities-2-faq3">
              <div
                onClick={() => setFaq3Visible(!faq3Visible)}
                className="mobile-facilities-2-trigger3"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="mobile-facilities-2-icon26"
                >
                  <path
                    d="M19.65 4.5L16.91.96l3.93-.78l.78 3.92zm-2.94.57l-2.74-3.53l-1.97.39l2.75 3.53zm-4.9.98L9.07 2.5l-1.97.41l2.75 3.53zM4.16 3.5l-.98.19a1.995 1.995 0 0 0-1.57 2.35L2 8l4.9-.97zM22 8v10c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2V8zm-2 2H4v8h16zM7 24h2v-2H7zm8 0h2v-2h-2zm-4 0h2v-2h-2z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p className="mobile-facilities-2-faq2-question2 UbuntuLight-14">
                  {props.faq3Question ?? (
                    <Fragment>
                      <span className="mobile-facilities-2-text32">
                        Photography &amp; Videography Services
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="mobile-facilities-2-icons-container3">
                  {!faq3Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="mobile-facilities-2-icon28"
                      >
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq3Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="mobile-facilities-2-icon30"
                      >
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq3Visible && (
                <div className="mobile-facilities-2-container18">
                  <div className="mobile-facilities-2-icon-container3"></div>
                  <p className="mobile-facilities-2-text19 Ubuntu-Light-Gap-12">
                    <span className="p">
                      Marigold Banquet Hall is the ideal venue for hosting
                      professional corporate events, including conferences,
                      seminars, product launches, and award ceremonies. With
                      state-of-the-art audiovisual equipment, ample seating, and
                      a soundproof environment, our venue ensures that your
                      business event is both productive and impressive. Our team
                      provides comprehensive event support, including custom
                      catering options and seamless technology integration.
                    </span>
                    <br className="p"></br>
                    <br className="p"></br>
                    <span className="p">
                      Host prestigious award ceremonies, charity galas, or
                      black-tie dinners at Marigold Banquet Hall. Our elegant
                      event spaces are perfect for high-profile gatherings,
                      complete with luxurious décor, gourmet catering, and
                      impeccable service. We ensure a sophisticated and
                      memorable experience for all your attendees.
                    </span>
                  </p>
                </div>
              )}
            </div>
            <div className="mobile-facilities-2-faq4">
              <div
                onClick={() => setFaq4Visible(!faq4Visible)}
                className="mobile-facilities-2-trigger4"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="mobile-facilities-2-icon32"
                >
                  <g fill="currentColor">
                    <path d="M16.48 3.03c-1.05 0-1.91.85-1.91 1.91v1.35a1.91 1.91 0 1 0 3.82 0V4.94a1.923 1.923 0 0 0-1.91-1.91"></path>
                    <path d="M13.81 12.1V6.56c0 1.47 1.2 2.67 2.67 2.67s2.67-1.2 2.67-2.67v7.06h-5.34v1.28h5.34v.2h.016a2.677 2.677 0 0 0 2.654 2.38a2.677 2.677 0 0 0 2.654-2.38h.016v3.557h-5.31v1.28h5.31v3.676l1.054-1.492l-.714-1.97a.5.5 0 0 1 .94-.341l.477 1.315l.722-1.022l-.708-1.93a.5.5 0 0 1 .938-.345l.471 1.282l.812-1.148a.5.5 0 0 1 .816.576l-.812 1.15l1.368.012a.5.5 0 1 1-.008 1l-2.062-.018l-.697.987l1.327.011a.5.5 0 1 1-.008 1l-2.02-.017L25.44 24h-.951h1.58c.24 0 .42.19.42.42v5.19c0 .31-.25.57-.57.57H7.03c-.31 0-.57-.26-.57-.57v-5.19c0-.23.19-.42.42-.42h.63l-.08-.143l-1.103-.41l-.996.928a.5.5 0 1 1-.682-.73l.63-.588l-.661-.246l-1.37.984a.425.425 0 0 1-.496-.69l.906-.651l-.792-.295a.5.5 0 0 1 .348-.938l.724.27l-.268-.979a.425.425 0 1 1 .82-.224l.429 1.568l1.76.654l-1.248-2.236a.5.5 0 0 1-.082-.147l-.996-1.783a.5.5 0 0 1 .874-.488l.618 1.108l.629-1.025a.5.5 0 1 1 .852.523l-.922 1.503l.468.84l.342-.557a.5.5 0 0 1 .852.524l-.635 1.034l1.039 1.862V18.12h5.34v-1.28H8.47V12.1h.016a2.677 2.677 0 0 0 2.654 2.38a2.677 2.677 0 0 0 2.654-2.38zm0 9.1v1.28h5.34V21.2zM7.46 25v2.61h18.03V25z"></path>
                    <path d="M11.14 8.28c-1.05 0-1.91.85-1.91 1.91v1.35a1.91 1.91 0 1 0 3.82 0v-1.35a1.923 1.923 0 0 0-1.91-1.91m10.68 3c-1.05 0-1.91.85-1.91 1.91v1.35a1.91 1.91 0 1 0 3.82 0v-1.35a1.923 1.923 0 0 0-1.91-1.91"></path>
                  </g>
                </svg>
                <p className="mobile-facilities-2-faq2-question3 UbuntuLight-14">
                  {props.faq4Question ?? (
                    <Fragment>
                      <span className="mobile-facilities-2-text33">
                        Décor &amp; Design Services
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="mobile-facilities-2-icons-container4">
                  {!faq4Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="mobile-facilities-2-icon37"
                      >
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq4Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="mobile-facilities-2-icon39"
                      >
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq4Visible && (
                <div className="mobile-facilities-2-container21">
                  <div className="mobile-facilities-2-icon-container4"></div>
                  <p className="mobile-facilities-2-text24 Ubuntu-Light-Gap-12">
                    <span className="p">
                      From religious ceremonies to cultural festivals, Marigold
                      Banquet Hall offers a serene and spacious environment to
                      celebrate and honor your traditions. Our venue is equipped
                      to host a range of religious events, including pujas,
                      prayer meetings, and festive gatherings, with services
                      tailored to meet the needs of your cultural and spiritual
                      celebrations.
                    </span>
                    <br></br>
                    <br className="p"></br>
                    <span className="p">
                      With its large capacity and flexible layout, Marigold
                      Banquet Hall is an ideal venue for hosting exhibitions,
                      trade shows, and product expos. Our event spaces can be
                      configured to showcase products and services, with
                      professional event planning support and modern technology
                      to make sure your exhibition is a success.
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .mobile-facilities-2faq8 {
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            backdrop-filter: blur(4px);
            justify-content: center;
            background-color: rgba(217, 217, 217, 0.14);
          }
          .mobile-facilities-2-text10 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-style: normal;
            line-height: 1.4;
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .mobile-facilities-2-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            align-self: center;
            align-items: flex-start;
          }
          .mobile-facilities-2-list {
            flex: 1;
            width: 100%;
            align-self: center;
          }
          .mobile-facilities-2-image {
            width: 120px;
            display: none;
            object-fit: cover;
          }
          .mobile-facilities-2-faq1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: #1b1141;
            border-width: 0.5px;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
            backdrop-filter: blur(3px);
            background-color: var(--dl-color-primary-logo-color-5);
          }
          .mobile-facilities-2-trigger1 {
            height: 75px;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
            border-bottom-left-radius: var(--dl-radius-radius-radius10);
            border-bottom-right-radius: var(--dl-radius-radius-radius10);
          }
          .mobile-facilities-2-icon10 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 50px;
            height: 50px;
            padding: 5px;
            align-self: center;
            border-color: var(--dl-color-theme-accent1);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .mobile-facilities-2-faq1-question {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
          }
          .mobile-facilities-2-icons-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .mobile-facilities-2-icon12 {
            fill: var(--dl-color-primary-logo-color-2);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .mobile-facilities-2-icon14 {
            fill: var(--dl-color-primary-logo-color-1);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .mobile-facilities-2-container12 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            animation-name: fadeIn;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: linear;
          }
          .mobile-facilities-2-icon-container1 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: flex-start;
            flex-direction: column;
          }
          .mobile-facilities-2-text11 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            text-align: left;
          }
          .mobile-facilities-2-faq2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: #1b1141;
            border-width: 0.5px;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
            backdrop-filter: blur(3px);
            background-color: var(--dl-color-primary-logo-color-5);
          }
          .mobile-facilities-2-trigger2 {
            height: 75px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
            border-bottom-left-radius: var(--dl-radius-radius-radius10);
            border-bottom-right-radius: var(--dl-radius-radius-radius10);
          }
          .mobile-facilities-2-icon16 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 50px;
            height: 50px;
            padding: 5px;
            border-color: var(--dl-color-theme-accent1);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .mobile-facilities-2-faq2-question1 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
          }
          .mobile-facilities-2-icons-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .mobile-facilities-2-icon22 {
            fill: var(--dl-color-primary-logo-color-2);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .mobile-facilities-2-icon24 {
            fill: var(--dl-color-primary-logo-color-1);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .mobile-facilities-2-container15 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .mobile-facilities-2-icon-container2 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: flex-start;
            flex-direction: column;
          }
          .mobile-facilities-2-text14 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
          }
          .mobile-facilities-2-faq3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: #1b1141;
            border-width: 0.5px;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
            backdrop-filter: blur(3px);
            background-color: var(--dl-color-primary-logo-color-5);
          }
          .mobile-facilities-2-trigger3 {
            height: 75px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
            border-bottom-left-radius: var(--dl-radius-radius-radius10);
            border-bottom-right-radius: var(--dl-radius-radius-radius10);
          }
          .mobile-facilities-2-icon26 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 50px;
            height: 50px;
            padding: 5px;
            border-color: var(--dl-color-theme-accent1);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .mobile-facilities-2-faq2-question2 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-style: normal;
          }
          .mobile-facilities-2-icons-container3 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .mobile-facilities-2-icon28 {
            fill: var(--dl-color-primary-logo-color-2);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .mobile-facilities-2-icon30 {
            fill: var(--dl-color-primary-logo-color-1);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .mobile-facilities-2-container18 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .mobile-facilities-2-icon-container3 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: flex-start;
            flex-direction: column;
          }
          .mobile-facilities-2-text19 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
          }
          .mobile-facilities-2-faq4 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: #1b1141;
            border-width: 0.5px;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
            backdrop-filter: blur(3px);
            background-color: var(--dl-color-primary-logo-color-5);
          }
          .mobile-facilities-2-trigger4 {
            height: 75px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
            border-bottom-left-radius: var(--dl-radius-radius-radius10);
            border-bottom-right-radius: var(--dl-radius-radius-radius10);
          }
          .mobile-facilities-2-icon32 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 50px;
            height: 50px;
            padding: 5px;
            border-color: var(--dl-color-theme-accent1);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .mobile-facilities-2-faq2-question3 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-style: normal;
          }
          .mobile-facilities-2-icons-container4 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .mobile-facilities-2-icon37 {
            fill: var(--dl-color-primary-logo-color-2);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .mobile-facilities-2-icon39 {
            fill: var(--dl-color-primary-logo-color-1);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .mobile-facilities-2-container21 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .mobile-facilities-2-icon-container4 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: flex-start;
            flex-direction: column;
          }
          .mobile-facilities-2-text24 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
          }
          .mobile-facilities-2-text29 {
            display: inline-block;
          }
          .mobile-facilities-2-text30 {
            display: inline-block;
          }
          .mobile-facilities-2-text31 {
            display: inline-block;
          }
          .mobile-facilities-2-text32 {
            display: inline-block;
          }
          .mobile-facilities-2-text33 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .mobile-facilities-2-max-width {
              flex-direction: column;
            }
            .mobile-facilities-2-list {
              width: 100%;
            }
          }
          @media (max-width: 599px) {
            .mobile-facilities-2faq8 {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: 0px;
              justify-content: center;
            }
            .mobile-facilities-2-text10 {
              margin-left: var(--dl-space-space-unit);
            }
            .mobile-facilities-2-list {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .mobile-facilities-2-trigger1 {
              align-self: stretch;
            }
            .mobile-facilities-2-icon10 {
              width: 50px;
              height: 50px;
            }
            .mobile-facilities-2-faq1-question {
              color: var(--dl-color-primary-logo-color-1);
            }
            .mobile-facilities-2-icon12 {
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .mobile-facilities-2-container12 {
              animation-timing-function: ease;
            }
            .mobile-facilities-2-text11 {
              color: var(--dl-color-primary-logo-color-1);
              font-family: Ubuntu;
              letter-spacing: 0.5px;
            }
            .mobile-facilities-2-trigger2 {
              height: 75px;
            }
            .mobile-facilities-2-faq2-question1 {
              color: var(--dl-color-primary-logo-color-1);
            }
            .mobile-facilities-2-icon22 {
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .mobile-facilities-2-container15 {
              flex-direction: column;
            }
            .mobile-facilities-2-trigger3 {
              height: 75px;
            }
            .mobile-facilities-2-icon26 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
              width: 50px;
              height: 50px;
            }
            .mobile-facilities-2-faq2-question2 {
              color: var(--dl-color-primary-logo-color-1);
              font-style: normal;
            }
            .mobile-facilities-2-icon28 {
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .mobile-facilities-2-container18 {
              flex-direction: column;
            }
            .mobile-facilities-2-trigger4 {
              height: 75px;
            }
            .mobile-facilities-2-icon32 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
              width: 50px;
              height: 50px;
            }
            .mobile-facilities-2-faq2-question3 {
              color: var(--dl-color-primary-logo-color-1);
              font-style: normal;
            }
            .mobile-facilities-2-icon37 {
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .mobile-facilities-2-container21 {
              flex-direction: column;
            }
          }
          @media (max-width: 490px) {
            .mobile-facilities-2faq8 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .mobile-facilities-2-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

MobileFacilities2.defaultProps = {
  faq1Question: undefined,
  imageSrc1: '/images/marigold-logo1.svg',
  faq2Question: undefined,
  rootClassName: '',
  heading: undefined,
  faq3Question: undefined,
  imageAlt1: 'image',
  faq4Question: undefined,
}

MobileFacilities2.propTypes = {
  faq1Question: PropTypes.element,
  imageSrc1: PropTypes.string,
  faq2Question: PropTypes.element,
  rootClassName: PropTypes.string,
  heading: PropTypes.element,
  faq3Question: PropTypes.element,
  imageAlt1: PropTypes.string,
  faq4Question: PropTypes.element,
}

export default MobileFacilities2
