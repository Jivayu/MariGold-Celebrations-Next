import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Pricing10 = (props) => {
  return (
    <>
      <div
        className={`pricing10-pricing23 thq-section-padding ${props.rootClassName} `}
      >
        <div className="pricing10-max-width thq-section-max-width">
          <div className="pricing10-content">
            <div className="pricing10-container10"></div>
            <div className="pricing10-column1">
              <div className="pricing10-price1">
                <div className="pricing10-price2">
                  <p className="pricing10-text100 thq-body-large">
                    {props.plan1 ?? (
                      <Fragment>
                        <span className="pricing10-text168">Deluxe</span>
                      </Fragment>
                    )}
                  </p>
                  <h3 className="pricing10-text101 thq-heading-3">
                    {props.plan1Price ?? (
                      <Fragment>
                        <span className="pricing10-text188">₹ 550 Only !</span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="pricing10-text102 thq-body-large">
                    {props.plan1Yearly ?? (
                      <Fragment>
                        <span className="pricing10-text197">
                          Per Pax | People
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <p className="pricing10-text103 thq-body-large">
                    {props.plan1Yearly1 ?? (
                      <Fragment>
                        <span className="pricing10-text165">
                          *Check The Menu List
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
              </div>
              <button className="pricing10-button1 thq-button-outline thq-button-animated">
                <span className="pricing10-text104 thq-body-small">
                  {props.plan1Action ?? (
                    <Fragment>
                      <span className="pricing10-text160">Get started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing10-column2">
              <div className="pricing10-price3">
                <div className="pricing10-price4">
                  <p className="pricing10-text105 thq-body-large">
                    {props.plan2 ?? (
                      <Fragment>
                        <span className="pricing10-text176">Grand</span>
                      </Fragment>
                    )}
                  </p>
                  <h3 className="pricing10-text106 thq-heading-3">
                    {props.plan2Price ?? (
                      <Fragment>
                        <span className="pricing10-text213">₹ 650 Only !</span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="pricing10-text107 thq-body-large">
                    {props.plan2Yearly ?? (
                      <Fragment>
                        <span className="pricing10-text170">
                          Per Pax | People
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <p className="pricing10-text108 thq-body-large">
                    {props.plan2Yearly1 ?? (
                      <Fragment>
                        <span className="pricing10-text204">
                          *Check The Menu List
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
              </div>
              <button className="pricing10-button2 thq-button-filled thq-button-animated">
                <span className="pricing10-text109 thq-body-small">
                  {props.plan2Action ?? (
                    <Fragment>
                      <span className="pricing10-text178">Get started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing10-column3">
              <div className="pricing10-price5">
                <div className="pricing10-price6">
                  <p className="pricing10-text110 thq-body-large">
                    {props.plan3 ?? (
                      <Fragment>
                        <span className="pricing10-text171">Royal</span>
                      </Fragment>
                    )}
                  </p>
                  <h3 className="pricing10-text111 thq-heading-3">
                    {props.plan3Price ?? (
                      <Fragment>
                        <span className="pricing10-text205">₹ 700 Only !</span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="pricing10-text112 thq-body-large">
                    {props.plan3Yearly ?? (
                      <Fragment>
                        <span className="pricing10-text164">
                          Per Pax | People
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <p className="pricing10-text113 thq-body-large">
                    {props.plan3Yearly1 ?? (
                      <Fragment>
                        <span className="pricing10-text187">
                          *Check The Menu List
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
              </div>
              <button className="pricing10-button3 thq-button-filled thq-button-animated">
                <span className="pricing10-text114 thq-body-small">
                  {props.plan1Action11 ?? (
                    <Fragment>
                      <span className="pricing10-text167">Get started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="pricing10-container11">
            <div className="pricing10-content21">
              <h3 className="pricing10-text115 thq-heading-3">
                {props.featureCategory1 ?? (
                  <Fragment>
                    <span className="pricing10-text214">Base Pax | People</span>
                  </Fragment>
                )}
              </h3>
            </div>
            <div className="pricing10-container12">
              <div className="pricing10-container13">
                <span className="pricing10-text116 thq-body-small">
                  {props.feature1 ?? (
                    <Fragment>
                      <span className="pricing10-text169">
                        100 Pax | People
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container14">
                <span className="pricing10-text117 thq-body-small">
                  {props.count1 ?? (
                    <Fragment>
                      <span className="pricing10-text194">
                        ₹ 65,000 /- Only
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container15">
                <span className="pricing10-text118 thq-body-small">
                  {props.count2 ?? (
                    <Fragment>
                      <span className="pricing10-text166">
                        ₹ 70,000 /- Only
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container16">
                <span className="pricing10-text119 thq-body-small">
                  {props.count3 ?? (
                    <Fragment>
                      <span className="pricing10-text199">
                        ₹ 75,000 /- Only
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="pricing10-container17">
              <div className="pricing10-container18">
                <span className="pricing10-text120 thq-body-small">
                  {props.feature2 ?? (
                    <Fragment>
                      <span className="pricing10-text217">
                        250 Pax | People
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container19">
                <span className="pricing10-text121 thq-body-small">
                  {props.count31 ?? (
                    <Fragment>
                      <span className="pricing10-text174">
                        ₹ 1,62,000 /- Only
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container20">
                <span className="pricing10-text122 thq-body-small">
                  {props.count32 ?? (
                    <Fragment>
                      <span className="pricing10-text203">
                        ₹ 1,75,000 /- Only
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container21">
                <span className="pricing10-text123 thq-body-small">
                  {props.count33 ?? (
                    <Fragment>
                      <span className="pricing10-text200">
                        ₹ 1,87,000 /- Only
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="pricing10-container22">
              <div className="pricing10-container23">
                <span className="pricing10-text124 thq-body-small">
                  {props.feature3 ?? (
                    <Fragment>
                      <span className="pricing10-text198">
                        400 Pax | People
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container24">
                <span className="pricing10-text125 thq-body-small">
                  {props.count34 ?? (
                    <Fragment>
                      <span className="pricing10-text216">
                        ₹ 2,60,000 /- Only
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container25">
                <span className="pricing10-text126 thq-body-small">
                  {props.count35 ?? (
                    <Fragment>
                      <span className="pricing10-text218">
                        ₹ 2,80,000 /- Only
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container26">
                <span className="pricing10-text127 thq-body-small">
                  {props.count36 ?? (
                    <Fragment>
                      <span className="pricing10-text209">
                        ₹ 3,00,000 /- Only
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="pricing10-container27">
              <div className="pricing10-container28">
                <span className="pricing10-text128 thq-body-small">
                  {props.feature4 ?? (
                    <Fragment>
                      <span className="pricing10-text210">
                        700 Pax | People
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container29">
                <span className="pricing10-text129 thq-body-small">
                  {props.count37 ?? (
                    <Fragment>
                      <span className="pricing10-text190">
                        ₹ 4,55,000 /- Only
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container30">
                <span className="pricing10-text130 thq-body-small">
                  {props.count38 ?? (
                    <Fragment>
                      <span className="pricing10-text212">
                        ₹ 4,90,000 /- Only
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container31">
                <span className="pricing10-text131 thq-body-small">
                  {props.count39 ?? (
                    <Fragment>
                      <span className="pricing10-text157">
                        ₹ 5,25,000 /- Only
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="pricing10-container32">
              <div className="pricing10-container33">
                <span className="pricing10-text132 thq-body-small">
                  {props.feature5 ?? (
                    <Fragment>
                      <span className="pricing10-text208">
                        700 Pax | People
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container34">
                <span className="pricing10-text133 thq-body-small">
                  {props.count310 ?? (
                    <Fragment>
                      <span className="pricing10-text159">Unlimited</span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container35">
                <span className="pricing10-text134 thq-body-small">
                  {props.count311 ?? (
                    <Fragment>
                      <span className="pricing10-text179">Unlimited</span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container36">
                <span className="pricing10-text135 thq-body-small">
                  {props.count312 ?? (
                    <Fragment>
                      <span className="pricing10-text202">Unlimited</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="pricing10-container37">
            <div className="pricing10-content22">
              <h3 className="pricing10-text136 thq-heading-3">
                {props.featureCategory2 ?? (
                  <Fragment>
                    <span className="pricing10-text206">
                      Services &amp; Features
                    </span>
                  </Fragment>
                )}
              </h3>
            </div>
            <div className="pricing10-container38">
              <div className="pricing10-container39">
                <span className="pricing10-text137 thq-body-small">
                  {props.feature6 ?? (
                    <Fragment>
                      <span className="pricing10-text201">Fine Catering</span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container40">
                <span className="pricing10-text138 thq-body-small">
                  {props.count4 ?? (
                    <Fragment>
                      <span className="pricing10-text211">
                        Starters, Main Course
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container41">
                <span className="pricing10-text139 thq-body-small">
                  {props.count5 ?? (
                    <Fragment>
                      <span className="pricing10-text172">
                        Wel-Come Drinks, Starters Main Course, Desserts
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container42">
                <span className="pricing10-text140 thq-body-small">
                  {props.count6 ?? (
                    <Fragment>
                      <span className="pricing10-text207">
                        Wel-Come Drinks, Starters Main Course, Desserts
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="pricing10-container43">
              <div className="pricing10-container44">
                <span className="pricing10-text141 thq-body-small">
                  {props.feature7 ?? (
                    <Fragment>
                      <span className="pricing10-text196">Decor</span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container45">
                <span className="pricing10-text142 thq-body-small">
                  {props.count313 ?? (
                    <Fragment>
                      <span className="pricing10-text181">Regular Decor</span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container46">
                <span className="pricing10-text143 thq-body-small">
                  {props.count314 ?? (
                    <Fragment>
                      <span className="pricing10-text177">
                        Customise Theme Decor, Chandeliers etc
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container47">
                <span className="pricing10-text144 thq-body-small">
                  {props.count315 ?? (
                    <Fragment>
                      <span className="pricing10-text191">
                        Customise Theme Decor Chandeliers etc
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="pricing10-container48">
              <div className="pricing10-container49">
                <span className="pricing10-text145 thq-body-small">
                  {props.feature8 ?? (
                    <Fragment>
                      <span className="pricing10-text158">Hospitality</span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container50">
                <span className="pricing10-text146 thq-body-small">
                  {props.count316 ?? (
                    <Fragment>
                      <span className="pricing10-text183">
                        <span>2 Luxury Rooms Only, </span>
                        <span>Dedicated Event Pilot, </span>
                        <span>15 Matts</span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container51">
                <span className="pricing10-text147 thq-body-small">
                  {props.count317 ?? (
                    <Fragment>
                      <span className="pricing10-text161">
                        <span>3 Luxury Rooms Only, </span>
                        <span>Dedicated Event Pilot</span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container52">
                <span className="pricing10-text148 thq-body-small">
                  {props.count318 ?? (
                    <Fragment>
                      <span className="pricing10-text173">
                        5 Luxury Rooms, More If Needed. Dedicated Event Pilot
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="pricing10-container53">
              <div className="pricing10-container54">
                <span className="pricing10-text149 thq-body-small">
                  {props.feature9 ?? (
                    <Fragment>
                      <span className="pricing10-text180">Entertainment</span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container55">
                <span className="pricing10-text150 thq-body-small">
                  {props.count319 ?? (
                    <Fragment>
                      <span className="pricing10-text195">Audio Setup</span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container56">
                <span className="pricing10-text151 thq-body-small">
                  {props.count320 ?? (
                    <Fragment>
                      <span className="pricing10-text175">Audio Setup, DJ</span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container57">
                <span className="pricing10-text152 thq-body-small">
                  {props.count321 ?? (
                    <Fragment>
                      <span className="pricing10-text192">
                        Audio Setup, DJArtist ( Anchor ), Emcee
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="pricing10-container58">
              <div className="pricing10-container59">
                <span className="pricing10-text153 thq-body-small">
                  {props.feature10 ?? (
                    <Fragment>
                      <span className="pricing10-text182">
                        Valet Parking Tickets
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container60">
                <span className="pricing10-text154 thq-body-small">
                  {props.count322 ?? (
                    <Fragment>
                      <span className="pricing10-text189">
                        15 Parking Tickets
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container61">
                <span className="pricing10-text155 thq-body-small">
                  {props.count323 ?? (
                    <Fragment>
                      <span className="pricing10-text215">
                        20 Parking Tickets
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container62">
                <span className="pricing10-text156 thq-body-small">
                  {props.count324 ?? (
                    <Fragment>
                      <span className="pricing10-text193">
                        25 Parking Tickets
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .pricing10-pricing23 {
            gap: 0;
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .pricing10-max-width {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .pricing10-content {
            gap: 2px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing10-container10 {
            width: 25%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing10-column1 {
            gap: var(--dl-space-space-twounits);
            width: 20%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: rgba(25, 24, 24, 0.3);
            border-style: solid;
            border-width: 0.5px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            background-color: rgba(255, 255, 255, 0.1);
            border-top-width: 0px;
            border-top-left-radius: var(--dl-radius-radius-radius10);
            border-top-right-radius: var(--dl-radius-radius-radius10);
            border-bottom-left-radius: var(--dl-radius-radius-buttonradius);
            border-bottom-right-radius: var(--dl-radius-radius-buttonradius);
          }
          .pricing10-price1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing10-price2 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.15);
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-buttonradius);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: var(--dl-color-theme-accent1);
          }
          .pricing10-text100 {
            font-style: normal;
            text-align: center;
            font-family: 'Spectral';
            font-weight: 600;
          }
          .pricing10-text101 {
            width: auto;
            font-size: 48px;
            text-align: center;
            font-family: 'Spectral';
          }
          .pricing10-text102 {
            font-size: 14px;
            text-align: center;
            font-family: 'Spectral';
          }
          .pricing10-text103 {
            font-size: 12px;
            text-align: center;
            font-family: 'Spectral';
          }
          .pricing10-button1 {
            width: 100%;
            display: none;
          }
          .pricing10-text104 {
            font-family: 'Spectral';
          }
          .pricing10-column2 {
            gap: var(--dl-space-space-twounits);
            width: 20%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: rgba(25, 24, 24, 0.3);
            border-style: solid;
            border-width: 0.5px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            background-color: rgba(255, 255, 255, 0.2);
            border-top-width: 0px;
            border-top-left-radius: var(--dl-radius-radius-radius10);
            border-top-right-radius: var(--dl-radius-radius-radius10);
            border-bottom-left-radius: var(--dl-radius-radius-inputradius);
            border-bottom-right-radius: var(--dl-radius-radius-inputradius);
          }
          .pricing10-price3 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing10-price4 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.15);
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-buttonradius);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: var(--dl-color-theme-accent1);
          }
          .pricing10-text105 {
            font-style: normal;
            text-align: center;
            font-family: 'Spectral';
            font-weight: 600;
          }
          .pricing10-text106 {
            font-size: 48px;
            text-align: center;
            font-family: 'Spectral';
          }
          .pricing10-text107 {
            font-size: 14px;
            text-align: center;
            font-family: 'Spectral';
          }
          .pricing10-text108 {
            font-size: 12px;
            text-align: center;
            font-family: 'Spectral';
          }
          .pricing10-button2 {
            width: 100%;
            display: none;
          }
          .pricing10-text109 {
            font-family: 'Spectral';
          }
          .pricing10-column3 {
            gap: var(--dl-space-space-twounits);
            width: 20%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: rgba(25, 24, 24, 0.3);
            border-style: solid;
            border-width: 0.5px;
            flex-direction: column;
            background-color: rgba(239, 239, 239, 0.3);
            border-top-width: 0px;
            border-top-left-radius: var(--dl-radius-radius-radius10);
            border-top-right-radius: var(--dl-radius-radius-radius10);
            border-bottom-left-radius: var(--dl-radius-radius-inputradius);
            border-bottom-right-radius: var(--dl-radius-radius-inputradius);
          }
          .pricing10-price5 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing10-price6 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.15);
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-buttonradius);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: var(--dl-color-theme-accent1);
          }
          .pricing10-text110 {
            font-style: normal;
            text-align: center;
            font-family: 'Spectral';
            font-weight: 600;
          }
          .pricing10-text111 {
            font-size: 48px;
            text-align: center;
            font-family: 'Spectral';
          }
          .pricing10-text112 {
            font-size: 14px;
            text-align: center;
            font-family: 'Spectral';
          }
          .pricing10-text113 {
            font-size: 12px;
            text-align: center;
            font-family: 'Spectral';
          }
          .pricing10-button3 {
            width: 100%;
            display: none;
          }
          .pricing10-text114 {
            font-family: 'Spectral';
          }
          .pricing10-container11 {
            gap: 1;
            width: 100%;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
          }
          .pricing10-content21 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .pricing10-text115 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 18px;
            font-style: normal;
            font-family: 'Spectral';
            font-weight: 300;
            margin-left: var(--dl-space-space-oneandhalfunits);
          }
          .pricing10-container12 {
            gap: 2px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: rgba(25, 24, 24, 0.25);
            border-width: 1px;
            flex-direction: row;
          }
          .pricing10-container13 {
            gap: 2px;
            flex: 0 0 auto;
            width: 25%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(0, 0, 0, 0.22);
          }
          .pricing10-text116 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-family: 'Spectral';
          }
          .pricing10-container14 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(25, 24, 24, 0.35);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(255, 255, 255, 0.1);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .pricing10-text117 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            align-self: center;
            font-style: normal;
            font-family: 'Spectral';
            font-weight: 300;
          }
          .pricing10-container15 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(25, 24, 24, 0.35);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(255, 255, 255, 0.2);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .pricing10-text118 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            align-self: center;
            font-style: normal;
            font-family: 'Spectral';
            font-weight: 300;
          }
          .pricing10-container16 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(25, 24, 24, 0.35);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(239, 239, 239, 0.3);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .pricing10-text119 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            height: auto;
            align-self: center;
            font-style: normal;
            font-family: 'Spectral';
            font-weight: 300;
          }
          .pricing10-container17 {
            gap: 2px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: rgba(25, 24, 24, 0.25);
            border-width: 1px;
            flex-direction: row;
          }
          .pricing10-container18 {
            gap: 2px;
            flex: 0 0 auto;
            width: 25%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(0, 0, 0, 0.22);
          }
          .pricing10-text120 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-family: 'Spectral';
          }
          .pricing10-container19 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(25, 24, 24, 0.35);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(255, 255, 255, 0.1);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .pricing10-text121 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            height: auto;
            align-self: center;
            font-style: normal;
            font-family: 'Spectral';
            font-weight: 300;
          }
          .pricing10-container20 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(25, 24, 24, 0.35);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(255, 255, 255, 0.2);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .pricing10-text122 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            height: auto;
            align-self: center;
            font-style: normal;
            font-family: 'Spectral';
            font-weight: 300;
          }
          .pricing10-container21 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(25, 24, 24, 0.35);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(239, 239, 239, 0.3);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .pricing10-text123 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            height: auto;
            align-self: center;
            font-style: normal;
            font-family: 'Spectral';
            font-weight: 300;
          }
          .pricing10-container22 {
            gap: 2px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: rgba(25, 24, 24, 0.25);
            border-width: 1px;
            flex-direction: row;
          }
          .pricing10-container23 {
            gap: 2px;
            flex: 0 0 auto;
            width: 25%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(0, 0, 0, 0.22);
          }
          .pricing10-text124 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-family: 'Spectral';
          }
          .pricing10-container24 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(25, 24, 24, 0.35);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(255, 255, 255, 0.1);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .pricing10-text125 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            height: auto;
            align-self: center;
            font-style: normal;
            font-family: 'Spectral';
            font-weight: 300;
          }
          .pricing10-container25 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(25, 24, 24, 0.35);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(255, 255, 255, 0.2);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .pricing10-text126 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            height: auto;
            align-self: center;
            font-style: normal;
            font-family: 'Spectral';
            font-weight: 300;
          }
          .pricing10-container26 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(25, 24, 24, 0.35);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(239, 239, 239, 0.3);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .pricing10-text127 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            height: auto;
            align-self: center;
            font-style: normal;
            font-family: 'Spectral';
            font-weight: 300;
          }
          .pricing10-container27 {
            gap: 2px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: rgba(25, 24, 24, 0.25);
            border-width: 1px;
            flex-direction: row;
          }
          .pricing10-container28 {
            gap: 2px;
            flex: 0 0 auto;
            width: 25%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(0, 0, 0, 0.22);
          }
          .pricing10-text128 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-family: 'Spectral';
          }
          .pricing10-container29 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(25, 24, 24, 0.35);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(255, 255, 255, 0.1);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .pricing10-text129 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            height: auto;
            align-self: center;
            font-style: normal;
            font-family: 'Spectral';
            font-weight: 300;
          }
          .pricing10-container30 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(25, 24, 24, 0.35);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(255, 255, 255, 0.2);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .pricing10-text130 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            height: auto;
            align-self: center;
            font-style: normal;
            font-family: 'Spectral';
            font-weight: 300;
          }
          .pricing10-container31 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(25, 24, 24, 0.35);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(239, 239, 239, 0.3);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .pricing10-text131 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            height: auto;
            align-self: center;
            font-style: normal;
            font-family: 'Spectral';
            font-weight: 300;
          }
          .pricing10-container32 {
            gap: 2px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: rgba(25, 24, 24, 0.25);
            border-width: 1px;
            flex-direction: row;
          }
          .pricing10-container33 {
            flex: 0 0 auto;
            width: 25%;
            height: auto;
            display: none;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .pricing10-text132 {
            font-family: 'Spectral';
          }
          .pricing10-container34 {
            flex: 1;
            width: 20%;
            height: auto;
            display: none;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(25, 24, 24, 0.35);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .pricing10-text133 {
            height: auto;
            align-self: center;
            font-family: 'Spectral';
          }
          .pricing10-container35 {
            flex: 1;
            width: 20%;
            height: auto;
            display: none;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(25, 24, 24, 0.35);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .pricing10-text134 {
            height: auto;
            align-self: center;
            font-family: 'Spectral';
          }
          .pricing10-container36 {
            flex: 1;
            width: 20%;
            height: auto;
            display: none;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(25, 24, 24, 0.35);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .pricing10-text135 {
            height: auto;
            align-self: center;
            font-family: 'Spectral';
          }
          .pricing10-container37 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .pricing10-content22 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .pricing10-text136 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 18px;
            font-style: normal;
            font-family: 'Spectral';
            font-weight: 300;
            margin-left: var(--dl-space-space-oneandhalfunits);
          }
          .pricing10-container38 {
            gap: 2px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: rgba(25, 24, 24, 0.25);
            border-width: 1px;
            flex-direction: row;
          }
          .pricing10-container39 {
            flex: 0 0 auto;
            width: 25%;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(0, 0, 0, 0.22);
          }
          .pricing10-text137 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-family: 'Spectral';
          }
          .pricing10-container40 {
            flex: 1;
            width: 20%;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(25, 24, 24, 0.35);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(255, 255, 255, 0.1);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .pricing10-text138 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 80%;
            font-style: normal;
            text-align: left;
            font-family: 'Spectral';
            font-weight: 300;
          }
          .pricing10-container41 {
            flex: 1;
            width: 20%;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(25, 24, 24, 0.35);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(255, 255, 255, 0.2);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .pricing10-text139 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 80%;
            font-style: normal;
            text-align: left;
            font-family: 'Spectral';
            font-weight: 300;
          }
          .pricing10-container42 {
            flex: 1;
            width: 20%;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(25, 24, 24, 0.35);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(239, 239, 239, 0.3);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .pricing10-text140 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 80%;
            height: auto;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Spectral';
            font-weight: 300;
          }
          .pricing10-container43 {
            gap: 2px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            border-color: rgba(25, 24, 24, 0.25);
            border-width: 1px;
            flex-direction: row;
          }
          .pricing10-container44 {
            flex: 0 0 auto;
            width: 25%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(0, 0, 0, 0.22);
          }
          .pricing10-text141 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-family: 'Spectral';
          }
          .pricing10-container45 {
            flex: 1;
            width: 20%;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(25, 24, 24, 0.35);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(255, 255, 255, 0.1);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .pricing10-text142 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 80%;
            height: auto;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Spectral';
            font-weight: 300;
          }
          .pricing10-container46 {
            flex: 1;
            width: 20%;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(25, 24, 24, 0.35);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(255, 255, 255, 0.2);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .pricing10-text143 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 80%;
            height: auto;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Spectral';
            font-weight: 300;
          }
          .pricing10-container47 {
            flex: 1;
            width: 20%;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(25, 24, 24, 0.35);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(239, 239, 239, 0.3);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .pricing10-text144 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 80%;
            height: auto;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Spectral';
            font-weight: 300;
          }
          .pricing10-container48 {
            gap: 2px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            border-color: rgba(25, 24, 24, 0.25);
            border-width: 1px;
            flex-direction: row;
          }
          .pricing10-container49 {
            flex: 0 0 auto;
            width: 25%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(0, 0, 0, 0.22);
          }
          .pricing10-text145 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-family: 'Spectral';
          }
          .pricing10-container50 {
            flex: 1;
            width: 20%;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(25, 24, 24, 0.35);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(255, 255, 255, 0.1);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .pricing10-text146 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 80%;
            height: auto;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Spectral';
            font-weight: 300;
          }
          .pricing10-container51 {
            flex: 1;
            width: 20%;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(25, 24, 24, 0.35);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(255, 255, 255, 0.2);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .pricing10-text147 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 80%;
            height: auto;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Spectral';
            font-weight: 300;
          }
          .pricing10-container52 {
            flex: 1;
            width: 20%;
            display: flex;
            align-self: stretch;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(25, 24, 24, 0.35);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(239, 239, 239, 0.3);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .pricing10-text148 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 80%;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Spectral';
            font-weight: 300;
          }
          .pricing10-container53 {
            gap: 2px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            border-color: rgba(25, 24, 24, 0.25);
            border-width: 1px;
            flex-direction: row;
          }
          .pricing10-container54 {
            flex: 0 0 auto;
            width: 25%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(0, 0, 0, 0.22);
          }
          .pricing10-text149 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-family: 'Spectral';
          }
          .pricing10-container55 {
            flex: 1;
            width: 20%;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(25, 24, 24, 0.35);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(255, 255, 255, 0.1);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .pricing10-text150 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 80%;
            height: auto;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Spectral';
            font-weight: 300;
          }
          .pricing10-container56 {
            flex: 1;
            width: 20%;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(25, 24, 24, 0.35);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(255, 255, 255, 0.2);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .pricing10-text151 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 80%;
            height: auto;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Spectral';
            font-weight: 300;
          }
          .pricing10-container57 {
            flex: 1;
            width: 20%;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(25, 24, 24, 0.35);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(239, 239, 239, 0.3);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .pricing10-text152 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 80%;
            height: auto;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Spectral';
            font-weight: 300;
          }
          .pricing10-container58 {
            gap: 2px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            border-color: rgba(25, 24, 24, 0.25);
            border-width: 1px;
            flex-direction: row;
          }
          .pricing10-container59 {
            flex: 0 0 auto;
            width: 25%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(0, 0, 0, 0.22);
          }
          .pricing10-text153 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-family: 'Spectral';
          }
          .pricing10-container60 {
            flex: 1;
            width: 20%;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(25, 24, 24, 0.35);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(255, 255, 255, 0.1);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .pricing10-text154 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 80%;
            height: auto;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Spectral';
            font-weight: 300;
          }
          .pricing10-container61 {
            flex: 1;
            width: 20%;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(25, 24, 24, 0.35);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(255, 255, 255, 0.2);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .pricing10-text155 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 80%;
            height: auto;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Spectral';
            font-weight: 300;
          }
          .pricing10-container62 {
            flex: 1;
            width: 20%;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(25, 24, 24, 0.35);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(239, 239, 239, 0.3);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .pricing10-text156 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 80%;
            height: auto;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Spectral';
            font-weight: 300;
          }
          .pricing10-text157 {
            display: inline-block;
          }
          .pricing10-text158 {
            display: inline-block;
          }
          .pricing10-text159 {
            display: inline-block;
          }
          .pricing10-text160 {
            display: inline-block;
          }
          .pricing10-text161 {
            display: inline-block;
          }
          .pricing10-text164 {
            display: inline-block;
          }
          .pricing10-text165 {
            display: inline-block;
          }
          .pricing10-text166 {
            display: inline-block;
          }
          .pricing10-text167 {
            display: inline-block;
          }
          .pricing10-text168 {
            display: inline-block;
          }
          .pricing10-text169 {
            display: inline-block;
          }
          .pricing10-text170 {
            display: inline-block;
          }
          .pricing10-text171 {
            display: inline-block;
          }
          .pricing10-text172 {
            display: inline-block;
          }
          .pricing10-text173 {
            display: inline-block;
          }
          .pricing10-text174 {
            display: inline-block;
          }
          .pricing10-text175 {
            display: inline-block;
          }
          .pricing10-text176 {
            display: inline-block;
          }
          .pricing10-text177 {
            display: inline-block;
          }
          .pricing10-text178 {
            display: inline-block;
          }
          .pricing10-text179 {
            display: inline-block;
          }
          .pricing10-text180 {
            display: inline-block;
          }
          .pricing10-text181 {
            display: inline-block;
          }
          .pricing10-text182 {
            display: inline-block;
          }
          .pricing10-text183 {
            display: inline-block;
          }
          .pricing10-text187 {
            display: inline-block;
          }
          .pricing10-text188 {
            display: inline-block;
          }
          .pricing10-text189 {
            display: inline-block;
          }
          .pricing10-text190 {
            display: inline-block;
          }
          .pricing10-text191 {
            display: inline-block;
          }
          .pricing10-text192 {
            display: inline-block;
          }
          .pricing10-text193 {
            display: inline-block;
          }
          .pricing10-text194 {
            display: inline-block;
          }
          .pricing10-text195 {
            display: inline-block;
          }
          .pricing10-text196 {
            display: inline-block;
          }
          .pricing10-text197 {
            display: inline-block;
          }
          .pricing10-text198 {
            display: inline-block;
          }
          .pricing10-text199 {
            display: inline-block;
          }
          .pricing10-text200 {
            display: inline-block;
          }
          .pricing10-text201 {
            display: inline-block;
          }
          .pricing10-text202 {
            display: inline-block;
          }
          .pricing10-text203 {
            display: inline-block;
          }
          .pricing10-text204 {
            display: inline-block;
          }
          .pricing10-text205 {
            display: inline-block;
          }
          .pricing10-text206 {
            display: inline-block;
          }
          .pricing10-text207 {
            display: inline-block;
          }
          .pricing10-text208 {
            display: inline-block;
          }
          .pricing10-text209 {
            display: inline-block;
          }
          .pricing10-text210 {
            display: inline-block;
          }
          .pricing10-text211 {
            display: inline-block;
          }
          .pricing10-text212 {
            display: inline-block;
          }
          .pricing10-text213 {
            display: inline-block;
          }
          .pricing10-text214 {
            display: inline-block;
          }
          .pricing10-text215 {
            display: inline-block;
          }
          .pricing10-text216 {
            display: inline-block;
          }
          .pricing10-text217 {
            display: inline-block;
          }
          .pricing10-text218 {
            display: inline-block;
          }
          .pricing10root-class-name {
            display: none;
          }
          @media (max-width: 991px) {
            .pricing10-content {
              flex-direction: row;
            }
          }
          @media (max-width: 767px) {
            .pricing10-content {
              flex-direction: column;
            }
            .pricing10-column1 {
              width: 100%;
              border-top-width: 1px;
            }
            .pricing10-text101 {
              font-size: 24px;
            }
            .pricing10-column2 {
              width: 100%;
            }
            .pricing10-text106 {
              font-size: 24px;
            }
            .pricing10-column3 {
              width: 100%;
            }
            .pricing10-text111 {
              font-size: 24px;
            }
            .pricing10-container11 {
              display: none;
            }
            .pricing10-container37 {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .pricing10-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .pricing10-column1 {
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .pricing10-text101 {
              font-size: 16px;
            }
            .pricing10-button1 {
              width: 100%;
              padding-left: var(--dl-space-space-unit);
            }
            .pricing10-column2 {
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .pricing10-text106 {
              font-size: 16px;
            }
            .pricing10-button2 {
              width: 100%;
            }
            .pricing10-column3 {
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .pricing10-text111 {
              font-size: 16px;
            }
            .pricing10-button3 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Pricing10.defaultProps = {
  count39: undefined,
  feature8: undefined,
  count310: undefined,
  plan1Action: undefined,
  count317: undefined,
  plan3Yearly: undefined,
  plan1Yearly1: undefined,
  count2: undefined,
  plan1Action11: undefined,
  plan1: undefined,
  feature1: undefined,
  plan2Yearly: undefined,
  plan3: undefined,
  count5: undefined,
  count318: undefined,
  count31: undefined,
  count320: undefined,
  plan2: undefined,
  rootClassName: '',
  count314: undefined,
  plan2Action: undefined,
  count311: undefined,
  feature9: undefined,
  count313: undefined,
  feature10: undefined,
  count316: undefined,
  plan3Yearly1: undefined,
  plan1Price: undefined,
  count322: undefined,
  count37: undefined,
  count315: undefined,
  count321: undefined,
  count324: undefined,
  count1: undefined,
  count319: undefined,
  feature7: undefined,
  plan1Yearly: undefined,
  feature3: undefined,
  count3: undefined,
  count33: undefined,
  feature6: undefined,
  count312: undefined,
  count32: undefined,
  plan2Yearly1: undefined,
  plan3Price: undefined,
  featureCategory2: undefined,
  count6: undefined,
  feature5: undefined,
  count36: undefined,
  feature4: undefined,
  count4: undefined,
  count38: undefined,
  plan2Price: undefined,
  featureCategory1: undefined,
  count323: undefined,
  count34: undefined,
  feature2: undefined,
  count35: undefined,
}

Pricing10.propTypes = {
  count39: PropTypes.element,
  feature8: PropTypes.element,
  count310: PropTypes.element,
  plan1Action: PropTypes.element,
  count317: PropTypes.element,
  plan3Yearly: PropTypes.element,
  plan1Yearly1: PropTypes.element,
  count2: PropTypes.element,
  plan1Action11: PropTypes.element,
  plan1: PropTypes.element,
  feature1: PropTypes.element,
  plan2Yearly: PropTypes.element,
  plan3: PropTypes.element,
  count5: PropTypes.element,
  count318: PropTypes.element,
  count31: PropTypes.element,
  count320: PropTypes.element,
  plan2: PropTypes.element,
  rootClassName: PropTypes.string,
  count314: PropTypes.element,
  plan2Action: PropTypes.element,
  count311: PropTypes.element,
  feature9: PropTypes.element,
  count313: PropTypes.element,
  feature10: PropTypes.element,
  count316: PropTypes.element,
  plan3Yearly1: PropTypes.element,
  plan1Price: PropTypes.element,
  count322: PropTypes.element,
  count37: PropTypes.element,
  count315: PropTypes.element,
  count321: PropTypes.element,
  count324: PropTypes.element,
  count1: PropTypes.element,
  count319: PropTypes.element,
  feature7: PropTypes.element,
  plan1Yearly: PropTypes.element,
  feature3: PropTypes.element,
  count3: PropTypes.element,
  count33: PropTypes.element,
  feature6: PropTypes.element,
  count312: PropTypes.element,
  count32: PropTypes.element,
  plan2Yearly1: PropTypes.element,
  plan3Price: PropTypes.element,
  featureCategory2: PropTypes.element,
  count6: PropTypes.element,
  feature5: PropTypes.element,
  count36: PropTypes.element,
  feature4: PropTypes.element,
  count4: PropTypes.element,
  count38: PropTypes.element,
  plan2Price: PropTypes.element,
  featureCategory1: PropTypes.element,
  count323: PropTypes.element,
  count34: PropTypes.element,
  feature2: PropTypes.element,
  count35: PropTypes.element,
}

export default Pricing10
