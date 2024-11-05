import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import BrandLogo from './brand-logo'

const AboutMariGold1 = (props) => {
  const [faq2Visible, setFaq2Visible] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq1Visible, setFaq1Visible] = useState(false)
  return (
    <>
      <section
        id="about-marigold-1"
        className="about-mari-gold-1faq8 thq-section-padding"
      >
        <div className="about-mari-gold-1-max-width thq-flex-row thq-section-max-width">
          <div className="about-mari-gold-1-section-title UbuntuLight-14 thq-flex-column">
            <div className="about-mari-gold-1-content UbuntuLight-14 thq-flex-column">
              <div className="about-mari-gold-1-container10">
                <h1
                  id="About MariGold Celebration"
                  className="about-mari-gold-1-text10 Ubuntu-Light-18"
                >
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="about-mari-gold-1-text39">
                        MariGold Celebration - Hingna, Nagpur
                      </span>
                    </Fragment>
                  )}
                </h1>
                <h2
                  id="Best Banquet Hall &amp; Big Events Services in Hingna, Nagpur"
                  className="about-mari-gold-1-text11 Ubuntu-Regular-14"
                >
                  {props.heading11 ?? (
                    <Fragment>
                      <span className="about-mari-gold-1-text51">
                        Banquet Hall &amp; Events Services Near Nagpur
                      </span>
                    </Fragment>
                  )}
                </h2>
                <div className="about-mari-gold-1-divider thq-divider-horizontal"></div>
              </div>
              <p className="about-mari-gold-1-text12 UbuntuLight-14">
                {props.content1 ?? (
                  <Fragment>
                    <span className="about-mari-gold-1-text40">
                      <span>
                        Marigold Celebration Hall, located in the heart of
                        Hingna, Nagpur, is the premier venue for hosting
                        unforgettable events. With a grand capacity of up to
                        2000 guests, it’s the perfect setting for a wide variety
                        of occasions—from luxurious weddings and large corporate
                        events to intimate birthday parties and social
                        gatherings. Our modern facilities and top-notch
                        amenities ensure every event is seamless, successful,
                        and memorable for both hosts and attendees.
                      </span>
                      <br className="Content"></br>
                      <br className="Content"></br>
                      <span>
                        Conveniently situated in Hingna, Nagpur, Marigold
                        Banquet Hall provides easy access for all your guests.
                        Whether you’re planning an extravagant celebration or a
                        more private function, our flexible event spaces can
                        cater to your needs. The venue boasts a grand banquet
                        hall for large gatherings, along with smaller, adaptable
                        spaces for more intimate events, making it the ideal
                        destination for any occasion.
                      </span>
                      <br className="Content"></br>
                      <br className="Content"></br>
                      <span>
                        Beyond offering a venue, Marigold Banquet Hall delivers
                        comprehensive event services. These may include expert
                        event planning, bespoke catering, advanced audiovisual
                        setups, and professional décor solutions, tailored to
                        suit your unique requirements. Our experienced team
                        works closely with you to ensure that your event is
                        crafted to perfection, creating memories that last a
                        lifetime.
                      </span>
                      <br className="Content"></br>
                      <br className="Content"></br>
                      <span>
                        For those interested in hosting a grand event at
                        Marigold Banquet Hall, we encourage you to reach out to
                        our management team for detailed information on our
                        event services, pricing, availability, and additional
                        amenities. Let us turn your special occasion into an
                        extraordinary experience.
                      </span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <button className="about-mari-gold-1-button thq-button-filled">
              <span className="about-mari-gold-1-action1 menu">
                {props.action ?? (
                  <Fragment>
                    <span className="about-mari-gold-1-text36">
                      Querry ?  feel free to contact us.
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
          <div className="about-mari-gold-1-list UbuntuLight-14 thq-flex-column">
            <img
              id="MariGold Celebration - Hingna, Nagpur"
              alt={props.imageAlt1}
              src={props.imageSrc1}
              className="about-mari-gold-1-image"
            />
            <BrandLogo rootClassName="brand-logoroot-class-name1"></BrandLogo>
            <div className="about-mari-gold-1-faq1">
              <div
                onClick={() => setFaq1Visible(!faq1Visible)}
                className="about-mari-gold-1-trigger1"
              >
                <h3
                  id="Weddings &amp; Receptions | Engagement Ceremonies &amp; Pre-Wedding Functions."
                  className="about-mari-gold-1-faq1-question UbuntuLight-14"
                >
                  {props.faq1Question ?? (
                    <Fragment>
                      <span className="about-mari-gold-1-text35">
                        Weddings &amp; Receptions | Engagement Ceremonies &amp;
                        Pre-Wedding Functions.
                      </span>
                    </Fragment>
                  )}
                </h3>
                <div className="about-mari-gold-1-icons-container1">
                  {!faq1Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="about-mari-gold-1-icon10"
                      >
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq1Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="about-mari-gold-1-icon12"
                      >
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq1Visible && (
                <div className="about-mari-gold-1-container13">
                  <p className="about-mari-gold-1-text13 p">
                    <span className="p">
                      Celebrate your special day at Marigold Banquet Hall, where
                      love stories come to life. Our grand hall provides the
                      perfect backdrop for weddings and receptions,
                      accommodating up to 2000 guests in a luxurious and
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
            <div className="about-mari-gold-1-faq2">
              <div
                onClick={() => setFaq2Visible(!faq2Visible)}
                className="about-mari-gold-1-trigger2"
              >
                <h3
                  id="Birthday Parties &amp; Anniversaries | Social Gatherings &amp; Family Events."
                  className="about-mari-gold-1-faq2-question1 UbuntuLight-14"
                >
                  {props.faq2Question ?? (
                    <Fragment>
                      <span className="about-mari-gold-1-text34">
                        Birthday Parties &amp; Anniversaries | Social Gatherings
                        &amp; Family Events.
                      </span>
                    </Fragment>
                  )}
                </h3>
                <div className="about-mari-gold-1-icons-container2">
                  {!faq2Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="about-mari-gold-1-icon14"
                      >
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq2Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="about-mari-gold-1-icon16"
                      >
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq2Visible && (
                <div className="about-mari-gold-1-container16">
                  <p className="about-mari-gold-1-text19 p">
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
            <div className="about-mari-gold-1-faq3">
              <div
                onClick={() => setFaq3Visible(!faq3Visible)}
                className="about-mari-gold-1-trigger3"
              >
                <h3
                  id="Corporate Events &amp; Conferences | Award Ceremonies &amp; Gala Dinners."
                  className="about-mari-gold-1-faq2-question2 UbuntuLight-14"
                >
                  {props.faq3Question ?? (
                    <Fragment>
                      <span className="about-mari-gold-1-text37">
                        Corporate Events &amp; Conferences | Award Ceremonies
                        &amp; Gala Dinners.
                      </span>
                    </Fragment>
                  )}
                </h3>
                <div className="about-mari-gold-1-icons-container3">
                  {!faq3Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="about-mari-gold-1-icon18"
                      >
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq3Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="about-mari-gold-1-icon20"
                      >
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq3Visible && (
                <div className="about-mari-gold-1-container19">
                  <p className="about-mari-gold-1-text24 p">
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
            <div className="about-mari-gold-1-faq4">
              <div
                onClick={() => setFaq4Visible(!faq4Visible)}
                className="about-mari-gold-1-trigger4"
              >
                <h3
                  id="Religious &amp; Cultural Events | Exhibitions &amp; Trade Shows."
                  className="about-mari-gold-1-faq2-question3 UbuntuLight-14"
                >
                  {props.faq4Question ?? (
                    <Fragment>
                      <span className="about-mari-gold-1-text38">
                        Religious &amp; Cultural Events | Exhibitions &amp;
                        Trade Shows.
                      </span>
                    </Fragment>
                  )}
                </h3>
                <div className="about-mari-gold-1-icons-container4">
                  {!faq4Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="about-mari-gold-1-icon22"
                      >
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq4Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="about-mari-gold-1-icon24"
                      >
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq4Visible && (
                <div className="about-mari-gold-1-container22">
                  <p className="about-mari-gold-1-text29 p">
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
          .about-mari-gold-1faq8 {
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
          }
          .about-mari-gold-1-max-width {
            gap: var(--dl-space-space-unit);
            align-self: center;
            align-items: flex-start;
          }
          .about-mari-gold-1-section-title {
            gap: var(--dl-space-space-twounits);
            width: 55%;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .about-mari-gold-1-content {
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            border-color: rgba(117, 82, 18, 0.75);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius10);
            backdrop-filter: blur(3px);
          }
          .about-mari-gold-1-container10 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-mari-gold-1-text10 {
            fill: var(--dl-color-primary-logo-color-2);
            color: var(--dl-color-primary-logo-color-2);
            align-self: flex-start;
          }
          .about-mari-gold-1-text11 {
            fill: var(--dl-color-primary-logo-color-2);
            color: var(--dl-color-primary-logo-color-2);
            align-self: flex-start;
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 3;
            animation-timing-function: ease;
          }
          .about-mari-gold-1-divider {
            background-color: var(--dl-color-primary-logo-color-3);
          }
          .about-mari-gold-1-text12 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            letter-spacing: 0.8;
          }
          .about-mari-gold-1-button {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            display: none;
            background-color: var(--dl-color-primary-logo-color-3);
          }
          .about-mari-gold-1-action1 {
            fill: var(--dl-color-primary-logo-color-5);
            color: var(--dl-color-primary-logo-color-5);
          }
          .about-mari-gold-1-list {
            flex: 1;
            width: 100%;
            align-self: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-mari-gold-1-image {
            width: 100px;
            display: none;
            object-fit: cover;
          }
          .about-mari-gold-1-faq1 {
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
            backdrop-filter: blur(3px);
          }
          .about-mari-gold-1-faq1:hover {
            transform: scale(1);
            box-shadow: 1px 1px 25px 0px rgba(0, 0, 0, 0.5);
          }
          .about-mari-gold-1-trigger1 {
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
          .about-mari-gold-1-faq1-question {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
          }
          .about-mari-gold-1-icons-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-mari-gold-1-icon10 {
            fill: var(--dl-color-primary-logo-color-2);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .about-mari-gold-1-icon12 {
            fill: var(--dl-color-primary-logo-color-1);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .about-mari-gold-1-container13 {
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
          .about-mari-gold-1-text13 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
          }
          .about-mari-gold-1-faq2 {
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
            backdrop-filter: blur(3px);
          }
          .about-mari-gold-1-faq2:hover {
            transform: scale(1);
            box-shadow: 1px 1px 25px 0px rgba(0, 0, 0, 0.5);
          }
          .about-mari-gold-1-trigger2 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-mari-gold-1-faq2-question1 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
          }
          .about-mari-gold-1-icons-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-mari-gold-1-icon14 {
            fill: var(--dl-color-primary-logo-color-2);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .about-mari-gold-1-icon16 {
            fill: var(--dl-color-primary-logo-color-1);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .about-mari-gold-1-container16 {
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
          .about-mari-gold-1-text19 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
          }
          .about-mari-gold-1-faq3 {
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
            backdrop-filter: blur(3px);
          }
          .about-mari-gold-1-faq3:hover {
            transform: scale(1);
            box-shadow: 1px 1px 25px 0px rgba(0, 0, 0, 0.5);
          }
          .about-mari-gold-1-trigger3 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-mari-gold-1-faq2-question2 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-style: normal;
          }
          .about-mari-gold-1-icons-container3 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-mari-gold-1-icon18 {
            fill: var(--dl-color-primary-logo-color-2);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .about-mari-gold-1-icon20 {
            fill: var(--dl-color-primary-logo-color-1);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .about-mari-gold-1-container19 {
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
          .about-mari-gold-1-text24 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
          }
          .about-mari-gold-1-faq4 {
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
            backdrop-filter: blur(3px);
          }
          .about-mari-gold-1-faq4:hover {
            transform: scale(1);
            box-shadow: 1px 1px 25px 0px rgba(0, 0, 0, 0.5);
          }
          .about-mari-gold-1-trigger4 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-mari-gold-1-faq2-question3 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-style: normal;
          }
          .about-mari-gold-1-icons-container4 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-mari-gold-1-icon22 {
            fill: var(--dl-color-primary-logo-color-2);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .about-mari-gold-1-icon24 {
            fill: var(--dl-color-primary-logo-color-1);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .about-mari-gold-1-container22 {
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
          .about-mari-gold-1-text29 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
          }
          .about-mari-gold-1-text34 {
            display: inline-block;
          }
          .about-mari-gold-1-text35 {
            display: inline-block;
          }
          .about-mari-gold-1-text36 {
            display: inline-block;
          }
          .about-mari-gold-1-text37 {
            display: inline-block;
          }
          .about-mari-gold-1-text38 {
            display: inline-block;
          }
          .about-mari-gold-1-text39 {
            display: inline-block;
          }
          .about-mari-gold-1-text40 {
            display: inline-block;
          }
          .about-mari-gold-1-text51 {
            display: inline-block;
          }
          @media (max-width: 1200px) {
            .about-mari-gold-1-section-title {
              width: 45%;
            }
          }
          @media (max-width: 991px) {
            .about-mari-gold-1-max-width {
              flex-direction: column;
            }
            .about-mari-gold-1-section-title {
              width: 100%;
            }
            .about-mari-gold-1-list {
              width: 100%;
              max-width: 100%;
            }
          }
          @media (max-width: 599px) {
            .about-mari-gold-1faq8 {
              padding: var(--dl-space-space-halfunit);
            }
            .about-mari-gold-1-text12 {
              padding-left: var(--dl-space-space-halfunit);
            }
            .about-mari-gold-1-button {
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .about-mari-gold-1-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

AboutMariGold1.defaultProps = {
  faq2Question: undefined,
  faq1Question: undefined,
  imageAlt1: 'image',
  imageSrc1: '/images/marigold-logo1.svg',
  action: undefined,
  faq3Question: undefined,
  faq4Question: undefined,
  heading1: undefined,
  content1: undefined,
  heading11: undefined,
}

AboutMariGold1.propTypes = {
  faq2Question: PropTypes.element,
  faq1Question: PropTypes.element,
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  action: PropTypes.element,
  faq3Question: PropTypes.element,
  faq4Question: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  heading11: PropTypes.element,
}

export default AboutMariGold1
