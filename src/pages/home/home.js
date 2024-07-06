import React, { useState } from "react";
import hero from '../img/hero.png';


const Home = React.forwardRef((props, ref) => {
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform any additional actions here (e.g., sending email, API call)
    
        // Show the alert notification
        alert('Thank you, we will get back to you as soon as possible.');
    
        // Reset the form or clear input
        setEmail('');
      };

    return (
        <>
            <header className="header" id="/" ref={ref}>
                <div className="header__content u-margin-bottom-big">
                    <div className="header__hero-img-box">
                        <img
                            alt="BuildCo Hero"
                            src={hero}
                            className="header__hero-img"
                        />
                    </div>

                    <div className="header__text-box">
                        <h1 className="heading-primary u-margin-bottom-small">
                            <span className="heading-primary--sub">If you can Imagine it, </span>
                            <span className="heading-primary--main">
                                We can <span className="emphasis">develop</span> it.
                            </span>
                        </h1>
                        <p className="heading-sub u-margin-bottom-mid">
                            We're a values-driven business committed to delivering lasting positive change. Our progressive approach focuses on empowering our stakeholders and the communities we serve. We believe in collaboration, transparency, and sustainable solutions that make a real difference.
                        </p>

                        <div className="header__form-group">
                            <form className="header__form" onSubmit={handleSubmit}>
                                <input
                                    className="header__form-input u-margin-bottom-mid"
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter Your Email"
                                    autoComplete="off"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button type="submit" className="btn btn--green">Get Started</button>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
});

export default Home;
