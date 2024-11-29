import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import BrandLogo from './brand-logo'

const PricingPlans1 = (props) => {
  const [faq2Visible, setFaq2Visible] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq4Visible, setFaq4Visible] = useState(false)
  return (
    <>
      <section
        id="about-marigold-1"
        className={`pricing-plans-1faq8 thq-section-padding ${props.rootClassName} `}
      >
        <div className="pricing-plans-1-max-width thq-flex-row thq-section-max-width">
          <div className="pricing-plans-1-container100">
            <h1 className="pricing-plans-1-text100">
              {props.heading ?? (
                <Fragment>
                  <span className="pricing-plans-1-text261">
                    Our Plans &amp; Structures
                  </span>
                </Fragment>
              )}
            </h1>
          </div>
          <div className="pricing-plans-1-list UbuntuLight-14 thq-flex-column">
            <img
              id="MariGold Celebration - Hingna, Nagpur"
              alt={props.imageAlt1}
              src={props.imageSrc1}
              className="pricing-plans-1-image"
            />
            <BrandLogo rootClassName="brand-logoroot-class-name8"></BrandLogo>
            <div className="pricing-plans-1-faq1">
              <div className="pricing-plans-1-trigger1">
                <div className="pricing-plans-1-container101">
                  <label
                    id="Base Pax | People"
                    className="pricing-plans-1-faq1-question10"
                  >
                    {props.faq1Question ?? (
                      <Fragment>
                        <span className="pricing-plans-1-text262">
                          Base Pax | People
                        </span>
                      </Fragment>
                    )}
                  </label>
                </div>
                <div className="pricing-plans-1-container102">
                  <label
                    id="Plan A 650 Only"
                    className="pricing-plans-1-faq1-question11"
                  >
                    {props.faq1Question1 ?? (
                      <Fragment>
                        <span className="pricing-plans-1-text252">
                          Plan A 650 Only
                        </span>
                      </Fragment>
                    )}
                  </label>
                </div>
                <div className="pricing-plans-1-container103">
                  <label
                    id="Plan A 700 Only"
                    className="pricing-plans-1-faq1-question12"
                  >
                    {props.faq1Question11 ?? (
                      <Fragment>
                        <span className="pricing-plans-1-text269">
                          Plan A 700 Only
                        </span>
                      </Fragment>
                    )}
                  </label>
                </div>
                <div className="pricing-plans-1-container104">
                  <label
                    id="Plan A 750 Only"
                    className="pricing-plans-1-faq1-question13"
                  >
                    {props.faq1Question111 ?? (
                      <Fragment>
                        <span className="pricing-plans-1-text265">
                          Plan A 750 Only
                        </span>
                      </Fragment>
                    )}
                  </label>
                </div>
                <div className="pricing-plans-1-icons-container1">
                  <div>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="pricing-plans-1-icon10"
                    >
                      <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                    </svg>
                  </div>
                  <div>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="pricing-plans-1-icon12"
                    >
                      <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="pricing-plans-1-container107">
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
                    className="pricing-plans-1-container108"
                  >
                    <div className="pricing-plans-1-container109">
                      <p className="pricing-plans-1-text101">
                        <span>100 Pax | People</span>
                        <br></br>
                      </p>
                    </div>
                    <div className="pricing-plans-1-container110">
                      <p className="pricing-plans-1-text104">
                        ₹      65,000 /- Only
                      </p>
                    </div>
                    <div className="pricing-plans-1-container111">
                      <p className="pricing-plans-1-text105">
                        ₹     70,000 /- Only
                      </p>
                    </div>
                    <div className="pricing-plans-1-container112">
                      <p className="pricing-plans-1-text106">
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
                    className="pricing-plans-1-container113"
                  >
                    <div className="pricing-plans-1-container114">
                      <p className="pricing-plans-1-text107">
                        <span>250 Pax | People</span>
                        <br></br>
                      </p>
                    </div>
                    <div className="pricing-plans-1-container115">
                      <p className="pricing-plans-1-text110">
                        ₹  1,62,500 /- Only
                      </p>
                    </div>
                    <div className="pricing-plans-1-container116">
                      <p className="pricing-plans-1-text111">
                        ₹  1,75,500 /- Only
                      </p>
                    </div>
                    <div className="pricing-plans-1-container117">
                      <p className="pricing-plans-1-text112">
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
                    className="pricing-plans-1-container118"
                  >
                    <div className="pricing-plans-1-container119">
                      <p className="pricing-plans-1-text113">
                        <span>400 Pax | People</span>
                        <br></br>
                      </p>
                    </div>
                    <div className="pricing-plans-1-container120">
                      <p className="pricing-plans-1-text116">
                        ₹  2,60,000 /- Only
                      </p>
                    </div>
                    <div className="pricing-plans-1-container121">
                      <p className="pricing-plans-1-text117">
                        ₹  2,80,500 /- Only
                      </p>
                    </div>
                    <div className="pricing-plans-1-container122">
                      <p className="pricing-plans-1-text118">
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
                    className="pricing-plans-1-container123"
                  >
                    <div className="pricing-plans-1-container124">
                      <p className="pricing-plans-1-text119">
                        <span>700 Pax | People</span>
                        <br></br>
                      </p>
                    </div>
                    <div className="pricing-plans-1-container125">
                      <p className="pricing-plans-1-text122">
                        ₹  4,55,000 /- Only
                      </p>
                    </div>
                    <div className="pricing-plans-1-container126">
                      <p className="pricing-plans-1-text123">
                        ₹  4,90,000 /- Only
                      </p>
                    </div>
                    <div className="pricing-plans-1-container127">
                      <p className="pricing-plans-1-text124">
                        ₹  5,25,000 /- Only
                      </p>
                    </div>
                  </div>
                </animate-on-reveal>
                <div className="pricing-plans-1-container128">
                  <div className="pricing-plans-1-container129"></div>
                  <div className="pricing-plans-1-container130"></div>
                  <div className="pricing-plans-1-container131"></div>
                  <div className="pricing-plans-1-container132"></div>
                </div>
                <div className="pricing-plans-1-container133">
                  <div className="pricing-plans-1-container134"></div>
                  <div className="pricing-plans-1-container135">
                    <p className="pricing-plans-1-text125">
                      Classsic Menu For Plan A
                    </p>
                  </div>
                  <div className="pricing-plans-1-container136">
                    <p className="pricing-plans-1-text126">
                      Deluxe Menu For 100 Pax - 250 Pax
                    </p>
                    <p className="pricing-plans-1-text127">
                      Deluxe Menu For 100 Pax - 250 Pax
                    </p>
                  </div>
                  <div className="pricing-plans-1-container137">
                    <p className="pricing-plans-1-text128">
                      <span>Royal &amp; Customise Menu </span>
                      <span>For Plan C</span>
                    </p>
                  </div>
                </div>
                <div className="pricing-plans-1-container138">
                  <div className="pricing-plans-1-container139">
                    <p className="pricing-plans-1-text131">Fine Catering</p>
                  </div>
                  <div className="pricing-plans-1-container140">
                    <p className="pricing-plans-1-text132">
                      Classsic Menu For Plan A
                    </p>
                  </div>
                  <div className="pricing-plans-1-container141">
                    <p className="pricing-plans-1-text133">
                      Deluxe Menu For 100 Pax - 250 Pax
                    </p>
                  </div>
                  <div className="pricing-plans-1-container142">
                    <p className="pricing-plans-1-text134">
                      <span>Royal &amp; Customise Menu </span>
                      <span>For Plan C</span>
                    </p>
                  </div>
                </div>
                <div className="pricing-plans-1-container143">
                  <div className="pricing-plans-1-container144">
                    <p className="pricing-plans-1-text137">Decor</p>
                  </div>
                  <div className="pricing-plans-1-container145">
                    <p className="pricing-plans-1-text138">
                      Classsic Menu For Plan A
                    </p>
                  </div>
                  <div className="pricing-plans-1-container146">
                    <p className="pricing-plans-1-text139">
                      Deluxe Menu For 100 Pax - 250 Pax
                    </p>
                  </div>
                  <div className="pricing-plans-1-container147">
                    <p className="pricing-plans-1-text140">
                      <span>Royal &amp; Customise Menu </span>
                      <span>For Plan C</span>
                    </p>
                  </div>
                </div>
                <div className="pricing-plans-1-container148">
                  <div className="pricing-plans-1-container149">
                    <p className="pricing-plans-1-text143">Hospitality</p>
                  </div>
                  <div className="pricing-plans-1-container150">
                    <p className="pricing-plans-1-text144">
                      Classsic Menu For Plan A
                    </p>
                  </div>
                  <div className="pricing-plans-1-container151">
                    <p className="pricing-plans-1-text145">
                      Deluxe Menu For 100 Pax - 250 Pax
                    </p>
                  </div>
                  <div className="pricing-plans-1-container152">
                    <p className="pricing-plans-1-text146">
                      <span>Royal &amp; Customise Menu </span>
                      <span>For Plan C</span>
                    </p>
                  </div>
                </div>
                <div className="pricing-plans-1-container153">
                  <div className="pricing-plans-1-container154">
                    <p className="pricing-plans-1-text149">Entertainment</p>
                  </div>
                  <div className="pricing-plans-1-container155">
                    <p className="pricing-plans-1-text150">
                      Classsic Menu For Plan A
                    </p>
                  </div>
                  <div className="pricing-plans-1-container156">
                    <p className="pricing-plans-1-text151">
                      Deluxe Menu For 100 Pax - 250 Pax
                    </p>
                  </div>
                  <div className="pricing-plans-1-container157">
                    <p className="pricing-plans-1-text152">
                      <span>Royal &amp; Customise Menu </span>
                      <span>For Plan C</span>
                    </p>
                  </div>
                </div>
                <div className="pricing-plans-1-container158">
                  <div className="pricing-plans-1-container159">
                    <p className="pricing-plans-1-text155">
                      Valet Parking Tickets
                    </p>
                  </div>
                  <div className="pricing-plans-1-container160">
                    <p className="pricing-plans-1-text156">
                      Classsic Menu For Plan A
                    </p>
                  </div>
                  <div className="pricing-plans-1-container161">
                    <p className="pricing-plans-1-text157">
                      Deluxe Menu For 100 Pax - 250 Pax
                    </p>
                  </div>
                  <div className="pricing-plans-1-container162">
                    <p className="pricing-plans-1-text158">
                      <span>Royal &amp; Customise Menu </span>
                      <span>For Plan C</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pricing-plans-1-faq2">
              <div
                onClick={() => setFaq2Visible(!faq2Visible)}
                className="pricing-plans-1-trigger2"
              >
                <h3
                  id="Birthday Parties &amp; Anniversaries | Social Gatherings &amp; Family Events."
                  className="pricing-plans-1-faq2-question1 UbuntuLight-14"
                >
                  {props.faq2Question ?? (
                    <Fragment>
                      <span className="pricing-plans-1-text254">
                        Birthday Parties &amp; Anniversaries | Social Gatherings
                        &amp; Family Events.
                      </span>
                    </Fragment>
                  )}
                </h3>
                <div className="pricing-plans-1-container163">
                  <label className="pricing-plans-1-faq1-question14">
                    {props.faq1Question2 ?? (
                      <Fragment>
                        <span className="pricing-plans-1-text255">
                          Base Pax | People
                        </span>
                      </Fragment>
                    )}
                  </label>
                </div>
                <div className="pricing-plans-1-container164">
                  <label className="pricing-plans-1-faq1-question15">
                    {props.faq1Question12 ?? (
                      <Fragment>
                        <span className="pricing-plans-1-text264">
                          Plan A 650 Only
                        </span>
                      </Fragment>
                    )}
                  </label>
                </div>
                <div className="pricing-plans-1-container165">
                  <label
                    id="Weddings &amp; Receptions | Engagement Ceremonies &amp; Pre-Wedding Functions."
                    className="pricing-plans-1-faq1-question16"
                  >
                    {props.faq1Question112 ?? (
                      <Fragment>
                        <span className="pricing-plans-1-text260">
                          Plan A 700 Only
                        </span>
                      </Fragment>
                    )}
                  </label>
                </div>
                <div className="pricing-plans-1-container166">
                  <label
                    id="Weddings &amp; Receptions | Engagement Ceremonies &amp; Pre-Wedding Functions."
                    className="pricing-plans-1-faq1-question17"
                  >
                    {props.faq1Question1111 ?? (
                      <Fragment>
                        <span className="pricing-plans-1-text263">
                          Plan A 750 Only
                        </span>
                      </Fragment>
                    )}
                  </label>
                </div>
                <div className="pricing-plans-1-icons-container2">
                  {!faq2Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="pricing-plans-1-icon14"
                      >
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq2Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="pricing-plans-1-icon16"
                      >
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq2Visible === true && (
                <div className="pricing-plans-1-container169">
                  <div className="pricing-plans-1-container170">
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
                        className="pricing-plans-1-container171"
                      >
                        <div className="pricing-plans-1-container172">
                          <p className="pricing-plans-1-text161">
                            100 Pax | People
                          </p>
                        </div>
                        <div className="pricing-plans-1-container173">
                          <p className="pricing-plans-1-text162">
                            250 Pax | People
                          </p>
                        </div>
                        <div className="pricing-plans-1-container174">
                          <p className="pricing-plans-1-text163">
                            400 Pax | People
                          </p>
                        </div>
                        <div className="pricing-plans-1-container175">
                          <p className="pricing-plans-1-text164">
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
                        className="pricing-plans-1-container176"
                      >
                        <div className="pricing-plans-1-container177">
                          <p className="pricing-plans-1-text165">
                            ₹      65,000 /- Only
                          </p>
                        </div>
                        <div className="pricing-plans-1-container178">
                          <p className="pricing-plans-1-text166">
                            ₹  1,62,500 /- Only
                          </p>
                        </div>
                        <div className="pricing-plans-1-container179">
                          <p className="pricing-plans-1-text167">
                            ₹  2,60,000 /- Only
                          </p>
                        </div>
                        <div className="pricing-plans-1-container180">
                          <p className="pricing-plans-1-text168">
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
                        className="pricing-plans-1-container181"
                      >
                        <div className="pricing-plans-1-container182">
                          <p className="pricing-plans-1-text169">
                            ₹     70,000 /- Only
                          </p>
                        </div>
                        <div className="pricing-plans-1-container183">
                          <p className="pricing-plans-1-text170">
                            ₹  1,75,500 /- Only
                          </p>
                        </div>
                        <div className="pricing-plans-1-container184">
                          <p className="pricing-plans-1-text171">
                            ₹  2,80,500 /- Only
                          </p>
                        </div>
                        <div className="pricing-plans-1-container185">
                          <p className="pricing-plans-1-text172">
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
                        className="pricing-plans-1-container186"
                      >
                        <div className="pricing-plans-1-container187">
                          <p className="pricing-plans-1-text173">
                            ₹     70,000 /- Only
                          </p>
                        </div>
                        <div className="pricing-plans-1-container188">
                          <p className="pricing-plans-1-text174">
                            ₹  1,87,000 /- Only
                          </p>
                        </div>
                        <div className="pricing-plans-1-container189">
                          <p className="pricing-plans-1-text175">
                            ₹  3,00,000 /- Only
                          </p>
                        </div>
                        <div className="pricing-plans-1-container190">
                          <p className="pricing-plans-1-text176">
                            ₹  5,25,000 /- Only
                          </p>
                        </div>
                      </div>
                    </animate-on-reveal>
                  </div>
                </div>
              )}
            </div>
            <div className="pricing-plans-1-faq3">
              <div
                onClick={() => setFaq3Visible(!faq3Visible)}
                className="pricing-plans-1-trigger3"
              >
                <div className="pricing-plans-1-container191">
                  <label className="pricing-plans-1-faq1-question18">
                    {props.faq1Question21 ?? (
                      <Fragment>
                        <span className="pricing-plans-1-text267">
                          Services &amp; Features
                        </span>
                      </Fragment>
                    )}
                  </label>
                </div>
                <div className="pricing-plans-1-container192">
                  <label className="pricing-plans-1-faq1-question19">
                    {props.faq1Question213 ?? (
                      <Fragment>
                        <span className="pricing-plans-1-text256">
                          <span>For Plan A</span>
                          <br></br>
                        </span>
                      </Fragment>
                    )}
                  </label>
                </div>
                <div className="pricing-plans-1-container193">
                  <label className="pricing-plans-1-faq1-question20">
                    {props.faq1Question212 ?? (
                      <Fragment>
                        <span className="pricing-plans-1-text266">
                          For Plan B
                        </span>
                      </Fragment>
                    )}
                  </label>
                </div>
                <div className="pricing-plans-1-container194">
                  <label className="pricing-plans-1-faq1-question21">
                    {props.faq1Question211 ?? (
                      <Fragment>
                        <span className="pricing-plans-1-text268">
                          For Plan C
                        </span>
                      </Fragment>
                    )}
                  </label>
                </div>
                <h3
                  id="Corporate Events &amp; Conferences | Award Ceremonies &amp; Gala Dinners."
                  className="pricing-plans-1-faq2-question2 UbuntuLight-14"
                >
                  {props.faq3Question ?? (
                    <Fragment>
                      <span className="pricing-plans-1-text253">
                        Corporate Events &amp; Conferences | Award Ceremonies
                        &amp; Gala Dinners.
                      </span>
                    </Fragment>
                  )}
                </h3>
                <div className="pricing-plans-1-icons-container3">
                  {!faq3Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="pricing-plans-1-icon18"
                      >
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq3Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="pricing-plans-1-icon20"
                      >
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq3Visible && (
                <div className="pricing-plans-1-container197">
                  <p className="pricing-plans-1-text177 p">
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
                  <div className="pricing-plans-1-container198">
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
                        className="pricing-plans-1-container199"
                      >
                        <div className="pricing-plans-1-container200">
                          <p className="pricing-plans-1-text182">
                            Fine Catering
                          </p>
                        </div>
                        <div className="pricing-plans-1-container201">
                          <p className="pricing-plans-1-text183">Decor</p>
                        </div>
                        <div className="pricing-plans-1-container202">
                          <p className="pricing-plans-1-text184">Hospitality</p>
                        </div>
                        <div className="pricing-plans-1-container203">
                          <p className="pricing-plans-1-text185">
                            Entertainment
                          </p>
                        </div>
                        <div className="pricing-plans-1-container204">
                          <p className="pricing-plans-1-text186">
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
                        className="pricing-plans-1-container205"
                      >
                        <div className="pricing-plans-1-container206">
                          <p className="pricing-plans-1-text187">
                            Starters, Main Course
                          </p>
                        </div>
                        <div className="pricing-plans-1-container207">
                          <p className="pricing-plans-1-text188">
                            Regular Decor
                          </p>
                        </div>
                        <div className="pricing-plans-1-container208">
                          <p className="pricing-plans-1-text189">
                            <span>2 Luxury Rooms Only</span>
                            <br></br>
                            <span>Dedicated Event Pilot, 15 Matts</span>
                          </p>
                        </div>
                        <div className="pricing-plans-1-container209">
                          <p className="pricing-plans-1-text193">Audio Setup</p>
                        </div>
                        <div className="pricing-plans-1-container210">
                          <p className="pricing-plans-1-text194">
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
                        className="pricing-plans-1-container211"
                      >
                        <div className="pricing-plans-1-container212">
                          <p className="pricing-plans-1-text195">
                            <span>Wel-Come Drinks, Starters</span>
                            <br></br>
                            <span>Main Course, Desserts</span>
                          </p>
                        </div>
                        <div className="pricing-plans-1-container213">
                          <p className="pricing-plans-1-text199">
                            Customise Theme Decor, Chandeliers etc
                          </p>
                        </div>
                        <div className="pricing-plans-1-container214">
                          <p className="pricing-plans-1-text200">
                            <span>3 Luxury Rooms Only</span>
                            <br></br>
                            <span>Dedicated Event Pilot</span>
                          </p>
                        </div>
                        <div className="pricing-plans-1-container215">
                          <p className="pricing-plans-1-text204">
                            Audio Setup, DJ
                          </p>
                        </div>
                        <div className="pricing-plans-1-container216">
                          <p className="pricing-plans-1-text205">
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
                        className="pricing-plans-1-container217"
                      >
                        <div className="pricing-plans-1-container218">
                          <p className="pricing-plans-1-text206">
                            <span>Wel-Come Drinks, Starters</span>
                            <br></br>
                            <span>Main Course, Desserts</span>
                          </p>
                        </div>
                        <div className="pricing-plans-1-container219">
                          <p className="pricing-plans-1-text210">
                            Customise Theme DecorChandeliers etc
                          </p>
                        </div>
                        <div className="pricing-plans-1-container220">
                          <p className="pricing-plans-1-text211">
                            <span>5 Luxury Rooms, More If Needed.</span>
                            <br></br>
                            <span>Dedicated Event Pilot</span>
                          </p>
                        </div>
                        <div className="pricing-plans-1-container221">
                          <p className="pricing-plans-1-text215">
                            Audio Setup, DJArtist ( Anchor ), Emcee
                          </p>
                        </div>
                        <div className="pricing-plans-1-container222">
                          <p className="pricing-plans-1-text216">
                            25 Parking Tickets
                          </p>
                        </div>
                      </div>
                    </animate-on-reveal>
                  </div>
                </div>
              )}
            </div>
            <div className="pricing-plans-1-faq4">
              <div
                onClick={() => setFaq4Visible(!faq4Visible)}
                className="pricing-plans-1-trigger4"
              >
                <h3
                  id="Religious &amp; Cultural Events | Exhibitions &amp; Trade Shows."
                  className="pricing-plans-1-faq2-question3 UbuntuLight-14"
                >
                  {props.faq4Question ?? (
                    <Fragment>
                      <span className="pricing-plans-1-text259">
                        Religious &amp; Cultural Events | Exhibitions &amp;
                        Trade Shows.
                      </span>
                    </Fragment>
                  )}
                </h3>
                <div className="pricing-plans-1-icons-container4">
                  {!faq4Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="pricing-plans-1-icon22"
                      >
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq4Visible && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="pricing-plans-1-icon24"
                      >
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq4Visible && (
                <div className="pricing-plans-1-container225">
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
                      className="pricing-plans-1-container226"
                    >
                      <div className="pricing-plans-1-container227">
                        <p className="pricing-plans-1-text217">Fine Catering</p>
                      </div>
                      <div className="pricing-plans-1-container228">
                        <p className="pricing-plans-1-text218">Decor</p>
                      </div>
                      <div className="pricing-plans-1-container229">
                        <p className="pricing-plans-1-text219">Hospitality</p>
                      </div>
                      <div className="pricing-plans-1-container230">
                        <p className="pricing-plans-1-text220">Entertainment</p>
                      </div>
                      <div className="pricing-plans-1-container231">
                        <p className="pricing-plans-1-text221">
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
                      className="pricing-plans-1-container232"
                    >
                      <div className="pricing-plans-1-container233">
                        <p className="pricing-plans-1-text222">
                          Starters, Main Course
                        </p>
                      </div>
                      <div className="pricing-plans-1-container234">
                        <p className="pricing-plans-1-text223">Regular Decor</p>
                      </div>
                      <div className="pricing-plans-1-container235">
                        <p className="pricing-plans-1-text224">
                          <span>2 Luxury Rooms Only</span>
                          <br></br>
                          <span>Dedicated Event Pilot, 15 Matts</span>
                        </p>
                      </div>
                      <div className="pricing-plans-1-container236">
                        <p className="pricing-plans-1-text228">Audio Setup</p>
                      </div>
                      <div className="pricing-plans-1-container237">
                        <p className="pricing-plans-1-text229">
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
                      className="pricing-plans-1-container238"
                    >
                      <div className="pricing-plans-1-container239">
                        <p className="pricing-plans-1-text230">
                          <span>Wel-Come Drinks, Starters</span>
                          <br></br>
                          <span>Main Course, Desserts</span>
                        </p>
                      </div>
                      <div className="pricing-plans-1-container240">
                        <p className="pricing-plans-1-text234">
                          Customise Theme Decor, Chandeliers etc
                        </p>
                      </div>
                      <div className="pricing-plans-1-container241">
                        <p className="pricing-plans-1-text235">
                          <span>3 Luxury Rooms Only</span>
                          <br></br>
                          <span>Dedicated Event Pilot</span>
                        </p>
                      </div>
                      <div className="pricing-plans-1-container242">
                        <p className="pricing-plans-1-text239">
                          Audio Setup, DJ
                        </p>
                      </div>
                      <div className="pricing-plans-1-container243">
                        <p className="pricing-plans-1-text240">
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
                      className="pricing-plans-1-container244"
                    >
                      <div className="pricing-plans-1-container245">
                        <p className="pricing-plans-1-text241">
                          <span>Wel-Come Drinks, Starters</span>
                          <br></br>
                          <span>Main Course, Desserts</span>
                        </p>
                      </div>
                      <div className="pricing-plans-1-container246">
                        <p className="pricing-plans-1-text245">
                          Customise Theme DecorChandeliers etc
                        </p>
                      </div>
                      <div className="pricing-plans-1-container247">
                        <p className="pricing-plans-1-text246">
                          <span>5 Luxury Rooms, More If Needed.</span>
                          <br></br>
                          <span>Dedicated Event Pilot</span>
                        </p>
                      </div>
                      <div className="pricing-plans-1-container248">
                        <p className="pricing-plans-1-text250">
                          Audio Setup, DJArtist ( Anchor ), Emcee
                        </p>
                      </div>
                      <div className="pricing-plans-1-container249">
                        <p className="pricing-plans-1-text251">
                          25 Parking Tickets
                        </p>
                      </div>
                    </div>
                  </animate-on-reveal>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .pricing-plans-1faq8 {
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
            justify-content: center;
          }
          .pricing-plans-1-max-width {
            gap: 4px;
            width: 100%;
            align-self: center;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            backdrop-filter: blur(2px);
            background-color: rgba(0, 0, 0, 0.4);
          }
          .pricing-plans-1-container100 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: flex-start;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text100 {
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
          .pricing-plans-1-list {
            gap: var(--dl-space-space-halfunit);
            width: auto;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .pricing-plans-1-image {
            width: 100px;
            display: none;
            object-fit: cover;
          }
          .pricing-plans-1-faq1 {
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
          .pricing-plans-1-trigger1 {
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
          .pricing-plans-1-container101 {
            width: 100%;
            display: flex;
            max-width: 25%;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .pricing-plans-1-faq1-question10 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-1-container102 {
            width: 100%;
            display: flex;
            max-width: 25%;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .pricing-plans-1-faq1-question11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-1-container103 {
            width: 100%;
            display: flex;
            max-width: 25%;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .pricing-plans-1-faq1-question12 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-1-container104 {
            width: 100%;
            display: flex;
            max-width: 25%;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .pricing-plans-1-faq1-question13 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-1-icons-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-1-icon10 {
            fill: var(--dl-color-primary-logo-color-2);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .pricing-plans-1-icon12 {
            fill: var(--dl-color-primary-logo-color-1);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .pricing-plans-1-container107 {
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
          .pricing-plans-1-container108 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-1-container109 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text101 {
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
          .pricing-plans-1-container110 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text104 {
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
          .pricing-plans-1-container111 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text105 {
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
          .pricing-plans-1-container112 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text106 {
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
          .pricing-plans-1-container113 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-1-container114 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text107 {
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
          .pricing-plans-1-container115 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text110 {
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
          .pricing-plans-1-container116 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text111 {
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
          .pricing-plans-1-container117 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text112 {
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
          .pricing-plans-1-container118 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-1-container119 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text113 {
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
          .pricing-plans-1-container120 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text116 {
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
          .pricing-plans-1-container121 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text117 {
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
          .pricing-plans-1-container122 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text118 {
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
          .pricing-plans-1-container123 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-1-container124 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text119 {
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
          .pricing-plans-1-container125 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text122 {
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
          .pricing-plans-1-container126 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text123 {
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
          .pricing-plans-1-container127 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text124 {
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
          .pricing-plans-1-container128 {
            width: 100%;
            display: none;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-1-container129 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-container130 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-container131 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-container132 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-container133 {
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
          .pricing-plans-1-container134 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-container135 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: flex-end;
          }
          .pricing-plans-1-text125 {
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
          .pricing-plans-1-container136 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: flex-end;
          }
          .pricing-plans-1-text126 {
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
          .pricing-plans-1-text127 {
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
          .pricing-plans-1-container137 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: flex-end;
          }
          .pricing-plans-1-text128 {
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
          .pricing-plans-1-container138 {
            width: 100%;
            display: none;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-1-container139 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text131 {
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
          .pricing-plans-1-container140 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text132 {
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
          .pricing-plans-1-container141 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text133 {
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
          .pricing-plans-1-container142 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text134 {
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
          .pricing-plans-1-container143 {
            width: 100%;
            display: none;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-1-container144 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text137 {
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
          .pricing-plans-1-container145 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text138 {
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
          .pricing-plans-1-container146 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text139 {
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
          .pricing-plans-1-container147 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text140 {
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
          .pricing-plans-1-container148 {
            width: 100%;
            display: none;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-1-container149 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text143 {
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
          .pricing-plans-1-container150 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text144 {
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
          .pricing-plans-1-container151 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text145 {
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
          .pricing-plans-1-container152 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text146 {
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
          .pricing-plans-1-container153 {
            width: 100%;
            display: none;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-1-container154 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text149 {
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
          .pricing-plans-1-container155 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text150 {
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
          .pricing-plans-1-container156 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text151 {
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
          .pricing-plans-1-container157 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text152 {
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
          .pricing-plans-1-container158 {
            width: 100%;
            display: none;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-1-container159 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text155 {
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
          .pricing-plans-1-container160 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text156 {
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
          .pricing-plans-1-container161 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text157 {
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
          .pricing-plans-1-container162 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-text158 {
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
          .pricing-plans-1-faq2 {
            display: flex;
            transform: scale(0.99);
            align-self: stretch;
            align-items: stretch;
            border-color: var(--dl-color-primary-logo-color-5);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.2);
          }
          .pricing-plans-1-trigger2 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
            background-color: rgba(0, 0, 0, 0.25);
          }
          .pricing-plans-1-faq2-question1 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            display: none;
          }
          .pricing-plans-1-container163 {
            width: 100%;
            display: flex;
            max-width: 25%;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .pricing-plans-1-faq1-question14 {
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
          .pricing-plans-1-container164 {
            width: 100%;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .pricing-plans-1-faq1-question15 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-1-container165 {
            width: 100%;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .pricing-plans-1-faq1-question16 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-1-container166 {
            width: 100%;
            display: flex;
            max-width: 25%;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .pricing-plans-1-faq1-question17 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-1-icons-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-1-icon14 {
            fill: var(--dl-color-primary-logo-color-2);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .pricing-plans-1-icon16 {
            fill: var(--dl-color-primary-logo-color-1);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .pricing-plans-1-container169 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-1-container170 {
            flex: 1;
            display: flex;
            align-items: center;
          }
          .pricing-plans-1-container171 {
            flex: 0 0 auto;
            display: flex;
            min-width: 25%;
            min-height: 280px;
            align-items: center;
            flex-direction: column;
          }
          .pricing-plans-1-container172 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
            min-height: 70px;
            align-items: stretch;
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
          .pricing-plans-1-text161 {
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
          .pricing-plans-1-container173 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
            min-height: 70px;
            align-items: stretch;
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
          .pricing-plans-1-text162 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
            font-size: 14px;
            align-self: stretch;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-1-container174 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
            min-height: 70px;
            align-items: stretch;
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
          .pricing-plans-1-text163 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
            font-size: 14px;
            align-self: stretch;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-1-container175 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
            min-height: 70px;
            align-items: stretch;
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
          .pricing-plans-1-text164 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
            font-size: 14px;
            align-self: stretch;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-1-container176 {
            flex: 0 0 auto;
            display: flex;
            min-width: 25%;
            min-height: 280px;
            align-items: center;
            flex-direction: column;
          }
          .pricing-plans-1-container177 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
            min-height: 70px;
            align-items: stretch;
            border-color: rgba(0, 0, 0, 0.6);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-1-text165 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
            font-size: 14px;
            align-self: stretch;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-1-container178 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
            min-height: 70px;
            align-items: stretch;
            border-color: rgba(0, 0, 0, 0.6);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-1-text166 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
            font-size: 14px;
            align-self: stretch;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-1-container179 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
            min-height: 70px;
            align-items: stretch;
            border-color: rgba(0, 0, 0, 0.6);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-1-text167 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
            font-size: 14px;
            align-self: stretch;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-1-container180 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
            min-height: 70px;
            align-items: stretch;
            border-color: rgba(0, 0, 0, 0.6);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-1-text168 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
            font-size: 14px;
            align-self: stretch;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-1-container181 {
            flex: 0 0 auto;
            display: flex;
            min-width: 25%;
            min-height: 280px;
            align-items: center;
            flex-direction: column;
          }
          .pricing-plans-1-container182 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
            align-self: center;
            min-height: 70px;
            align-items: stretch;
            border-color: rgba(0, 0, 0, 0.6);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-1-text169 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
            font-size: 14px;
            align-self: stretch;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-1-container183 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
            min-height: 70px;
            align-items: stretch;
            border-color: rgba(0, 0, 0, 0.6);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-1-text170 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
            font-size: 14px;
            align-self: stretch;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-1-container184 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
            min-height: 70px;
            align-items: stretch;
            border-color: rgba(0, 0, 0, 0.6);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-1-text171 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
            font-size: 14px;
            align-self: stretch;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-1-container185 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
            min-height: 70px;
            align-items: stretch;
            border-color: rgba(0, 0, 0, 0.6);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-1-text172 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
            font-size: 14px;
            align-self: stretch;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-1-container186 {
            flex: 0 0 auto;
            display: flex;
            min-width: 25%;
            min-height: 280px;
            align-items: center;
            flex-direction: column;
          }
          .pricing-plans-1-container187 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
            min-height: 70px;
            align-items: stretch;
            border-color: rgba(0, 0, 0, 0.6);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-1-text173 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
            font-size: 14px;
            align-self: stretch;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-1-container188 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
            min-height: 70px;
            align-items: stretch;
            border-color: rgba(0, 0, 0, 0.6);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-1-text174 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
            font-size: 14px;
            align-self: stretch;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-1-container189 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
            min-height: 70px;
            align-items: stretch;
            border-color: rgba(0, 0, 0, 0.6);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-1-text175 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
            font-size: 14px;
            align-self: stretch;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-1-container190 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
            min-height: 70px;
            align-items: stretch;
            border-color: rgba(0, 0, 0, 0.6);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0.5px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }
          .pricing-plans-1-text176 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
            font-size: 14px;
            align-self: stretch;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-1-faq3 {
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
          .pricing-plans-1-trigger3 {
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
          .pricing-plans-1-container191 {
            width: 100%;
            height: 40px;
            display: flex;
            max-width: 25%;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .pricing-plans-1-faq1-question18 {
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
          .pricing-plans-1-container192 {
            width: 100%;
            height: 40px;
            display: flex;
            max-width: 25%;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .pricing-plans-1-faq1-question19 {
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
          .pricing-plans-1-container193 {
            width: 100%;
            height: 40px;
            display: flex;
            max-width: 25%;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .pricing-plans-1-faq1-question20 {
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
          .pricing-plans-1-container194 {
            width: 100%;
            height: 40px;
            display: flex;
            max-width: 25%;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .pricing-plans-1-faq1-question21 {
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
          .pricing-plans-1-faq2-question2 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            display: none;
            font-style: normal;
          }
          .pricing-plans-1-icons-container3 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-1-icon18 {
            fill: var(--dl-color-primary-logo-color-2);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .pricing-plans-1-icon20 {
            fill: var(--dl-color-primary-logo-color-1);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .pricing-plans-1-container197 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-1-text177 {
            fill: var(--dl-color-primary-logo-color-1);
            color: var(--dl-color-primary-logo-color-1);
            display: none;
          }
          .pricing-plans-1-container198 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .pricing-plans-1-container199 {
            flex: 0 0 auto;
            width: 100%;
            height: 350px;
            display: flex;
            max-width: 25%;
            flex-direction: column;
          }
          .pricing-plans-1-container200 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text182 {
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
          .pricing-plans-1-container201 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text183 {
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
          .pricing-plans-1-container202 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text184 {
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
          .pricing-plans-1-container203 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text185 {
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
          .pricing-plans-1-container204 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text186 {
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
          .pricing-plans-1-container205 {
            flex: 0 0 auto;
            width: 100%;
            height: 350px;
            display: flex;
            max-width: 25%;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing-plans-1-container206 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text187 {
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
          .pricing-plans-1-container207 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text188 {
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
          .pricing-plans-1-container208 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text189 {
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
          .pricing-plans-1-container209 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text193 {
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
          .pricing-plans-1-container210 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text194 {
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
          .pricing-plans-1-container211 {
            flex: 0 0 auto;
            width: 100%;
            height: 350px;
            display: flex;
            max-width: 25%;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing-plans-1-container212 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text195 {
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
          .pricing-plans-1-container213 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text199 {
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
          .pricing-plans-1-container214 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text200 {
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
          .pricing-plans-1-container215 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text204 {
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
          .pricing-plans-1-container216 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text205 {
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
          .pricing-plans-1-container217 {
            flex: 0 0 auto;
            width: 100%;
            height: 350px;
            display: flex;
            max-width: 25%;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing-plans-1-container218 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text206 {
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
          .pricing-plans-1-container219 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text210 {
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
          .pricing-plans-1-container220 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text211 {
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
          .pricing-plans-1-container221 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text215 {
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
          .pricing-plans-1-container222 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text216 {
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
          .pricing-plans-1-faq4 {
            width: 100%;
            display: flex;
            transform: scale(0.99);
            transition: 0.4s;
            align-items: flex-start;
            border-color: logo-color-5 (Primary);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.42);
            border-bottom-left-radius: var(--dl-radius-radius-radius10);
            border-bottom-right-radius: var(--dl-radius-radius-radius10);
          }
          .pricing-plans-1-faq4:hover {
            transform: scale(1);
            box-shadow: 1px 1px 25px 0px rgba(0, 0, 0, 0.5);
          }
          .pricing-plans-1-trigger4 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-1-faq2-question3 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-style: normal;
          }
          .pricing-plans-1-icons-container4 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .pricing-plans-1-icon22 {
            fill: var(--dl-color-primary-logo-color-2);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .pricing-plans-1-icon24 {
            fill: var(--dl-color-primary-logo-color-1);
            width: 24px;
            height: 24px;
            border-color: var(--dl-color-primary-logo-color-3);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .pricing-plans-1-container225 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: center;
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
          .pricing-plans-1-container226 {
            flex: 0 0 auto;
            width: 25%;
            height: 350px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-container227 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
            align-self: center;
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
          .pricing-plans-1-text217 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            max-width: 100%;
            align-self: stretch;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-1-container228 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
            align-self: center;
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
          .pricing-plans-1-text218 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
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
          .pricing-plans-1-container229 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
            align-self: center;
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
          .pricing-plans-1-text219 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
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
          .pricing-plans-1-container230 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
            align-self: center;
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
          .pricing-plans-1-text220 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-1-container231 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
            align-self: center;
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
          .pricing-plans-1-text221 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-1-container232 {
            flex: 0 0 auto;
            width: 25%;
            height: 350px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-container233 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text222 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-1-container234 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text223 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
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
          .pricing-plans-1-container235 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text224 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
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
          .pricing-plans-1-container236 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text228 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
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
          .pricing-plans-1-container237 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text229 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
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
          .pricing-plans-1-container238 {
            flex: 0 0 auto;
            width: 25%;
            height: 350px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-container239 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text230 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-1-container240 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text234 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-1-container241 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text235 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .pricing-plans-1-container242 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text239 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
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
          .pricing-plans-1-container243 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text240 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
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
          .pricing-plans-1-container244 {
            flex: 0 0 auto;
            width: 25%;
            height: 350px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .pricing-plans-1-container245 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text241 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
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
          .pricing-plans-1-container246 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text245 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
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
          .pricing-plans-1-container247 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text246 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
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
          .pricing-plans-1-container248 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text250 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
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
          .pricing-plans-1-container249 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            min-width: 100%;
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
          .pricing-plans-1-text251 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
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
          .pricing-plans-1-text252 {
            display: inline-block;
          }
          .pricing-plans-1-text253 {
            display: inline-block;
          }
          .pricing-plans-1-text254 {
            display: inline-block;
          }
          .pricing-plans-1-text255 {
            display: inline-block;
          }
          .pricing-plans-1-text256 {
            display: inline-block;
          }
          .pricing-plans-1-text259 {
            display: inline-block;
          }
          .pricing-plans-1-text260 {
            display: inline-block;
          }
          .pricing-plans-1-text261 {
            display: inline-block;
          }
          .pricing-plans-1-text262 {
            display: inline-block;
          }
          .pricing-plans-1-text263 {
            display: inline-block;
          }
          .pricing-plans-1-text264 {
            display: inline-block;
          }
          .pricing-plans-1-text265 {
            display: inline-block;
          }
          .pricing-plans-1-text266 {
            display: inline-block;
          }
          .pricing-plans-1-text267 {
            display: inline-block;
          }
          .pricing-plans-1-text268 {
            display: inline-block;
          }
          .pricing-plans-1-text269 {
            display: inline-block;
          }
          .pricing-plans-1root-class-name {
            width: 100%;
            display: none;
            align-self: stretch;
          }

          @media (max-width: 1200px) {
            .pricing-plans-1-max-width {
              align-self: center;
            }
          }
          @media (max-width: 991px) {
            .pricing-plans-1faq8 {
              padding: var(--dl-space-space-unit);
              background-size: cover;
              background-position: center;
            }
            .pricing-plans-1-max-width {
              flex-direction: column;
            }
            .pricing-plans-1-list {
              width: 100%;
              max-width: 100%;
            }
            .pricing-plans-1-text169 {
              text-align: center;
            }
            .pricing-plans-1-container183 {
              align-self: center;
            }
            .pricing-plans-1-text170 {
              text-align: center;
            }
            .pricing-plans-1-text171 {
              text-align: center;
            }
            .pricing-plans-1-container186 {
              align-items: center;
            }
            .pricing-plans-1-text173 {
              text-align: center;
            }
            .pricing-plans-1-text195 {
              text-align: center;
            }
            .pricing-plans-1-container213 {
              align-self: center;
            }
            .pricing-plans-1-text199 {
              text-align: center;
            }
            .pricing-plans-1-text200 {
              text-align: center;
            }
            .pricing-plans-1-container217 {
              align-items: center;
            }
            .pricing-plans-1-text206 {
              text-align: center;
            }
            .pricing-plans-1-text230 {
              text-align: center;
            }
            .pricing-plans-1-container240 {
              align-self: center;
            }
            .pricing-plans-1-text234 {
              text-align: center;
            }
            .pricing-plans-1-text235 {
              text-align: center;
            }
            .pricing-plans-1-container244 {
              align-items: center;
            }
            .pricing-plans-1-text241 {
              text-align: center;
            }
          }
          @media (max-width: 599px) {
            .pricing-plans-1faq8 {
              display: none;
              padding: var(--dl-space-space-halfunit);
            }
          }
          @media (max-width: 479px) {
            .pricing-plans-1-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

PricingPlans1.defaultProps = {
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

PricingPlans1.propTypes = {
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

export default PricingPlans1
