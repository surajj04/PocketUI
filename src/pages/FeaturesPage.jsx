import React from 'react';

const FeaturesPage = () => {
    return (
        <div>
            <header className=" text-center py-5">
                <div className="container">
                    <h1 className="display-4">App Features</h1>
                    <p className="lead">
                        Discover the powerful features of our Expense Tracking App.
                    </p>
                </div>
            </header>

            <section className="py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 text-center">
                                <div className="card-body">
                                    <i className="fa-solid fa-chart-line fa-3x mb-3 text-primary"></i>
                                    <h4 className="card-title">Track Your Expenses</h4>
                                    <p className="card-text">
                                        Easily log all your expenses with details like amount, category, date, and description. Get an overview of where your money is going.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 text-center">
                                <div className="card-body">
                                    <i className="fa-solid fa-balance-scale fa-3x mb-3 text-primary"></i>
                                    <h4 className="card-title">Budget Management</h4>
                                    <p className="card-text">
                                        Set budget limits for different categories and monitor your spending habits to make sure you stay on track financially.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 text-center">
                                <div className="card-body">
                                    <i className="fa-solid fa-file-invoice-dollar fa-3x mb-3 text-primary"></i>
                                    <h4 className="card-title">Monthly Reports</h4>
                                    <p className="card-text">
                                        Generate detailed reports every month to see a breakdown of your expenses and analyze your spending trends over time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4 mt-4">
                        <div className="col-md-4">
                            <div className="card h-100 text-center">
                                <div className="card-body">
                                    <i className="fa-solid fa-chart-pie fa-3x mb-3 text-primary"></i>
                                    <h4 className="card-title">Visual Analytics</h4>
                                    <p className="card-text">
                                        Visualize your spending with pie charts and bar graphs to get insights into your spending patterns and make better financial decisions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 text-center">
                                <div className="card-body">
                                    <i className="fa-solid fa-lock fa-3x mb-3 text-primary"></i>
                                    <h4 className="card-title">Secure & Private</h4>
                                    <p className="card-text">
                                        Your data is safe with us. We use advanced security measures to protect your financial data and ensure your privacy.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 text-center">
                                <div className="card-body">
                                    <i className="fa-solid fa-mobile-alt fa-3x mb-3 text-primary"></i>
                                    <h4 className="card-title">Mobile Responsive</h4>
                                    <p className="card-text">
                                        Access your expenses and budgets from any device, anytime. Our app is fully responsive and mobile-friendly for easy use on the go.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeaturesPage;
