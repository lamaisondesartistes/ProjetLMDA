import React, { Component } from 'react';
import Footer from './Footer';
import './Contact.css';
class Contact extends Component {
    render() {
        return (
            <div className="BoxContainer" >
                <div className="pictureContact">
                    <h1 className="contactText">Contact-Us</h1>
                </div>
                <h2 className="legendContactC">Renseignements</h2>
                <p><i className="fa fa-home" aria-hidden="true"></i><b className="StylePol"> Adresse : </b>La Maison des Artistes,<br /> lycée Hyacinth Bastaraud Rue de la Savane <br />BP 18 97112 Grand-Bourg</p>
                <p><i className="fa fa-envelope" aria-hidden="true"></i><b className="StylePol"> Email :</b> lamaisondesartistesmg@gmail.com</p>
                <p><i className="fa fa-phone" aria-hidden="true"></i><b className="StylePol" > N° de téléphone :</b> 0690 .981.018</p>
                <div className="container-contact">
                    <div className="Contact">
                        <p className="TextLorem">
                            <br />
                            Afin de porter notre pierre à l’édifice, et pour répondre à un appel à « Entreprendre en lycée »
concours organisé par le « GIPDAIFI » nous lycée Hyacinthe Bastaraud de Marie-Galante avons choisi
de mettre en place : « La Maison des Artistes », entreprise à caractère commerciale qui a pour but de
créer, produire, vendre des produits artisanaux fabriqués à partir de produits naturels (90%)
(Éléments de la mer (coquillages, sable, coraux…), élément de la terre (graines, calebasses, bois
flotté…)). De plus, notre entreprise propose un volet « formation » aux métiers de l’artisanat d’art.
<br />
                            <br />
                            Le développement durable, est une alternative inéluctable à notre mode de développement actuel
qui épuise les ressources naturelles, creuse les écarts de richesse et ampute l’avenir des générations
actuelles et futures.
La plupart des produits que nous achetons ont un impact sur l’environnement, car ils nécessitent de
par leur production, emballage et livraison, des matières premières et de l’énergie.
                        </p>
                    </div>
                    <div className="ContainerMap">
                        <h2 className="legendContactC" id="legendContact">Carte</h2>
                        <div className="div-iframe-contact">
                            <iframe title="Map-Lycee" className="Mapping" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1026.3353530397678!2d-61.3137995!3d15.884135299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c6b54b98e31a5c9%3A0xe5f003c862fb434e!2sLyc%C3%A9e+Hyacinthe+Bastaraud!5e0!3m2!1sfr!2sgp!4v1516901128303" ></iframe>
                        </div>
                    </div>

                </div>
            <Footer/>
            </div >

        );
    }
}

export default Contact;