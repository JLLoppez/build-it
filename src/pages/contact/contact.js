import React, { useState } from "react";
import axios from "axios";
import LocationMap from "../../components/location/location";

const Contact = React.forwardRef((props, ref) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [serverError, setServerError] = useState(null); // State to handle server errors
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setServerError(null); // Clear previous errors
        try {
            const response = await axios.post("https://buildit-backend.onrender.com/send-email", formData);
            if (response.status === 200) { // Check for explicit success
                alert("Confirmation email sent!");
                setFormData({ name: "", email: "", message: "" }); // Clear form after success
            }
        } catch (error) {
            // Handle server and network errors separately for better UX
            if (error.response) {
                if (error.response.status === 500) {
                    setServerError("An error occurred on the server. Please try again later.");
                } else {
                    setServerError(`Server responded with status: ${error.response.status}. ${error.response.data?.message || ''}`);
                }
            } else if (error.request) {
                setServerError("No response from the server. Check your internet connection.");
            } else {
                setServerError("An unexpected error occurred. Please try again.");
            }
            console.error("Email sending error:", error.toJSON()); // Log detailed error information
        }
    };

    return (
        <>
            <section className="contact-us" id="contact" ref={ref}>
                <h3 className="heading-tertiary u-margin-bottom-small">Contact Us</h3>
                <div className="contact-us__container">
                    <div className="contact-us__left">
                        <h2 className="heading-secondary u-margin-bottom-small">Get in touch</h2>
                        <p className="paragraph u-margin-bottom-mid">
                            Your success is our priority. We thrive on building lasting relationships with clients who share our passion for growth and innovation. Get in touch to explore how we can help you achieve your long-term goals.
                        </p>

                        <div className="contact-us__inner-content-box">
                            <h3 className="contact-us__title u-margin-bottom-small">
                                <span className="contact-us__icon-box">
                                    <svg width="35" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 4.375C17.5136 4.375 15.129 5.36272 13.3709 7.12087C11.6127 8.87903 10.625 11.2636 10.625 13.75C10.625 18.9288 20 36.4 20 36.4C20 36.4 29.375 18.93 29.375 13.75C29.375 11.2636 28.3873 8.87903 26.6291 7.12087C24.871 5.36272 22.4864 4.375 20 4.375ZM20 18.23C18.8118 18.23 17.6723 17.758 16.8322 16.9178C15.992 16.0777 15.52 14.9382 15.52 13.75C15.52 12.5618 15.992 11.4223 16.8322 10.5822C17.6723 9.742 18.8118 9.27 20 9.27C21.1882 9.27 22.3277 9.742 23.1678 10.5822C24.008 11.4223 24.48 12.5618 24.48 13.75C24.48 14.9382 24.008 16.0777 23.1678 16.9178C22.3277 17.758 21.1882 18.23 20 18.23Z" fill="#6B0D78" fillOpacity="0.811765"/>
                                    </svg>
                                </span>
                                Visit us personally
                            </h3>
                            <p className="paragraph u-margin-bottom-small">
                                8 Buiten Street, Cape Town, South Africa 8001.
                            </p>

                            <div className="contact-us__img-box">
                                <LocationMap className="contact-us__img" />
                            </div>
                        </div>
                    </div>

                    <div className="contact-us__right">
                        <form className="contact-us__form form" onSubmit={handleSubmit}>
                            <div className="form__col form__col--1 u-margin-bottom-small">
                                <div className="form__group">
                                    <label htmlFor="name" className="form__label">Name</label>
                                    <input
                                        className="form__input"
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="John Doe"
                                        autoComplete="off"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form__group">
                                    <label htmlFor="contact-email" className="form__label">Email</label>
                                    <input
                                        className="form__input"
                                        type="email"
                                        name="email"
                                        id="contact-email"
                                        placeholder="doejohn@example.com"
                                        autoComplete="off"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form__col form__col--2 u-margin-bottom-mid">
                                <div className="form__group">
                                    <label htmlFor="message" className="form__label">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        className="form__textarea"
                                        required
                                        placeholder="Say Something..."
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </div>

                            {serverError && <p className="form__error">{serverError}</p>} {/* Display server error message */}

                            <button className="btn btn--green" type="submit">Send us a message</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
});

export default Contact;
