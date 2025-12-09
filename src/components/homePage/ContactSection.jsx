import contactBg from "../../assets/contact-us-bg.jpg";

export default function ContactSection() {
  return (
    <div id="childContainer3" style={{height: '100vh', width: '101.1%',marginLeft:"-7.8px"}}>
      <div style={{width:'100%', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center',padding:"-10px", background:`url(${contactBg}) center/cover no-repeat`}}>
        <div style={{width:'100%', maxWidth:'1200px', background:'#fff', borderRadius:'12px', display:'flex', overflow:'hidden', boxShadow:'0px 8px 25px rgba(0,0,0,0.15)'}}>
          <div style={{width:'50%', padding: '40px', width:'550px'}}>
            <h1 style={{fontFamily:"sans-serif",fontSize: '32px', margin:0, fontWeight:800, marginTop:35}}>DON'T BE HESITATED<br/><span style={{color:'#ff4d59',fontFamily:"sans-serif"}}>TALK TO US</span> NOW!</h1>
            <div style={{display:'flex', gap:15, marginTop:15}}>
              <input type="text" placeholder="First Name*" required style={{width:'100%', padding:15, fontSize:15, border:'2px solid #ddd', borderRadius:6}} />
              <input type="text" placeholder="Last Name*" required style={{width:'100%', padding:15, fontSize:15, border:'2px solid #ddd', borderRadius:6}} />
            </div>

            <div style={{display:'flex', gap:15, marginTop:15}}>
              <input type="email" placeholder="Your Email" required style={{width:'100%', padding:15, fontSize:15, border:'2px solid #ddd', borderRadius:6}} />
              <input type="text" placeholder="Subject*" required style={{width:'100%', padding:15, fontSize:15, border:'2px solid #ddd', borderRadius:6}} />
            </div>

            <textarea placeholder="Message" style={{width:'94%', padding:15, marginTop:15, fontSize:15, border:'2px solid #ddd', borderRadius:6, height:140, resize:'none'}}></textarea>

            <button onClick={() => alert('data send!!')} style={{width:'100%', padding:15, marginTop:28, background:'#ff4d59', color:'#fff', fontSize:17, border:'none', borderRadius:6, cursor:'pointer'}}>Send Message</button>
          </div>

          <div style={{width:'50%', height:643, width:600, position:'relative', display:'flex' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23098.757381493146!2d-80.123802!3d25.939343!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ac112dfd1adb%3A0x29dcbb5c069f3bb7!2sSunny%20Isles%20Beach%2C%20FL%2033160%2C%20USA!5e1!3m2!1sen!2sin!4v1733207000000" 
              style={{border:0, width:'100%', height:'100%', position:'absolute', top:0, left:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
