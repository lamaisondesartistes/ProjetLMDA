import React, { Component } from 'react';
import './Slider.css';


const slides =[
  {url:'https://veillecarto2-0.fr/wp-content/uploads/2017/06/wsi-imageoptim-communaute-de-communes-marie-galante_2.jpg',
   title:''
  },
  {url:'http://online.fliphtml5.com/bkoj/ejxw/files/extfile/company_logo.jpg',
   title:''
  },
  {url:'http://p4.storage.canalblog.com/42/64/90322/7691171.jpg',
   title:''
  },
  {url:'http://www.atelierdarchivage.fr/wp-content/uploads/2015/12/saint-louisMG.jpg',
   title:''
  },
  {url:'http://www.avij971.net/wp-content/uploads/partenaire-commune-capesterre-de-marie-galante.jpg',
   title:''
  },
]

class Slider extends Component {
  
  state ={
    position: 1
  }

  previousSlide = () => {
    this.setState({
      position: --this.state.position
    });
    console.log(this.state.position);
    if (this.state.position < 0 ) {
      this.setState({
        position: 2
      })
      console.log(this.state.position);
    }
  }
  nextSlide = () => {
    this.setState({
      position: ++this.state.position
    });
    console.log(this.state.position);
  
    if (this.state.position > 2 ) {
      this.setState({
        position:0
      })
      console.log(this.state.position);
    }
  }

  

  render() {
    let newMargin = this.state.position *-200;
    return (
      <div className="App" style={{marginTop:'50px'}}>
      <h1>Partenaires</h1>
      <div className="Contain">
      <button className="fa fa-arrow-left fa-2x" onClick={this.previousSlide}></button>
      <div className="slider-container" >
      <ul style={{ marginLeft: newMargin}}>
      {slides.map((slide,i) =>{
        return(
          <li key={i}><img src={slide.url} alt={slide.title}/></li>
        )
      })}      
      </ul>
      </div>
      <button className="fa fa-arrow-right fa-2x" onClick={this.nextSlide}></button>
      </div>
      </div>
    );
  }
}

export default Slider;