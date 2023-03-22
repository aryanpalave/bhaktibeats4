import React, { Component } from "react";
import julio from '../images/julio.png';
import kara from '../images/kara.png';
import sabrina from '../images/sabrina.png';
import mirela from '../images/mirela-decorative.png';
import '../css/style.css';
import '../css/slick-theme.css';
import '../css/slick.css';
import Slidr from "react-slick";

export default class Slider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div class=" container text-center" style={{ overflowX: "hidden" }}>
                
            </div>
        )
    }
}