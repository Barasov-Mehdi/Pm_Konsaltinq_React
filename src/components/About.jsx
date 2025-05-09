import React from 'react';
import '../scss/About.scss';

function About() {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>Haqqımızda</h1>
            </div>
            <div className="about-content">
                <p>
                    Peşəkar Mühasib Konsaltinq MMC mühasibatlıq sahəsində təcrübəli və peşəkar əməkdaşların birlikdə ərsəyə gətirdiyi bir layihədir. Şirkətimiz yarandığı tarixdən bu günədək vergi və mühasibatlıq sahəsində çoxlu sayda uğurlara imza atmışdır.
                </p>
                <p>
                    Bizim təklif etdiyimiz xidmətlərdən biri sahibkarlıq sahəsində yeni fəaliyyətə başlamış fiziki və ya hüquqi şəxslərə biznes konsaltinq və uçot sahəsində keyfiyyətli dəstək verməkdir. Həmçinin, müştərilərimizin ehtiyaclarına uyğun olaraq özəl layihələr üzərində işləyirik.
                </p>
                <p>
                    Son olaraq qeyd etmək istərdik ki, fəaliyyətimiz ilə sizlərə dəstək olmaq bizim işimizin məqsədidir. Hədəfimiz müştərilərimizin mühasibatlıq proseslərini asanlaşdırmaq, hər bir müştəriyə fərdi yanaşma ilə xidmət göstərməkdir.
                </p>
            </div>
            <div className="about-footer">
                <p className="footer-text">Bizi seçdiyiniz üçün təşəkkür edirik!</p>
            </div>
        </div>
    );
}

export default About;