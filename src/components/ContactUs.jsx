import React, { useState } from "react";
import "../scss/ContactUs.scss";
import { useDispatch } from "react-redux";
import { postFeedBack } from "../slices/feedBackSlice";

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
            alert('Gönderildi...');
        } catch (error) {
            console.error("Geri bildirim gönderme hatası:", error.response?.data || error.message);
            alert("Mesaj gönderilirken hata oluştu.");
        }

        setName('');
        setEmail('');
        setNumber('');
        setMessage('');
    };

    return (
        <div className="feedback-container">
            <div className="feedback-left">
                <div className="image-overlay"></div>
                <h1>Mesaj Formu</h1>
                <p>Suallarınızı burdan soruşa bilərsiniz. Formu tam doldurduğunuzdan əmin olun!</p>
            </div>
            <div className="feedback-right">
                <form className="feedback-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Ad Soyad</label>
                        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ad Soyad" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="number">Tel</label>
                        <input type="number" id="number" name="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Telefon nömrəniz" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Emailiniz" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="comments">Mesaj</label>
                        <textarea id="comments" name="comments" value={message} onChange={(e) => setMessage(e.target.value)} rows="4" placeholder="Suallarınızı bura daxil edin!" required></textarea>
                    </div>

                    <button type="submit">Gönder</button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
