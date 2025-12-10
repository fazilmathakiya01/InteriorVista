import { React , useState } from 'react'
import { Navbar } from "../homePage/Navbar.jsx";
import aboutUsFirstIMG from "../../assets/aboutUsFirstIMG.jpeg";
import CustomerSupportImage from "../../assets/CustomerSupportImage.png";
import CustomerCareImage from "../../assets/CustomerCareImage.png";
import EasyToCustomizeImage from "../../assets/EasyToCustomizeImage.png";
import AboutUsSectionLeftSideImage from "../../assets/AboutUsSectionLeftSideImage.png";
import Footer from "../homePage/Footer.jsx" 

const AboutUsPage = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);

    const items = document.querySelectorAll(".accordion-item");

    items.forEach((item) => {
      const title = item.querySelector(".accordion-title");
      const content = item.querySelector(".accordion-content");

      title.addEventListener("click", () => {
        if (content.style.maxHeight) {
          content.style.maxHeight = null; // close
        } else {
          content.style.maxHeight = content.scrollHeight + "px"; // smooth slow open
        }
      });
    });


  };

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
          <div className="icon"><img src={CustomerSupportImage} height={50} width={69}></img></div>
          <h3>Active Support 24/7</h3>
        </div>

        <div className="feature-card">
          <div className="icon"><img src={CustomerCareImage} height={50} width={80}></img></div>
          <h3>Customer Care</h3>
        </div>

        <div className="feature-card">
          <div className="icon"><img src={EasyToCustomizeImage} height={50} width={70}></img></div>
          <h3>Easy to Customize</h3>
        </div>
      </div>

    <div id="childContainer2">
            
            {/* ------------ TOP TEXT LEFT ------------ */}
            <div id="divtextDiv1">
              <p id="secondPartFirstText" style={{paddingTop:'8%', paddingLeft:'7.8%'}}>EXPLORE SOME OF OUR LATEST</p>
    
              <p
                style={{
                  color: "black",
                  paddingLeft: '8.1%',
                  paddingTop: "-6px",
                  fontSize: "35px",
                  fontWeight: 700,
                  fontFamily:"sans-serif"
                }}
              >
                ⸻ <strong id="secondPartSecondText">INTERIOR DESIGN WORK<span style={{color:"black"}}>.</span></strong>
              </p>
            </div>
    
            {/* ------------ MAIN LEFT IMAGE + OVERLAY ------------ */}
            <div id="AboutUssecondImage">
                <img src={AboutUsSectionLeftSideImage} width={'85.9%'} height={'20%'} style={{borderRadius:9}}/>
            </div>
            
            <div
              style={{
                width: "48%",
                paddingTop: "4%",
                paddingLeft: "2%",
                fontFamily: "sans-serif",
              }}
            >

              {/* ------------ PARAGRAPH SECTION ------------ */}
             
              <div id="wrapper">

  {/* ------------ PARAGRAPHS ------------ */}
  
  <div id="paragraphSection"> 
  <p id="paragraph">
  Designer HTML5 Template is 100% free to download provided by TemplateMo website. You are allowed to use this template for your commercial or business websites. You are NOT allowed to redistribute the downloadable ZIP file of this template on any other website. Please contact us for more info.
  </p>

  <p id="paragraph">
  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel cilisis lorem ipsum dolor sit amet, consectetur adipiscingii elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>

  {/* ------------ TITLE ------------ */}
  <p id="heading">How It Works</p>

  {/* ------------ ACCORDION ITEM 1 ------------ */}
  <div className="accordion-item" onClick={() => toggle(1)}>
    <div className="accordion-title">
      <span>What is Interior Design?</span>
      <span style={{ fontSize: "20px" }}>{openIndex === 1 ? "⌃" : "⌄"}</span>
    </div>

    <div
      className="accordion-content"
      style={{
        maxHeight: openIndex === 1 ? "300px" : "0px"
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas ai accumsan lacus vel cilisis lorem ipsum dolor sit amet, consectetur adipiscingii elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>

  {/* ------------ ACCORDION ITEM 2 ------------ */}
  <div className="accordion-item" onClick={() => toggle(2)}>
    <div className="accordion-title">
      <span>What is Exterior Decoration?</span>
      <span style={{ fontSize: "20px" }}>{openIndex === 2 ? "⌃" : "⌄"}</span>
    </div>

    <div
      className="accordion-content"
      style={{
        maxHeight: openIndex === 2 ? "300px" : "0px"
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas ai accumsan lacus vel cilisis lorem ipsum dolor sit amet, consectetur adipiscingii elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      
    </div>
  </div>

  {/* ------------ ACCORDION ITEM 3 ------------ */}
  <div className="accordion-item" onClick={() => toggle(3)}>
    <div className="accordion-title">
      <span>3D Rendering Models</span>
      <span style={{ fontSize: "20px" }}>{openIndex === 3 ? "⌃" : "⌄"}</span>
    </div>

    <div
      className="accordion-content"
      style={{
        maxHeight: openIndex === 3 ? "300px" : "0px"
      }}
    >
      
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas ai accumsan lacus vel cilisis lorem ipsum dolor sit amet, consectetur adipiscingii elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>

</div>


    </div>
</div>
  </div>
        
      <Footer/>

    </>
  )
}

export default AboutUsPage