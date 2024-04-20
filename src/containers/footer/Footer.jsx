import React from 'react';
import "./footer.css";
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
          <div className="gpt3__footer-links_logo">
            <img src={gpt3Logo} alt="gpt3logo" />
            <p>get in touch with dev-rak</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
          </div>
        
          <div className="gpt3__footer-links_div">
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
        
          <div className="gpt3__footer-links_div">
            <h4>Get in touch</h4>
            <p>Sindh, PAK</p>
            <p>+92 311 0000</p>
            <p>info@dummy.net</p>
          </div>
        </div>
        <div className="gpt3__footer-copyright">
          <p>&#169; 2024 developer-rak. All rights reserved</p>
        </div>
      </div>
      )
}

export default Footer;