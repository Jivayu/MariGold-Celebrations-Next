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
            <span className="facilities-home-1-text10 p">
              {props.slogan ?? (
                <Fragment>
                  <span className="facilities-home-1-text18">
                    Please Do Consultation With Us For Your Any Requirements.
                  </span>
                </Fragment>
              )}
            </span>
            <h2 className="facilities-home-1-text11">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="facilities-home-1-text37">
                    Facilities At Marigold Celebration
                  </span>
                </Fragment>
              )}
            </h2>
          </div>
          <div className="facilities-home-1-content1">
            <div className="thq-grid-5">
              <div className="facilities-home-1-container10 UbuntuLight-14 thq-flex-column">
                <div className="facilities-home-1-feature1 UbuntuLight-14 thq-flex-column">
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
                    <span className="facilities-home-1-description11 P-Light">
                      {props.feature1Description ?? (
                        <Fragment>
                          <span className="facilities-home-1-text36">
                            Our expansive banquet hall can accommodate up to
                            2000 guests comfortably. Whether you’re planning an
                            extravagant wedding or an intimate gathering, our
                            flexible seating arrangements and multiple event
                            spaces ensure the perfect setting for your occasion.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="facilities-home-1-feature2 UbuntuLight-14 thq-flex-column">
                <div className="facilities-home-1-container13">
                  <div className="facilities-home-1-container14">
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
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      className="facilities-home-1-icon18 thq-team-image-round"
                    >
                      <g fill="currentColor">
                        <path d="M8.5 6.128a.984.984 0 0 0-1.39 0l-1.629 1.63a.984.984 0 0 0 0 1.389l.897.897a11.4 11.4 0 0 1 2.895-3.142zm16.598 16.599a11.4 11.4 0 0 1-3.142 2.895l.898.897a.984.984 0 0 0 1.388 0l1.63-1.63a.984.984 0 0 0 0-1.388zM15.26 12.28a.627.627 0 0 1-.42.782l-2.293.686a.628.628 0 1 1-.36-1.204l2.292-.686c.332-.1.682.09.782.422m4.106 2.172a.63.63 0 0 1 .52.72l-.382 2.363a.628.628 0 0 1-1.24-.2l.382-2.363a.63.63 0 0 1 .72-.52m-4.339 6.018a.628.628 0 0 0 .884-.893l-1.7-1.684a.628.628 0 0 0-.884.892zm2.96-7.877a.662.662 0 1 1-.935-.936a.662.662 0 0 1 .935.936m1.272 8.039a.662.662 0 1 1-.936-.936a.662.662 0 0 1 .935.936m-8.834-2.831a.662.662 0 1 0 .936-.935a.662.662 0 0 0-.936.935"></path>
                        <path d="M22.059 22.059A8.568 8.568 0 1 1 9.941 9.941a8.568 8.568 0 0 1 12.116 12.116m-5.176.93c.485.079.966.156 1.402.02c.446-.145.79-.495 1.132-.845c.208-.212.415-.424.645-.589c.227-.162.488-.293.75-.423c.44-.22.882-.44 1.16-.817c.273-.37.345-.854.418-1.34c.043-.294.087-.588.175-.858c.083-.255.215-.506.348-.76c.229-.437.463-.883.463-1.377c0-.483-.233-.931-.462-1.371a5 5 0 0 1-.349-.765c-.088-.271-.133-.566-.178-.86c-.074-.483-.148-.966-.414-1.34c-.275-.382-.72-.6-1.162-.82a5.3 5.3 0 0 1-.749-.419a5.4 5.4 0 0 1-.62-.57c-.35-.356-.703-.717-1.157-.865c-.43-.14-.905-.061-1.39.019a5.6 5.6 0 0 1-.895.098c-.29 0-.587-.048-.883-.096c-.485-.078-.966-.156-1.402-.02c-.446.145-.79.496-1.132.845c-.208.212-.415.424-.645.59a5.5 5.5 0 0 1-.75.422c-.44.22-.882.44-1.16.817c-.273.37-.345.854-.418 1.34a5.3 5.3 0 0 1-.175.859a5 5 0 0 1-.348.759c-.23.437-.463.884-.463 1.377c0 .483.233.931.462 1.371c.134.257.265.51.349.766c.088.27.133.565.178.859c.074.484.148.966.414 1.34c.275.382.72.601 1.162.82c.262.128.523.257.749.42c.217.16.418.364.62.57c.35.355.703.716 1.157.864c.442.14.923.06 1.407-.02c.294-.048.59-.097.878-.097c.29 0 .587.048.883.096"></path>
                        <path d="M4.216 3.233a5.08 5.08 0 0 1 7.178 0l.2.2c4.675-1.634 10.081-.586 13.82 3.153s4.787 9.146 3.153 13.82l.2.2a5.08 5.08 0 0 1 0 7.178l-1.63 1.63a5.08 5.08 0 0 1-7.179 0l-.543-.544a13.31 13.31 0 0 1-12.83-3.456A13.31 13.31 0 0 1 3.13 12.585l-.544-.543a5.08 5.08 0 0 1 0-7.179zM9.98 4.648a3.08 3.08 0 0 0-4.35 0L4 6.278a3.08 3.08 0 0 0 0 4.35l1.403 1.402A11.32 11.32 0 0 0 8 24a11.32 11.32 0 0 0 11.97 2.597L21.373 28a3.08 3.08 0 0 0 4.35 0l1.63-1.63a3.08 3.08 0 0 0 0-4.35l-1.142-1.141C28.221 16.673 27.483 11.483 24 8s-8.673-4.22-12.878-2.211z"></path>
                      </g>
                    </svg>
                    <img
                      alt={props.feature2ImageAlt}
                      src={props.feature2ImageSrc}
                      className="facilities-home-1-image2 thq-team-image-round"
                    />
                  </div>
                </div>
                <div className="facilities-home-1-content3 UbuntuLight-14 thq-flex-column">
                  <div className="facilities-home-1-container15">
                    <h3 className="facilities-home-1-title12 h2Light">
                      {props.feature2Title ?? (
                        <Fragment>
                          <span className="facilities-home-1-text32">
                            <span>Fine Dining Catering</span>
                            <br></br>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                  </div>
                  <span className="facilities-home-1-description12 P-Light">
                    {props.feature2Description ?? (
                      <Fragment>
                        <span className="facilities-home-1-text35">
                          We offer customizable catering options to suit any
                          event style. From lavish multi-course dinners to
                          casual buffets, our in-house culinary team crafts
                          delicious, bespoke menus that reflect your taste and
                          preferences. Whether it’s traditional or contemporary
                          cuisine, our chefs ensure a delightful dining
                          experience for your guests.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="facilities-home-1-feature3 UbuntuLight-14 thq-flex-column">
                <div className="facilities-home-1-container16">
                  <div className="facilities-home-1-container17">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="facilities-home-1-icon23 thq-team-image-round"
                    >
                      <path
                        d="M19.65 4.5L16.91.96l3.93-.78l.78 3.92zm-2.94.57l-2.74-3.53l-1.97.39l2.75 3.53zm-4.9.98L9.07 2.5l-1.97.41l2.75 3.53zM4.16 3.5l-.98.19a1.995 1.995 0 0 0-1.57 2.35L2 8l4.9-.97zM22 8v10c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2V8zm-2 2H4v8h16zM7 24h2v-2H7zm8 0h2v-2h-2zm-4 0h2v-2h-2z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <img
                      alt={props.feature3ImageAlt}
                      src={props.feature3ImageSrc}
                      className="facilities-home-1-image3 thq-team-image-round"
                    />
                  </div>
                </div>
                <div className="facilities-home-1-content4 UbuntuLight-14 thq-flex-column">
                  <div className="facilities-home-1-container18">
                    <h3 className="facilities-home-1-title13 h2Light">
                      {props.feature3Title ?? (
                        <Fragment>
                          <span className="facilities-home-1-text24">
                            <span>Photography &amp; Videography Services </span>
                            <br className="h2Light"></br>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                  </div>
                  <span className="facilities-home-1-description13 P-Light">
                    {props.feature3Description ?? (
                      <Fragment>
                        <span className="facilities-home-1-text20">
                          Preserve every special moment with our professional
                          photography and videography services. Our experienced
                          team specializes in capturing the essence of your
                          event, whether it’s candid wedding moments or
                          corporate highlights. We also provide event
                          videography, ensuring that every detail is documented
                          in high quality.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="facilities-home-1-feature4 UbuntuLight-14 thq-flex-column">
                <div className="facilities-home-1-container19">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="facilities-home-1-icon25 thq-team-image-round"
                  >
                    <g fill="currentColor">
                      <path d="M16.48 3.03c-1.05 0-1.91.85-1.91 1.91v1.35a1.91 1.91 0 1 0 3.82 0V4.94a1.923 1.923 0 0 0-1.91-1.91"></path>
                      <path d="M13.81 12.1V6.56c0 1.47 1.2 2.67 2.67 2.67s2.67-1.2 2.67-2.67v7.06h-5.34v1.28h5.34v.2h.016a2.677 2.677 0 0 0 2.654 2.38a2.677 2.677 0 0 0 2.654-2.38h.016v3.557h-5.31v1.28h5.31v3.676l1.054-1.492l-.714-1.97a.5.5 0 0 1 .94-.341l.477 1.315l.722-1.022l-.708-1.93a.5.5 0 0 1 .938-.345l.471 1.282l.812-1.148a.5.5 0 0 1 .816.576l-.812 1.15l1.368.012a.5.5 0 1 1-.008 1l-2.062-.018l-.697.987l1.327.011a.5.5 0 1 1-.008 1l-2.02-.017L25.44 24h-.951h1.58c.24 0 .42.19.42.42v5.19c0 .31-.25.57-.57.57H7.03c-.31 0-.57-.26-.57-.57v-5.19c0-.23.19-.42.42-.42h.63l-.08-.143l-1.103-.41l-.996.928a.5.5 0 1 1-.682-.73l.63-.588l-.661-.246l-1.37.984a.425.425 0 0 1-.496-.69l.906-.651l-.792-.295a.5.5 0 0 1 .348-.938l.724.27l-.268-.979a.425.425 0 1 1 .82-.224l.429 1.568l1.76.654l-1.248-2.236a.5.5 0 0 1-.082-.147l-.996-1.783a.5.5 0 0 1 .874-.488l.618 1.108l.629-1.025a.5.5 0 1 1 .852.523l-.922 1.503l.468.84l.342-.557a.5.5 0 0 1 .852.524l-.635 1.034l1.039 1.862V18.12h5.34v-1.28H8.47V12.1h.016a2.677 2.677 0 0 0 2.654 2.38a2.677 2.677 0 0 0 2.654-2.38zm0 9.1v1.28h5.34V21.2zM7.46 25v2.61h18.03V25z"></path>
                      <path d="M11.14 8.28c-1.05 0-1.91.85-1.91 1.91v1.35a1.91 1.91 0 1 0 3.82 0v-1.35a1.923 1.923 0 0 0-1.91-1.91m10.68 3c-1.05 0-1.91.85-1.91 1.91v1.35a1.91 1.91 0 1 0 3.82 0v-1.35a1.923 1.923 0 0 0-1.91-1.91"></path>
                    </g>
                  </svg>
                  <img
                    alt={props.feature4ImageAlt}
                    src={props.feature4ImageSrc}
                    className="facilities-home-1-image4 thq-team-image-round"
                  />
                </div>
                <div className="facilities-home-1-content5 UbuntuLight-14 thq-flex-column">
                  <div className="facilities-home-1-container20">
                    <h3 className="facilities-home-1-title14 h2Light">
                      {props.feature4Title ?? (
                        <Fragment>
                          <span className="facilities-home-1-text21">
                            <span>Décor &amp; Design Services</span>
                            <br></br>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                  </div>
                  <span className="facilities-home-1-description14 P-Light">
                    {props.feature4Description ?? (
                      <Fragment>
                        <span className="facilities-home-1-text14">
                          Our dedicated décor team works closely with you to
                          bring your vision to life. From elegant wedding themes
                          to corporate setups, we provide tailored decoration
                          services that match your event’s style. Whether you’re
                          looking for luxurious floral arrangements or modern
                          minimalist designs, we have you covered.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="facilities-home-1-feature5 UbuntuLight-14 thq-flex-column">
                <div className="facilities-home-1-container21">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    className="facilities-home-1-icon30 thq-team-image-round"
                  >
                    <path
                      d="M14 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H17v11.5a.5.5 0 0 1-1 0V7h-1.5a.5.5 0 0 1-.5-.5zM13 3H6.14a2.5 2.5 0 0 0-2.452 2.01L3.49 6h-.74a.75.75 0 0 0 0 1.5h.44l-.111.56A1.5 1.5 0 0 0 2 9.5v5A1.5 1.5 0 0 0 3.5 16H4v1a1 1 0 1 0 2 0v-1h8v1a1 1 0 0 0 1 1v-3H3.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5H15V8H4.11l.559-2.794A1.5 1.5 0 0 1 6.139 4H13zm2 9a1 1 0 1 0-2 0a1 1 0 0 0 2 0m-8 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <img
                    alt={props.feature5ImageAlt}
                    src={props.feature5ImageSrc}
                    className="facilities-home-1-image5 thq-team-image-round"
                  />
                </div>
                <div className="facilities-home-1-content6 UbuntuLight-14 thq-flex-column">
                  <div className="facilities-home-1-container22">
                    <h3 className="facilities-home-1-title15 h2Light">
                      {props.feature5Title ?? (
                        <Fragment>
                          <span className="facilities-home-1-text27">
                            <span>Parking &amp; Accessibility</span>
                            <br></br>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                  </div>
                  <span className="facilities-home-1-description15 P-Light">
                    {props.feature5Description ?? (
                      <Fragment>
                        <span className="facilities-home-1-text31">
                          Our venue offers ample parking space to accommodate
                          all your guests, ensuring a stress-free arrival
                          experience. For added convenience, we provide lift
                          access to all levels, making the venue fully
                          accessible to everyone. Additionally, our venue’s
                          iconic central location in Hingna, Nagpur, is easily
                          accessible from all parts of the city.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <p className="facilities-home-1-text12 p">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="facilities-home-1-text19">
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
                  <a className="facilities-home-1-link thq-button-outline">
                    {props.action2 ?? (
                      <Fragment>
                        <span className="facilities-home-1-text30">
                          Explore Our Facilities
                        </span>
                      </Fragment>
                    )}
                  </a>
                </Link>
              </button>
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
            background-color: rgba(25, 24, 24, 0.4);
          }
          .facilities-home-1-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .facilities-home-1-section-title {
            gap: var(--dl-space-space-unit);
            align-items: flex-start;
          }
          .facilities-home-1-text10 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
          }
          .facilities-home-1-text11 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 18px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
            text-transform: none;
            text-decoration: none;
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
            background-size: cover;
            background-image: url('/images/Marigold Images/big-hall-200h.webp');
            background-repeat: no-repeat;
            background-position: center;
          }
          .facilities-home-1-feature1 {
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
          .facilities-home-1-feature1:hover {
            transform: scale(1);
            background-color: rgba(0, 0, 0, 0.6);
          }
          .facilities-home-1-container11 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .facilities-home-1-icon10 {
            fill: var(--dl-color-primary-logo-color-3);
            color: var(--dl-color-primary-logo-color-3);
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
          .facilities-home-1-feature2 {
            gap: var(--dl-space-space-unit);
            width: auto;
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
          .facilities-home-1-feature2:hover {
            transform: scale(1);
          }
          .facilities-home-1-container13 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .facilities-home-1-container14 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .facilities-home-1-icon12 {
            fill: var(--dl-color-primary-logo-color-3);
            color: var(--dl-color-primary-logo-color-3);
            padding: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-accent1);
            border-style: dotted;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .facilities-home-1-icon18 {
            fill: var(--dl-color-primary-logo-color-3);
            color: var(--dl-color-primary-logo-color-3);
            display: none;
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
          .facilities-home-1-feature3 {
            gap: var(--dl-space-space-unit);
            width: auto;
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
          .facilities-home-1-feature3:hover {
            transform: scale(1);
          }
          .facilities-home-1-container16 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .facilities-home-1-container17 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .facilities-home-1-icon23 {
            fill: var(--dl-color-primary-logo-color-3);
            color: var(--dl-color-primary-logo-color-3);
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
          .facilities-home-1-feature4 {
            gap: var(--dl-space-space-unit);
            width: auto;
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
          .facilities-home-1-feature4:hover {
            transform: scale(1);
          }
          .facilities-home-1-container19 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .facilities-home-1-icon25 {
            fill: var(--dl-color-primary-logo-color-3);
            color: var(--dl-color-primary-logo-color-3);
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
          .facilities-home-1-container20 {
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
          .facilities-home-1-feature5 {
            gap: var(--dl-space-space-unit);
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
          .facilities-home-1-feature5:hover {
            transform: scale(1);
          }
          .facilities-home-1-container21 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-color: var(--dl-color-theme-accent1);
            border-style: dotted;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
            justify-content: center;
          }
          .facilities-home-1-icon30 {
            fill: var(--dl-color-primary-logo-color-3);
            color: var(--dl-color-primary-logo-color-3);
          }
          .facilities-home-1-image5 {
            display: none;
          }
          .facilities-home-1-content6 {
            gap: var(--dl-space-space-halfunit);
          }
          .facilities-home-1-container22 {
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
            fill: var(--dl-color-primary-logo-color-2);
            color: var(--dl-color-primary-logo-color-2);
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
            transform: scale(0.99);
            border-width: 0px;
          }
          .facilities-home-1-link {
            fill: var(--dl-color-primary-logo-color-2);
            color: var(--dl-color-primary-logo-color-2);
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
          .facilities-home-1-link:hover {
            transform: scale(1);
            box-shadow: 3px 3px 25px 1px rgba(50, 0, 255, 0.41);
            border-style: dotted;
            border-width: 0.5px;
            background-color: rgba(61, 19, 234, 0.2);
          }
          .facilities-home-1-text14 {
            display: inline-block;
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
          .facilities-home-1-text24 {
            display: inline-block;
          }
          .facilities-home-1-text27 {
            display: inline-block;
          }
          .facilities-home-1-text30 {
            display: inline-block;
          }
          .facilities-home-1-text31 {
            display: inline-block;
          }
          .facilities-home-1-text32 {
            display: inline-block;
          }
          .facilities-home-1-text35 {
            display: inline-block;
          }
          .facilities-home-1-text36 {
            display: inline-block;
          }
          .facilities-home-1-text37 {
            display: inline-block;
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
  feature4Description: undefined,
  feature1Title: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTU5NzE2NHw&ixlib=rb-4.0.3&q=80&w=1500',
  feature5ImageSrc:
    'https://images.unsplash.com/photo-1712903277162-a151fbb661cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTU5NzE2NHw&ixlib=rb-4.0.3&q=80&w=1500',
  slogan: undefined,
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1521034270290-43cb830a0713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTU5NzE2M3w&ixlib=rb-4.0.3&q=80&w=1500',
  sectionDescription: undefined,
  feature5ImageAlt: 'Events Information Image',
  feature4ImageAlt: 'Gallery Image',
  feature2ImageAlt: 'Facilities Image',
  feature3Description: undefined,
  feature4Title: undefined,
  feature1ImageAlt: 'Elegant Venues Image',
  feature3Title: undefined,
  feature3ImageAlt: 'Event Planning Image',
  rootClassName: '',
  feature5Title: undefined,
  action2: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1602562086757-78809c34ceb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTU5NzE2Nnw&ixlib=rb-4.0.3&q=80&w=1500',
  feature5Description: undefined,
  feature2Title: undefined,
  feature2Description: undefined,
  feature1Description: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1458336458944-27b9f90c7f38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTU5NzE2NXw&ixlib=rb-4.0.3&q=80&w=1500',
  sectionTitle: undefined,
}

FacilitiesHome1.propTypes = {
  feature4Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature5ImageSrc: PropTypes.string,
  slogan: PropTypes.element,
  feature4ImageSrc: PropTypes.string,
  sectionDescription: PropTypes.element,
  feature5ImageAlt: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature4Title: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  feature5Title: PropTypes.element,
  action2: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature5Description: PropTypes.element,
  feature2Title: PropTypes.element,
  feature2Description: PropTypes.element,
  feature1Description: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  sectionTitle: PropTypes.element,
}

export default FacilitiesHome1
