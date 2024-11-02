import React, { Fragment } from 'react'
import Head from 'next/head'

import PageHeadersContacts from '../components/page-headers-contacts'
import ContactInfo from '../components/contact-info'
import Footer from '../components/footer'
import NavbarInteractive from '../components/navbar-interactive'

const Contacts = (props) => {
  return (
    <>
      <div className="contacts-container">
        <Head>
          <title>
            Contacts - Marigold Celebration Banquet Hall - Big Events Venue in
            Hingna, Nagpur
          </title>
          <meta
            name="description"
            content="Marigold Celebration Banquet Hall, Hingna, Nagpur: Spacious Venues for Weddings and Events, Hosting up to 2000 Guests with Catering, Decor, and Event Services."
          />
          <meta
            property="og:title"
            content="Contacts - Marigold Celebration Banquet Hall - Big Events Venue in Hingna, Nagpur"
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
        <PageHeadersContacts
          heading1={
            <Fragment>
              <span className="contacts-text10">
                Welcome to Marigold Celebration Hall - Where Every Detail
                Matters
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="contacts-text11">
                Marigold Celebration Hall in Hingna, Nagpur, is designed to
                offer an unmatched experience for every event, whether it&apos;s
                a wedding, corporate function, birthday, or grand celebration.
                We provide a complete suite of facilities to make each occasion
                truly memorable. Here’s a look at what sets us apart:
              </span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="contacts-text12">Contact Us</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="contacts-text13">View Event Spaces</span>
            </Fragment>
          }
          rootClassName="page-headers-contactsroot-class-name"
        ></PageHeadersContacts>
        <ContactInfo
          email={
            <Fragment>
              <span className="contacts-text14">arunbhende21@gmail.com</span>
            </Fragment>
          }
          phone1={
            <Fragment>
              <span className="contacts-text15">Call Now - 9356251657</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="contacts-text16">Google Map Location</span>
            </Fragment>
          }
          phone11={
            <Fragment>
              <span className="contacts-text17">Call Now - 9822219102</span>
            </Fragment>
          }
          address1={
            <Fragment>
              <span className="contacts-text18">
                Mohgaon road, MH SH 255, Dangarpura, Hingna, Maharashtra 441110
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="contacts-text19">
                For inquiries or bookings, please contact us using the
                information below.
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="contacts-text20">
                We are available for site visits and consultations.
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="contacts-text21">
                Our dedicated team is ready to assist you with any questions or
                special requests.
              </span>
            </Fragment>
          }
          content5={
            <Fragment>
              <span className="contacts-text22">
                Follow us on social media for updates and promotions.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="contacts-text23">
                Contact MariGold Celebration.
              </span>
            </Fragment>
          }
          rootClassName="contact-inforoot-class-name"
        ></ContactInfo>
        <Footer
          link1={
            <Fragment>
              <span className="contacts-text24">Home</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="contacts-text25">Facilities</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="contacts-text26">Gallery</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="contacts-text27">Events</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="contacts-text28">Contacts</span>
            </Fragment>
          }
          link6={
            <Fragment>
              <span className="contacts-text29">Corporate Events</span>
            </Fragment>
          }
          link7={
            <Fragment>
              <span className="contacts-text30">Weddings Plannings</span>
            </Fragment>
          }
          link8={
            <Fragment>
              <span className="contacts-text31">
                <span>Events Management</span>
                <br></br>
              </span>
            </Fragment>
          }
          link9={
            <Fragment>
              <span className="contacts-text34">Special Occasions</span>
            </Fragment>
          }
          link10={
            <Fragment>
              <span className="contacts-text35">Book Now</span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="contacts-text36">
                We warmly invite you to visit and explore Marigold Banquet Hall.
                It would be our pleasure to assist you with your event planning
                needs and show you everything we have to offer!
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="contacts-text37">MariGold Celebration</span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="contacts-text38">terms &amp; conditions.</span>
            </Fragment>
          }
          termsLink1={
            <Fragment>
              <span className="contacts-text39">T &amp; C</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="contacts-text40">cookie policy.</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="contacts-text41">privacy policy.</span>
            </Fragment>
          }
          column1Title={
            <Fragment>
              <span className="contacts-text42">Contact Us</span>
            </Fragment>
          }
          column2Title={
            <Fragment>
              <span className="contacts-text43">Services</span>
            </Fragment>
          }
          cookiesLink1={
            <Fragment>
              <span className="contacts-text44">C &amp; P</span>
            </Fragment>
          }
          privacyLink1={
            <Fragment>
              <span className="contacts-text45">P P</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name"
        ></Footer>
        <NavbarInteractive
          login={
            <Fragment>
              <span className="contacts-text46">Login</span>
            </Fragment>
          }
          menu1={
            <Fragment>
              <span className="contacts-text47">Home</span>
            </Fragment>
          }
          menu2={
            <Fragment>
              <span className="contacts-text48">Facilities</span>
            </Fragment>
          }
          menu3={
            <Fragment>
              <span className="contacts-text49">Gallery</span>
            </Fragment>
          }
          menu4={
            <Fragment>
              <span className="contacts-text50">Events</span>
            </Fragment>
          }
          menu5={
            <Fragment>
              <span className="contacts-text51">Contacts</span>
            </Fragment>
          }
          menu6={
            <Fragment>
              <span className="contacts-text52">Facilities</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="contacts-text53">Login</span>
            </Fragment>
          }
          mmenu1={
            <Fragment>
              <span className="contacts-text54">Home</span>
            </Fragment>
          }
          mmenu2={
            <Fragment>
              <span className="contacts-text55">Facilities</span>
            </Fragment>
          }
          mmenu3={
            <Fragment>
              <span className="contacts-text56">Gallery</span>
            </Fragment>
          }
          mmenu4={
            <Fragment>
              <span className="contacts-text57">Events</span>
            </Fragment>
          }
          mmenu5={
            <Fragment>
              <span className="contacts-text58">Contacts</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="contacts-text59">Enquiry</span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="contacts-text60">Enquiry</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name1"
        ></NavbarInteractive>
      </div>
      <style jsx>
        {`
          .contacts-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            background-size: auto;
            justify-content: flex-start;
            background-image: url('/images/marigold-brand-name%20-%20copy11-1500w.webp');
          }
          .contacts-text10 {
            display: inline-block;
          }
          .contacts-text11 {
            display: inline-block;
          }
          .contacts-text12 {
            display: inline-block;
          }
          .contacts-text13 {
            display: inline-block;
          }
          .contacts-text14 {
            display: inline-block;
          }
          .contacts-text15 {
            display: inline-block;
          }
          .contacts-text16 {
            display: inline-block;
          }
          .contacts-text17 {
            display: inline-block;
          }
          .contacts-text18 {
            display: inline-block;
          }
          .contacts-text19 {
            display: inline-block;
          }
          .contacts-text20 {
            display: inline-block;
          }
          .contacts-text21 {
            display: inline-block;
          }
          .contacts-text22 {
            display: inline-block;
          }
          .contacts-text23 {
            display: inline-block;
          }
          .contacts-text24 {
            display: inline-block;
          }
          .contacts-text25 {
            display: inline-block;
          }
          .contacts-text26 {
            display: inline-block;
          }
          .contacts-text27 {
            display: inline-block;
          }
          .contacts-text28 {
            display: inline-block;
          }
          .contacts-text29 {
            display: inline-block;
          }
          .contacts-text30 {
            display: inline-block;
          }
          .contacts-text31 {
            display: inline-block;
          }
          .contacts-text34 {
            display: inline-block;
          }
          .contacts-text35 {
            display: inline-block;
          }
          .contacts-text36 {
            display: inline-block;
          }
          .contacts-text37 {
            display: inline-block;
          }
          .contacts-text38 {
            display: inline-block;
          }
          .contacts-text39 {
            display: inline-block;
          }
          .contacts-text40 {
            display: inline-block;
          }
          .contacts-text41 {
            display: inline-block;
          }
          .contacts-text42 {
            display: inline-block;
          }
          .contacts-text43 {
            display: inline-block;
          }
          .contacts-text44 {
            display: inline-block;
          }
          .contacts-text45 {
            display: inline-block;
          }
          .contacts-text46 {
            display: inline-block;
          }
          .contacts-text47 {
            display: inline-block;
          }
          .contacts-text48 {
            display: inline-block;
          }
          .contacts-text49 {
            display: inline-block;
          }
          .contacts-text50 {
            display: inline-block;
          }
          .contacts-text51 {
            display: inline-block;
          }
          .contacts-text52 {
            display: inline-block;
          }
          .contacts-text53 {
            display: inline-block;
          }
          .contacts-text54 {
            display: inline-block;
          }
          .contacts-text55 {
            display: inline-block;
          }
          .contacts-text56 {
            display: inline-block;
          }
          .contacts-text57 {
            display: inline-block;
          }
          .contacts-text58 {
            display: inline-block;
          }
          .contacts-text59 {
            display: inline-block;
          }
          .contacts-text60 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Contacts
