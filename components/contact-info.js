import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const ContactInfo = (props) => {
  return (
    <>
      <div
        className={`contact-info-container1 thq-section-padding ${props.rootClassName} `}
      >
        <div className="contact-info-max-width thq-section-max-width">
          <div className="contact-info-section-title">
            <div className="contact-info-content1">
              <h2 className="contact-info-text10 h2 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="contact-info-text24">
                      Contact MariGold Celebration.
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="contact-info-text11 thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="contact-info-text26">
                      For inquiries or bookings, please contact us using the
                      information below.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="contact-info-content2 thq-flex-row">
            <div className="contact-info-content3">
              <div className="contact-info-content4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="contact-info-icon10 thq-icon-medium"
                >
                  <g fill="none">
                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                    <path
                      d="M20 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1h2v1h16V7.423l-6.935 6.935a1.5 1.5 0 0 1-2.121 0L4 7.414V8H2V6a2 2 0 0 1 2-2zM6 13a1 1 0 0 1 .117 1.993L6 15H1a1 1 0 0 1-.117-1.993L1 13zm-1-3a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2z"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
                <div className="contact-info-contact-info1">
                  <h3 className="contact-info-text12">Email</h3>
                  <p className="contact-info-text13 thq-body-large">
                    {props.content2 ?? (
                      <Fragment>
                        <span className="contact-info-text34">
                          We are available for site visits and consultations.
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <a
                    href="mailto:arunbhende21@gmail.com?subject=Enquiry For Marigold Celebration Hall Booking."
                    className="contact-info-email1 thq-body-small"
                  >
                    {props.email ?? (
                      <Fragment>
                        <span className="contact-info-text29">
                          arunbhende21@gmail.com
                        </span>
                      </Fragment>
                    )}
                  </a>
                </div>
              </div>
              <div className="contact-info-content5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="contact-info-icon14 thq-icon-medium"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M8 3C8.5 3 10.5 7.5 10.5 8C10.5 9 9 10 8.5 11C8 12 9 13 10 14C10.3943 14.3943 12 16 13 15.5C14 15 15 13.5 16 13.5C16.5 13.5 21 15.5 21 16C21 18 19.5 19.5 18 20C16.5 20.5 15.5 20.5 13.5 20C11.5 19.5 10 19 7.5 16.5C5 14 4.5 12.5 4 10.5C3.5 8.5 3.5 7.5 4 6C4.5 4.5 6 3 8 3Z"
                      fill="currentColor"
                      fill-opacity="0"
                      stroke-dasharray="64"
                      stroke-dashoffset="64"
                    >
                      <animate
                        dur="0.6s"
                        fill="freeze"
                        values="64;0"
                        attributeName="stroke-dashoffset"
                      ></animate>
                      <animate
                        dur="0.15s"
                        fill="freeze"
                        begin="0.6s"
                        values="0;0.3"
                        attributeName="fill-opacity"
                      ></animate>
                      <animatetransform
                        dur="0.5s"
                        type="rotate"
                        begin="0.6s;lineMdPhoneCallTwotoneLoop0.begin+2.6s"
                        values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"
                        attributeName="transform"
                      ></animatetransform>
                    </path>
                    <path
                      d="M14 7.04404C14.6608 7.34734 15.2571 7.76718 15.7624 8.27723M16.956 10C16.6606 9.35636 16.2546 8.77401 15.7624 8.27723"
                      opacity="0"
                      stroke-dasharray="4"
                      stroke-dashoffset="4"
                    >
                      <set
                        id="lineMdPhoneCallTwotoneLoop0"
                        to="1"
                        begin="0.7s;lineMdPhoneCallTwotoneLoop0.begin+2.7s"
                        attributeName="opacity"
                      ></set>
                      <animate
                        dur="0.2s"
                        fill="freeze"
                        begin="0.7s;lineMdPhoneCallTwotoneLoop0.begin+2.7s"
                        values="4;8"
                        attributeName="stroke-dashoffset"
                      ></animate>
                      <animate
                        dur="0.3s"
                        fill="freeze"
                        begin="1.3s;lineMdPhoneCallTwotoneLoop0.begin+3.3s"
                        values="0;4"
                        attributeName="stroke-dashoffset"
                      ></animate>
                      <set
                        to="0"
                        begin="1.6s;lineMdPhoneCallTwotoneLoop0.begin+3.6s"
                        attributeName="opacity"
                      ></set>
                    </path>
                    <path
                      d="M20.748 9C20.3874 7.59926 19.6571 6.347 18.6672 5.3535M15 3.25203C16.4105 3.61507 17.6704 4.3531 18.6672 5.3535"
                      opacity="0"
                      stroke-dasharray="10"
                      stroke-dashoffset="10"
                    >
                      <set
                        to="1"
                        begin="1s;lineMdPhoneCallTwotoneLoop0.begin+3s"
                        attributeName="opacity"
                      ></set>
                      <animate
                        dur="0.2s"
                        fill="freeze"
                        begin="1s;lineMdPhoneCallTwotoneLoop0.begin+3s"
                        values="10;20"
                        attributeName="stroke-dashoffset"
                      ></animate>
                      <animate
                        dur="0.3s"
                        fill="freeze"
                        begin="1.5s;lineMdPhoneCallTwotoneLoop0.begin+3.5s"
                        values="0;10"
                        attributeName="stroke-dashoffset"
                      ></animate>
                      <set
                        to="0"
                        begin="1.8s;lineMdPhoneCallTwotoneLoop0.begin+3.8s"
                        attributeName="opacity"
                      ></set>
                    </path>
                  </g>
                </svg>
                <div className="contact-info-contact-info2">
                  <h3 className="contact-info-text14 thq-heading-3">
                    Enquiry Contacts
                  </h3>
                  <p className="contact-info-text15 thq-body-large">
                    {props.content3 ?? (
                      <Fragment>
                        <span className="contact-info-text30">
                          Our dedicated team is ready to assist you with any
                          questions or special requests.
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <div className="contact-info-container2">
                    <a
                      href="tel:+919356251657"
                      className="contact-info-text16 thq-body-small"
                    >
                      {props.phone1 ?? (
                        <Fragment>
                          <span className="contact-info-text33">
                            Call Now - 9356251657
                          </span>
                        </Fragment>
                      )}
                    </a>
                    <a
                      href="tel:+919822219102"
                      className="contact-info-text17 thq-body-small"
                    >
                      {props.phone11 ?? (
                        <Fragment>
                          <span className="contact-info-text23">
                            Call Now - 9822219102
                          </span>
                        </Fragment>
                      )}
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-info-content6">
                <svg
                  viewBox="0 0 1024 1024"
                  className="contact-info-icon30 thq-icon-medium"
                >
                  <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                </svg>
                <div className="contact-info-contact-info3">
                  <h3 className="contact-info-text18 thq-heading-3">
                    Address of MariGold Celebration Hall
                  </h3>
                  <p className="contact-info-text19 thq-body-large">
                    {props.content5 ?? (
                      <Fragment>
                        <span className="contact-info-text32">
                          Follow us on social media for updates and promotions.
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <a
                    href="https://maps.app.goo.gl/DEc9gnNU8AALgh4s7"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="contact-info-address thq-body-small"
                  >
                    {props.address1 ?? (
                      <Fragment>
                        <span className="contact-info-text28">
                          Mohgaon road, MH SH 255, Dangarpura, Hingna,
                          Maharashtra 441110
                        </span>
                      </Fragment>
                    )}
                  </a>
                </div>
                <a
                  href="https://maps.app.goo.gl/DEc9gnNU8AALgh4s7"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact-info-button thq-button-outline menu"
                >
                  <span className="contact-info-text20">
                    {props.action2 ?? (
                      <Fragment>
                        <span className="contact-info-text31">
                          Google Map Location
                        </span>
                      </Fragment>
                    )}
                  </span>
                </a>
              </div>
              <div className="contact-info-content7">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="contact-info-icon32 thq-icon-medium"
                >
                  <g fill="none">
                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                    <path
                      d="M20 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1h2v1h16V7.423l-6.935 6.935a1.5 1.5 0 0 1-2.121 0L4 7.414V8H2V6a2 2 0 0 1 2-2zM6 13a1 1 0 0 1 .117 1.993L6 15H1a1 1 0 0 1-.117-1.993L1 13zm-1-3a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2z"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
                <div className="contact-info-contact-info4">
                  <h3 className="contact-info-text21">Email</h3>
                  <p className="contact-info-text22 thq-body-large">
                    {props.content21 ?? (
                      <Fragment>
                        <span className="contact-info-text25">
                          We are available for site visits and consultations.
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <a
                    href="mailto:arunbhende21@gmail.com?subject=Enquiry For Marigold Celebration Hall Booking."
                    className="contact-info-email2 thq-body-small"
                  >
                    {props.email1 ?? (
                      <Fragment>
                        <span className="contact-info-text27">
                          arunbhende21@gmail.com
                        </span>
                      </Fragment>
                    )}
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-info-container3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d50562.40424559451!2d78.98611754963912!3d21.109873285203573!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd494fb55274ecd%3A0xd325ee121e5431e2!2sMARIGOLD%20CELEBRATION!5e0!3m2!1sen!2sin!4v1730101106854!5m2!1sen!2sin"
                title="Map"
                className="contact-info-iframe thq-img-ratio-16-9"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact-info-container1 {
            height: 700px;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .contact-info-max-width {
            align-self: center;
          }
          .contact-info-section-title {
            width: 100%;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .contact-info-content1 {
            gap: 4px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            padding-left: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .contact-info-text10 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .contact-info-text11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 12px;
            max-width: 40%;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .contact-info-content2 {
            height: auto;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .contact-info-content3 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            height: 600px;
            display: flex;
            transform: scale(1);
            box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.5);
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-primary-logo-color-1);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            backdrop-filter: blur(3px);
            background-color: rgba(0, 0, 0, 0.27);
            border-right-width: 0px;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
          .contact-info-content4 {
            gap: var(--dl-space-space-halfunit);
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
          }
          .contact-info-icon10 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            padding: 4px;
            margin-left: var(--dl-space-space-twounits);
            border-color: var(--dl-color-theme-accent1);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .contact-info-contact-info1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            padding-left: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .contact-info-text12 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: flex-start;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 500;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .contact-info-text13 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 12px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .contact-info-email1 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            cursor: pointer;
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-primary-logo-color-3);
            border-style: dotted;
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-buttonradius);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .contact-info-content5 {
            gap: var(--dl-space-space-halfunit);
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-primary-logo-color-5);
            border-style: solid;
            border-width: 1px;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            background-size: auto;
            background-image: url('/images/marigold-brand-name%20-%20copy11-1400w.webp');
            border-left-width: 0px;
            border-right-width: 0px;
            background-position: center;
          }
          .contact-info-icon14 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            padding: 4px;
            margin-left: var(--dl-space-space-twounits);
            border-color: var(--dl-color-theme-accent1);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .contact-info-contact-info2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            padding-left: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .contact-info-text14 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: flex-start;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 500;
          }
          .contact-info-text15 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 12px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .contact-info-container2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-info-text16 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-primary-logo-color-3);
            border-style: dotted;
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-buttonradius);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .contact-info-text17 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-primary-logo-color-3);
            border-style: dotted;
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-buttonradius);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .contact-info-content6 {
            gap: var(--dl-space-space-unit);
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-info-icon30 {
            fill: var(--dl-color-theme-accent1);
            width: 24px;
            height: 24px;
            padding: 4px;
            margin-left: var(--dl-space-space-twounits);
            border-color: var(--dl-color-theme-accent1);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .contact-info-contact-info3 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            padding-left: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .contact-info-text18 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: flex-start;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 500;
          }
          .contact-info-text19 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 12px;
            font-family: 'Ubuntu';
          }
          .contact-info-address {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            cursor: pointer;
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .contact-info-button {
            flex: 1;
            display: none;
            transform: scale(0.96);
            align-self: center;
            transition: 0.3s;
            padding-top: var(--dl-space-space-halfunit);
            border-color: #380fe1;
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-buttonradius);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
            background-color: rgba(245, 184, 60, 0.1);
          }
          .contact-info-button:hover {
            transform: scale(1);
            box-shadow: 3px 3px 25px 1px rgba(15, 0, 255, 0.25);
            background-color: rgba(71, 60, 245, 0.21);
          }
          .contact-info-text20 {
            color: var(--dl-color-primary-logo-color-2);
            font-size: 12px;
            transform: scale(0.96);
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 400;
            line-height: 1.6;
            text-transform: capitalize;
            text-decoration: none;
          }
          .contact-info-text20:hover {
            transform: scale(1);
          }
          .contact-info-content7 {
            gap: var(--dl-space-space-halfunit);
            display: none;
            align-self: stretch;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius10);
            flex-direction: column;
          }
          .contact-info-icon32 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            padding: 4px;
            margin-left: var(--dl-space-space-twounits);
            border-color: var(--dl-color-theme-accent1);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .contact-info-contact-info4 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            padding-left: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .contact-info-text21 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            align-self: flex-start;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 500;
            line-height: 1.5;
            text-transform: none;
            text-decoration: none;
          }
          .contact-info-text22 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 12px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .contact-info-email2 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            cursor: pointer;
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 300;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-primary-logo-color-3);
            border-style: dotted;
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-buttonradius);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .contact-info-container3 {
            width: 100%;
            height: auto;
            display: flex;
            max-width: 650px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }
          .contact-info-iframe {
            width: 100%;
            height: 600px;
            aspect-ratio: 16/9;
            border-top-right-radius: var(--dl-radius-radius-radius10);
            border-bottom-right-radius: var(--dl-radius-radius-radius10);
          }
          .contact-info-text23 {
            display: inline-block;
          }
          .contact-info-text24 {
            display: inline-block;
          }
          .contact-info-text25 {
            display: inline-block;
          }
          .contact-info-text26 {
            display: inline-block;
          }
          .contact-info-text27 {
            display: inline-block;
          }
          .contact-info-text28 {
            display: inline-block;
          }
          .contact-info-text29 {
            display: inline-block;
          }
          .contact-info-text30 {
            display: inline-block;
          }
          .contact-info-text31 {
            display: inline-block;
          }
          .contact-info-text32 {
            display: inline-block;
          }
          .contact-info-text33 {
            display: inline-block;
          }
          .contact-info-text34 {
            display: inline-block;
          }

          @media (max-width: 1200px) {
            .contact-info-content3 {
              border-style: solid;
            }
            .contact-info-container3 {
              max-width: 600px;
            }
          }
          @media (max-width: 991px) {
            .contact-info-container1 {
              width: auto;
              height: auto;
              align-items: stretch;
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              justify-content: space-between;
            }
            .contact-info-text11 {
              max-width: 42%;
            }
            .contact-info-content2 {
              height: auto;
              position: relative;
              align-items: flex-start;
              flex-direction: column;
            }
            .contact-info-content3 {
              width: 100%;
              height: auto;
              max-width: 100%;
              border-right-width: 1px;
              border-bottom-width: 0px;
              border-top-right-radius: var(--dl-radius-radius-radius10);
              border-bottom-left-radius: 0;
            }
            .contact-info-content4 {
              height: auto;
            }
            .contact-info-content5 {
              height: auto;
            }
            .contact-info-content6 {
              height: auto;
            }
            .contact-info-container3 {
              width: 100%;
              height: auto;
              max-width: 100%;
              align-items: flex-start;
              justify-content: flex-start;
            }
            .contact-info-iframe {
              width: 100%;
              height: 600px;
              max-width: 100%;
              border-color: var(--dl-color-primary-logo-color-1);
              border-width: 1px;
              padding-left: 0px;
              border-top-width: 0px;
              border-top-left-radius: 0;
              border-top-right-radius: 0;
              border-bottom-left-radius: var(--dl-radius-radius-radius10);
              border-bottom-right-radius: var(--dl-radius-radius-radius10);
            }
          }
          @media (max-width: 599px) {
            .contact-info-text11 {
              max-width: 100%;
            }
            .contact-info-content3 {
              gap: var(--dl-space-space-halfunit);
            }
            .contact-info-text16 {
              font-size: 22px;
            }
            .contact-info-text17 {
              font-size: 22px;
            }
          }
          @media (max-width: 399px) {
            .contact-info-container1 {
              padding-left: 0px;
              padding-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

ContactInfo.defaultProps = {
  phone11: undefined,
  heading1: undefined,
  content21: undefined,
  content1: undefined,
  email1: undefined,
  address1: undefined,
  email: undefined,
  rootClassName: '',
  content3: undefined,
  action2: undefined,
  content5: undefined,
  phone1: undefined,
  content2: undefined,
}

ContactInfo.propTypes = {
  phone11: PropTypes.element,
  heading1: PropTypes.element,
  content21: PropTypes.element,
  content1: PropTypes.element,
  email1: PropTypes.element,
  address1: PropTypes.element,
  email: PropTypes.element,
  rootClassName: PropTypes.string,
  content3: PropTypes.element,
  action2: PropTypes.element,
  content5: PropTypes.element,
  phone1: PropTypes.element,
  content2: PropTypes.element,
}

export default ContactInfo
