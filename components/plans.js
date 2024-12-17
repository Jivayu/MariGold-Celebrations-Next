import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Pricing10 from './pricing10'

const Plans = (props) => {
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq1Visible, setFaq1Visible] = useState(true)
  const [faq5Visible, setFaq5Visible] = useState(false)
  const [faq2Visible, setFaq2Visible] = useState(false)
  return (
    <>
      <div className={`plans-faq8 thq-section-padding ${props.rootClassName} `}>
        <div className="plans-max-width thq-section-max-width">
          <div className="plans-container10 UbuntuLight-14 thq-flex-column">
            <div className="plans-section-title UbuntuLight-14 thq-flex-column">
              <h2 className="plans-text100 h2 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="plans-text238">
                      Compare Plans &amp; Pricing
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="plans-text101 thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="plans-text243">
                      Complete Transperancy  | More Coming Soon !
                    </span>
                  </Fragment>
                )}
              </p>
              <button type="button" className="plans-button1 thq-button-filled">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="plans-text242">Contact</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="plans-list UbuntuLight-14 thq-flex-column">
              <div className="plans-divider1 thq-divider-horizontal"></div>
              <div className="plans-faq1">
                <div
                  onClick={() => setFaq1Visible(!faq1Visible)}
                  className="plans-trigger1"
                >
                  <p className="plans-faq1-question1 thq-body-large">
                    {props.faq1Question ?? (
                      <Fragment>
                        <span className="plans-text246">
                          Visit &amp; Enquire MariGold Celebration For More
                          Benefits.
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <div className="plans-icons-container1">
                    {!faq1Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="plans-icon10">
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    )}
                    {faq1Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="plans-icon12">
                          <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq1Visible && (
                  <div className="plans-container13">
                    <Pricing10
                      plan1={
                        <Fragment>
                          <span className="plans-text103">Deluxe</span>
                        </Fragment>
                      }
                      plan2={
                        <Fragment>
                          <span className="plans-text104">Grand</span>
                        </Fragment>
                      }
                      plan3={
                        <Fragment>
                          <span className="plans-text105">Royal</span>
                        </Fragment>
                      }
                      count1={
                        <Fragment>
                          <span className="plans-text106">
                            ₹ 65,000 /- Only
                          </span>
                        </Fragment>
                      }
                      count2={
                        <Fragment>
                          <span className="plans-text107">
                            ₹ 70,000 /- Only
                          </span>
                        </Fragment>
                      }
                      count3={
                        <Fragment>
                          <span className="plans-text108">
                            ₹ 75,000 /- Only
                          </span>
                        </Fragment>
                      }
                      count4={
                        <Fragment>
                          <span className="plans-text109">
                            Starters, Main Course
                          </span>
                        </Fragment>
                      }
                      count5={
                        <Fragment>
                          <span className="plans-text110">
                            Wel-Come Drinks, Starters Main Course, Desserts
                          </span>
                        </Fragment>
                      }
                      count6={
                        <Fragment>
                          <span className="plans-text111">
                            Wel-Come Drinks, Starters Main Course, Desserts
                          </span>
                        </Fragment>
                      }
                      count31={
                        <Fragment>
                          <span className="plans-text112">
                            ₹ 1,62,000 /- Only
                          </span>
                        </Fragment>
                      }
                      count32={
                        <Fragment>
                          <span className="plans-text113">
                            ₹ 1,75,000 /- Only
                          </span>
                        </Fragment>
                      }
                      count33={
                        <Fragment>
                          <span className="plans-text114">
                            ₹ 1,87,000 /- Only
                          </span>
                        </Fragment>
                      }
                      count34={
                        <Fragment>
                          <span className="plans-text115">
                            ₹ 2,60,000 /- Only
                          </span>
                        </Fragment>
                      }
                      count35={
                        <Fragment>
                          <span className="plans-text116">
                            ₹ 2,80,000 /- Only
                          </span>
                        </Fragment>
                      }
                      count36={
                        <Fragment>
                          <span className="plans-text117">
                            ₹ 3,00,000 /- Only
                          </span>
                        </Fragment>
                      }
                      count37={
                        <Fragment>
                          <span className="plans-text118">
                            ₹ 4,55,000 /- Only
                          </span>
                        </Fragment>
                      }
                      count38={
                        <Fragment>
                          <span className="plans-text119">
                            ₹ 4,90,000 /- Only
                          </span>
                        </Fragment>
                      }
                      count39={
                        <Fragment>
                          <span className="plans-text120">
                            ₹ 5,25,000 /- Only
                          </span>
                        </Fragment>
                      }
                      count310={
                        <Fragment>
                          <span className="plans-text121">Unlimited</span>
                        </Fragment>
                      }
                      count311={
                        <Fragment>
                          <span className="plans-text122">Unlimited</span>
                        </Fragment>
                      }
                      count312={
                        <Fragment>
                          <span className="plans-text123">Unlimited</span>
                        </Fragment>
                      }
                      count313={
                        <Fragment>
                          <span className="plans-text124">Regular Decor</span>
                        </Fragment>
                      }
                      count314={
                        <Fragment>
                          <span className="plans-text125">
                            Customise Theme Decor, Chandeliers etc
                          </span>
                        </Fragment>
                      }
                      count315={
                        <Fragment>
                          <span className="plans-text126">
                            Customise Theme Decor Chandeliers etc
                          </span>
                        </Fragment>
                      }
                      count316={
                        <Fragment>
                          <span className="plans-text127">
                            <span>2 Luxury Rooms Only, </span>
                            <span>Dedicated Event Pilot, </span>
                            <span>15 Matts</span>
                          </span>
                        </Fragment>
                      }
                      count317={
                        <Fragment>
                          <span className="plans-text131">
                            <span>3 Luxury Rooms Only, </span>
                            <span>Dedicated Event Pilot</span>
                          </span>
                        </Fragment>
                      }
                      count318={
                        <Fragment>
                          <span className="plans-text134">
                            5 Luxury Rooms, More If Needed. Dedicated Event
                            Pilot
                          </span>
                        </Fragment>
                      }
                      count319={
                        <Fragment>
                          <span className="plans-text135">Audio Setup</span>
                        </Fragment>
                      }
                      count320={
                        <Fragment>
                          <span className="plans-text136">Audio Setup, DJ</span>
                        </Fragment>
                      }
                      count321={
                        <Fragment>
                          <span className="plans-text137">
                            Audio Setup, DJ, Artist ( Anchor ), Emcee
                          </span>
                        </Fragment>
                      }
                      count322={
                        <Fragment>
                          <span className="plans-text138">
                            15 Parking Tickets
                          </span>
                        </Fragment>
                      }
                      count323={
                        <Fragment>
                          <span className="plans-text139">
                            20 Parking Tickets
                          </span>
                        </Fragment>
                      }
                      count324={
                        <Fragment>
                          <span className="plans-text140">
                            25 Parking Tickets
                          </span>
                        </Fragment>
                      }
                      feature1={
                        <Fragment>
                          <span className="plans-text141">
                            100 Pax | People
                          </span>
                        </Fragment>
                      }
                      feature2={
                        <Fragment>
                          <span className="plans-text142">
                            250 Pax | People
                          </span>
                        </Fragment>
                      }
                      feature3={
                        <Fragment>
                          <span className="plans-text143">
                            400 Pax | People
                          </span>
                        </Fragment>
                      }
                      feature4={
                        <Fragment>
                          <span className="plans-text144">
                            700 Pax | People
                          </span>
                        </Fragment>
                      }
                      feature5={
                        <Fragment>
                          <span className="plans-text145">
                            700 Pax | People
                          </span>
                        </Fragment>
                      }
                      feature6={
                        <Fragment>
                          <span className="plans-text146">Fine Catering</span>
                        </Fragment>
                      }
                      feature7={
                        <Fragment>
                          <span className="plans-text147">Decor</span>
                        </Fragment>
                      }
                      feature8={
                        <Fragment>
                          <span className="plans-text148">Hospitality</span>
                        </Fragment>
                      }
                      feature9={
                        <Fragment>
                          <span className="plans-text149">Entertainment</span>
                        </Fragment>
                      }
                      feature10={
                        <Fragment>
                          <span className="plans-text150">
                            Valet Parking Tickets
                          </span>
                        </Fragment>
                      }
                      plan1Price={
                        <Fragment>
                          <span className="plans-text151">₹ 550 Only !</span>
                        </Fragment>
                      }
                      plan2Price={
                        <Fragment>
                          <span className="plans-text152">₹ 650 Only !</span>
                        </Fragment>
                      }
                      plan3Price={
                        <Fragment>
                          <span className="plans-text153">₹ 700 Only !</span>
                        </Fragment>
                      }
                      plan1Action={
                        <Fragment>
                          <span className="plans-text154">Get started</span>
                        </Fragment>
                      }
                      plan1Yearly={
                        <Fragment>
                          <span className="plans-text155">
                            Per Pax | People
                          </span>
                        </Fragment>
                      }
                      plan2Action={
                        <Fragment>
                          <span className="plans-text156">Get started</span>
                        </Fragment>
                      }
                      plan2Yearly={
                        <Fragment>
                          <span className="plans-text157">
                            Per Pax | People
                          </span>
                        </Fragment>
                      }
                      plan3Yearly={
                        <Fragment>
                          <span className="plans-text158">
                            Per Pax | People
                          </span>
                        </Fragment>
                      }
                      plan1Yearly1={
                        <Fragment>
                          <span className="plans-text159">
                            *Check The Menu List
                          </span>
                        </Fragment>
                      }
                      plan2Yearly1={
                        <Fragment>
                          <span className="plans-text160">
                            *Check The Menu List
                          </span>
                        </Fragment>
                      }
                      plan3Yearly1={
                        <Fragment>
                          <span className="plans-text161">
                            *Check The Menu List
                          </span>
                        </Fragment>
                      }
                      plan1Action11={
                        <Fragment>
                          <span className="plans-text162">Get started</span>
                        </Fragment>
                      }
                      featureCategory1={
                        <Fragment>
                          <span className="plans-text163">
                            Base Pax | People
                          </span>
                        </Fragment>
                      }
                      featureCategory2={
                        <Fragment>
                          <span className="plans-text164">
                            Services &amp; Features
                          </span>
                        </Fragment>
                      }
                    ></Pricing10>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
              <div className="plans-faq2">
                <div
                  onClick={() => setFaq2Visible(!faq2Visible)}
                  className="plans-trigger2"
                >
                  <p className="plans-faq2-question1 thq-body-large">
                    {props.faq2Question ?? (
                      <Fragment>
                        <span className="plans-text237">
                          What amenities are provided at Marigold Banquet Hall?
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <div className="plans-icons-container2">
                    {!faq2Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="plans-icon14">
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    )}
                    {faq2Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="plans-icon16">
                          <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq2Visible && (
                  <div className="plans-container16">
                    <span className="thq-body-small">
                      Et minima tempore et neque voluptatem eos amet officiis et
                      temporibus Quis. Et suscipit esse id nemo sunt At nihil
                      earum et consequatur fuga aut sapiente voluptate est
                      cupiditate esse non dolor cumque. Ut obcaecati recusandae
                      et beatae quae qui doloremque eligendi sit eaque labore.
                    </span>
                  </div>
                )}
              </div>
              <div className="plans-divider3 thq-divider-horizontal"></div>
              <div className="plans-faq3">
                <div
                  onClick={() => setFaq3Visible(!faq3Visible)}
                  className="plans-trigger3"
                >
                  <p className="plans-faq2-question2 thq-body-large">
                    {props.faq3Question ?? (
                      <Fragment>
                        <span className="plans-text234">
                          Does Marigold Banquet Hall offer personalized decor
                          services?
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <div className="plans-icons-container3">
                    {!faq3Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="plans-icon18">
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    )}
                    {faq3Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="plans-icon20">
                          <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq3Visible && (
                  <div className="plans-container19">
                    <span className="thq-body-small">
                      A quia temporibus aut ullam assumenda vel eius sapiente ut
                      eligendi molestias. Ex ipsum incidunt ut excepturi eaque
                      sed nulla quia qui exercitationem alias aut consequuntur
                      nihil et animi voluptas.
                    </span>
                  </div>
                )}
              </div>
              <div className="plans-divider4 thq-divider-horizontal"></div>
              <div className="plans-faq4">
                <div
                  onClick={() => setFaq4Visible(!faq4Visible)}
                  className="plans-trigger4"
                >
                  <p className="plans-faq2-question3 thq-body-large">
                    {props.faq4Question ?? (
                      <Fragment>
                        <span className="plans-text235">
                          Is there flexibility in event spaces at Marigold
                          Banquet Hall?
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <div className="plans-icons-container4">
                    {!faq4Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="plans-icon22">
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    )}
                    {faq4Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="plans-icon24">
                          <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq4Visible && (
                  <div className="plans-container22">
                    <span className="thq-body-small">
                      A quia temporibus aut ullam assumenda vel eius sapiente ut
                      eligendi molestias. Ex ipsum incidunt ut excepturi eaque
                      sed nulla quia qui exercitationem alias aut consequuntur
                      nihil et animi voluptas.
                    </span>
                  </div>
                )}
              </div>
              <div className="plans-divider5 thq-divider-horizontal"></div>
              <div className="plans-faq5">
                <div
                  onClick={() => setFaq5Visible(!faq5Visible)}
                  className="plans-trigger5"
                >
                  <p className="plans-faq1-question2 thq-body-large">
                    {props.faq5Question ?? (
                      <Fragment>
                        <span className="plans-text244">
                          How does Marigold Celebration ensure memorable
                          experiences?
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <div className="plans-icons-container5">
                    {!faq5Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="plans-icon26">
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    )}
                    {faq5Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="plans-icon28">
                          <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq5Visible && (
                  <div className="plans-container25">
                    <span className="thq-body-small">
                      Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis
                      sunt aut deleniti illum non repudiandae voluptatem. Aut
                      praesentium doloribus qui distinctio neque ut unde
                      temporibus. Cum exercitationem eveniet in omnis animi in
                      corporis nulla. Sed tempora excepturi et voluptatem modi
                      et exercitationem voluptate cum illum quisquam 33 quia
                      blanditiis eos minus consequatur.Ut neque quam qui
                      dignissimos voluptates ut voluptate totam aut consequuntur
                      quod. Ut voluptas incidunt ut fuga nostrum ut quaerat enim
                      eum earum tenetur? Est esse harum et Quis officiis et enim
                      amet.Et minima tempore et neque voluptatem eos amet
                      officiis et temporibus Quis. Et suscipit esse id nemo sunt
                      At nihil earum et consequatur fuga aut sapiente voluptate
                      est cupiditate esse non dolor cumque. Ut obcaecati
                      recusandae et beatae quae qui doloremque eligendi sit
                      eaque labore.
                    </span>
                  </div>
                )}
              </div>
              <div className="plans-divider6 thq-divider-horizontal"></div>
            </div>
          </div>
          <div className="plans-content1 UbuntuLight-14 thq-flex-column">
            <div className="plans-content2">
              <h2 className="plans-text169 h2 thq-heading-2">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="plans-text245">
                      Still have a question?
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="plans-text170 thq-body-large">
                {props.content2 ?? (
                  <Fragment>
                    <span className="plans-text239">
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <button type="button" className="thq-button-filled">
              <span>
                {props.action2 ?? (
                  <Fragment>
                    <span className="plans-text236">Email us</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <Pricing10
          plan1={
            <Fragment>
              <span className="plans-text172">Deluxe</span>
            </Fragment>
          }
          plan2={
            <Fragment>
              <span className="plans-text173">Grand</span>
            </Fragment>
          }
          plan3={
            <Fragment>
              <span className="plans-text174">Royal</span>
            </Fragment>
          }
          count1={
            <Fragment>
              <span className="plans-text175">₹ 65,000 /- Only</span>
            </Fragment>
          }
          count2={
            <Fragment>
              <span className="plans-text176">₹ 70,000 /- Only</span>
            </Fragment>
          }
          count3={
            <Fragment>
              <span className="plans-text177">₹ 75,000 /- Only</span>
            </Fragment>
          }
          count4={
            <Fragment>
              <span className="plans-text178">Starters, Main Course</span>
            </Fragment>
          }
          count5={
            <Fragment>
              <span className="plans-text179">
                Wel-Come Drinks, Starters Main Course, Desserts
              </span>
            </Fragment>
          }
          count6={
            <Fragment>
              <span className="plans-text180">
                Wel-Come Drinks, Starters Main Course, Desserts
              </span>
            </Fragment>
          }
          count31={
            <Fragment>
              <span className="plans-text181">₹ 1,62,000 /- Only</span>
            </Fragment>
          }
          count32={
            <Fragment>
              <span className="plans-text182">₹ 1,75,000 /- Only</span>
            </Fragment>
          }
          count33={
            <Fragment>
              <span className="plans-text183">₹ 1,87,000 /- Only</span>
            </Fragment>
          }
          count34={
            <Fragment>
              <span className="plans-text184">₹ 2,60,000 /- Only</span>
            </Fragment>
          }
          count35={
            <Fragment>
              <span className="plans-text185">₹ 2,80,000 /- Only</span>
            </Fragment>
          }
          count36={
            <Fragment>
              <span className="plans-text186">₹ 3,00,000 /- Only</span>
            </Fragment>
          }
          count37={
            <Fragment>
              <span className="plans-text187">₹ 4,55,000 /- Only</span>
            </Fragment>
          }
          count38={
            <Fragment>
              <span className="plans-text188">₹ 4,90,000 /- Only</span>
            </Fragment>
          }
          count39={
            <Fragment>
              <span className="plans-text189">₹ 5,25,000 /- Only</span>
            </Fragment>
          }
          count310={
            <Fragment>
              <span className="plans-text190">Unlimited</span>
            </Fragment>
          }
          count311={
            <Fragment>
              <span className="plans-text191">Unlimited</span>
            </Fragment>
          }
          count312={
            <Fragment>
              <span className="plans-text192">Unlimited</span>
            </Fragment>
          }
          count313={
            <Fragment>
              <span className="plans-text193">Regular Decor</span>
            </Fragment>
          }
          count314={
            <Fragment>
              <span className="plans-text194">
                Customise Theme Decor, Chandeliers etc
              </span>
            </Fragment>
          }
          count315={
            <Fragment>
              <span className="plans-text195">
                Customise Theme Decor Chandeliers etc
              </span>
            </Fragment>
          }
          count316={
            <Fragment>
              <span className="plans-text196">
                <span>2 Luxury Rooms Only, </span>
                <span>Dedicated Event Pilot, </span>
                <span>15 Matts</span>
              </span>
            </Fragment>
          }
          count317={
            <Fragment>
              <span className="plans-text200">
                <span>3 Luxury Rooms Only, </span>
                <span>Dedicated Event Pilot</span>
              </span>
            </Fragment>
          }
          count318={
            <Fragment>
              <span className="plans-text203">
                5 Luxury Rooms, More If Needed. Dedicated Event Pilot
              </span>
            </Fragment>
          }
          count319={
            <Fragment>
              <span className="plans-text204">Audio Setup</span>
            </Fragment>
          }
          count320={
            <Fragment>
              <span className="plans-text205">Audio Setup, DJ</span>
            </Fragment>
          }
          count321={
            <Fragment>
              <span className="plans-text206">
                Audio Setup, DJArtist ( Anchor ), Emcee
              </span>
            </Fragment>
          }
          count322={
            <Fragment>
              <span className="plans-text207">15 Parking Tickets</span>
            </Fragment>
          }
          count323={
            <Fragment>
              <span className="plans-text208">20 Parking Tickets</span>
            </Fragment>
          }
          count324={
            <Fragment>
              <span className="plans-text209">25 Parking Tickets</span>
            </Fragment>
          }
          feature1={
            <Fragment>
              <span className="plans-text210">100 Pax | People</span>
            </Fragment>
          }
          feature2={
            <Fragment>
              <span className="plans-text211">250 Pax | People</span>
            </Fragment>
          }
          feature3={
            <Fragment>
              <span className="plans-text212">400 Pax | People</span>
            </Fragment>
          }
          feature4={
            <Fragment>
              <span className="plans-text213">700 Pax | People</span>
            </Fragment>
          }
          feature5={
            <Fragment>
              <span className="plans-text214">700 Pax | People</span>
            </Fragment>
          }
          feature6={
            <Fragment>
              <span className="plans-text215">Fine Catering</span>
            </Fragment>
          }
          feature7={
            <Fragment>
              <span className="plans-text216">Decor</span>
            </Fragment>
          }
          feature8={
            <Fragment>
              <span className="plans-text217">Hospitality</span>
            </Fragment>
          }
          feature9={
            <Fragment>
              <span className="plans-text218">Entertainment</span>
            </Fragment>
          }
          feature10={
            <Fragment>
              <span className="plans-text219">Valet Parking Tickets</span>
            </Fragment>
          }
          plan1Price={
            <Fragment>
              <span className="plans-text220">₹ 550 Only !</span>
            </Fragment>
          }
          plan2Price={
            <Fragment>
              <span className="plans-text221">₹ 650 Only !</span>
            </Fragment>
          }
          plan3Price={
            <Fragment>
              <span className="plans-text222">₹ 700 Only !</span>
            </Fragment>
          }
          plan1Action={
            <Fragment>
              <span className="plans-text223">Get started</span>
            </Fragment>
          }
          plan1Yearly={
            <Fragment>
              <span className="plans-text224">Per Pax | People</span>
            </Fragment>
          }
          plan2Action={
            <Fragment>
              <span className="plans-text225">Get started</span>
            </Fragment>
          }
          plan2Yearly={
            <Fragment>
              <span className="plans-text226">Per Pax | People</span>
            </Fragment>
          }
          plan3Yearly={
            <Fragment>
              <span className="plans-text227">Per Pax | People</span>
            </Fragment>
          }
          plan1Yearly1={
            <Fragment>
              <span className="plans-text228">*Check The Menu List</span>
            </Fragment>
          }
          plan2Yearly1={
            <Fragment>
              <span className="plans-text229">*Check The Menu List</span>
            </Fragment>
          }
          plan3Yearly1={
            <Fragment>
              <span className="plans-text230">*Check The Menu List</span>
            </Fragment>
          }
          plan1Action11={
            <Fragment>
              <span className="plans-text231">Get started</span>
            </Fragment>
          }
          rootClassName="pricing10root-class-name"
          featureCategory1={
            <Fragment>
              <span className="plans-text232">Base Pax | People</span>
            </Fragment>
          }
          featureCategory2={
            <Fragment>
              <span className="plans-text233">Services &amp; Features</span>
            </Fragment>
          }
        ></Pricing10>
      </div>
      <style jsx>
        {`
          .plans-faq8 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .plans-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .plans-container10 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .plans-section-title {
            width: 100%;
            align-self: center;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
          }
          .plans-text100 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            text-align: center;
            font-family: 'Spectral';
          }
          .plans-text101 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            text-align: center;
            font-family: 'Spectral';
          }
          .plans-button1 {
            display: none;
          }
          .plans-list {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            align-self: center;
            align-items: flex-start;
            border-top-left-radius: var(--dl-radius-radius-buttonradius);
            border-top-right-radius: var(--dl-radius-radius-buttonradius);
          }
          .plans-divider1 {
            background-color: rgba(25, 24, 24, 0.2);
          }
          .plans-faq1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            backdrop-filter: blur(3px);
            border-top-left-radius: var(--dl-radius-radius-buttonradius);
            border-top-right-radius: var(--dl-radius-radius-buttonradius);
          }
          .plans-trigger1 {
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .plans-trigger1:hover {
            fill: var(--dl-color-theme-secondary2);
            color: var(--dl-color-theme-secondary2);
            background-color: #006b39;
          }
          .plans-faq1-question1 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
            font-style: normal;
            text-align: center;
            font-family: 'Spectral';
            font-weight: 300;
          }
          .plans-icons-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .plans-icon10 {
            fill: #d9d9d9;
            width: 28px;
            height: 28px;
          }
          .plans-icon12 {
            width: 24px;
            height: 24px;
          }
          .plans-container13 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .plans-text103 {
            display: inline-block;
          }
          .plans-text104 {
            display: inline-block;
          }
          .plans-text105 {
            display: inline-block;
          }
          .plans-text106 {
            display: inline-block;
          }
          .plans-text107 {
            display: inline-block;
          }
          .plans-text108 {
            display: inline-block;
          }
          .plans-text109 {
            display: inline-block;
          }
          .plans-text110 {
            display: inline-block;
          }
          .plans-text111 {
            display: inline-block;
          }
          .plans-text112 {
            display: inline-block;
          }
          .plans-text113 {
            display: inline-block;
          }
          .plans-text114 {
            display: inline-block;
          }
          .plans-text115 {
            display: inline-block;
          }
          .plans-text116 {
            display: inline-block;
          }
          .plans-text117 {
            display: inline-block;
          }
          .plans-text118 {
            display: inline-block;
          }
          .plans-text119 {
            display: inline-block;
          }
          .plans-text120 {
            display: inline-block;
          }
          .plans-text121 {
            display: inline-block;
          }
          .plans-text122 {
            display: inline-block;
          }
          .plans-text123 {
            display: inline-block;
          }
          .plans-text124 {
            display: inline-block;
          }
          .plans-text125 {
            display: inline-block;
          }
          .plans-text126 {
            display: inline-block;
          }
          .plans-text127 {
            display: inline-block;
          }
          .plans-text131 {
            display: inline-block;
          }
          .plans-text134 {
            display: inline-block;
          }
          .plans-text135 {
            display: inline-block;
          }
          .plans-text136 {
            display: inline-block;
          }
          .plans-text137 {
            display: inline-block;
          }
          .plans-text138 {
            display: inline-block;
          }
          .plans-text139 {
            display: inline-block;
          }
          .plans-text140 {
            display: inline-block;
          }
          .plans-text141 {
            display: inline-block;
          }
          .plans-text142 {
            display: inline-block;
          }
          .plans-text143 {
            display: inline-block;
          }
          .plans-text144 {
            display: inline-block;
          }
          .plans-text145 {
            display: inline-block;
          }
          .plans-text146 {
            display: inline-block;
          }
          .plans-text147 {
            display: inline-block;
          }
          .plans-text148 {
            display: inline-block;
          }
          .plans-text149 {
            display: inline-block;
          }
          .plans-text150 {
            display: inline-block;
          }
          .plans-text151 {
            display: inline-block;
          }
          .plans-text152 {
            display: inline-block;
          }
          .plans-text153 {
            display: inline-block;
          }
          .plans-text154 {
            display: inline-block;
          }
          .plans-text155 {
            display: inline-block;
          }
          .plans-text156 {
            display: inline-block;
          }
          .plans-text157 {
            display: inline-block;
          }
          .plans-text158 {
            display: inline-block;
          }
          .plans-text159 {
            display: inline-block;
          }
          .plans-text160 {
            display: inline-block;
          }
          .plans-text161 {
            display: inline-block;
          }
          .plans-text162 {
            display: inline-block;
          }
          .plans-text163 {
            display: inline-block;
          }
          .plans-text164 {
            display: inline-block;
          }
          .plans-faq2 {
            width: 100%;
            display: none;
            align-items: flex-start;
            flex-direction: column;
          }
          .plans-trigger2 {
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .plans-trigger2:hover {
            fill: var(--dl-color-theme-secondary2);
            color: var(--dl-color-theme-secondary2);
            background-color: var(--dl-color-theme-primary2);
          }
          .plans-faq2-question1 {
            font-style: normal;
            text-align: center;
            font-family: 'Spectral';
            font-weight: 600;
          }
          .plans-icons-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .plans-icon14 {
            width: 24px;
            height: 24px;
          }
          .plans-icon16 {
            width: 24px;
            height: 24px;
          }
          .plans-container16 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .plans-divider3 {
            display: none;
          }
          .plans-faq3 {
            width: 100%;
            display: none;
            align-items: flex-start;
            flex-direction: column;
          }
          .plans-trigger3 {
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .plans-trigger3:hover {
            fill: var(--dl-color-theme-secondary2);
            color: var(--dl-color-theme-secondary2);
            background-color: var(--dl-color-theme-primary2);
          }
          .plans-faq2-question2 {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .plans-icons-container3 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .plans-icon18 {
            width: 24px;
            height: 24px;
          }
          .plans-icon20 {
            width: 24px;
            height: 24px;
          }
          .plans-container19 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .plans-divider4 {
            display: none;
          }
          .plans-faq4 {
            width: 100%;
            display: none;
            align-items: flex-start;
            flex-direction: column;
          }
          .plans-trigger4 {
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .plans-trigger4:hover {
            fill: var(--dl-color-theme-secondary2);
            color: var(--dl-color-theme-secondary2);
            background-color: var(--dl-color-theme-primary2);
          }
          .plans-faq2-question3 {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .plans-icons-container4 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .plans-icon22 {
            width: 24px;
            height: 24px;
          }
          .plans-icon24 {
            width: 24px;
            height: 24px;
          }
          .plans-container22 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .plans-divider5 {
            display: none;
          }
          .plans-faq5 {
            width: 100%;
            display: none;
            align-items: flex-start;
            flex-direction: column;
          }
          .plans-trigger5 {
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .plans-trigger5:hover {
            fill: var(--dl-color-theme-secondary2);
            color: var(--dl-color-theme-secondary2);
            background-color: var(--dl-color-theme-primary2);
          }
          .plans-faq1-question2 {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .plans-icons-container5 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .plans-icon26 {
            width: 24px;
            height: 24px;
          }
          .plans-icon28 {
            width: 24px;
            height: 24px;
          }
          .plans-container25 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .plans-divider6 {
            display: none;
          }
          .plans-content1 {
            display: none;
            align-self: center;
          }
          .plans-content2 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            flex-direction: column;
          }
          .plans-text169 {
            text-align: center;
          }
          .plans-text170 {
            text-align: center;
          }
          .plans-text172 {
            display: inline-block;
          }
          .plans-text173 {
            display: inline-block;
          }
          .plans-text174 {
            display: inline-block;
          }
          .plans-text175 {
            display: inline-block;
          }
          .plans-text176 {
            display: inline-block;
          }
          .plans-text177 {
            display: inline-block;
          }
          .plans-text178 {
            display: inline-block;
          }
          .plans-text179 {
            display: inline-block;
          }
          .plans-text180 {
            display: inline-block;
          }
          .plans-text181 {
            display: inline-block;
          }
          .plans-text182 {
            display: inline-block;
          }
          .plans-text183 {
            display: inline-block;
          }
          .plans-text184 {
            display: inline-block;
          }
          .plans-text185 {
            display: inline-block;
          }
          .plans-text186 {
            display: inline-block;
          }
          .plans-text187 {
            display: inline-block;
          }
          .plans-text188 {
            display: inline-block;
          }
          .plans-text189 {
            display: inline-block;
          }
          .plans-text190 {
            display: inline-block;
          }
          .plans-text191 {
            display: inline-block;
          }
          .plans-text192 {
            display: inline-block;
          }
          .plans-text193 {
            display: inline-block;
          }
          .plans-text194 {
            display: inline-block;
          }
          .plans-text195 {
            display: inline-block;
          }
          .plans-text196 {
            display: inline-block;
          }
          .plans-text200 {
            display: inline-block;
          }
          .plans-text203 {
            display: inline-block;
          }
          .plans-text204 {
            display: inline-block;
          }
          .plans-text205 {
            display: inline-block;
          }
          .plans-text206 {
            display: inline-block;
          }
          .plans-text207 {
            display: inline-block;
          }
          .plans-text208 {
            display: inline-block;
          }
          .plans-text209 {
            display: inline-block;
          }
          .plans-text210 {
            display: inline-block;
          }
          .plans-text211 {
            display: inline-block;
          }
          .plans-text212 {
            display: inline-block;
          }
          .plans-text213 {
            display: inline-block;
          }
          .plans-text214 {
            display: inline-block;
          }
          .plans-text215 {
            display: inline-block;
          }
          .plans-text216 {
            display: inline-block;
          }
          .plans-text217 {
            display: inline-block;
          }
          .plans-text218 {
            display: inline-block;
          }
          .plans-text219 {
            display: inline-block;
          }
          .plans-text220 {
            display: inline-block;
          }
          .plans-text221 {
            display: inline-block;
          }
          .plans-text222 {
            display: inline-block;
          }
          .plans-text223 {
            display: inline-block;
          }
          .plans-text224 {
            display: inline-block;
          }
          .plans-text225 {
            display: inline-block;
          }
          .plans-text226 {
            display: inline-block;
          }
          .plans-text227 {
            display: inline-block;
          }
          .plans-text228 {
            display: inline-block;
          }
          .plans-text229 {
            display: inline-block;
          }
          .plans-text230 {
            display: inline-block;
          }
          .plans-text231 {
            display: inline-block;
          }
          .plans-text232 {
            display: inline-block;
          }
          .plans-text233 {
            display: inline-block;
          }
          .plans-text234 {
            display: inline-block;
          }
          .plans-text235 {
            display: inline-block;
          }
          .plans-text236 {
            display: inline-block;
          }
          .plans-text237 {
            display: inline-block;
          }
          .plans-text238 {
            display: inline-block;
          }
          .plans-text239 {
            display: inline-block;
          }
          .plans-text242 {
            display: inline-block;
          }
          .plans-text243 {
            display: inline-block;
          }
          .plans-text244 {
            display: inline-block;
          }
          .plans-text245 {
            display: inline-block;
          }
          .plans-text246 {
            display: inline-block;
          }
          .plansroot-class-name {
            background-size: auto;
            background-image: url('/images/marigold-brand-name%20-%20copy11-200h.webp');
          }
          @media (max-width: 991px) {
            .plans-container10 {
              flex-direction: column;
            }
          }
          @media (max-width: 599px) {
            .plans-faq8 {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .plans-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Plans.defaultProps = {
  faq3Question: undefined,
  faq4Question: undefined,
  action2: undefined,
  faq2Question: undefined,
  heading1: undefined,
  rootClassName: '',
  content2: undefined,
  action1: undefined,
  content1: undefined,
  faq5Question: undefined,
  heading2: undefined,
  faq1Question: undefined,
}

Plans.propTypes = {
  faq3Question: PropTypes.element,
  faq4Question: PropTypes.element,
  action2: PropTypes.element,
  faq2Question: PropTypes.element,
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
  content2: PropTypes.element,
  action1: PropTypes.element,
  content1: PropTypes.element,
  faq5Question: PropTypes.element,
  heading2: PropTypes.element,
  faq1Question: PropTypes.element,
}

export default Plans
