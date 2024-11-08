import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const GalleryImages = (props) => {
  return (
    <>
      <div
        className={`gallery-images-gallery3 thq-section-padding ${props.rootClassName} `}
      >
        <div className="gallery-images-max-width thq-section-max-width">
          <div className="gallery-images-section-title">
            <h2 className="gallery-images-text10 h2 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="gallery-images-text28">Gallery</span>
                </Fragment>
              )}
            </h2>
            <span className="gallery-images-text11 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="gallery-images-text19">
                    Welcome to the Marigold Celebration Gallery.
                  </span>
                </Fragment>
              )}
            </span>
            <button type="button" className="gallery-images-button button">
              <span>
                {props.button ?? (
                  <Fragment>
                    <span className="gallery-images-text29">Button</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
          <div className="gallery-images-content">
            <div className="gallery-images-container1">
              <img
                alt="Wedding Hall Setup"
                src="/images/Marigold Images/design%202-1-400h.webp"
                loading="eager"
                className="gallery-images-image1 thq-img-ratio-4-3"
              />
              <span className="gallery-images-text13 thq-body-small">
                {props.image1Title ?? (
                  <Fragment>
                    <span className="gallery-images-text23">Image 1</span>
                  </Fragment>
                )}
              </span>
              <div className="gallery-images-container2">
                <span className="gallery-images-text14 thq-body-small">
                  {props.image1Description ?? (
                    <Fragment>
                      <span className="gallery-images-text25">
                        <span>Our Banner Ads</span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="gallery-images-container3">
              <img
                alt="marigold main hall"
                sizes="(min-width: 768px) 800px, 480px"
                src="/images/Marigold Images/hallpic-1-600w.webp"
                loading="lazy"
                srcSet="/images/Marigold Images//hallpic-1-600w.webp 800w, /images/Marigold Images/hallpic-1-mobile.webp 480w"
                className="gallery-images-image2 thq-img-ratio-4-3"
              />
              <span className="gallery-images-text15 thq-body-small">
                {props.image2Title ?? (
                  <Fragment>
                    <span className="gallery-images-text22">
                      Corporate Event Venue
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="gallery-images-container4">
                <span className="gallery-images-text16 thq-body-small">
                  {props.image2Description ?? (
                    <Fragment>
                      <span className="gallery-images-text20">
                        Our Grand Main Hall
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="gallery-images-container5">
              <img
                alt={props.image3Alt}
                src="/images/Marigold Images/hallpic-6-400h.webp"
                loading="eager"
                className="gallery-images-image3 thq-img-ratio-4-3"
              />
              <span className="gallery-images-text17 thq-body-small">
                {props.image3Title ?? (
                  <Fragment>
                    <span className="gallery-images-text24">
                      Social Gathering Decor
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="gallery-images-container6">
                <span className="gallery-images-text18 thq-body-small">
                  {props.image3Description ?? (
                    <Fragment>
                      <span className="gallery-images-text21">
                        Our Grand Main Hall with Some Stage Decor arena
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
          .gallery-images-gallery3 {
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            backdrop-filter: blur(1px);
            background-color: rgba(0, 0, 0, 0.1);
          }
          .gallery-images-max-width {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .gallery-images-section-title {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery-images-text10 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 22px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 400;
          }
          .gallery-images-text11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Ubuntu';
            font-weight: 300;
          }
          .gallery-images-button {
            display: none;
          }
          .gallery-images-content {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .gallery-images-container1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gallery-images-image1 {
            width: 100%;
            height: 300px;
            max-width: 600px;
            align-self: center;
            box-shadow: 1px 1px 12px 0px rgba(0, 0, 0, 0.3);
            transition: 0.3s;
          }
          .gallery-images-image1:hover {
            transform: scale(1.05);
          }
          .gallery-images-text13 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-family: 'Ubuntu';
          }
          .gallery-images-container2 {
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .gallery-images-text14 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            text-align: center;
            font-family: 'Ubuntu';
          }
          .gallery-images-container3 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gallery-images-image2 {
            width: 100%;
            height: 300px;
            max-width: 600px;
            align-self: center;
            box-shadow: 1px 1px 12px 0px rgba(0, 0, 0, 0.3);
          }
          .gallery-images-text15 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-family: 'Ubuntu';
          }
          .gallery-images-container4 {
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .gallery-images-text16 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            text-align: center;
            font-family: 'Ubuntu';
          }
          .gallery-images-container5 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gallery-images-image3 {
            width: 100%;
            height: 300px;
            max-width: 600px;
            box-shadow: 1px 1px 12px 0px rgba(0, 0, 0, 0.3);
          }
          .gallery-images-text17 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            font-family: 'Ubuntu';
          }
          .gallery-images-container6 {
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .gallery-images-text18 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 14px;
            text-align: center;
            font-family: 'Ubuntu';
          }
          .gallery-images-text19 {
            display: inline-block;
          }
          .gallery-images-text20 {
            display: inline-block;
          }
          .gallery-images-text21 {
            display: inline-block;
          }
          .gallery-images-text22 {
            display: inline-block;
          }
          .gallery-images-text23 {
            display: inline-block;
          }
          .gallery-images-text24 {
            display: inline-block;
          }
          .gallery-images-text25 {
            display: inline-block;
          }
          .gallery-images-text28 {
            display: inline-block;
          }
          .gallery-images-text29 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .gallery-images-content {
              align-items: center;
              flex-direction: column;
            }
            .gallery-images-image1 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
            .gallery-images-image2 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
            .gallery-images-image3 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
          }
        `}
      </style>
    </>
  )
}

GalleryImages.defaultProps = {
  content1: undefined,
  image2Description: undefined,
  image3Description: undefined,
  image2Title: undefined,
  image1Title: undefined,
  image3Alt: 'Social Gathering Decor',
  image3Title: undefined,
  image1Description: undefined,
  heading1: undefined,
  rootClassName: '',
  button: undefined,
}

GalleryImages.propTypes = {
  content1: PropTypes.element,
  image2Description: PropTypes.element,
  image3Description: PropTypes.element,
  image2Title: PropTypes.element,
  image1Title: PropTypes.element,
  image3Alt: PropTypes.string,
  image3Title: PropTypes.element,
  image1Description: PropTypes.element,
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
  button: PropTypes.element,
}

export default GalleryImages
