"use client";

import Image from "next/image";
import Link from "next/link";
import MainMenu from "@components/componentsHomePage/MainMenu";
import Chart from "@components/componentsHomePage/Chart";
import Slider from "@components/componentsHomePage/Slider";
import Activity from "@components/componentsHomePage/Activity";
import "./globals.css";
export default function Home() {
  return (
    <div>
      {/* <h1 style={{textAlign: 'center'}}>หน้าหลัก</h1> */}
      <Slider />
      <MainMenu />
      <Chart />
      <Activity />

      {/*Assessment*/}
      <section className="assessment">
        <div className="assessment-section">
          <div className="assessment-image">
            <img src="/images/SAP-Assessment.png" alt="Assessment Image" className="customImage"></img>
          </div>
          <div className="assessment-content">
            <p className="assessment-title">ร่วมประเมินแบบสอบถามความพึงพอใจของผู้ใช้บริการ</p>
            <div className="assessment-button-container">
              <button className="assessment-button">
                แบบประเมิน
              </button>
              <div className="click-icon-wrapper">
                <img src="/images/click.png" className="click-icon"></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*TRIUP Act*/}
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
            <img src="/images/TRIUP_Act1.png" alt="Assessment Image"></img>
            <img src="/images/TRIUP_Act2.png" alt="Assessment Image"></img>
          </div>
        </div>
      </section>

      {/*Address*/}
      <section className="address">
        <div className="address-section">
          <div className="address-title">
            <p>ข้อมูลติดต่อ</p>
            <p>งานทรัพย์สินทางปัญญา สถาบันวิจัยและพัฒนา มหาวิทยาลัยราชภัฏกำแพงเพชร เลขที่ 69 หมู่ 1 ต.นครชุม อ.เมือง จ.กำแพงเพชร 62000</p>
            <p>website : </p>
            <p>โทรศัพท์ 055 746 555 ต่อ 1761</p>
          </div>
          <div className="address-image">
          <iframe
            src="https://maps.google.com/maps?q=16.455084404053846,99.51404600749457&hl=th&z=15&output=embed"
            allowFullScreen=""
            loading="lazy"
            className="address-map"
          ></iframe>
          </div>
        </div>
      </section>
      <footer style={{ marginBottom: '150px' }}></footer>
    </div>
  );
}
