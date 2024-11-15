import React, { Fragment } from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import NavbarInteractive from '../components/navbar-interactive'
import Hero from '../components/hero'
import AboutMariGold1 from '../components/about-mari-gold-1'
import FacilitiesHome1 from '../components/facilities-home-1'
import MobileFacilities1 from '../components/mobile-facilities-1'
import GoogleReviews from '../components/google-reviews'
import VideoGallery from '../components/video-gallery'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
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
          menu6={
            <Fragment>
              <span className="home-text106">Facilities</span>
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
          register12={
            <Fragment>
              <span className="home-text109">WhatsApp Enquiry</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name"
        ></NavbarInteractive>
        <Hero
          image4Src="/images/circle-background.svg"
          rootClassName="heroroot-class-name"
        ></Hero>
        <AboutMariGold1
          action={
            <Fragment>
              <span className="home-text110">
                Querry ?  feel free to contact us.
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text111">
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
              <span className="home-text122">
                MariGold Celebration - Hingna, Nagpur
              </span>
            </Fragment>
          }
          heading11={
            <Fragment>
              <span className="home-text123">
                Banquet Hall &amp; Events Services Near Nagpur
              </span>
            </Fragment>
          }
          faq1Question={
            <Fragment>
              <span className="home-text124">
                Weddings &amp; Receptions | Engagement Ceremonies &amp;
                Pre-Wedding Functions.
              </span>
            </Fragment>
          }
          faq2Question={
            <Fragment>
              <span className="home-text125">
                Birthday Parties &amp; Anniversaries | Social Gatherings &amp;
                Family Events.
              </span>
            </Fragment>
          }
          faq3Question={
            <Fragment>
              <span className="home-text126">
                Corporate Events &amp; Conferences | Award Ceremonies &amp; Gala
                Dinners.
              </span>
            </Fragment>
          }
          faq4Question={
            <Fragment>
              <span className="home-text127">
                Religious &amp; Cultural Events | Exhibitions &amp; Trade Shows.
              </span>
            </Fragment>
          }
        ></AboutMariGold1>
        <FacilitiesHome1
          slogan={
            <Fragment>
              <span className="home-text128">
                Please Do Consultation With Us For Your Any Requirements.
              </span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text129">Explore Our Facilities</span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="home-text130">
                Facilities At Marigold Celebration
              </span>
            </Fragment>
          }
          feature1Title={
            <Fragment>
              <span className="home-text131">
                <span>Spacious Venue with Capacity</span>
                <br></br>
              </span>
            </Fragment>
          }
          rootClassName="facilities-home1root-class-name"
          feature1Title1={
            <Fragment>
              <span className="home-text134">Fine Dining Catering</span>
            </Fragment>
          }
          feature1Title11={
            <Fragment>
              <span className="home-text135">
                Photography &amp; Videography Services 
              </span>
            </Fragment>
          }
          feature1Title111={
            <Fragment>
              <span className="home-text136">Décor &amp; Design Services</span>
            </Fragment>
          }
          feature1Title1111={
            <Fragment>
              <span className="home-text137">Parking &amp; Accessibility</span>
            </Fragment>
          }
          sectionDescription={
            <Fragment>
              <span className="home-text138">
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
              <span className="home-text139">
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
              <span className="home-text140">
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
              <span className="home-text141">
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
              <span className="home-text142">
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
              <span className="home-text143">
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
        <MobileFacilities1
          heading={
            <Fragment>
              <span className="home-text144">
                Facilities We Provide at Marigold Celebration
              </span>
            </Fragment>
          }
          heading2={
            <Fragment>
              <span className="home-text145">
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
              <span className="home-text146">Explore More Facilities</span>
            </Fragment>
          }
          faq1Question={
            <Fragment>
              <span className="home-text147">Spacious Venue with Capacity</span>
            </Fragment>
          }
          faq2Question={
            <Fragment>
              <span className="home-text148">Fine Dining Catering</span>
            </Fragment>
          }
          faq3Question={
            <Fragment>
              <span className="home-text149">
                Photography &amp; Videography Services
              </span>
            </Fragment>
          }
          faq4Question={
            <Fragment>
              <span className="home-text150">Décor &amp; Design Services</span>
            </Fragment>
          }
          rootClassName="mobile-facilities1root-class-name"
        ></MobileFacilities1>
        <GoogleReviews
          button={
            <Fragment>
              <span className="home-text151">Button</span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="home-text152">marigoldcelebration.in</span>
            </Fragment>
          }
          text210={
            <Fragment>
              <span className="home-text153">Verify Review</span>
            </Fragment>
          }
          text217={
            <Fragment>
              <span className="home-text154">
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
          content1={
            <Fragment>
              <span className="home-text155">
                A Big Thank you - &quot;People Like You, Behide Our
                Success.&quot;
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text156">Google Reviews - Best only</span>
            </Fragment>
          }
          text11325={
            <Fragment>
              <span className="home-text157">Atharva Diwate</span>
            </Fragment>
          }
          image1Title={
            <Fragment>
              <span className="home-text158">Image 1</span>
            </Fragment>
          }
          image2Title={
            <Fragment>
              <span className="home-text159">Corporate Event Venue</span>
            </Fragment>
          }
          image3Title={
            <Fragment>
              <span className="home-text160">Social Gathering Decor</span>
            </Fragment>
          }
          rootClassName="google-reviewsroot-class-name"
          image1Description={
            <Fragment>
              <span className="home-text161">
                <span>Our Banner Ads</span>
                <br></br>
              </span>
            </Fragment>
          }
          image2Description={
            <Fragment>
              <span className="home-text164">Our Grand Main Hall</span>
            </Fragment>
          }
          image3Description={
            <Fragment>
              <span className="home-text165">
                Our Grand Main Hall with Some Stage Decor arena
              </span>
            </Fragment>
          }
          text113251={
            <Fragment>
              <span className="home-text166">Atharva Diwate</span>
            </Fragment>
          }
          text101={
            <Fragment>
              <span className="home-text167">marigoldcelebration.in</span>
            </Fragment>
          }
          text2171={
            <Fragment>
              <span className="home-text168">
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
          text2101={
            <Fragment>
              <span className="home-text169">Verify Review</span>
            </Fragment>
          }
          text113252={
            <Fragment>
              <span className="home-text170">Atharva Diwate</span>
            </Fragment>
          }
          text102={
            <Fragment>
              <span className="home-text171">marigoldcelebration.in</span>
            </Fragment>
          }
          text2172={
            <Fragment>
              <span className="home-text172">
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
          text2102={
            <Fragment>
              <span className="home-text173">Verify Review</span>
            </Fragment>
          }
        ></GoogleReviews>
        <VideoGallery
          review1={
            <Fragment>
              <span className="home-text174">
                Our wedding at Marigold Banquet Hall was a dream come true! The
                venue was stunning, the food was delicious, and the staff went
                above and beyond to make our day special.
              </span>
            </Fragment>
          }
          action23={
            <Fragment>
              <span className="home-text175">Google Business Profile</span>
            </Fragment>
          }
          review11={
            <Fragment>
              <span className="home-text176">
                We warmly invite you to visit and explore Marigold Banquet Hall.
                It would be our pleasure to assist you with your event planning
                needs and show you everything we have to offer!
              </span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="home-text177">
                MariGold Celebration - Hingna, Nagpur
              </span>
            </Fragment>
          }
          rootClassName="video-galleryroot-class-name1"
          author1Position={
            <Fragment>
              <span className="home-text178">marigoldcelebration.in</span>
            </Fragment>
          }
          text2101={
            <Fragment>
              <span className="home-text179">Google Profile</span>
            </Fragment>
          }
        ></VideoGallery>
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
        <Footer
          link1={
            <Fragment>
              <span className="home-text180">Home</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text181">Facilities</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text182">Gallery</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text183">Events</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="home-text184">Contacts</span>
            </Fragment>
          }
          link6={
            <Fragment>
              <span className="home-text185">Corporate Events</span>
            </Fragment>
          }
          link7={
            <Fragment>
              <span className="home-text186">Weddings Plannings</span>
            </Fragment>
          }
          link8={
            <Fragment>
              <span className="home-text187">
                <span>Events Management</span>
                <br></br>
              </span>
            </Fragment>
          }
          link9={
            <Fragment>
              <span className="home-text190">Special Occasions</span>
            </Fragment>
          }
          link10={
            <Fragment>
              <span className="home-text191">Book Now</span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text192">
                We warmly invite you to visit and explore Marigold Banquet Hall.
                It would be our pleasure to assist you with your event planning
                needs and show you everything we have to offer!
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="home-text193">MariGold Celebration</span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="home-text194">terms &amp; conditions.</span>
            </Fragment>
          }
          termsLink1={
            <Fragment>
              <span className="home-text195">T &amp; C</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="home-text196">cookie policy.</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="home-text197">privacy policy.</span>
            </Fragment>
          }
          column1Title={
            <Fragment>
              <span className="home-text198">Contact Us</span>
            </Fragment>
          }
          column2Title={
            <Fragment>
              <span className="home-text199">Services</span>
            </Fragment>
          }
          cookiesLink1={
            <Fragment>
              <span className="home-text200">C &amp; P</span>
            </Fragment>
          }
          privacyLink1={
            <Fragment>
              <span className="home-text201">P P</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name2"
        ></Footer>
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
          .home-text134 {
            display: inline-block;
          }
          .home-text135 {
            display: inline-block;
          }
          .home-text136 {
            display: inline-block;
          }
          .home-text137 {
            display: inline-block;
          }
          .home-text138 {
            display: inline-block;
          }
          .home-text139 {
            display: inline-block;
          }
          .home-text140 {
            display: inline-block;
          }
          .home-text141 {
            display: inline-block;
          }
          .home-text142 {
            display: inline-block;
          }
          .home-text143 {
            display: inline-block;
          }
          .home-text144 {
            display: inline-block;
          }
          .home-text145 {
            display: inline-block;
          }
          .home-text146 {
            display: inline-block;
          }
          .home-text147 {
            display: inline-block;
          }
          .home-text148 {
            display: inline-block;
          }
          .home-text149 {
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
          .home-container3 {
            display: contents;
          }
          .home-container5 {
            display: contents;
          }
          .home-text180 {
            display: inline-block;
          }
          .home-text181 {
            display: inline-block;
          }
          .home-text182 {
            display: inline-block;
          }
          .home-text183 {
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
          .home-text200 {
            display: inline-block;
          }
          .home-text201 {
            display: inline-block;
          }
          @media (max-width: 599px) {
            .home-text108 {
              line-height: 1.4;
            }
            .home-text109 {
              line-height: 1.4;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
