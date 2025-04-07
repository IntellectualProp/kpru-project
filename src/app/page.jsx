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
    </div>
  );
}