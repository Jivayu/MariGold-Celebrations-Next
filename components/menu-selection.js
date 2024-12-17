import React from 'react'

import { useTranslations } from 'next-intl'

const MenuSelection = (props) => {
  return (
    <>
      <div className="menu-selection-container"></div>
      <style jsx>
        {`
          .menu-selection-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default MenuSelection
