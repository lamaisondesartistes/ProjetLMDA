import React, { Component } from 'react';
import Footer from './Footer';
//Insertion Map leaflet
import { Map, TileLayer, Marker } from 'react-leaflet';
import './Contact.css';



class Contact extends Component {
    state ={
        zoom:20,
        latitude: 15.88364,
        longitude: -61.31296,
    }

    render() {
      
        return (
            <div>
            <div className="BoxContainer">
                            <strong><p className="styleText" id="TextLorem">
                                            Afin de porter notre pierre à l’édifice, et pour répondre à un appel à « Entreprendre en lycée »
                concours organisé par le « GIPDAIFI » nous lycée Hyacinthe Bastaraud de Marie-Galante avons choisi
                de mettre en place : « La Maison des Artistes », entreprise à caractère commerciale qui a pour but de
                créer, produire, vendre des produits artisanaux fabriqués à partir de produits naturels (90%)
                (Éléments de la mer (coquillages, sable, coraux…), élément de la terre (graines, calebasses, bois
                flotté…). De plus, notre entreprise propose un volet « formation » aux métiers de l’artisanat d’art.
                <br />
                                            <br />
                                            Le développement durable, est une alternative inéluctable à notre mode de développement actuel
                qui épuise les ressources naturelles, creuse les écarts de richesse et ampute l’avenir des générations
                actuelles et futures.
                La plupart des produits que nous achetons ont un impact sur l’environnement, car ils nécessitent de
                par leur production, emballage et livraison, des matières premières et de l’énergie.
                                        </p></strong>
                <div className="boxCont">
                        <div className="Contact">
                            <h2 className="legendContactC">Renseignements</h2>
                            <div className="TextCont">
                                <p className="styleText"><i className="fa fa-home -co-m" aria-hidden="true"></i><b className="StylePol">Adresse</b>:<br/>La Maison des Artistes,<br /> lycée Hyacinthe Bastaraud Rue de la Savane <br />BP 18 97112 Grand-Bourg</p>
                                <p className="styleText"><i className="fa fa-envelope -co" aria-hidden="true"></i><b className="StylePol">Email</b>:<br/>lamaisondesartistesmg@gmail.com</p>
                                <p className="styleText"><i className="fa fa-phone -co" aria-hidden="true"></i><b className="StylePol"> N° de téléphone</b>:<br/> 0690 .981.018</p>
                            </div>
                        </div>

                        <div className="boxMap">
                            <h2 className="legendContactC">Carte</h2>
                            <Map id="Leaflet-map" center={[this.state.latitude, this.state.longitude]} zoom={this.state.zoom}>
                                <TileLayer
                                    attribution='&copy; <a href="https://osm.org/go/YzRpPSJWC--?layers=C&way=521380803">OpenStreetMap</a> contributors'
                                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                                />
                                <Marker position={[this.state.latitude, this.state.longitude]}>
                                </Marker>
                            </Map>
                        </div>       
                </div>
            </div>



        <Footer/>


        </div>
        );
    }
}

export default Contact;