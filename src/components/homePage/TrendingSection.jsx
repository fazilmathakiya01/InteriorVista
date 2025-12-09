import trendImg from "../../assets/whats-trending-item-image.jpg";
import img2 from "../../assets/Screenshot1.png";
import img3 from "../../assets/Screenshot1.png";
import locationImg from "../../assets/locationSticker.png"

export default function TrendingSection() {
  return (
    <>
      <div id="childContainer2">
        
        {/* ------------ TOP TEXT LEFT ------------ */}
        <div id="divtextDiv1">
          <p id="secondPartFirstText">EXPLORE SOME OF OUR LATEST</p>

          <p
            style={{
              color: "black",
              paddingLeft: "140px",
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
        <div id="secondImage">
          <img src={trendImg} height="726.8" width="650" alt="trending" />

          <div id="overlay"></div>

          <div className="overlay-text-wrapper">
            <span id="textleft">MODERNIZED INTERIOR</span>
            <span id="textright">Guest Room Decoration</span>
          </div>
        </div>

        {/* ------------ RIGHT TEXT SECTION ------------ */}
        <div id="rightTextSecondPartContainer" style={{ paddingTop: "22px" }}>

          {/* ITEM 1 */}
          <div style={{ fontWeight: "bolder", fontSize: "22px", color:"2A2A2A", margin: "0px 0px 30px", padding:"0px 0px 10px" , borderBottom: "2px solid #eee", fontFamily:"sans-serif" }}>
            Interior Design
          </div>
          <span style={{ fontSize: "18px", color: "#7A7A7A", fontFamily:"sans-serif", paddingTop: "8px", display: "inline-block" }}>
              📅&nbsp;&nbsp;&nbsp;January 22, 2022
          </span>

          <p style={{ fontWeight: "bolder", color:"#2A2A2A" , fontFamily:"sans-serif" , fontSize: "17px", paddingTop: "18px" }}>
            The Waterfront Cafe and Restaurant →
          </p>

          <div style={{ display: "flex" }}>
            <p style={{ color: "#7A7A7A", fontFamily:"sans-serif" ,paddingTop: "5px", paddingRight: "9px" , paddingBottom:20}}>
              <img src={locationImg} height={"20px"} width={"20px"}></img><br></br>Florida, USA
            </p>
            <p style={{ color: "#9a8787" , fontFamily:"sans-serif" ,paddingTop: "16px", paddingLeft: "110px" }}>
              Designer HTML5 Template is 100% free to download provided by TemplateMo website.
            </p>
          </div>

          {/* ITEM 2 */}
          <div
            style={{
              fontWeight: "bolder",
              fontSize: "20px",
              paddingTop: "40px",
              borderBottom: "2px solid rgb(238, 228, 228)",
              fontFamily:"sans-serif",
              color:"#2A2A2A",
              margin:"0px 0px 30px",
              padding:"0px 0px 10px",
            }}
          >
            Building & Developing
            <br />
          </div>

          <span style={{ fontSize: "18px", color: "#7A7A7A", fontFamily:"sans-serif", paddingTop: "6px", paddingBottom:30 , display: "inline-block" }}>
              📅&nbsp;&nbsp;&nbsp;January 22, 2022
          </span>

          <p style={{ fontWeight: "bolder", fontFamily:"sans-serif" , fontSize: "17px", paddingTop: 60, color:"2A2A2A", margin: "0px 0px 5px", padding:"0px 0px 10px", paddingBottom:"20px" }}>
            Home Land Port Canaveral Suites →
          </p>

          <div style={{ display: "flex" }}>
            <p style={{ color: "#7A7A7A", fontFamily:"sans-serif", paddingRight: "9px" }}>
              <img src={locationImg} height={"20px"} width={"20px"} ></img> <br></br>Miami Beach, Florida,
              USA
            </p>
            <p style={{ color: "#7A7A7A", fontFamily:"sans-serif", paddingTop: "15px", paddingLeft: "64px" }}>
              This is based on latest Bootstrap v5.1.3 CSS layout where you can easily edit and use
              Bootstrap components.
            </p>
          </div>

          {/* ITEM 3 */}
          <div
          style={{
            fontWeight: "bolder",
            fontSize: "20px",
            color: "#2A2A2A",
            paddingTop: "28px",
            margin: "0px 0px 30px",
            padding: "0px 0px 10px",
            fontFamily: "sans-serif",
            
          }}
        >
          <span
            style={{
              paddingTop:"19px",
              display: "inline-block",  // important
              borderBottom: "2px solid #eee",
              paddingBottom: "8px",
              width: "602px",           // underline width
            }}
          >
            Giving Your Brand Power
          </span>

          <div style={{ display: "flex" }}>
          <span style={{ fontSize: "16px", fontWeight:"350", color: "#7A7A7A", fontFamily:"sans-serif", paddingTop: "40px", display: "inline-block" }}>
              📅&nbsp;&nbsp;&nbsp;January 22, 2022
          </span>
            <p
              style={{
                fontWeight: "bolder",
                fontSize: "17px",
                color: "black",
                paddingTop: "21px",
                paddingLeft: "26px",
              }}
            >
              Hallandale Beach Motel Design →
            </p>
          </div>

          <div style={{ display: "flex" }}>
            <p style={{ color: "#7A7A7A", fontWeight:"350" ,fontFamily:"sans-serif", fontSize:"16px" , paddingTop: "8px", paddingRight: "9px" }}>
              <img src={locationImg } height={"20px"} width={"20px"} ></img><br></br>North City, Beach Park
            </p>
            <p style={{ color: "#7A7A7A", fontWeight:"350", fontSize:"16px" ,fontFamily:"sans-serif", paddingTop: "23px", paddingLeft: "73px" }}>
              Feel free to download & use this template for your websites. Please tell your friends
              about TemplateMo.
            </p>
          </div>
        </div>

          {/* ITEM 4 */}
        <div style={{ fontWeight: "bolder", fontSize: "20px", color:"2A2A2A", margin: "0px 0px 30px", padding:"0px 0px 10px" , borderBottom: "2px solid #eee", fontFamily:"sans-serif" }}>
            Boost Up Your Style
          </div>
          <span style={{ fontSize: "18px", color: "#7A7A7A", fontFamily:"sans-serif", paddingTop: "8px", display: "inline-block" }}>
              📅&nbsp;&nbsp;&nbsp;January 16, 2022
          </span>

          <p style={{ fontWeight: "bolder", color:"#2A2A2A" , fontFamily:"sans-serif" , fontSize: "20px", paddingTop: "18px" }}>
            Interior for Marina Beach Resort →
          </p>

          <div style={{ display: "flex" }}>
            <p style={{ color: "#7A7A7A", fontFamily:"sans-serif" ,paddingTop: "5px", paddingRight: "9px" }}>
              <img src={locationImg} height={"20px"} width={"20px"}></img><br></br>Sunny Isles Beach, FL 33160
            </p>
            <p style={{ color: "#7A7A7A" , fontFamily:"sans-serif" ,paddingTop: "16px", paddingLeft: "70px" }}>
            You are <span style={{fontWeight:"bold"}}>NOT allowed</span> to redistribute the downloadable ZIP file of this template on any other website. Please contact us for more info.
            </p>
          </div>

          
        </div>

        {/* ------------ TRENDING IMAGES (BOTTOM SECTION) ------------ */}
        <div style={{ display: "flex" }} id="loremPara">
          <div style={{ display: "flex" ,flexDirection: "column",  width:"700px", height:"300px" }}>
            <div id="divtextDiv1">
              <p
                id="secondPartFirstText"
                style={{ paddingTop: "165px", paddingLeft: "100px" }}
              >
                CHECK OUT WHATS TRENDING IN
              </p>

              <p
                style={{
                  color: "black",
                  paddingLeft: "107px",
                  fontSize: "35px",
                  fontWeight: 700,
                }}
              >
                ⸻ <strong id="secondPartSecondText">INTERIOR DESIGN WORK.</strong>
              </p>
            </div>

            <p
              style={{
                color: "#948383",
                height: "50px",
                width: "555px",
                paddingLeft: "107px",
                marginTop:"12px",

              }}
            >
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur ducimus expedita delectus ipsa. Pariatur perspiciatis impedit ducimus quam numquam placeat enim neque culpa eligendi illum necessitatibus, quaerat repellat a qui.
            </p>

            <a style={{ display: "flex", justifyContent: "center", marginTop: "56px"}} className="cta1" href="#discover">
              Discover More
            </a>
          </div>

          {/* IMAGE 1 */}
          <div style={{ display: "flex" }}>
            <img
              className="hoverEffect"
              src={trendImg}
              alt="trending"
              style={{
                marginTop: "410px",
                marginLeft: "50px",
                borderRadius: "9px",
                transition: "transform 0.7s ease, opacity 0.7s ease",
                transformOrigin: "center",
                opacity: 1,
                height: "500px",
                width: "350px"
              }}
            />
          </div>

          {/* IMAGE 2 */}
          <div style={{ display: "flex" }}>
            <img
              className="hoverEffect"
              src={img2}
              alt="image2"
              style={{
                marginTop: "495px",
                height: "330px",
                width: "240px",
                borderTopRightRadius: "9px",
                borderBottomRightRadius: "9px",
                transition: "transform 0.7s ease, opacity 0.7s ease",
                transformOrigin: "center",
                opacity: 1
              }}
            />
          </div>

          {/* IMAGE 3 */}
          <div style={{ display: "flex" }}>
            <img
              className="hoverEffect"
              src={img3}
              alt="image3"
              style={{
                marginTop: "575px",
                height: "170px",
                width: "80px",
                borderTopRightRadius: "9px",
                borderBottomRightRadius: "9px",
                transition: "transform 0.7s ease, opacity 0.7s ease",
                transformOrigin: "center",
                opacity: 1
              }}
            />
          </div>
        </div>

      </div>
    </>
  );
}
