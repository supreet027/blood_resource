import React from 'react'
import './Footer.css'
import fb from '../media/fb.jpeg';
import insta from "../media/insta.jpeg";
import twitter from "../media/twitter.jpeg";
import linkedin from "../media/linkedin.jpeg";

export default function Footer() {
  return (
    <div className='footer-div'>
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>For Business</h4>
            <a href="/blood">
              <p>Blood</p>
            </a>
            <a href="/healthplan">
              <p>Health Plan</p>
            </a>
            <a href="/individual">
              <p>Individual</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Resources</h4>
            <a href="/resource">
              <p>Resource center</p>
            </a>
            <a href="/healthplan">
              <p>Health Plan</p>
            </a>
            <a href="/individual">
              <p>individual</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Resources</h4>
            <a href="/resource">
              <p>Resource center</p>
            </a>
            <a href="/healthplan">
              <p>Health Plan</p>
            </a>
            <a href="/individual">
              <p>Individual</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Coming soon on</h4>
            <div className="socialmedia">
              <p><img src={fb} alt="..."/></p>
              <p><img src={insta} alt="..."/></p>
              <p><img src={twitter} alt="..."/></p>
              <p><img src={linkedin} alt="..."/></p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>
              @{new Date().getFullYear()} BloodResource. All rights are reserved.
            </p>
          </div>
          <div className="sb_footer-below-links">
            <a href="/terms"><div><p>Terms & Conditions</p></div></a>
            <a href="/terms"><div><p>Privacy & Policy</p></div></a>
            <a href="/terms"><div><p>Social</p></div></a>
            <a href="/terms"><div><p>Terms & Conditions</p></div></a>
          </div>
        </div>
      </div>
    </div>
  )
}
