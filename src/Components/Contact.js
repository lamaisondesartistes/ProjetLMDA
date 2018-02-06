import React, { Component } from 'react';
import './Contact.css';
class Contact extends Component {
    render() {
        return (
            <div className="BoxContainer" >
                <div className="pictureContact">
                    <h1 className="contactText">Contact-Us</h1>
                </div>
                <h2 className="legendContactC">Renseignements</h2>
                <p><i className="fa fa-home" aria-hidden="true"></i><b> Adresse : La Maison des Artistes,<br /> lycée Hyacinth Bastaraud Rue de la Savane <br />BP 18 97112 Grand-Bourg</b></p>
                <p><i className="fa fa-envelope" aria-hidden="true"></i><b> Email : lamaisondesartistesmg@gmail.com </b></p>
                <p><i className="fa fa-phone" aria-hidden="true"></i><b> N° de téléphone : 0690 .981.018 </b></p>
                <div className="container-contact">
                    <div className="Contact">
                        <p className="TextLorem">Le Lorem Ipsum est simplement du faux texte employé dansla composition et la mise en page avant impression.Le Lorem Ipsum est simplement du faux texte employé dans
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.Le Lorem Ipsum est simplement du faux texte employé dans
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                            Le Lorem Ipsum est simplement du faux texte employé dansla composition et la mise en page avant impression.Le Lorem Ipsum est simplement du faux texte employé dans
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.Le Lorem Ipsum est simplement du faux texte employé dans
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                            Le Lorem Ipsum est simplement du faux texte employé dansla composition et la mise en page avant impression.Le Lorem Ipsum est simplement du faux texte employé dans
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.Le Lorem Ipsum est simplement du faux texte employé dans
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                        </p>
                    </div>
                    <div className="ContainerMap">
                        <h2 className="legendContactC" id="legendContact">Carte</h2>
                        <div className="div-iframe-contact">
                            <iframe className="Mapping" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1026.3353530397678!2d-61.3137995!3d15.884135299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c6b54b98e31a5c9%3A0xe5f003c862fb434e!2sLyc%C3%A9e+Hyacinthe+Bastaraud!5e0!3m2!1sfr!2sgp!4v1516901128303" ></iframe>
                        </div>
                    </div>

                </div>

            </div >
        );
    }
}

export default Contact;