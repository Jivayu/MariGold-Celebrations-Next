import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import BrandLogo from './brand-logo'

const FromTheOwner = (props) => {
  const [faq2Visible, setFaq2Visible] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq1Visible, setFaq1Visible] = useState(false)
  return (
    <>
      <section
        id="about-marigold-1"
        className={`from-the-owner-faq8 thq-section-padding ${props.rootClassName} `}
      >
        <div className="from-the-owner-max-width thq-flex-row thq-section-max-width">
          <div className="from-the-owner-section-title UbuntuLight-14 thq-flex-column">
            <summary
              id="From Mr. Arun Bhende"
              className="from-the-owner-content UbuntuLight-14 thq-flex-column"
            >
              <div className="from-the-owner-container10">
                <h1
                  id="About MariGold Celebration"
                  className="from-the-owner-text10 Ubuntu-Light-18"
                >
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="from-the-owner-text40">
                        From the Owner
                      </span>
                    </Fragment>
                  )}
                </h1>
                <h2
                  id="Best Banquet Hall &amp; Big Events Services in Hingna, Nagpur"
                  className="from-the-owner-text11 Ubuntu-Regular-14"
                >
                  {props.heading11 ?? (
                    <Fragment>
                      <span className="from-the-owner-text39">
                        MariGold  Celebration Event Planning Services.
                      </span>
                    </Fragment>
                  )}
                </h2>
                <div className="from-the-owner-divider thq-divider-horizontal"></div>
              </div>
              <p className="from-the-owner-text12 UbuntuLight-14">
                {props.content1 ?? (
                  <Fragment>
                    <span className="from-the-owner-text41">
                      <span>Welcome to Marigold Celebration!</span>
                      <br></br>
                      <br></br>
                      <span>
                        I am Arun Bhende, the proud owner of Marigold
                        Celebration. It gives me immense pleasure to welcome you
                        to our banquet hall, where we aim to turn your special
                        moments into unforgettable memories. At Marigold
                        Celebration, we understand that every event is unique
                        and holds a deep significance in your life. Whether it’s
                        a wedding, reception, corporate event, or a private
                        celebration, our dedicated team ensures every detail is
                        meticulously planned and executed to perfection.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Our facilities are designed with modern amenities and
                        elegant decor to provide a seamless experience for you
                        and your guests. We take pride in offering flexible
                        event spaces, premium catering services, and
                        personalized decor to meet your vision. Your
                        satisfaction is our priority, and we strive to provide
                        exceptional service to make your event truly remarkable.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Thank you for considering Marigold Celebration as your
                        venue of choice. We look forward to hosting you and
                        making your special day extraordinary.
                      </span>
                      <br></br>
                      <br></br>
                      <span>Warm regards,</span>
                      <br></br>
                      <span>Arun Bhende</span>
                      <br></br>
                      <span>Marigold Celebration Team</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </p>
            </summary>
            <button className="from-the-owner-button thq-button-filled">
              <span className="from-the-owner-action1 menu">
                {props.action ?? (
                  <Fragment>
                    <span className="from-the-owner-text36">
                      Querry ?  feel free to contact us.
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
          <div className="from-the-owner-list UbuntuLight-14 thq-flex-column">
            <img
              id="MariGold Celebration - Hingna, Nagpur"
              alt={props.imageAlt1}
              src={props.imageSrc1}
              className="from-the-owner-image"
            />
            <BrandLogo rootClassName="brand-logoroot-class-name1"></BrandLogo>
            <div className="from-the-owner-faq1">
              <div className="from-the-owner-trigger1">
                <h3
                  id="Weddings &amp; Receptions | Engagement Ceremonies &amp; Pre-Wedding Functions."
                  className="from-the-owner-faq1-question UbuntuLight-14"
                >
                  {props.faq1Question ?? (
                    <Fragment>
                      <span className="from-the-owner-text35">
                        Weddings &amp; Receptions | Engagement Ceremonies &amp;
                        Pre-Wedding Functions.
                      </span>
                    </Fragment>
                  )}
                </h3>
                <div className="from-the-owner-icons-container1">
                  {!faq1Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="from-the-owner-icon10"
                      >
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq1Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="from-the-owner-icon12"
                      >
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq1Visible && (
                <div className="from-the-owner-container13">
                  <p className="from-the-owner-text13 p">
                    <span className="p">
                      Celebrate your special day at Marigold Banquet Hall, where
                      love stories come to life. Our grand hall provides the
                      perfect backdrop for weddings and receptions,
                      accommodating up to 1000 guests in a luxurious and
                      beautifully decorated setting. Whether it’s a traditional
                      wedding or a modern celebration, we ensure every detail is
                      handled with care—from bespoke décor and catering to
                      photography and entertainment. Let us help you create the
                      wedding of your dreams.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Engagements, sangeet, mehendi, or cocktail
                      parties—whatever your pre-wedding celebration needs,
                      Marigold Banquet Hall offers the perfect venue. Our
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
            <div className="from-the-owner-faq2">
              <div
                onClick={() => setFaq2Visible(!faq2Visible)}
                className="from-the-owner-trigger2"
              >
                <h3
                  id="Birthday Parties &amp; Anniversaries | Social Gatherings &amp; Family Events."
                  className="from-the-owner-faq2-question1 UbuntuLight-14"
                >
                  {props.faq2Question ?? (
                    <Fragment>
                      <span className="from-the-owner-text34">
                        Birthday Parties &amp; Anniversaries | Social Gatherings
                        &amp; Family Events.
                      </span>
                    </Fragment>
                  )}
                </h3>
                <div className="from-the-owner-icons-container2">
                  {!faq2Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="from-the-owner-icon14"
                      >
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq2Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="from-the-owner-icon16"
                      >
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq2Visible && (
                <div className="from-the-owner-container16">
                  <p className="from-the-owner-text19 p">
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
            <div className="from-the-owner-faq3">
              <div
                onClick={() => setFaq3Visible(!faq3Visible)}
                className="from-the-owner-trigger3"
              >
                <h3
                  id="Corporate Events &amp; Conferences | Award Ceremonies &amp; Gala Dinners."
                  className="from-the-owner-faq2-question2 UbuntuLight-14"
                >
                  {props.faq3Question ?? (
                    <Fragment>
                      <span className="from-the-owner-text37">
                        Corporate Events &amp; Conferences | Award Ceremonies
                        &amp; Gala Dinners.
                      </span>
                    </Fragment>
                  )}
                </h3>
                <div className="from-the-owner-icons-container3">
                  {!faq3Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="from-the-owner-icon18"
                      >
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq3Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="from-the-owner-icon20"
                      >
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq3Visible && (
                <div className="from-the-owner-container19">
                  <p className="from-the-owner-text24 p">
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
            <div className="from-the-owner-faq4">
              <div
                onClick={() => setFaq4Visible(!faq4Visible)}
                className="from-the-owner-trigger4"
              >
                <h3
                  id="Religious &amp; Cultural Events | Exhibitions &amp; Trade Shows."
                  className="from-the-owner-faq2-question3 UbuntuLight-14"
                >
                  {props.faq4Question ?? (
                    <Fragment>
                      <span className="from-the-owner-text38">
                        Religious &amp; Cultural Events | Exhibitions &amp;
                        Trade Shows.
                      </span>
                    </Fragment>
                  )}
                </h3>
                <div className="from-the-owner-icons-container4">
                  {!faq4Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="from-the-owner-icon22"
                      >
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq4Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="from-the-owner-icon24"
                      >
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq4Visible && (
                <div className="from-the-owner-container22">
                  <p className="from-the-owner-text29 p">
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
          .from-the-owner-faq8 {
            width: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-shrink: 0;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            background-size: cover;
            justify-content: space-between;
            background-image: url('/images/Marigold Images/2023-05-15%20(2)-1500w.webp');
            background-position: center;
          }
          .from-the-owner-max-width {
            gap: var(--dl-space-space-halfunit);
            align-self: center;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius10);
            backdrop-filter: blur(2px);
            background-color: rgba(0, 0, 0, 0.5);
          }
          .from-the-owner-section-title {
            gap: var(--dl-space-space-twounits);
            width: 55%;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .from-the-owner-content {
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            margin-right: 2px;
          }
          .from-the-owner-container10 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .from-the-owner-text10 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            align-self: flex-start;
          }
          .from-the-owner-text11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            align-self: flex-start;
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 3;
            animation-timing-function: ease;
          }
          .from-the-owner-divider {
            background-color: var(--dl-color-primary-logo-color-1);
          }
          .from-the-owner-text12 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            letter-spacing: 0.8;
          }
          .from-the-owner-button {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            display: none;
            background-color: var(--dl-color-primary-logo-color-3);
          }
          .from-the-owner-action1 {
            fill: var(--dl-color-primary-logo-color-5);
            color: var(--dl-color-primary-logo-color-5);
          }
          .from-the-owner-list {
            width: 100%;
            align-self: stretch;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .from-the-owner-image {
            width: 100px;
            display: none;
            object-fit: cover;
          }
          .from-the-owner-faq1 {
            width: 100%;
            display: flex;
            transform: scale(0.99);
            transition: 0.4s;
            align-items: flex-start;
            border-color: var(--dl-color-primary-logo-color-2);
            border-style: dotted;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.42);
          }
          .from-the-owner-faq1:hover {
            transform: scale(1);
            box-shadow: 1px 1px 25px 0px rgba(0, 0, 0, 0.5);
          }
          .from-the-owner-trigger1 {
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .from-the-owner-faq1-question {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
          }
          .from-the-owner-icons-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .from-the-owner-icon10 {
            fill: var(--dl-color-primary-logo-color-2);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .from-the-owner-icon12 {
            fill: var(--dl-color-primary-logo-color-1);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .from-the-owner-container13 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: linear;
          }
          .from-the-owner-text13 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
          }
          .from-the-owner-faq2 {
            width: 100%;
            display: flex;
            transform: scale(0.99);
            transition: 0.4s;
            align-items: flex-start;
            border-color: var(--dl-color-primary-logo-color-2);
            border-style: dotted;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.42);
          }
          .from-the-owner-faq2:hover {
            transform: scale(1);
            box-shadow: 1px 1px 25px 0px rgba(0, 0, 0, 0.5);
          }
          .from-the-owner-trigger2 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .from-the-owner-faq2-question1 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
          }
          .from-the-owner-icons-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .from-the-owner-icon14 {
            fill: var(--dl-color-primary-logo-color-2);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .from-the-owner-icon16 {
            fill: var(--dl-color-primary-logo-color-1);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .from-the-owner-container16 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .from-the-owner-text19 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
          }
          .from-the-owner-faq3 {
            width: 100%;
            display: flex;
            transform: scale(0.99);
            transition: 0.4s;
            align-items: flex-start;
            border-color: var(--dl-color-primary-logo-color-2);
            border-style: dotted;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.42);
          }
          .from-the-owner-faq3:hover {
            transform: scale(1);
            box-shadow: 1px 1px 25px 0px rgba(0, 0, 0, 0.5);
          }
          .from-the-owner-trigger3 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .from-the-owner-faq2-question2 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-style: normal;
          }
          .from-the-owner-icons-container3 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .from-the-owner-icon18 {
            fill: var(--dl-color-primary-logo-color-2);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .from-the-owner-icon20 {
            fill: var(--dl-color-primary-logo-color-1);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .from-the-owner-container19 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .from-the-owner-text24 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
          }
          .from-the-owner-faq4 {
            width: 100%;
            display: flex;
            transform: scale(0.99);
            transition: 0.4s;
            align-items: flex-start;
            border-color: var(--dl-color-primary-logo-color-2);
            border-style: dotted;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.42);
          }
          .from-the-owner-faq4:hover {
            transform: scale(1);
            box-shadow: 1px 1px 25px 0px rgba(0, 0, 0, 0.5);
          }
          .from-the-owner-trigger4 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .from-the-owner-faq2-question3 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-style: normal;
          }
          .from-the-owner-icons-container4 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .from-the-owner-icon22 {
            fill: var(--dl-color-primary-logo-color-2);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .from-the-owner-icon24 {
            fill: var(--dl-color-primary-logo-color-1);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .from-the-owner-container22 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .from-the-owner-text29 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
          }
          .from-the-owner-text34 {
            display: inline-block;
          }
          .from-the-owner-text35 {
            display: inline-block;
          }
          .from-the-owner-text36 {
            display: inline-block;
          }
          .from-the-owner-text37 {
            display: inline-block;
          }
          .from-the-owner-text38 {
            display: inline-block;
          }
          .from-the-owner-text39 {
            display: inline-block;
          }
          .from-the-owner-text40 {
            display: inline-block;
          }
          .from-the-owner-text41 {
            display: inline-block;
          }

          @media (max-width: 1200px) {
            .from-the-owner-max-width {
              align-self: center;
            }
            .from-the-owner-section-title {
              width: 45%;
            }
          }
          @media (max-width: 991px) {
            .from-the-owner-faq8 {
              padding: var(--dl-space-space-unit);
              background-size: cover;
              background-position: center;
            }
            .from-the-owner-max-width {
              flex-direction: column;
            }
            .from-the-owner-section-title {
              width: 100%;
            }
            .from-the-owner-list {
              width: 100%;
              max-width: 100%;
            }
          }
          @media (max-width: 599px) {
            .from-the-owner-faq8 {
              padding: var(--dl-space-space-halfunit);
            }
            .from-the-owner-text12 {
              padding-left: var(--dl-space-space-halfunit);
            }
            .from-the-owner-button {
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .from-the-owner-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

FromTheOwner.defaultProps = {
  rootClassName: '',
  faq2Question: undefined,
  faq1Question: undefined,
  imageAlt1: 'image',
  imageSrc1: '/images/marigold-logo1.svg',
  action: undefined,
  faq3Question: undefined,
  faq4Question: undefined,
  heading11: undefined,
  heading1: undefined,
  content1: undefined,
}

FromTheOwner.propTypes = {
  rootClassName: PropTypes.string,
  faq2Question: PropTypes.element,
  faq1Question: PropTypes.element,
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  action: PropTypes.element,
  faq3Question: PropTypes.element,
  faq4Question: PropTypes.element,
  heading11: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
}

export default FromTheOwner
