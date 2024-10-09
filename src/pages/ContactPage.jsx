import React from 'react';

const ContactUsPage = () => {
    return (
        <div>
            <header className="hero text-center py-5">
                <div className="container">
                    <h1 className="display-4">Contact Us</h1>
                    <p className="lead">We'd love to hear from you!</p>
                </div>
            </header>
            <section className="py-5 bg-white">
                <div className="container">
                    <h2 className="text-center">Get in Touch</h2>
                    <p className="text-center">
                        If you have any questions, feedback, or suggestions, feel free to reach out to us using the form below.
                    </p>
                    <form className="w-100 mx-auto" style={{ maxWidth: '600px' }}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" required />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-success w-100">Send Message</button>
                    </form>
                </div>
            </section>
            <section className="py-5 ">
                <div className="container">
                    <h2 className="text-center">Alternative Contact Methods</h2>
                    <p className="text-center">
                        You can also reach us through the following channels:
                    </p>
                    <ul className="list-unstyled text-center">
                        <li>
                            <i className="fa-solid fa-phone"></i> &nbsp; Phone: +1 (555) 123-4567
                        </li>
                        <li>
                            <i className="fa-solid fa-envelope"></i> &nbsp; Email: support@pocketapp.com
                        </li>
                        <li>
                            <i className="fa-solid fa-map-marker-alt"></i> &nbsp; Address: 123 Finance St, Moneytown, USA
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default ContactUsPage;
