import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Gallery14 = (props) => {
  return (
    <>
      <div className="gallery14-gallery3 thq-section-padding">
        <div className="gallery14-max-width thq-section-max-width">
          <div className="gallery14-section-title">
            <h2 className="gallery14-text10 h2 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="gallery14-text25">Gallery</span>
                </Fragment>
              )}
            </h2>
            <span className="gallery14-text11 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="gallery14-text18">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Suspendisse varius enim
                    in eros elementum tristique. Duis cursus, mi quis viverra
                    ornare, eros dolor interdum nulla.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="gallery14-content">
            <div className="gallery14-container1">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="gallery14-image1 thq-img-ratio-4-3"
              />
              <span className="thq-body-small">
                {props.image1Title ?? (
                  <Fragment>
                    <span className="gallery14-text22">Image 1</span>
                  </Fragment>
                )}
              </span>
              <span className="gallery14-text13 thq-body-small">
                {props.image1Description ?? (
                  <Fragment>
                    <span className="gallery14-text24">
                      Beautifully decorated wedding hall setup for a memorable
                      event.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="gallery14-container2">
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="gallery14-image2 thq-img-ratio-4-3"
              />
              <span className="thq-body-small">
                {props.image2Title ?? (
                  <Fragment>
                    <span className="gallery14-text21">
                      Corporate Event Venue
                    </span>
                  </Fragment>
                )}
              </span>
              <span className="gallery14-text15 thq-body-small">
                {props.image2Description ?? (
                  <Fragment>
                    <span className="gallery14-text19">
                      Spacious and elegant venue perfect for corporate events
                      and conferences.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="gallery14-container3">
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="gallery14-image3 thq-img-ratio-4-3"
              />
              <span className="thq-body-small">
                {props.image3Title ?? (
                  <Fragment>
                    <span className="gallery14-text23">
                      Social Gathering Decor
                    </span>
                  </Fragment>
                )}
              </span>
              <span className="gallery14-text17 thq-body-small">
                {props.image3Description ?? (
                  <Fragment>
                    <span className="gallery14-text20">
                      Vibrant and welcoming decor for social gatherings and
                      parties.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .gallery14-gallery3 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery14-max-width {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .gallery14-section-title {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery14-text10 {
            text-align: center;
          }
          .gallery14-text11 {
            text-align: center;
          }
          .gallery14-content {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .gallery14-container1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gallery14-image1 {
            width: 100%;
            height: 300px;
            max-width: 600px;
            align-self: center;
          }
          .gallery14-text13 {
            text-align: center;
          }
          .gallery14-container2 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gallery14-image2 {
            width: 100%;
            height: 300px;
            max-width: 600px;
            align-self: center;
          }
          .gallery14-text15 {
            text-align: center;
          }
          .gallery14-container3 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gallery14-image3 {
            width: 100%;
            height: 300px;
            max-width: 600px;
          }
          .gallery14-text17 {
            text-align: center;
          }
          .gallery14-text18 {
            display: inline-block;
          }
          .gallery14-text19 {
            display: inline-block;
          }
          .gallery14-text20 {
            display: inline-block;
          }
          .gallery14-text21 {
            display: inline-block;
          }
          .gallery14-text22 {
            display: inline-block;
          }
          .gallery14-text23 {
            display: inline-block;
          }
          .gallery14-text24 {
            display: inline-block;
          }
          .gallery14-text25 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .gallery14-content {
              align-items: center;
              flex-direction: column;
            }
            .gallery14-image1 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
            .gallery14-image2 {
              flex: 0 0 auto;
              width: 100%;
              height: 360px;
            }
            .gallery14-image3 {
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

Gallery14.defaultProps = {
  content1: undefined,
  image2Alt: 'Corporate Event Venue',
  image3Src:
    'https://images.unsplash.com/photo-1532372320572-cda25653a26d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDI4OTIxOXw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Description: undefined,
  image2Src:
    'https://images.unsplash.com/photo-1726030929953-29fbe0f5ecf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDI4OTIxOXw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Description: undefined,
  image1Alt: 'Wedding Hall Setup',
  image2Title: undefined,
  image1Title: undefined,
  image3Alt: 'Social Gathering Decor',
  image3Title: undefined,
  image1Description: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1583153951710-19b30623b19a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDI4OTIyMHw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
}

Gallery14.propTypes = {
  content1: PropTypes.element,
  image2Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image2Description: PropTypes.element,
  image2Src: PropTypes.string,
  image3Description: PropTypes.element,
  image1Alt: PropTypes.string,
  image2Title: PropTypes.element,
  image1Title: PropTypes.element,
  image3Alt: PropTypes.string,
  image3Title: PropTypes.element,
  image1Description: PropTypes.element,
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
}

export default Gallery14
