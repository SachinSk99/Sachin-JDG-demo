import React from "react";
import "./App.css";
import Header from "./component/headerComponent/header";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { TypeAnimation } from "react-type-animation";

function App() {
  return (
    <div className="appWrraper">
      <Header />
      <section className="container heroSection">
        <div className="row heroWrraper">
          <div className="col-xl-6 col-lg-6 col-md-12  col-12">
            <div className="heroText">
              We craft impactful <span>web solutions</span>
            </div>
            <TypeAnimation
              sequence={[
                "to fuel your",
                500,
                "to fuel your business growth.",
                500,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
            <button className="exploreBtn">Explore More</button>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12  col-12">
            <div style={{ width: "100%" }}>
              <img src="/hero.png" alt="hero" className="" />
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="sectionHeader">Who We Are</div>
        <div className="SectionTitle">
          We are Just Digital Gurus - Your Digital Growth Catalysts!
        </div>
        <div className="sectionText">
          As a leading IT company, we specialize in providing comprehensive web
          development services. With a strong commitment to excellence, we are
          dedicated to empowering digital transformation for businesses across
          various industries.
        </div>
        <div className="eclipseDiv">
          <img src="/Eclipses.png" alt="eclipse" className="eclipseImage" />
          {/* <div className="row" style={{ height: "430px" }}>
            <div
              className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <div className="circle1">
                  <div>
                    <div className="bigCircleText">15+</div>
                    <div className="bigCircleText2">
                      Industry <br /> Experience
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "start" }}>
                <div className="circle2">Fun & Happiness</div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  marginLeft: "35px",
                }}
              >
                <div className="circle3">
                  <div>
                    <div className="midCircleText">$250M</div>
                    <div className="midCircleText2">Raised by our clients</div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div className="circle4">Creative</div>
              </div>
            </div>

            <div
              className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <div className="circle5">
                  <div>
                    <div className="bigCircleText">30+</div>
                    <div className="bigCircleText2">
                      Designers and Developers
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  marginLeft: "-250px",
                }}
              >
                <div className="circle6">Skill</div>
              </div>

              <div style={{ display: "flex", alignItems: "end" }}>
                <div className="circle9">Experience</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <div className="circle7">
                  <div>
                    <div className="midCircleText">92%</div>
                    <div className="midCircleText2">Client Retention Ratio</div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col-6">
            <div className="rectangularShape"></div>
          </div>
        </div>

        <div className="row whoWeSectionRow">
          <div className="col-xl-3 col-12">
            <div className="whoweImageDiv">
              <img src="/whowe.png" alt="Who We Are" className="whoweImage" />
            </div>
          </div>
          <div className="col-xl-9  col-12">
            <div className="aboutText">
              From creating visually stunning websites to developing robust
              applications, we leverage cutting-edge technologies and industry
              best practices to deliver innovative solutions that drive growth
              and success.
              <br></br>
              <div className="mt-4">
                Our developers and designers are committed to maintaining the
                highest web standards so that your site will withstand the test
                of time.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="serviceSection">
        <div className="container">
          <div style={{ paddingTop: "100px" }}>
            <div className="serviceSectionHeader">Our Service Suite</div>
          </div>
          <div className="row  cardRowWrraper">
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-12"
              style={{ marginBottom: "30px" }}
            >
              <div className="colCardWrraper">
                <div className="cardIconStyle">
                  <img
                    src="/ecommerce.png"
                    alt="E-commerce Solutions "
                    className="cardImage"
                  />
                </div>
                <div className="colCardTitle">E-commerce Solutions</div>
                <div className="colCardText">
                  From intuitive navigation to secure payment gateways, our
                  e-commerce solutions empower businesses to thrive in the
                  digital marketplace and exceed customer expectations.
                </div>
                <div className="knowMoreBtn">Know more</div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-12"
              style={{ marginBottom: "30px" }}
            >
              <div className="colCardWrraper2">
                <div className="cardIconStyle">
                  <img
                    src="/marketing.png"
                    alt="marketing "
                    className="cardImage"
                  />
                </div>
                <div className="colCardTitle2">
                  Marketing Strategy & SEO Campaigns
                </div>
                <div className="colCardText">
                  With a holistic approach to digital marketing & SEO, we
                  develop tailored strategies that boost online visibility,
                  drive organic traffic and also deliver measurable results and
                  sustainable growth.
                </div>
                <div className="knowMoreBtn2">Know more</div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-12"
              style={{ marginBottom: "30px" }}
            >
              <div className="colCardWrraper3">
                <div className="cardIconStyle">
                  <img
                    src="/webDesign.png"
                    alt="webDesign "
                    className="cardImage"
                  />
                </div>
                <div className="colCardTitle3">
                  Website Design & Development
                </div>
                <div className="colCardText">
                  With a focus on user-centric design and seamless
                  functionality, our website design and development services
                  deliver captivating online experiences that captivate visitors
                  and leave a lasting impact.
                </div>
                <div className="knowMoreBtn3">Know more</div>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-4 col-md-6 col-12"
              style={{ marginBottom: "30px" }}
            >
              <div className="colCardWrraper4">
                <div className="cardIconStyle">
                  <img
                    src="/security.png"
                    alt="security "
                    className="cardImage"
                  />
                </div>
                <div className="colCardTitle4">Security & Protection</div>
                <div className="colCardText">
                  Safeguard your digital assets. We prioritize website security
                  and protection to safeguard your valuable data and protect
                  your website from potential threats.
                </div>
                <div className="knowMoreBtn4">Know more</div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-12"
              style={{ marginBottom: "30px" }}
            >
              <div className="colCardWrraper5">
                <div className="cardIconStyle">
                  <img
                    src="/maintenance.png"
                    alt="maintenance "
                    className="cardImage"
                  />
                </div>
                <div className="colCardTitle5">Maintenance & Support</div>
                <div className="colCardText">
                  We provide comprehensive website maintenance and support
                  services, ensuring your website functions flawlessly and
                  remains secure.
                </div>
                <div className="knowMoreBtn5">Know more</div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-12"
              style={{ marginBottom: "30px" }}
            >
              <div className="colCardWrraper6">
                <div className="cardIconStyle">
                  <img
                    src="/optimization.png"
                    alt="optimization"
                    className="cardImage"
                  />
                </div>
                <div className="colCardTitle6">Search Optimization</div>
                <div className="colCardText">
                  Our dedicated SEO experts employ a data-driven approach to
                  optimize your website, increase its search engine rankings,
                  and drive valuable organic traffic that converts into
                  customers.
                </div>
                <div className="knowMoreBtn6">Know more</div>
              </div>
            </div>
          </div>
          <div className="serviceBtnWrraper">
            <button className="servicesBtn">Explore All Services</button>
            <button className="servicesBtn">Schedule a Call</button>
          </div>
        </div>
      </section>
      <section className="container">
        <div style={{ marginTop: "100px" }}>
          <div className="sectionHeader">Our Showcased Projects</div>
        </div>
        <div className="sectionText textCenter">
          We are passionate about our work. Our designers and developers stay
          ahead of the curve to provide our clients with end results beyond
          their expectations and bringing their business to another height.
        </div>
        <button className="showcaseProjectBtn">View All Projects</button>
        {/* <div>
          <div>
            <Slider {...settings}>
              <div>
                <h3 style={{ color: "white" }}>1</h3>
              </div>
              <div>
                <h3 style={{ color: "white" }}>2</h3>
              </div>
              <div>
                <h3 style={{ color: "white" }}>3</h3>
              </div>
              <div>
                <h3 style={{ color: "white" }}>4</h3>
              </div>
              <div>
                <h3 style={{ color: "white" }}>5</h3>
              </div>
              <div>
                <h3 style={{ color: "white" }}>6</h3>
              </div>
            </Slider>
          </div>
        </div> */}
        <div>
          <div className="row aboutProjectDiv">
            <div className="col-8">
              <div className="aboutProjectText">
                Your Trusted Partner for Bespoke Web Solutions
              </div>
            </div>
            <div className="col-4 getInbtnColWrraper">
              <button className="getInTouchBtn">Get in Touch</button>
            </div>
          </div>
        </div>
      </section>
      <section className="container voiceOfSatisfactionwrraper">
        <div className="voiceofSatisfactionSection">
          <div className="voiceofSatisfactionSubSection">
            <div>
              <div className="sectionHeader">Voices of Satisfaction</div>
            </div>
            <img src="/voiceImage.png" />
          </div>
        </div>
        <div>
          <div className="row mainReviewWrraper">
            <div className="col-md-3 col-12">
              <img src="/client1.png" alt="freelance" />
              <div className="clientName">Jane Smith</div>
              <div className="clientPosition">Co-founder & CEO</div>
            </div>
            <div className="col-md-9 col-12">
              <div className="clientReviewWrraper">
                <div>
                  <img src="qoute.png" alt="qoute" />
                </div>
                <div className="clientReview">
                  JDG has been working to keep our website seamlessly functional
                  and aesthetically beautiful. They have been responsive to
                  every step of the way and easy to reach for any request. I had
                  so many options available that I could dream up anything that
                  suits my needs. Happy with JDG!
                </div>
              </div>
            </div>
          </div>
          <div className="row mainReviewWrraper">
            <div className="col-md-9 col-12">
              <div className="clientReviewWrraper">
                <div className="clientReview">
                  I worked with JDG team on the redesign of my store. They
                  brought the store to life, adding new navigation and
                  functionality to my site. They have great communications
                  skills, meet their deadlines on time and provide a fantastic
                  visual UX/UI design to any product category. I intend to work
                  with this team again and would highly recommend them.
                </div>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <img src="/client2.png" alt="freelance" />
              <div className="clientName">David Anderson</div>
              <div className="clientPosition">Marketing Manager</div>
            </div>
          </div>
          <div className="row mainReviewWrraper">
            <div className="col-md-3 col-12">
              <img src="/client3.png" alt="freelance" />
              <div className="clientName">Sara Thompson</div>
              <div className="clientPosition">Co-founder & CEO</div>
            </div>
            <div className="col-md-9 col-12">
              <div className="clientReviewWrraper">
                <div className="clientReview">
                  The team at Just Digital Gurus was quick to respond, great
                  about changing things when asked, and I love the way the site
                  came out for my client! Highly recommend!!!
                </div>
                <div>
                  <img src="qoute2.png" alt="qoute" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="serviceSection serviceBottom">
        <div className="container">
          <div style={{ paddingTop: "100px" }}>
            <div className="serviceSectionHeader">Explore the JDG Blog</div>
          </div>
          <div className="row blogRowWrraper">
            <div className="col-md-3 col">
              <img src="/blogImage.png" alt="blogImage" />
            </div>
            <div className="col-md-9 col">
              <div className="blogText">
                Stay ahead with JDG’s captivating articles on technology trends,
                web solutions and expert insights. Fuel creativity, thrive inh
                the digital realm. Join us now!
              </div>
            </div>
          </div>
          <div className="row gx-5 mb-5">
            <div className="col-md-4 col-12">
              <img src="/blog1.png" alt="blog" className="blogImageStyle" />

              <div className="blogTitle">
                11 common UI issues to avoid to improve your users’ experience
              </div>
              <button className="readMoreBtn">READ MORE</button>
            </div>
            <div className="col-md-4 col-12">
              <img src="/blog2.png" alt="blog" className="blogImageStyle" />
              <div className="blogTitle">
                The digital revolution : India leads the way with it’s digital
                rupee!
              </div>
              <button className="readMoreBtn">READ MORE</button>
            </div>
            <div className="col-md-4 col-12">
              <img src="/blog3.png" alt="blog" className="blogImageStyle" />
              <div className="blogTitle">
                Maximise your website’s potential with nine best practices
              </div>
              <button className="readMoreBtn">READ MORE</button>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row joinTeamRowWrraper">
          <div className="col-md-8 col">
            <div className="joinTealTitle">
              <span>Magic</span> happens when we join forces!
            </div>
            <div className="joinTealText">
              We have an ambitious road ahead, and we’re looking for people to
              join our team to help shape the future of Just Digital Gurus.
            </div>
            <button className="joinTheTeamBtn">Join the team</button>
          </div>
          <div className="col-md-4 col">
            <div>
              <img
                src="/joinTeam.png"
                alt="join the team"
                className="joinTeamImage"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="sectionHeader faqHeader">FAQ</div>
        <div className="row faqCollapseWrraper">
          <div className="col">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item" id="accordianHeaderDiv">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    What services does your web development company provide?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the first item's accordion body.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    How long does it take to complete a web development project?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the second item's accordion body. Let's imagine this being
                    filled with some actual content.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Do you provide ongoing website maintenance and support?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne1">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne1"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne1"
                  >
                    How much does web development services cost?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne1"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne1"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the first item's accordion body.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo2">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo2"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo2"
                  >
                    Can you help with website optimization for search engines
                    (SEO)?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo2"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo2"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the second item's accordion body. Let's imagine this being
                    filled with some actual content.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree3">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree3"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree3"
                  >
                    How does your agency approach a new project?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree3"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree3"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application.
                  </div>
                </div>
              </div>
            </div>
            <button className="discoverMore">Discover More</button>
          </div>
        </div>
      </section>
      <section className="container ">
        <div className="formWrraperSection">
          <div className="row ">
            <div className="col">
              <div>
                <img src="/findClient.png" />
                <div className="bgImage">
                  <div className="bgImageTitle">
                    Do We Smell a Business Brewing?
                  </div>
                  <div className="bgImageText">Tell us about it!</div>
                </div>
              </div>
            </div>
            <div className="col formWrraper">
              <div>
                <div className="formTitle">
                  Let’s get your dream complete...
                </div>
              </div>
              <form className="formArea">
                <div className="row">
                  <div class="col mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Your Name*
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="col mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Your Email*
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
                <div className="row">
                  <div class="col mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Company Name*
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="col mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Phone Number*
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: "100px" }}
                  ></textarea>
                  <label for="floatingTextarea2">
                    Tell us about your project*
                  </label>
                </div>
                <button
                  type="submit"
                  class=" btn btn-primary"
                  className="submitBtn"
                >
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="serviceSection lastFooterSection">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-12">
              <div>
                <div className="footerSectionTitle">ABOUT</div>
                <div className="footerText">
                  We focus on the needs of small to middle market businesses to
                  improve and grow their return.
                </div>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div>
                <div className="footerSectionTitle">SERVICES</div>
                <div className="linkText">SEO Marketing</div>
                <div className="linkText">SEO Services</div>
                <div className="linkText">Pay Per Click</div>
                <div className="linkText">Social Media</div>
                <div className="linkText">SEO Audit</div>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div>
                <div className="footerSectionTitle">COMMUNITY</div>
                <div className="linkText">Our Product</div>
                <div className="linkText">Documentation</div>
                <div className="linkText">Our Services</div>
                <div className="linkText">Company</div>
                <div className="linkText">What We Do?</div>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div>
                <div className="footerSectionTitle">QUICK LINKS</div>
                <div className="linkText">Home</div>
                <div className="linkText">About Us</div>
                <div className="linkText">Services</div>
                <div className="linkText">Pricing</div>
                <div className="linkText">Our Cases</div>
              </div>
            </div>
          </div>
          <div className="row footerSecondRowWrraper">
            <div className="col-md-4 col">
              <div>
                <div className="footerSecondRowTitle">
                  Have an idea? Let’s Talk
                </div>
                <div className="companyDetails">hello@justgurus.co</div>
                <div className="companyDetails">+91 8009865326</div>
              </div>
            </div>
            <div className="col-md-4 col">
              <div>
                <div className="footerSecondRowTitle">Career</div>
                <div className="companyDetails">hr@justgurus.co</div>
                <div className="companyDetails">+91 6355559016</div>
              </div>
            </div>
            <div className="col-md-4 col">
              <div className="locationMainWrraper">
                <div className="locationWrraper">
                  <img src="/location.png" alt="location" />
                  <div className="locationText">
                    501, The Arcade, Rajkot, India
                  </div>
                </div>
                <div className="socialMediaLinks">
                  <img src="/fb.png" />
                  <img src="/insta.png" />
                  <img src="/twitter.png" />
                  <img src="/youtube.png" />
                  <img src="/linkedin.png" />
                </div>
              </div>
            </div>
            <div className="footercopyright">
              © 2023 Just Digital Gurus. All Rights Reserved
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
