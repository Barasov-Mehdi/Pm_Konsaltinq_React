import React from 'react';
import '../scss/Locations.scss';

function Locations() {
    return (
        <div className="locations-container">
            <h1 className="locations-title">Əlaqə Məlumatları</h1>

            <div className="location card">
                <h3 className="location-title">Telefon:</h3>
                <p className="location-info">+994 51 316 13 54</p>
                <p className="location-info">+994 51 614 13 54</p>
            </div>

            <div className="location card">
                <h3 className="location-title">E-poçt:</h3>
                <p className="location-info">12345@gmail.com</p>
            </div>

            <div className="location card">
                <h3 className="location-title">Ünvan:</h3>
                <p className="location-info">100 Heydər Əliyev prospekti, Zaqatala</p>
            </div>

            <div className="location card">
                <h3 className="location-title">Xəritə:</h3>
                <h3 className="location-info">
                    Bazarstorun 2-ci mərtəbəsi sol girişdən
                </h3>
                <div className="maps">
                    <iframe
                        className="location-map"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d47716.131542025636!2d46.650760047668456!3d41.6285496303207!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40464b03acda7711%3A0xea9b7613221da395!2sBazar%20Store!5e0!3m2!1str!2saz!4v1741117521276!5m2!1str!2saz"
                        width="100%"
                        height="200"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    );
}

export default Locations;