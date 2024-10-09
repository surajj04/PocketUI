import React from 'react';

const LoginPage = () => {
    return (
        <div>
            <header className="hero text-center py-5">
                <div className="container">
                    <h1 className="display-4">Login to Pocket</h1>
                    <p className="lead">Access your financial insights</p>
                </div>
            </header>
            <section className="py-5 bg-white">
                <div className="container">
                    <h2 className="text-center">Welcome Back!</h2>
                    <form className="w-100 mx-auto" style={{ maxWidth: '600px' }}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" required />
                        </div>
                        <button type="submit" className="btn btn-success w-100">Login</button>
                    </form>
                    <div className="text-center mt-3">
                        <p>Don't have an account? <a href="/create-account">Create an account</a></p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LoginPage;
