import React from 'react'
// import "./SearchInfo.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-info">
                        <h3 className="footer-title">ข้อมูลติดต่อ</h3>
                        <div className="footer-contact">
                            <p className="footer-address">งานทรัพย์สินทางปัญญา สถาบันวิจัยและพัฒนา มหาวิทยาลัยราชภัฏกำแพงเพชร</p>
                            <p className="footer-address">เลขที่ 69 หมู่ 1 ต.นครชุม อ.เมือง จ.กำแพงเพชร 62000</p>
                            <div className="footer-contact-details">
                                <div className="footer-contact-item">
                                    <div className="footer-icon">📱</div>
                                    <p>โท   รศัพท์: 055 746 555 ต่อ 1761</p>
                                </div>
                                <div className="footer-contact-item">
                                    <div className="footer-icon">🌐</div>
                                    <p>เว็บไซต์: <a href="#" className="footer-link">www.kpru.ac.th</a></p>
                                </div>
                                <div className="footer-contact-item">
                                    <div className="footer-icon">✉️</div>
                                    <p>อีเมล: info@kpru.ac.th</p>
                                </div>
                            </div>
                        </div>
                        <div className="footer-social">
                            <a href="#" className="social-link">Facebook</a>
                            <a href="#" className="social-link">Twitter</a>
                            <a href="#" className="social-link">YouTube</a>
                        </div>
                    </div>
                    <div className="footer-map">
                        <iframe
                            src="https://maps.google.com/maps?q=16.455084404053846,99.51404600749457&hl=th&z=15&output=embed"
                            allowFullScreen=""
                            loading="lazy"
                            className="google-map"
                        ></iframe>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="copyright">© {new Date().getFullYear()} มหาวิทยาลัยราชภัฏกำแพงเพชร. สงวนลิขสิทธิ์.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer