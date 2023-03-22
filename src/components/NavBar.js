import React from 'react'
import '../css/style.css';
import {Link} from 'react-router-dom'
import logo from '../images/bhaktibeatslogo.png';
function Nav() {
    return (
        <div>
        <div class ="container-fluid pc-nav">
          <Link to="/"><span href="#"> <img style={{ width: 170, height: 50 }} id="mobileimg" src ={logo} alt=""/></span></Link>
          <Link to="/"><span id="explorebtn">Explore&nbsp;&nbsp;<i class ="fa fa-chevron-down"></i></span></Link>
          <form id="search-form">
          <input type ="text"id="search-bar" placeholder="Which instrument do you want to learn ?"/>
          <button id ="explorebtn" style={{height:"60px;"}}><i class="fa fa-search"></i></button>
          </form>
          <Link to="/"><span id="joinforbtn" style={{float:"right"}}>Join for Free</span></Link>
          <Link to="/signup"><span style={{float:"right"}}>Sign up</span></Link>
          <Link to="/login"><span style={{float:"right"}}>Log in</span></Link>
          <Link to="/"><span style={{float:"right",color:"#000"}}>For Group Classes</span></Link>
        </div>
    </div>
    )
}

export default Nav
