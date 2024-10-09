import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-dark text-light text-center py-3" style={{marginTop:"130px"}}>
            <div className="container">
                <p>&copy; 2024 Pocket. All rights reserved.</p>
                <a href="#" className="text-light">Privacy Policy</a> |
                <a href="#" className="text-light">Contact Us</a>
            </div>
        </footer>
    )
}

export default Footer