import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Speaker = (props) => {
  return (
    <>
      <div className={`speaker-speaker ${props.rootClassName} `}>
        <img alt="image" src={props.image} className="speaker-image" />
        <div className="speaker-deails">
          <h3 className="speaker-name">{props.name}</h3>
          <div className="speaker-position">
            <div className="speaker-point"></div>
            <span className="speaker-caption">{props.detail}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .speaker-speaker {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .speaker-image {
            width: 100%;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .speaker-deails {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .speaker-name {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
          }
          .speaker-position {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .speaker-point {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: var(--dl-color-gray-black);
          }
          .speaker-caption {
            font-size: 18px;
          }

          .speakerroot-class-name8 {
            max-width: 320px;
          }

          @media (max-width: 991px) {
            .speaker-name {
              font-size: 20px;
            }
            .speaker-point {
              margin-top: 4px;
            }
            .speaker-caption {
              font-size: 10px;
            }
          }
          @media (max-width: 599px) {
            .speaker-speaker {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .speaker-name {
              font-size: 14px;
            }
            .speaker-point {
              max-width: 20px;
              margin-top: 0px;
            }
            .speaker-caption {
              font-size: 10px;
            }
          }
          @media (max-width: 490px) {
            .speaker-point {
              width: 100%;
              max-width: 20px;
            }
          }
        `}
      </style>
    </>
  )
}

Speaker.defaultProps = {
  image: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  name: 'Samantha Johnson',
  detail: 'CEO, Opary',
  rootClassName: '',
}

Speaker.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  detail: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Speaker
