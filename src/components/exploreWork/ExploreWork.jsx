import React from 'react'
import HireUsToWork from '../aboutUs/HireUsToWork.jsx';
import { Navbar } from '../homePage/Navbar.jsx'
import BedRoom from "../../assets/BedRoom.jpg";
import Footer from '../homePage/Footer.jsx';
import aboutUsFirstIMG from "../../assets/aboutUsFirstIMG.jpeg";

const ExploreWork = () => {
  return (
    <>
      <div>
        <Navbar/>

            <div id='firstHalf'>
                <img style={{display: 'block', overflow: 'hidden' , objectFit: 'contain'}} src={ aboutUsFirstIMG } height={580} width={1800}></img>
                  <div id='MiddleTextContainer'>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                    <div id='firstHalfFirstMiddleTextContainer'>
                        <span style={{color:'#FF565B' }}>EXPLORE </span>OUR WORK
                    </div>
                    <div style={{fontFamily:'sans-serif', font:'message-box', margin:26}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod keoi tempor incididunt ut labore et dolore magna aliqua
                    </div>
                    </div>
                  </div>
            </div>

            <div id='exploreWorkMainContainer' style={{height:3327.8, backgroundColor:'#F5F5F5' }}>
                <div style={{ marginTop:8 }}>
                      <h1 style={{fontFamily:'sans-serif',textAlign:'center', fontStyle:'normal'}}>Minimalistic Design for 2 bedrooms</h1>
                      <img src={ BedRoom } height={500.5} width={1000} style={{borderRadius:6, paddingLeft:'4%', paddingTop:'12%'}}></img>
                </div>
                <div></div>
                <div></div>
            </div>
        <HireUsToWork/>
        <Footer/>
      </div>
      
    </>
  )
}

export default ExploreWork