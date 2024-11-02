import React, { useState, Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import SpaciousVenue from './spacious-venue'
import TailoredCatering from './tailored-catering'
import PhotographyVideographyServices from './photography-videography-services'
import DecorServices from './decor-services'

const MobileFacilities1 = (props) => {
  const [faq2Visible, setFaq2Visible] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq1Visible, setFaq1Visible] = useState(false)
  return (
    <>
      <section
        id="Mobile-Facilities-1"
        className={`mobile-facilities-1faq8 thq-section-padding ${props.rootClassName} `}
      >
        <div className="mobile-facilities-1-max-width thq-flex-row thq-section-max-width">
          <div className="mobile-facilities-1-list UbuntuLight-14 thq-flex-column">
            <div className="mobile-facilities-1-container10">
              <h1 className="mobile-facilities-1-text10 Ubuntu-Light-16">
                {props.heading ?? (
                  <Fragment>
                    <span className="mobile-facilities-1-text78">
                      Facilities We Provide at Marigold Celebration
                    </span>
                  </Fragment>
                )}
              </h1>
              <h4
                id="Facilities-tagline"
                className="mobile-facilities-1-text11"
              >
                {props.heading2 ?? (
                  <Fragment>
                    <span className="mobile-facilities-1-text76">
                      At Marigold Banquet Hall, we offer an exceptional range of
                      facilities to ensure your event is as smooth, memorable,
                      and stress-free as possible. Our venue is designed to
                      cater to all types of occasions, from grand weddings to
                      corporate events, while providing top-tier amenities.
                    </span>
                  </Fragment>
                )}
              </h4>
            </div>
            <div className="mobile-facilities-1-faq1">
              <div
                onClick={() => setFaq1Visible(!faq1Visible)}
                className="mobile-facilities-1-trigger1"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="mobile-facilities-1-icon10"
                >
                  <path
                    d="M16 4c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m4.78 3.58C19.93 7.21 19 7 18 7c-.67 0-1.31.1-1.92.28c.58.55.92 1.32.92 2.15V10h5v-.57c0-.81-.5-1.53-1.22-1.85M6 6c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m1.92 1.28C7.31 7.1 6.67 7 6 7c-1 0-1.93.21-2.78.58C2.5 7.9 2 8.62 2 9.43V10h5v-.57c0-.83.34-1.6.92-2.15M10 4c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m6 6H8v-.57c0-.81.5-1.53 1.22-1.85C10.07 7.21 11 7 12 7s1.93.21 2.78.58C15.5 7.9 16 8.62 16 9.43M15 16c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m6 6h-8v-.57c0-.81.5-1.53 1.22-1.85C15.07 19.21 16 19 17 19s1.93.21 2.78.58c.72.32 1.22 1.04 1.22 1.85M5 16c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m6 6H3v-.57c0-.81.5-1.53 1.22-1.85C5.07 19.21 6 19 7 19s1.93.21 2.78.58c.72.32 1.22 1.04 1.22 1.85M12.75 14v2h-1.5v-2H9l3-3l3 3Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p className="mobile-facilities-1-faq1-question UbuntuLight-14">
                  {props.faq1Question ?? (
                    <Fragment>
                      <span className="mobile-facilities-1-text81">
                        Spacious Venue with Capacity
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="mobile-facilities-1-icons-container1">
                  {!faq1Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="mobile-facilities-1-icon12"
                      >
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq1Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="mobile-facilities-1-icon14"
                      >
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq1Visible && (
                <div className="mobile-facilities-1-container13">
                  <p className="mobile-facilities-1-text12 Ubuntu-Light-Gap-12">
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
                  <SpaciousVenue
                    slogan={
                      <Fragment>
                        <span className="mobile-facilities-1-text15">
                          Elegance Redefined
                        </span>
                      </Fragment>
                    }
                    action23={
                      <Fragment>
                        <span className="mobile-facilities-1-text16">
                          Explore Our Gallery Video
                        </span>
                      </Fragment>
                    }
                    sectionTitle={
                      <Fragment>
                        <span className="mobile-facilities-1-text17">
                          Versatile Event Spaces for Every Occasion
                        </span>
                      </Fragment>
                    }
                    feature1Title={
                      <Fragment>
                        <span className="mobile-facilities-1-text18">
                          The Grand Banquet Hall
                        </span>
                      </Fragment>
                    }
                    feature2Title={
                      <Fragment>
                        <span className="mobile-facilities-1-text19">
                          Private Event Rooms
                        </span>
                      </Fragment>
                    }
                    rootClassName="spacious-venueroot-class-name"
                    featureDescription={
                      <Fragment>
                        <span className="mobile-facilities-1-text20">
                          At Marigold Celebration Hall, we offer adaptable event
                          spaces designed to cater to a variety of gatherings,
                          from intimate gatherings to grand celebrations. Each
                          space is thoughtfully designed to provide a refined,
                          comfortable environment suited to your unique event
                          needs.
                        </span>
                      </Fragment>
                    }
                    feature1Description={
                      <Fragment>
                        <span className="mobile-facilities-1-text21">
                          Perfect for large-scale events such as weddings,
                          corporate galas, and conferences, our main hall boasts
                          a spacious, elegant design with the capacity to host
                          up to 2000 guests. It’s ideal for creating a grand
                          atmosphere and leaving a lasting impression.
                        </span>
                      </Fragment>
                    }
                    feature2Description={
                      <Fragment>
                        <span className="mobile-facilities-1-text22">
                          For more personal celebrations like engagement
                          parties, milestone birthdays, or smaller business
                          meetings, our flexible private rooms offer an intimate
                          ambiance with personalized setup options, ensuring
                          every detail aligns with your vision.
                        </span>
                      </Fragment>
                    }
                    featureDescription2={
                      <Fragment>
                        <span className="mobile-facilities-1-text23">
                          Each space is equipped with high-end amenities and the
                          latest audio-visual technology, ensuring an
                          unforgettable experience for both you and your guests.
                          Whatever the occasion, Marigold Celebration Hall
                          provides the perfect setting for a seamless and
                          memorable event.
                        </span>
                      </Fragment>
                    }
                  ></SpaciousVenue>
                </div>
              )}
            </div>
            <div className="mobile-facilities-1-faq2">
              <div
                onClick={() => setFaq2Visible(!faq2Visible)}
                className="mobile-facilities-1-trigger2"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  className="mobile-facilities-1-icon16"
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
                <p className="mobile-facilities-1-faq2-question1 UbuntuLight-14">
                  {props.faq2Question ?? (
                    <Fragment>
                      <span className="mobile-facilities-1-text79">
                        Fine Dining Catering
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="mobile-facilities-1-icons-container2">
                  {!faq2Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="mobile-facilities-1-icon22"
                      >
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq2Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="mobile-facilities-1-icon24"
                      >
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq2Visible && (
                <div className="mobile-facilities-1-container16">
                  <div className="mobile-facilities-1-icon-container1"></div>
                  <p className="mobile-facilities-1-text24 Ubuntu-Light-Gap-12">
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
                  <TailoredCatering
                    slogan2={
                      <Fragment>
                        <span className="mobile-facilities-1-text29">
                          Elegance Redefined
                        </span>
                      </Fragment>
                    }
                    action231={
                      <Fragment>
                        <span className="mobile-facilities-1-text30">
                          Explore Our Gallery Video
                        </span>
                      </Fragment>
                    }
                    rootClassName="tailored-cateringroot-class-name"
                    sectionTitle2={
                      <Fragment>
                        <span className="mobile-facilities-1-text31">
                          Tailored Catering Services to Delight Every Palate
                        </span>
                      </Fragment>
                    }
                    feature1Title2={
                      <Fragment>
                        <span className="mobile-facilities-1-text32">
                          Customizable Menus
                        </span>
                      </Fragment>
                    }
                    feature2Title2={
                      <Fragment>
                        <span className="mobile-facilities-1-text33">
                          Flawless Presentation
                        </span>
                      </Fragment>
                    }
                    featureDescription3={
                      <Fragment>
                        <span className="mobile-facilities-1-text34">
                          At Marigold Celebration Hall, we understand that
                          exceptional cuisine is at the heart of every memorable
                          event. Our tailored catering services offer a wide
                          selection of culinary experiences, meticulously
                          crafted to suit your unique event and personal
                          preferences.
                        </span>
                      </Fragment>
                    }
                    feature1Description2={
                      <Fragment>
                        <span className="mobile-facilities-1-text35">
                          From traditional Indian flavors to contemporary
                          international dishes, our expert culinary team
                          collaborates with you to design a menu that perfectly
                          reflects your tastes and enhances the occasion.
                        </span>
                      </Fragment>
                    }
                    feature2Description2={
                      <Fragment>
                        <span className="mobile-facilities-1-text36">
                          Each dish is presented with style and elegance, adding
                          visual appeal that complements the theme and ambiance
                          of your event. Our attentive staff ensures smooth,
                          professional service from start to finish, allowing
                          you and your guests to enjoy a seamless dining
                          experience.
                        </span>
                      </Fragment>
                    }
                    featureDescription21={
                      <Fragment>
                        <span className="mobile-facilities-1-text37">
                          Our attentive staff ensures smooth, professional
                          service from start to finish, allowing you and your
                          guests to enjoy a seamless dining experience. With
                          Marigold’s catering services, every meal is an
                          opportunity to create lasting memories, making your
                          event truly unforgettable.
                        </span>
                      </Fragment>
                    }
                  ></TailoredCatering>
                </div>
              )}
            </div>
            <div className="mobile-facilities-1-faq3">
              <div
                onClick={() => setFaq3Visible(!faq3Visible)}
                className="mobile-facilities-1-trigger3"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="mobile-facilities-1-icon26"
                >
                  <path
                    d="M19.65 4.5L16.91.96l3.93-.78l.78 3.92zm-2.94.57l-2.74-3.53l-1.97.39l2.75 3.53zm-4.9.98L9.07 2.5l-1.97.41l2.75 3.53zM4.16 3.5l-.98.19a1.995 1.995 0 0 0-1.57 2.35L2 8l4.9-.97zM22 8v10c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2V8zm-2 2H4v8h16zM7 24h2v-2H7zm8 0h2v-2h-2zm-4 0h2v-2h-2z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p className="mobile-facilities-1-faq2-question2 UbuntuLight-14">
                  {props.faq3Question ?? (
                    <Fragment>
                      <span className="mobile-facilities-1-text80">
                        Photography &amp; Videography Services
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="mobile-facilities-1-icons-container3">
                  {!faq3Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="mobile-facilities-1-icon28"
                      >
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq3Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="mobile-facilities-1-icon30"
                      >
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq3Visible && (
                <div className="mobile-facilities-1-container19">
                  <div className="mobile-facilities-1-icon-container2"></div>
                  <p className="mobile-facilities-1-text38 Ubuntu-Light-Gap-12">
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
                  <PhotographyVideographyServices
                    slogan311={
                      <Fragment>
                        <span className="mobile-facilities-1-text43">
                          Elegance Redefined
                        </span>
                      </Fragment>
                    }
                    action23411={
                      <Fragment>
                        <span className="mobile-facilities-1-text44">
                          Explore Our Facilities
                        </span>
                      </Fragment>
                    }
                    rootClassName="photography-videography-servicesroot-class-name"
                    sectionTitle311={
                      <Fragment>
                        <span className="mobile-facilities-1-text45">
                          Photography and Videography Services to Capture Every
                          Moment
                        </span>
                      </Fragment>
                    }
                    feature1Title321={
                      <Fragment>
                        <span className="mobile-facilities-1-text46">
                          Experienced Professionals
                        </span>
                      </Fragment>
                    }
                    feature2Title321={
                      <Fragment>
                        <span className="mobile-facilities-1-text47">
                          State-of-the-Art Equipment
                        </span>
                      </Fragment>
                    }
                    feature1Title3111={
                      <Fragment>
                        <span className="mobile-facilities-1-text48">
                          Customized Packages
                        </span>
                      </Fragment>
                    }
                    feature2Title3111={
                      <Fragment>
                        <span className="mobile-facilities-1-text49">
                          Accessible for All Guests
                        </span>
                      </Fragment>
                    }
                    featureDescription411={
                      <Fragment>
                        <span className="mobile-facilities-1-text50">
                          Marigold Celebration Hall offers professional
                          photography and videography support to preserve the
                          unforgettable moments of your special event. Our
                          experienced team ensures that each highlight is
                          beautifully captured, providing you with lasting
                          memories.
                        </span>
                      </Fragment>
                    }
                    feature1Description321={
                      <Fragment>
                        <span className="mobile-facilities-1-text51">
                          Our skilled photographers and videographers specialize
                          in capturing every detail, from candid moments to
                          grand celebrations.
                        </span>
                      </Fragment>
                    }
                    feature2Description321={
                      <Fragment>
                        <span className="mobile-facilities-1-text52">
                          Using high-quality cameras, lighting, and editing
                          tools, we deliver crisp, vibrant photos and videos
                          that tell the story of your event.
                        </span>
                      </Fragment>
                    }
                    featureDescription2211={
                      <Fragment>
                        <span className="mobile-facilities-1-text53">
                          With Marigold’s photography and videography services,
                          you can relive the magic of your event through
                          stunning visuals that last a lifetime.
                        </span>
                      </Fragment>
                    }
                    feature1Description3111={
                      <Fragment>
                        <span className="mobile-facilities-1-text54">
                          Whether you need full coverage or specific highlights,
                          our flexible service packages cater to your unique
                          requirements and budget.
                        </span>
                      </Fragment>
                    }
                    feature2Description3111={
                      <Fragment>
                        <span className="mobile-facilities-1-text55">
                          We prioritize inclusivity, ensuring that all event
                          areas are fully accessible to guests of all abilities,
                          providing comfort and convenience for everyone.
                        </span>
                      </Fragment>
                    }
                  ></PhotographyVideographyServices>
                </div>
              )}
            </div>
            <div className="mobile-facilities-1-faq4">
              <div
                onClick={() => setFaq4Visible(!faq4Visible)}
                className="mobile-facilities-1-trigger4"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="mobile-facilities-1-icon32"
                >
                  <g fill="currentColor">
                    <path d="M16.48 3.03c-1.05 0-1.91.85-1.91 1.91v1.35a1.91 1.91 0 1 0 3.82 0V4.94a1.923 1.923 0 0 0-1.91-1.91"></path>
                    <path d="M13.81 12.1V6.56c0 1.47 1.2 2.67 2.67 2.67s2.67-1.2 2.67-2.67v7.06h-5.34v1.28h5.34v.2h.016a2.677 2.677 0 0 0 2.654 2.38a2.677 2.677 0 0 0 2.654-2.38h.016v3.557h-5.31v1.28h5.31v3.676l1.054-1.492l-.714-1.97a.5.5 0 0 1 .94-.341l.477 1.315l.722-1.022l-.708-1.93a.5.5 0 0 1 .938-.345l.471 1.282l.812-1.148a.5.5 0 0 1 .816.576l-.812 1.15l1.368.012a.5.5 0 1 1-.008 1l-2.062-.018l-.697.987l1.327.011a.5.5 0 1 1-.008 1l-2.02-.017L25.44 24h-.951h1.58c.24 0 .42.19.42.42v5.19c0 .31-.25.57-.57.57H7.03c-.31 0-.57-.26-.57-.57v-5.19c0-.23.19-.42.42-.42h.63l-.08-.143l-1.103-.41l-.996.928a.5.5 0 1 1-.682-.73l.63-.588l-.661-.246l-1.37.984a.425.425 0 0 1-.496-.69l.906-.651l-.792-.295a.5.5 0 0 1 .348-.938l.724.27l-.268-.979a.425.425 0 1 1 .82-.224l.429 1.568l1.76.654l-1.248-2.236a.5.5 0 0 1-.082-.147l-.996-1.783a.5.5 0 0 1 .874-.488l.618 1.108l.629-1.025a.5.5 0 1 1 .852.523l-.922 1.503l.468.84l.342-.557a.5.5 0 0 1 .852.524l-.635 1.034l1.039 1.862V18.12h5.34v-1.28H8.47V12.1h.016a2.677 2.677 0 0 0 2.654 2.38a2.677 2.677 0 0 0 2.654-2.38zm0 9.1v1.28h5.34V21.2zM7.46 25v2.61h18.03V25z"></path>
                    <path d="M11.14 8.28c-1.05 0-1.91.85-1.91 1.91v1.35a1.91 1.91 0 1 0 3.82 0v-1.35a1.923 1.923 0 0 0-1.91-1.91m10.68 3c-1.05 0-1.91.85-1.91 1.91v1.35a1.91 1.91 0 1 0 3.82 0v-1.35a1.923 1.923 0 0 0-1.91-1.91"></path>
                  </g>
                </svg>
                <p className="mobile-facilities-1-faq2-question3 UbuntuLight-14">
                  {props.faq4Question ?? (
                    <Fragment>
                      <span className="mobile-facilities-1-text77">
                        Décor &amp; Design Services
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="mobile-facilities-1-icons-container4">
                  {!faq4Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="mobile-facilities-1-icon37"
                      >
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq4Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="mobile-facilities-1-icon39"
                      >
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq4Visible && (
                <div className="mobile-facilities-1-container22">
                  <div className="mobile-facilities-1-icon-container3"></div>
                  <p className="mobile-facilities-1-text56 Ubuntu-Light-Gap-12">
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
                  <DecorServices
                    slogan21={
                      <Fragment>
                        <span className="mobile-facilities-1-text61">
                          Elegance Redefined
                        </span>
                      </Fragment>
                    }
                    action232={
                      <Fragment>
                        <span className="mobile-facilities-1-text62">
                          Explore Our Facilities
                        </span>
                      </Fragment>
                    }
                    rootClassName="decor-servicesroot-class-name"
                    sectionTitle21={
                      <Fragment>
                        <span className="mobile-facilities-1-text63">
                          Professional Decor Services to Elevate Every Event
                        </span>
                      </Fragment>
                    }
                    feature1Title21={
                      <Fragment>
                        <span className="mobile-facilities-1-text64">
                          Custom Themes &amp; Styling
                        </span>
                      </Fragment>
                    }
                    feature2Title21={
                      <Fragment>
                        <span className="mobile-facilities-1-text65">
                          Floral Arrangements &amp; Centerpieces
                        </span>
                      </Fragment>
                    }
                    feature1Title211={
                      <Fragment>
                        <span className="mobile-facilities-1-text66">
                          Lighting &amp; Ambiance
                        </span>
                      </Fragment>
                    }
                    feature2Title211={
                      <Fragment>
                        <span className="mobile-facilities-1-text67">
                          Attention to Detail
                        </span>
                      </Fragment>
                    }
                    featureDescription31={
                      <Fragment>
                        <span className="mobile-facilities-1-text68">
                          Marigold Celebration Hall offers premier decor
                          services designed to transform your vision into a
                          captivating reality. Whether it’s a luxurious wedding,
                          a corporate event, or an intimate gathering, our decor
                          team brings creativity, expertise, and precision to
                          every event.
                        </span>
                      </Fragment>
                    }
                    feature1Description21={
                      <Fragment>
                        <span className="mobile-facilities-1-text69">
                          From classic elegance to modern sophistication, we
                          work closely with you to design decor that aligns with
                          your theme, color palette, and desired ambiance.
                        </span>
                      </Fragment>
                    }
                    feature2Description21={
                      <Fragment>
                        <span className="mobile-facilities-1-text70">
                          Stunning floral displays and bespoke centerpieces are
                          thoughtfully crafted to add elegance and personality
                          to your event setting.
                        </span>
                      </Fragment>
                    }
                    featureDescription211={
                      <Fragment>
                        <span className="mobile-facilities-1-text71">
                          With Marigold Celebration Hall’s professional decor
                          services, each event becomes a memorable masterpiece,
                          reflecting your unique style and leaving a lasting
                          impression on your guests.
                        </span>
                      </Fragment>
                    }
                    feature1Description211={
                      <Fragment>
                        <span className="mobile-facilities-1-text72">
                          Our customizable lighting options enhance every space,
                          creating the perfect mood for your celebration,
                          whether it’s a soft romantic glow or a vibrant and
                          energetic atmosphere.
                        </span>
                      </Fragment>
                    }
                    feature2Description211={
                      <Fragment>
                        <span className="mobile-facilities-1-text73">
                          From backdrops to table settings, every detail is
                          meticulously managed, ensuring a cohesive and visually
                          impressive experience.
                        </span>
                      </Fragment>
                    }
                  ></DecorServices>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mobile-facilities-1-actions thq-flex-row">
          <button className="mobile-facilities-1-button menu">
            <Link href="/facilities-at-marigold-celebration">
              <a className="mobile-facilities-1-link thq-button-outline">
                {props.action231 ?? (
                  <Fragment>
                    <span className="mobile-facilities-1-text75">
                      Explore More Facilities
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
          </button>
        </div>
      </section>
      <style jsx>
        {`
          .mobile-facilities-1faq8 {
            gap: 4px;
            width: 100%;
            height: auto;
            display: none;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            backdrop-filter: blur(4px);
            justify-content: center;
            background-color: rgba(217, 217, 217, 0.14);
          }
          .mobile-facilities-1-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .mobile-facilities-1-list {
            flex: 1;
            width: 100%;
            align-self: center;
            align-items: center;
          }
          .mobile-facilities-1-container10 {
            gap: var(--dl-space-space-halfunit);
            width: 95%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            padding-left: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
          }
          .mobile-facilities-1-text10 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-style: normal;
            line-height: 1.4;
          }
          .mobile-facilities-1-text11 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            font-size: 12px;
            max-width: 75%;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
            text-transform: none;
            text-decoration: none;
          }
          .mobile-facilities-1-faq1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
            backdrop-filter: blur(3px);
            background-size: auto;
            background-image: url('/images/marigold-brand-name%20-%20copy11-1400w.webp');
            background-position: center;
          }
          .mobile-facilities-1-trigger1 {
            height: 75px;
            display: flex;
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-primary-logo-color-2);
            border-style: dotted;
            border-width: 0.5px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
            border-top-left-radius: var(--dl-radius-radius-radius10);
            border-top-right-radius: var(--dl-radius-radius-radius10);
            border-bottom-left-radius: var(--dl-radius-radius-radius10);
            border-bottom-right-radius: var(--dl-radius-radius-radius10);
          }

          .mobile-facilities-1-icon10 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 45px;
            height: 45px;
            padding: 5px;
            align-self: center;
            border-color: var(--dl-color-theme-accent1);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .mobile-facilities-1-faq1-question {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
          }
          .mobile-facilities-1-faq1-question:active {
            background-color: transparent;
          }
          .mobile-facilities-1-icons-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .mobile-facilities-1-icon12 {
            fill: var(--dl-color-primary-logo-color-2);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .mobile-facilities-1-icon14 {
            fill: var(--dl-color-primary-logo-color-1);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .mobile-facilities-1-container13 {
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
          .mobile-facilities-1-text12 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            display: none;
            text-align: left;
          }
          .mobile-facilities-1-text15 {
            display: inline-block;
          }
          .mobile-facilities-1-text16 {
            display: inline-block;
          }
          .mobile-facilities-1-text17 {
            display: inline-block;
          }
          .mobile-facilities-1-text18 {
            display: inline-block;
          }
          .mobile-facilities-1-text19 {
            display: inline-block;
          }
          .mobile-facilities-1-text20 {
            display: inline-block;
          }
          .mobile-facilities-1-text21 {
            display: inline-block;
          }
          .mobile-facilities-1-text22 {
            display: inline-block;
          }
          .mobile-facilities-1-text23 {
            display: inline-block;
          }
          .mobile-facilities-1-faq2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
            backdrop-filter: blur(3px);
            background-size: auto;
            background-image: url('/images/marigold-brand-name%20-%20copy11-1400w.webp');
            background-position: center;
          }
          .mobile-facilities-1-trigger2 {
            height: 75px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-primary-logo-color-2);
            border-style: dotted;
            border-width: 0.5px;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: row;
            justify-content: space-between;
          }
          .mobile-facilities-1-icon16 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 45px;
            height: 45px;
            padding: 5px;
            border-color: var(--dl-color-theme-accent1);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .mobile-facilities-1-faq2-question1 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
          }
          .mobile-facilities-1-icons-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .mobile-facilities-1-icon22 {
            fill: var(--dl-color-primary-logo-color-2);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .mobile-facilities-1-icon24 {
            fill: var(--dl-color-primary-logo-color-1);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .mobile-facilities-1-container16 {
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
          .mobile-facilities-1-icon-container1 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: flex-start;
            flex-direction: column;
          }
          .mobile-facilities-1-text24 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            display: none;
          }
          .mobile-facilities-1-text29 {
            display: inline-block;
          }
          .mobile-facilities-1-text30 {
            display: inline-block;
          }
          .mobile-facilities-1-text31 {
            display: inline-block;
          }
          .mobile-facilities-1-text32 {
            display: inline-block;
          }
          .mobile-facilities-1-text33 {
            display: inline-block;
          }
          .mobile-facilities-1-text34 {
            display: inline-block;
          }
          .mobile-facilities-1-text35 {
            display: inline-block;
          }
          .mobile-facilities-1-text36 {
            display: inline-block;
          }
          .mobile-facilities-1-text37 {
            display: inline-block;
          }
          .mobile-facilities-1-faq3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
            backdrop-filter: blur(3px);
            background-size: auto;
            background-image: url('/images/marigold-brand-name%20-%20copy11-1400w.webp');
            background-position: center;
          }
          .mobile-facilities-1-trigger3 {
            height: 75px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-primary-logo-color-2);
            border-style: dotted;
            border-width: 0.5px;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: row;
            justify-content: space-between;
          }
          .mobile-facilities-1-icon26 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 45px;
            height: 45px;
            padding: 5px;
            border-color: var(--dl-color-theme-accent1);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .mobile-facilities-1-faq2-question2 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-style: normal;
          }
          .mobile-facilities-1-icons-container3 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .mobile-facilities-1-icon28 {
            fill: var(--dl-color-primary-logo-color-2);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .mobile-facilities-1-icon30 {
            fill: var(--dl-color-primary-logo-color-1);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .mobile-facilities-1-container19 {
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
          .mobile-facilities-1-icon-container2 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: flex-start;
            flex-direction: column;
          }
          .mobile-facilities-1-text38 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            display: none;
          }
          .mobile-facilities-1-text43 {
            display: inline-block;
          }
          .mobile-facilities-1-text44 {
            display: inline-block;
          }
          .mobile-facilities-1-text45 {
            display: inline-block;
          }
          .mobile-facilities-1-text46 {
            display: inline-block;
          }
          .mobile-facilities-1-text47 {
            display: inline-block;
          }
          .mobile-facilities-1-text48 {
            display: inline-block;
          }
          .mobile-facilities-1-text49 {
            display: inline-block;
          }
          .mobile-facilities-1-text50 {
            display: inline-block;
          }
          .mobile-facilities-1-text51 {
            display: inline-block;
          }
          .mobile-facilities-1-text52 {
            display: inline-block;
          }
          .mobile-facilities-1-text53 {
            display: inline-block;
          }
          .mobile-facilities-1-text54 {
            display: inline-block;
          }
          .mobile-facilities-1-text55 {
            display: inline-block;
          }
          .mobile-facilities-1-faq4 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
            backdrop-filter: blur(3px);
            background-size: auto;
            background-image: url('/images/marigold-brand-name%20-%20copy11-1400w.webp');
            background-position: center;
          }
          .mobile-facilities-1-trigger4 {
            height: 75px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-primary-logo-color-2);
            border-style: dotted;
            border-width: 0.5px;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: row;
            justify-content: space-between;
          }
          .mobile-facilities-1-icon32 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 45px;
            height: 45px;
            padding: 5px;
            border-color: var(--dl-color-theme-accent1);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .mobile-facilities-1-faq2-question3 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-style: normal;
          }
          .mobile-facilities-1-icons-container4 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .mobile-facilities-1-icon37 {
            fill: var(--dl-color-primary-logo-color-2);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .mobile-facilities-1-icon39 {
            fill: var(--dl-color-primary-logo-color-1);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .mobile-facilities-1-container22 {
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
          .mobile-facilities-1-icon-container3 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: flex-start;
            flex-direction: column;
          }
          .mobile-facilities-1-text56 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            display: none;
          }
          .mobile-facilities-1-text61 {
            display: inline-block;
          }
          .mobile-facilities-1-text62 {
            display: inline-block;
          }
          .mobile-facilities-1-text63 {
            display: inline-block;
          }
          .mobile-facilities-1-text64 {
            display: inline-block;
          }
          .mobile-facilities-1-text65 {
            display: inline-block;
          }
          .mobile-facilities-1-text66 {
            display: inline-block;
          }
          .mobile-facilities-1-text67 {
            display: inline-block;
          }
          .mobile-facilities-1-text68 {
            display: inline-block;
          }
          .mobile-facilities-1-text69 {
            display: inline-block;
          }
          .mobile-facilities-1-text70 {
            display: inline-block;
          }
          .mobile-facilities-1-text71 {
            display: inline-block;
          }
          .mobile-facilities-1-text72 {
            display: inline-block;
          }
          .mobile-facilities-1-text73 {
            display: inline-block;
          }
          .mobile-facilities-1-actions {
            width: 50%;
            padding: var(--dl-space-space-halfunit);
            position: relative;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .mobile-facilities-1-button {
            fill: transparent;
            flex: 1;
            color: transparent;
            transform: scale(0.99);
            border-width: 0px;
          }
          .mobile-facilities-1-link {
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
            padding-top: var(--dl-space-space-unit);
            border-color: #380fe1;
            border-style: dotted;
            border-width: 0.5px;
            padding-bottom: var(--dl-space-space-unit);
            text-transform: capitalize;
            text-decoration: none;
            background-color: rgba(245, 184, 60, 0.1);
          }
          .mobile-facilities-1-link:hover {
            transform: scale(1);
            box-shadow: 1px 2px 25px 1px rgba(50, 0, 255, 0.4);
            border-color: var(--dl-color-primary-logo-color-2);
            border-style: dotted;
            border-width: 0.5px;
            background-color: rgba(61, 19, 234, 0.3);
          }
          .mobile-facilities-1-text75 {
            display: inline-block;
          }
          .mobile-facilities-1-text76 {
            display: inline-block;
          }
          .mobile-facilities-1-text77 {
            display: inline-block;
          }
          .mobile-facilities-1-text78 {
            display: inline-block;
          }
          .mobile-facilities-1-text79 {
            display: inline-block;
          }
          .mobile-facilities-1-text80 {
            display: inline-block;
          }
          .mobile-facilities-1-text81 {
            display: inline-block;
          }
          .mobile-facilities-1root-class-name {
            background-color: transparent;
          }
          @media (max-width: 1200px) {
            .mobile-facilities-1-text11 {
              max-width: 85%;
            }
            .mobile-facilities-1-link {
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .mobile-facilities-1root-class-name {
              background-color: transparent;
            }
          }
          @media (max-width: 991px) {
            .mobile-facilities-1faq8 {
              display: flex;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              background-color: rgba(0, 0, 0, 0.5);
            }
            .mobile-facilities-1-max-width {
              flex-direction: column;
            }
            .mobile-facilities-1-list {
              width: 100%;
            }
            .mobile-facilities-1-container10 {
              padding-bottom: var(--dl-space-space-unit);
            }
            .mobile-facilities-1-container13 {
              padding: var(--dl-space-space-halfunit);
            }
            .mobile-facilities-1root-class-name {
              display: flex;
              background-color: transparent;
            }
          }
          @media (max-width: 599px) {
            .mobile-facilities-1faq8 {
              display: flex;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: 0px;
              justify-content: center;
              background-color: rgba(0, 0, 0, 0.59);
            }
            .mobile-facilities-1-list {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .mobile-facilities-1-container10 {
              padding-left: var(--dl-space-space-halfunit);
            }
            .mobile-facilities-1-text11 {
              max-width: 100%;
            }
            .mobile-facilities-1-faq1 {
              border-color: var(--dl-color-primary-logo-color-2);
            }
            .mobile-facilities-1-trigger1 {
              align-self: stretch;
            }
            .mobile-facilities-1-faq1-question {
              fill: auto;
              color: auto;
            }
            .mobile-facilities-1-icon12 {
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .mobile-facilities-1-container13 {
              animation-timing-function: ease;
            }
            .mobile-facilities-1-text12 {
              color: var(--dl-color-primary-logo-color-1);
              font-family: Ubuntu;
              letter-spacing: 0.5px;
            }
            .mobile-facilities-1-trigger2 {
              height: 75px;
              border-color: var(--dl-color-primary-logo-color-2);
              border-style: dotted;
            }
            .mobile-facilities-1-faq2-question1 {
              fill: auto;
              color: auto;
            }
            .mobile-facilities-1-icon22 {
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .mobile-facilities-1-container16 {
              flex-direction: column;
            }
            .mobile-facilities-1-faq3 {
              background-color: transparent;
            }
            .mobile-facilities-1-trigger3 {
              height: 75px;
              border-color: var(--dl-color-primary-logo-color-2);
              border-style: dotted;
            }
            .mobile-facilities-1-icon26 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
            }
            .mobile-facilities-1-faq2-question2 {
              fill: auto;
              color: auto;
              font-style: normal;
            }
            .mobile-facilities-1-icon28 {
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .mobile-facilities-1-container19 {
              flex-direction: column;
            }
            .mobile-facilities-1-faq4 {
              background-color: transparent;
            }
            .mobile-facilities-1-trigger4 {
              height: 75px;
              border-color: var(--dl-color-primary-logo-color-2);
              border-style: dotted;
            }
            .mobile-facilities-1-icon32 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
            }
            .mobile-facilities-1-faq2-question3 {
              fill: auto;
              color: auto;
              font-style: normal;
            }
            .mobile-facilities-1-icon37 {
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .mobile-facilities-1-container22 {
              flex-direction: column;
            }
            .mobile-facilities-1-actions {
              align-self: center;
            }
            .mobile-facilities-1-link {
              line-height: 1.4;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .mobile-facilities-1root-class-name {
              display: flex;
            }
          }
          @media (max-width: 479px) {
            .mobile-facilities-1-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .mobile-facilities-1-actions {
              width: 100%;
              flex-wrap: wrap;
              margin-top: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 399px) {
            .mobile-facilities-1faq8 {
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
          }
        `}
      </style>
    </>
  )
}

MobileFacilities1.defaultProps = {
  rootClassName: '',
  action231: undefined,
  heading2: undefined,
  faq4Question: undefined,
  heading: undefined,
  faq2Question: undefined,
  faq3Question: undefined,
  faq1Question: undefined,
}

MobileFacilities1.propTypes = {
  rootClassName: PropTypes.string,
  action231: PropTypes.element,
  heading2: PropTypes.element,
  faq4Question: PropTypes.element,
  heading: PropTypes.element,
  faq2Question: PropTypes.element,
  faq3Question: PropTypes.element,
  faq1Question: PropTypes.element,
}

export default MobileFacilities1
