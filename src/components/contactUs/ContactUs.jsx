import React from 'react'
import { Navbar } from '../homePage/Navbar.jsx'
import aboutUsFirstIMG from "../../assets/aboutUsFirstIMG.jpeg";
import HireUsToWork from '../aboutUs/HireUsToWork.jsx';
import Footer from '../homePage/Footer.jsx';

const ContactUs = () => {
  return (
    <>
      <Navbar/>
      
      <div id='firstHalf'>
              <img
                style={{ display: 'block', overflow: 'hidden', objectFit: 'contain' }}
                src={aboutUsFirstIMG}
                height={580}
                width={1800}
              />
      
              <div id='MiddleTextContainer'>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <div id='firstHalfFirstMiddleTextContainer'>
                    <span style={{ color: '#FF565B' }}>CONTACT </span>US
                  </div>
                  <div style={{ fontFamily: 'sans-serif', font: 'message-box', margin: 26 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod keoi tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
              </div>
      </div>

      <div>
      <div style={{ padding:"7%" , paddingBottom:0 , display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: 1350,
            marginTop: 20,
            height: 500,
            borderRadius: "8px",   // 👈 yaha radius
            overflow: "hidden",     // 👈 IMPORTANT
            position: "relative",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23098.757381493146!2d-80.123802!3d25.939343!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ac112dfd1adb%3A0x29dcbb5c069f3bb7!2sSunny%20Isles%20Beach%2C%20FL%2033160%2C%20USA!5e1!3m2!1sen!2sin!4v1733207000000"
            style={{
              width: "100%",
              height: "100%",
              border: 0,
            }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="contact-wrapper">
      {/* LEFT FORM */}
      <div className="contact-left">
        <h3>DON'T BE HESITATED</h3>
        <h1>SEND A MESSAGE NOW!</h1>

        <form>
          <div className="row">
            <input type="text" placeholder="First Name*" />
            <input type="text" placeholder="Last Name*" />
          </div>

          <div className="row">
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Subject*" />
          </div>

          <textarea placeholder="Message"></textarea>

          <button type="button">Send Message</button>
        </form>
      </div>

      {/* RIGHT INFO */}
      <div className="contact-right">
        <div className="info-box">
          <h4>Mailing Address</h4>
          <p>Sunny Isles Beach, Florida 33160, USA</p>
        </div>

        <div className="info-box">
          <h4>Email Address</h4>
          <p>contact@company.com</p>
        </div>

        <div className="info-box">
          <h4>Chat With Us</h4>
          <p>chat@company.com</p>
        </div>
      </div>
      </div>
      </div>

      <HireUsToWork/>
      <Footer/>
    </>
    
  )
}

export default ContactUs