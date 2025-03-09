import React, { useState } from "react";
import "../scss/ContactUs.scss";
import { useDispatch, useSelector } from "react-redux";
import  {postFeedBack}  from '../slices/feedBackSlice'; // Action'ı import et

function ContactUs() {
    const dispatch = useDispatch();
    const feedbacks = useSelector((state) => state.feedback.feedbacks);

    const [ad, setAd] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!ad || !email || !tel || !message) {
            alert("Lütfen tüm alanları doldurun.");
            return;
        }

        const feedbackData = { ad, email, tel, message };
        
        try {
            await dispatch(postFeedBack(feedbackData)).unwrap();
            alert("Form başarıyla gönderildi!");
            
            // Formu temizle
            setAd('');
            setEmail('');
            setTel('');
            setMessage('');
        } catch (error) {
            alert("Mesaj gönderilirken hata oluştu.");
            console.error("Feedback gönderme hatası:", error);
        }
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
                <input
                    type="text"
                    placeholder="Adınız"
                    value={ad}
                    onChange={(e) => setAd(e.target.value)}
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
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
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
