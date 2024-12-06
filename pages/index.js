import React, { Fragment } from 'react'
import Head from 'next/head'

import NavbarInteractive from '../components/navbar-interactive'
import Hero from '../components/hero'
import Hero1 from '../components/hero1'
import FacilitiesHome1 from '../components/facilities-home-1'
import FromTheOwner from '../components/from-the-owner'
import MobileFacilities1 from '../components/mobile-facilities-1'
import GoogleReviews from '../components/google-reviews'
import VideoGallery from '../components/video-gallery'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>
            Marigold Celebration - Premier Event Venue in Hingna, Nagpur
          </title>
          <meta
            name="description"
            content="Marigold Celebration Banquet Hall, Hingna, Nagpur: Spacious Venues for Weddings and Events, Hosting up to 2000 Guests with Catering, Decor, and Event Services."
          />
          <meta
            property="og:title"
            content="Marigold Celebration - Premier Event Venue in Hingna, Nagpur"
          />
          <meta
            property="og:description"
            content="Marigold Celebration Banquet Hall, Hingna, Nagpur: Spacious Venues for Weddings and Events, Hosting up to 2000 Guests with Catering, Decor, and Event Services."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/de8e8e6e-fc3c-415d-9c09-ba0a82a476a4/42106b50-e92f-4e84-9bef-5b227b11f29d?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <NavbarInteractive
          login={
            <Fragment>
              <span className="home-text100">Login</span>
            </Fragment>
          }
          menu1={
            <Fragment>
              <span className="home-text101">Home</span>
            </Fragment>
          }
          menu2={
            <Fragment>
              <span className="home-text102">Facilities</span>
            </Fragment>
          }
          menu3={
            <Fragment>
              <span className="home-text103">Gallery</span>
            </Fragment>
          }
          menu4={
            <Fragment>
              <span className="home-text104">Events</span>
            </Fragment>
          }
          menu5={
            <Fragment>
              <span className="home-text105">Contacts</span>
            </Fragment>
          }
          menu41={
            <Fragment>
              <span className="home-text106">Plans</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="home-text107">Enquiry</span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="home-text108">Call Enquiry</span>
            </Fragment>
          }
          text21011={
            <Fragment>
              <span className="home-text109">Explore Facilities</span>
            </Fragment>
          }
          register12={
            <Fragment>
              <span className="home-text110">WhatsApp Enquiry</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name"
        ></NavbarInteractive>
        <Hero rootClassName="heroroot-class-name"></Hero>
        <Hero1
          heading1={
            <Fragment>
              <span className="home-text111">
                Banquet Hall &amp; Big Events Services in Hingna, Nagpur
              </span>
            </Fragment>
          }
          heading11={
            <Fragment>
              <span className="home-text112">
                Banquet Hall &amp; Big Events Services in Hingna, Nagpur
              </span>
            </Fragment>
          }
          rootClassName="hero1root-class-name"
        ></Hero1>
        <FacilitiesHome1
          slogan={
            <Fragment>
              <span className="home-text113">
                Please Do Consultation With Us For Your Any Requirements.
              </span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text114">Explore Our Facilities</span>
            </Fragment>
          }
          text2101={
            <Fragment>
              <span className="home-text115">Verify Review</span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="home-text116">
                Facilities At Marigold Celebration
              </span>
            </Fragment>
          }
          feature1Title={
            <Fragment>
              <span className="home-text117">
                <span>Spacious Venue with Capacity</span>
                <br></br>
              </span>
            </Fragment>
          }
          rootClassName="facilities-home1root-class-name"
          feature1Title1={
            <Fragment>
              <span className="home-text120">Fine Dining Catering</span>
            </Fragment>
          }
          feature1Title11={
            <Fragment>
              <span className="home-text121">
                Photography &amp; Videography Services 
              </span>
            </Fragment>
          }
          feature1Title111={
            <Fragment>
              <span className="home-text122">Décor &amp; Design Services</span>
            </Fragment>
          }
          feature1Title1111={
            <Fragment>
              <span className="home-text123">Parking &amp; Accessibility</span>
            </Fragment>
          }
          sectionDescription={
            <Fragment>
              <span className="home-text124">
                At Marigold Banquet Hall, we offer an exceptional range of
                facilities to ensure your event is as smooth, memorable, and
                stress-free as possible. Our venue is designed to cater to all
                types of occasions, from grand weddings to corporate events,
                while providing top-tier amenities.
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="home-text125">
                Our expansive banquet hall can accommodate up to 2000 guests
                comfortably. Whether you’re planning an extravagant wedding or
                an intimate gathering, our flexible seating arrangements and
                multiple event spaces ensure the perfect setting for your
                occasion.
              </span>
            </Fragment>
          }
          feature1Description1={
            <Fragment>
              <span className="home-text126">
                We offer customizable catering options to suit any event style.
                From lavish multi-course dinners to casual buffets, our in-house
                culinary team crafts delicious, bespoke menus that reflect your
                taste and preferences. Whether it’s traditional or contemporary
                cuisine, our chefs ensure a delightful dining experience for
                your guests.
              </span>
            </Fragment>
          }
          feature1Description11={
            <Fragment>
              <span className="home-text127">
                Preserve every special moment with our professional photography
                and videography services. Our experienced team specializes in
                capturing the essence of your event, whether it’s candid wedding
                moments or corporate highlights. We also provide event
                videography, ensuring that every detail is documented in high
                quality.
              </span>
            </Fragment>
          }
          feature1Description111={
            <Fragment>
              <span className="home-text128">
                Our dedicated décor team works closely with you to bring your
                vision to life. From elegant wedding themes to corporate setups,
                we provide tailored decoration services that match your event’s
                style. Whether you’re looking for luxurious floral arrangements
                or modern minimalist designs, we have you covered.
              </span>
            </Fragment>
          }
          feature1Description1111={
            <Fragment>
              <span className="home-text129">
                Our venue offers ample parking space to accommodate all your
                guests, ensuring a stress-free arrival experience. For added
                convenience, we provide lift access to all levels, making the
                venue fully accessible to everyone. Additionally, our venue’s
                iconic central location in Hingna, Nagpur, is easily accessible
                from all parts of the city.
              </span>
            </Fragment>
          }
        ></FacilitiesHome1>
        <FromTheOwner
          action={
            <Fragment>
              <span className="home-text130">
                Querry ?  feel free to contact us.
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text131">
                <span>Welcome to Marigold Celebration!</span>
                <br></br>
                <br></br>
                <span>
                  I am Arun Bhende, the proud owner of Marigold Celebration. It
                  gives me immense pleasure to welcome you to our banquet hall,
                  where we aim to turn your special moments into unforgettable
                  memories. At Marigold Celebration, we understand that every
                  event is unique and holds a deep significance in your life.
                  Whether it’s a wedding, reception, corporate event, or a
                  private celebration, our dedicated team ensures every detail
                  is meticulously planned and executed to perfection.
                </span>
                <br></br>
                <br></br>
                <span>
                  Our facilities are designed with modern amenities and elegant
                  decor to provide a seamless experience for you and your
                  guests. We take pride in offering flexible event spaces,
                  premium catering services, and personalized decor to meet your
                  vision. Your satisfaction is our priority, and we strive to
                  provide exceptional service to make your event truly
                  remarkable.
                </span>
                <br></br>
                <br></br>
                <span>
                  Thank you for considering Marigold Celebration as your venue
                  of choice. We look forward to hosting you and making your
                  special day extraordinary.
                </span>
                <br></br>
                <br></br>
                <span>Warm regards,</span>
                <br></br>
                <span>Arun Bhende</span>
                <br></br>
                <span>Marigold Celebration Team</span>
                <br></br>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text150">From the Owner</span>
            </Fragment>
          }
          heading11={
            <Fragment>
              <span className="home-text151">
                MariGold  Celebration Event Planning Services.
              </span>
            </Fragment>
          }
          faq1Question={
            <Fragment>
              <span className="home-text152">
                Weddings &amp; Receptions | Engagement Ceremonies &amp;
                Pre-Wedding Functions.
              </span>
            </Fragment>
          }
          faq2Question={
            <Fragment>
              <span className="home-text153">
                Birthday Parties &amp; Anniversaries | Social Gatherings &amp;
                Family Events.
              </span>
            </Fragment>
          }
          faq3Question={
            <Fragment>
              <span className="home-text154">
                Corporate Events &amp; Conferences | Award Ceremonies &amp; Gala
                Dinners.
              </span>
            </Fragment>
          }
          faq4Question={
            <Fragment>
              <span className="home-text155">
                Religious &amp; Cultural Events | Exhibitions &amp; Trade Shows.
              </span>
            </Fragment>
          }
          rootClassName="from-the-ownerroot-class-name"
        ></FromTheOwner>
        <MobileFacilities1
          slogan1={
            <Fragment>
              <span className="home-text156">
                At Marigold Banquet Hall, we offer an exceptional range of
                facilities to ensure your event is as smooth, memorable, and
                stress-free as possible. Our venue is designed to cater to all
                types of occasions, from grand weddings to corporate events,
                while providing top-tier amenities.
              </span>
            </Fragment>
          }
          text2101={
            <Fragment>
              <span className="home-text157">More Facilities</span>
            </Fragment>
          }
          faq1Question={
            <Fragment>
              <span className="home-text158">Spacious Venue with Capacity</span>
            </Fragment>
          }
          faq2Question={
            <Fragment>
              <span className="home-text159">Fine Dining Catering</span>
            </Fragment>
          }
          faq3Question={
            <Fragment>
              <span className="home-text160">
                Photography &amp; Videography Services
              </span>
            </Fragment>
          }
          faq4Question={
            <Fragment>
              <span className="home-text161">Décor &amp; Design Services</span>
            </Fragment>
          }
          rootClassName="mobile-facilities1root-class-name"
          sectionTitle1={
            <Fragment>
              <span className="home-text162">
                Facilities At Marigold Celebration
              </span>
            </Fragment>
          }
        ></MobileFacilities1>
        <GoogleReviews
          button={
            <Fragment>
              <span className="home-text163">Button</span>
            </Fragment>
          }
          text101={
            <Fragment>
              <span className="home-text164">marigoldcelebration.in</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text165">
                A Big Thank you - &quot;People Like You, Behide Our
                Success.&quot;
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text166">Google Reviews - Best only</span>
            </Fragment>
          }
          text1013={
            <Fragment>
              <span className="home-text167">marigoldcelebration.in</span>
            </Fragment>
          }
          text1014={
            <Fragment>
              <span className="home-text168">marigoldcelebration.in</span>
            </Fragment>
          }
          text2101={
            <Fragment>
              <span className="home-text169">Verify Review</span>
            </Fragment>
          }
          text2171={
            <Fragment>
              <span className="home-text170">
                Perfect for marriage, reception and big parties. The two storey
                hall is perfect for any kind of function. The celebration can
                take place at ground floor and the dining at first floor. Lift
                and stairs both are available. Hall is spacious and completly
                air conditioned. Rooms are also avaliable for guests. A small
                lawn is also avaliable which can be used for some small function
                in marriage. Many spots for photo and selfie are avaliable in
                completed building.
              </span>
            </Fragment>
          }
          text21013={
            <Fragment>
              <span className="home-text171">Verify Review</span>
            </Fragment>
          }
          text21014={
            <Fragment>
              <span className="home-text172">Verify Review</span>
            </Fragment>
          }
          text21713={
            <Fragment>
              <span className="home-text173">
                Perfect for marriage, reception and big parties. The two storey
                hall is perfect for any kind of function. The celebration can
                take place at ground floor and the dining at first floor. Lift
                and stairs both are available. Hall is spacious and completly
                air conditioned. Rooms are also avaliable for guests. A small
                lawn is also avaliable which can be used for some small function
                in marriage. Many spots for photo and selfie are avaliable in
                completed building.
              </span>
            </Fragment>
          }
          text21714={
            <Fragment>
              <span className="home-text174">
                Perfect for marriage, reception and big parties. The two storey
                hall is perfect for any kind of function. The celebration can
                take place at ground floor and the dining at first floor. Lift
                and stairs both are available. Hall is spacious and completly
                air conditioned. Rooms are also avaliable for guests. A small
                lawn is also avaliable which can be used for some small function
                in marriage. Many spots for photo and selfie are avaliable in
                completed building.
              </span>
            </Fragment>
          }
          text113251={
            <Fragment>
              <span className="home-text175">Atharva Diwate</span>
            </Fragment>
          }
          image1Title={
            <Fragment>
              <span className="home-text176">Image 1</span>
            </Fragment>
          }
          image2Title={
            <Fragment>
              <span className="home-text177">Corporate Event Venue</span>
            </Fragment>
          }
          image3Title={
            <Fragment>
              <span className="home-text178">Social Gathering Decor</span>
            </Fragment>
          }
          text1132513={
            <Fragment>
              <span className="home-text179">Atharva Diwate</span>
            </Fragment>
          }
          text1132514={
            <Fragment>
              <span className="home-text180">Atharva Diwate</span>
            </Fragment>
          }
          rootClassName="google-reviewsroot-class-name"
          image1Description={
            <Fragment>
              <span className="home-text181">
                <span>Our Banner Ads</span>
                <br></br>
              </span>
            </Fragment>
          }
          image2Description={
            <Fragment>
              <span className="home-text184">Our Grand Main Hall</span>
            </Fragment>
          }
          image3Description={
            <Fragment>
              <span className="home-text185">
                Our Grand Main Hall with Some Stage Decor arena
              </span>
            </Fragment>
          }
        ></GoogleReviews>
        <VideoGallery
          review1={
            <Fragment>
              <span className="home-text186">
                Our wedding at Marigold Banquet Hall was a dream come true! The
                venue was stunning, the food was delicious, and the staff went
                above and beyond to make our day special.
              </span>
            </Fragment>
          }
          action23={
            <Fragment>
              <span className="home-text187">Google Business Profile</span>
            </Fragment>
          }
          review11={
            <Fragment>
              <span className="home-text188">
                We warmly invite you to visit and explore Marigold Banquet Hall.
                It would be our pleasure to assist you with your event planning
                needs and show you everything we have to offer!
              </span>
            </Fragment>
          }
          text21011={
            <Fragment>
              <span className="home-text189">Visit Gallery</span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="home-text190">
                MariGold Celebration - Hingna, Nagpur
              </span>
            </Fragment>
          }
          rootClassName="video-galleryroot-class-name1"
          author1Position={
            <Fragment>
              <span className="home-text191">marigoldcelebration.in</span>
            </Fragment>
          }
        ></VideoGallery>
        <Footer
          link1={
            <Fragment>
              <span className="home-text192">Home</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text193">Facilities</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text194">Gallery</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text195">Events</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="home-text196">Contacts</span>
            </Fragment>
          }
          link6={
            <Fragment>
              <span className="home-text197">Corporate Events</span>
            </Fragment>
          }
          link7={
            <Fragment>
              <span className="home-text198">Weddings Plannings</span>
            </Fragment>
          }
          link8={
            <Fragment>
              <span className="home-text199">
                <span>Events Management</span>
                <br></br>
              </span>
            </Fragment>
          }
          link9={
            <Fragment>
              <span className="home-text202">Special Occasions</span>
            </Fragment>
          }
          link10={
            <Fragment>
              <span className="home-text203">Book Now</span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text204">
                We warmly invite you to visit and explore Marigold Banquet Hall.
                It would be our pleasure to assist you with your event planning
                needs and show you everything we have to offer!
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="home-text205">MariGold Celebration</span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="home-text206">terms &amp; conditions.</span>
            </Fragment>
          }
          termsLink1={
            <Fragment>
              <span className="home-text207">T &amp; C</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="home-text208">cookie policy.</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="home-text209">privacy policy.</span>
            </Fragment>
          }
          column1Title={
            <Fragment>
              <span className="home-text210">Contact Us</span>
            </Fragment>
          }
          column2Title={
            <Fragment>
              <span className="home-text211">Services</span>
            </Fragment>
          }
          cookiesLink1={
            <Fragment>
              <span className="home-text212">C &amp; P</span>
            </Fragment>
          }
          privacyLink1={
            <Fragment>
              <span className="home-text213">P P</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name2"
        ></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
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
          .home-text100 {
            display: inline-block;
          }
          .home-text101 {
            display: inline-block;
          }
          .home-text102 {
            display: inline-block;
          }
          .home-text103 {
            display: inline-block;
          }
          .home-text104 {
            display: inline-block;
          }
          .home-text105 {
            display: inline-block;
          }
          .home-text106 {
            display: inline-block;
          }
          .home-text107 {
            display: inline-block;
          }
          .home-text108 {
            display: inline-block;
          }
          .home-text109 {
            display: inline-block;
          }
          .home-text110 {
            display: inline-block;
          }
          .home-text111 {
            display: inline-block;
          }
          .home-text112 {
            display: inline-block;
          }
          .home-text113 {
            display: inline-block;
          }
          .home-text114 {
            display: inline-block;
          }
          .home-text115 {
            display: inline-block;
          }
          .home-text116 {
            display: inline-block;
          }
          .home-text117 {
            display: inline-block;
          }
          .home-text120 {
            display: inline-block;
          }
          .home-text121 {
            display: inline-block;
          }
          .home-text122 {
            display: inline-block;
          }
          .home-text123 {
            display: inline-block;
          }
          .home-text124 {
            display: inline-block;
          }
          .home-text125 {
            display: inline-block;
          }
          .home-text126 {
            display: inline-block;
          }
          .home-text127 {
            display: inline-block;
          }
          .home-text128 {
            display: inline-block;
          }
          .home-text129 {
            display: inline-block;
          }
          .home-text130 {
            display: inline-block;
          }
          .home-text131 {
            display: inline-block;
          }
          .home-text150 {
            display: inline-block;
          }
          .home-text151 {
            display: inline-block;
          }
          .home-text152 {
            display: inline-block;
          }
          .home-text153 {
            display: inline-block;
          }
          .home-text154 {
            display: inline-block;
          }
          .home-text155 {
            display: inline-block;
          }
          .home-text156 {
            display: inline-block;
          }
          .home-text157 {
            display: inline-block;
          }
          .home-text158 {
            display: inline-block;
          }
          .home-text159 {
            display: inline-block;
          }
          .home-text160 {
            display: inline-block;
          }
          .home-text161 {
            display: inline-block;
          }
          .home-text162 {
            display: inline-block;
          }
          .home-text163 {
            display: inline-block;
          }
          .home-text164 {
            display: inline-block;
          }
          .home-text165 {
            display: inline-block;
          }
          .home-text166 {
            display: inline-block;
          }
          .home-text167 {
            display: inline-block;
          }
          .home-text168 {
            display: inline-block;
          }
          .home-text169 {
            display: inline-block;
          }
          .home-text170 {
            display: inline-block;
          }
          .home-text171 {
            display: inline-block;
          }
          .home-text172 {
            display: inline-block;
          }
          .home-text173 {
            display: inline-block;
          }
          .home-text174 {
            display: inline-block;
          }
          .home-text175 {
            display: inline-block;
          }
          .home-text176 {
            display: inline-block;
          }
          .home-text177 {
            display: inline-block;
          }
          .home-text178 {
            display: inline-block;
          }
          .home-text179 {
            display: inline-block;
          }
          .home-text180 {
            display: inline-block;
          }
          .home-text181 {
            display: inline-block;
          }
          .home-text184 {
            display: inline-block;
          }
          .home-text185 {
            display: inline-block;
          }
          .home-text186 {
            display: inline-block;
          }
          .home-text187 {
            display: inline-block;
          }
          .home-text188 {
            display: inline-block;
          }
          .home-text189 {
            display: inline-block;
          }
          .home-text190 {
            display: inline-block;
          }
          .home-text191 {
            display: inline-block;
          }
          .home-text192 {
            display: inline-block;
          }
          .home-text193 {
            display: inline-block;
          }
          .home-text194 {
            display: inline-block;
          }
          .home-text195 {
            display: inline-block;
          }
          .home-text196 {
            display: inline-block;
          }
          .home-text197 {
            display: inline-block;
          }
          .home-text198 {
            display: inline-block;
          }
          .home-text199 {
            display: inline-block;
          }
          .home-text202 {
            display: inline-block;
          }
          .home-text203 {
            display: inline-block;
          }
          .home-text204 {
            display: inline-block;
          }
          .home-text205 {
            display: inline-block;
          }
          .home-text206 {
            display: inline-block;
          }
          .home-text207 {
            display: inline-block;
          }
          .home-text208 {
            display: inline-block;
          }
          .home-text209 {
            display: inline-block;
          }
          .home-text210 {
            display: inline-block;
          }
          .home-text211 {
            display: inline-block;
          }
          .home-text212 {
            display: inline-block;
          }
          .home-text213 {
            display: inline-block;
          }
          @media (max-width: 599px) {
            .home-text108 {
              line-height: 1.4;
            }
            .home-text110 {
              line-height: 1.4;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
