import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

const EventsDetails = (props) => {
  const [isTermsVisible, setIsTermsVisible] = useState(true)
  const [isRefundVisible, setIsRefundVisible] = useState(false)
  const [isPrivacyVisible, setIsPrivacyVisible] = useState(false)
  return (
    <>
      <div className="events-details-container1 thq-section-padding">
        <div className="events-details-max-width UbuntuLight-14 thq-flex-column thq-section-max-width">
          <div className="events-details-container2 thq-flex-row thq-section-max-width">
            {isTermsVisible && (
              <button
                name="Wedding &amp; Receptions"
                onClick={() => {
                  setIsPrivacyVisible(false)
                  setIsTermsVisible(true)
                  setIsRefundVisible(false)
                }}
                className="events-details-button1 thq-button-filled"
              >
                <span className="events-details-text10">
                  {props.button ?? (
                    <Fragment>
                      <span className="events-details-text47">
                        Weddings &amp; Receptions
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            )}
            {!isTermsVisible && (
              <button
                onClick={() => {
                  setIsPrivacyVisible(false)
                  setIsTermsVisible(true)
                  setIsRefundVisible(false)
                }}
                className="thq-button-outline"
              >
                <span className="events-details-text11">
                  {props.button ?? (
                    <Fragment>
                      <span className="events-details-text47">
                        Weddings &amp; Receptions
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            )}
            {!isPrivacyVisible && (
              <button
                onClick={() => {
                  setIsTermsVisible(false)
                  setIsRefundVisible(false)
                  setIsPrivacyVisible(true)
                }}
                className="events-details-button3 thq-button-outline"
              >
                <span className="events-details-text12">
                  {props.button1 ?? (
                    <Fragment>
                      <span className="events-details-text26">
                        Engagement Ceremonies
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            )}
            {isPrivacyVisible && (
              <button
                onClick={() => {
                  setIsPrivacyVisible(true)
                  setIsTermsVisible(false)
                  setIsRefundVisible(false)
                }}
                className="events-details-button4 thq-button-filled"
              >
                <span className="events-details-text13">
                  {props.button1 ?? (
                    <Fragment>
                      <span className="events-details-text26">
                        Engagement Ceremonies
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            )}
            {!isRefundVisible && (
              <button
                onClick={() => {
                  setIsPrivacyVisible(false)
                  setIsRefundVisible(true)
                  setIsTermsVisible(false)
                }}
                className="events-details-button5 thq-button-outline"
              >
                <span className="events-details-text14">
                  {props.button2 ?? (
                    <Fragment>
                      <span className="events-details-text31">
                        Pre-Wedding Functions
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            )}
            {isRefundVisible && (
              <button
                onClick={() => {
                  setIsPrivacyVisible(false)
                  setIsTermsVisible(false)
                  setIsRefundVisible(true)
                }}
                className="events-details-button6 thq-button-filled"
              >
                <span className="events-details-text15">
                  {props.button2 ?? (
                    <Fragment>
                      <span className="events-details-text31">
                        Pre-Wedding Functions
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            )}
          </div>
          <div className="events-details-container3 UbuntuLight-14 thq-flex-column">
            {isTermsVisible && (
              <div
                data-thq-animate-on-reveal="true"
                animation="fadeIn"
                duration="2000ms"
                delay="0s"
                direction="normal"
                easing="ease"
                iteration="1"
                className="events-details-container4"
              >
                <ul className="UbuntuLight-14 thq-flex-column">
                  <li className="events-details-li10 UbuntuLight-14 thq-flex-column list-item">
                    <h2 className="events-details-heading7 h2 thq-heading-2">
                      {props.heading7 ?? (
                        <Fragment>
                          <span className="events-details-text21">
                            &quot;Where Dreams Meet Reality: Crafting
                            Unforgettable Weddings &amp; Receptions&quot;
                          </span>
                        </Fragment>
                      )}
                    </h2>
                    <p className="events-details-content7 thq-body-small">
                      {props.content7 ?? (
                        <Fragment>
                          <span className="events-details-text20">
                            Your wedding day marks the beginning of a beautiful
                            journey, and at Marigold Celebration Banquet Hall,
                            we are dedicated to making every moment of it
                            extraordinary. Our venue is designed to be the
                            perfect backdrop for your celebration, whether
                            you&apos;re planning an elegant traditional wedding
                            or a chic, contemporary reception. We work
                            tirelessly to bring your vision to life, ensuring
                            your day is as special as the love you share.
                          </span>
                        </Fragment>
                      )}
                    </p>
                    <ul className="events-details-ul2 UbuntuLight-14 thq-flex-column">
                      <li className="events-details-li11 list-item">
                        <h3 className="events-details-heading8 thq-heading-3">
                          {props.heading8 ?? (
                            <Fragment>
                              <span className="events-details-text22">
                                Tailored Decor
                              </span>
                            </Fragment>
                          )}
                        </h3>
                        <p className="events-details-content8 thq-body-small">
                          {props.content2 ?? (
                            <Fragment>
                              <span className="events-details-text16">
                                Our venue is designed to provide a welcoming and
                                elegant atmosphere that reflects the excitement
                                of this special day. From refined decor choices
                                to soft, romantic lighting, we create an
                                environment that mirrors your unique love story.
                              </span>
                            </Fragment>
                          )}
                        </p>
                      </li>
                      <li className="events-details-li12 list-item">
                        <h3 className="events-details-heading91 thq-heading-3">
                          {props.heading9 ?? (
                            <Fragment>
                              <span className="events-details-text35">
                                Gourmet Catering
                              </span>
                            </Fragment>
                          )}
                        </h3>
                        <p className="events-details-content91 thq-body-small">
                          {props.content9 ?? (
                            <Fragment>
                              <span className="events-details-text39">
                                Delight your guests with a culinary journey
                                crafted by our talented chefs. Our diverse menu
                                options include everything from classic wedding
                                feasts to modern fusion cuisines, ensuring
                                there’s something to suit every palate. Whether
                                you prefer a grand buffet or an exquisite plated
                                dinner, our catering service will leave a
                                lasting impression.
                              </span>
                            </Fragment>
                          )}
                        </p>
                      </li>
                      <li className="events-details-li13 list-item">
                        <h3 className="events-details-heading92 thq-heading-3">
                          {props.heading91 ?? (
                            <Fragment>
                              <span className="events-details-text49">
                                Seamless Event Management
                              </span>
                            </Fragment>
                          )}
                        </h3>
                        <p className="events-details-content92 thq-body-small">
                          {props.content91 ?? (
                            <Fragment>
                              <span className="events-details-text34">
                                We understand that your wedding day should be
                                stress-free, and our experienced event
                                coordinators are here to ensure everything runs
                                smoothly. From planning the flow of the ceremony
                                to overseeing the reception, we handle all the
                                details so you can focus on enjoying every
                                moment. Our commitment is to provide flawless
                                execution, ensuring your celebration is
                                everything you’ve imagined and more.
                              </span>
                            </Fragment>
                          )}
                        </p>
                      </li>
                      <li className="events-details-li14 list-item">
                        <h3 className="events-details-heading93 thq-heading-3">
                          {props.heading911 ?? (
                            <Fragment>
                              <span className="events-details-text36">
                                Versatile Venue Options
                              </span>
                            </Fragment>
                          )}
                        </h3>
                        <p className="events-details-content93 thq-body-small">
                          {props.content911 ?? (
                            <Fragment>
                              <span className="events-details-text33">
                                Our expansive banquet hall can be transformed to
                                suit any style, from intimate gatherings to
                                grand celebrations. Equipped with cutting-edge
                                sound and lighting technology, luxurious seating
                                arrangements, and an inviting atmosphere, our
                                venue offers everything needed to make your
                                wedding day unforgettable.
                              </span>
                            </Fragment>
                          )}
                        </p>
                      </li>
                      <li className="events-details-li15 list-item">
                        <h3 className="events-details-heading94 thq-heading-3">
                          {props.heading9111 ?? (
                            <Fragment>
                              <span className="events-details-text52">
                                Customized Packages
                              </span>
                            </Fragment>
                          )}
                        </h3>
                        <p className="events-details-content94 thq-body-small">
                          {props.content9111 ?? (
                            <Fragment>
                              <span className="events-details-text24">
                                At Marigold Celebration, we believe every couple
                                is unique, and so is every wedding. We offer a
                                variety of customizable packages that allow you
                                to select the services you need—from decor and
                                catering to entertainment and
                                photography—tailoring the entire event to your
                                vision, needs, and budget.
                              </span>
                            </Fragment>
                          )}
                        </p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
            {isPrivacyVisible && (
              <div
                data-thq-animate-on-reveal="true"
                animation="fadeIn"
                duration="2000ms"
                delay="0s"
                direction="normal"
                easing="ease"
                iteration="1"
                className="events-details-container5"
              >
                <ul className="UbuntuLight-14 thq-flex-column">
                  <li className="events-details-li16 UbuntuLight-14 thq-flex-column list-item">
                    <h1 className="events-details-heading1 h2 thq-heading-2">
                      {props.heading1 ?? (
                        <Fragment>
                          <span className="events-details-text37">
                            &quot;A Perfect Beginning to Your Forever: Celebrate
                            Your Engagement at Marigold Celebration&quot;
                          </span>
                        </Fragment>
                      )}
                    </h1>
                    <span className="events-details-content1 thq-body-small">
                      {props.content1 ?? (
                        <Fragment>
                          <span className="events-details-text51">
                            Celebrate the start of your lifelong journey
                            together at Marigold Celebration Banquet Hall. Our
                            sophisticated venue offers an intimate and
                            unforgettable setting for your engagement ceremony,
                            where you can share this joyous moment with your
                            nearest and dearest.
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <ul className="events-details-ul4 UbuntuLight-14 thq-flex-column">
                      <li className="events-details-li17 list-item">
                        <h1 className="events-details-heading2 thq-heading-3">
                          {props.heading2 ?? (
                            <Fragment>
                              <span className="events-details-text17">
                                Charming Atmosphere
                              </span>
                            </Fragment>
                          )}
                        </h1>
                        <p className="events-details-content2 thq-body-small">
                          {props.content2 ?? (
                            <Fragment>
                              <span className="events-details-text16">
                                Our venue is designed to provide a welcoming and
                                elegant atmosphere that reflects the excitement
                                of this special day. From refined decor choices
                                to soft, romantic lighting, we create an
                                environment that mirrors your unique love story.
                              </span>
                            </Fragment>
                          )}
                        </p>
                      </li>
                      <li className="events-details-li18 list-item">
                        <h1 className="events-details-heading3 thq-heading-3">
                          {props.heading3 ?? (
                            <Fragment>
                              <span className="events-details-text41">
                                Custom Decor
                              </span>
                            </Fragment>
                          )}
                        </h1>
                        <span className="events-details-content3 thq-body-small">
                          {props.content3 ?? (
                            <Fragment>
                              <span className="events-details-text29">
                                Understanding the importance of this milestone,
                                we collaborate closely with you to design a
                                decor theme that resonates with your vision.
                                Whether it’s a delicate floral display or a
                                contemporary stage design, we ensure every
                                detail is tailored to your taste, making your
                                engagement ceremony both beautiful and
                                memorable.
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </li>
                      <li className="events-details-li19 list-item">
                        <h1 className="events-details-heading4 thq-heading-3">
                          {props.heading4 ?? (
                            <Fragment>
                              <span className="events-details-text38">
                                Delicious Catering
                              </span>
                            </Fragment>
                          )}
                        </h1>
                        <span className="events-details-content4 thq-body-small">
                          {props.content4 ?? (
                            <Fragment>
                              <span className="events-details-text50">
                                Savor exquisite dishes with our personalized
                                catering services, carefully crafted by our
                                expert chefs. We provide a curated selection of
                                appetizers, main courses, and desserts, offering
                                a culinary experience that complements your
                                celebration and delights your guests.
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </li>
                      <li className="events-details-li20 list-item">
                        <h1 className="events-details-heading5 thq-heading-3">
                          {props.heading5 ?? (
                            <Fragment>
                              <span className="events-details-text53">
                                Effortless Planning
                              </span>
                            </Fragment>
                          )}
                        </h1>
                        <span className="events-details-content5 thq-body-small">
                          {props.content5 ?? (
                            <Fragment>
                              <span className="events-details-text46">
                                Our experienced event coordinators are committed
                                to flawless execution, handling every aspect of
                                your engagement ceremony so that you can focus
                                on making memories. From initial planning to the
                                final farewell, we ensure your event runs
                                smoothly and effortlessly.
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </li>
                      <li className="events-details-li21 list-item">
                        <h1 className="events-details-heading6 thq-heading-3">
                          {props.heading6 ?? (
                            <Fragment>
                              <span className="events-details-text19">
                                Flexible Event Options
                              </span>
                            </Fragment>
                          )}
                        </h1>
                        <span className="events-details-content6 thq-body-small">
                          {props.content6 ?? (
                            <Fragment>
                              <span className="events-details-text44">
                                Whether you envision a traditional engagement or
                                a modern celebration, we offer customizable
                                packages and adaptable venue layouts to suit
                                your preferences. Our versatile spaces can
                                accommodate both intimate and grand gatherings,
                                providing the perfect backdrop for your
                                engagement celebration.
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
            {isRefundVisible && (
              <div
                data-thq-animate-on-reveal="true"
                animation="fadeIn"
                duration="2000ms"
                delay="0s"
                direction="normal"
                easing="ease"
                iteration="1"
                className="events-details-container6"
              >
                <ul className="UbuntuLight-14 thq-flex-column">
                  <li className="events-details-li22 UbuntuLight-14 thq-flex-column list-item">
                    <h1 className="events-details-heading10 h2 thq-heading-2">
                      {props.heading10 ?? (
                        <Fragment>
                          <span className="events-details-text18">
                            &quot;Create Unforgettable Memories with Pre-Wedding
                            Celebrations at Marigold Celebration&quot;
                          </span>
                        </Fragment>
                      )}
                    </h1>
                    <span className="events-details-content10 thq-body-small">
                      {props.content10 ?? (
                        <Fragment>
                          <span className="events-details-text40">
                            Begin your wedding journey with vibrant and
                            memorable pre-wedding events at Marigold Celebration
                            Banquet Hall. Our versatile venue offers an ideal
                            setting for all your pre-wedding functions,
                            including Mehendi, Haldi, and Sangeet, blending
                            tradition with contemporary elegance.
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <ul className="events-details-ul6 UbuntuLight-14 thq-flex-column">
                      <li className="events-details-li23 list-item">
                        <h1 className="events-details-heading11 thq-heading-3">
                          {props.heading11 ?? (
                            <Fragment>
                              <span className="events-details-text32">
                                Lively Mehendi &amp; Haldi Ceremonies
                              </span>
                            </Fragment>
                          )}
                        </h1>
                        <span className="events-details-content11 thq-body-small">
                          {props.content11 ?? (
                            <Fragment>
                              <span className="events-details-text30">
                                Our beautifully designed spaces provide a
                                vibrant atmosphere for your Mehendi and Haldi
                                ceremonies. From colorful decor and floral
                                accents to thematic setups, we craft a joyful
                                environment where family and friends can gather
                                to celebrate these treasured rituals in style.
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </li>
                      <li className="events-details-li24 list-item">
                        <h1 className="events-details-heading12 thq-heading-3">
                          {props.heading12 ?? (
                            <Fragment>
                              <span className="events-details-text27">
                                Energetic Sangeet Nights
                              </span>
                            </Fragment>
                          )}
                        </h1>
                        <span className="events-details-content12 thq-body-small">
                          {props.content12 ?? (
                            <Fragment>
                              <span className="events-details-text23">
                                Make your Sangeet a night to remember in our
                                spacious hall, designed to host lively dance
                                performances and musical festivities. With a
                                fully equipped stage, professional sound
                                systems, and customizable lighting, we create
                                the perfect ambiance for a high-energy evening
                                of celebration. Whether you prefer traditional
                                or modern elements, our venue adapts seamlessly
                                to your vision.
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </li>
                      <li className="events-details-li25 list-item">
                        <h1 className="events-details-heading131 thq-heading-3">
                          {props.heading13 ?? (
                            <Fragment>
                              <span className="events-details-text43">
                                Tailored Decor &amp; Customization
                              </span>
                            </Fragment>
                          )}
                        </h1>
                        <span className="events-details-content131 thq-body-small">
                          {props.content13 ?? (
                            <Fragment>
                              <span className="events-details-text42">
                                Every couple has their unique style, and we work
                                closely with you to bring your ideas to life.
                                Our experienced in-house decor team ensures that
                                the venue is beautifully set up according to
                                your theme, whether it&apos;s classic Indian
                                motifs or modern chic designs, elevating the
                                entire celebration.
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </li>
                      <li className="events-details-li26 list-item">
                        <h1 className="events-details-heading132 thq-heading-3">
                          {props.heading131 ?? (
                            <Fragment>
                              <span className="events-details-text48">
                                Exceptional Catering Services
                              </span>
                            </Fragment>
                          )}
                        </h1>
                        <span className="events-details-content132 thq-body-small">
                          {props.content131 ?? (
                            <Fragment>
                              <span className="events-details-text25">
                                Delight your guests with a tailored menu,
                                featuring a diverse selection of dishes. Our
                                expert chefs prepare everything from regional
                                favorites to international delicacies, ensuring
                                that every bite complements the festive spirit
                                of your pre-wedding functions.
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </li>
                      <li className="events-details-li27 list-item">
                        <h1 className="events-details-heading133 thq-heading-3">
                          {props.heading1311 ?? (
                            <Fragment>
                              <span className="events-details-text28">
                                Seamless Event Planning
                              </span>
                            </Fragment>
                          )}
                        </h1>
                        <span className="events-details-content133 thq-body-small">
                          {props.content1311 ?? (
                            <Fragment>
                              <span className="events-details-text45">
                                With our dedicated event coordinators, you can
                                rest assured that every detail is handled, from
                                setup to execution. We take care of all
                                logistics, so you can focus on enjoying the
                                moment with your loved ones, making these
                                pre-wedding events as stress-free as possible.
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .events-details-container1 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .events-details-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .events-details-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .events-details-button1 {
            fill: var(--dl-color-primary-richblue);
            color: var(--dl-color-primary-richblue);
            text-align: left;
            font-family: 'Ubuntu';
          }
          .events-details-text10 {
            font-style: normal;
            font-weight: 500;
            line-height: 1.6;
          }
          .events-details-text11 {
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 400;
            line-height: 1.6;
          }
          .events-details-button3 {
            font-family: 'Ubuntu';
          }
          .events-details-text12 {
            font-style: normal;
            font-weight: 400;
            line-height: 1.6;
          }
          .events-details-button4 {
            fill: var(--dl-color-primary-richblue);
            color: var(--dl-color-primary-richblue);
            text-align: left;
          }
          .events-details-text13 {
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 500;
            line-height: 1.6;
          }
          .events-details-button5 {
            font-family: 'Ubuntu';
          }
          .events-details-text14 {
            font-style: normal;
            font-weight: 400;
            line-height: 1.6;
          }
          .events-details-button6 {
            fill: var(--dl-color-primary-richblue);
            color: var(--dl-color-primary-richblue);
            text-align: left;
          }
          .events-details-text15 {
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 500;
            line-height: 1.6;
          }
          .events-details-container3 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .events-details-container4 {
            align-self: stretch;
            align-items: flex-start;
          }
          .events-details-li10 {
            align-items: flex-start;
          }
          .events-details-heading7 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 18px;
            align-self: center;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .events-details-content7 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 400;
            line-height: 1.4;
          }
          .events-details-ul2 {
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
          }
          .events-details-li11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
          }
          .events-details-heading8 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.8;
          }
          .events-details-content8 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
          }
          .events-details-li12 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
          }
          .events-details-heading91 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.8;
          }
          .events-details-content91 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
          }
          .events-details-li13 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
          }
          .events-details-heading92 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.8;
          }
          .events-details-content92 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
          }
          .events-details-li14 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
          }
          .events-details-heading93 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.8;
          }
          .events-details-content93 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
          }
          .events-details-li15 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
          }
          .events-details-heading94 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.8;
          }
          .events-details-content94 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
          }
          .events-details-container5 {
            align-self: stretch;
            align-items: flex-start;
          }
          .events-details-li16 {
            align-items: flex-start;
          }
          .events-details-heading1 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 18px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .events-details-content1 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
          }
          .events-details-ul4 {
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
          }
          .events-details-li17 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
          }
          .events-details-heading2 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.8;
          }
          .events-details-content2 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
          }
          .events-details-li18 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
          }
          .events-details-heading3 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.8;
          }
          .events-details-content3 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
          }
          .events-details-li19 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
          }
          .events-details-heading4 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.8;
          }
          .events-details-content4 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
          }
          .events-details-li20 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
          }
          .events-details-heading5 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.8;
          }
          .events-details-content5 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
          }
          .events-details-li21 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
          }
          .events-details-heading6 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.8;
          }
          .events-details-content6 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
          }
          .events-details-container6 {
            align-self: stretch;
            align-items: flex-start;
          }
          .events-details-li22 {
            align-items: flex-start;
          }
          .events-details-heading10 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 18px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .events-details-content10 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
          }
          .events-details-ul6 {
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
          }
          .events-details-li23 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
          }
          .events-details-heading11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.8;
          }
          .events-details-content11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
          }
          .events-details-li24 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
          }
          .events-details-heading12 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.8;
          }
          .events-details-content12 {
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
          }
          .events-details-li25 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
          }
          .events-details-heading131 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.8;
          }
          .events-details-content131 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
          }
          .events-details-li26 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
          }
          .events-details-heading132 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.8;
          }
          .events-details-content132 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
          }
          .events-details-li27 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-family: 'Ubuntu';
          }
          .events-details-heading133 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.8;
          }
          .events-details-content133 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            line-height: 1.4;
          }
          .events-details-text16 {
            display: inline-block;
          }
          .events-details-text17 {
            display: inline-block;
          }
          .events-details-text18 {
            display: inline-block;
          }
          .events-details-text19 {
            display: inline-block;
          }
          .events-details-text20 {
            display: inline-block;
          }
          .events-details-text21 {
            display: inline-block;
          }
          .events-details-text22 {
            display: inline-block;
          }
          .events-details-text23 {
            display: inline-block;
          }
          .events-details-text24 {
            display: inline-block;
          }
          .events-details-text25 {
            display: inline-block;
          }
          .events-details-text26 {
            display: inline-block;
          }
          .events-details-text27 {
            display: inline-block;
          }
          .events-details-text28 {
            display: inline-block;
          }
          .events-details-text29 {
            display: inline-block;
          }
          .events-details-text30 {
            display: inline-block;
          }
          .events-details-text31 {
            display: inline-block;
          }
          .events-details-text32 {
            display: inline-block;
          }
          .events-details-text33 {
            display: inline-block;
          }
          .events-details-text34 {
            display: inline-block;
          }
          .events-details-text35 {
            display: inline-block;
          }
          .events-details-text36 {
            display: inline-block;
          }
          .events-details-text37 {
            display: inline-block;
          }
          .events-details-text38 {
            display: inline-block;
          }
          .events-details-text39 {
            display: inline-block;
          }
          .events-details-text40 {
            display: inline-block;
          }
          .events-details-text41 {
            display: inline-block;
          }
          .events-details-text42 {
            display: inline-block;
          }
          .events-details-text43 {
            display: inline-block;
          }
          .events-details-text44 {
            display: inline-block;
          }
          .events-details-text45 {
            display: inline-block;
          }
          .events-details-text46 {
            display: inline-block;
          }
          .events-details-text47 {
            display: inline-block;
          }
          .events-details-text48 {
            display: inline-block;
          }
          .events-details-text49 {
            display: inline-block;
          }
          .events-details-text50 {
            display: inline-block;
          }
          .events-details-text51 {
            display: inline-block;
          }
          .events-details-text52 {
            display: inline-block;
          }
          .events-details-text53 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .events-details-ul2 {
              padding-left: var(--dl-space-space-threeunits);
            }
            .events-details-ul4 {
              padding-left: var(--dl-space-space-threeunits);
            }
            .events-details-ul6 {
              padding-left: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 599px) {
            .events-details-container2 {
              gap: var(--dl-space-space-halfunit);
              padding-top: var(--dl-space-space-halfunit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .events-details-ul2 {
              padding-left: var(--dl-space-space-oneandhalfunits);
            }
            .events-details-ul4 {
              padding-left: var(--dl-space-space-oneandhalfunits);
            }
            .events-details-ul6 {
              padding-left: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .events-details-container2 {
              align-items: stretch;
              flex-direction: column;
            }
            .events-details-ul2 {
              padding-left: var(--dl-space-space-oneandhalfunits);
            }
            .events-details-ul4 {
              padding-left: var(--dl-space-space-oneandhalfunits);
            }
            .events-details-ul6 {
              padding-left: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

EventsDetails.defaultProps = {
  content2: undefined,
  heading2: undefined,
  heading10: undefined,
  heading6: undefined,
  content7: undefined,
  heading7: undefined,
  heading8: undefined,
  content12: undefined,
  content9111: undefined,
  content131: undefined,
  button1: undefined,
  heading12: undefined,
  heading1311: undefined,
  content3: undefined,
  content11: undefined,
  button2: undefined,
  heading11: undefined,
  content911: undefined,
  content91: undefined,
  heading9: undefined,
  heading911: undefined,
  heading1: undefined,
  heading4: undefined,
  content9: undefined,
  content10: undefined,
  heading3: undefined,
  content13: undefined,
  heading13: undefined,
  content6: undefined,
  content1311: undefined,
  content5: undefined,
  button: undefined,
  heading131: undefined,
  heading91: undefined,
  content4: undefined,
  content1: undefined,
  heading9111: undefined,
  heading5: undefined,
}

EventsDetails.propTypes = {
  content2: PropTypes.element,
  heading2: PropTypes.element,
  heading10: PropTypes.element,
  heading6: PropTypes.element,
  content7: PropTypes.element,
  heading7: PropTypes.element,
  heading8: PropTypes.element,
  content12: PropTypes.element,
  content9111: PropTypes.element,
  content131: PropTypes.element,
  button1: PropTypes.element,
  heading12: PropTypes.element,
  heading1311: PropTypes.element,
  content3: PropTypes.element,
  content11: PropTypes.element,
  button2: PropTypes.element,
  heading11: PropTypes.element,
  content911: PropTypes.element,
  content91: PropTypes.element,
  heading9: PropTypes.element,
  heading911: PropTypes.element,
  heading1: PropTypes.element,
  heading4: PropTypes.element,
  content9: PropTypes.element,
  content10: PropTypes.element,
  heading3: PropTypes.element,
  content13: PropTypes.element,
  heading13: PropTypes.element,
  content6: PropTypes.element,
  content1311: PropTypes.element,
  content5: PropTypes.element,
  button: PropTypes.element,
  heading131: PropTypes.element,
  heading91: PropTypes.element,
  content4: PropTypes.element,
  content1: PropTypes.element,
  heading9111: PropTypes.element,
  heading5: PropTypes.element,
}

export default EventsDetails
