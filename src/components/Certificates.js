import React from 'react'
import certi4 from '../images/certificates5.png';
import '../css/style.css';
function Certificates() {
    return (
        <div class ="container Certificates">
            <div class ="row">
                <div class ="col-md-6">
                    <br/><br/>
                    <img id ="mobileimg"src ={certi4} style={{ width: 1220, height: 540 }} alt =""/>
                </div>
                <div class ="col-md-5 col-sm-12">
                    <div class ="Certificates-con-box" style ={{marginTop:"30%"}}>
                    <p style ={{color:"grey"}}><b>SHAREABLE CERTIFICATES</b></p>
                    <p style ={{fontSize:"25px"}}>Earn and show your credentials</p>
                    <div style ={{backgroundColor:"#2a73cc",width:"20%",height:"2px"}}></div><br/>
                    <p style ={{fontSize:"17px"}}>Demonstrate your new skills by sharing your Course <b>Certificate, Instrument Certificate, etc.</b>, or diploma.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certificates
