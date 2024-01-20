import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import './Footer.scss'
const Footer = () => {

  return (
    <footer>
    <div className='icons'>
        <FaFacebookF className='fb icon' />
        <FaTwitter className='tw icon' />
        <TfiYoutube className='yt icon' />
        <IoLogoInstagram className='insta icon' />
    </div>
    <p>Copyright ©2024 All rights reserved | This template is made with <FaHeart className='heart' /> by Colorlib</p>
  </footer>
  )
}

export default Footer