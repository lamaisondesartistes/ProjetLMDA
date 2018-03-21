import React, { Component } from 'react';
import Slidero from 'react-slick';
import './Slider.css';
import Slide1 from '../Images/ISlid1.png';
import Slide2 from '../Images/ISlid2.png';
import Slide3 from '../Images/ISlid3.png';
import Slide4 from '../Images/ISlid4.png';
import Slide5 from '../Images/ISlid5.png';
import Slide6 from '../Images/ISlid6.png';
import Slide8 from '../Images/ISlid8.png';
import Slide7 from '../Images/ISlid7.png';

const data=[
  {myImg: Slide1},
  {myImg: Slide2},
  {myImg: Slide3},
  {myImg: Slide4},
  {myImg: Slide5},
  {myImg: Slide6},
  {myImg: Slide7},
  {myImg: Slide8},
]

class theSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 1,
            autoplay : true,
            autoplaySpeed: 5000,
            responsive: [   {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                  } },
                  {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                  } },
                  {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                  } }, {
                  breakpoint: 450,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                  }
                } ]
          };

        return (
        <div className="contenairSlider">
        <h2 className="sliderCo">Partenaires</h2>
        <Slidero {...settings} className="sliderCoponent" >
          {data.map((el, i)=>{
            return(
              <li className="slidCopo" key={i}><img className="sliderCoponentImg" src={el.myImg} alt="Images slider"/></li>
            );
          } ) }            
        </Slidero>
        </div>
        );
    }
}

export default theSlider;
