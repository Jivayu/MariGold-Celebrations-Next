import React, { Fragment } from 'react'
import Head from 'next/head'

import NavbarInteractive from '../components/navbar-interactive'
import PageHeadersEvents from '../components/page-headers-events'

const Events = (props) => {
  return (
    <>
      <div className="events-container">
        <Head>
          <title>
            Events - Marigold Celebration Banquet Hall - Big Events Venue in
            Hingna, Nagpur
          </title>
          <meta
            name="description"
            content="Marigold Celebration Banquet Hall, Hingna, Nagpur: Spacious Venues for Weddings and Events, Hosting up to 2000 Guests with Catering, Decor, and Event Services."
          />
          <meta
            property="og:title"
            content="Events - Marigold Celebration Banquet Hall - Big Events Venue in Hingna, Nagpur"
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
        <NavbarInteractive
          login={
            <Fragment>
              <span className="events-text10">Login</span>
            </Fragment>
          }
          menu1={
            <Fragment>
              <span className="events-text11">Home</span>
            </Fragment>
          }
          menu2={
            <Fragment>
              <span className="events-text12">Facilities</span>
            </Fragment>
          }
          menu3={
            <Fragment>
              <span className="events-text13">Gallery</span>
            </Fragment>
          }
          menu4={
            <Fragment>
              <span className="events-text14">Events</span>
            </Fragment>
          }
          menu5={
            <Fragment>
              <span className="events-text15">Contacts</span>
            </Fragment>
          }
          menu6={
            <Fragment>
              <span className="events-text16">Facilities</span>
            </Fragment>
          }
          mmenu1={
            <Fragment>
              <span className="events-text17">Home</span>
            </Fragment>
          }
          mmenu2={
            <Fragment>
              <span className="events-text18">Facilities</span>
            </Fragment>
          }
          mmenu3={
            <Fragment>
              <span className="events-text19">Gallery</span>
            </Fragment>
          }
          mmenu4={
            <Fragment>
              <span className="events-text20">Events</span>
            </Fragment>
          }
          mmenu5={
            <Fragment>
              <span className="events-text21">Contacts</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="events-text22">Enquiry</span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="events-text23">Call Us Now !</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name4"
        ></NavbarInteractive>
        <PageHeadersEvents
          action1={
            <Fragment>
              <span className="events-text24">Contact Us</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="events-text25">View Event Spaces</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="events-text26">
                Marigold Celebration Hall in Hingna, Nagpur, is designed to
                offer an unmatched experience for every event, whether it&apos;s
                a wedding, corporate function, birthday, or grand celebration.
                We provide a complete suite of facilities to make each occasion
                truly memorable. Here’s a look at what sets us apart:
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="events-text27">
                Welcome to Marigold Celebration Hall - Where Every Detail
                Matters
              </span>
            </Fragment>
          }
          rootClassName="page-headers-eventsroot-class-name"
        ></PageHeadersEvents>
      </div>
      <style jsx>
        {`
          .events-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-size: auto;
            background-image: url('/images/marigold-brand-name%20-%20copy11-1500w.webp');
            background-position: center;
          }
          .events-text10 {
            display: inline-block;
          }
          .events-text11 {
            display: inline-block;
          }
          .events-text12 {
            display: inline-block;
          }
          .events-text13 {
            display: inline-block;
          }
          .events-text14 {
            display: inline-block;
          }
          .events-text15 {
            display: inline-block;
          }
          .events-text16 {
            display: inline-block;
          }
          .events-text17 {
            display: inline-block;
          }
          .events-text18 {
            display: inline-block;
          }
          .events-text19 {
            display: inline-block;
          }
          .events-text20 {
            display: inline-block;
          }
          .events-text21 {
            display: inline-block;
          }
          .events-text22 {
            display: inline-block;
          }
          .events-text23 {
            display: inline-block;
          }
          .events-text24 {
            display: inline-block;
          }
          .events-text25 {
            display: inline-block;
          }
          .events-text26 {
            display: inline-block;
          }
          .events-text27 {
            display: inline-block;
          }
          @media (max-width: 599px) {
            .events-text23 {
              font-size: 16px;
              font-style: normal;
              font-family: Ubuntu;
              font-weight: 300;
              line-height: 1.4;
            }
          }
        `}
      </style>
    </>
  )
}

export default Events
