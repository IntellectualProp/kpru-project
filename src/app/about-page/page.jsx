"use client";

import React from 'react'
import Slider from "@components/componentsHomePage/Slider";
import "./aboutPage.css";

export default function AboutPage() {
  return (
    <div>
      <Slider />
      <section className="map-about">
        <div className="map-about-section">
            <p>โครงสร้างผังองค์กร</p>
            <img src="/images/group.jpg" alt="group"></img>
        </div>
        <div className="map-about-section">
            <p>แผนที่สำนักงาน</p>
            <img src="/images/map_about.jpg" alt="map_about"></img>
        </div>
      </section>
      <footer style={{ marginBottom: '150px' }}></footer>
    </div>
  );
}
