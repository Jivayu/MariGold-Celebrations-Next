import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import NavbarInteractive from '../components/navbar-interactive'
import PageHeadersEvents from '../components/page-headers-events'
import EventsDetails from '../components/events-details'
import Footer from '../components/footer'

const Events = (props) => {
  return (
    <>
      <div className="events-container">
        <Head>
          <title>
            Events - Marigold Celebration Banquet Hall - Events Venue in Hingna,
            Nagpur
          </title>
          <meta
            name="description"
            content="Marigold Celebration Banquet Hall, Hingna, Nagpur: Spacious Venues for Weddings and Events, Hosting up to 2000 Guests with Catering, Decor, and Event Services."
          />
          <meta
            property="og:title"
            content="Events - Marigold Celebration Banquet Hall - Events Venue in Hingna, Nagpur"
          />
          <meta
            property="og:description"
            content="Marigold Celebration Banquet Hall, Hingna, Nagpur: Spacious Venues for Weddings and Events, Hosting up to 2000 Guests with Catering, Decor, and Event Services."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/de8e8e6e-fc3c-415d-9c09-ba0a82a476a4/7f7d755a-0d03-4715-ab49-e885ec4ae90d?org_if_sml=1&amp;force_format=original"
          />
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
          menu41={
            <Fragment>
              <span className="events-text16">Plans</span>
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
              <span className="events-text23">Call Enquiry</span>
            </Fragment>
          }
          text21011={
            <Fragment>
              <span className="events-text24">Explore Facilities</span>
            </Fragment>
          }
          register12={
            <Fragment>
              <span className="events-text25">WhatsApp Enquiry</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name4"
        ></NavbarInteractive>
        <PageHeadersEvents
          action1={
            <Fragment>
              <span className="events-text26">Contact Us</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="events-text27">View Event Spaces</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="events-text28">
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
              <span className="events-text29">
                Welcome to Marigold Celebration Hall - Where Every Detail
                Matters
              </span>
            </Fragment>
          }
          rootClassName="page-headers-eventsroot-class-name"
        ></PageHeadersEvents>
        <EventsDetails
          button={
            <Fragment>
              <span className="events-text30">Weddings &amp; Receptions</span>
            </Fragment>
          }
          button1={
            <Fragment>
              <span className="events-text31">Engagement Ceremonies</span>
            </Fragment>
          }
          button2={
            <Fragment>
              <span className="events-text32">Pre-Wedding Functions</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="events-text33">
                Celebrate the start of your lifelong journey together at
                Marigold Celebration Banquet Hall. Our sophisticated venue
                offers an intimate and unforgettable setting for your engagement
                ceremony, where you can share this joyous moment with your
                nearest and dearest.
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="events-text34">
                Our venue is designed to provide a welcoming and elegant
                atmosphere that reflects the excitement of this special day.
                From refined decor choices to soft, romantic lighting, we create
                an environment that mirrors your unique love story.
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="events-text35">
                Understanding the importance of this milestone, we collaborate
                closely with you to design a decor theme that resonates with
                your vision. Whether it’s a delicate floral display or a
                contemporary stage design, we ensure every detail is tailored to
                your taste, making your engagement ceremony both beautiful and
                memorable.
              </span>
            </Fragment>
          }
          content4={
            <Fragment>
              <span className="events-text36">
                Savor exquisite dishes with our personalized catering services,
                carefully crafted by our expert chefs. We provide a curated
                selection of appetizers, main courses, and desserts, offering a
                culinary experience that complements your celebration and
                delights your guests.
              </span>
            </Fragment>
          }
          content5={
            <Fragment>
              <span className="events-text37">
                Our experienced event coordinators are committed to flawless
                execution, handling every aspect of your engagement ceremony so
                that you can focus on making memories. From initial planning to
                the final farewell, we ensure your event runs smoothly and
                effortlessly.
              </span>
            </Fragment>
          }
          content6={
            <Fragment>
              <span className="events-text38">
                Whether you envision a traditional engagement or a modern
                celebration, we offer customizable packages and adaptable venue
                layouts to suit your preferences. Our versatile spaces can
                accommodate both intimate and grand gatherings, providing the
                perfect backdrop for your engagement celebration.
              </span>
            </Fragment>
          }
          content7={
            <Fragment>
              <span className="events-text39">
                Your wedding day marks the beginning of a beautiful journey, and
                at Marigold Celebration Banquet Hall, we are dedicated to making
                every moment of it extraordinary. Our venue is designed to be
                the perfect backdrop for your celebration, whether you&apos;re
                planning an elegant traditional wedding or a chic, contemporary
                reception. We work tirelessly to bring your vision to life,
                ensuring your day is as special as the love you share.
              </span>
            </Fragment>
          }
          content9={
            <Fragment>
              <span className="events-text40">
                Delight your guests with a culinary journey crafted by our
                talented chefs. Our diverse menu options include everything from
                classic wedding feasts to modern fusion cuisines, ensuring
                there’s something to suit every palate. Whether you prefer a
                grand buffet or an exquisite plated dinner, our catering service
                will leave a lasting impression.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="events-text41">
                &quot;A Perfect Beginning to Your Forever: Celebrate Your
                Engagement at Marigold Celebration&quot;
              </span>
            </Fragment>
          }
          heading2={
            <Fragment>
              <span className="events-text42">Charming Atmosphere</span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="events-text43">Custom Decor</span>
            </Fragment>
          }
          heading4={
            <Fragment>
              <span className="events-text44">Delicious Catering</span>
            </Fragment>
          }
          heading5={
            <Fragment>
              <span className="events-text45">Effortless Planning</span>
            </Fragment>
          }
          heading6={
            <Fragment>
              <span className="events-text46">Flexible Event Options</span>
            </Fragment>
          }
          heading7={
            <Fragment>
              <span className="events-text47">
                &quot;Where Dreams Meet Reality: Crafting Unforgettable Weddings
                &amp; Receptions&quot;
              </span>
            </Fragment>
          }
          heading8={
            <Fragment>
              <span className="events-text48">Tailored Decor</span>
            </Fragment>
          }
          heading9={
            <Fragment>
              <span className="events-text49">Gourmet Catering</span>
            </Fragment>
          }
          content10={
            <Fragment>
              <span className="events-text50">
                Begin your wedding journey with vibrant and memorable
                pre-wedding events at Marigold Celebration Banquet Hall. Our
                versatile venue offers an ideal setting for all your pre-wedding
                functions, including Mehendi, Haldi, and Sangeet, blending
                tradition with contemporary elegance.
              </span>
            </Fragment>
          }
          content11={
            <Fragment>
              <span className="events-text51">
                Our beautifully designed spaces provide a vibrant atmosphere for
                your Mehendi and Haldi ceremonies. From colorful decor and
                floral accents to thematic setups, we craft a joyful environment
                where family and friends can gather to celebrate these treasured
                rituals in style.
              </span>
            </Fragment>
          }
          content12={
            <Fragment>
              <span className="events-text52">
                Make your Sangeet a night to remember in our spacious hall,
                designed to host lively dance performances and musical
                festivities. With a fully equipped stage, professional sound
                systems, and customizable lighting, we create the perfect
                ambiance for a high-energy evening of celebration. Whether you
                prefer traditional or modern elements, our venue adapts
                seamlessly to your vision.
              </span>
            </Fragment>
          }
          content13={
            <Fragment>
              <span className="events-text53">
                Every couple has their unique style, and we work closely with
                you to bring your ideas to life. Our experienced in-house decor
                team ensures that the venue is beautifully set up according to
                your theme, whether it&apos;s classic Indian motifs or modern
                chic designs, elevating the entire celebration.
              </span>
            </Fragment>
          }
          content91={
            <Fragment>
              <span className="events-text54">
                We understand that your wedding day should be stress-free, and
                our experienced event coordinators are here to ensure everything
                runs smoothly. From planning the flow of the ceremony to
                overseeing the reception, we handle all the details so you can
                focus on enjoying every moment. Our commitment is to provide
                flawless execution, ensuring your celebration is everything
                you’ve imagined and more.
              </span>
            </Fragment>
          }
          heading10={
            <Fragment>
              <span className="events-text55">
                &quot;Create Unforgettable Memories with Pre-Wedding
                Celebrations at Marigold Celebration&quot;
              </span>
            </Fragment>
          }
          heading11={
            <Fragment>
              <span className="events-text56">
                Lively Mehendi &amp; Haldi Ceremonies
              </span>
            </Fragment>
          }
          heading12={
            <Fragment>
              <span className="events-text57">Energetic Sangeet Nights</span>
            </Fragment>
          }
          heading13={
            <Fragment>
              <span className="events-text58">
                Tailored Decor &amp; Customization
              </span>
            </Fragment>
          }
          heading91={
            <Fragment>
              <span className="events-text59">Seamless Event Management</span>
            </Fragment>
          }
          content131={
            <Fragment>
              <span className="events-text60">
                Delight your guests with a tailored menu, featuring a diverse
                selection of dishes. Our expert chefs prepare everything from
                regional favorites to international delicacies, ensuring that
                every bite complements the festive spirit of your pre-wedding
                functions.
              </span>
            </Fragment>
          }
          content911={
            <Fragment>
              <span className="events-text61">
                Our expansive banquet hall can be transformed to suit any style,
                from intimate gatherings to grand celebrations. Equipped with
                cutting-edge sound and lighting technology, luxurious seating
                arrangements, and an inviting atmosphere, our venue offers
                everything needed to make your wedding day unforgettable.
              </span>
            </Fragment>
          }
          heading131={
            <Fragment>
              <span className="events-text62">
                Exceptional Catering Services
              </span>
            </Fragment>
          }
          heading911={
            <Fragment>
              <span className="events-text63">Versatile Venue Options</span>
            </Fragment>
          }
          content1311={
            <Fragment>
              <span className="events-text64">
                With our dedicated event coordinators, you can rest assured that
                every detail is handled, from setup to execution. We take care
                of all logistics, so you can focus on enjoying the moment with
                your loved ones, making these pre-wedding events as stress-free
                as possible.
              </span>
            </Fragment>
          }
          content9111={
            <Fragment>
              <span className="events-text65">
                At Marigold Celebration, we believe every couple is unique, and
                so is every wedding. We offer a variety of customizable packages
                that allow you to select the services you need—from decor and
                catering to entertainment and photography—tailoring the entire
                event to your vision, needs, and budget.
              </span>
            </Fragment>
          }
          heading1311={
            <Fragment>
              <span className="events-text66">Seamless Event Planning</span>
            </Fragment>
          }
          heading9111={
            <Fragment>
              <span className="events-text67">Customized Packages</span>
            </Fragment>
          }
        ></EventsDetails>
        <Footer
          link1={
            <Fragment>
              <span className="events-text68">Home</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="events-text69">Facilities</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="events-text70">Gallery</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="events-text71">Events</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="events-text72">Contacts</span>
            </Fragment>
          }
          link6={
            <Fragment>
              <span className="events-text73">Corporate Events</span>
            </Fragment>
          }
          link7={
            <Fragment>
              <span className="events-text74">Weddings Plannings</span>
            </Fragment>
          }
          link8={
            <Fragment>
              <span className="events-text75">
                <span>Events Management</span>
                <br></br>
              </span>
            </Fragment>
          }
          link9={
            <Fragment>
              <span className="events-text78">Special Occasions</span>
            </Fragment>
          }
          link10={
            <Fragment>
              <span className="events-text79">Book Now</span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="events-text80">
                We warmly invite you to visit and explore Marigold Banquet Hall.
                It would be our pleasure to assist you with your event planning
                needs and show you everything we have to offer!
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="events-text81">MariGold Celebration</span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="events-text82">terms &amp; conditions.</span>
            </Fragment>
          }
          termsLink1={
            <Fragment>
              <span className="events-text83">T &amp; C</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="events-text84">cookie policy.</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="events-text85">privacy policy.</span>
            </Fragment>
          }
          column1Title={
            <Fragment>
              <span className="events-text86">Contact Us</span>
            </Fragment>
          }
          column2Title={
            <Fragment>
              <span className="events-text87">Services</span>
            </Fragment>
          }
          cookiesLink1={
            <Fragment>
              <span className="events-text88">C &amp; P</span>
            </Fragment>
          }
          privacyLink1={
            <Fragment>
              <span className="events-text89">P P</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name4"
        ></Footer>
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
          .events-text28 {
            display: inline-block;
          }
          .events-text29 {
            display: inline-block;
          }
          .events-text30 {
            display: inline-block;
          }
          .events-text31 {
            display: inline-block;
          }
          .events-text32 {
            display: inline-block;
          }
          .events-text33 {
            display: inline-block;
          }
          .events-text34 {
            display: inline-block;
          }
          .events-text35 {
            display: inline-block;
          }
          .events-text36 {
            display: inline-block;
          }
          .events-text37 {
            display: inline-block;
          }
          .events-text38 {
            display: inline-block;
          }
          .events-text39 {
            display: inline-block;
          }
          .events-text40 {
            display: inline-block;
          }
          .events-text41 {
            display: inline-block;
          }
          .events-text42 {
            display: inline-block;
          }
          .events-text43 {
            display: inline-block;
          }
          .events-text44 {
            display: inline-block;
          }
          .events-text45 {
            display: inline-block;
          }
          .events-text46 {
            display: inline-block;
          }
          .events-text47 {
            display: inline-block;
          }
          .events-text48 {
            display: inline-block;
          }
          .events-text49 {
            display: inline-block;
          }
          .events-text50 {
            display: inline-block;
          }
          .events-text51 {
            display: inline-block;
          }
          .events-text52 {
            display: inline-block;
          }
          .events-text53 {
            display: inline-block;
          }
          .events-text54 {
            display: inline-block;
          }
          .events-text55 {
            display: inline-block;
          }
          .events-text56 {
            display: inline-block;
          }
          .events-text57 {
            display: inline-block;
          }
          .events-text58 {
            display: inline-block;
          }
          .events-text59 {
            display: inline-block;
          }
          .events-text60 {
            display: inline-block;
          }
          .events-text61 {
            display: inline-block;
          }
          .events-text62 {
            display: inline-block;
          }
          .events-text63 {
            display: inline-block;
          }
          .events-text64 {
            display: inline-block;
          }
          .events-text65 {
            display: inline-block;
          }
          .events-text66 {
            display: inline-block;
          }
          .events-text67 {
            display: inline-block;
          }
          .events-text68 {
            display: inline-block;
          }
          .events-text69 {
            display: inline-block;
          }
          .events-text70 {
            display: inline-block;
          }
          .events-text71 {
            display: inline-block;
          }
          .events-text72 {
            display: inline-block;
          }
          .events-text73 {
            display: inline-block;
          }
          .events-text74 {
            display: inline-block;
          }
          .events-text75 {
            display: inline-block;
          }
          .events-text78 {
            display: inline-block;
          }
          .events-text79 {
            display: inline-block;
          }
          .events-text80 {
            display: inline-block;
          }
          .events-text81 {
            display: inline-block;
          }
          .events-text82 {
            display: inline-block;
          }
          .events-text83 {
            display: inline-block;
          }
          .events-text84 {
            display: inline-block;
          }
          .events-text85 {
            display: inline-block;
          }
          .events-text86 {
            display: inline-block;
          }
          .events-text87 {
            display: inline-block;
          }
          .events-text88 {
            display: inline-block;
          }
          .events-text89 {
            display: inline-block;
          }
          @media (max-width: 599px) {
            .events-text23 {
              line-height: 1.4;
            }
            .events-text25 {
              line-height: 1.4;
            }
          }
        `}
      </style>
    </>
  )
}

export default Events

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
