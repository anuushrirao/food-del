import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita accusamus quisquam distinctio pariatur eaque ut voluptates omnis consequuntur. Sed, ea asperiores! Labore exercitationem, cupiditate fugit facilis quo odio vitae.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon}/>
                    <img src={assets.linkedin_icon}/>
                </div>
            </div>
            <div className="footer-content-right">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-center">
                <h2>Get in touch</h2>
                <ul>
                    <li>+123-456-789-000</li>
                    <li>contact@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright @2024 - All rights reserved</p>
      
    </div>
  )
}

export default Footer
