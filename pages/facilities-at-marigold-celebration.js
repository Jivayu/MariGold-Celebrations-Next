import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import NavbarInteractive from '../components/navbar-interactive'
import PageHeadersFacilities from '../components/page-headers-facilities'
import AllFacilitiesOfMarigold from '../components/all-facilities-of-marigold'
import Footer from '../components/footer'

const Facilities = (props) => {
  return (
    <>
      <div className="facilities-container">
        <Head>
          <title>
            Facilities at Marigold Celebration Hall | Top Event Venue in Nagpur
          </title>
          <meta
            name="description"
            content="Discover the premium facilities at Marigold Celebration Banquet Hall, Nagpur. From Spacious Event Halls, Elegant Decor, and Catering to Ample Parking, Lift Access, and Guest Accommodations"
          />
          <meta
            property="og:title"
            content="Facilities at Marigold Celebration Hall | Top Event Venue in Nagpur"
          />
          <meta
            property="og:description"
            content="Discover the premium facilities at Marigold Celebration Banquet Hall, Nagpur. From Spacious Event Halls, Elegant Decor, and Catering to Ample Parking, Lift Access, and Guest Accommodations"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/de8e8e6e-fc3c-415d-9c09-ba0a82a476a4/7f7d755a-0d03-4715-ab49-e885ec4ae90d?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <NavbarInteractive
          login={
            <Fragment>
              <span className="facilities-text10">Login</span>
            </Fragment>
          }
          menu1={
            <Fragment>
              <span className="facilities-text11">Home</span>
            </Fragment>
          }
          menu2={
            <Fragment>
              <span className="facilities-text12">Facilities</span>
            </Fragment>
          }
          menu3={
            <Fragment>
              <span className="facilities-text13">Gallery</span>
            </Fragment>
          }
          menu4={
            <Fragment>
              <span className="facilities-text14">Events</span>
            </Fragment>
          }
          menu5={
            <Fragment>
              <span className="facilities-text15">Contacts</span>
            </Fragment>
          }
          menu41={
            <Fragment>
              <span className="facilities-text16">Plans</span>
            </Fragment>
          }
          mmenu1={
            <Fragment>
              <span className="facilities-text17">Home</span>
            </Fragment>
          }
          mmenu2={
            <Fragment>
              <span className="facilities-text18">Facilities</span>
            </Fragment>
          }
          mmenu3={
            <Fragment>
              <span className="facilities-text19">Gallery</span>
            </Fragment>
          }
          mmenu4={
            <Fragment>
              <span className="facilities-text20">Events</span>
            </Fragment>
          }
          mmenu5={
            <Fragment>
              <span className="facilities-text21">Contacts</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="facilities-text22">Enquiry</span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="facilities-text23">Call Enquiry</span>
            </Fragment>
          }
          text21011={
            <Fragment>
              <span className="facilities-text24">Explore Facilities</span>
            </Fragment>
          }
          register12={
            <Fragment>
              <span className="facilities-text25">WhatsApp Enquiry</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name2"
        ></NavbarInteractive>
        <PageHeadersFacilities
          action1={
            <Fragment>
              <span className="facilities-text26">Contact Us</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="facilities-text27">View Event Spaces</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="facilities-text28">
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
              <span className="facilities-text29">Book Your Event Today</span>
            </Fragment>
          }
          rootClassName="page-headers-facilitiesroot-class-name"
        ></PageHeadersFacilities>
        <AllFacilitiesOfMarigold
          rootClassName="all-facilities-of-marigoldroot-class-name"
          featureDescription212111={
            <Fragment>
              <span className="facilities-text30">
                All Images are for Demonstration Purpose, Customer Can Verify By
                Taking Visits at Location.
              </span>
            </Fragment>
          }
        ></AllFacilitiesOfMarigold>
        <Footer
          link1={
            <Fragment>
              <span className="facilities-text31">Home</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="facilities-text32">Facilities</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="facilities-text33">Gallery</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="facilities-text34">Events</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="facilities-text35">Contacts</span>
            </Fragment>
          }
          link6={
            <Fragment>
              <span className="facilities-text36">Corporate Events</span>
            </Fragment>
          }
          link7={
            <Fragment>
              <span className="facilities-text37">Weddings Plannings</span>
            </Fragment>
          }
          link8={
            <Fragment>
              <span className="facilities-text38">
                <span>Events Management</span>
                <br></br>
              </span>
            </Fragment>
          }
          link9={
            <Fragment>
              <span className="facilities-text41">Special Occasions</span>
            </Fragment>
          }
          link10={
            <Fragment>
              <span className="facilities-text42">Book Now</span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="facilities-text43">
                We warmly invite you to visit and explore Marigold Banquet Hall.
                It would be our pleasure to assist you with your event planning
                needs and show you everything we have to offer!
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="facilities-text44">MariGold Celebration</span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="facilities-text45">terms &amp; conditions.</span>
            </Fragment>
          }
          termsLink1={
            <Fragment>
              <span className="facilities-text46">T &amp; C</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="facilities-text47">cookie policy.</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="facilities-text48">privacy policy.</span>
            </Fragment>
          }
          column1Title={
            <Fragment>
              <span className="facilities-text49">Contact Us</span>
            </Fragment>
          }
          column2Title={
            <Fragment>
              <span className="facilities-text50">Services</span>
            </Fragment>
          }
          cookiesLink1={
            <Fragment>
              <span className="facilities-text51">C &amp; P</span>
            </Fragment>
          }
          privacyLink1={
            <Fragment>
              <span className="facilities-text52">P P</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name1"
        ></Footer>
      </div>
      <style jsx>
        {`
          .facilities-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-size: auto;
            background-image: url('/images/marigold-brand-name%20-%20copy11-1500w.webp');
            background-position: center;
          }
          .facilities-text10 {
            display: inline-block;
          }
          .facilities-text11 {
            display: inline-block;
          }
          .facilities-text12 {
            display: inline-block;
          }
          .facilities-text13 {
            display: inline-block;
          }
          .facilities-text14 {
            display: inline-block;
          }
          .facilities-text15 {
            display: inline-block;
          }
          .facilities-text16 {
            display: inline-block;
          }
          .facilities-text17 {
            display: inline-block;
          }
          .facilities-text18 {
            display: inline-block;
          }
          .facilities-text19 {
            display: inline-block;
          }
          .facilities-text20 {
            display: inline-block;
          }
          .facilities-text21 {
            display: inline-block;
          }
          .facilities-text22 {
            display: inline-block;
          }
          .facilities-text23 {
            display: inline-block;
          }
          .facilities-text24 {
            display: inline-block;
          }
          .facilities-text25 {
            display: inline-block;
          }
          .facilities-text26 {
            display: inline-block;
          }
          .facilities-text27 {
            display: inline-block;
          }
          .facilities-text28 {
            display: inline-block;
          }
          .facilities-text29 {
            display: inline-block;
          }
          .facilities-text30 {
            display: inline-block;
          }
          .facilities-text31 {
            display: inline-block;
          }
          .facilities-text32 {
            display: inline-block;
          }
          .facilities-text33 {
            display: inline-block;
          }
          .facilities-text34 {
            display: inline-block;
          }
          .facilities-text35 {
            display: inline-block;
          }
          .facilities-text36 {
            display: inline-block;
          }
          .facilities-text37 {
            display: inline-block;
          }
          .facilities-text38 {
            display: inline-block;
          }
          .facilities-text41 {
            display: inline-block;
          }
          .facilities-text42 {
            display: inline-block;
          }
          .facilities-text43 {
            display: inline-block;
          }
          .facilities-text44 {
            display: inline-block;
          }
          .facilities-text45 {
            display: inline-block;
          }
          .facilities-text46 {
            display: inline-block;
          }
          .facilities-text47 {
            display: inline-block;
          }
          .facilities-text48 {
            display: inline-block;
          }
          .facilities-text49 {
            display: inline-block;
          }
          .facilities-text50 {
            display: inline-block;
          }
          .facilities-text51 {
            display: inline-block;
          }
          .facilities-text52 {
            display: inline-block;
          }
          @media (max-width: 599px) {
            .facilities-text23 {
              line-height: 1.4;
            }
            .facilities-text25 {
              line-height: 1.4;
            }
          }
        `}
      </style>
    </>
  )
}

export default Facilities

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
