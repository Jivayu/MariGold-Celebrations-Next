import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const GuestRooms = (props) => {
  return (
    <>
      <section
        id="Guest-Rooms"
        className="guest-rooms-guest-rooms thq-flex-row thq-section-max-width"
      >
        <div className="guest-rooms-container1 UbuntuLight-14 thq-flex-column">
          <img
            alt={props.featureImageAlt212}
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/images/Marigold Images/guest-room-1500w.webp"
            srcSet="/images/Marigold Images//guest-room-1500w.webp 1200w, /images/Marigold Images/guest-room-tablet.webp 800w, /images/Marigold Images/guest-room-mobile.webp 480w"
            className="guest-rooms-image1 thq-img-ratio-4-3"
          />
          <div className="guest-rooms-actions thq-flex-row">
            <button className="guest-rooms-button menu">
              <span className="guest-rooms-text10 thq-button-outline">
                {props.action2321 ?? (
                  <Fragment>
                    <span className="guest-rooms-text29">
                      Explore Our Gallery Video
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="guest-rooms-content UbuntuLight-14 thq-flex-column">
          <div className="guest-rooms-section-title UbuntuLight-14 thq-flex-column">
            <span className="guest-rooms-text11 thq-body-small">
              {props.slogan212 ?? (
                <Fragment>
                  <span className="guest-rooms-text24">Elegance Redefined</span>
                </Fragment>
              )}
            </span>
            <h2 className="guest-rooms-text12">
              {props.sectionTitle212 ?? (
                <Fragment>
                  <span className="guest-rooms-text31">
                    Guest Rooms for Overnight Stays
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="guest-rooms-text13 thq-body-large">
              {props.featureDescription312 ?? (
                <Fragment>
                  <span className="guest-rooms-text33">
                    Marigold Celebration Hall offers well-appointed guest rooms
                    to accommodate your out-of-town attendees, providing comfort
                    and convenience for those staying overnight. Our guest rooms
                    are thoughtfully designed to ensure a relaxing stay, whether
                    for wedding parties, corporate guests, or family gatherings.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="guest-rooms-list1 thq-flex-row">
            <div className="guest-rooms-list-item1 UbuntuLight-14 thq-flex-column">
              <h3 className="guest-rooms-text14">
                {props.feature1Title213 ?? (
                  <Fragment>
                    <span className="guest-rooms-text28">
                      Elegant and Comfortable
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="guest-rooms-text15 thq-body-small">
                {props.feature1Description213 ?? (
                  <Fragment>
                    <span className="guest-rooms-text35">
                      Each room is furnished with plush bedding and modern
                      amenities, allowing guests to unwind in style and comfort.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="guest-rooms-list-item2 UbuntuLight-14 thq-flex-column">
              <h3 className="guest-rooms-text16">
                {props.feature2Title213 ?? (
                  <Fragment>
                    <span className="guest-rooms-text27">
                      Privacy and Convenience
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="guest-rooms-text17 thq-body-small">
                {props.feature2Description213 ?? (
                  <Fragment>
                    <span className="guest-rooms-text34">
                      With private, well-equipped spaces, your guests can enjoy
                      a peaceful retreat right on-site, enhancing the overall
                      experience of multi-day events.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="guest-rooms-list2 thq-flex-row">
            <div className="guest-rooms-list-item3 UbuntuLight-14 thq-flex-column">
              <h3 className="guest-rooms-text18">
                {props.feature1Title2112 ?? (
                  <Fragment>
                    <span className="guest-rooms-text23">
                      Ideal for Wedding Parties &amp; Business Guests
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="guest-rooms-text19 thq-body-small">
                {props.feature1Description2112 ?? (
                  <Fragment>
                    <span className="guest-rooms-text25">
                      Perfect for wedding parties needing proximity or business
                      guests requiring a restful space, our guest rooms offer
                      unmatched convenience and accessibility.
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="guest-rooms-container2">
                <p className="guest-rooms-text20 thq-body-large">
                  {props.featureDescription2112 ?? (
                    <Fragment>
                      <span className="guest-rooms-text26">
                        Offering seamless hospitality, Marigold’s guest
                        accommodations ensure that your guests enjoy a
                        memorable, comfortable stay close to the celebration.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="guest-rooms-list-item4 UbuntuLight-14 thq-flex-column">
              <h3 className="guest-rooms-text21">
                {props.feature2Title2112 ?? (
                  <Fragment>
                    <span className="guest-rooms-text32">
                      Attention to Detail
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="guest-rooms-text22 thq-body-small">
                {props.feature2Description2112 ?? (
                  <Fragment>
                    <span className="guest-rooms-text30">
                      From backdrops to table settings, every detail is
                      meticulously managed, ensuring a cohesive and visually
                      impressive experience.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .guest-rooms-guest-rooms {
            gap: var(--dl-space-space-threeunits);
            position: relative;
            border-color: var(--dl-color-primary-logo-color-3);
            border-style: dotted;
            border-width: 1px;
            margin-bottom: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .guest-rooms-container1 {
            max-width: 25%;
          }
          .guest-rooms-image1 {
            width: 100%;
          }
          .guest-rooms-actions {
            padding: var(--dl-space-space-unit);
            position: relative;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .guest-rooms-button {
            fill: transparent;
            flex: 1;
            color: transparent;
            transform: scale(0.99);
            border-width: 0px;
          }
          .guest-rooms-text10 {
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
          .guest-rooms-text10:hover {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            transform: scale(1);
            box-shadow: 1px 1px 15px 1px rgba(60, 12, 231, 0.57);
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 0.5px;
            background-color: #251573;
          }
          .guest-rooms-content {
            gap: var(--dl-space-space-unit);
          }
          .guest-rooms-section-title {
            align-items: flex-start;
          }
          .guest-rooms-text11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 400;
          }
          .guest-rooms-text12 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 18px;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
            text-transform: none;
            text-decoration: none;
          }
          .guest-rooms-text13 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .guest-rooms-list1 {
            align-self: stretch;
            align-items: flex-start;
          }
          .guest-rooms-list-item1 {
            max-width: 50%;
            align-items: flex-start;
          }
          .guest-rooms-text14 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 16px;
            font-style: normal;
            font-weight: 300;
          }
          .guest-rooms-text15 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .guest-rooms-list-item2 {
            align-items: flex-start;
          }
          .guest-rooms-text16 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 16px;
            font-style: normal;
            font-weight: 300;
          }
          .guest-rooms-text17 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .guest-rooms-list2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .guest-rooms-list-item3 {
            max-width: 100%;
            align-items: flex-start;
          }
          .guest-rooms-text18 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 16px;
            font-style: normal;
            font-weight: 300;
          }
          .guest-rooms-text19 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .guest-rooms-container2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .guest-rooms-text20 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .guest-rooms-list-item4 {
            display: none;
            align-items: flex-start;
          }
          .guest-rooms-text21 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-style: normal;
            font-weight: 300;
          }
          .guest-rooms-text22 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .guest-rooms-text23 {
            display: inline-block;
          }
          .guest-rooms-text24 {
            display: inline-block;
          }
          .guest-rooms-text25 {
            display: inline-block;
          }
          .guest-rooms-text26 {
            display: inline-block;
          }
          .guest-rooms-text27 {
            display: inline-block;
          }
          .guest-rooms-text28 {
            display: inline-block;
          }
          .guest-rooms-text29 {
            display: inline-block;
          }
          .guest-rooms-text30 {
            display: inline-block;
          }
          .guest-rooms-text31 {
            display: inline-block;
          }
          .guest-rooms-text32 {
            display: inline-block;
          }
          .guest-rooms-text33 {
            display: inline-block;
          }
          .guest-rooms-text34 {
            display: inline-block;
          }
          .guest-rooms-text35 {
            display: inline-block;
          }
          @media (max-width: 1200px) {
            .guest-rooms-guest-rooms {
              align-items: stretch;
            }
            .guest-rooms-container1 {
              justify-content: center;
            }
          }
          @media (max-width: 991px) {
            .guest-rooms-guest-rooms {
              gap: var(--dl-space-space-twounits);
              align-self: stretch;
              flex-direction: column;
            }
            .guest-rooms-container1 {
              max-width: 100%;
            }
            .guest-rooms-image1 {
              width: 100%;
            }
            .guest-rooms-content {
              gap: var(--dl-space-space-oneandhalfunits);
              width: 100%;
            }
            .guest-rooms-list1 {
              gap: var(--dl-space-space-halfunit);
            }
            .guest-rooms-list-item1 {
              width: 50%;
            }
            .guest-rooms-list-item2 {
              width: 50%;
            }
            .guest-rooms-list2 {
              gap: var(--dl-space-space-halfunit);
            }
            .guest-rooms-list-item3 {
              width: 100%;
              max-width: 100%;
            }
            .guest-rooms-list-item4 {
              width: 50%;
            }
          }
          @media (max-width: 599px) {
            .guest-rooms-actions {
              align-self: center;
            }
            .guest-rooms-text11 {
              font-size: 10px;
            }
            .guest-rooms-text15 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .guest-rooms-text17 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .guest-rooms-text19 {
              font-size: 12px;
              font-family: Ubuntu;
            }
            .guest-rooms-text22 {
              font-size: 12px;
              font-family: Ubuntu;
            }
          }
          @media (max-width: 479px) {
            .guest-rooms-guest-rooms {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .guest-rooms-actions {
              width: 100%;
              flex-wrap: wrap;
              margin-top: var(--dl-space-space-unit);
            }
            .guest-rooms-list1 {
              flex-direction: column;
            }
            .guest-rooms-list2 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

GuestRooms.defaultProps = {
  feature1Title2112: undefined,
  slogan212: undefined,
  feature1Description2112: undefined,
  featureDescription2112: undefined,
  featureImageAlt212: 'Luxurious Venue at Marigold Banquet Hall',
  feature2Title213: undefined,
  feature1Title213: undefined,
  action2321: undefined,
  feature2Description2112: undefined,
  sectionTitle212: undefined,
  feature2Title2112: undefined,
  featureDescription312: undefined,
  feature2Description213: undefined,
  feature1Description213: undefined,
}

GuestRooms.propTypes = {
  feature1Title2112: PropTypes.element,
  slogan212: PropTypes.element,
  feature1Description2112: PropTypes.element,
  featureDescription2112: PropTypes.element,
  featureImageAlt212: PropTypes.string,
  feature2Title213: PropTypes.element,
  feature1Title213: PropTypes.element,
  action2321: PropTypes.element,
  feature2Description2112: PropTypes.element,
  sectionTitle212: PropTypes.element,
  feature2Title2112: PropTypes.element,
  featureDescription312: PropTypes.element,
  feature2Description213: PropTypes.element,
  feature1Description213: PropTypes.element,
}

export default GuestRooms
