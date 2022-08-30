
import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom'
import { Button } from 'bootstrap';
 
 function Footer() {
   return (
     <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join the Cars newsletter to recieve our best Car deaks
            </p>
            <p className='footer-subscription-text'>
                You can unsubsribe at any time you please.
            </p>
            <div className='input-area'>
                <form >
                    <input type='email' name='email' placeholder='Your Email' className='footer-input' />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>

                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link> 
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Services</Link>
                </div>
            </div>
        </div>

        

     </div>
   )
 }
 
 export default Footer;