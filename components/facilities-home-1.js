import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const FacilitiesHome1 = (props) => {
  return (
    <>
      <section
        id="facilities-1"
        className={`facilities-home-1-layout302 thq-section-padding ${props.rootClassName} `}
      >
        <div className="facilities-home-1-max-width thq-section-max-width">
          <div className="facilities-home-1-section-title UbuntuLight-14 thq-flex-column">
            <h2 className="facilities-home-1-text10">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="facilities-home-1-text31">
                    Facilities At Marigold Celebration
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="facilities-home-1-text11 p">
              {props.slogan ?? (
                <Fragment>
                  <span className="facilities-home-1-text19">
                    Please Do Consultation With Us For Your Any Requirements.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="facilities-home-1-content1">
            <div className="thq-grid-5">
              <div className="facilities-home-1-container10 UbuntuLight-14 thq-flex-column">
                <div className="facilities-home-1-feature11 UbuntuLight-14 thq-flex-column">
                  <div className="facilities-home-1-container11 thq-team-image-round">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="facilities-home-1-icon10 thq-team-image-round"
                    >
                      <path
                        d="M16 4c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m4.78 3.58C19.93 7.21 19 7 18 7c-.67 0-1.31.1-1.92.28c.58.55.92 1.32.92 2.15V10h5v-.57c0-.81-.5-1.53-1.22-1.85M6 6c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m1.92 1.28C7.31 7.1 6.67 7 6 7c-1 0-1.93.21-2.78.58C2.5 7.9 2 8.62 2 9.43V10h5v-.57c0-.83.34-1.6.92-2.15M10 4c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m6 6H8v-.57c0-.81.5-1.53 1.22-1.85C10.07 7.21 11 7 12 7s1.93.21 2.78.58C15.5 7.9 16 8.62 16 9.43M15 16c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m6 6h-8v-.57c0-.81.5-1.53 1.22-1.85C15.07 19.21 16 19 17 19s1.93.21 2.78.58c.72.32 1.22 1.04 1.22 1.85M5 16c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m6 6H3v-.57c0-.81.5-1.53 1.22-1.85C5.07 19.21 6 19 7 19s1.93.21 2.78.58c.72.32 1.22 1.04 1.22 1.85M12.75 14v2h-1.5v-2H9l3-3l3 3Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <img
                      alt={props.feature1ImageAlt}
                      src={props.feature1ImageSrc}
                      className="facilities-home-1-image1 thq-team-image-round"
                    />
                  </div>
                  <div className="facilities-home-1-content2 UbuntuLight-14 thq-flex-column">
                    <div className="facilities-home-1-container12">
                      <h3 className="facilities-home-1-title11 h2Light">
                        {props.feature1Title ?? (
                          <Fragment>
                            <span className="facilities-home-1-text15">
                              <span>Spacious Venue with Capacity</span>
                              <br></br>
                            </span>
                          </Fragment>
                        )}
                      </h3>
                    </div>
                    <animate-on-reveal
                      animation="fadeIn"
                      duration="2000ms"
                      delay="100ms"
                      direction="normal"
                      easing="ease"
                      iteration="1"
                    >
                      <span
                        data-thq-animate-on-reveal="true"
                        className="facilities-home-1-description11 P-Light"
                      >
                        {props.feature1Description ?? (
                          <Fragment>
                            <span className="facilities-home-1-text29">
                              Our expansive banquet hall can accommodate up to
                              2000 guests comfortably. Whether you’re planning
                              an extravagant wedding or an intimate gathering,
                              our flexible seating arrangements and multiple
                              event spaces ensure the perfect setting for your
                              occasion.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </animate-on-reveal>
                  </div>
                </div>
              </div>
              <div className="facilities-home-1-container13 UbuntuLight-14 thq-flex-column">
                <div className="facilities-home-1-feature12 UbuntuLight-14 thq-flex-column">
                  <div className="facilities-home-1-container14 thq-team-image-round">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      className="facilities-home-1-icon12 thq-team-image-round"
                    >
                      <g fill="none" stroke="currentColor" stroke-width="4">
                        <path
                          d="M6 42h36M6 36h36"
                          stroke-linecap="round"
                        ></path>
                        <path
                          d="M9 25c0-8.284 6.716-15 15-15s15 6.716 15 15v11H9z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path d="M17 25v4" stroke-linecap="round"></path>
                        <path d="M28 10V8a4 4 0 0 0-8 0v2"></path>
                      </g>
                    </svg>
                    <img
                      alt={props.feature1ImageAlt1}
                      src={props.feature1ImageSrc1}
                      className="facilities-home-1-image2 thq-team-image-round"
                    />
                  </div>
                  <div className="facilities-home-1-content3 UbuntuLight-14 thq-flex-column">
                    <div className="facilities-home-1-container15">
                      <h3 className="facilities-home-1-title12 h2Light">
                        {props.feature1Title1 ?? (
                          <Fragment>
                            <span className="facilities-home-1-text30">
                              Fine Dining Catering
                            </span>
                          </Fragment>
                        )}
                      </h3>
                    </div>
                    <animate-on-reveal
                      animation="fadeIn"
                      duration="2000ms"
                      delay="100ms"
                      direction="normal"
                      easing="ease"
                      iteration="1"
                    >
                      <span
                        data-thq-animate-on-reveal="true"
                        className="facilities-home-1-description12 P-Light"
                      >
                        {props.feature1Description1 ?? (
                          <Fragment>
                            <span className="facilities-home-1-text22">
                              We offer customizable catering options to suit any
                              event style. From lavish multi-course dinners to
                              casual buffets, our in-house culinary team crafts
                              delicious, bespoke menus that reflect your taste
                              and preferences. Whether it’s traditional or
                              contemporary cuisine, our chefs ensure a
                              delightful dining experience for your guests.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </animate-on-reveal>
                  </div>
                </div>
              </div>
              <div className="facilities-home-1-container16 UbuntuLight-14 thq-flex-column">
                <div className="facilities-home-1-feature13 UbuntuLight-14 thq-flex-column">
                  <div className="facilities-home-1-container17 thq-team-image-round">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="facilities-home-1-icon18 thq-team-image-round"
                    >
                      <path
                        d="M19.65 4.5L16.91.96l3.93-.78l.78 3.92zm-2.94.57l-2.74-3.53l-1.97.39l2.75 3.53zm-4.9.98L9.07 2.5l-1.97.41l2.75 3.53zM4.16 3.5l-.98.19a1.995 1.995 0 0 0-1.57 2.35L2 8l4.9-.97zM22 8v10c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2V8zm-2 2H4v8h16zM7 24h2v-2H7zm8 0h2v-2h-2zm-4 0h2v-2h-2z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <img
                      alt={props.feature1ImageAlt11}
                      src={props.feature1ImageSrc11}
                      className="facilities-home-1-image3 thq-team-image-round"
                    />
                  </div>
                  <div className="facilities-home-1-content4 UbuntuLight-14 thq-flex-column">
                    <div className="facilities-home-1-container18">
                      <h3 className="facilities-home-1-title13 h2Light">
                        {props.feature1Title11 ?? (
                          <Fragment>
                            <span className="facilities-home-1-text28">
                              Photography &amp; Videography Services 
                            </span>
                          </Fragment>
                        )}
                      </h3>
                    </div>
                    <animate-on-reveal
                      animation="fadeIn"
                      duration="2000ms"
                      delay="100ms"
                      direction="normal"
                      easing="ease"
                      iteration="1"
                    >
                      <span
                        data-thq-animate-on-reveal="true"
                        className="facilities-home-1-description13 P-Light"
                      >
                        {props.feature1Description11 ?? (
                          <Fragment>
                            <span className="facilities-home-1-text25">
                              Preserve every special moment with our
                              professional photography and videography services.
                              Our experienced team specializes in capturing the
                              essence of your event, whether it’s candid wedding
                              moments or corporate highlights. We also provide
                              event videography, ensuring that every detail is
                              documented in high quality.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </animate-on-reveal>
                  </div>
                </div>
              </div>
              <div className="facilities-home-1-container19 UbuntuLight-14 thq-flex-column">
                <div className="facilities-home-1-feature14 UbuntuLight-14 thq-flex-column">
                  <div className="facilities-home-1-container20 thq-team-image-round">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      className="facilities-home-1-icon20 thq-team-image-round"
                    >
                      <g fill="currentColor">
                        <path d="M16.48 3.03c-1.05 0-1.91.85-1.91 1.91v1.35a1.91 1.91 0 1 0 3.82 0V4.94a1.923 1.923 0 0 0-1.91-1.91"></path>
                        <path d="M13.81 12.1V6.56c0 1.47 1.2 2.67 2.67 2.67s2.67-1.2 2.67-2.67v7.06h-5.34v1.28h5.34v.2h.016a2.677 2.677 0 0 0 2.654 2.38a2.677 2.677 0 0 0 2.654-2.38h.016v3.557h-5.31v1.28h5.31v3.676l1.054-1.492l-.714-1.97a.5.5 0 0 1 .94-.341l.477 1.315l.722-1.022l-.708-1.93a.5.5 0 0 1 .938-.345l.471 1.282l.812-1.148a.5.5 0 0 1 .816.576l-.812 1.15l1.368.012a.5.5 0 1 1-.008 1l-2.062-.018l-.697.987l1.327.011a.5.5 0 1 1-.008 1l-2.02-.017L25.44 24h-.951h1.58c.24 0 .42.19.42.42v5.19c0 .31-.25.57-.57.57H7.03c-.31 0-.57-.26-.57-.57v-5.19c0-.23.19-.42.42-.42h.63l-.08-.143l-1.103-.41l-.996.928a.5.5 0 1 1-.682-.73l.63-.588l-.661-.246l-1.37.984a.425.425 0 0 1-.496-.69l.906-.651l-.792-.295a.5.5 0 0 1 .348-.938l.724.27l-.268-.979a.425.425 0 1 1 .82-.224l.429 1.568l1.76.654l-1.248-2.236a.5.5 0 0 1-.082-.147l-.996-1.783a.5.5 0 0 1 .874-.488l.618 1.108l.629-1.025a.5.5 0 1 1 .852.523l-.922 1.503l.468.84l.342-.557a.5.5 0 0 1 .852.524l-.635 1.034l1.039 1.862V18.12h5.34v-1.28H8.47V12.1h.016a2.677 2.677 0 0 0 2.654 2.38a2.677 2.677 0 0 0 2.654-2.38zm0 9.1v1.28h5.34V21.2zM7.46 25v2.61h18.03V25z"></path>
                        <path d="M11.14 8.28c-1.05 0-1.91.85-1.91 1.91v1.35a1.91 1.91 0 1 0 3.82 0v-1.35a1.923 1.923 0 0 0-1.91-1.91m10.68 3c-1.05 0-1.91.85-1.91 1.91v1.35a1.91 1.91 0 1 0 3.82 0v-1.35a1.923 1.923 0 0 0-1.91-1.91"></path>
                      </g>
                    </svg>
                    <img
                      alt={props.feature1ImageAlt111}
                      src={props.feature1ImageSrc111}
                      className="facilities-home-1-image4 thq-team-image-round"
                    />
                  </div>
                  <div className="facilities-home-1-content5 UbuntuLight-14 thq-flex-column">
                    <div className="facilities-home-1-container21">
                      <h3 className="facilities-home-1-title14 h2Light">
                        {props.feature1Title111 ?? (
                          <Fragment>
                            <span className="facilities-home-1-text23">
                              Décor &amp; Design Services
                            </span>
                          </Fragment>
                        )}
                      </h3>
                    </div>
                    <animate-on-reveal
                      animation="fadeIn"
                      duration="2000ms"
                      delay="100ms"
                      direction="normal"
                      easing="ease"
                      iteration="1"
                    >
                      <span
                        data-thq-animate-on-reveal="true"
                        className="facilities-home-1-description14 P-Light"
                      >
                        {props.feature1Description111 ?? (
                          <Fragment>
                            <span className="facilities-home-1-text18">
                              Our dedicated décor team works closely with you to
                              bring your vision to life. From elegant wedding
                              themes to corporate setups, we provide tailored
                              decoration services that match your event’s style.
                              Whether you’re looking for luxurious floral
                              arrangements or modern minimalist designs, we have
                              you covered.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </animate-on-reveal>
                  </div>
                </div>
              </div>
              <div className="facilities-home-1-container22 UbuntuLight-14 thq-flex-column">
                <div className="facilities-home-1-feature15 UbuntuLight-14 thq-flex-column">
                  <div className="facilities-home-1-container23 thq-team-image-round">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      className="facilities-home-1-icon25 thq-team-image-round"
                    >
                      <path
                        d="M14 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H17v11.5a.5.5 0 0 1-1 0V7h-1.5a.5.5 0 0 1-.5-.5zM13 3H6.14a2.5 2.5 0 0 0-2.452 2.01L3.49 6h-.74a.75.75 0 0 0 0 1.5h.44l-.111.56A1.5 1.5 0 0 0 2 9.5v5A1.5 1.5 0 0 0 3.5 16H4v1a1 1 0 1 0 2 0v-1h8v1a1 1 0 0 0 1 1v-3H3.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5H15V8H4.11l.559-2.794A1.5 1.5 0 0 1 6.139 4H13zm2 9a1 1 0 1 0-2 0a1 1 0 0 0 2 0m-8 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <img
                      alt={props.feature1ImageAlt1111}
                      src={props.feature1ImageSrc1111}
                      className="facilities-home-1-image5 thq-team-image-round"
                    />
                  </div>
                  <div className="facilities-home-1-content6 UbuntuLight-14 thq-flex-column">
                    <div className="facilities-home-1-container24">
                      <h3 className="facilities-home-1-title15 h2Light">
                        {props.feature1Title1111 ?? (
                          <Fragment>
                            <span className="facilities-home-1-text26">
                              Parking &amp; Accessibility
                            </span>
                          </Fragment>
                        )}
                      </h3>
                    </div>
                    <animate-on-reveal
                      animation="fadeIn"
                      duration="2000ms"
                      delay="100ms"
                      direction="normal"
                      easing="ease"
                      iteration="1"
                    >
                      <span
                        data-thq-animate-on-reveal="true"
                        className="facilities-home-1-description15 P-Light"
                      >
                        {props.feature1Description1111 ?? (
                          <Fragment>
                            <span className="facilities-home-1-text20">
                              Our venue offers ample parking space to
                              accommodate all your guests, ensuring a
                              stress-free arrival experience. For added
                              convenience, we provide lift access to all levels,
                              making the venue fully accessible to everyone.
                              Additionally, our venue’s iconic central location
                              in Hingna, Nagpur, is easily accessible from all
                              parts of the city.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </animate-on-reveal>
                  </div>
                </div>
              </div>
            </div>
            <p className="facilities-home-1-text12 p">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="facilities-home-1-text21">
                    At Marigold Banquet Hall, we offer an exceptional range of
                    facilities to ensure your event is as smooth, memorable, and
                    stress-free as possible. Our venue is designed to cater to
                    all types of occasions, from grand weddings to corporate
                    events, while providing top-tier amenities.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="facilities-home-1-actions thq-flex-row">
              <button className="facilities-home-1-button menu">
                <Link href="/facilities-at-marigold-celebration">
                  <a className="facilities-home-1-link1 thq-button-outline">
                    {props.action2 ?? (
                      <Fragment>
                        <span className="facilities-home-1-text27">
                          Explore Our Facilities
                        </span>
                      </Fragment>
                    )}
                  </a>
                </Link>
              </button>
              <a
                href="https://maps.app.goo.gl/GiGSr8YoRhvdiw8U8"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="facilities-home-1-container25">
                  <span className="facilities-home-1-text14">
                    {props.text2101 ?? (
                      <Fragment>
                        <span className="facilities-home-1-text24">
                          Verify Review
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 48 48"
                    className="facilities-home-1-icon27"
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
        </div>
      </section>
      <style jsx>
        {`
          .facilities-home-1-layout302 {
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            backdrop-filter: blur(4px);
            background-size: cover;
            background-image: radial-gradient(
              circle at center,
              rgba(8, 18, 100, 0.74) 8%,
              rgba(133, 44, 134, 0.45) 100%,
              rgba(133, 44, 134, 0.45) 70%,
              rgba(9, 10, 11, 0.23) 30%
            );
            background-repeat: no-repeat;
            background-position: center;
          }
          .facilities-home-1-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .facilities-home-1-section-title {
            gap: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
          }
          .facilities-home-1-text10 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.6;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-buttonradius);
            padding-right: var(--dl-space-space-unit);
            text-transform: none;
            text-decoration: none;
            background-color: rgba(0, 0, 0, 0.55);
          }
          .facilities-home-1-text11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            margin-left: var(--dl-space-space-halfunit);
          }
          .facilities-home-1-content1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .facilities-home-1-container10 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            border-radius: var(--dl-radius-radius-buttonradius);
            flex-direction: column;
          }
          .facilities-home-1-feature11 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            transform: scale(0.98);
            align-self: center;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: rgba(179, 132, 43, 0.8);
            border-style: dotted;
            border-width: 1px;
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-buttonradius);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-unit);
            background-color: rgba(0, 0, 0, 0.5);
          }
          .facilities-home-1-feature11:hover {
            transform: scale(1);
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            backdrop-filter: blur(2px);
            background-color: rgba(0, 0, 0, 0.68);
          }
          .facilities-home-1-container11 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .facilities-home-1-icon10 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            padding: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-accent1);
            border-style: dotted;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .facilities-home-1-image1 {
            display: none;
          }
          .facilities-home-1-content2 {
            gap: var(--dl-space-space-halfunit);
          }
          .facilities-home-1-container12 {
            height: 40px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .facilities-home-1-title11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-style: normal;
            text-align: center;
          }
          .facilities-home-1-description11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            text-align: left;
            padding-left: var(--dl-space-space-halfunit);
          }
          .facilities-home-1-container13 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            border-radius: var(--dl-radius-radius-buttonradius);
            flex-direction: column;
          }
          .facilities-home-1-feature12 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            transform: scale(0.98);
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: rgba(179, 132, 43, 0.8);
            border-style: dotted;
            border-width: 1px;
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-buttonradius);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-unit);
            background-color: rgba(0, 0, 0, 0.5);
          }
          .facilities-home-1-feature12:hover {
            transform: scale(1);
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            backdrop-filter: blur(2px);
            background-color: rgba(0, 0, 0, 0.68);
          }
          .facilities-home-1-container14 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .facilities-home-1-icon12 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            padding: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-accent1);
            border-style: dotted;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .facilities-home-1-image2 {
            display: none;
          }
          .facilities-home-1-content3 {
            gap: var(--dl-space-space-halfunit);
          }
          .facilities-home-1-container15 {
            height: 40px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .facilities-home-1-title12 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-style: normal;
            text-align: center;
          }
          .facilities-home-1-description12 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            text-align: left;
            padding-left: var(--dl-space-space-halfunit);
          }
          .facilities-home-1-container16 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            border-radius: var(--dl-radius-radius-buttonradius);
            flex-direction: column;
          }
          .facilities-home-1-feature13 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            transform: scale(0.98);
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: rgba(179, 132, 43, 0.8);
            border-style: dotted;
            border-width: 1px;
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-buttonradius);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-unit);
            background-color: rgba(0, 0, 0, 0.5);
          }
          .facilities-home-1-feature13:hover {
            transform: scale(1);
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            backdrop-filter: blur(2px);
            background-color: rgba(0, 0, 0, 0.68);
          }
          .facilities-home-1-container17 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .facilities-home-1-icon18 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            padding: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-accent1);
            border-style: dotted;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .facilities-home-1-image3 {
            display: none;
          }
          .facilities-home-1-content4 {
            gap: var(--dl-space-space-halfunit);
          }
          .facilities-home-1-container18 {
            height: 40px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .facilities-home-1-title13 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-style: normal;
            text-align: center;
          }
          .facilities-home-1-description13 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            text-align: left;
            padding-left: var(--dl-space-space-halfunit);
          }
          .facilities-home-1-container19 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            border-radius: var(--dl-radius-radius-buttonradius);
            flex-direction: column;
          }
          .facilities-home-1-feature14 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            transform: scale(0.98);
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: rgba(179, 132, 43, 0.8);
            border-style: dotted;
            border-width: 1px;
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-buttonradius);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-unit);
            background-color: rgba(0, 0, 0, 0.5);
          }
          .facilities-home-1-feature14:hover {
            transform: scale(1);
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            backdrop-filter: blur(2px);
            background-color: rgba(0, 0, 0, 0.68);
          }
          .facilities-home-1-container20 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .facilities-home-1-icon20 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            padding: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-accent1);
            border-style: dotted;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .facilities-home-1-image4 {
            display: none;
          }
          .facilities-home-1-content5 {
            gap: var(--dl-space-space-halfunit);
          }
          .facilities-home-1-container21 {
            height: 40px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .facilities-home-1-title14 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-style: normal;
            text-align: center;
          }
          .facilities-home-1-description14 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            text-align: left;
            padding-left: var(--dl-space-space-halfunit);
          }
          .facilities-home-1-container22 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            border-radius: var(--dl-radius-radius-buttonradius);
            flex-direction: column;
          }
          .facilities-home-1-feature15 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            transform: scale(0.98);
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: rgba(179, 132, 43, 0.8);
            border-style: dotted;
            border-width: 1px;
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-buttonradius);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-unit);
            background-color: rgba(0, 0, 0, 0.5);
          }
          .facilities-home-1-feature15:hover {
            transform: scale(1);
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            backdrop-filter: blur(2px);
            background-color: rgba(0, 0, 0, 0.68);
          }
          .facilities-home-1-container23 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .facilities-home-1-icon25 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            padding: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-accent1);
            border-style: dotted;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .facilities-home-1-image5 {
            display: none;
          }
          .facilities-home-1-content6 {
            gap: var(--dl-space-space-halfunit);
          }
          .facilities-home-1-container24 {
            height: 40px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .facilities-home-1-title15 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-style: normal;
            text-align: center;
          }
          .facilities-home-1-description15 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            text-align: left;
            padding-left: var(--dl-space-space-halfunit);
          }
          .facilities-home-1-text12 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            margin-left: var(--dl-space-space-unit);
            animation-name: none;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .facilities-home-1-actions {
            padding: var(--dl-space-space-unit);
            position: relative;
            align-self: flex-start;
            align-items: center;
            justify-content: center;
          }
          .facilities-home-1-button {
            fill: transparent;
            flex: 1;
            color: transparent;
            display: none;
            transform: scale(0.99);
            border-width: 0px;
          }
          .facilities-home-1-link1 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
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
            background-color: rgba(0, 0, 0, 0.55);
          }
          .facilities-home-1-link1:hover {
            transform: scale(1);
            box-shadow: 3px 3px 25px 1px rgba(50, 0, 255, 0.41);
            border-style: dotted;
            border-width: 0.5px;
            background-color: rgba(61, 19, 234, 0.2);
          }
          .facilities-home-1-container25 {
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
          .facilities-home-1-container25:hover {
            box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.48);
            border-color: rgba(0, 0, 0, 0.77);
          }
          .facilities-home-1-text14 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 12px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 200;
            line-height: 1.6;
          }
          .facilities-home-1-icon27 {
            fill: #00ff38;
            color: #00ff38;
          }
          .facilities-home-1-text15 {
            display: inline-block;
          }
          .facilities-home-1-text18 {
            display: inline-block;
          }
          .facilities-home-1-text19 {
            display: inline-block;
          }
          .facilities-home-1-text20 {
            display: inline-block;
          }
          .facilities-home-1-text21 {
            display: inline-block;
          }
          .facilities-home-1-text22 {
            display: inline-block;
          }
          .facilities-home-1-text23 {
            display: inline-block;
          }
          .facilities-home-1-text24 {
            display: inline-block;
          }
          .facilities-home-1-text25 {
            display: inline-block;
          }
          .facilities-home-1-text26 {
            display: inline-block;
          }
          .facilities-home-1-text27 {
            display: inline-block;
          }
          .facilities-home-1-text28 {
            display: inline-block;
          }
          .facilities-home-1-text29 {
            display: inline-block;
          }
          .facilities-home-1-text30 {
            display: inline-block;
          }
          .facilities-home-1-text31 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .facilities-home-1-layout302 {
              display: none;
            }
          }
          @media (max-width: 599px) {
            .facilities-home-1-icon27 {
              fill: #00ff38;
              color: #00ff38;
            }
          }
          @media (max-width: 479px) {
            .facilities-home-1-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .facilities-home-1-actions {
              width: 100%;
              flex-wrap: wrap;
              margin-top: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 399px) {
            .facilities-home-1-layout302 {
              padding: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

FacilitiesHome1.defaultProps = {
  feature1ImageSrc11:
    'https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTU5NzE2NHw&ixlib=rb-4.0.3&q=80&w=1500',
  feature1ImageSrc1:
    'https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTU5NzE2NHw&ixlib=rb-4.0.3&q=80&w=1500',
  feature1Title: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTU5NzE2NHw&ixlib=rb-4.0.3&q=80&w=1500',
  feature1Description111: undefined,
  slogan: undefined,
  feature1Description1111: undefined,
  sectionDescription: undefined,
  feature1Description1: undefined,
  feature1ImageAlt: 'Elegant Venues Image',
  feature1ImageAlt111: 'Elegant Venues Image',
  feature1Title111: undefined,
  text2101: undefined,
  feature1ImageSrc111:
    'https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTU5NzE2NHw&ixlib=rb-4.0.3&q=80&w=1500',
  feature1Description11: undefined,
  feature1ImageAlt11: 'Elegant Venues Image',
  feature1ImageAlt1: 'Elegant Venues Image',
  rootClassName: '',
  feature1Title1111: undefined,
  action2: undefined,
  feature1ImageSrc1111:
    'https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTU5NzE2NHw&ixlib=rb-4.0.3&q=80&w=1500',
  feature1ImageAlt1111: 'Elegant Venues Image',
  feature1Title11: undefined,
  feature1Description: undefined,
  feature1Title1: undefined,
  sectionTitle: undefined,
}

FacilitiesHome1.propTypes = {
  feature1ImageSrc11: PropTypes.string,
  feature1ImageSrc1: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature1Description111: PropTypes.element,
  slogan: PropTypes.element,
  feature1Description1111: PropTypes.element,
  sectionDescription: PropTypes.element,
  feature1Description1: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature1ImageAlt111: PropTypes.string,
  feature1Title111: PropTypes.element,
  text2101: PropTypes.element,
  feature1ImageSrc111: PropTypes.string,
  feature1Description11: PropTypes.element,
  feature1ImageAlt11: PropTypes.string,
  feature1ImageAlt1: PropTypes.string,
  rootClassName: PropTypes.string,
  feature1Title1111: PropTypes.element,
  action2: PropTypes.element,
  feature1ImageSrc1111: PropTypes.string,
  feature1ImageAlt1111: PropTypes.string,
  feature1Title11: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1Title1: PropTypes.element,
  sectionTitle: PropTypes.element,
}

export default FacilitiesHome1
