import React, { Fragment } from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import NavbarInteractive from '../components/navbar-interactive'
import Hero from '../components/hero'
import AboutMariGold1 from '../components/about-mari-gold-1'
import MobileFacilities1 from '../components/mobile-facilities-1'
import VideoGallery from '../components/video-gallery'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Best Banquet Hall & Big Events Services in Nagpur</title>
          <meta
            name="description"
            content="Marigold Celebration Banquet Hall, Hingna, Nagpur: Spacious Venues for Weddings and Events, Hosting up to 2000 Guests with Catering, Decor, and Event Services."
          />
          <meta
            property="og:title"
            content="Marigold Banquet Hall - Nagpur's Premier Event Venue"
          />
          <meta
            property="og:description"
            content="Marigold Celebration Banquet Hall, Hingna, Nagpur: Spacious Venues for Weddings and Events, Hosting up to 2000 Guests with Catering, Decor, and Event Services."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/de8e8e6e-fc3c-415d-9c09-ba0a82a476a4/42106b50-e92f-4e84-9bef-5b227b11f29d?org_if_sml=1&amp;force_format=original"
          />
          <meta name="robots" content="noindex" />
        </Head>
        <NavbarInteractive
          login={
            <Fragment>
              <span className="home-text10">Login</span>
            </Fragment>
          }
          menu1={
            <Fragment>
              <span className="home-text11">Home</span>
            </Fragment>
          }
          menu2={
            <Fragment>
              <span className="home-text12">Facilities</span>
            </Fragment>
          }
          menu3={
            <Fragment>
              <span className="home-text13">Gallery</span>
            </Fragment>
          }
          menu4={
            <Fragment>
              <span className="home-text14">Events</span>
            </Fragment>
          }
          menu5={
            <Fragment>
              <span className="home-text15">Contacts</span>
            </Fragment>
          }
          menu6={
            <Fragment>
              <span className="home-text16">Facilities</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="home-text17">Login</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="home-text18">Enquiry</span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="home-text19">Enquiry</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name"
        ></NavbarInteractive>
        <Hero
          action1={
            <Fragment>
              <span className="home-text20">Shop Now</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text21">Services</span>
            </Fragment>
          }
          action21={
            <Fragment>
              <span className="home-text22">Explore Our Facilities</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text23">
                Banquet Hall &amp; Big Events Services in Hingna, Nagpur
              </span>
            </Fragment>
          }
          image4Src="/images/circle-background.svg"
          rootClassName="heroroot-class-name"
        ></Hero>
        <AboutMariGold1
          action={
            <Fragment>
              <span className="home-text24">
                Querry ?  feel free to contact us.
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text25">
                <span>
                  Marigold Celebration Hall, located in the heart of Hingna,
                  Nagpur, is the premier venue for hosting unforgettable events.
                  With a grand capacity of up to 2000 guests, it’s the perfect
                  setting for a wide variety of occasions—from luxurious
                  weddings and large corporate events to intimate birthday
                  parties and social gatherings. Our modern facilities and
                  top-notch amenities ensure every event is seamless,
                  successful, and memorable for both hosts and attendees.
                </span>
                <br className="Content"></br>
                <br className="Content"></br>
                <span>
                  Conveniently situated in Hingna, Nagpur, Marigold Banquet Hall
                  provides easy access for all your guests. Whether you’re
                  planning an extravagant celebration or a more private
                  function, our flexible event spaces can cater to your needs.
                  The venue boasts a grand banquet hall for large gatherings,
                  along with smaller, adaptable spaces for more intimate events,
                  making it the ideal destination for any occasion.
                </span>
                <br className="Content"></br>
                <br className="Content"></br>
                <span>
                  Beyond offering a venue, Marigold Banquet Hall delivers
                  comprehensive event services. These may include expert event
                  planning, bespoke catering, advanced audiovisual setups, and
                  professional décor solutions, tailored to suit your unique
                  requirements. Our experienced team works closely with you to
                  ensure that your event is crafted to perfection, creating
                  memories that last a lifetime.
                </span>
                <br className="Content"></br>
                <br className="Content"></br>
                <span>
                  For those interested in hosting a grand event at Marigold
                  Banquet Hall, we encourage you to reach out to our management
                  team for detailed information on our event services, pricing,
                  availability, and additional amenities. Let us turn your
                  special occasion into an extraordinary experience.
                </span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text36">
                Best Banquet Hall &amp; Big Events Services in Hingna, Nagpur
              </span>
            </Fragment>
          }
          faq1Question={
            <Fragment>
              <span className="home-text37">
                <span>Weddings</span>
                <span className="h3">
                  {' '}
                  &amp; Receptions | Engagement Ceremonies &amp; Pre-Wedding
                  Functions.
                </span>
              </span>
            </Fragment>
          }
          faq2Question={
            <Fragment>
              <span className="home-text40">
                Birthday Parties &amp; Anniversaries | Social Gatherings &amp;
                Family Events.
              </span>
            </Fragment>
          }
          faq3Question={
            <Fragment>
              <span className="home-text41">
                Corporate Events &amp; Conferences | Award Ceremonies &amp; Gala
                Dinners.
              </span>
            </Fragment>
          }
          faq4Question={
            <Fragment>
              <span className="home-text42">
                Religious &amp; Cultural Events | Exhibitions &amp; Trade Shows.
              </span>
            </Fragment>
          }
        ></AboutMariGold1>
        <MobileFacilities1
          heading={
            <Fragment>
              <span className="home-text43">
                Facilities We Provide at Marigold Celebration
              </span>
            </Fragment>
          }
          heading2={
            <Fragment>
              <span className="home-text44">
                At Marigold Banquet Hall, we offer an exceptional range of
                facilities to ensure your event is as smooth, memorable, and
                stress-free as possible. Our venue is designed to cater to all
                types of occasions, from grand weddings to corporate events,
                while providing top-tier amenities.
              </span>
            </Fragment>
          }
          action231={
            <Fragment>
              <span className="home-text45">Explore More Facilities</span>
            </Fragment>
          }
          faq1Question={
            <Fragment>
              <span className="home-text46">Spacious Venue with Capacity</span>
            </Fragment>
          }
          faq2Question={
            <Fragment>
              <span className="home-text47">Fine Dining Catering</span>
            </Fragment>
          }
          faq3Question={
            <Fragment>
              <span className="home-text48">
                Photography &amp; Videography Services
              </span>
            </Fragment>
          }
          faq4Question={
            <Fragment>
              <span className="home-text49">Décor &amp; Design Services</span>
            </Fragment>
          }
          rootClassName="mobile-facilities1root-class-name"
        ></MobileFacilities1>
        <VideoGallery
          review1={
            <Fragment>
              <span className="home-text50">
                Our wedding at Marigold Banquet Hall was a dream come true! The
                venue was stunning, the food was delicious, and the staff went
                above and beyond to make our day special.
              </span>
            </Fragment>
          }
          action23={
            <Fragment>
              <span className="home-text51">Google Business Profile</span>
            </Fragment>
          }
          review11={
            <Fragment>
              <span className="home-text52">
                We warmly invite you to visit and explore Marigold Banquet Hall.
                It would be our pleasure to assist you with your event planning
                needs and show you everything we have to offer!
              </span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="home-text53">
                MariGold Celebration - Hingna, Nagpur
              </span>
            </Fragment>
          }
          rootClassName="video-galleryroot-class-name1"
          author1Position={
            <Fragment>
              <span className="home-text54">marigoldcelebration.in</span>
            </Fragment>
          }
        ></VideoGallery>
        <Footer
          link1={
            <Fragment>
              <span className="home-text55">Home</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text56">Facilities</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text57">Gallery</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text58">Events</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="home-text59">Contacts</span>
            </Fragment>
          }
          link6={
            <Fragment>
              <span className="home-text60">Corporate Events</span>
            </Fragment>
          }
          link7={
            <Fragment>
              <span className="home-text61">Weddings Plannings</span>
            </Fragment>
          }
          link8={
            <Fragment>
              <span className="home-text62">
                <span>Events Management</span>
                <br></br>
              </span>
            </Fragment>
          }
          link9={
            <Fragment>
              <span className="home-text65">Special Occasions</span>
            </Fragment>
          }
          link10={
            <Fragment>
              <span className="home-text66">Book Now</span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text67">
                We warmly invite you to visit and explore Marigold Banquet Hall.
                It would be our pleasure to assist you with your event planning
                needs and show you everything we have to offer!
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="home-text68">MariGold Celebration</span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="home-text69">terms &amp; conditions.</span>
            </Fragment>
          }
          termsLink1={
            <Fragment>
              <span className="home-text70">T &amp; C</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="home-text71">cookie policy.</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="home-text72">privacy policy.</span>
            </Fragment>
          }
          column1Title={
            <Fragment>
              <span className="home-text73">Contact Us</span>
            </Fragment>
          }
          column2Title={
            <Fragment>
              <span className="home-text74">Services</span>
            </Fragment>
          }
          cookiesLink1={
            <Fragment>
              <span className="home-text75">C &amp; P</span>
            </Fragment>
          }
          privacyLink1={
            <Fragment>
              <span className="home-text76">P P</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name2"
        ></Footer>
        <div>
          <div className="home-container3">
            <React.Fragment>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n#scrollbar::-webkit-scrollbar-track\n{\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n\tborder-radius: 10px;\n\tbackground-color: #F5F5F5;\n}\n\n#scrollbar::-webkit-scrollbar\n{\n\theight: 12px;\n\tbackground-color: #F5F5F5;\n\tborder-radius: 10px;\n}\n\n#scrollbar::-webkit-scrollbar-thumb\n{\n\tborder-radius: 10px;\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\n\tbackground-color: #555;\n}\n',
                }}
              />
            </React.Fragment>
          </div>
        </div>
        <div>
          <div className="home-container5">
            <React.Fragment>
              <Script>{`
    ScrollReveal().reveal('.speaker');
    ScrollReveal().reveal('.image-notes');
`}</Script>
            </React.Fragment>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-size: auto;
            background-image: url('/images/marigold-brand-name%20-%20copy11-1500w.webp');
            background-position: top;
          }
          .home-text10 {
            display: inline-block;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text12 {
            display: inline-block;
          }
          .home-text13 {
            display: inline-block;
          }
          .home-text14 {
            display: inline-block;
          }
          .home-text15 {
            display: inline-block;
          }
          .home-text16 {
            display: inline-block;
          }
          .home-text17 {
            display: inline-block;
          }
          .home-text18 {
            display: inline-block;
          }
          .home-text19 {
            display: inline-block;
          }
          .home-text20 {
            display: inline-block;
          }
          .home-text21 {
            display: inline-block;
          }
          .home-text22 {
            display: inline-block;
          }
          .home-text23 {
            display: inline-block;
          }
          .home-text24 {
            display: inline-block;
          }
          .home-text25 {
            display: inline-block;
          }
          .home-text36 {
            display: inline-block;
          }
          .home-text37 {
            display: inline-block;
          }
          .home-text40 {
            display: inline-block;
          }
          .home-text41 {
            display: inline-block;
          }
          .home-text42 {
            display: inline-block;
          }
          .home-text43 {
            display: inline-block;
          }
          .home-text44 {
            display: inline-block;
          }
          .home-text45 {
            display: inline-block;
          }
          .home-text46 {
            display: inline-block;
          }
          .home-text47 {
            display: inline-block;
          }
          .home-text48 {
            display: inline-block;
          }
          .home-text49 {
            display: inline-block;
          }
          .home-text50 {
            display: inline-block;
          }
          .home-text51 {
            display: inline-block;
          }
          .home-text52 {
            display: inline-block;
          }
          .home-text53 {
            display: inline-block;
          }
          .home-text54 {
            display: inline-block;
          }
          .home-text55 {
            display: inline-block;
          }
          .home-text56 {
            display: inline-block;
          }
          .home-text57 {
            display: inline-block;
          }
          .home-text58 {
            display: inline-block;
          }
          .home-text59 {
            display: inline-block;
          }
          .home-text60 {
            display: inline-block;
          }
          .home-text61 {
            display: inline-block;
          }
          .home-text62 {
            display: inline-block;
          }
          .home-text65 {
            display: inline-block;
          }
          .home-text66 {
            display: inline-block;
          }
          .home-text67 {
            display: inline-block;
          }
          .home-text68 {
            display: inline-block;
          }
          .home-text69 {
            display: inline-block;
          }
          .home-text70 {
            display: inline-block;
          }
          .home-text71 {
            display: inline-block;
          }
          .home-text72 {
            display: inline-block;
          }
          .home-text73 {
            display: inline-block;
          }
          .home-text74 {
            display: inline-block;
          }
          .home-text75 {
            display: inline-block;
          }
          .home-text76 {
            display: inline-block;
          }
          .home-container3 {
            display: contents;
          }
          .home-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Home
