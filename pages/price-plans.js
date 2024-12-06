import React, { Fragment } from 'react'
import Head from 'next/head'

import NavbarInteractive from '../components/navbar-interactive'
import PageHeadersPricePlans from '../components/page-headers-price-plans'
import Plans from '../components/plans'
import Footer from '../components/footer'

const PricePlans = (props) => {
  return (
    <>
      <div className="price-plans-container">
        <Head>
          <title>
            Price-Plans - Marigold Celebration Banquet Hall - Events Venue in
            Hingna, Nagpur
          </title>
          <meta
            name="description"
            content="Marigold Celebration Banquet Hall, Hingna, Nagpur: Spacious Venues for Weddings and Events, Hosting up to 2000 Guests with Catering, Decor, and Event Services."
          />
          <meta
            property="og:title"
            content="Price-Plans - Marigold Celebration Banquet Hall - Events Venue in Hingna, Nagpur"
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
              <span className="price-plans-text10">Login</span>
            </Fragment>
          }
          menu1={
            <Fragment>
              <span className="price-plans-text11">Home</span>
            </Fragment>
          }
          menu2={
            <Fragment>
              <span className="price-plans-text12">Facilities</span>
            </Fragment>
          }
          menu3={
            <Fragment>
              <span className="price-plans-text13">Gallery</span>
            </Fragment>
          }
          menu4={
            <Fragment>
              <span className="price-plans-text14">Events</span>
            </Fragment>
          }
          menu5={
            <Fragment>
              <span className="price-plans-text15">Contacts</span>
            </Fragment>
          }
          menu41={
            <Fragment>
              <span className="price-plans-text16">Plans</span>
            </Fragment>
          }
          mmenu1={
            <Fragment>
              <span className="price-plans-text17">Home</span>
            </Fragment>
          }
          mmenu2={
            <Fragment>
              <span className="price-plans-text18">Facilities</span>
            </Fragment>
          }
          mmenu3={
            <Fragment>
              <span className="price-plans-text19">Gallery</span>
            </Fragment>
          }
          mmenu4={
            <Fragment>
              <span className="price-plans-text20">Events</span>
            </Fragment>
          }
          mmenu5={
            <Fragment>
              <span className="price-plans-text21">Contacts</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="price-plans-text22">Enquiry</span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="price-plans-text23">Call Enquiry</span>
            </Fragment>
          }
          text21011={
            <Fragment>
              <span className="price-plans-text24">Explore Facilities</span>
            </Fragment>
          }
          register12={
            <Fragment>
              <span className="price-plans-text25">WhatsApp Enquiry</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name5"
        ></NavbarInteractive>
        <PageHeadersPricePlans
          action1={
            <Fragment>
              <span className="price-plans-text26">Contact Us</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="price-plans-text27">View Event Spaces</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="price-plans-text28">
                Welcome to the Marigold Celebration Gallery. Explore our
                exquisite spaces and beautifully crafted events, showcasing
                weddings, corporate gatherings, and special occasions celebrated
                at our venue in Nagpur.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="price-plans-text29">
                Welcome to Marigold Celebration Hall - Where Every Detail
                Matters
              </span>
            </Fragment>
          }
          rootClassName="page-headers-price-plansroot-class-name"
        ></PageHeadersPricePlans>
        <Plans
          action1={
            <Fragment>
              <span className="price-plans-text30">Contact</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="price-plans-text31">Email us</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="price-plans-text32">
                Complete Transperancy  | More Coming Soon !
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="price-plans-text33">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="price-plans-text36">
                Compare Plans &amp; Pricing
              </span>
            </Fragment>
          }
          heading2={
            <Fragment>
              <span className="price-plans-text37">Still have a question?</span>
            </Fragment>
          }
          faq1Question={
            <Fragment>
              <span className="price-plans-text38">
                Visit &amp; Enquire MariGold Celebration For More Benefits.
              </span>
            </Fragment>
          }
          faq2Question={
            <Fragment>
              <span className="price-plans-text39">
                What amenities are provided at Marigold Banquet Hall?
              </span>
            </Fragment>
          }
          faq3Question={
            <Fragment>
              <span className="price-plans-text40">
                Does Marigold Banquet Hall offer personalized decor services?
              </span>
            </Fragment>
          }
          faq4Question={
            <Fragment>
              <span className="price-plans-text41">
                Is there flexibility in event spaces at Marigold Banquet Hall?
              </span>
            </Fragment>
          }
          faq5Question={
            <Fragment>
              <span className="price-plans-text42">
                How does Marigold Celebration ensure memorable experiences?
              </span>
            </Fragment>
          }
          rootClassName="plansroot-class-name"
        ></Plans>
        <Footer
          link1={
            <Fragment>
              <span className="price-plans-text43">Home</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="price-plans-text44">Facilities</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="price-plans-text45">Gallery</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="price-plans-text46">Events</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="price-plans-text47">Contacts</span>
            </Fragment>
          }
          link6={
            <Fragment>
              <span className="price-plans-text48">Corporate Events</span>
            </Fragment>
          }
          link7={
            <Fragment>
              <span className="price-plans-text49">Weddings Plannings</span>
            </Fragment>
          }
          link8={
            <Fragment>
              <span className="price-plans-text50">
                <span>Events Management</span>
                <br></br>
              </span>
            </Fragment>
          }
          link9={
            <Fragment>
              <span className="price-plans-text53">Special Occasions</span>
            </Fragment>
          }
          link10={
            <Fragment>
              <span className="price-plans-text54">Book Now</span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="price-plans-text55">
                We warmly invite you to visit and explore Marigold Banquet Hall.
                It would be our pleasure to assist you with your event planning
                needs and show you everything we have to offer!
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="price-plans-text56">MariGold Celebration</span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="price-plans-text57">
                terms &amp; conditions.
              </span>
            </Fragment>
          }
          termsLink1={
            <Fragment>
              <span className="price-plans-text58">T &amp; C</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="price-plans-text59">cookie policy.</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="price-plans-text60">privacy policy.</span>
            </Fragment>
          }
          column1Title={
            <Fragment>
              <span className="price-plans-text61">Contact Us</span>
            </Fragment>
          }
          column2Title={
            <Fragment>
              <span className="price-plans-text62">Services</span>
            </Fragment>
          }
          cookiesLink1={
            <Fragment>
              <span className="price-plans-text63">C &amp; P</span>
            </Fragment>
          }
          privacyLink1={
            <Fragment>
              <span className="price-plans-text64">P P</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name5"
        ></Footer>
      </div>
      <style jsx>
        {`
          .price-plans-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
            background-color: rgba(237, 237, 237, 0.7);
          }
          .price-plans-text10 {
            display: inline-block;
          }
          .price-plans-text11 {
            display: inline-block;
          }
          .price-plans-text12 {
            display: inline-block;
          }
          .price-plans-text13 {
            display: inline-block;
          }
          .price-plans-text14 {
            display: inline-block;
          }
          .price-plans-text15 {
            display: inline-block;
          }
          .price-plans-text16 {
            display: inline-block;
          }
          .price-plans-text17 {
            display: inline-block;
          }
          .price-plans-text18 {
            display: inline-block;
          }
          .price-plans-text19 {
            display: inline-block;
          }
          .price-plans-text20 {
            display: inline-block;
          }
          .price-plans-text21 {
            display: inline-block;
          }
          .price-plans-text22 {
            display: inline-block;
          }
          .price-plans-text23 {
            display: inline-block;
          }
          .price-plans-text24 {
            display: inline-block;
          }
          .price-plans-text25 {
            display: inline-block;
          }
          .price-plans-text26 {
            display: inline-block;
          }
          .price-plans-text27 {
            display: inline-block;
          }
          .price-plans-text28 {
            display: inline-block;
          }
          .price-plans-text29 {
            display: inline-block;
          }
          .price-plans-text30 {
            display: inline-block;
          }
          .price-plans-text31 {
            display: inline-block;
          }
          .price-plans-text32 {
            display: inline-block;
          }
          .price-plans-text33 {
            display: inline-block;
          }
          .price-plans-text36 {
            display: inline-block;
          }
          .price-plans-text37 {
            display: inline-block;
          }
          .price-plans-text38 {
            display: inline-block;
          }
          .price-plans-text39 {
            display: inline-block;
          }
          .price-plans-text40 {
            display: inline-block;
          }
          .price-plans-text41 {
            display: inline-block;
          }
          .price-plans-text42 {
            display: inline-block;
          }
          .price-plans-text43 {
            display: inline-block;
          }
          .price-plans-text44 {
            display: inline-block;
          }
          .price-plans-text45 {
            display: inline-block;
          }
          .price-plans-text46 {
            display: inline-block;
          }
          .price-plans-text47 {
            display: inline-block;
          }
          .price-plans-text48 {
            display: inline-block;
          }
          .price-plans-text49 {
            display: inline-block;
          }
          .price-plans-text50 {
            display: inline-block;
          }
          .price-plans-text53 {
            display: inline-block;
          }
          .price-plans-text54 {
            display: inline-block;
          }
          .price-plans-text55 {
            display: inline-block;
          }
          .price-plans-text56 {
            display: inline-block;
          }
          .price-plans-text57 {
            display: inline-block;
          }
          .price-plans-text58 {
            display: inline-block;
          }
          .price-plans-text59 {
            display: inline-block;
          }
          .price-plans-text60 {
            display: inline-block;
          }
          .price-plans-text61 {
            display: inline-block;
          }
          .price-plans-text62 {
            display: inline-block;
          }
          .price-plans-text63 {
            display: inline-block;
          }
          .price-plans-text64 {
            display: inline-block;
          }
          @media (max-width: 599px) {
            .price-plans-text23 {
              line-height: 1.4;
            }
            .price-plans-text25 {
              line-height: 1.4;
            }
          }
        `}
      </style>
    </>
  )
}

export default PricePlans
