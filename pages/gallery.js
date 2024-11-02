import React, { Fragment } from 'react'
import Head from 'next/head'

import PageHeadersGallery from '../components/page-headers-gallery'
import VideoGallery from '../components/video-gallery'
import NavbarInteractive from '../components/navbar-interactive'
import Footer from '../components/footer'

const Gallery = (props) => {
  return (
    <>
      <div className="gallery-container">
        <Head>
          <title>
            Gallery - Marigold Celebration Banquet Hall - Big Events Venue in
            Hingna, Nagpur
          </title>
          <meta
            name="description"
            content="Marigold Celebration Banquet Hall, Hingna, Nagpur: Spacious Venues for Weddings and Events, Hosting up to 2000 Guests with Catering, Decor, and Event Services."
          />
          <meta
            property="og:title"
            content="Gallery - Marigold Celebration Banquet Hall - Big Events Venue in Hingna, Nagpur"
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
        <PageHeadersGallery
          heading1={
            <Fragment>
              <span className="gallery-text10">
                Welcome to Marigold Celebration Hall - Where Every Detail
                Matters
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="gallery-text11">
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
              <span className="gallery-text12">Contact Us</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="gallery-text13">View Event Spaces</span>
            </Fragment>
          }
          rootClassName="page-headers-galleryroot-class-name"
        ></PageHeadersGallery>
        <VideoGallery
          review1={
            <Fragment>
              <span className="gallery-text14">
                Our wedding at Marigold Banquet Hall was a dream come true! The
                venue was stunning, the food was delicious, and the staff went
                above and beyond to make our day special.
              </span>
            </Fragment>
          }
          action23={
            <Fragment>
              <span className="gallery-text15">Google Business Profile</span>
            </Fragment>
          }
          review11={
            <Fragment>
              <span className="gallery-text16">
                We warmly invite you to visit and explore Marigold Banquet Hall.
                It would be our pleasure to assist you with your event planning
                needs and show you everything we have to offer!
              </span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="gallery-text17">
                MariGold Celebration - Hingna, Nagpur
              </span>
            </Fragment>
          }
          rootClassName="video-galleryroot-class-name"
          author1Position={
            <Fragment>
              <span className="gallery-text18">marigoldcelebration.in</span>
            </Fragment>
          }
        ></VideoGallery>
        <NavbarInteractive
          login={
            <Fragment>
              <span className="gallery-text19">Login</span>
            </Fragment>
          }
          menu1={
            <Fragment>
              <span className="gallery-text20">Home</span>
            </Fragment>
          }
          menu2={
            <Fragment>
              <span className="gallery-text21">Facilities</span>
            </Fragment>
          }
          menu3={
            <Fragment>
              <span className="gallery-text22">Gallery</span>
            </Fragment>
          }
          menu4={
            <Fragment>
              <span className="gallery-text23">Events</span>
            </Fragment>
          }
          menu5={
            <Fragment>
              <span className="gallery-text24">Contacts</span>
            </Fragment>
          }
          menu6={
            <Fragment>
              <span className="gallery-text25">Facilities</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="gallery-text26">Login</span>
            </Fragment>
          }
          mmenu1={
            <Fragment>
              <span className="gallery-text27">Home</span>
            </Fragment>
          }
          mmenu2={
            <Fragment>
              <span className="gallery-text28">Facilities</span>
            </Fragment>
          }
          mmenu3={
            <Fragment>
              <span className="gallery-text29">Gallery</span>
            </Fragment>
          }
          mmenu4={
            <Fragment>
              <span className="gallery-text30">Events</span>
            </Fragment>
          }
          mmenu5={
            <Fragment>
              <span className="gallery-text31">Contacts</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="gallery-text32">Enquiry</span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="gallery-text33">Enquiry</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name3"
        ></NavbarInteractive>
        <Footer
          privacyLink1={
            <Fragment>
              <span className="gallery-text34">P P</span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="gallery-text35">MariGold Celebration</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="gallery-text36">Events</span>
            </Fragment>
          }
          column1Title={
            <Fragment>
              <span className="gallery-text37">Contact Us</span>
            </Fragment>
          }
          termsLink1={
            <Fragment>
              <span className="gallery-text38">T &amp; C</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="gallery-text39">Facilities</span>
            </Fragment>
          }
          link10={
            <Fragment>
              <span className="gallery-text40">Book Now</span>
            </Fragment>
          }
          link6={
            <Fragment>
              <span className="gallery-text41">Corporate Events</span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="gallery-text42">terms &amp; conditions.</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="gallery-text43">Contacts</span>
            </Fragment>
          }
          link8={
            <Fragment>
              <span className="gallery-text44">
                <span>Events Management</span>
                <br></br>
              </span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="gallery-text47">cookie policy.</span>
            </Fragment>
          }
          link1={
            <Fragment>
              <span className="gallery-text48">Home</span>
            </Fragment>
          }
          link9={
            <Fragment>
              <span className="gallery-text49">Special Occasions</span>
            </Fragment>
          }
          cookiesLink1={
            <Fragment>
              <span className="gallery-text50">C &amp; P</span>
            </Fragment>
          }
          column2Title={
            <Fragment>
              <span className="gallery-text51">Services</span>
            </Fragment>
          }
          link7={
            <Fragment>
              <span className="gallery-text52">Weddings Plannings</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="gallery-text53">Gallery</span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="gallery-text54">
                We warmly invite you to visit and explore Marigold Banquet Hall.
                It would be our pleasure to assist you with your event planning
                needs and show you everything we have to offer!
              </span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="gallery-text55">privacy policy.</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name3"
        ></Footer>
      </div>
      <style jsx>
        {`
          .gallery-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-size: auto;
            background-image: url('/images/marigold-brand-name%20-%20copy11-1500w.webp');
            background-position: center;
          }
          .gallery-text10 {
            display: inline-block;
          }
          .gallery-text11 {
            display: inline-block;
          }
          .gallery-text12 {
            display: inline-block;
          }
          .gallery-text13 {
            display: inline-block;
          }
          .gallery-text14 {
            display: inline-block;
          }
          .gallery-text15 {
            display: inline-block;
          }
          .gallery-text16 {
            display: inline-block;
          }
          .gallery-text17 {
            display: inline-block;
          }
          .gallery-text18 {
            display: inline-block;
          }
          .gallery-text19 {
            display: inline-block;
          }
          .gallery-text20 {
            display: inline-block;
          }
          .gallery-text21 {
            display: inline-block;
          }
          .gallery-text22 {
            display: inline-block;
          }
          .gallery-text23 {
            display: inline-block;
          }
          .gallery-text24 {
            display: inline-block;
          }
          .gallery-text25 {
            display: inline-block;
          }
          .gallery-text26 {
            display: inline-block;
          }
          .gallery-text27 {
            display: inline-block;
          }
          .gallery-text28 {
            display: inline-block;
          }
          .gallery-text29 {
            display: inline-block;
          }
          .gallery-text30 {
            display: inline-block;
          }
          .gallery-text31 {
            display: inline-block;
          }
          .gallery-text32 {
            display: inline-block;
          }
          .gallery-text33 {
            display: inline-block;
          }
          .gallery-text34 {
            display: inline-block;
          }
          .gallery-text35 {
            display: inline-block;
          }
          .gallery-text36 {
            display: inline-block;
          }
          .gallery-text37 {
            display: inline-block;
          }
          .gallery-text38 {
            display: inline-block;
          }
          .gallery-text39 {
            display: inline-block;
          }
          .gallery-text40 {
            display: inline-block;
          }
          .gallery-text41 {
            display: inline-block;
          }
          .gallery-text42 {
            display: inline-block;
          }
          .gallery-text43 {
            display: inline-block;
          }
          .gallery-text44 {
            display: inline-block;
          }
          .gallery-text47 {
            display: inline-block;
          }
          .gallery-text48 {
            display: inline-block;
          }
          .gallery-text49 {
            display: inline-block;
          }
          .gallery-text50 {
            display: inline-block;
          }
          .gallery-text51 {
            display: inline-block;
          }
          .gallery-text52 {
            display: inline-block;
          }
          .gallery-text53 {
            display: inline-block;
          }
          .gallery-text54 {
            display: inline-block;
          }
          .gallery-text55 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Gallery
