import React from 'react';
import '../scss/Footer.scss';
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa'; // react-icons kütüphanesi

function Footer() {
  return (
    <div className='footerContainer'>
      <div className='mapContainer'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d47716.131542025636!2d46.650760047668456!3d41.6285496303207!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40464b03acda7711%3A0xea9b7613221da395!2sBazar%20Store!5e0!3m2!1str!2saz!4v1741117521276!5m2!1str!2saz" 
          width="100%" 
          height="300" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className='socialMediaContainer'>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>
      <p>© 2023 Your Company Name. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;