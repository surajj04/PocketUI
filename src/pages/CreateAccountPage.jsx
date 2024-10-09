import React from 'react';

const CreateAccountPage = () => {
    return (
        <div>
            <header className="hero text-center py-5">
                <div className="container">
                    <h1 className="display-4">Create Your Account</h1>
                    <p className="lead">Join Pocket and start tracking your expenses!</p>
                </div>
            </header>
            <section className="py-5 bg-white">
                <div className="container">
                    <h2 className="text-center">Register</h2>
                    <form className="w-100 mx-auto" style={{ maxWidth: '600px' }}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmPassword" required />
                        </div>
                        <button type="submit" className="btn btn-success w-100">Create Account</button>
                    </form>
                    <div className="text-center mt-3">
                        <p>Already have an account? <a href="/login">Login here</a></p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CreateAccountPage;
