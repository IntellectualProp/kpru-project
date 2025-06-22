"use client";

import { useState, useEffect } from "react";
import MainMenu from "@components/componentsHomePage/MainMenu";
import Chart from "@components/componentsHomePage/Chart";
import Slider from "@components/componentsHomePage/Slider";
import Activity from "@components/componentsHomePage/Activity";
import "./globals.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="dot-loader">
          <div className="dot dot1"></div>
          <div className="dot dot2"></div>
          <div className="dot dot3"></div>
          <div className="dot dot4"></div>
          <div className="dot dot5"></div>
        </div>
        <span>กำลังโหลด...</span>
      </div>
    </div>
  );
};

const ContentLoader = ({ height = "200px" }) => {
  return (
    <div className="content-loader" style={{ height }}>
      <div className="content-loader-shimmer"></div>
    </div>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [componentsLoaded, setComponentsLoaded] = useState({
    slider: false,
    mainMenu: false,
    chart: false,
    activity: false,
  });

  useEffect(() => {
    const loadingTimers = [
      { component: "slider", time: 100 },
      { component: "mainMenu", time: 100 },
      { component: "chart", time: 100 },
      { component: "activity", time: 100 },
    ];

    const timers = [];
    loadingTimers.forEach(({ component, time }) => {
      const timer = setTimeout(() => {
        setComponentsLoaded((prev) => ({
          ...prev,
          [component]: true,
        }));
      }, time);
      timers.push(timer);
    });

    const mainTimer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      clearTimeout(mainTimer);
    };
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <div className={isLoading ? "page-loading" : ""}>
      {isLoading && <Loader />}

      <div className={`content-wrapper ${isLoading ? "hidden" : "fade-in"}`}>
        {componentsLoaded.slider ? (
          <Slider />
        ) : (
          <ContentLoader height="400px" />
        )}
        {componentsLoaded.mainMenu ? (
          <MainMenu />
        ) : (
          <ContentLoader height="100px" />
        )}
        {componentsLoaded.chart ? <Chart /> : <ContentLoader height="300px" />}
        {componentsLoaded.activity ? (
          <Activity />
        ) : (
          <ContentLoader height="250px" />
        )}

        {/* Assessment */}
        <section className="assessment">
          <div className="assessment-section">
            <div className="assessment-image">
              <img src="/images/SAP-Assessment.png" alt="SAP-Assessment" />
            </div>
            <div className="assessment-content">
              <h2 className="assessment-title">
                ร่วมประเมินแบบสอบถามความพึงพอใจของผู้ใช้บริการ
              </h2>
              <div className="assessment-button-container">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSerAxExmrWMh3U3OihY-c1qVx4b-Q20b2teMEBlwhALzbQQRQ/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="assessment-button"
                >
                  แบบประเมิน
                </a>
              </div>
            </div>
          </div>
        </section>

        {/*TRIUP Act - ปรับปรุงรูปแบบ*/}
        <section className="triup-act">
          <div className="triup-act-section">
            <div className="triup-act-content">
              <div className="triup-act-title">
                <p>
                  ระบบสารสนเทศรองรับพระราชบัญญัติส่งเสริมการใช้ประโยชน์ผลงานวิจัยและนวัตกรรม
                </p>
                <p>
                  Information Systems Supporting the Research and Innovation
                  Utilization Promotion Act
                </p>
              </div>
              <div className="triup-act-button-container">
                <button className="triup-act-button">แบบประเมิน</button>
              </div>
            </div>
            <div className="triup-act-image">
              <img src="/images/TRIUP_Act1.png" alt="TRIUP_Act1" />
              <img src="/images/TRIUP_Act2.png" alt="TRIUP_Act2" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
