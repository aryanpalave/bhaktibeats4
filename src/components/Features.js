import React from 'react';
import '../css/style.css'
import SvgaLearn from '../images/SvgaLearn.png';
import teacherimg from '../images/teacher-img.png';
import SvgaColorCertificate from '../images/SvgaColorCertificate.png';
import SvgaCommunity from '../images/SvgaCommunity.png';
function Features() {
    return (
        <div class ="container-fluid features">
            <div class ="row text-center">
                <div class ="col-md-12 col-sm-12">
                    <h1 id="amitfeaturehead">Achieve your goals with Bhaktibeats</h1>
                </div>
            </div><br/><br/>
            <div class ="container">
                <div class ="row text-center">
                    <div class ="col-md-3 col-sm-12">
                        <div class ="con-box" >
                            <img src ={SvgaLearn} alt =""/>
                            <h3>Learn traditional Indian instruments</h3>
                            <p>like the mrdanga, harmonium, veena, and kartals</p>
                        </div>
                    </div>
                    <div class ="col-md-3 col-sm-12">
                        <div class ="con-box" >
                            <img src ={teacherimg} alt =""/>
                            <h3>Get ready for an education in music</h3>
                            <p>taught by experts in each instrument</p>
                        </div>
                    </div>
                    <div class ="col-md-3 col-sm-12">
                        <div class ="con-box" >
                            <img src ={SvgaColorCertificate} alt =""/>
                            <h3>Earn a certificate or music diploma</h3>
                            <p>after testing to show your musical knowledge </p>
                        </div>
                    </div>
                    <div class ="col-md-3 col-sm-12">
                        <div class ="con-box" >
                            <img src ={SvgaCommunity} alt =""/>
                            <h3>Connect with a community of learners</h3>
                            <p>To get feedback and have your questions answered</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
