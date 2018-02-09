import React, { Component } from 'react';
import Footer from './Footer';
import './Presentation.css';
import paysage from '../Images/paysage.jpg';
import lambi from '../Images/lambi(blanc).png';
import paysage1 from '../Images/nouveau_paysage.png';
import paysage2 from '../Images/photoLMDA(rogne).jpg'


class Presentation extends Component {
    render() {
        return (
        <div>
            <div className="Pres-Container">
                <div className="Pres-Back">
                    <h1 className="Pres-Title">« Vivre simplement pour que simplement d’autres puissent vivre » (Gandhi)</h1>
                    <img src={paysage1} alt="" className="Pres-Banner"/>
                    <p className="Pres-Content">
                    Il est dorénavant acquis que nous, citoyens des pays industrialisés, sommes pleinement responsables
de la dégradation de notre environnement à l’échelle planétaire, autant sur le point du changement
climatique, de la perte de biodiversité et des ressources (eau, soleil, air), que de notre santé et notre
cadre de vie.<br/>
<br/>
La plupart des produits que nous achetons ont un impact sur l’environnement, car ils nécessitent de
par leur production, emballage et livraison, des matières premières et de l’énergie.
Pourtant, nous avons des produits plus respectueux de l’environnement, qui ont une qualité
similaire voire supérieure. Il s’agit des écoproduits : quelques gestes simples, responsables, efficaces
et de surcroît économiques.<br/>
<br/>
Le développement durable est une expression dont la définition la plus explicite demeure : notre
capacité à satisfaire nos besoins présents sans compromettre ceux des générations futures, ceci à
l’échelle planétaire.<br/>
<br/>
Le développement durable, est une alternative inéluctable à notre mode de développement actuel
qui épuise les ressources naturelles, creuse les écarts de richesse et ampute l’avenir des générations
actuelles et futures.</p>
                </div>
            </div>
            <div className="Pres-traitContainer">
            <div className="Pres-LambiContainer">
            <img src={lambi} alt="lambi" className="Pres-Lambi"/>
            </div>
            </div>


            <div className="Pres-Container">
                <div className="Pres-Back">
                    <h1 className="Pres-Title">Concours "Entreprendre en lycée"</h1>
                    <img src={paysage2} alt="" className="Pres-Banner"/>
                    <p className="Pres-Content">
                    Dans le cadre du concours « Entreprendre en Lycée », le lycée H. BASTARAUD présente :
                    «  LA MAISON DES ARTISTES » création, production, vente et formation aux métiers de l’artisanat
                    d’art. Notre entreprise répond à un besoin :<br/>
                    <br/>
                    • <strong>PEDAGOGIQUE</strong> : Afin de sensibiliser les enfants sur les richesses de la nature et leur
                    éventuelle utilisation<br/>
                    <br/>
                    • <strong>PROTECTION DE L’ENVIRONNEMENT</strong> : Les cellules  photovoltaïques, l’utilisation de matières
                    premières naturelles (+90%) seront les principes utilisés par LA MAISON DES ARTISTES afin
                    d’appuyer notre volonté de nous engager dans une démarche de développement durable et
                    d’autosuffisance.<br/>
                    <br/>
                    <br/>
                    • <strong>VALORISATION DU PATRIMOINE</strong>: Marie-galante est riche de productions locales et de
                    traditions ancrées dans le patrimoine. Par conséquent LA MAISON DES ARTISTES se fera un
                    plaisir de contribuer à leur valorisation ainsi qu’à leur promotion, à travers toutes nos
                    créations.<br/>
                    <br/>
                    <br/>
                    • <strong>CREATION D’ACTIVITES CULTURELLES</strong> : Recherche des graines et coquillages, Ballades en
                    charrette pour la découverte de la nature Espace d’exposition, Manifestations culturelles
                    <br/>
                    <br/>
                    • <strong>CREATION D’ACTIVITES TOURISTIQUES</strong> : Exposition: informations et ventes Office du tourisme
                    • <strong>CREATION D’ACTIVITES DE LOISIRS</strong> : Péri scolarité, Ateliers variés, Animations diverses</p>
                </div>
            </div>
            <Footer/>
        </div>
        );
    }
}
export default Presentation;