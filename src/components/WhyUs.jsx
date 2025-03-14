import React from 'react';
import '../scss/WhyUs.scss';
import thinking from '../assets/question-mark-115632058837semwdcwhy.jpg'
// background-image: url('../assets/question-mark-115632058837semwdcwhy.png'); // SVG dosya yolunu ayarlayın
function WhyUs() {
    return (
        <div className='whyus_container'>
            <div className='image_section'>
                <img className='icon' src={thinking} alt="" />
            </div>
            <div className='text_section'>
                <h2>Niyə PM Konsaltinq?</h2>
                <p>
                    Peşəkar Mühasib Konsaltinq MMC mühasibatlıq sahəsində təcrübəli
                    və peşəkar əməkdaşların birlikdə ərsəyə gətirdiyi bir layihədir.
                    Şirkətimiz yarandığı tarixdən bu günədək vergi və mühasibatlıq
                    sahəsində çoxlu sayda uğurlara imza atmışdır. Belə ki,
                    tərəfimizdən sahibkarlıq sahəsində yeni fəaliyyətə başlamış
                    fiziki və ya hüquqi şəxslərə biznes konsaltinq və uçot sahəsində
                    keyfiyyətli dəstək verilmişdir.
                </p>
                <p>
                    Son olaraq qeyd etmək istərdik ki, fəaliyyətimiz ilə sizlərə
                    dəstək olmaq bizim işimizin məqsədidir.
                </p>
            </div>

        </div>
    );
}

export default WhyUs;
