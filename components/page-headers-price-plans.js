import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const PageHeadersPricePlans = (props) => {
  return (
    <>
      <div
        className={`page-headers-price-plans-container thq-section-padding ${props.rootClassName} `}
      >
        <img
          alt={props.backgroundImageAlt}
          src={props.backgroundImageSrc}
          className="page-headers-price-plans-background-image thq-img-ratio-16-9"
        />
        <div className="page-headers-price-plans-max-width thq-section-max-width">
          <div className="page-headers-price-plans-column">
            <div className="page-headers-price-plans-content">
              <h2 className="page-headers-price-plans-text1 h2 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="page-headers-price-plans-text5">
                      Welcome to Marigold Celebration Hall - Where Every Detail
                      Matters
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="page-headers-price-plans-text2 thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="page-headers-price-plans-text7">
                      Welcome to the Marigold Celebration Gallery. Explore our
                      exquisite spaces and beautifully crafted events,
                      showcasing weddings, corporate gatherings, and special
                      occasions celebrated at our venue in Nagpur.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="page-headers-price-plans-actions">
              <button type="button" className="thq-button-filled">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="page-headers-price-plans-text6">
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
                      <span className="page-headers-price-plans-text8">
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
          .page-headers-price-plans-container {
            width: 100%;
            height: auto;
            display: flex;
            z-index: 90;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-headers-price-plans-background-image {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .page-headers-price-plans-max-width {
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
          .page-headers-price-plans-column {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            padding-top: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .page-headers-price-plans-content {
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
            background-color: rgba(25, 24, 24, 0.65);
          }
          .page-headers-price-plans-text1 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Ubuntu';
            font-weight: 500;
          }
          .page-headers-price-plans-text2 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 12px;
            font-family: 'Ubuntu';
          }
          .page-headers-price-plans-actions {
            gap: var(--dl-space-space-oneandhalfunits);
            display: none;
            align-items: flex-start;
          }
          .page-headers-price-plans-text5 {
            display: inline-block;
          }
          .page-headers-price-plans-text6 {
            display: inline-block;
          }
          .page-headers-price-plans-text7 {
            display: inline-block;
          }
          .page-headers-price-plans-text8 {
            display: inline-block;
          }

          @media (max-width: 1200px) {
            .page-headers-price-plans-content {
              width: 85%;
            }
          }
          @media (max-width: 991px) {
            .page-headers-price-plans-content {
              width: 90%;
            }
          }
          @media (max-width: 599px) {
            .page-headers-price-plans-content {
              width: 100%;
            }
            .page-headers-price-plans-text2 {
              font-size: 14px;
            }
          }
          @media (max-width: 490px) {
            .page-headers-price-plans-text2 {
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

PageHeadersPricePlans.defaultProps = {
  heading1: undefined,
  backgroundImageSrc:
    'https://images.unsplash.com/photo-1617610690765-178c88b48d05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDE4MjE2NHw&ixlib=rb-4.0.3&q=80&w=1500',
  action1: undefined,
  content1: undefined,
  backgroundImageAlt: 'Banquet Hall',
  action2: undefined,
  rootClassName: '',
}

PageHeadersPricePlans.propTypes = {
  heading1: PropTypes.element,
  backgroundImageSrc: PropTypes.string,
  action1: PropTypes.element,
  content1: PropTypes.element,
  backgroundImageAlt: PropTypes.string,
  action2: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default PageHeadersPricePlans
