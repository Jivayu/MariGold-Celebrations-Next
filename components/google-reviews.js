import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const GoogleReviews = (props) => {
  return (
    <>
      <div
        className={`google-reviews-gallery3 thq-section-padding ${props.rootClassName} `}
      >
        <div className="google-reviews-max-width thq-section-max-width">
          <div className="google-reviews-section-title">
            <h2 className="google-reviews-text10 h2 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="google-reviews-text35">
                    Google Reviews - Best only
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="google-reviews-text11 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="google-reviews-text34">
                    A Big Thank you - &quot;People Like You, Behide Our
                    Success.&quot;
                  </span>
                </Fragment>
              )}
            </span>
            <button type="button" className="google-reviews-button button">
              <span>
                {props.button ?? (
                  <Fragment>
                    <span className="google-reviews-text26">Button</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
          <div className="google-reviews-content">
            <div className="google-reviews-container10">
              <img
                alt="Wedding Hall Setup"
                src={props.image1Src1}
                loading="lazy"
                className="google-reviews-image1 thq-img-ratio-4-3"
              />
              <span className="google-reviews-text13 thq-body-small">
                {props.image1Title ?? (
                  <Fragment>
                    <span className="google-reviews-text28">Image 1</span>
                  </Fragment>
                )}
              </span>
              <div className="google-reviews-container11">
                <span className="google-reviews-text14 thq-body-small">
                  {props.image1Description ?? (
                    <Fragment>
                      <span className="google-reviews-text30">
                        <span>Our Banner Ads</span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="google-reviews-container12">
              <img
                alt="marigold main hall"
                sizes="(min-width: 768px) 800px, 480px"
                src="/images/Marigold Images/hallpic-1-600w.webp"
                loading="lazy"
                srcSet="/images/Marigold Images//hallpic-1-600w.webp 800w, /images/Marigold Images/hallpic-1-mobile.webp 480w"
                className="google-reviews-image2 thq-img-ratio-4-3"
              />
              <span className="google-reviews-text15 thq-body-small">
                {props.image2Title ?? (
                  <Fragment>
                    <span className="google-reviews-text39">
                      Corporate Event Venue
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="google-reviews-container13">
                <span className="google-reviews-text16 thq-body-small">
                  {props.image2Description ?? (
                    <Fragment>
                      <span className="google-reviews-text38">
                        Our Grand Main Hall
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="google-reviews-container14">
              <img
                alt={props.image3Alt}
                src="/images/Marigold Images/hallpic-6-300h.webp"
                loading="eager"
                className="google-reviews-image3 thq-img-ratio-4-3"
              />
              <span className="google-reviews-text17 thq-body-small">
                {props.image3Title ?? (
                  <Fragment>
                    <span className="google-reviews-text36">
                      Social Gathering Decor
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="google-reviews-container15">
                <span className="google-reviews-text18 thq-body-small">
                  {props.image3Description ?? (
                    <Fragment>
                      <span className="google-reviews-text29">
                        Our Grand Main Hall with Some Stage Decor arena
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div
            data-thq="slider"
            data-navigation="true"
            data-pagination="true"
            className="google-reviews-slider swiper"
          >
            <div data-thq="slider-wrapper" className="swiper-wrapper">
              <div
                data-thq="slider-slide"
                className="google-reviews-slider-slide1 swiper-slide"
              >
                <div className="google-reviews-google-reviews1">
                  <div className="google-reviews-container16">
                    <span className="google-reviews-text19">
                      {props.text113251 ?? (
                        <Fragment>
                          <span className="google-reviews-text40">
                            Atharva Diwate
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <a
                      href={props.textUrl91}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="google-reviews-link1"
                    >
                      {props.text101 ?? (
                        <Fragment>
                          <span className="google-reviews-text41">
                            marigoldcelebration.in
                          </span>
                        </Fragment>
                      )}
                    </a>
                    <div className="google-reviews-rating-stars1">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 20 20"
                        className="google-reviews-icon10"
                      >
                        <path
                          d="m10 15l-5.878 3.09l1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955l6.572.955l-4.756 4.635l1.123 6.545z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 20 20"
                        className="google-reviews-icon12"
                      >
                        <path
                          d="m10 15l-5.878 3.09l1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955l6.572.955l-4.756 4.635l1.123 6.545z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 20 20"
                        className="google-reviews-icon14"
                      >
                        <path
                          d="m10 15l-5.878 3.09l1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955l6.572.955l-4.756 4.635l1.123 6.545z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 20 20"
                        className="google-reviews-icon16"
                      >
                        <path
                          d="m10 15l-5.878 3.09l1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955l6.572.955l-4.756 4.635l1.123 6.545z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 20 20"
                        className="google-reviews-icon18"
                      >
                        <path
                          d="m10 15l-5.878 3.09l1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955l6.572.955l-4.756 4.635l1.123 6.545z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                    </div>
                  </div>
                  <div className="google-reviews-container17">
                    <div className="google-reviews-container18">
                      <a
                        href={props.textUrl1171}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="google-reviews-link2"
                      >
                        {props.text2171 ?? (
                          <Fragment>
                            <span className="google-reviews-text42">
                              Perfect for marriage, reception and big parties.
                              The two storey hall is perfect for any kind of
                              function. The celebration can take place at ground
                              floor and the dining at first floor. Lift and
                              stairs both are available. Hall is spacious and
                              completly air conditioned. Rooms are also
                              avaliable for guests. A small lawn is also
                              avaliable which can be used for some small
                              function in marriage. Many spots for photo and
                              selfie are avaliable in completed building.
                            </span>
                          </Fragment>
                        )}
                      </a>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/GiGSr8YoRhvdiw8U8"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="google-reviews-link3"
                    >
                      <div className="google-reviews-container19">
                        <span className="google-reviews-text20">
                          {props.text2101 ?? (
                            <Fragment>
                              <span className="google-reviews-text43">
                                Verify Review
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 48 48"
                          className="google-reviews-icon21"
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
                    <img
                      alt={props.imageAlt61}
                      src="https://services.google.com/fh/files/misc/google_g_icon_download.png"
                      className="google-reviews-image4"
                    />
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-slide"
                className="google-reviews-slider-slide2 swiper-slide"
              >
                <div className="google-reviews-google-reviews2">
                  <div className="google-reviews-container20">
                    <span className="google-reviews-text21">
                      {props.text11325 ?? (
                        <Fragment>
                          <span className="google-reviews-text33">
                            Atharva Diwate
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <a
                      href={props.textUrl9}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="google-reviews-link4"
                    >
                      {props.text10 ?? (
                        <Fragment>
                          <span className="google-reviews-text25">
                            marigoldcelebration.in
                          </span>
                        </Fragment>
                      )}
                    </a>
                    <div className="google-reviews-rating-stars2">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 20 20"
                        className="google-reviews-icon23"
                      >
                        <path
                          d="m10 15l-5.878 3.09l1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955l6.572.955l-4.756 4.635l1.123 6.545z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 20 20"
                        className="google-reviews-icon25"
                      >
                        <path
                          d="m10 15l-5.878 3.09l1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955l6.572.955l-4.756 4.635l1.123 6.545z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 20 20"
                        className="google-reviews-icon27"
                      >
                        <path
                          d="m10 15l-5.878 3.09l1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955l6.572.955l-4.756 4.635l1.123 6.545z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 20 20"
                        className="google-reviews-icon29"
                      >
                        <path
                          d="m10 15l-5.878 3.09l1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955l6.572.955l-4.756 4.635l1.123 6.545z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 20 20"
                        className="google-reviews-icon31"
                      >
                        <path
                          d="m10 15l-5.878 3.09l1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955l6.572.955l-4.756 4.635l1.123 6.545z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                    </div>
                  </div>
                  <div className="google-reviews-container21">
                    <div className="google-reviews-container22">
                      <a
                        href={props.textUrl117}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="google-reviews-link5"
                      >
                        {props.text217 ?? (
                          <Fragment>
                            <span className="google-reviews-text27">
                              Perfect for marriage, reception and big parties.
                              The two storey hall is perfect for any kind of
                              function. The celebration can take place at ground
                              floor and the dining at first floor. Lift and
                              stairs both are available. Hall is spacious and
                              completly air conditioned. Rooms are also
                              avaliable for guests. A small lawn is also
                              avaliable which can be used for some small
                              function in marriage. Many spots for photo and
                              selfie are avaliable in completed building.
                            </span>
                          </Fragment>
                        )}
                      </a>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/GiGSr8YoRhvdiw8U8"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="google-reviews-link6"
                    >
                      <div className="google-reviews-container23">
                        <span className="google-reviews-text22">
                          {props.text210 ?? (
                            <Fragment>
                              <span className="google-reviews-text37">
                                Verify Review
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 48 48"
                          className="google-reviews-icon34"
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
                    <img
                      alt={props.imageAlt6}
                      src="https://services.google.com/fh/files/misc/google_g_icon_download.png"
                      className="google-reviews-image5"
                    />
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-slide"
                className="google-reviews-slider-slide3 swiper-slide"
              >
                <div className="google-reviews-google-reviews3">
                  <div className="google-reviews-container24">
                    <span className="google-reviews-text23">
                      {props.text113252 ?? (
                        <Fragment>
                          <span className="google-reviews-text44">
                            Atharva Diwate
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <a
                      href={props.textUrl92}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="google-reviews-link7"
                    >
                      {props.text102 ?? (
                        <Fragment>
                          <span className="google-reviews-text45">
                            marigoldcelebration.in
                          </span>
                        </Fragment>
                      )}
                    </a>
                    <div className="google-reviews-rating-stars3">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 20 20"
                        className="google-reviews-icon36"
                      >
                        <path
                          d="m10 15l-5.878 3.09l1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955l6.572.955l-4.756 4.635l1.123 6.545z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 20 20"
                        className="google-reviews-icon38"
                      >
                        <path
                          d="m10 15l-5.878 3.09l1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955l6.572.955l-4.756 4.635l1.123 6.545z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 20 20"
                        className="google-reviews-icon40"
                      >
                        <path
                          d="m10 15l-5.878 3.09l1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955l6.572.955l-4.756 4.635l1.123 6.545z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 20 20"
                        className="google-reviews-icon42"
                      >
                        <path
                          d="m10 15l-5.878 3.09l1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955l6.572.955l-4.756 4.635l1.123 6.545z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 20 20"
                        className="google-reviews-icon44"
                      >
                        <path
                          d="m10 15l-5.878 3.09l1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955l6.572.955l-4.756 4.635l1.123 6.545z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                    </div>
                  </div>
                  <div className="google-reviews-container25">
                    <div className="google-reviews-container26">
                      <a
                        href={props.textUrl1172}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="google-reviews-link8"
                      >
                        {props.text2172 ?? (
                          <Fragment>
                            <span className="google-reviews-text46">
                              Perfect for marriage, reception and big parties.
                              The two storey hall is perfect for any kind of
                              function. The celebration can take place at ground
                              floor and the dining at first floor. Lift and
                              stairs both are available. Hall is spacious and
                              completly air conditioned. Rooms are also
                              avaliable for guests. A small lawn is also
                              avaliable which can be used for some small
                              function in marriage. Many spots for photo and
                              selfie are avaliable in completed building.
                            </span>
                          </Fragment>
                        )}
                      </a>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/GiGSr8YoRhvdiw8U8"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="google-reviews-link9"
                    >
                      <div className="google-reviews-container27">
                        <span className="google-reviews-text24">
                          {props.text2102 ?? (
                            <Fragment>
                              <span className="google-reviews-text47">
                                Verify Review
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 48 48"
                          className="google-reviews-icon47"
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
                    <img
                      alt={props.imageAlt62}
                      src="https://services.google.com/fh/files/misc/google_g_icon_download.png"
                      className="google-reviews-image6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-pagination"
              className="google-reviews-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
            >
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
            </div>
            <div
              data-thq="slider-button-prev"
              className="swiper-button-prev"
            ></div>
            <div
              data-thq="slider-button-next"
              className="swiper-button-next"
            ></div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .google-reviews-gallery3 {
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            backdrop-filter: blur(3px);
            background-color: rgba(0, 0, 0, 0.59);
          }
          .google-reviews-max-width {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .google-reviews-section-title {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            max-width: auto;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .google-reviews-text10 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 200;
          }
          .google-reviews-text11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 12px;
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 300;
          }
          .google-reviews-button {
            display: none;
          }
          .google-reviews-content {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: none;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .google-reviews-container10 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .google-reviews-image1 {
            width: 100%;
            height: 300px;
            max-width: 600px;
            align-self: center;
            box-shadow: 1px 1px 12px 0px rgba(0, 0, 0, 0.3);
            transition: 0.3s;
            aspect-ratio: 16/9;
          }
          .google-reviews-image1:hover {
            transform: scale(1.05);
          }
          .google-reviews-text13 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-family: 'Ubuntu';
          }
          .google-reviews-container11 {
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .google-reviews-text14 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            text-align: center;
            font-family: 'Ubuntu';
          }
          .google-reviews-container12 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .google-reviews-image2 {
            width: 100%;
            height: 300px;
            max-width: 600px;
            align-self: center;
            box-shadow: 1px 1px 12px 0px rgba(0, 0, 0, 0.3);
            aspect-ratio: 16/9;
          }
          .google-reviews-text15 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-family: 'Ubuntu';
          }
          .google-reviews-container13 {
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .google-reviews-text16 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            text-align: center;
            font-family: 'Ubuntu';
          }
          .google-reviews-container14 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .google-reviews-image3 {
            width: 100%;
            height: 300px;
            max-width: 600px;
            box-shadow: 1px 1px 12px 0px rgba(0, 0, 0, 0.3);
            aspect-ratio: 16/9;
          }
          .google-reviews-text17 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-family: 'Ubuntu';
          }
          .google-reviews-container15 {
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .google-reviews-text18 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            text-align: center;
            font-family: 'Ubuntu';
          }
          .google-reviews-slider {
            width: 80%;
            height: 400px;
            display: inline-block;
          }
          .google-reviews-slider-slide1 {
            display: flex;
            border-radius: var(--dl-radius-radius-radius10);
            background-size: cover;
            justify-content: center;
            background-image: url('/images/Marigold Images/wedding-link-1400w.webp');
            background-repeat: no-repeat;
            background-position: center;
          }
          .google-reviews-google-reviews1 {
            gap: var(--dl-space-space-halfunit);
            width: 50%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            flex-direction: column;
            backdrop-filter: blur(2px);
            justify-content: center;
          }
          .google-reviews-container16 {
            width: 95%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .google-reviews-text19 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 1.5;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius10);
            margin-bottom: 3px;
            padding-right: var(--dl-space-space-halfunit);
            background-color: rgba(0, 0, 0, 0.5);
            border-top-width: 0.5px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
          }
          .google-reviews-link1 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 10px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 300;
            line-height: 1.4;
            margin-left: var(--dl-space-space-unit);
            margin-bottom: 2px;
          }
          .google-reviews-rating-stars1 {
            gap: 3px;
            flex: 0 0 auto;
            width: 34%;
            height: 34px;
            display: flex;
            align-self: flex-start;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-buttonradius);
            margin-bottom: var(--dl-space-space-halfunit);
            backdrop-filter: blur(3px);
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.49);
          }
          .google-reviews-icon10 {
            fill: var(--dl-color-primary-logo-color-6);
            color: var(--dl-color-primary-logo-color-6);
            width: 22px;
            height: 22px;
          }
          .google-reviews-icon12 {
            fill: var(--dl-color-primary-logo-color-6);
            color: var(--dl-color-primary-logo-color-6);
            width: 22px;
            height: 22px;
          }
          .google-reviews-icon14 {
            fill: var(--dl-color-primary-logo-color-6);
            color: var(--dl-color-primary-logo-color-6);
            width: 22px;
            height: 22px;
          }
          .google-reviews-icon16 {
            fill: var(--dl-color-primary-logo-color-6);
            color: var(--dl-color-primary-logo-color-6);
            width: 22px;
            height: 22px;
          }
          .google-reviews-icon18 {
            fill: var(--dl-color-primary-logo-color-6);
            color: var(--dl-color-primary-logo-color-6);
            width: 22px;
            height: 22px;
          }
          .google-reviews-container17 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-self: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .google-reviews-container18 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            border-radius: var(--dl-radius-radius-cardradius);
            flex-direction: column;
            backdrop-filter: blur(3px);
            justify-content: center;
          }
          .google-reviews-link2 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 12px;
            align-self: flex-start;
            box-shadow: 1px 1px 25px 0px rgba(0, 0, 0, 0.45);
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 200;
            line-height: 1.5;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-cardradius);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(0, 0, 0, 0.5);
          }
          .google-reviews-link3 {
            display: contents;
          }
          .google-reviews-container19 {
            gap: var(--dl-space-space-halfunit);
            width: auto;
            display: flex;
            align-self: flex-end;
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
          .google-reviews-container19:hover {
            box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.48);
            border-color: rgba(0, 0, 0, 0.77);
          }
          .google-reviews-text20 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 12px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 200;
            line-height: 1.6;
          }
          .google-reviews-icon21 {
            fill: #00ff38;
            color: #00ff38;
          }
          .google-reviews-image4 {
            width: 24px;
            height: 24px;
            align-self: center;
            object-fit: cover;
          }
          .google-reviews-slider-slide2 {
            display: flex;
            border-radius: var(--dl-radius-radius-radius10);
            background-size: cover;
            justify-content: center;
            background-image: url('/images/Marigold Images/wedding-link-1400w.webp');
            background-repeat: no-repeat;
            background-position: center;
          }
          .google-reviews-google-reviews2 {
            gap: var(--dl-space-space-halfunit);
            width: 50%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            flex-direction: column;
            backdrop-filter: blur(2px);
            justify-content: center;
          }
          .google-reviews-container20 {
            width: 95%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .google-reviews-text21 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 1.5;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius10);
            margin-bottom: 3px;
            padding-right: var(--dl-space-space-halfunit);
            background-color: rgba(0, 0, 0, 0.5);
            border-top-width: 0.5px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
          }
          .google-reviews-link4 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 10px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 300;
            line-height: 1.4;
            margin-left: var(--dl-space-space-unit);
            margin-bottom: 2px;
          }
          .google-reviews-rating-stars2 {
            gap: 3px;
            flex: 0 0 auto;
            width: 34%;
            height: 34px;
            display: flex;
            align-self: flex-start;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-buttonradius);
            margin-bottom: var(--dl-space-space-halfunit);
            backdrop-filter: blur(3px);
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.49);
          }
          .google-reviews-icon23 {
            fill: var(--dl-color-primary-logo-color-6);
            color: var(--dl-color-primary-logo-color-6);
            width: 22px;
            height: 22px;
          }
          .google-reviews-icon25 {
            fill: var(--dl-color-primary-logo-color-6);
            color: var(--dl-color-primary-logo-color-6);
            width: 22px;
            height: 22px;
          }
          .google-reviews-icon27 {
            fill: var(--dl-color-primary-logo-color-6);
            color: var(--dl-color-primary-logo-color-6);
            width: 22px;
            height: 22px;
          }
          .google-reviews-icon29 {
            fill: var(--dl-color-primary-logo-color-6);
            color: var(--dl-color-primary-logo-color-6);
            width: 22px;
            height: 22px;
          }
          .google-reviews-icon31 {
            fill: var(--dl-color-primary-logo-color-6);
            color: var(--dl-color-primary-logo-color-6);
            width: 22px;
            height: 22px;
          }
          .google-reviews-container21 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-self: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .google-reviews-container22 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            border-radius: var(--dl-radius-radius-cardradius);
            flex-direction: column;
            backdrop-filter: blur(3px);
            justify-content: center;
          }
          .google-reviews-link5 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 12px;
            align-self: flex-start;
            box-shadow: 1px 1px 25px 0px rgba(0, 0, 0, 0.45);
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 200;
            line-height: 1.5;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-cardradius);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(0, 0, 0, 0.5);
          }
          .google-reviews-link6 {
            display: contents;
          }
          .google-reviews-container23 {
            gap: var(--dl-space-space-halfunit);
            width: auto;
            display: flex;
            align-self: flex-end;
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
          .google-reviews-container23:hover {
            box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.48);
            border-color: rgba(0, 0, 0, 0.77);
          }
          .google-reviews-text22 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 12px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 200;
            line-height: 1.6;
          }
          .google-reviews-icon34 {
            fill: #00ff38;
            color: #00ff38;
          }
          .google-reviews-image5 {
            width: 24px;
            height: 24px;
            align-self: center;
            object-fit: cover;
          }
          .google-reviews-slider-slide3 {
            display: flex;
            border-radius: var(--dl-radius-radius-radius10);
            background-size: cover;
            justify-content: center;
            background-image: url('/images/Marigold Images/wedding-link-1400w.webp');
            background-repeat: no-repeat;
            background-position: center;
          }
          .google-reviews-google-reviews3 {
            gap: var(--dl-space-space-halfunit);
            width: 50%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            flex-direction: column;
            backdrop-filter: blur(2px);
            justify-content: center;
          }
          .google-reviews-container24 {
            width: 95%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .google-reviews-text23 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 1.5;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius10);
            margin-bottom: 3px;
            padding-right: var(--dl-space-space-halfunit);
            background-color: rgba(0, 0, 0, 0.5);
            border-top-width: 0.5px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
          }
          .google-reviews-link7 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 10px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 300;
            line-height: 1.4;
            margin-left: var(--dl-space-space-unit);
            margin-bottom: 2px;
          }
          .google-reviews-rating-stars3 {
            gap: 3px;
            flex: 0 0 auto;
            width: 34%;
            height: 34px;
            display: flex;
            align-self: flex-start;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-buttonradius);
            margin-bottom: var(--dl-space-space-halfunit);
            backdrop-filter: blur(3px);
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.49);
          }
          .google-reviews-icon36 {
            fill: var(--dl-color-primary-logo-color-6);
            color: var(--dl-color-primary-logo-color-6);
            width: 22px;
            height: 22px;
          }
          .google-reviews-icon38 {
            fill: var(--dl-color-primary-logo-color-6);
            color: var(--dl-color-primary-logo-color-6);
            width: 22px;
            height: 22px;
          }
          .google-reviews-icon40 {
            fill: var(--dl-color-primary-logo-color-6);
            color: var(--dl-color-primary-logo-color-6);
            width: 22px;
            height: 22px;
          }
          .google-reviews-icon42 {
            fill: var(--dl-color-primary-logo-color-6);
            color: var(--dl-color-primary-logo-color-6);
            width: 22px;
            height: 22px;
          }
          .google-reviews-icon44 {
            fill: var(--dl-color-primary-logo-color-6);
            color: var(--dl-color-primary-logo-color-6);
            width: 22px;
            height: 22px;
          }
          .google-reviews-container25 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-self: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .google-reviews-container26 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            border-radius: var(--dl-radius-radius-cardradius);
            flex-direction: column;
            backdrop-filter: blur(3px);
            justify-content: center;
          }
          .google-reviews-link8 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 12px;
            align-self: flex-start;
            box-shadow: 1px 1px 25px 0px rgba(0, 0, 0, 0.45);
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 200;
            line-height: 1.5;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-cardradius);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(0, 0, 0, 0.5);
          }
          .google-reviews-link9 {
            display: contents;
          }
          .google-reviews-container27 {
            gap: var(--dl-space-space-halfunit);
            width: auto;
            display: flex;
            align-self: flex-end;
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
          .google-reviews-container27:hover {
            box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.48);
            border-color: rgba(0, 0, 0, 0.77);
          }
          .google-reviews-text24 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 12px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 200;
            line-height: 1.6;
          }
          .google-reviews-icon47 {
            fill: #00ff38;
            color: #00ff38;
          }
          .google-reviews-image6 {
            width: 24px;
            height: 24px;
            align-self: center;
            object-fit: cover;
          }
          .google-reviews-slider-pagination {
            display: block;
          }
          .google-reviews-text25 {
            display: inline-block;
          }
          .google-reviews-text26 {
            display: inline-block;
          }
          .google-reviews-text27 {
            display: inline-block;
          }
          .google-reviews-text28 {
            display: inline-block;
          }
          .google-reviews-text29 {
            display: inline-block;
          }
          .google-reviews-text30 {
            display: inline-block;
          }
          .google-reviews-text33 {
            display: inline-block;
          }
          .google-reviews-text34 {
            display: inline-block;
          }
          .google-reviews-text35 {
            display: inline-block;
          }
          .google-reviews-text36 {
            display: inline-block;
          }
          .google-reviews-text37 {
            display: inline-block;
          }
          .google-reviews-text38 {
            display: inline-block;
          }
          .google-reviews-text39 {
            display: inline-block;
          }
          .google-reviews-text40 {
            display: inline-block;
          }
          .google-reviews-text41 {
            display: inline-block;
          }
          .google-reviews-text42 {
            display: inline-block;
          }
          .google-reviews-text43 {
            display: inline-block;
          }
          .google-reviews-text44 {
            display: inline-block;
          }
          .google-reviews-text45 {
            display: inline-block;
          }
          .google-reviews-text46 {
            display: inline-block;
          }
          .google-reviews-text47 {
            display: inline-block;
          }

          @media (max-width: 1200px) {
            .google-reviews-slider {
              width: 100%;
            }
          }
          @media (max-width: 991px) {
            .google-reviews-content {
              align-items: center;
              flex-direction: column;
            }
            .google-reviews-image1 {
              flex: 0 0 auto;
              width: 100%;
              height: auto;
            }
            .google-reviews-image2 {
              flex: 0 0 auto;
              width: 100%;
              height: auto;
            }
            .google-reviews-image3 {
              flex: 0 0 auto;
              width: 100%;
              height: auto;
            }
            .google-reviews-google-reviews1 {
              width: 50%;
            }
            .google-reviews-rating-stars1 {
              width: 38%;
            }
            .google-reviews-google-reviews2 {
              width: 50%;
            }
            .google-reviews-rating-stars2 {
              width: 38%;
            }
            .google-reviews-google-reviews3 {
              width: 50%;
            }
            .google-reviews-rating-stars3 {
              width: 38%;
            }
          }
          @media (max-width: 599px) {
            .google-reviews-section-title {
              gap: var(--dl-space-space-halfunit);
            }
            .google-reviews-text10 {
              font-size: 20px;
              font-family: Poppins;
            }
            .google-reviews-text11 {
              font-size: 12px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 200;
            }
            .google-reviews-image1 {
              height: auto;
            }
            .google-reviews-image2 {
              height: auto;
            }
            .google-reviews-image3 {
              height: auto;
            }
            .google-reviews-slider-slide1 {
              width: 100%;
              background-position: center;
            }
            .google-reviews-google-reviews1 {
              width: 100%;
            }
            .google-reviews-rating-stars1 {
              width: 42%;
              background-color: rgba(0, 0, 0, 0.5);
            }
            .google-reviews-link2 {
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .google-reviews-icon21 {
              fill: #00ff38;
              color: #00ff38;
            }
            .google-reviews-google-reviews2 {
              width: 100%;
            }
            .google-reviews-rating-stars2 {
              width: 42%;
              background-color: rgba(0, 0, 0, 0.5);
            }
            .google-reviews-link5 {
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .google-reviews-icon34 {
              fill: #00ff38;
              color: #00ff38;
            }
            .google-reviews-google-reviews3 {
              width: 100%;
            }
            .google-reviews-rating-stars3 {
              width: 42%;
              background-color: rgba(0, 0, 0, 0.5);
            }
            .google-reviews-link8 {
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .google-reviews-icon47 {
              fill: #00ff38;
              color: #00ff38;
            }
          }
          @media (max-width: 399px) {
            .google-reviews-slider {
              box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.4);
            }
            .google-reviews-slider-slide1 {
              width: 100%;
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center;
            }
            .google-reviews-google-reviews1 {
              width: auto;
              height: auto;
            }
            .google-reviews-rating-stars1 {
              width: 42%;
            }
            .google-reviews-google-reviews2 {
              width: auto;
              height: auto;
            }
            .google-reviews-rating-stars2 {
              width: 42%;
            }
            .google-reviews-google-reviews3 {
              width: auto;
              height: auto;
            }
            .google-reviews-rating-stars3 {
              width: 42%;
            }
          }
        `}
      </style>
    </>
  )
}

GoogleReviews.defaultProps = {
  imageAlt6: 'image',
  textUrl117: 'https://maps.app.goo.gl/GiGSr8YoRhvdiw8U8',
  text10: undefined,
  button: undefined,
  text217: undefined,
  image1Title: undefined,
  image1Src1: '/images/Marigold Images/marigold-celebration-banner-300h.webp',
  textUrl9: 'https://example.com',
  image3Description: undefined,
  rootClassName: '',
  image1Description: undefined,
  text11325: undefined,
  content1: undefined,
  heading1: undefined,
  image3Title: undefined,
  text210: undefined,
  image2Description: undefined,
  image2Title: undefined,
  image3Alt: 'Social Gathering Decor',
  text113251: undefined,
  text101: undefined,
  textUrl91: 'https://example.com',
  imageAlt61: 'image',
  textUrl1171: 'https://maps.app.goo.gl/GiGSr8YoRhvdiw8U8',
  text2171: undefined,
  text2101: undefined,
  text113252: undefined,
  text102: undefined,
  textUrl92: 'https://example.com',
  imageAlt62: 'image',
  textUrl1172: 'https://maps.app.goo.gl/GiGSr8YoRhvdiw8U8',
  text2172: undefined,
  text2102: undefined,
}

GoogleReviews.propTypes = {
  imageAlt6: PropTypes.string,
  textUrl117: PropTypes.string,
  text10: PropTypes.element,
  button: PropTypes.element,
  text217: PropTypes.element,
  image1Title: PropTypes.element,
  image1Src1: PropTypes.string,
  textUrl9: PropTypes.string,
  image3Description: PropTypes.element,
  rootClassName: PropTypes.string,
  image1Description: PropTypes.element,
  text11325: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  image3Title: PropTypes.element,
  text210: PropTypes.element,
  image2Description: PropTypes.element,
  image2Title: PropTypes.element,
  image3Alt: PropTypes.string,
  text113251: PropTypes.element,
  text101: PropTypes.element,
  textUrl91: PropTypes.string,
  imageAlt61: PropTypes.string,
  textUrl1171: PropTypes.string,
  text2171: PropTypes.element,
  text2101: PropTypes.element,
  text113252: PropTypes.element,
  text102: PropTypes.element,
  textUrl92: PropTypes.string,
  imageAlt62: PropTypes.string,
  textUrl1172: PropTypes.string,
  text2172: PropTypes.element,
  text2102: PropTypes.element,
}

export default GoogleReviews
