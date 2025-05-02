import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
           <div className="footer-content">
               <div className="footer-content-left">
                  <img src={assets.logo} alt=""/>
                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam mollitia quam, ut magni laboriosam iusto est, fuga veniam, minima possimus cupiditate sequi tenetur corporis. Maiores in quo ipsam deleniti perferendis. </p>
                  <div className='footer-social-icons'>
                     <img src={assets.facebook_icon} alt=""/>
                     <img src={assets.twitter_icon} alt=""/>
                     <img src={assets.linkedin_icon} alt=""/>
                  </div>
               </div>
                 
               <div className="footer-content-center">
                      <h2>COMPANY</h2>
                      <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                      </ul>
               </div>

               <div className="footer-content-right">
                        <h2>GET IN TOUCH</h2>
                        <ul>
                          <li>+91-7345895289</li>
                          <li>contact@gmail.com</li>
                        </ul>
               </div>
           </div>
           <hr/>
           <p className='footer-copyright'>Copyright 2025 @ Jihva.com - All Right Reserved.</p>
           <p>Created by <span>Saud Ansari</span></p>
    </div>
  )
}

export default Footer
