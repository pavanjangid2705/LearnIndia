import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar">
            <div className="logo">LearnIndia</div> 
            
            <ul className="nav-links">       
            <li onClick={() => window.location.href="/first"}>Home</li>
            <li onClick={() => window.location.href = "/Engineering.html"}>Engineering</li>
             <li onClick={() => window.location.href ="/Medical.html"}>Medical</li>
             <li onClick={() => window.location.href ="/Arts & Humanities.html"}>Arts & Humanities</li>
            <li onClick={() => window.location.href ="/Commerce.html"}>Commerce</li>
             <li onClick={() => window.location.href ="/Law.html"}>Law</li>
            <li onClick={() => window.location.href ="/Managment.html"}>Management</li>
            <li onClick={() => window.location.href = "/Career Guidance.html" }>Career Guidance</li>
            <li>Contact</li>
            
            </ul>
        </nav>
    </div>
  )
}