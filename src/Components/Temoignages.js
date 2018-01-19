import React, { Component } from 'react';
import './Temoignages.css';

class Temoignages extends Component {
    state={
      opacity: 0,
        texte:"",
        data:[{
          element:{
            image:"https://i.pinimg.com/736x/cf/3a/77/cf3a773eff877097c28f8afe6c1ce1ed--uconn-huskies-wnba.jpg",
            texte:"Everyday, I say 'Why Not'. ",
            nom:"Sue Bird"
          }
        },
        {
         element:{
          image:"https://i.eurosport.com/2018/01/19/2248880-46876399-640-360.jpg",
          texte:"Vamos. ",
          nom:"Rafael Nadal"
        }
      },
      {
        element:{
        image:"https://i.eurosport.com/2018/01/19/2248880-46876399-640-360.jpg",
        texte:"This why we play. ",
        nom:"Kyrie Irving"
        }
      }

      ]

      }
      afficher = () =>{
        this.setState({

        })
      }

  render() {
    let constante =
      this.state.data.map((el,index)=>{
        return(

          <div key={index} className="Wit-Grandcontainer">
          <div className="Wit-texteCache" onClick={this.afficher}>
            <em className="Wit-text"> {el.element.texte}&nbsp;</em>
            <p><strong> {el.element.nom}</strong></p>
          </div>
            <img src={(el.element.image)} className="Wit-app" alt="portrait"/>
            <p>{el.text}</p>

          </div>
        )

    });
    return (
      <div>
        <h1>Temoignages</h1>
      <div className="Wit-container">

       {constante}
      </div>
    </div>
    );
  }
}

export default Temoignages;
