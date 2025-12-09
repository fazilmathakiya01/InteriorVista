import React from 'react'
import { Navbar } from "../homePage/Navbar.jsx";
import aboutUsFirstIMG from "../../assets/aboutUsFirstIMG.jpeg";
import CustomerSupportEmoji from "../../assets/CustomerSupportEmoji.jpeg"
const AboutUsPage = () => {
  return (
    <>
      <Navbar/>
      <div id='firstHalf'>
        <img style={{display: 'block', overflow: 'hidden' , objectFit: 'contain'}} src={ aboutUsFirstIMG } height={580} width={1800}></img>
          <div id='MiddleTextContainer'>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
            <div id='firstHalfFirstMiddleTextContainer'>
                <span style={{color:'#FF565B'}}>ABOUT </span>DESIGNER
            </div>
            <div style={{fontFamily:'sans-serif', font:'message-box', margin:29}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod keoi tempor incididunt ut labore et dolore magna aliqua
            </div>
            </div>
          </div>
      </div>
      <div className="feature-container">
        <div className="feature-card">
          <div className="icon">🎧</div>
          <h3>Active Support 24/7</h3>
        </div>

        <div className="feature-card">
          <div className="icon"><img src={CustomerSupportEmoji}></img></div>
          <h3>Customer Care</h3>
        </div>

        <div className="feature-card">
          <div className="icon">🍩</div>
          <h3>Easy to Customize</h3>
        </div>
      </div>


      
    </>
  )
}

export default AboutUsPage