import React, { Component } from 'react';
import Footer from './Footer';
import './Contact.css';
class Contact extends Component {
    render() {
        return (
            <div className="Contact"> 

        <div className="pictureContact"><h1 className="contactText">Contact-Us</h1></div>
          <div className='Contactcontainer'> 
            <div className="contactContainer"><legend className="legendContact"><h2>Renseignements</h2></legend>
              <p><i className="fa fa-home" aria-hidden="true"></i><b> Adresse : </b></p>
              <p><i className="fa fa-envelope" aria-hidden="true"></i><b> Email : </b></p>
              <p><i className="fa fa-phone" aria-hidden="true"></i><b> N° de téléphone : </b></p>
            </div>
              <div className="MapContainer" ><legend className="legendContact"><h2>Carte</h2></legend>
              <iframe  className="Mapping" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1026.3353530397678!2d-61.3137995!3d15.884135299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c6b54b98e31a5c9%3A0xe5f003c862fb434e!2sLyc%C3%A9e+Hyacinthe+Bastaraud!5e0!3m2!1sfr!2sgp!4v1516901128303" ></iframe>
              </div>
          </div>
          <Footer/>
        </div>
        );
    }
}

export default Contact;