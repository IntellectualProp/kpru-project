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
            <h3 className="assessment-title">ร่วมประเมินแบบสอบถามความพึงพอใจของผู้ใช้บริการ</h3>
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
      <footer style={{ marginBottom: '150px' }}></footer>
    </div>
  );
}
