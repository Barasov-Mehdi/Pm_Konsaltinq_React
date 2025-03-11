// component/ContactUs.jsx
import React, { useState } from "react";
import "../scss/ContactUs.scss";
import { useDispatch } from "react-redux";
import { postFeedBack } from '../slices/feedBackSlice';

function ContactUs() {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const feedback = {
            name,
            email,
            number,
            message,
        };

        try {
            await dispatch(postFeedBack(feedback));
            console.log("Feedback başarıyla gönderildi.");
            alert('Göndərildi...')
        } catch (error) {
            console.error("Geri bildirim gönderme hatası:", error.response?.data || error.message);
            alert("Mesaj gönderilirken hata oluştu.");
        }

        setName('')
        setEmail('')
        setNumber('')
        setMessage('')
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

            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type="text"
                    placeholder="Adınız"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="E-poçt Adresiniz"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Telefon"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Mesajınız"
                    rows="6"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Gönder</button>
            </form>
        </div>
    );
}

export default ContactUs;
