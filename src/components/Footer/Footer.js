import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from './FooterCol';

const Footer = () => {
    const noNamed = [
        {name: "Our Emergency Service" , link: "/emergency"},
        {name: "Marble Fitting" , link: "/marbleFitting"},
        {name: "Tiles Fitting" , link: "/tilesFitting"},
        {name: "Marble Polish" , link: "/marble-polish"},
        {name: "Marble Cutting" , link: "/marble-cutting"},
        {name: "Repairing Service" , link: "/repairing"},
        {name: "Marble Molding Service" , link: "/molding"}
    ]
    const ourAddress = [
        {name: "Barguna, Dhaka, Bangladesh" , link: "//google.com/map"},
        {name: "Map" , link: "//google.com/map"},
       
    ]
    const oralHealth = [
        {name: "Our Emergency Service" , link: "/emergency"},
        {name: "Marble Fitting" , link: "/marbleFitting"},
        {name: "Tiles Fitting" , link: "/tilesFitting"},
        {name: "Marble Polish" , link: "/marble-polish"},
        {name: "Marble Cutting" , link: "/marble-cutting"},
        {name: "Repairing Service" , link: "/repairing"},
        {name: "Marble Molding Service" , link: "/molding"}
    ]
    const services = [
        {name: "Our Emergency Service" , link: "/emergency"},
        {name: "Marble Fitting" , link: "/marbleFitting"},
        {name: "Tiles Fitting" , link: "/tilesFitting"},
        {name: "Marble Polish" , link: "/marble-polish"},
        {name: "Marble Cutting" , link: "/marble-cutting"},
        {name: "Repairing Service" , link: "/repairing"},
        {name: "Marble Molding Service" , link: "/molding"}
    ]
    return (
        <footer className="footer-area bg-secondary clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Oral Health" menuItems={oralHealth}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">01919808032</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;