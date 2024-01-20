import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import './Header.scss'
const Header = () => {
  return (
   <header>
    <img src="https://preview.colorlib.com/theme/wines/images/logo.png" alt="" />
    
    <div id='navUl' className='navUl'>
    <ul >
        <Link to={""}><li>Home</li> </Link>
        <Link to={"add"}><li>Add</li> </Link>
        <Link to={"wishlist"}><li>Wishlist</li></Link>
        <li>About</li>
        <li>Contact</li>
    </ul>
   
    </div>
    <div className='iconNav' id='iconNav'>
    <FaBars id='bar' className='bar'/>
    </div>
   </header>
  )
}

export default Header