import React from "react";
import "../scss/ContactUs.scss";

function ContactUs() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form başarıyla gönderildi!");
    };

    return (
        <div className="contact-container">
            <div className="contact-info">
                <div className="info-item">
                    <h4>Telefon:</h4>
                    <p>+994513161354</p>
                    <p>+994516141354</p>
                </div>
                <div className="info-item">
                    <h4>E-poçt:</h4>
                    <p>12345@gmail.com</p>
                </div>
                <div className="info-item">
                    <h4>Adres:</h4>
                    <p>100 Heydər Əliyev prospekti, Zaqatala</p>
                </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Adınız" required />
                <input type="email" placeholder="E-poçt Adresiniz" required />
                <textarea placeholder="Mesajınız" rows="5" required></textarea>
                <button type="submit">Gönder</button>
            </form>
        </div>
    );
}

export default ContactUs;
