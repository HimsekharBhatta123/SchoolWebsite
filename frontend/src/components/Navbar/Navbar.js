import React, { useState } from 'react'
import './Navbar.css'
// import logo from '../Assets/'
import { Link } from 'react-router-dom'
function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <nav>
        <div className="logo">
          <img src="logo.jpeg" alt="" />
          <h2>C.K Academy</h2>
        </div>
        <div>
          <ul id='navbar' onClick={handleClick} className={clicked?'#navbar active':'#navbar'}>
            <li><Link to="/" className='active'>Home</Link></li>
            <li><Link to="/Gallery">Gallery</Link></li>
            <li><Link to="/Curriculum">Curriculum</Link></li>
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/Contact">Contact Us</Link></li>
            <li><Link to="/Login">Admin-Login</Link></li>
          </ul>
        </div>
        <div id="mobile" onClick={handleClick}>
          <i id="bar" className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </nav>
    </>
  )
}

export default Navbar

