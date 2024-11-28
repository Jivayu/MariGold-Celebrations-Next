import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import BrandLogo from './brand-logo'

const PricingPlans = (props) => {
  const [faq2Visible, setFaq2Visible] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq4Visible, setFaq4Visible] = useState(false)
  return (
    <>
      <section
        id="about-marigold-1"
        className={`pricing-plans-faq8 thq-section-padding ${props.rootClassName} `}
      >
        <div className="pricing-plans-max-width thq-flex-row thq-section-max-width">
          <div className="pricing-plans-container100">
            <h1 className="pricing-plans-text100">
              {props.heading ?? (
                <Fragment>
                  <span className="pricing-plans-text231">
                    Our Plans &amp; Structures
                  </span>
                </Fragment>
              )}
            </h1>
          </div>
          <div className="pricing-plans-list UbuntuLight-14 thq-flex-column">
            <img
              id="MariGold Celebration - Hingna, Nagpur"
              alt={props.imageAlt1}
              src={props.imageSrc1}
              className="pricing-plans-image"
            />
            <BrandLogo rootClassName="brand-logoroot-class-name8"></BrandLogo>
            <div className="pricing-plans-faq1">
              <div className="pricing-plans-trigger1">
                <div className="pricing-plans-container101">
                  <label
                    id="Base Pax | People"
                    className="pricing-plans-faq1-question10"
                  >
                    {props.faq1Question ?? (
                      <Fragment>
                        <span className="pricing-plans-text232">
                          Base Pax | People
                        </span>
                      </Fragment>
                    )}
                  </label>
                </div>
                <div className="pricing-plans-container102">
                  <label
                    id="Plan A 650 Only"
                    className="pricing-plans-faq1-question11"
                  >
                    {props.faq1Question1 ?? (
                      <Fragment>
                        <span className="pricing-plans-text222">
                          Plan A 650 Only
                        </span>
                      </Fragment>
                    )}
                  </label>
                </div>
                <div className="pricing-plans-container103">
                  <label
                    id="Plan A 700 Only"
                    className="pricing-plans-faq1-question12"
                  >
                    {props.faq1Question11 ?? (
                      <Fragment>
                        <span className="pricing-plans-text239">
                          Plan A 700 Only
                        </span>
                      </Fragment>
                    )}
                  </label>
                </div>
                <div className="pricing-plans-container104">
                  <label
                    id="Plan A 750 Only"
                    className="pricing-plans-faq1-question13"
                  >
                    {props.faq1Question111 ?? (
                      <Fragment>
                        <span className="pricing-plans-text235">
                          Plan A 750 Only
                        </span>
                      </Fragment>
                    )}
                  </label>
                </div>
                <div className="pricing-plans-icons-container1">
                  <div>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="pricing-plans-icon10"
                    >
                      <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                    </svg>
                  </div>
                  <div>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="pricing-plans-icon12"
                    >
                      <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="pricing-plans-container107">
                <animate-on-reveal
                  animation="fadeIn"
                  duration="2000ms"
                  delay="10ms"
                  direction="normal"
                  easing="ease"
                  iteration="1"
                >
                  <div
                    data-thq-animate-on-reveal="true"
                    className="pricing-plans-container108"
                  >
                    <div className="pricing-plans-container109">
                      <p className="pricing-plans-text101">
                        <span>100 Pax | People</span>
                        <br></br>
                      </p>
                    </div>
                    <div className="pricing-plans-container110">
                      <p className="pricing-plans-text104">
                        ₹      65,000 /- Only
                      </p>
                    </div>
                    <div className="pricing-plans-container111">
                      <p className="pricing-plans-text105">
                        ₹     70,000 /- Only
                      </p>
                    </div>
                    <div className="pricing-plans-container112">
                      <p className="pricing-plans-text106">
                        ₹     70,000 /- Only
                      </p>
                    </div>
                  </div>
                </animate-on-reveal>
                <animate-on-reveal
                  animation="fadeIn"
                  duration="3000ms"
                  delay="10ms"
                  direction="normal"
                  easing="ease"
                  iteration="1"
                >
                  <div
                    data-thq-animate-on-reveal="true"
                    className="pricing-plans-container113"
                  >
                    <div className="pricing-plans-container114">
                      <p className="pricing-plans-text107">
                        <span>250 Pax | People</span>
                        <br></br>
                      </p>
                    </div>
                    <div className="pricing-plans-container115">
                      <p className="pricing-plans-text110">
                        ₹  1,62,500 /- Only
                      </p>
                    </div>
                    <div className="pricing-plans-container116">
                      <p className="pricing-plans-text111">
                        ₹  1,75,500 /- Only
                      </p>
                    </div>
                    <div className="pricing-plans-container117">
                      <p className="pricing-plans-text112">
                        ₹  1,87,000 /- Only
                      </p>
                    </div>
                  </div>
                </animate-on-reveal>
                <animate-on-reveal
                  animation="fadeIn"
                  duration="4000ms"
                  delay="10ms"
                  direction="normal"
                  easing="ease"
                  iteration="1"
                >
                  <div
                    data-thq-animate-on-reveal="true"
                    className="pricing-plans-container118"
                  >
                    <div className="pricing-plans-container119">
                      <p className="pricing-plans-text113">
                        <span>400 Pax | People</span>
                        <br></br>
                      </p>
                    </div>
                    <div className="pricing-plans-container120">
                      <p className="pricing-plans-text116">
                        ₹  2,60,000 /- Only
                      </p>
                    </div>
                    <div className="pricing-plans-container121">
                      <p className="pricing-plans-text117">
                        ₹  2,80,500 /- Only
                      </p>
                    </div>
                    <div className="pricing-plans-container122">
                      <p className="pricing-plans-text118">
                        ₹  3,00,000 /- Only
                      </p>
                    </div>
                  </div>
                </animate-on-reveal>
                <animate-on-reveal
                  animation="fadeIn"
                  duration="4000ms"
                  delay="10ms"
                  direction="normal"
                  easing="ease"
                  iteration="1"
                >
                  <div
                    data-thq-animate-on-reveal="true"
                    className="pricing-plans-container123"
                  >
                    <div className="pricing-plans-container124">
                      <p className="pricing-plans-text119">
                        <span>700 Pax | People</span>
                        <br></br>
                      </p>
                    </div>
                    <div className="pricing-plans-container125">
                      <p className="pricing-plans-text122">
                        ₹  4,55,000 /- Only
                      </p>
                    </div>
                    <div className="pricing-plans-container126">
                      <p className="pricing-plans-text123">
                        ₹  4,90,000 /- Only
                      </p>
                    </div>
                    <div className="pricing-plans-container127">
                      <p className="pricing-plans-text124">
                        ₹  5,25,000 /- Only
                      </p>
                    </div>
                  </div>
                </animate-on-reveal>
                <div className="pricing-plans-container128">
                  <div className="pricing-plans-container129"></div>
                  <div className="pricing-plans-container130"></div>
                  <div className="pricing-plans-container131"></div>
                  <div className="pricing-plans-container132"></div>
                </div>
                <div className="pricing-plans-container133">
                  <div className="pricing-plans-container134"></div>
                  <div className="pricing-plans-container135">
                    <p className="pricing-plans-text125">
                      Classsic Menu For Plan A
                    </p>
                  </div>
                  <div className="pricing-plans-container136">
                    <p className="pricing-plans-text126">
                      Deluxe Menu For 100 Pax - 250 Pax
                    </p>
                    <p className="pricing-plans-text127">
                      Deluxe Menu For 100 Pax - 250 Pax
                    </p>
                  </div>
                  <div className="pricing-plans-container137">
                    <p className="pricing-plans-text128">
                      <span>Royal &amp; Customise Menu </span>
                      <span>For Plan C</span>
                    </p>
                  </div>
                </div>
                <div className="pricing-plans-container138">
                  <div className="pricing-plans-container139">
                    <p className="pricing-plans-text131">Fine Catering</p>
                  </div>
                  <div className="pricing-plans-container140">
                    <p className="pricing-plans-text132">
                      Classsic Menu For Plan A
                    </p>
                  </div>
                  <div className="pricing-plans-container141">
                    <p className="pricing-plans-text133">
                      Deluxe Menu For 100 Pax - 250 Pax
                    </p>
                  </div>
                  <div className="pricing-plans-container142">
                    <p className="pricing-plans-text134">
                      <span>Royal &amp; Customise Menu </span>
                      <span>For Plan C</span>
                    </p>
                  </div>
                </div>
                <div className="pricing-plans-container143">
                  <div className="pricing-plans-container144">
                    <p className="pricing-plans-text137">Decor</p>
                  </div>
                  <div className="pricing-plans-container145">
                    <p className="pricing-plans-text138">
                      Classsic Menu For Plan A
                    </p>
                  </div>
                  <div className="pricing-plans-container146">
                    <p className="pricing-plans-text139">
                      Deluxe Menu For 100 Pax - 250 Pax
                    </p>
                  </div>
                  <div className="pricing-plans-container147">
                    <p className="pricing-plans-text140">
                      <span>Royal &amp; Customise Menu </span>
                      <span>For Plan C</span>
                    </p>
                  </div>
                </div>
                <div className="pricing-plans-container148">
                  <div className="pricing-plans-container149">
                    <p className="pricing-plans-text143">Hospitality</p>
                  </div>
                  <div className="pricing-plans-container150">
                    <p className="pricing-plans-text144">
                      Classsic Menu For Plan A
                    </p>
                  </div>
                  <div className="pricing-plans-container151">
                    <p className="pricing-plans-text145">
                      Deluxe Menu For 100 Pax - 250 Pax
                    </p>
                  </div>
                  <div className="pricing-plans-container152">
                    <p className="pricing-plans-text146">
                      <span>Royal &amp; Customise Menu </span>
                      <span>For Plan C</span>
                    </p>
                  </div>
                </div>
                <div className="pricing-plans-container153">
                  <div className="pricing-plans-container154">
                    <p className="pricing-plans-text149">Entertainment</p>
                  </div>
                  <div className="pricing-plans-container155">
                    <p className="pricing-plans-text150">
                      Classsic Menu For Plan A
                    </p>
                  </div>
                  <div className="pricing-plans-container156">
                    <p className="pricing-plans-text151">
                      Deluxe Menu For 100 Pax - 250 Pax
                    </p>
                  </div>
                  <div className="pricing-plans-container157">
                    <p className="pricing-plans-text152">
                      <span>Royal &amp; Customise Menu </span>
                      <span>For Plan C</span>
                    </p>
                  </div>
                </div>
                <div className="pricing-plans-container158">
                  <div className="pricing-plans-container159">
                    <p className="pricing-plans-text155">
                      Valet Parking Tickets
                    </p>
                  </div>
                  <div className="pricing-plans-container160">
                    <p className="pricing-plans-text156">
                      Classsic Menu For Plan A
                    </p>
                  </div>
                  <div className="pricing-plans-container161">
                    <p className="pricing-plans-text157">
                      Deluxe Menu For 100 Pax - 250 Pax
                    </p>
                  </div>
                  <div className="pricing-plans-container162">
                    <p className="pricing-plans-text158">
                      <span>Royal &amp; Customise Menu </span>
                      <span>For Plan C</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pricing-plans-faq2">
              <div
                onClick={() => setFaq2Visible(!faq2Visible)}
                className="pricing-plans-trigger2"
              >
                <h3
                  id="Birthday Parties &amp; Anniversaries | Social Gatherings &amp; Family Events."
                  className="pricing-plans-faq2-question1 UbuntuLight-14"
                >
                  {props.faq2Question ?? (
                    <Fragment>
                      <span className="pricing-plans-text224">
                        Birthday Parties &amp; Anniversaries | Social Gatherings
                        &amp; Family Events.
                      </span>
                    </Fragment>
                  )}
                </h3>
                <div className="pricing-plans-container163">
                  <label className="pricing-plans-faq1-question14">
                    {props.faq1Question2 ?? (
                      <Fragment>
                        <span className="pricing-plans-text225">
                          Base Pax | People
                        </span>
                      </Fragment>
                    )}
                  </label>
                </div>
                <div className="pricing-plans-container164">
                  <label className="pricing-plans-faq1-question15">
                    {props.faq1Question12 ?? (
                      <Fragment>
                        <span className="pricing-plans-text234">
                          Plan A 650 Only
                        </span>
                      </Fragment>
                    )}
                  </label>
                </div>
                <div className="pricing-plans-container165">
                  <label
                    id="Weddings &amp; Receptions | Engagement Ceremonies &amp; Pre-Wedding Functions."
                    className="pricing-plans-faq1-question16"
                  >
                    {props.faq1Question112 ?? (
                      <Fragment>
                        <span className="pricing-plans-text230">
                          Plan A 700 Only
                        </span>
                      </Fragment>
                    )}
                  </label>
                </div>
                <div className="pricing-plans-container166">
                  <label
                    id="Weddings &amp; Receptions | Engagement Ceremonies &amp; Pre-Wedding Functions."
                    className="pricing-plans-faq1-question17"
                  >
                    {props.faq1Question1111 ?? (
                      <Fragment>
                        <span className="pricing-plans-text233">
                          Plan A 750 Only
                        </span>
                      </Fragment>
                    )}
                  </label>
                </div>
                <div className="pricing-plans-icons-container2">
                  {!faq2Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="pricing-plans-icon14"
                      >
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq2Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="pricing-plans-icon16"
                      >
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq2Visible === true && (
                <div className="pricing-plans-container169">
                  <div className="pricing-plans-container170">
                    <animate-on-reveal
                      animation="fadeIn"
                      duration="2000ms"
                      delay="10ms"
                      direction="normal"
                      easing="ease"
                      iteration="1"
                    >
                      <div
                        data-thq-animate-on-reveal="true"
                        className="pricing-plans-container171"
                      >
                        <div className="pricing-plans-container172">
                          <p className="pricing-plans-text161">
                            100 Pax | People
                          </p>
                        </div>
                        <div className="pricing-plans-container173">
                          <p className="pricing-plans-text162">
                            250 Pax | People
                          </p>
                        </div>
                        <div className="pricing-plans-container174">
                          <p className="pricing-plans-text163">
                            400 Pax | People
                          </p>
                        </div>
                        <div className="pricing-plans-container175">
                          <p className="pricing-plans-text164">
                            700 Pax | People
                          </p>
                        </div>
                      </div>
                    </animate-on-reveal>
                    <animate-on-reveal
                      animation="fadeIn"
                      duration="2000ms"
                      delay="10ms"
                      direction="normal"
                      easing="ease"
                      iteration="1"
                    >
                      <div
                        data-thq-animate-on-reveal="true"
                        className="pricing-plans-container176"
                      >
                        <div className="pricing-plans-container177">
                          <p className="pricing-plans-text165">
                            ₹      65,000 /- Only
                          </p>
                        </div>
                        <div className="pricing-plans-container178">
                          <p className="pricing-plans-text166">
                            ₹  1,62,500 /- Only
                          </p>
                        </div>
                        <div className="pricing-plans-container179">
                          <p className="pricing-plans-text167">
                            ₹  2,60,000 /- Only
                          </p>
                        </div>
                        <div className="pricing-plans-container180">
                          <p className="pricing-plans-text168">
                            ₹  4,55,000 /- Only
                          </p>
                        </div>
                      </div>
                    </animate-on-reveal>
                    <animate-on-reveal
                      animation="fadeIn"
                      duration="2000ms"
                      delay="10ms"
                      direction="normal"
                      easing="ease"
                      iteration="1"
                    >
                      <div
                        data-thq-animate-on-reveal="true"
                        className="pricing-plans-container181"
                      >
                        <div className="pricing-plans-container182">
                          <p className="pricing-plans-text169">
                            ₹     70,000 /- Only
                          </p>
                        </div>
                        <div className="pricing-plans-container183">
                          <p className="pricing-plans-text170">
                            ₹  1,75,500 /- Only
                          </p>
                        </div>
                        <div className="pricing-plans-container184">
                          <p className="pricing-plans-text171">
                            ₹  2,80,500 /- Only
                          </p>
                        </div>
                        <div className="pricing-plans-container185">
                          <p className="pricing-plans-text172">
                            ₹  4,90,000 /- Only
                          </p>
                        </div>
                      </div>
                    </animate-on-reveal>
                    <animate-on-reveal
                      animation="fadeIn"
                      duration="2000ms"
                      delay="10ms"
                      direction="normal"
                      easing="ease"
                      iteration="1"
                    >
                      <div
                        data-thq-animate-on-reveal="true"
                        className="pricing-plans-container186"
                      >
                        <div className="pricing-plans-container187">
                          <p className="pricing-plans-text173">
                            ₹     70,000 /- Only
                          </p>
                        </div>
                        <div className="pricing-plans-container188">
                          <p className="pricing-plans-text174">
                            ₹  1,87,000 /- Only
                          </p>
                        </div>
                        <div className="pricing-plans-container189">
                          <p className="pricing-plans-text175">
                            ₹  3,00,000 /- Only
                          </p>
                        </div>
                        <div className="pricing-plans-container190">
                          <p className="pricing-plans-text176">
                            ₹  5,25,000 /- Only
                          </p>
                        </div>
                      </div>
                    </animate-on-reveal>
                  </div>
                </div>
              )}
            </div>
            <div className="pricing-plans-faq3">
              <div
                onClick={() => setFaq3Visible(!faq3Visible)}
                className="pricing-plans-trigger3"
              >
                <div className="pricing-plans-container191">
                  <label className="pricing-plans-faq1-question18">
                    {props.faq1Question21 ?? (
                      <Fragment>
                        <span className="pricing-plans-text237">
                          Services &amp; Features
                        </span>
                      </Fragment>
                    )}
                  </label>
                </div>
                <div className="pricing-plans-container192">
                  <label className="pricing-plans-faq1-question19">
                    {props.faq1Question213 ?? (
                      <Fragment>
                        <span className="pricing-plans-text226">
                          <span>For Plan A</span>
                          <br></br>
                        </span>
                      </Fragment>
                    )}
                  </label>
                </div>
                <div className="pricing-plans-container193">
                  <label className="pricing-plans-faq1-question20">
                    {props.faq1Question212 ?? (
                      <Fragment>
                        <span className="pricing-plans-text236">
                          For Plan B
                        </span>
                      </Fragment>
                    )}
                  </label>
                </div>
                <div className="pricing-plans-container194">
                  <label className="pricing-plans-faq1-question21">
                    {props.faq1Question211 ?? (
                      <Fragment>
                        <span className="pricing-plans-text238">
                          For Plan C
                        </span>
                      </Fragment>
                    )}
                  </label>
                </div>
                <h3
                  id="Corporate Events &amp; Conferences | Award Ceremonies &amp; Gala Dinners."
                  className="pricing-plans-faq2-question2 UbuntuLight-14"
                >
                  {props.faq3Question ?? (
                    <Fragment>
                      <span className="pricing-plans-text223">
                        Corporate Events &amp; Conferences | Award Ceremonies
                        &amp; Gala Dinners.
                      </span>
                    </Fragment>
                  )}
                </h3>
                <div className="pricing-plans-icons-container3">
                  {!faq3Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="pricing-plans-icon18"
                      >
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq3Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="pricing-plans-icon20"
                      >
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq3Visible && (
                <div className="pricing-plans-container197">
                  <p className="pricing-plans-text177 p">
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
                  <div className="pricing-plans-container198">
                    <animate-on-reveal
                      animation="fadeIn"
                      duration="2000ms"
                      delay="10ms"
                      direction="normal"
                      easing="ease"
                      iteration="1"
                    >
                      <div
                        data-thq-animate-on-reveal="true"
                        className="pricing-plans-container199"
                      >
                        <div className="pricing-plans-container200">
                          <p className="pricing-plans-text182">Fine Catering</p>
                        </div>
                        <div className="pricing-plans-container201">
                          <p className="pricing-plans-text183">Decor</p>
                        </div>
                        <div className="pricing-plans-container202">
                          <p className="pricing-plans-text184">Hospitality</p>
                        </div>
                        <div className="pricing-plans-container203">
                          <p className="pricing-plans-text185">Entertainment</p>
                        </div>
                        <div className="pricing-plans-container204">
                          <p className="pricing-plans-text186">
                            Valet Parking Tickets
                          </p>
                        </div>
                      </div>
                    </animate-on-reveal>
                    <animate-on-reveal
                      animation="fadeIn"
                      duration="2000ms"
                      delay="10ms"
                      direction="normal"
                      easing="ease"
                      iteration="1"
                    >
                      <div
                        data-thq-animate-on-reveal="true"
                        className="pricing-plans-container205"
                      >
                        <div className="pricing-plans-container206">
                          <p className="pricing-plans-text187">
                            Starters, Main Course
                          </p>
                        </div>
                        <div className="pricing-plans-container207">
                          <p className="pricing-plans-text188">Regular Decor</p>
                        </div>
                        <div className="pricing-plans-container208">
                          <p className="pricing-plans-text189">
                            <span>2 Luxury Rooms Only</span>
                            <br></br>
                            <span>Dedicated Event Pilot, 15 Matts</span>
                          </p>
                        </div>
                        <div className="pricing-plans-container209">
                          <p className="pricing-plans-text193">Audio Setup</p>
                        </div>
                        <div className="pricing-plans-container210">
                          <p className="pricing-plans-text194">
                            15 Parking Tickets
                          </p>
                        </div>
                      </div>
                    </animate-on-reveal>
                    <animate-on-reveal
                      animation="fadeIn"
                      duration="2000ms"
                      delay="10ms"
                      direction="normal"
                      easing="ease"
                      iteration="1"
                    >
                      <div
                        data-thq-animate-on-reveal="true"
                        className="pricing-plans-container211"
                      >
                        <div className="pricing-plans-container212">
                          <p className="pricing-plans-text195">
                            <span>Wel-Come Drinks, Starters</span>
                            <br></br>
                            <span>Main Course, Desserts</span>
                          </p>
                        </div>
                        <div className="pricing-plans-container213">
                          <p className="pricing-plans-text199">
                            Customise Theme Decor, Chandeliers etc
                          </p>
                        </div>
                        <div className="pricing-plans-container214">
                          <p className="pricing-plans-text200">
                            <span>3 Luxury Rooms Only</span>
                            <br></br>
                            <span>Dedicated Event Pilot</span>
                          </p>
                        </div>
                        <div className="pricing-plans-container215">
                          <p className="pricing-plans-text204">
                            Audio Setup, DJ
                          </p>
                        </div>
                        <div className="pricing-plans-container216">
                          <p className="pricing-plans-text205">
                            20 Parking Tickets
                          </p>
                        </div>
                      </div>
                    </animate-on-reveal>
                    <animate-on-reveal
                      animation="fadeIn"
                      duration="2000ms"
                      delay="10ms"
                      direction="normal"
                      easing="ease"
                      iteration="1"
                    >
                      <div
                        data-thq-animate-on-reveal="true"
                        className="pricing-plans-container217"
                      >
                        <div className="pricing-plans-container218">
                          <p className="pricing-plans-text206">
                            <span>Wel-Come Drinks, Starters</span>
                            <br></br>
                            <span>Main Course, Desserts</span>
                          </p>
                        </div>
                        <div className="pricing-plans-container219">
                          <p className="pricing-plans-text210">
                            Customise Theme DecorChandeliers etc
                          </p>
                        </div>
                        <div className="pricing-plans-container220">
                          <p className="pricing-plans-text211">
                            <span>5 Luxury Rooms, More If Needed.</span>
                            <br></br>
                            <span>Dedicated Event Pilot</span>
                          </p>
                        </div>
                        <div className="pricing-plans-container221">
                          <p className="pricing-plans-text215">
                            Audio Setup, DJArtist ( Anchor ), Emcee
                          </p>
                        </div>
                        <div className="pricing-plans-container222">
                          <p className="pricing-plans-text216">
                            25 Parking Tickets
                          </p>
                        </div>
                      </div>
                    </animate-on-reveal>
                  </div>
                </div>
              )}
            </div>
            <div className="pricing-plans-faq4">
              <div
                onClick={() => setFaq4Visible(!faq4Visible)}
                className="pricing-plans-trigger4"
              >
                <h3
                  id="Religious &amp; Cultural Events | Exhibitions &amp; Trade Shows."
                  className="pricing-plans-faq2-question3 UbuntuLight-14"
                >
                  {props.faq4Question ?? (
                    <Fragment>
                      <span className="pricing-plans-text229">
                        Religious &amp; Cultural Events | Exhibitions &amp;
                        Trade Shows.
                      </span>
                    </Fragment>
                  )}
                </h3>
                <div className="pricing-plans-icons-container4">
                  {!faq4Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="pricing-plans-icon22"
                      >
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq4Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="pricing-plans-icon24"
                      >
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq4Visible && (
                <div className="pricing-plans-container225">
                  <p className="pricing-plans-text217 p">
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
          .pricing-plans-faq8 {
            width: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            transform: scale(0.9);
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-shrink: 0;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .pricing-plans-max-width {
            gap: 4px;
            align-self: center;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            backdrop-filter: blur(2px);
            background-color: rgba(0, 0, 0, 0.4);
          }
          .pricing-plans-container100 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: flex-start;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text100 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.2em;
            font-style: normal;
            font-weight: 400;
            line-height: 1.5;
            border-color: var(--dl-color-gray-black);
            border-width: 0.5px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-buttonradius);
            padding-right: var(--dl-space-space-unit);
          }
          .pricing-plans-list {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .pricing-plans-image {
            width: 100px;
            display: none;
            object-fit: cover;
          }
          .pricing-plans-faq1 {
            width: 100%;
            display: none;
            transform: scale(0.99);
            align-items: flex-start;
            border-color: var(--dl-color-primary-logo-color-2);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.4);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .pricing-plans-trigger1 {
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-primary-logo-color-1);
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
            background-color: rgba(0, 0, 0, 0.25);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-top-left-radius: var(--dl-radius-radius-radius10);
            border-top-right-radius: var(--dl-radius-radius-radius10);
          }
          .pricing-plans-container101 {
            width: 100%;
            display: flex;
            max-width: 25%;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .pricing-plans-faq1-question10 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container102 {
            width: 100%;
            display: flex;
            max-width: 25%;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .pricing-plans-faq1-question11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container103 {
            width: 100%;
            display: flex;
            max-width: 25%;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .pricing-plans-faq1-question12 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container104 {
            width: 100%;
            display: flex;
            max-width: 25%;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .pricing-plans-faq1-question13 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-icons-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-icon10 {
            fill: var(--dl-color-primary-logo-color-2);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .pricing-plans-icon12 {
            fill: var(--dl-color-primary-logo-color-1);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .pricing-plans-container107 {
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
          .pricing-plans-container108 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-container109 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text101 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container110 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text104 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container111 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text105 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container112 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text106 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container113 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-container114 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text107 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container115 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text110 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container116 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text111 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container117 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text112 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container118 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-container119 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text113 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container120 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text116 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container121 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text117 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container122 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text118 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container123 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-container124 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text119 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container125 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text122 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container126 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text123 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container127 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text124 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container128 {
            width: 100%;
            display: none;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-container129 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-container130 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-container131 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-container132 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-container133 {
            width: 100%;
            display: none;
            padding: var(--dl-space-space-halfunit);
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
            background-color: rgba(0, 0, 0, 0.41);
          }
          .pricing-plans-container134 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-container135 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: flex-end;
          }
          .pricing-plans-text125 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container136 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: flex-end;
          }
          .pricing-plans-text126 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-text127 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container137 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: flex-end;
          }
          .pricing-plans-text128 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container138 {
            width: 100%;
            display: none;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-container139 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text131 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container140 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text132 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container141 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text133 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container142 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text134 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container143 {
            width: 100%;
            display: none;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-container144 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text137 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container145 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text138 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container146 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text139 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container147 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text140 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container148 {
            width: 100%;
            display: none;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-container149 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text143 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container150 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text144 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container151 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text145 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container152 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text146 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container153 {
            width: 100%;
            display: none;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-container154 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text149 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container155 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text150 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container156 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text151 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container157 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text152 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container158 {
            width: 100%;
            display: none;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-container159 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text155 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container160 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text156 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container161 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text157 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container162 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-text158 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-faq2 {
            width: 100%;
            display: flex;
            transform: scale(0.99);
            align-items: flex-start;
            border-color: var(--dl-color-primary-logo-color-5);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.2);
          }
          .pricing-plans-trigger2 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
            background-color: rgba(0, 0, 0, 0.25);
          }
          .pricing-plans-faq2-question1 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            display: none;
          }
          .pricing-plans-container163 {
            width: 100%;
            display: flex;
            max-width: 25%;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .pricing-plans-faq1-question14 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 400;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container164 {
            width: 100%;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .pricing-plans-faq1-question15 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container165 {
            width: 100%;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .pricing-plans-faq1-question16 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container166 {
            width: 100%;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .pricing-plans-faq1-question17 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-icons-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-icon14 {
            fill: var(--dl-color-primary-logo-color-2);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .pricing-plans-icon16 {
            fill: var(--dl-color-primary-logo-color-1);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .pricing-plans-container169 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-container170 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .pricing-plans-container171 {
            flex: 0 0 auto;
            width: 100%;
            height: 280px;
            display: flex;
            max-width: 25%;
            flex-direction: column;
          }
          .pricing-plans-container172 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: center;
            background-color: rgba(253, 253, 253, 0.08);
            border-top-width: 0.5px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0.5px;
            border-top-left-radius: var(--dl-radius-radius-radius10);
            border-top-right-radius: var(--dl-radius-radius-radius10);
          }
          .pricing-plans-text161 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container173 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            border-color: rgba(0, 0, 0, 0.3);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(253, 253, 253, 0.08);
            border-top-width: 0.5px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0.5px;
          }
          .pricing-plans-text162 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container174 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.3);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(253, 253, 253, 0.08);
            border-top-width: 0.5px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0.5px;
          }
          .pricing-plans-text163 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container175 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.3);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(253, 253, 253, 0.08);
            border-top-width: 0.5px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0.5px;
          }
          .pricing-plans-text164 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container176 {
            flex: 0 0 auto;
            width: 100%;
            height: 280px;
            display: flex;
            max-width: 25%;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing-plans-container177 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.6);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-text165 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container178 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.6);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-text166 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container179 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.6);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-text167 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container180 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.6);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-text168 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container181 {
            flex: 0 0 auto;
            width: 100%;
            height: 280px;
            display: flex;
            max-width: 25%;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing-plans-container182 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.6);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-text169 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container183 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.6);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-text170 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container184 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.6);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-text171 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container185 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.6);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-text172 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container186 {
            flex: 0 0 auto;
            width: 100%;
            height: 280px;
            display: flex;
            max-width: 25%;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing-plans-container187 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.6);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-text173 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container188 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.6);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-text174 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container189 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.6);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-text175 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container190 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.6);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-text176 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-faq3 {
            width: 100%;
            display: flex;
            transform: scale(0.99);
            align-items: flex-start;
            border-color: var(--dl-color-primary-logo-color-5);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.2);
            border-top-left-radius: 0;
            border-top-right-radius: 0;
          }
          .pricing-plans-trigger3 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: row;
            justify-content: space-between;
            background-color: rgba(0, 0, 0, 0.25);
            border-top-left-radius: var(--dl-radius-radius-radius10);
            border-top-right-radius: var(--dl-radius-radius-radius10);
          }
          .pricing-plans-container191 {
            width: 100%;
            height: 40px;
            display: flex;
            max-width: 25%;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .pricing-plans-faq1-question18 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 400;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container192 {
            width: 100%;
            height: 40px;
            display: flex;
            max-width: 25%;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .pricing-plans-faq1-question19 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 400;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container193 {
            width: 100%;
            height: 40px;
            display: flex;
            max-width: 25%;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .pricing-plans-faq1-question20 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 400;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container194 {
            width: 100%;
            height: 40px;
            display: flex;
            max-width: 25%;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .pricing-plans-faq1-question21 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 400;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-faq2-question2 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            display: none;
            font-style: normal;
          }
          .pricing-plans-icons-container3 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-icon18 {
            fill: var(--dl-color-primary-logo-color-2);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .pricing-plans-icon20 {
            fill: var(--dl-color-primary-logo-color-1);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .pricing-plans-container197 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-text177 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            display: none;
          }
          .pricing-plans-container198 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .pricing-plans-container199 {
            flex: 0 0 auto;
            width: 100%;
            height: 350px;
            display: flex;
            max-width: 25%;
            flex-direction: column;
          }
          .pricing-plans-container200 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.3);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(253, 253, 253, 0.08);
            border-top-width: 0.5px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0.5px;
          }
          .pricing-plans-text182 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container201 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            border-color: rgba(0, 0, 0, 0.3);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(253, 253, 253, 0.08);
            border-top-width: 0.5px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0.5px;
          }
          .pricing-plans-text183 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container202 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.3);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(253, 253, 253, 0.08);
            border-top-width: 0.5px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0.5px;
          }
          .pricing-plans-text184 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container203 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.3);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(253, 253, 253, 0.08);
            border-top-width: 0.5px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0.5px;
          }
          .pricing-plans-text185 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container204 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: center;
            background-color: rgba(253, 253, 253, 0.08);
            border-top-width: 0.5px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0.5px;
            border-bottom-left-radius: var(--dl-radius-radius-radius10);
            border-bottom-right-radius: var(--dl-radius-radius-radius10);
          }
          .pricing-plans-text186 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container205 {
            flex: 0 0 auto;
            width: 100%;
            height: 350px;
            display: flex;
            max-width: 25%;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing-plans-container206 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.59);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-text187 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container207 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.59);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-text188 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container208 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.59);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-text189 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container209 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.59);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-text193 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container210 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.59);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-text194 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container211 {
            flex: 0 0 auto;
            width: 100%;
            height: 350px;
            display: flex;
            max-width: 25%;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing-plans-container212 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.59);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-text195 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container213 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.59);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-text199 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container214 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.59);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-text200 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container215 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.59);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-text204 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container216 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.59);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-text205 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container217 {
            flex: 0 0 auto;
            width: 100%;
            height: 350px;
            display: flex;
            max-width: 25%;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing-plans-container218 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.59);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-text206 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container219 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.59);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-text210 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container220 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.59);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-text211 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container221 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.59);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-text215 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-container222 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-height: 70px;
            align-items: center;
            border-color: rgba(0, 0, 0, 0.59);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-text216 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-faq4 {
            width: 100%;
            display: none;
            transform: scale(0.99);
            transition: 0.4s;
            align-items: flex-start;
            border-color: var(--dl-color-primary-logo-color-2);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.42);
          }
          .pricing-plans-faq4:hover {
            transform: scale(1);
            box-shadow: 1px 1px 25px 0px rgba(0, 0, 0, 0.5);
          }
          .pricing-plans-trigger4 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-faq2-question3 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-style: normal;
          }
          .pricing-plans-icons-container4 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-icon22 {
            fill: var(--dl-color-primary-logo-color-2);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .pricing-plans-icon24 {
            fill: var(--dl-color-primary-logo-color-1);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .pricing-plans-container225 {
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
          .pricing-plans-text217 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
          }
          .pricing-plans-text222 {
            display: inline-block;
          }
          .pricing-plans-text223 {
            display: inline-block;
          }
          .pricing-plans-text224 {
            display: inline-block;
          }
          .pricing-plans-text225 {
            display: inline-block;
          }
          .pricing-plans-text226 {
            display: inline-block;
          }
          .pricing-plans-text229 {
            display: inline-block;
          }
          .pricing-plans-text230 {
            display: inline-block;
          }
          .pricing-plans-text231 {
            display: inline-block;
          }
          .pricing-plans-text232 {
            display: inline-block;
          }
          .pricing-plans-text233 {
            display: inline-block;
          }
          .pricing-plans-text234 {
            display: inline-block;
          }
          .pricing-plans-text235 {
            display: inline-block;
          }
          .pricing-plans-text236 {
            display: inline-block;
          }
          .pricing-plans-text237 {
            display: inline-block;
          }
          .pricing-plans-text238 {
            display: inline-block;
          }
          .pricing-plans-text239 {
            display: inline-block;
          }
          .pricing-plansroot-class-name {
            width: 100%;
            display: none;
            align-self: stretch;
          }
          .pricing-plansroot-class-name1 {
            min-height: 350px;
          }
          @media (max-width: 1200px) {
            .pricing-plans-max-width {
              align-self: center;
            }
          }
          @media (max-width: 991px) {
            .pricing-plans-faq8 {
              padding: var(--dl-space-space-unit);
              background-size: cover;
              background-position: center;
            }
            .pricing-plans-max-width {
              flex-direction: column;
            }
            .pricing-plans-list {
              width: 100%;
              max-width: 100%;
            }
            .pricing-plans-text169 {
              text-align: center;
            }
            .pricing-plans-container183 {
              align-self: center;
            }
            .pricing-plans-text170 {
              text-align: center;
            }
            .pricing-plans-text171 {
              text-align: center;
            }
            .pricing-plans-container186 {
              align-items: center;
            }
            .pricing-plans-text173 {
              text-align: center;
            }
            .pricing-plans-text195 {
              text-align: center;
            }
            .pricing-plans-container213 {
              align-self: center;
            }
            .pricing-plans-text199 {
              text-align: center;
            }
            .pricing-plans-text200 {
              text-align: center;
            }
            .pricing-plans-container217 {
              align-items: center;
            }
            .pricing-plans-text206 {
              text-align: center;
            }
          }
          @media (max-width: 599px) {
            .pricing-plans-faq8 {
              display: none;
              padding: var(--dl-space-space-halfunit);
            }
          }
          @media (max-width: 479px) {
            .pricing-plans-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

PricingPlans.defaultProps = {
  faq1Question1: undefined,
  faq3Question: undefined,
  faq2Question: undefined,
  faq1Question2: undefined,
  faq1Question213: undefined,
  faq4Question: undefined,
  faq1Question112: undefined,
  rootClassName: '',
  heading: undefined,
  faq1Question: undefined,
  imageSrc1: '/images/marigold-logo1.svg',
  faq1Question1111: undefined,
  imageAlt1: 'image',
  faq1Question12: undefined,
  faq1Question111: undefined,
  faq1Question212: undefined,
  faq1Question21: undefined,
  faq1Question211: undefined,
  faq1Question11: undefined,
}

PricingPlans.propTypes = {
  faq1Question1: PropTypes.element,
  faq3Question: PropTypes.element,
  faq2Question: PropTypes.element,
  faq1Question2: PropTypes.element,
  faq1Question213: PropTypes.element,
  faq4Question: PropTypes.element,
  faq1Question112: PropTypes.element,
  rootClassName: PropTypes.string,
  heading: PropTypes.element,
  faq1Question: PropTypes.element,
  imageSrc1: PropTypes.string,
  faq1Question1111: PropTypes.element,
  imageAlt1: PropTypes.string,
  faq1Question12: PropTypes.element,
  faq1Question111: PropTypes.element,
  faq1Question212: PropTypes.element,
  faq1Question21: PropTypes.element,
  faq1Question211: PropTypes.element,
  faq1Question11: PropTypes.element,
}

export default PricingPlans
