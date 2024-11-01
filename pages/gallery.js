import React, { Fragment } from 'react'
import Head from 'next/head'

import VideoGallery from '../components/video-gallery'
import NavbarInteractive from '../components/navbar-interactive'

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
        <VideoGallery
          review1={
            <Fragment>
              <span className="gallery-text10">
                Our wedding at Marigold Banquet Hall was a dream come true! The
                venue was stunning, the food was delicious, and the staff went
                above and beyond to make our day special.
              </span>
            </Fragment>
          }
          action23={
            <Fragment>
              <span className="gallery-text11">Google Business Profile</span>
            </Fragment>
          }
          review11={
            <Fragment>
              <span className="gallery-text12">
                We warmly invite you to visit and explore Marigold Banquet Hall.
                It would be our pleasure to assist you with your event planning
                needs and show you everything we have to offer!
              </span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="gallery-text13">
                MariGold Celebration - Hingna, Nagpur
              </span>
            </Fragment>
          }
          rootClassName="video-galleryroot-class-name"
          author1Position={
            <Fragment>
              <span className="gallery-text14">marigoldcelebration.in</span>
            </Fragment>
          }
        ></VideoGallery>
        <NavbarInteractive
          login={
            <Fragment>
              <span className="gallery-text15">Login</span>
            </Fragment>
          }
          menu1={
            <Fragment>
              <span className="gallery-text16">Home</span>
            </Fragment>
          }
          menu2={
            <Fragment>
              <span className="gallery-text17">Facilities</span>
            </Fragment>
          }
          menu3={
            <Fragment>
              <span className="gallery-text18">Gallery</span>
            </Fragment>
          }
          menu4={
            <Fragment>
              <span className="gallery-text19">Events</span>
            </Fragment>
          }
          menu5={
            <Fragment>
              <span className="gallery-text20">Contacts</span>
            </Fragment>
          }
          menu6={
            <Fragment>
              <span className="gallery-text21">Facilities</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="gallery-text22">Login</span>
            </Fragment>
          }
          mmenu1={
            <Fragment>
              <span className="gallery-text23">Home</span>
            </Fragment>
          }
          mmenu2={
            <Fragment>
              <span className="gallery-text24">Facilities</span>
            </Fragment>
          }
          mmenu3={
            <Fragment>
              <span className="gallery-text25">Gallery</span>
            </Fragment>
          }
          mmenu4={
            <Fragment>
              <span className="gallery-text26">Events</span>
            </Fragment>
          }
          mmenu5={
            <Fragment>
              <span className="gallery-text27">Contacts</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="gallery-text28">Enquiry</span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="gallery-text29">Enquiry</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name3"
        ></NavbarInteractive>
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
        `}
      </style>
    </>
  )
}

export default Gallery
