import React from 'react';
import apple from '../images/download_on_the_app_store_badge_en.svg';
import playstore from '../images/playstore.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import instagram from '../images/instagram.png';
import '../css/style.css';
function Footer2() {
    return (
        <div class =" container">
            <div class ="row">
                <div class ="col-md-7 col-sm-12">
                        <div class ="row">
                            <div class ="col-md-4 col-sm-12">
                                <ul style ={{listStyle:"none"}}><li><b>Bhaktibeats</b></li></ul>
                                <ul style ={{listStyle:"none"}}>
                                    <li>About</li>
                                    <li>Instructors</li>
                                    <li>Instruments</li>
                                    <li>Musicians</li>
                                    <li>Certificates</li>
                                    <li>Diplomas</li>
                                </ul>
                            </div>
                            <div class ="col-md-4 col-sm-12">
                            <ul style ={{listStyle:"none"}}><li><b>Community</b></li></ul>
                            <ul style ={{listStyle:"none"}}>
                                    <li>About</li>
                                    <li>Feedback</li>
                                    <li>Locations</li>
                                    <li>Forum</li>
                                    <li>Outreach</li>
                                    <li>Discussions</li>
                                </ul>
                            </div>
                            <div class ="col-md-4 col-sm-12">
                            <ul style ={{listStyle:"none"}}><li><b>More</b></li></ul>
                            <ul style ={{listStyle:"none"}}>
                                    <li>Musical History</li>
                                    <li>Instrument History</li>
                                    <li>Music Portfolios</li>
                                    <li>Musician Statements</li>
                                    <li>More Information</li>
                                    <li>Instrument Wiki</li>
                                </ul>
                            </div>
                        </div>
                </div>
                   <div class ="col-md-5 col-sm-12">
                        <div>
                            <ul style ={{listStyle:"none"}}>
                                <li><img src ={apple} alt="" width="200" height="60"/></li>
                                <li><img src ={playstore} alt=""width="200" height="60"/></li>
                            </ul>
                        </div>
                   </div>
                </div>
                <hr/>
                <div class ="row">
                    <div class ="col-md-9 col-sm-12">
                        <p>© 2022 Bhaktibeats Inc. All rights reserved.</p>
                    </div>
                    <div class ="col-md-3 col-sm-12">
                        <img src ={facebook} alt="" style={{padding:"10px"}}/>
                        <img src ={linkedin} alt="" style={{padding:"10px"}}/>
                        <img src ={twitter} alt="" style={{padding:"10px"}}/>
                        <img src ={instagram} alt="" style={{padding:"10px"}}/>
                    </div>
                </div>
            </div>
    )
}

export default Footer2
