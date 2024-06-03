import React from 'react'
import { Link } from 'react-router-dom'
import './BottomNav.css'
function BottomNav(){
    return(
        <>
            <div className='bottom-navbar'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Gallery">Gallery</Link></li>
                        <li><Link to="/Curriculum">Curriculum</Link></li>
                        <li><Link to="/About">About Us</Link></li>
                        <li><Link to="/Contact">Contact Us</Link></li>
                    </ul>
                </div>
        </>
    )
 }
 export default BottomNav
 