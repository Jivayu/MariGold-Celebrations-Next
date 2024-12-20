import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const SectionNumeral = (props) => {
  return (
    <>
      <div className="section-numeral-section-numeral">
        <div className="section-numeral-divide"></div>
        <p className="section-numeral-text">{props.number}</p>
      </div>
      <style jsx>
        {`
          .section-numeral-section-numeral {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .section-numeral-divide {
            width: 100px;
            height: 1px;
            display: flex;
            margin-top: 4px;
            align-items: center;
            flex-direction: row;
            background-color: var(--dl-color-gray-black);
          }
          @media (max-width: 490px) {
            .section-numeral-divide {
              width: 20px;
            }
            .section-numeral-text {
              font-size: 16px;
              line-height: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

SectionNumeral.defaultProps = {
  number: '01',
}

SectionNumeral.propTypes = {
  number: PropTypes.string,
}

export default SectionNumeral
