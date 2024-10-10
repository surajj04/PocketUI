import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = (props) => {
    return (
        <div>
            <header className="hero text-center py-5">
                <div className="container">
                    <h1 className="display-4">Track Your Expenses Easily</h1>
                    <p className="lead">
                        Manage your finances effectively with our Expense Tracking App.
                    </p>
                    <Link to="/features" className="btn btn-primary btn-lg mx-2 my-2">
                        Explore Features
                    </Link>
                    {
                        !props.isLogin && (
                            <Link to="/createnew" className="btn btn-success btn-lg mx-2 my-2">
                                Create an Account
                            </Link>
                        )
                    }

                </div>
            </header>
            <section id="features" className="py-5 bg-white">
                <div className="container">
                    <h2 className="text-center">App Features</h2>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <i className="fa-solid fa-chart-line fa-3x mb-3"></i>
                            <h4>Track Expenses</h4>
                            <p>Keep a record of all your expenses easily.</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <i className="fa-solid fa-balance-scale fa-3x mb-3"></i>
                            <h4>Budget Management</h4>
                            <p>Set budgets and manage your spending effectively.</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <i className="fa-solid fa-file-invoice-dollar fa-3x mb-3"></i>
                            <h4>Monthly Reports</h4>
                            <p>Receive detailed monthly reports of your finances.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
