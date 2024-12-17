import React from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

const RegistrationsBookingMenuSelections = (props) => {
  return (
    <>
      <div className="registrations-booking-menu-selections-container">
        <Head>
          <title>
            Registrations-Booking-Menu-Selections - Marigold Celebration Banquet
            Hall - Events Venue in Hingna, Nagpur
          </title>
          <meta
            name="description"
            content="Marigold Celebration Banquet Hall, Hingna, Nagpur: Spacious Venues for Weddings and Events, Hosting up to 2000 Guests with Catering, Decor, and Event Services."
          />
          <meta
            property="og:title"
            content="Registrations-Booking-Menu-Selections - Marigold Celebration Banquet Hall - Events Venue in Hingna, Nagpur"
          />
          <meta
            property="og:description"
            content="Marigold Celebration Banquet Hall, Hingna, Nagpur: Spacious Venues for Weddings and Events, Hosting up to 2000 Guests with Catering, Decor, and Event Services."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/de8e8e6e-fc3c-415d-9c09-ba0a82a476a4/7f7d755a-0d03-4715-ab49-e885ec4ae90d?org_if_sml=1&amp;force_format=original"
          />
          <meta name="robots" content="noindex" />
        </Head>
        <iframe
          id="JotFormIFrame-243440862622454"
          src='https://www.jotform.com/app/243440862622454?appEmbedded=1" style="height: 1000 px; width: 1000 px; border: 0;'
          allow="geolocation, microphone, camera"
          allowFullScreen="true"
          className="registrations-booking-menu-selections-iframe"
        ></iframe>
      </div>
      <style jsx>
        {`
          .registrations-booking-menu-selections-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .registrations-booking-menu-selections-iframe {
            width: 1439px;
            display: block;
            min-width: 1200px;
            min-height: 100vh;
            aspect-ratio: auto;
          }
          @media (max-width: 599px) {
            .registrations-booking-menu-selections-iframe {
              width: 598px;
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

export default RegistrationsBookingMenuSelections

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}
