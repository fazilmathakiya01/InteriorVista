import React from 'react'
import HireUsToWork from '../aboutUs/HireUsToWork.jsx';
import { Navbar } from '../homePage/Navbar.jsx'
import BedRoom from "../../assets/BedRoom.jpg";
import Footer from '../homePage/Footer.jsx';
import aboutUsFirstIMG from "../../assets/aboutUsFirstIMG.jpeg";
import CatImage from "../../assets/CatImage.jpg";
import TwoGirlsOnBed from "../../assets/TwoGirlsOnBed.jpg";
import LivingRoomImage from "../../assets/LivingRoomImage.jpg";
import ArstheticChairRightSideImage from "../../assets/ArstheticChairRightSideImage.jpg";

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

            <div id='exploreWorkMainContainer' style={{height:2470, backgroundColor:'#F5F5F5' }}>
                <div style={{ marginTop:115 }}>
                      <h1 style={{fontFamily:'sans-serif',textAlign:'center', fontStyle:'normal', paddingTop:'9%', fontWidth:900 , fontWeight:900}}>MINIMALISTIC DSEIGN FOR 2 BEDROOMS</h1>
                      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                        <img src={ BedRoom } height={630} width={1240} style={{borderRadius:6, marginTop:'0.8%', display: 'block'}}></img>
                        <div className="info-card">
                          <div>
                            <p className="label">Architect:</p>
                            <p className="value">Catherine Rose</p>
                          </div>
                          <div>
                            <p className="label">Client:</p>
                            <p className="value">TemplateMo</p>
                          </div>
                          <div>
                            <p className="label">Terms:</p>
                            <p className="value">6–12 Months</p>
                          </div>
                          <div>
                            <p className="label">Project Type:</p>
                            <p className="value">Interior Design</p>
                          </div>
                          <div>
                            <p className="label">Strategy:</p>
                            <p className="value">Clean & Minimal</p>
                          </div>
                          <div>
                            <p className="label">Date:</p>
                            <p className="value">January 22, 2022</p>
                          </div>
                        </div>

                      </div>

                      <div style={{ marginTop:'4%', marginLeft:'6.5%', marginRight:'6.5%', fontFamily:'sans-serif', fontSize:18, lineHeight: '1.8em', textAlign:'left', color:'#7A7A7A' }}>
                          <p style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto toril beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequida nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                          </p>
                      </div>

                      <div style={{ marginTop:'2.8%', marginLeft:'6.5%', marginRight:'6.5%', fontFamily:'sans-serif', fontSize:18, lineHeight: '2em', textAlign:'left', color:'#7A7A7A' }}>
                          <p style={{alignItems: 'center'}}>
                          This is an Interior Designer HTML5 Template that is 100% totally free to download, edit and use for your commercial or business websites. You are <span style={{fontWeight:900}}>NOT allowed</span>  to redistribute the downloadable ZIP file of this template on any other website. Please contact <a href="https://templatemo.com" target="_blank" rel="noreferrer" style={{textDecoration:'none', color:'blue'}}>TemplateMo</a> website for more information. Thank you. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                          </p>
                      </div>

                      <div style={{marginTop: "4%",marginLeft: "6.8%",marginRight: "6.8%",display: "flex",justifyContent: "center",gap: "24px"}}>
                        <img src={ CatImage } height={'30%'} width={'49.3%'} style={{ borderRadius: 8 }} />
                        <img src={ TwoGirlsOnBed } height={'30%'} width={'49.3%'} style={{ borderRadius: 8 }} />
                      </div>
                      
                      <div style={{marginTop: "4.5%",marginLeft: "6.5%",marginRight: "6.5%",fontFamily: "sans-serif",fontSize: 18,lineHeight: "1.8em",textAlign: "left",color: "black"}}>
                          <h1>INCREDIBLE WORK</h1>

                          <p
                            style={{color: "#7A7A7A",paddingBottom: "6%",borderBottom:'1.5px solid rgb(229, 229, 229)'}}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto toril beatae vitae dicta sunt explicabo.
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                            sed quia consequuntur magni dolores eos qui ratione voluptatem sequida
                            nesciunt.
                          </p>
                      </div>

                      <div className="work-container">
                      
                        <div className="work-item">
                          <img src={ LivingRoomImage } alt="Living Room" />
                          <div className="text">
                            <h3>Minimalistic Living Room</h3>
                            <p>Interior Design</p>
                          </div>
                        </div>

                        <div className="work-item">
                          <div className="text right">
                            <h3>Futuristic Interior Concept</h3>
                            <p>Interior Design</p>
                          </div>
                          <img src={ ArstheticChairRightSideImage } alt="Interior" />
                        </div>

                      </div>


                </div>              
            </div>
        <HireUsToWork/>
        <Footer/>
      </div>
      
    </>
  )
}

export default ExploreWork