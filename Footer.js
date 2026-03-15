import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <p>&copy; 2026 My Courses Website. All Rights Reserved.</p>
        <ul className="footer-links">
          <li><a href="http://localhost:3000">Home</a></li>

          <a href="Career Guidance.html" target="_blank">Career Guidance</a>
          <li>Contact</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
