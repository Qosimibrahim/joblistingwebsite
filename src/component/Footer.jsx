import React from 'react'
import "./footer.css"

function Footer() {
    return (
<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-logo">
                <h2>Job Listings</h2>
            </div>
            <div class="footer-links">
                <h4>Links</h4>
                <ul>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#jobs">Jobs</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#privacy">Privacy Policy</a></li>
                </ul>
            </div>
            <div class="footer-contact">
                <h4>Contact Us</h4>
                <p>Email: support@joblistings.com</p>
                <p>Phone: +2348185580358</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Job Listings. All Rights Reserved.</p>
        </div>
    </div>
</footer>
);
}

export default Footer
