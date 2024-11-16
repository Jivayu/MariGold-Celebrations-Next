import Document, { Html, Head, Main, NextScript } from 'next/document'
class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <meta charSet="utf-8"></meta>
          <meta property="twitter:card" content="summary_large_image"></meta>
          <style
            dangerouslySetInnerHTML={{
              __html:
                'html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;  -webkit-font-smoothing: antialiased;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6,figure,blockquote,figcaption {  margin: 0;  padding: 0;}button {  background-color: transparent;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;  color: inherit;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}html { scroll-behavior: smooth  }',
            }}
            data-tag="reset-style-sheet"
          ></style>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n  html {\n    font-family: "Ubuntu";\n    font-size: 14px;\n  }\n\n  body {\n    font-weight: 400;\n    font-style:normal;\n    text-decoration: none;\n    text-transform: none;\n    letter-spacing: normal;\n    line-height: 1.2;\n    color: var(--dl-color-gray-black);\n    background: var(--dl-color-gray-white);\n    \n    fill: var(--dl-color-gray-black);\n  }\n\n  \n\n  ',
            }}
            data-tag="default-style-sheet"
          ></style>
          <link
            rel="stylesheet"
            href="https://unpkg.com/animate.css@4.1.1/animate.css"
          ></link>
          <link
            rel="shortcut icon"
            href="/marigold-favicon.png"
            type="icon/png"
            sizes="32x32"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&amp;display=swap"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://unpkg.com/@teleporthq/teleport-custom-scripts/dist/style.css"
          ></link>
          <noscript
            dangerouslySetInnerHTML={{
              __html:
                '</noscript><link rel="canonical" href="https://marigoldcelebration.in"/>\r\n<meta property="og:site_name" content="MariGold Celebration">\r\n<meta property="og:url" content="https://marigoldcelebration.in">\r\n<style>\r\n  html {\r\n    scroll-behavior: smooth;\r\n  }\r\n</style>\r\n<script src="https://unpkg.com/scrollreveal"></script>\r\n<script>\r\n    ScrollReveal({ reset: true });\r\n</script>\r\n<script src="https://marigoldcelebration.in/_vercel/speed-insights/script.js"></script>\r\n<!-- Google tag (gtag.js) -->\r\n<script async src="https://www.googletagmanager.com/gtag/js?id=AW-16749605656">\r\n</script>\r\n<script>\r\n  window.dataLayer = window.dataLayer || [];\r\n  function gtag(){dataLayer.push(arguments);}\r\n  gtag(\'js\', new Date());\r\n\r\n  gtag(\'config\', \'AW-16749605656\');\r\n</script>\r\n<script type="application/ld+json">\r\n{\r\n  "@context": "https://schema.org",\r\n  "@type": "LocalBusiness",\r\n  "name": "Marigold Celebration - Event Venue",\r\n  "url": "https://marigoldcelebration.in",\r\n  "logo": "https://marigoldcelebration.in/images/marigold-logo1.svg",\r\n  "image": "https://marigoldcelebration.in/images/Marigold%20Images/marigold-celebration-banner-300h.webp",\r\n  "description": "Marigold Celebration Banquet Hall, Hingna, Nagpur: Spacious Venues for Weddings and Events, Hosting up to 2000 Guests with Catering, Decor, and Event Services.",\r\n  "telephone": "+91-9356251657",\r\n  "hasMap": "https://maps.app.goo.gl/DEc9gnNU8AALgh4s7",\r\n  "priceRange": "₹ 500 Per Plate - ₹ 1250 Per Plate",\r\n  "geo": {\r\n    "@type": "GeoCoordinates",\r\n    "latitude": "21.0730094",\r\n    "longitude": "78.9580455"\r\n  },\r\n  "address": {\r\n    "@type": "PostalAddress",\r\n    "streetAddress": "Mohgaon road",\r\n    "addressLocality": "Dangarpura, Hingna",\r\n    "addressRegion": "MH",\r\n    "postalCode": "441110",\r\n    "addressCountry": "IN"\r\n  },\r\n  "video": {\r\n    "@type": "VideoObject",\r\n    "name": "Marigold Celebration - Quick Walk Through Video",\r\n    "description": "Take a virtual tour of Marigold Celebration Banquet Hall, a premium venue in Nagpur for weddings, receptions, corporate events, and more.",\r\n    "thumbnailUrl": "https://marigoldcelebration.in/images/Marigold%20Images/marigold-celebration-banner-300h.webp",\r\n    "uploadDate": "2024-11-13T10:00:00+05:30",\r\n    "contentUrl": "https://youtu.be/RO5OA8B5Ipo",\r\n    "embedUrl": "https://lh3.googleusercontent.com/p/AF1QipNdsFSNysuVAA8K0LKl1H0i7CqKeEsD5BMd6IAm=mm,37,22,18",\r\n    "duration": "PT0M55S",\r\n    "interactionStatistic": {\r\n      "@type": "InteractionCounter",\r\n      "interactionType": { "@type": "WatchAction" },\r\n      "userInteractionCount": 1000\r\n    }\r\n  },\r\n  "founder": {\r\n    "@type": "Person",\r\n    "name": "Mr. Arun Bhende Ji",\r\n    "jobTitle": "Owner",\r\n    "affiliation": { "@type": "Organization", "name": "Renuka Celebration" }\r\n  },\r\n  "openingHoursSpecification": [\r\n    {\r\n      "@type": "OpeningHoursSpecification",\r\n      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],\r\n      "opens": "10:00",\r\n      "closes": "22:00"\r\n    }\r\n  ],\r\n  "amenityFeature": [\r\n    { "@type": "LocationFeatureSpecification", "name": "Wheelchair Accessible", "value": "True" },\r\n    { "@type": "LocationFeatureSpecification", "name": "Inside & Outside Parking", "value": "Available" },\r\n    { "@type": "LocationFeatureSpecification", "name": "2 Big Lift Access", "value": "True" }\r\n  ],\r\n  "locationFeatureSpecification": [\r\n    {\r\n      "@type": "LocationFeatureSpecification",\r\n      "name": "Accessibility & Transport",\r\n      "value": "Nearby transport includes Ola, Uber, and Public EV Buses",\r\n      "potentialAction": {\r\n        "@type": "SearchAction",\r\n        "target": "https://play.google.com/store/apps/details?id=com.olacabs.customer",\r\n        "query-input": "required name=Marigold Celebration"\r\n      }\r\n    },\r\n    {\r\n      "@type": "LocationFeatureSpecification",\r\n      "name": "Public EV Bus Accessibility",\r\n      "value": "Nearby bus station with EV support"\r\n    }\r\n  ],\r\n  "paymentAccepted": ["Credit Card", "Cash","Upi", "Bank Transfer"],\r\n  "potentialAction": {\r\n    "@type": "SearchAction",\r\n    "target": "https://marigoldcelebration.in/inquiry",\r\n    "query-input": "required name=query"\r\n  },\r\n  "makesOffer": [\r\n    {\r\n      "@type": "Offer",\r\n      "name": "Happy New Year Special",\r\n      "description": "Special package for New Year celebrations with discounted rates.",\r\n      "priceCurrency": "INR",\r\n      "price": "2000",\r\n      "availability": "https://schema.org/InStock",\r\n      "validFrom": "2024-12-01",\r\n      "validThrough": "2025-01-1"\r\n    }\r\n  ],\r\n  "FAQPage": {\r\n  "@type": "FAQPage",\r\n  "mainEntity": [\r\n    {\r\n      "@type": "Question",\r\n      "name": "What types of events can Marigold Celebration host?",\r\n      "acceptedAnswer": {\r\n        "@type": "Answer",\r\n        "text": "Marigold Celebration can host a wide range of events, including weddings, receptions, corporate meetings, conferences, product launches, exhibitions, birthday parties, and other social gatherings."\r\n      }\r\n    },\r\n    {\r\n      "@type": "Question",\r\n      "name": "What are the catering options available at Marigold Celebration?",\r\n      "acceptedAnswer": {\r\n        "@type": "Answer",\r\n        "text": "We offer a variety of in-house catering packages, including Classic, Deluxe, Grand, and Royal menus. Our chefs specialize in Indian, Continental, and Chinese cuisines, and we can customize the menu to suit your preferences."\r\n      }\r\n    },\r\n    {\r\n      "@type": "Question",\r\n      "name": "Is there parking available for guests at Marigold Celebration?",\r\n      "acceptedAnswer": {\r\n        "@type": "Answer",\r\n        "text": "Yes, we provide ample parking space for guests with both indoor and outdoor parking options. We also offer valet parking services for added convenience."\r\n      }\r\n    },\r\n    {\r\n      "@type": "Question",\r\n      "name": "Can Marigold Celebration help with decoration and event planning?",\r\n      "acceptedAnswer": {\r\n        "@type": "Answer",\r\n        "text": "Absolutely! We offer full decoration and event planning services, including stage setup, floral arrangements, theme decor, and lighting to make your event truly memorable."\r\n      }\r\n    },\r\n    {\r\n      "@type": "Question",\r\n      "name": "Is outside catering or decor allowed at Marigold Celebration?",\r\n      "acceptedAnswer": {\r\n        "@type": "Answer",\r\n        "text": "No, We have a list of preferred vendors who are familiar with our venue and provide excellent services."\r\n      }\r\n    },\r\n    {\r\n      "@type": "Question",\r\n      "name": "What is the maximum guest capacity of the Marigold Celebration Banquet Hall?",\r\n      "acceptedAnswer": {\r\n        "@type": "Answer",\r\n        "text": "Our banquet hall can comfortably accommodate up to 2000 guests for large events. We also have flexible seating arrangements for smaller gatherings and events."\r\n      }\r\n    },\r\n    {\r\n      "@type": "Question",\r\n      "name": "Does Marigold Celebration provide accommodation for guests?",\r\n      "acceptedAnswer": {\r\n        "@type": "Answer",\r\n        "text": "Yes, we offer well-appointed guest rooms for overnight stays. These rooms are perfect for out-of-town guests or those needing a place to rest after the event."\r\n      }\r\n    },\r\n    {\r\n      "@type": "Question",\r\n      "name": "Is the Marigold Celebration venue accessible for differently-abled guests?",\r\n      "acceptedAnswer": {\r\n        "@type": "Answer",\r\n        "text": "Yes, our venue is fully accessible, with features such as wheelchair ramps, elevators, and designated parking spaces to accommodate differently-abled guests."\r\n      }\r\n    },\r\n    {\r\n      "@type": "Question",\r\n      "name": "What audiovisual equipment is available at Marigold Celebration?",\r\n      "acceptedAnswer": {\r\n        "@type": "Answer",\r\n        "text": "We provide a range of high-quality audiovisual equipment, including microphones, speakers, projectors, LED screens, and lighting setups. Our technical team is available to assist with setup and support throughout your event."\r\n      }\r\n    },\r\n    {\r\n      "@type": "Question",\r\n      "name": "How do I book Marigold Celebration for an event?",\r\n      "acceptedAnswer": {\r\n        "@type": "Answer",\r\n        "text": "You can book the venue by contacting us directly at +91-9356251657 or by visiting our website at https://marigoldcelebration.in. We recommend booking well in advance to secure your preferred date."\r\n      }\r\n    },\r\n    {\r\n      "@type": "Question",\r\n      "name": "What are the payment and cancellation policies at Marigold Celebration?",\r\n      "acceptedAnswer": {\r\n        "@type": "Answer",\r\n        "text": "We accept multiple payment methods, including credit cards, UPI, cash, and bank transfers. A deposit is required to confirm your booking. For cancellations, please contact us at least 30 days in advance to discuss options, as cancellation fees may apply."\r\n      }\r\n    }\r\n  ]\r\n},\r\n\r\n  "event": [\r\n  {\r\n    "@type": "Event",\r\n    "name": "Wedding & Reception",\r\n    "startDate": "2024-12-15T18:00",\r\n    "endDate": "2024-12-16T01:00",\r\n    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",\r\n    "eventStatus": "https://schema.org/EventScheduled",\r\n    "location": {\r\n      "@type": "Place",\r\n      "name": "Marigold Celebration - Event Venue",\r\n      "address": {\r\n        "@type": "PostalAddress",\r\n        "streetAddress": "Hingna Road",\r\n        "addressLocality": "Nagpur",\r\n        "postalCode": "441110",\r\n        "addressCountry": "IN"\r\n      }\r\n    },\r\n    "image": "https://marigoldcelebration.in/images/Marigold%20Images/marigold-celebration-banner-300h.webp",\r\n    "description": "Elegant wedding and reception venue in Nagpur with catering, decor, and event planning services.",\r\n    "organizer": {\r\n      "@type": "Organization",\r\n      "name": "Marigold Celebration - Event Venue",\r\n      "url": "https://marigoldcelebration.in",\r\n      "contactPoint": {\r\n        "@type": "ContactPoint",\r\n        "telephone": "+91-9356251657",\r\n        "contactType": "Customer Service"\r\n      }\r\n    },\r\n    "performer": [\r\n  {\r\n    "@type": "PerformingGroup",\r\n    "name": "Live Band",\r\n    "sameAs": "https://marigoldcelebration.in/entertainment",\r\n    "description": "A talented live band that sets the perfect ambiance with a mix of classic and modern hits."\r\n  },\r\n  {\r\n    "@type": "PerformingGroup",\r\n    "name": "DJ Party",\r\n    "sameAs": "https://marigoldcelebration.in/entertainment",\r\n    "description": "An energetic DJ spinning the latest tracks to keep your guests dancing all night."\r\n  }\r\n],\r\n\r\n    "offers": {\r\n      "@type": "Offer",\r\n      "url": "https://marigoldcelebration.in/wedding-packages",\r\n      "price": "5000",\r\n      "priceCurrency": "INR",\r\n      "availability": "https://schema.org/InStock",\r\n      "validFrom": "2024-11-01"\r\n    }\r\n  },\r\n  {\r\n    "@type": "Event",\r\n    "name": "Grand New Year Celebration",\r\n    "startDate": "2024-12-31T18:00",\r\n    "endDate": "2025-01-01T01:15",\r\n    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",\r\n    "eventStatus": "https://schema.org/EventScheduled",\r\n    "location": {\r\n      "@type": "Place",\r\n      "name": "Marigold Celebration - Event Venue",\r\n      "address": {\r\n        "@type": "PostalAddress",\r\n        "streetAddress": "Hingna Road",\r\n        "addressLocality": "Nagpur",\r\n        "postalCode": "441110",\r\n        "addressCountry": "IN"\r\n      }\r\n    },\r\n    "image": "https://marigoldcelebration.in/images/Marigold%20Images/marigold-celebration-banner-300h.webp",\r\n    "description": "Make your New Year\'s Eve unforgettable! Limited slots are available, so book your celebration now and start the year with joy, laughter, and unforgettable moments!",\r\n    "organizer": {\r\n      "@type": "Organization",\r\n      "name": "Marigold Celebration - Event Venue",\r\n      "url": "https://marigoldcelebration.in",\r\n      "contactPoint": {\r\n        "@type": "ContactPoint",\r\n        "telephone": "+91-9356251657",\r\n        "contactType": "Customer Service"\r\n      }\r\n    },\r\n    "performer": [\r\n  {\r\n    "@type": "PerformingGroup",\r\n    "name": "Live Band",\r\n    "sameAs": "https://marigoldcelebration.in/entertainment",\r\n    "description": "A talented live band that sets the perfect ambiance with a mix of classic and modern hits."\r\n  },\r\n  {\r\n    "@type": "PerformingGroup",\r\n    "name": "DJ Party",\r\n    "sameAs": "https://marigoldcelebration.in/entertainment",\r\n    "description": "An energetic DJ spinning the latest tracks to keep your guests dancing all night."\r\n  }\r\n],\r\n\r\n    "offers": {\r\n      "@type": "Offer",\r\n      "url": "https://marigoldcelebration.in/images/Marigold%20Images/marigold-celebration-banner-300h.webp",\r\n      "price": "1500",\r\n      "priceCurrency": "INR",\r\n      "availability": "https://schema.org/InStock",\r\n      "validFrom": "2024-11-01"\r\n    }\r\n  }\r\n],\r\n  "service": [\r\n    {\r\n      "@type": "Service",\r\n      "serviceType": "Marigold Celebration - Event Space",\r\n      "description": "At Marigold Celebration Hall, we offer adaptable event spaces designed to cater to a variety of gatherings, from intimate gatherings to grand celebrations. Each space is thoughtfully designed to provide a refined, comfortable environment suited to your unique event needs.",\r\n      "url": "https://marigoldcelebration.in/facilities-at-marigold-celebration"\r\n    },\r\n    {\r\n      "@type": "Service",\r\n      "serviceType": "Marigold Celebration - Event Catering",\r\n      "description": "At Marigold Celebration Hall, we understand that exceptional cuisine is at the heart of every memorable event. Our tailored catering services offer a wide selection of culinary experiences, meticulously crafted to suit your unique event and personal preferences.",\r\n      "url": "https://marigoldcelebration.in/facilities-at-marigold-celebration"\r\n    }\r\n  ]\r\n}\r\n</script>\r\n<script type="application/ld+json">\r\n{\r\n  "@context": "https://schema.org",\r\n  "@type": "Menu",\r\n  "name": "Marigold Celebration - Menu Options",\r\n  "url": "https://marigoldcelebration.in/",\r\n  "hasMenuSection": [\r\n    {\r\n      "@type": "MenuSection",\r\n      "name": "Classic Menu Option",\r\n      "description": "Affordable pricing with a wide variety of delicious dishes.",\r\n      "hasMenuItem": [\r\n        {\r\n          "@type": "MenuItem",\r\n          "name": "Above 200 Pax",\r\n          "offers": {\r\n            "@type": "Offer",\r\n            "price": "625",\r\n            "priceCurrency": "INR",\r\n            "eligibleQuantity": {\r\n              "@type": "QuantitativeValue",\r\n              "minValue": 200,\r\n              "unitText": "Pax"\r\n            }\r\n          }\r\n        },\r\n        {\r\n          "@type": "MenuItem",\r\n          "name": "Above 500 Pax",\r\n          "offers": {\r\n            "@type": "Offer",\r\n            "price": "575",\r\n            "priceCurrency": "INR",\r\n            "eligibleQuantity": {\r\n              "@type": "QuantitativeValue",\r\n              "minValue": 500,\r\n              "unitText": "Pax"\r\n            }\r\n          }\r\n        },\r\n        {\r\n          "@type": "MenuItem",\r\n          "name": "Above 800 Pax",\r\n          "offers": {\r\n            "@type": "Offer",\r\n            "price": "525",\r\n            "priceCurrency": "INR",\r\n            "eligibleQuantity": {\r\n              "@type": "QuantitativeValue",\r\n              "minValue": 800,\r\n              "unitText": "Pax"\r\n            }\r\n          }\r\n        },\r\n        {\r\n          "@type": "MenuItem",\r\n          "name": "Above 1000 Pax",\r\n          "offers": {\r\n            "@type": "Offer",\r\n            "price": "475",\r\n            "priceCurrency": "INR",\r\n            "eligibleQuantity": {\r\n              "@type": "QuantitativeValue",\r\n              "minValue": 1000,\r\n              "unitText": "Pax"\r\n            }\r\n          }\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      "@type": "MenuSection",\r\n      "name": "Deluxe Menu Option",\r\n      "hasMenuItem": [\r\n        {\r\n          "@type": "MenuItem",\r\n          "name": "Above 200 Pax",\r\n          "offers": {\r\n            "@type": "Offer",\r\n            "price": "720",\r\n            "priceCurrency": "INR",\r\n            "eligibleQuantity": {\r\n              "@type": "QuantitativeValue",\r\n              "minValue": 200,\r\n              "unitText": "Pax"\r\n            }\r\n          }\r\n        },\r\n        {\r\n          "@type": "MenuItem",\r\n          "name": "Above 500 Pax",\r\n          "offers": {\r\n            "@type": "Offer",\r\n            "price": "680",\r\n            "priceCurrency": "INR",\r\n            "eligibleQuantity": {\r\n              "@type": "QuantitativeValue",\r\n              "minValue": 500,\r\n              "unitText": "Pax"\r\n            }\r\n          }\r\n        },\r\n        {\r\n          "@type": "MenuItem",\r\n          "name": "Above 800 Pax",\r\n          "offers": {\r\n            "@type": "Offer",\r\n            "price": "595",\r\n            "priceCurrency": "INR",\r\n            "eligibleQuantity": {\r\n              "@type": "QuantitativeValue",\r\n              "minValue": 800,\r\n              "unitText": "Pax"\r\n            }\r\n          }\r\n        },\r\n        {\r\n          "@type": "MenuItem",\r\n          "name": "Above 1000 Pax",\r\n          "offers": {\r\n            "@type": "Offer",\r\n            "price": "540",\r\n            "priceCurrency": "INR",\r\n            "eligibleQuantity": {\r\n              "@type": "QuantitativeValue",\r\n              "minValue": 1000,\r\n              "unitText": "Pax"\r\n            }\r\n          }\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      "@type": "MenuSection",\r\n      "name": "Grand Menu Option",\r\n      "hasMenuItem": [\r\n        {\r\n          "@type": "MenuItem",\r\n          "name": "Above 200 Pax",\r\n          "offers": {\r\n            "@type": "Offer",\r\n            "price": "775",\r\n            "priceCurrency": "INR",\r\n            "eligibleQuantity": {\r\n              "@type": "QuantitativeValue",\r\n              "minValue": 200,\r\n              "unitText": "Pax"\r\n            }\r\n          }\r\n        },\r\n        {\r\n          "@type": "MenuItem",\r\n          "name": "Above 500 Pax",\r\n          "offers": {\r\n            "@type": "Offer",\r\n            "price": "725",\r\n            "priceCurrency": "INR",\r\n            "eligibleQuantity": {\r\n              "@type": "QuantitativeValue",\r\n              "minValue": 500,\r\n              "unitText": "Pax"\r\n            }\r\n          }\r\n        },\r\n        {\r\n          "@type": "MenuItem",\r\n          "name": "Above 800 Pax",\r\n          "offers": {\r\n            "@type": "Offer",\r\n            "price": "655",\r\n            "priceCurrency": "INR",\r\n            "eligibleQuantity": {\r\n              "@type": "QuantitativeValue",\r\n              "minValue": 800,\r\n              "unitText": "Pax"\r\n            }\r\n          }\r\n        },\r\n        {\r\n          "@type": "MenuItem",\r\n          "name": "Above 1000 Pax",\r\n          "offers": {\r\n            "@type": "Offer",\r\n            "price": "585",\r\n            "priceCurrency": "INR",\r\n            "eligibleQuantity": {\r\n              "@type": "QuantitativeValue",\r\n              "minValue": 1000,\r\n              "unitText": "Pax"\r\n            }\r\n          }\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      "@type": "MenuSection",\r\n      "name": "Royal Menu Option",\r\n      "hasMenuItem": [\r\n        {\r\n          "@type": "MenuItem",\r\n          "name": "Above 200 Pax",\r\n          "offers": {\r\n            "@type": "Offer",\r\n            "price": "820",\r\n            "priceCurrency": "INR",\r\n            "eligibleQuantity": {\r\n              "@type": "QuantitativeValue",\r\n              "minValue": 200,\r\n              "unitText": "Pax"\r\n            }\r\n          }\r\n        },\r\n        {\r\n          "@type": "MenuItem",\r\n          "name": "Above 500 Pax",\r\n          "offers": {\r\n            "@type": "Offer",\r\n            "price": "760",\r\n            "priceCurrency": "INR",\r\n            "eligibleQuantity": {\r\n              "@type": "QuantitativeValue",\r\n              "minValue": 500,\r\n              "unitText": "Pax"\r\n            }\r\n          }\r\n        },\r\n        {\r\n          "@type": "MenuItem",\r\n          "name": "Above 800 Pax",\r\n          "offers": {\r\n            "@type": "Offer",\r\n            "price": "700",\r\n            "priceCurrency": "INR",\r\n            "eligibleQuantity": {\r\n              "@type": "QuantitativeValue",\r\n              "minValue": 800,\r\n              "unitText": "Pax"\r\n            }\r\n          }\r\n        },\r\n        {\r\n          "@type": "MenuItem",\r\n          "name": "Above 1000 Pax",\r\n          "offers": {\r\n            "@type": "Offer",\r\n            "price": "635",\r\n            "priceCurrency": "INR",\r\n            "eligibleQuantity": {\r\n              "@type": "QuantitativeValue",\r\n              "minValue": 1000,\r\n              "unitText": "Pax"\r\n            }\r\n          }\r\n        }\r\n      ]\r\n    }\r\n  ]\r\n}\r\n</script><noscript>',
            }}
          ></noscript>
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html:
                "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n        })(window,document,'script','dataLayer','AW-16749605656');",
            }}
          ></script>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<script data-section-id='navbar' src='https://unpkg.com/@teleporthq/teleport-custom-scripts'></script>\n        <script defer src='https://unpkg.com/@teleporthq/react-components/dist/animate-on-reveal.umd.js'></script>",
            }}
          ></div>
        </body>
      </Html>
    )
  }
}
export default CustomDocument
