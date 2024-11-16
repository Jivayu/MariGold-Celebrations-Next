import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Schedule = (props) => {
  return (
    <>
      <section className="schedule-schedule">
        <div className="schedule-content">
          <div className="schedule-header">
            <div className="schedule-section-numeral">
              <div className="schedule-divide"></div>
              <p className="schedule-text100">
                {props.text ?? (
                  <Fragment>
                    <span className="schedule-text191">02</span>
                  </Fragment>
                )}
              </p>
            </div>
            <div data-aos="fade-right" className="schedule-heading">
              <h2 className="schedule-title10">
                {props.title ?? (
                  <Fragment>
                    <span className="schedule-text175">Schedule</span>
                  </Fragment>
                )}
              </h2>
              <p className="schedule-caption10">
                {props.caption ?? (
                  <Fragment>
                    <span className="schedule-text178">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="schedule-main10">
            <div className="schedule-tab-selector">
              <div
                data-role="schedule-select"
                className="tab-active tab schedule-tab1"
              >
                <span className="schedule-text101">
                  {props.text1 ?? (
                    <Fragment>
                      <span className="schedule-text206">Friday, Nov 04</span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div data-role="schedule-select" className="tab schedule-tab2">
                <span className="schedule-text102">
                  {props.text2 ?? (
                    <Fragment>
                      <span className="schedule-text176">Saturday, Nov 05</span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div data-role="schedule-select" className="tab schedule-tab3">
                <span className="schedule-text103">
                  {props.text3 ?? (
                    <Fragment>
                      <span className="schedule-text164">Sunday, Nov 06</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="schedule-lists">
              <section data-role="schedule-content" className="schedule-list1">
                <div className="schedule-element10">
                  <div className="schedule-main11">
                    <span className="schedule-time10">
                      {props.time ?? (
                        <Fragment>
                          <span className="schedule-text187">
                            8:00 AM - 2:00 PM GMT +1 / 10:00 AM - 4:00 PM Your
                            local time (6 Hours)
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="schedule-title11">
                      {props.title1 ?? (
                        <Fragment>
                          <span className="schedule-text157">
                            Pre-event networking
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <div className="schedule-author10">
                      <img
                        alt={props.iconAlt}
                        src={props.iconSrc}
                        className="schedule-icon10"
                      />
                      <div className="schedule-details10">
                        <span className="schedule-name10">
                          {props.name ?? (
                            <Fragment>
                              <span className="schedule-text196">
                                Andy Smith
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <div className="schedule-point10"></div>
                        <span className="schedule-caption11">
                          {props.caption1 ?? (
                            <Fragment>
                              <span className="schedule-text168">
                                CEO, Opary
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="button schedule-button10">
                    <span>
                      {props.button ?? (
                        <Fragment>
                          <span className="schedule-text148">
                            Connect to chat room
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
                <div className="schedule-element11">
                  <div className="schedule-main12">
                    <span className="schedule-time11">
                      {props.time1 ?? (
                        <Fragment>
                          <span className="schedule-text173">
                            3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your
                            local time (30 Minutes)
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="schedule-title12">
                      {props.title2 ?? (
                        <Fragment>
                          <span className="schedule-text117">
                            How to Lorem Ipsum.
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <div className="schedule-author11">
                      <img
                        alt={props.iconAlt1}
                        src={props.iconSrc1}
                        className="schedule-icon11"
                      />
                      <div className="schedule-details11">
                        <span className="schedule-name11">
                          {props.name1 ?? (
                            <Fragment>
                              <span className="schedule-text172">
                                Samantha Johnson
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <div className="schedule-point11"></div>
                        <span className="schedule-caption12">
                          {props.caption2 ?? (
                            <Fragment>
                              <span className="schedule-text146">
                                CEO, Opary
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="button schedule-button11">
                    <span>
                      {props.text4 ?? (
                        <Fragment>
                          <span className="schedule-text165">
                            <span>See live</span>
                            <br></br>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
                <div className="schedule-element12">
                  <div className="schedule-main13">
                    <span className="schedule-time12">
                      {props.time2 ?? (
                        <Fragment>
                          <span className="schedule-text203">
                            3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your
                            local time (30 Minutes)
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="schedule-title13">
                      {props.title3 ?? (
                        <Fragment>
                          <span className="schedule-text169">
                            How to Lorem Ipsum.
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <div className="schedule-author12">
                      <img
                        alt={props.iconAlt2}
                        src={props.iconSrc2}
                        className="schedule-icon12"
                      />
                      <div className="schedule-details12">
                        <span className="schedule-name12">
                          {props.name2 ?? (
                            <Fragment>
                              <span className="schedule-text141">
                                Samantha Johnson
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <div className="schedule-point12"></div>
                        <span className="schedule-caption13">
                          {props.caption3 ?? (
                            <Fragment>
                              <span className="schedule-text174">
                                CEO, Opary
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="button schedule-button12">
                    <span>
                      {props.text5 ?? (
                        <Fragment>
                          <span className="schedule-text122">
                            <span>See live</span>
                            <br></br>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
                <div className="schedule-element13">
                  <div className="schedule-main14">
                    <span className="schedule-time13">
                      {props.time3 ?? (
                        <Fragment>
                          <span className="schedule-text118">
                            3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your
                            local time (30 Minutes)
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="schedule-title14">
                      {props.title4 ?? (
                        <Fragment>
                          <span className="schedule-text198">
                            How to Lorem Ipsum.
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <div className="schedule-author13">
                      <img
                        alt={props.iconAlt3}
                        src={props.iconSrc3}
                        className="schedule-icon13"
                      />
                      <div className="schedule-details13">
                        <span className="schedule-name13">
                          {props.name3 ?? (
                            <Fragment>
                              <span className="schedule-text145">
                                Samantha Johnson
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <div className="schedule-point13"></div>
                        <span className="schedule-caption14">
                          {props.caption4 ?? (
                            <Fragment>
                              <span className="schedule-text192">
                                CEO, Opary
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="button schedule-button13">
                    <span>
                      {props.text6 ?? (
                        <Fragment>
                          <span className="schedule-text129">
                            <span>See live</span>
                            <br></br>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
                <div className="schedule-element14">
                  <div className="schedule-main15">
                    <span className="schedule-time14">
                      {props.time4 ?? (
                        <Fragment>
                          <span className="schedule-text194">
                            3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your
                            local time (30 Minutes)
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="schedule-title15">
                      {props.title5 ?? (
                        <Fragment>
                          <span className="schedule-text197">
                            How to Lorem Ipsum.
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <div className="schedule-author14">
                      <img
                        alt={props.iconAlt4}
                        src={props.iconSrc4}
                        className="schedule-icon14"
                      />
                      <div className="schedule-details14">
                        <span className="schedule-name14">
                          {props.name4 ?? (
                            <Fragment>
                              <span className="schedule-text119">
                                Samantha Johnson
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <div className="schedule-point14"></div>
                        <span className="schedule-caption15">
                          {props.caption5 ?? (
                            <Fragment>
                              <span className="schedule-text139">
                                CEO, Opary
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="button schedule-button14">
                    <span>
                      {props.text7 ?? (
                        <Fragment>
                          <span className="schedule-text125">
                            <span>See live</span>
                            <br></br>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
                <div className="schedule-element15">
                  <div className="schedule-main16">
                    <span className="schedule-time15">
                      {props.time5 ?? (
                        <Fragment>
                          <span className="schedule-text147">
                            8:00 PM - 10:00 PM GMT +1 / 10:00 PM - 12:00 AM Your
                            local time (2 Hours)
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="schedule-title16">
                      {props.title6 ?? (
                        <Fragment>
                          <span className="schedule-text120">
                            Post-event networking
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <div className="schedule-author15">
                      <img
                        alt={props.iconAlt5}
                        src={props.iconSrc5}
                        className="schedule-icon15"
                      />
                      <div className="schedule-details15">
                        <span className="schedule-name15">
                          {props.name5 ?? (
                            <Fragment>
                              <span className="schedule-text163">
                                Samantha Johnson
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <div className="schedule-point15"></div>
                        <span className="schedule-caption16">
                          {props.caption6 ?? (
                            <Fragment>
                              <span className="schedule-text142">
                                CEO, Opary
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="button schedule-button15">
                    <span>
                      {props.text8 ?? (
                        <Fragment>
                          <span className="schedule-text184">
                            <span>Connect to chat room</span>
                            <br></br>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </section>
              <section data-role="schedule-content" className="schedule-list2">
                <div className="schedule-element16">
                  <div className="schedule-main17">
                    <span className="schedule-time16">
                      {props.time6 ?? (
                        <Fragment>
                          <span className="schedule-text134">
                            3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your
                            local time (30 Minutes)
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="schedule-title17">
                      {props.title7 ?? (
                        <Fragment>
                          <span className="schedule-text204">
                            How to Lorem Ipsum.
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <div className="schedule-author16">
                      <img
                        alt={props.iconAlt6}
                        src={props.iconSrc6}
                        className="schedule-icon16"
                      />
                      <div className="schedule-details16">
                        <span className="schedule-name16">
                          {props.name6 ?? (
                            <Fragment>
                              <span className="schedule-text189">
                                Samantha Johnson
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <div className="schedule-point16"></div>
                        <span className="schedule-caption17">
                          {props.caption7 ?? (
                            <Fragment>
                              <span className="schedule-text149">
                                CEO, Opary
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="button schedule-button16">
                    <span>
                      {props.text9 ?? (
                        <Fragment>
                          <span className="schedule-text136">
                            <span>See live</span>
                            <br></br>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
                <div className="schedule-element17">
                  <div className="schedule-main18">
                    <span className="schedule-time17">
                      {props.time7 ?? (
                        <Fragment>
                          <span className="schedule-text170">
                            8:00 AM - 2:00 PM GMT +1 / 10:00 AM - 4:00 PM Your
                            local time (6 Hours)
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="schedule-title18">
                      {props.title8 ?? (
                        <Fragment>
                          <span className="schedule-text188">
                            Pre-event networking
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <div className="schedule-author17">
                      <img
                        alt={props.iconAlt7}
                        src={props.iconSrc7}
                        className="schedule-icon17"
                      />
                      <div className="schedule-details17">
                        <span className="schedule-name17">
                          {props.name7 ?? (
                            <Fragment>
                              <span className="schedule-text190">
                                Andy Smith
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <div className="schedule-point17"></div>
                        <span className="schedule-caption18">
                          {props.caption8 ?? (
                            <Fragment>
                              <span className="schedule-text195">
                                CEO, Opary
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="button schedule-button17">
                    <span>
                      {props.button1 ?? (
                        <Fragment>
                          <span className="schedule-text143">
                            Connect to chat room
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
                <div className="schedule-element18">
                  <div className="schedule-main19">
                    <span className="schedule-time18">
                      {props.time8 ?? (
                        <Fragment>
                          <span className="schedule-text144">
                            3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your
                            local time (30 Minutes)
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="schedule-title19">
                      {props.title9 ?? (
                        <Fragment>
                          <span className="schedule-text199">
                            How to Lorem Ipsum.
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <div className="schedule-author18">
                      <img
                        alt={props.iconAlt8}
                        src={props.iconSrc8}
                        className="schedule-icon18"
                      />
                      <div className="schedule-details18">
                        <span className="schedule-name18">
                          {props.name8 ?? (
                            <Fragment>
                              <span className="schedule-text155">
                                Samantha Johnson
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <div className="schedule-point18"></div>
                        <span className="schedule-caption19">
                          {props.caption9 ?? (
                            <Fragment>
                              <span className="schedule-text158">
                                CEO, Opary
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="button schedule-button18">
                    <span>
                      {props.text10 ?? (
                        <Fragment>
                          <span className="schedule-text181">
                            <span>See live</span>
                            <br></br>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </section>
              <section data-role="schedule-content" className="schedule-list3">
                <div className="schedule-element19">
                  <div className="schedule-main20">
                    <span className="schedule-time19">
                      {props.time9 ?? (
                        <Fragment>
                          <span className="schedule-text150">
                            8:00 AM - 2:00 PM GMT +1 / 10:00 AM - 4:00 PM Your
                            local time (6 Hours)
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="schedule-title20">
                      {props.title10 ?? (
                        <Fragment>
                          <span className="schedule-text193">
                            Pre-event networking
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <div className="schedule-author19">
                      <img
                        alt={props.iconAlt9}
                        src={props.iconSrc9}
                        className="schedule-icon19"
                      />
                      <div className="schedule-details19">
                        <span className="schedule-name19">
                          {props.name9 ?? (
                            <Fragment>
                              <span className="schedule-text154">
                                Andy Smith
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <div className="schedule-point19"></div>
                        <span className="schedule-caption20">
                          {props.caption10 ?? (
                            <Fragment>
                              <span className="schedule-text179">
                                CEO, Opary
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="button schedule-button19">
                    <span>
                      {props.button2 ?? (
                        <Fragment>
                          <span className="schedule-text140">
                            Connect to chat room
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
                <div className="schedule-element20">
                  <div className="schedule-main21">
                    <span className="schedule-time20">
                      {props.time10 ?? (
                        <Fragment>
                          <span className="schedule-text177">
                            3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your
                            local time (30 Minutes)
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="schedule-title21">
                      {props.title11 ?? (
                        <Fragment>
                          <span className="schedule-text156">
                            How to Lorem Ipsum.
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <div className="schedule-author20">
                      <img
                        alt={props.iconAlt10}
                        src={props.iconSrc10}
                        className="schedule-icon20"
                      />
                      <div className="schedule-details20">
                        <span className="schedule-name20">
                          {props.name10 ?? (
                            <Fragment>
                              <span className="schedule-text180">
                                Samantha Johnson
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <div className="schedule-point20"></div>
                        <span className="schedule-caption21">
                          {props.caption11 ?? (
                            <Fragment>
                              <span className="schedule-text135">
                                CEO, Opary
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="button schedule-button20">
                    <span>
                      {props.text11 ?? (
                        <Fragment>
                          <span className="schedule-text200">
                            <span>See live</span>
                            <br></br>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
                <div className="schedule-element21">
                  <div className="schedule-main22">
                    <span className="schedule-time21">
                      {props.time11 ?? (
                        <Fragment>
                          <span className="schedule-text132">
                            3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your
                            local time (30 Minutes)
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="schedule-title22">
                      {props.title12 ?? (
                        <Fragment>
                          <span className="schedule-text162">
                            How to Lorem Ipsum.
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <div className="schedule-author21">
                      <img
                        alt={props.iconAlt11}
                        src={props.iconSrc11}
                        className="schedule-icon21"
                      />
                      <div className="schedule-details21">
                        <span className="schedule-name21">
                          {props.name11 ?? (
                            <Fragment>
                              <span className="schedule-text171">
                                Samantha Johnson
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <div className="schedule-point21"></div>
                        <span className="schedule-caption22">
                          {props.caption12 ?? (
                            <Fragment>
                              <span className="schedule-text128">
                                CEO, Opary
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="button schedule-button21">
                    <span>
                      {props.text12 ?? (
                        <Fragment>
                          <span className="schedule-text151">
                            <span>See live</span>
                            <br></br>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
                <div className="schedule-element22">
                  <div className="schedule-main23">
                    <span className="schedule-time22">
                      {props.time12 ?? (
                        <Fragment>
                          <span className="schedule-text121">
                            8:00 PM - 10:00 PM GMT +1 / 10:00 PM - 12:00 AM Your
                            local time (2 Hours)
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="schedule-title23">
                      {props.title13 ?? (
                        <Fragment>
                          <span className="schedule-text207">
                            Post-event networking
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <div className="schedule-author22">
                      <img
                        alt={props.iconAlt12}
                        src={props.iconSrc12}
                        className="schedule-icon22"
                      />
                      <div className="schedule-details22">
                        <span className="schedule-name22">
                          {props.name12 ?? (
                            <Fragment>
                              <span className="schedule-text133">
                                Samantha Johnson
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <div className="schedule-point22"></div>
                        <span className="schedule-caption23">
                          {props.caption13 ?? (
                            <Fragment>
                              <span className="schedule-text205">
                                CEO, Opary
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="button schedule-button22">
                    <span>
                      {props.text13 ?? (
                        <Fragment>
                          <span className="schedule-text159">
                            <span>Connect to chat room</span>
                            <br></br>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </section>
            </div>
            <div>
              <div className="schedule-container2">
                <React.Fragment>
                  <Script>{`
// Get all tab buttons
const tabButtons = document.querySelectorAll('[data-role="schedule-select"]');
// Get all tab contents
const tabContents = document.querySelectorAll('[data-role="schedule-content"]');

// Add "tab-active" class to the first tab button
tabButtons[0].classList.add("tab-active");
// Show the first tab content
tabContents[0].style.display = "block";

tabButtons.forEach((tabButton, index) => {
  tabButton.addEventListener("click", () => {
    // Remove "tab-active" class from all tab buttons
    tabButtons.forEach((button) => {
      button.classList.remove("tab-active");
    });
    // Add "tab-active" class to the current tab button
    tabButton.classList.add("tab-active");
    // Hide all tab contents
    tabContents.forEach((tabContent) => {
      tabContent.style.display = "none";
    });
    // Show the tab content for the current tab button
    tabContents[index].style.display = "block";
  });
});
`}</Script>
                </React.Fragment>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .schedule-schedule {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 120px;
            flex-direction: column;
            padding-bottom: 200px;
            background-size: cover;
            justify-content: center;
            background-image: url('/images/grainy-1500w.webp');
          }
          .schedule-content {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .schedule-header {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .schedule-section-numeral {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .schedule-divide {
            width: 100px;
            height: 1px;
            display: flex;
            margin-top: 4px;
            align-items: center;
            flex-direction: row;
            background-color: #ffffff;
          }
          .schedule-text100 {
            color: rgb(255, 255, 255);
          }
          .schedule-heading {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .schedule-title10 {
            color: #ffffff;
            font-size: 90px;
            font-style: normal;
            font-weight: 600;
            line-height: 100px;
          }
          .schedule-caption10 {
            color: #ffffff;
            font-size: 18px;
            line-height: 27px;
          }
          .schedule-main10 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: column;
          }
          .schedule-tab-selector {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            border-bottom-width: 1px;
          }
          .schedule-text101 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 21px;
          }
          .schedule-text102 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 21px;
          }
          .schedule-text103 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 21px;
          }
          .schedule-lists {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .schedule-list1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .schedule-element10 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .schedule-main11 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .schedule-time10 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .schedule-title11 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .schedule-author10 {
            gap: var(--dl-space-space-unit);
            display: none;
            align-items: center;
            flex-direction: row;
          }
          .schedule-icon10 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .schedule-details10 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .schedule-name10 {
            width: 100%;
            font-style: normal;
            font-weight: 600;
          }
          .schedule-point10 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .schedule-caption11 {
            width: 100%;
          }
          .schedule-element11 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .schedule-main12 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .schedule-time11 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .schedule-title12 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .schedule-author11 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .schedule-icon11 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .schedule-details11 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .schedule-name11 {
            font-style: normal;
            font-weight: 600;
          }
          .schedule-point11 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .schedule-element12 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .schedule-main13 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .schedule-time12 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .schedule-title13 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .schedule-author12 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .schedule-icon12 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .schedule-details12 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .schedule-name12 {
            font-style: normal;
            font-weight: 600;
          }
          .schedule-point12 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .schedule-element13 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .schedule-main14 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .schedule-time13 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .schedule-title14 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .schedule-author13 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .schedule-icon13 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .schedule-details13 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .schedule-name13 {
            font-style: normal;
            font-weight: 600;
          }
          .schedule-point13 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .schedule-element14 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .schedule-main15 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .schedule-time14 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .schedule-title15 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .schedule-author14 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .schedule-icon14 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .schedule-details14 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .schedule-name14 {
            font-style: normal;
            font-weight: 600;
          }
          .schedule-point14 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .schedule-element15 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .schedule-main16 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .schedule-time15 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .schedule-title16 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .schedule-author15 {
            gap: var(--dl-space-space-unit);
            display: none;
            align-items: center;
            flex-direction: row;
          }
          .schedule-icon15 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .schedule-details15 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .schedule-name15 {
            font-style: normal;
            font-weight: 600;
          }
          .schedule-point15 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .schedule-list2 {
            width: 100%;
            display: none;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .schedule-element16 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .schedule-main17 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .schedule-time16 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .schedule-title17 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .schedule-author16 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .schedule-icon16 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .schedule-details16 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .schedule-name16 {
            font-style: normal;
            font-weight: 600;
          }
          .schedule-point16 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .schedule-element17 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .schedule-main18 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .schedule-time17 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .schedule-title18 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .schedule-author17 {
            gap: var(--dl-space-space-unit);
            display: none;
            align-items: center;
            flex-direction: row;
          }
          .schedule-icon17 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .schedule-details17 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .schedule-name17 {
            width: 100%;
            font-style: normal;
            font-weight: 600;
          }
          .schedule-point17 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .schedule-caption18 {
            width: 100%;
          }
          .schedule-element18 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .schedule-main19 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .schedule-time18 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .schedule-title19 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .schedule-author18 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .schedule-icon18 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .schedule-details18 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .schedule-name18 {
            font-style: normal;
            font-weight: 600;
          }
          .schedule-point18 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .schedule-list3 {
            width: 100%;
            display: none;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .schedule-element19 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .schedule-main20 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .schedule-time19 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .schedule-title20 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .schedule-author19 {
            gap: var(--dl-space-space-unit);
            display: none;
            align-items: center;
            flex-direction: row;
          }
          .schedule-icon19 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .schedule-details19 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .schedule-name19 {
            width: 100%;
            font-style: normal;
            font-weight: 600;
          }
          .schedule-point19 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .schedule-caption20 {
            width: 100%;
          }
          .schedule-element20 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .schedule-main21 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .schedule-time20 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .schedule-title21 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .schedule-author20 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .schedule-icon20 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .schedule-details20 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .schedule-name20 {
            font-style: normal;
            font-weight: 600;
          }
          .schedule-point20 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .schedule-element21 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .schedule-main22 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .schedule-time21 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .schedule-title22 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .schedule-author21 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .schedule-icon21 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .schedule-details21 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .schedule-name21 {
            font-style: normal;
            font-weight: 600;
          }
          .schedule-point21 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .schedule-element22 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .schedule-main23 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .schedule-time22 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .schedule-title23 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .schedule-author22 {
            gap: var(--dl-space-space-unit);
            display: none;
            align-items: center;
            flex-direction: row;
          }
          .schedule-icon22 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .schedule-details22 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .schedule-name22 {
            font-style: normal;
            font-weight: 600;
          }
          .schedule-point22 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .schedule-container2 {
            display: contents;
          }
          .schedule-text117 {
            display: inline-block;
          }
          .schedule-text118 {
            display: inline-block;
          }
          .schedule-text119 {
            display: inline-block;
          }
          .schedule-text120 {
            display: inline-block;
          }
          .schedule-text121 {
            display: inline-block;
          }
          .schedule-text122 {
            display: inline-block;
          }
          .schedule-text125 {
            display: inline-block;
          }
          .schedule-text128 {
            display: inline-block;
          }
          .schedule-text129 {
            display: inline-block;
          }
          .schedule-text132 {
            display: inline-block;
          }
          .schedule-text133 {
            display: inline-block;
          }
          .schedule-text134 {
            display: inline-block;
          }
          .schedule-text135 {
            display: inline-block;
          }
          .schedule-text136 {
            display: inline-block;
          }
          .schedule-text139 {
            display: inline-block;
          }
          .schedule-text140 {
            display: inline-block;
          }
          .schedule-text141 {
            display: inline-block;
          }
          .schedule-text142 {
            display: inline-block;
          }
          .schedule-text143 {
            display: inline-block;
          }
          .schedule-text144 {
            display: inline-block;
          }
          .schedule-text145 {
            display: inline-block;
          }
          .schedule-text146 {
            display: inline-block;
          }
          .schedule-text147 {
            display: inline-block;
          }
          .schedule-text148 {
            display: inline-block;
          }
          .schedule-text149 {
            display: inline-block;
          }
          .schedule-text150 {
            display: inline-block;
          }
          .schedule-text151 {
            display: inline-block;
          }
          .schedule-text154 {
            display: inline-block;
          }
          .schedule-text155 {
            display: inline-block;
          }
          .schedule-text156 {
            display: inline-block;
          }
          .schedule-text157 {
            display: inline-block;
          }
          .schedule-text158 {
            display: inline-block;
          }
          .schedule-text159 {
            display: inline-block;
          }
          .schedule-text162 {
            display: inline-block;
          }
          .schedule-text163 {
            display: inline-block;
          }
          .schedule-text164 {
            display: inline-block;
          }
          .schedule-text165 {
            display: inline-block;
          }
          .schedule-text168 {
            display: inline-block;
          }
          .schedule-text169 {
            display: inline-block;
          }
          .schedule-text170 {
            display: inline-block;
          }
          .schedule-text171 {
            display: inline-block;
          }
          .schedule-text172 {
            display: inline-block;
          }
          .schedule-text173 {
            display: inline-block;
          }
          .schedule-text174 {
            display: inline-block;
          }
          .schedule-text175 {
            display: inline-block;
          }
          .schedule-text176 {
            display: inline-block;
          }
          .schedule-text177 {
            display: inline-block;
          }
          .schedule-text178 {
            display: inline-block;
          }
          .schedule-text179 {
            display: inline-block;
          }
          .schedule-text180 {
            display: inline-block;
          }
          .schedule-text181 {
            display: inline-block;
          }
          .schedule-text184 {
            display: inline-block;
          }
          .schedule-text187 {
            display: inline-block;
          }
          .schedule-text188 {
            display: inline-block;
          }
          .schedule-text189 {
            display: inline-block;
          }
          .schedule-text190 {
            display: inline-block;
          }
          .schedule-text191 {
            display: inline-block;
          }
          .schedule-text192 {
            display: inline-block;
          }
          .schedule-text193 {
            display: inline-block;
          }
          .schedule-text194 {
            display: inline-block;
          }
          .schedule-text195 {
            display: inline-block;
          }
          .schedule-text196 {
            display: inline-block;
          }
          .schedule-text197 {
            display: inline-block;
          }
          .schedule-text198 {
            display: inline-block;
          }
          .schedule-text199 {
            display: inline-block;
          }
          .schedule-text200 {
            display: inline-block;
          }
          .schedule-text203 {
            display: inline-block;
          }
          .schedule-text204 {
            display: inline-block;
          }
          .schedule-text205 {
            display: inline-block;
          }
          .schedule-text206 {
            display: inline-block;
          }
          .schedule-text207 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .schedule-point10 {
              margin-top: 4px;
            }
            .schedule-caption11 {
              font-size: 10px;
            }
            .schedule-point11 {
              margin-top: 4px;
            }
            .schedule-caption12 {
              font-size: 10px;
            }
            .schedule-point12 {
              margin-top: 4px;
            }
            .schedule-caption13 {
              font-size: 10px;
            }
            .schedule-point13 {
              margin-top: 4px;
            }
            .schedule-caption14 {
              font-size: 10px;
            }
            .schedule-point14 {
              margin-top: 4px;
            }
            .schedule-caption15 {
              font-size: 10px;
            }
            .schedule-point15 {
              margin-top: 4px;
            }
            .schedule-caption16 {
              font-size: 10px;
            }
            .schedule-point16 {
              margin-top: 4px;
            }
            .schedule-caption17 {
              font-size: 10px;
            }
            .schedule-point17 {
              margin-top: 4px;
            }
            .schedule-caption18 {
              font-size: 10px;
            }
            .schedule-point18 {
              margin-top: 4px;
            }
            .schedule-caption19 {
              font-size: 10px;
            }
            .schedule-point19 {
              margin-top: 4px;
            }
            .schedule-caption20 {
              font-size: 10px;
            }
            .schedule-point20 {
              margin-top: 4px;
            }
            .schedule-caption21 {
              font-size: 10px;
            }
            .schedule-point21 {
              margin-top: 4px;
            }
            .schedule-caption22 {
              font-size: 10px;
            }
            .schedule-point22 {
              margin-top: 4px;
            }
            .schedule-caption23 {
              font-size: 10px;
            }
          }
          @media (max-width: 599px) {
            .schedule-schedule {
              gap: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .schedule-content {
              gap: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .schedule-divide {
              width: 50px;
            }
            .schedule-heading {
              gap: var(--dl-space-space-unit);
            }
            .schedule-title10 {
              font-size: 30px;
              line-height: 33px;
            }
            .schedule-caption10 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .schedule-tab-selector {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .schedule-tab1 {
              padding-bottom: var(--dl-space-space-unit);
            }
            .schedule-text101 {
              font-size: 16px;
            }
            .schedule-tab2 {
              padding-bottom: var(--dl-space-space-unit);
            }
            .schedule-text102 {
              font-size: 16px;
            }
            .schedule-tab3 {
              padding-bottom: var(--dl-space-space-unit);
            }
            .schedule-text103 {
              font-size: 16px;
            }
            .schedule-main11 {
              gap: var(--dl-space-space-halfunit);
            }
            .schedule-time10 {
              font-size: 10px;
            }
            .schedule-title11 {
              font-size: 18px;
            }
            .schedule-point10 {
              max-width: 20px;
              margin-top: 0px;
            }
            .schedule-caption11 {
              font-size: 10px;
            }
            .schedule-main12 {
              gap: var(--dl-space-space-halfunit);
            }
            .schedule-time11 {
              font-size: 10px;
            }
            .schedule-title12 {
              font-size: 18px;
            }
            .schedule-icon11 {
              width: 25px;
            }
            .schedule-details11 {
              align-items: center;
            }
            .schedule-name11 {
              font-size: 10px;
            }
            .schedule-point11 {
              max-width: 20px;
              margin-top: 0px;
            }
            .schedule-caption12 {
              font-size: 10px;
            }
            .schedule-main13 {
              gap: var(--dl-space-space-halfunit);
            }
            .schedule-time12 {
              font-size: 10px;
            }
            .schedule-title13 {
              font-size: 18px;
            }
            .schedule-icon12 {
              width: 25px;
            }
            .schedule-details12 {
              align-items: center;
            }
            .schedule-name12 {
              font-size: 10px;
            }
            .schedule-point12 {
              max-width: 20px;
              margin-top: 0px;
            }
            .schedule-caption13 {
              font-size: 10px;
            }
            .schedule-main14 {
              gap: var(--dl-space-space-halfunit);
            }
            .schedule-time13 {
              font-size: 10px;
            }
            .schedule-title14 {
              font-size: 18px;
            }
            .schedule-icon13 {
              width: 25px;
            }
            .schedule-details13 {
              align-items: center;
            }
            .schedule-name13 {
              font-size: 10px;
            }
            .schedule-point13 {
              max-width: 20px;
              margin-top: 0px;
            }
            .schedule-caption14 {
              font-size: 10px;
            }
            .schedule-main15 {
              gap: var(--dl-space-space-halfunit);
            }
            .schedule-time14 {
              font-size: 10px;
            }
            .schedule-title15 {
              font-size: 18px;
            }
            .schedule-icon14 {
              width: 25px;
            }
            .schedule-details14 {
              align-items: center;
            }
            .schedule-name14 {
              font-size: 10px;
            }
            .schedule-point14 {
              max-width: 20px;
              margin-top: 0px;
            }
            .schedule-caption15 {
              font-size: 10px;
            }
            .schedule-main16 {
              gap: var(--dl-space-space-halfunit);
            }
            .schedule-time15 {
              font-size: 10px;
            }
            .schedule-title16 {
              font-size: 18px;
            }
            .schedule-point15 {
              max-width: 20px;
              margin-top: 0px;
            }
            .schedule-caption16 {
              font-size: 10px;
            }
            .schedule-main17 {
              gap: var(--dl-space-space-halfunit);
            }
            .schedule-time16 {
              font-size: 10px;
            }
            .schedule-title17 {
              font-size: 18px;
            }
            .schedule-icon16 {
              width: 25px;
            }
            .schedule-details16 {
              align-items: center;
            }
            .schedule-name16 {
              font-size: 10px;
            }
            .schedule-point16 {
              max-width: 20px;
              margin-top: 0px;
            }
            .schedule-caption17 {
              font-size: 10px;
            }
            .schedule-main18 {
              gap: var(--dl-space-space-halfunit);
            }
            .schedule-time17 {
              font-size: 10px;
            }
            .schedule-title18 {
              font-size: 18px;
            }
            .schedule-point17 {
              max-width: 20px;
              margin-top: 0px;
            }
            .schedule-caption18 {
              font-size: 10px;
            }
            .schedule-main19 {
              gap: var(--dl-space-space-halfunit);
            }
            .schedule-time18 {
              font-size: 10px;
            }
            .schedule-title19 {
              font-size: 18px;
            }
            .schedule-icon18 {
              width: 25px;
            }
            .schedule-details18 {
              align-items: center;
            }
            .schedule-name18 {
              font-size: 10px;
            }
            .schedule-point18 {
              max-width: 20px;
              margin-top: 0px;
            }
            .schedule-caption19 {
              font-size: 10px;
            }
            .schedule-main20 {
              gap: var(--dl-space-space-halfunit);
            }
            .schedule-time19 {
              font-size: 10px;
            }
            .schedule-title20 {
              font-size: 18px;
            }
            .schedule-point19 {
              max-width: 20px;
              margin-top: 0px;
            }
            .schedule-caption20 {
              font-size: 10px;
            }
            .schedule-main21 {
              gap: var(--dl-space-space-halfunit);
            }
            .schedule-time20 {
              font-size: 10px;
            }
            .schedule-title21 {
              font-size: 18px;
            }
            .schedule-icon20 {
              width: 25px;
            }
            .schedule-details20 {
              align-items: center;
            }
            .schedule-name20 {
              font-size: 10px;
            }
            .schedule-point20 {
              max-width: 20px;
              margin-top: 0px;
            }
            .schedule-caption21 {
              font-size: 10px;
            }
            .schedule-main22 {
              gap: var(--dl-space-space-halfunit);
            }
            .schedule-time21 {
              font-size: 10px;
            }
            .schedule-title22 {
              font-size: 18px;
            }
            .schedule-icon21 {
              width: 25px;
            }
            .schedule-details21 {
              align-items: center;
            }
            .schedule-name21 {
              font-size: 10px;
            }
            .schedule-point21 {
              max-width: 20px;
              margin-top: 0px;
            }
            .schedule-caption22 {
              font-size: 10px;
            }
            .schedule-main23 {
              gap: var(--dl-space-space-halfunit);
            }
            .schedule-time22 {
              font-size: 10px;
            }
            .schedule-title23 {
              font-size: 18px;
            }
            .schedule-point22 {
              max-width: 20px;
              margin-top: 0px;
            }
            .schedule-caption23 {
              font-size: 10px;
            }
          }
          @media (max-width: 480px) {
            .schedule-divide {
              width: 20px;
            }
            .schedule-text100 {
              font-size: 12px;
              line-height: 13px;
            }
            .schedule-tab1 {
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .schedule-tab2 {
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .schedule-tab3 {
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .schedule-details10 {
              gap: 4px;
              flex-direction: column;
            }
            .schedule-name10 {
              font-size: 16px;
              line-height: 24px;
            }
            .schedule-point10 {
              width: 100%;
              max-width: 20px;
            }
            .schedule-button10 {
              display: none;
            }
            .schedule-author11 {
              width: 100%;
            }
            .schedule-icon11 {
              display: none;
            }
            .schedule-button11 {
              display: none;
            }
            .schedule-author12 {
              width: 100%;
            }
            .schedule-icon12 {
              display: none;
            }
            .schedule-button12 {
              display: none;
            }
            .schedule-author13 {
              width: 100%;
            }
            .schedule-icon13 {
              display: none;
            }
            .schedule-button13 {
              display: none;
            }
            .schedule-author14 {
              width: 100%;
            }
            .schedule-icon14 {
              display: none;
            }
            .schedule-button14 {
              display: none;
            }
            .schedule-details15 {
              gap: 4px;
              flex-direction: column;
            }
            .schedule-name15 {
              font-size: 16px;
              line-height: 24px;
            }
            .schedule-point15 {
              width: 100%;
              max-width: 20px;
            }
            .schedule-button15 {
              display: none;
            }
            .schedule-author16 {
              width: 100%;
            }
            .schedule-icon16 {
              display: none;
            }
            .schedule-button16 {
              display: none;
            }
            .schedule-details17 {
              gap: 4px;
              flex-direction: column;
            }
            .schedule-name17 {
              font-size: 16px;
              line-height: 24px;
            }
            .schedule-point17 {
              width: 100%;
              max-width: 20px;
            }
            .schedule-button17 {
              display: none;
            }
            .schedule-author18 {
              width: 100%;
            }
            .schedule-icon18 {
              display: none;
            }
            .schedule-button18 {
              display: none;
            }
            .schedule-details19 {
              gap: 4px;
              flex-direction: column;
            }
            .schedule-name19 {
              font-size: 16px;
              line-height: 24px;
            }
            .schedule-point19 {
              width: 100%;
              max-width: 20px;
            }
            .schedule-button19 {
              display: none;
            }
            .schedule-author20 {
              width: 100%;
            }
            .schedule-icon20 {
              display: none;
            }
            .schedule-button20 {
              display: none;
            }
            .schedule-author21 {
              width: 100%;
            }
            .schedule-icon21 {
              display: none;
            }
            .schedule-button21 {
              display: none;
            }
            .schedule-details22 {
              gap: 4px;
              flex-direction: column;
            }
            .schedule-name22 {
              font-size: 16px;
              line-height: 24px;
            }
            .schedule-point22 {
              width: 100%;
              max-width: 20px;
            }
            .schedule-button22 {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Schedule.defaultProps = {
  iconSrc:
    'https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&ixlib=rb-4.0.3&w=200',
  title2: undefined,
  time3: undefined,
  name4: undefined,
  title6: undefined,
  time12: undefined,
  text5: undefined,
  text7: undefined,
  caption12: undefined,
  iconAlt7: 'image',
  iconSrc2:
    'https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&ixlib=rb-4.0.3&w=200',
  text6: undefined,
  time11: undefined,
  name12: undefined,
  iconAlt2: 'image',
  time6: undefined,
  iconSrc7:
    'https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&ixlib=rb-4.0.3&w=200',
  caption11: undefined,
  text9: undefined,
  caption5: undefined,
  iconSrc10:
    'https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&ixlib=rb-4.0.3&w=200',
  button2: undefined,
  name2: undefined,
  caption6: undefined,
  button1: undefined,
  iconAlt3: 'image',
  iconSrc8:
    'https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&ixlib=rb-4.0.3&w=200',
  time8: undefined,
  name3: undefined,
  caption2: undefined,
  time5: undefined,
  button: undefined,
  caption7: undefined,
  time9: undefined,
  text12: undefined,
  name9: undefined,
  name8: undefined,
  title11: undefined,
  title1: undefined,
  caption9: undefined,
  iconSrc9:
    'https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&ixlib=rb-4.0.3&w=200',
  iconAlt4: 'image',
  text13: undefined,
  iconSrc1:
    'https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&ixlib=rb-4.0.3&w=200',
  title12: undefined,
  name5: undefined,
  text3: undefined,
  text4: undefined,
  iconAlt10: 'image',
  caption1: undefined,
  title3: undefined,
  time7: undefined,
  name11: undefined,
  name1: undefined,
  iconAlt6: 'image',
  time1: undefined,
  caption3: undefined,
  title: undefined,
  iconAlt5: 'image',
  iconSrc11:
    'https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&ixlib=rb-4.0.3&w=200',
  text2: undefined,
  time10: undefined,
  caption: undefined,
  caption10: undefined,
  name10: undefined,
  text10: undefined,
  text8: undefined,
  time: undefined,
  title8: undefined,
  name6: undefined,
  name7: undefined,
  iconAlt8: 'image',
  text: undefined,
  caption4: undefined,
  title10: undefined,
  time4: undefined,
  iconAlt11: 'image',
  iconSrc12:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHBvdHJhaXR8ZW58MHx8fHwxNjcxNDg1OTU2&ixlib=rb-4.0.3&w=200',
  iconAlt12: 'image',
  caption8: undefined,
  iconAlt: 'image',
  name: undefined,
  title5: undefined,
  title4: undefined,
  iconAlt1: 'image',
  iconSrc3:
    'https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&ixlib=rb-4.0.3&w=200',
  title9: undefined,
  text11: undefined,
  time2: undefined,
  title7: undefined,
  caption13: undefined,
  iconSrc4:
    'https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&ixlib=rb-4.0.3&w=200',
  iconSrc5:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHBvdHJhaXR8ZW58MHx8fHwxNjcxNDg1OTU2&ixlib=rb-4.0.3&w=200',
  text1: undefined,
  iconAlt9: 'image',
  title13: undefined,
  iconSrc6:
    'https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&ixlib=rb-4.0.3&w=200',
}

Schedule.propTypes = {
  iconSrc: PropTypes.string,
  title2: PropTypes.element,
  time3: PropTypes.element,
  name4: PropTypes.element,
  title6: PropTypes.element,
  time12: PropTypes.element,
  text5: PropTypes.element,
  text7: PropTypes.element,
  caption12: PropTypes.element,
  iconAlt7: PropTypes.string,
  iconSrc2: PropTypes.string,
  text6: PropTypes.element,
  time11: PropTypes.element,
  name12: PropTypes.element,
  iconAlt2: PropTypes.string,
  time6: PropTypes.element,
  iconSrc7: PropTypes.string,
  caption11: PropTypes.element,
  text9: PropTypes.element,
  caption5: PropTypes.element,
  iconSrc10: PropTypes.string,
  button2: PropTypes.element,
  name2: PropTypes.element,
  caption6: PropTypes.element,
  button1: PropTypes.element,
  iconAlt3: PropTypes.string,
  iconSrc8: PropTypes.string,
  time8: PropTypes.element,
  name3: PropTypes.element,
  caption2: PropTypes.element,
  time5: PropTypes.element,
  button: PropTypes.element,
  caption7: PropTypes.element,
  time9: PropTypes.element,
  text12: PropTypes.element,
  name9: PropTypes.element,
  name8: PropTypes.element,
  title11: PropTypes.element,
  title1: PropTypes.element,
  caption9: PropTypes.element,
  iconSrc9: PropTypes.string,
  iconAlt4: PropTypes.string,
  text13: PropTypes.element,
  iconSrc1: PropTypes.string,
  title12: PropTypes.element,
  name5: PropTypes.element,
  text3: PropTypes.element,
  text4: PropTypes.element,
  iconAlt10: PropTypes.string,
  caption1: PropTypes.element,
  title3: PropTypes.element,
  time7: PropTypes.element,
  name11: PropTypes.element,
  name1: PropTypes.element,
  iconAlt6: PropTypes.string,
  time1: PropTypes.element,
  caption3: PropTypes.element,
  title: PropTypes.element,
  iconAlt5: PropTypes.string,
  iconSrc11: PropTypes.string,
  text2: PropTypes.element,
  time10: PropTypes.element,
  caption: PropTypes.element,
  caption10: PropTypes.element,
  name10: PropTypes.element,
  text10: PropTypes.element,
  text8: PropTypes.element,
  time: PropTypes.element,
  title8: PropTypes.element,
  name6: PropTypes.element,
  name7: PropTypes.element,
  iconAlt8: PropTypes.string,
  text: PropTypes.element,
  caption4: PropTypes.element,
  title10: PropTypes.element,
  time4: PropTypes.element,
  iconAlt11: PropTypes.string,
  iconSrc12: PropTypes.string,
  iconAlt12: PropTypes.string,
  caption8: PropTypes.element,
  iconAlt: PropTypes.string,
  name: PropTypes.element,
  title5: PropTypes.element,
  title4: PropTypes.element,
  iconAlt1: PropTypes.string,
  iconSrc3: PropTypes.string,
  title9: PropTypes.element,
  text11: PropTypes.element,
  time2: PropTypes.element,
  title7: PropTypes.element,
  caption13: PropTypes.element,
  iconSrc4: PropTypes.string,
  iconSrc5: PropTypes.string,
  text1: PropTypes.element,
  iconAlt9: PropTypes.string,
  title13: PropTypes.element,
  iconSrc6: PropTypes.string,
}

export default Schedule
