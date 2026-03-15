import React from 'react'
import './Cources.css'

export default function Cources() {
  return (
    
  <div className="page">
    <br></br>
    <br></br>
    <h1 className='head2'>All Cources</h1>
      {/* Top Row */}
      <div className="row">
        <div className="card">
          <h2>Engineering</h2>
          <p>Technology, innovation and problem-solving.</p>
         
          <button onClick={() => window.location.href = "/Engineering.html"}>View Details</button>
        </div>

         <div className="card">
          <h2>Medical</h2>
          <p>Healthcare and life-saving professions.</p>
          <button onClick={() => window.location.href ="/Medical.html"}>View Details</button>
        </div>

        <div className="card">
          <h2>Arts & Humanities</h2>
          <p>Creativity, culture and social studies.</p>
          <button className="btn" onClick={() => window.location.href ="/Arts & Humanities.html"}>View Details</button>

        </div>

      </div>

      <div className="row">

         <div className="card">
          <h2>Commerce</h2>
          <p>Business, finance and economics.</p>
          <button onClick={() => window.location.href ="/Commerce.html"}>View Details</button>
        </div>

        <div className="card">
          <h2>Law</h2>
          <p>Legal studies and justice system.</p>
          <button onClick={() => window.location.href ="/Law.html"}>View Details</button>
        </div>

        <div className="card">
          <h2>Management</h2>
          <p>Leadership and business management.</p>
          <button onClick={() => window.location.href ="/Management.html"}>View Details</button>
        </div>
      </div>

        </div>
        
  )
}
