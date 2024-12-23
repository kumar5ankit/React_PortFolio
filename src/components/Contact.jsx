import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div className="container contact" id='contact'>
      <h1>Contact Me</h1>
      <div className="contact-icen">        
    
        <a href="https://www.instagram.com/ankit_maurya_2x/" target='_black' className="items">
        <FaInstagramSquare className="icens"/>
        </a>
        <a href="https://www.linkedin.com/in/ankit-kumar-92177021a/" target='_black' className="items">
        <FaLinkedin className="icens"/>
        </a>
        <a href="https://github.com/kumar5ankit" target='_black' className="items">
        <FaGithubSquare className="icens"/>
        </a>
        <a href="https://web.whatsapp.com/" target='_black' className="items">
        <FaWhatsapp className="icens" />
        </a>
        <a href="mailto:ak3861499@gmail.com" target='_black' className="items">
        <SiGmail className="icens"/>
        </a>
      </div>
    </div>
  )
}

export default Contact