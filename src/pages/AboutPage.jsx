import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <header className="hero text-center py-5">
                <div className="container">
                    <h1 className="display-4 my-3">About Us</h1>
                    <p className="lead">
                    Pocket is a user-friendly application designed to help individuals take control of their finances. With intuitive expense tracking, budget management, and insightful reporting features, users can effortlessly monitor their spending habits and make informed financial decisions. Whether you’re looking to save money, manage monthly budgets, or gain a clearer understanding of your financial health, Pocket empowers you to achieve your financial goals with ease and confidence.
                    </p>
                </div>
            </header>

            <section className="py-5">
                <div className="container">
                    <h2 className="text-center">Our Values</h2>
                    <div className="row my-4">
                        <div className="col-md-4 text-center">
                            <i className="fa-solid fa-heart fa-3x mb-3"></i>
                            <h4>Transparency</h4>
                            <p>We believe in being transparent about our features and functionalities.</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <i className="fa-solid fa-users fa-3x mb-3"></i>
                            <h4>User-Centric</h4>
                            <p>Our users are at the heart of everything we do.</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <i className="fa-solid fa-shield-alt fa-3x mb-3"></i>
                            <h4>Security</h4>
                            <p>We prioritize the security of your financial data.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
