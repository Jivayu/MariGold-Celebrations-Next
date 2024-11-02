import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const PageHeadersContacts = (props) => {
  return (
    <>
      <div
        className={`page-headers-contacts-container thq-section-padding ${props.rootClassName} `}
      >
        <img
          alt={props.backgroundImageAlt}
          src={props.backgroundImageSrc}
          className="page-headers-contacts-background-image thq-img-ratio-16-9"
        />
        <div className="page-headers-contacts-max-width thq-section-max-width">
          <div className="page-headers-contacts-column">
            <div className="page-headers-contacts-content">
              <h2 className="page-headers-contacts-text1 h2 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="page-headers-contacts-text5">
                      Welcome to Marigold Celebration Hall - Where Every Detail
                      Matters
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="page-headers-contacts-text2 thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="page-headers-contacts-text6">
                      Marigold Celebration Hall in Hingna, Nagpur, is designed
                      to offer an unmatched experience for every event, whether
                      it&apos;s a wedding, corporate function, birthday, or
                      grand celebration. We provide a complete suite of
                      facilities to make each occasion truly memorable. Here’s a
                      look at what sets us apart:
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="page-headers-contacts-actions">
              <button type="button" className="thq-button-filled">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="page-headers-contacts-text7">
                        Contact Us
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button type="button" className="thq-button-outline">
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="page-headers-contacts-text8">
                        View Event Spaces
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .page-headers-contacts-container {
            width: 100%;
            height: auto;
            display: flex;
            z-index: 90;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-headers-contacts-background-image {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .page-headers-contacts-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            height: auto;
            display: flex;
            z-index: 100;
            overflow: hidden;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            margin-top: var(--dl-space-space-fourunits);
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .page-headers-contacts-column {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            padding-top: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .page-headers-contacts-content {
            gap: var(--dl-space-space-halfunit);
            width: 75%;
            display: flex;
            align-self: center;
            box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.3);
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius10);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(25, 24, 24, 0.6);
          }
          .page-headers-contacts-text1 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 20px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 400;
          }
          .page-headers-contacts-text2 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-family: 'Ubuntu';
          }
          .page-headers-contacts-actions {
            gap: var(--dl-space-space-oneandhalfunits);
            display: none;
            align-items: flex-start;
          }
          .page-headers-contacts-text5 {
            display: inline-block;
          }
          .page-headers-contacts-text6 {
            display: inline-block;
          }
          .page-headers-contacts-text7 {
            display: inline-block;
          }
          .page-headers-contacts-text8 {
            display: inline-block;
          }

          @media (max-width: 1200px) {
            .page-headers-contacts-content {
              width: 85%;
            }
          }
          @media (max-width: 991px) {
            .page-headers-contacts-content {
              width: 90%;
            }
          }
          @media (max-width: 599px) {
            .page-headers-contacts-content {
              width: 100%;
            }
            .page-headers-contacts-text2 {
              font-size: 14px;
            }
          }
          @media (max-width: 399px) {
            .page-headers-contacts-text2 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
              font-size: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

PageHeadersContacts.defaultProps = {
  rootClassName: '',
  backgroundImageAlt: 'Banquet Hall',
  backgroundImageSrc:
    'https://images.unsplash.com/photo-1617610690765-178c88b48d05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDE4MjE2NHw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  content1: undefined,
  action1: undefined,
  action2: undefined,
}

PageHeadersContacts.propTypes = {
  rootClassName: PropTypes.string,
  backgroundImageAlt: PropTypes.string,
  backgroundImageSrc: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  action1: PropTypes.element,
  action2: PropTypes.element,
}

export default PageHeadersContacts
