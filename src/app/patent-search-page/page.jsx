"use client";

import React from 'react'
import Slider from "@components/componentsHomePage/Slider";
import SearchInfo from "@components/SearchInfo";
import "./patentSearchPage.css";

export default function PatentSearchPage() {
  return (
    <div>
      <Slider />
      <section className="patent-search">
        <div className="patent-search-section">
            <p className='title'>สืบค้นข้อมูล</p>
            <SearchInfo />
        </div>
      </section>


      <footer style={{ marginBottom: '150px' }}></footer>
    </div>
  );
}
