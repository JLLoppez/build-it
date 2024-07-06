import React from "react";
import missionImg from '../img/missionImg.png';
import whyUs from '../img/whyUs.png';

const Services = React.forwardRef ((props, ref) => {
  
    return (
        <>
              <section className="what-we-offer"  id="services" ref={ref}>
                <div className="heading__fix u-center-text">
                <h3 className="heading-tertiary u-margin-bottom-small">Our services</h3>
                </div>

                <h2 className="heading-secondary u-margin-bottom-small u-center-text">
                What we do offer
                </h2>
                <p className="paragraph u-margin-bottom-big u-center-text">
                As a leader in the construction industry, we've consistently pushed the boundaries with advanced technology and innovative methods.
                </p>

                <div className="what-we-offer__content-box">
                <div className="what-we-offer__content">
                    <h4 className="what-we-offer__title u-margin-bottom-small">
                    <span className="icon-box">
                        {/* <svg className="icon">
                        <use xlink:href="img/sprite.svg#crane"></use>
                        </svg> */}
                    </span>
                    New Building Construction
                    </h4>
                    <p className="paragraph">
                    Whatever your construction requirements we can help you - from new
                    builds to refurbishments.
                    </p>
                </div>
                <div className="what-we-offer__content">
                    <h4 className="what-we-offer__title u-margin-bottom-small">
                    <span className="icon-box">
                        {/* <svg className="icon">
                        <use xlink:href="img/sprite.svg#compass"></use>
                        </svg> */}
                    </span>
                    Architectural Designs
                    </h4>
                    <p className="paragraph">
                    Building Design, Interior Design, Structural Design, 3D
                    Visualization.
                    </p>
                </div>
                <div className="what-we-offer__content">
                    <h4 className="what-we-offer__title u-margin-bottom-small">
                    <span className="icon-box">
                        {/* <svg className="icon">
                        <use xlink:href="img/sprite.svg#electric"></use>
                        </svg> */}
                    </span>
                    Commercial and Electrical Installations
                    </h4>
                    <p className="paragraph">
                    We install and cable associated devices such as switches,
                    distribution boards, sockets, and light fittings in a structure.
                    </p>
                </div>
                <div className="what-we-offer__content">
                    <h4 className="what-we-offer__title u-margin-bottom-small">
                    <span className="icon-box">
                        {/* <svg className="icon">
                        <use xlink:href="img/sprite.svg#view"></use>
                        </svg> */}
                    </span>
                    Landscaping & External Works
                    </h4>
                    <p className="paragraph">
                    Hard landscaping projects create an interesting outside area to
                    your property and will add to its value.
                    </p>
                </div>
                <div className="what-we-offer__content">
                    <h4 className="what-we-offer__title u-margin-bottom-small">
                    <span className="icon-box">
                        {/* <svg className="icon" >
                        <use  xlink:href="img/sprite.svg#mechanic"></use>
                        </svg> */}
                    </span>
                    Mechanical and Renewables
                    </h4>
                    <p className="paragraph">
                    We design, install, commission, maintain and service a vast range
                    of mechanical equipment in Private Housing, Social Housing and
                    Commercial properties.
                    </p>
                </div>
                <div className="what-we-offer__content">
                    <h4 className="what-we-offer__title u-margin-bottom-small">
                    <span className="icon-box">
                        {/* <svg className="icon">
                        <use xlink:href="img/sprite.svg#roof"></use>
                        </svg> */}
                    </span>
                    Roofing Installation
                    </h4>
                    <p className="paragraph">
                    We provide effective, service-oriented roofing and consistently
                    providing our clients with materials of the highest quality.
                    </p>
                </div>
                </div>
            </section>

            <section className="mission">
        <h3 className="heading-tertiary u-margin-bottom-small">Our Mission</h3>
        <div className="mission__container">
          <div className="mission__content-box mission__left">
            <div className="mission__content">
              <h4 className="mission__title u-margin-bottom-small">Vision</h4>
              <p className="paragraph">
              "Our vision is to become the leading construction partner across Africa, 
              renowned for constructing prestigious, 
              enduring edifices that shape skylines and communities. 
              We strive to achieve this by seamlessly integrating world-class technology and sustainable practices into every project, 
              delivering unparalleled value and exceeding client expectations at every turn.
              </p>
            </div>

            <div className="mission__content">
              <h4 className="mission__title u-margin-bottom-small">Mission</h4>
              <p className="paragraph">
              Our mission is to empower African communities through superior construction solutions. We strive to provide unparalleled value by seamlessly blending local expertise with global resources, ensuring our clients receive the highest quality products and services that rival international standards.
              </p>
            </div>
          </div>

          <div className="mission__right">
            <div className="mission__img-box">
              <img
                src={missionImg}
                alt="Mission"
                className="mission__img"
                // srcset="img/mission-img-1x.png 1x, img/mission-img-2x.png 2x"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="why-us">
        <div className="why-us__left">
          <img
            src={whyUs}
            alt="Why us"
            className="why-us__img"
            // srcset="img/why-us-img-1x.png 1x, img/why-us-img-2x.png 2x"
          />
        </div>

        <div className="why-us__right">
          <h3 className="heading-tertiary u-margin-bottom-small">Why us</h3>
          <h2 className="heading-secondary u-margin-bottom-small">
            Building a Greener Future Together
          </h2>
          <p className="paragraph">
          We collaborate closely with clients to understand their unique needs and create bespoke solutions that not only meet but exceed their sustainability targets. Our expertise in low- and net-zero carbon design ensures that our projects are as eco-friendly as they are functional and aesthetically pleasing
          </p>
        </div>
      </section>
        </>
    );
});

export default Services;