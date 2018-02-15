import React, { Component } from 'react';
import './Temoignages.css';

class Temoignages extends Component {
    state={
      opacity: 0,
        texte:"",
        data:[{
          element:{
            image:"./images/img.png",
            nom:" PERATOU Katussia ",
            texte:"\" Travailler au sein de cette entreprise me permet de découvrir et de vaincre les réticences vis-à-vis de la création d'entreprise. \" ",
          }
        },
        {
         element:{
          image:"./images/img.png",
          nom:" THOMAS Medhi ",
          texte:"\" Dans cette entreprise, mon travail est valorisé, ce qui fait émerger en moi une double motivation.\""
        }
      },
      {
        element:{
          image:"./images/img.png",
          nom:" FARGEAU Marielle ",
          texte:"\" Grâce à La Maison Des Artistes, j'ai récupéré des repères liés au monde du travail.\""
        
      }
    }
   
  ],
    }
  render() {
    let constante =
      this.state.data.map((el,index)=>{
        return(
          <div className="Temt" key={index}>
          <div  className="Wit-Grandcontainer">
          <div className="Container-img"><img src={(el.element.image)}  className="Wit-app" alt="portrait"/></div>
          
        <div className="textTemoignage">
          <p className="Wit-text"><strong>{el.element.nom}</strong></p>         
          <p className="Wit-textN">{el.element.texte}</p></div>
          </div>
          </div>
           
           
         
        
        )

    });
    return (
      <div className="TemoiTitle">
        <h2 className='Temoitext'><b>Témoignages</b></h2>
      <div className="Wit-container">

       {constante}
      </div>
    </div>
    );
  }
  
  }

export default Temoignages;