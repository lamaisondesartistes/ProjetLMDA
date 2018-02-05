import React, { Component } from 'react';
import Slidero from 'react-slick';
import './Slider.css';

import Slide2 from '../Images/ISlid2.png';
import Slide3 from '../Images/ISlid3.png';
import Slide4 from '../Images/ISlid4.png';
import Slide5 from '../Images/ISlid5.png';
import Slide6 from '../Images/ISlid6.png';
import Slide7 from '../Images/ISlid1.png';
import Slide8 from '../Images/ISlid8.png';
import Slide9 from '../Images/ISlid9.png';
import Slide1 from '../Images/ISlid1.png';


class Rick extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay : true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
          };
        return (
        <Slidero {...settings} className="sliderCoponent" >
                        
            <div className="Leslo"><img className="sliderCoponentImg " src={Slide2} alt="partenaire slide" width="20px" /></div>
            <div className="Leslo"><img className="sliderCoponentImg " src={Slide4} alt="partenaire slide" width="20px" /></div>           
            <div className="Leslo"><img className="sliderCoponentImg " src={Slide3} alt="partenaire slide" width="20px" /></div>
            <div className="Leslo"><img className="sliderCoponentImg " src={Slide9} alt="partenaire slide" width="20px" /></div>
            <div className="Leslo"><img className="sliderCoponentImg " src={Slide1} alt="partenaire slide" width="20px" /></div>
            <div className="Leslo"><img className="sliderCoponentImg " src={Slide8} alt="partenaire slide" width="20px" /></div>
            <div className="Leslo"><img className="sliderCoponentImg " src={Slide5} alt="partenaire slide" width="20px" /></div>
            <div className="Leslo"><img className="sliderCoponentImg " src={Slide6} alt="partenaire slide" width="20px" /></div>
            
          </Slidero>
        );
    }
}

export default Rick;