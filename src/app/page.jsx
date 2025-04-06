"use client";

import MainMenu from "@components/componentsHomePage/MainMenu";
import Chart from "@components/componentsHomePage/Chart";
import Slider from "@components/componentsHomePage/Slider";
import Activity from "@components/componentsHomePage/Activity";
import "./globals.css";
export default function Home() {
  return (
    <div>
      <Slider />
      <MainMenu />
      <Chart />
      <Activity />

      {/*Assessment - ปรับปรุงรูปแบบ*/}
      <section className="assessment">
        <div className="assessment-section">
          <div className="assessment-image">
            <img src="/images/SAP-Assessment.png" alt="SAP-Assessment" className="customImage"></img>
          </div>
          <div className="assessment-content">
            <h2 className="assessment-title">ร่วมประเมินแบบสอบถามความพึงพอใจของผู้ใช้บริการ</h2>
            <div className="assessment-button-container">
              <button className="assessment-button">
                แบบประเมิน
              </button>
              {/* <div className="click-icon-wrapper">
                <img src="/images/click.png" alt="click image" className="click-icon"></img>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/*TRIUP Act - ปรับปรุงรูปแบบ*/}
      <section className="triup-act">
        <div className="triup-act-section">
          <div className="triup-act-content">
            <div className="triup-act-title">
              <p>ระบบสารสนเทศรองรับพระราชบัญญัติส่งเสริมการใช้ประโยชน์ผลงานวิจัยและนวัตกรรม</p>
              <p>Information Systems Supporting the Research and Innovation Utilization Promotion Act</p>
            </div>
            <div className="triup-act-button-container">
              <button className="triup-act-button">
                แบบประเมิน
              </button>
              {/* <div className="click-icon-wrapper">
                <img src="/images/click.png" className="click-icon"></img>
              </div> */}
            </div>
          </div>
          <div className="triup-act-image">
            <img src="/images/TRIUP_Act1.png" alt="TRIUP_Act1"></img>
            <img src="/images/TRIUP_Act2.png" alt="TRIUP_Act2"></img>
          </div>
        </div>
      </section>

      {/* Footer - แทน Address section */}
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
                    <p>โทรศัพท์: 055 746 555 ต่อ 1761</p>
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
    </div>
  );
}