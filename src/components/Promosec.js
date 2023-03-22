import React from 'react'
import promo from '../images/promoStat2.png';
import redcir from '../images/pinkish-half-circle.png';
import '../css/style.css';
function Promosec() {
    return (
        <div class="container-fluid Promosec">
            <div class="row">
                <div class="col-md-6 col-sm-12">
                    <div class="redcir"><img src={redcir} alt="" /></div>
                    <div class=""><img style={{ width: 700, height: 450 }}id="promoimg" src={promo} alt="" /></div>
                </div>
                <div class="col-md-5 col-sm-12">
                    <div class="con-box2">
                        <p id="heading">Learner outcomes on Bhaktibeats</p>
                        <p id="subheading"><b>87% of people learning </b>for musical skill development <b>report becoming proficient </b> in the traditional Indian instrument of their choice</p>
                        <p>-&nbsp;Bhaktibeats Learner Outcomes Survey (2022)</p>
                        <button id="joinbtn" style={{ margin: "10px" }}>Join for Free</button>
                        <button id="trybtn" style={{ margin: "10px" }}>Try Bhaktibeats for Group Classes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promosec
