
import footerLogo from "../../assets/footer-logo.png";

export default function Footer() {
  return (
    <div style={{backgroundColor: 'rgb(255,255,255)', height: '30vh', width:'100%'}} id="childContainer4">
      <div style={{padding:30, display:'flex'}}>
        <div style={{width:'100%', padding:'40px 80px', paddingBottom:8, background:'white', fontFamily:'Arial, sans-serif'}}>
          <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
            <div style={{width:350, marginBottom:40, marginTop:20}}>
              <img src={footerLogo} style={{width:230,marginTop:20 , height:50, marginBottom:25}} alt="footer" />
              <p style={{paddingTop:-10, color:'#555', lineHeight:1.7, fontSize:17}}>Designer is free Bootstrap v5.1.3 CSS template. Everyone can get the best HTML CSS templates from TemplateMo website.</p>
            </div>

          <div style={{paddingLeft:70, width:700, display:'flex', paddingTop:32}}>
              <div style={{minWidth:220, marginBottom:40}}>
                <h3 style={{fontSize:22, marginBottom:20, fontWeight:'bold'}}>Our Location</h3>
                <p style={{color:'#555', lineHeight:2.5, fontSize:17}}>Sunny Isles Beach,<br/>Florida 33160,<br/>United States</p>
              </div>

              <div style={{minWidth:220, marginBottom:40}}>
                <h3 style={{fontSize:22, marginBottom:20, fontWeight:'bold'}}>Customer Care</h3>
                <p style={{color:'#555', lineHeight:2.5, fontSize:17}}>010-020-0340<br/>090-080-0760<br/>info@company.com</p>
              </div>

              <div style={{minWidth:220, marginBottom:40}}>
                <h3 style={{fontSize:22, marginBottom:20, fontWeight:'bold'}}>Follow Us</h3>
                <a href="#top" style={{color:'#555', lineHeight:2.5, fontSize:17, textDecoration:'none'}}>📘 Facebook </a><br/>
                <a href="#top" style={{color:'#555', lineHeight:2.5, fontSize:17, textDecoration:'none'}}>🐦 Twitter</a><br/>
                <a href="#top" style={{color:'#555', lineHeight:2.5, fontSize:17, textDecoration:'none'}}>🔗 Linkedin</a><br/>
              </div>
            
            </div>
          </div>

          <div style={{marginTop:-6, paddingLeft:500}}>
            <h3 style={{fontSize:22, marginBottom:15, fontWeight:'bold'}}>Subscribe To Our Newsletter</h3>
            <div style={{display:'flex', alignItems:'center', borderBottom:'1px solid #ccc', width:660, padding:'10px 0'}}>
              <input type="email" placeholder="Type your email..." style={{flex:1, border:'none', outline:'none', fontSize:18}} />
              <button onClick={()=>{window.location.reload()}} style={{border:'none', background:'none', cursor:'pointer',textDecoration:'none', fontSize:18}}>Submit →</button>
            </div>
          </div>

          <div style={{marginTop:50, paddingTop:25, display:'flex', justifyContent:'space-between', color:'#777'}}>
            <p style={{fontSize:15}}>Copyright © 2022 Designer Co., Ltd. All Rights Reserved.<br/>Design: <a href="https://templatemo.com" target="_blank" rel="noreferrer" style={{textDecoration:'none', color:'red'}}>TemplateMo</a></p>
            <p><a href="#top" style={{fontSize:15, marginRight:45, textDecoration:'none'}}>Go to Top ↑</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
