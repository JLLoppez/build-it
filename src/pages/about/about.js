import React, {forwardRef} from "react";

const About = forwardRef((props, ref) => {
  
    return (
        <>
         <section class="who-we-are"  ref={ref}>
                <h3 class="heading-tertiary u-margin-bottom-small">BUILD-IT</h3>
                <div class="who-we-are__content">
                <div class="who-we-are__left">
                    <h2 class="heading-secondary u-margin-bottom-small">Who we are</h2>
                    <p class="paragraph">
                    As a well-established construction company with over two decades of experience, we offer full-service solutions for the public and private sectors. We pride ourselves on our collaborative approach, working closely with clients and industry partners to ensure every project reflects the highest standards of quality, attention to detail, and client satisfaction. Together, we build solutions that stand the test of time.
                    </p>
                </div>

                <div class="who-we-are__right">
                    <p class="who-we-are__paragraph paragraph">
                    <span class="emphasis">20</span>
                    Years of Experience
                    </p>

                    <p class="who-we-are__paragraph paragraph">
                    <span class="emphasis">40+</span>
                    Clients all over the world
                    </p>

                    <p class="who-we-are__paragraph paragraph">
                    <span class="emphasis">20.2 p</span>
                    Interim dividend per share up 83.3%
                    </p>

                    <p class="who-we-are__paragraph paragraph">
                    <span class="emphasis">GHc1m</span>
                    Construction Backlog Revenue
                    </p>
                </div>
                </div>
            </section>
        </>
    );
});

export default About;