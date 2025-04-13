"use client";

import React, { useState, useEffect } from 'react';
import Slider from "@components/componentsHomePage/Slider";
import SearchInfo from "@components/SearchInfo/SearchInfo";
import "./patentSearchPage.css";

export default function PatentSearchPage() {
  // Example data - in a real app, you might fetch this from an API
  const [patentData, setPatentData] = useState([
    { id: 1, title: "สิทธิบัตรการประดิษฐ์ 1", createTime: "02 ธันวาคม 67", description: "รายละเอียดเกี่ยวกับสิทธิบัตรการประดิษฐ์นี้และข้อมูลสำคัญ", images: "/images/info.jpg" },
    { id: 2, title: "สิทธิบัตรการประดิษฐ์ 2", createTime: "05 มกราคม 67", description: "รายละเอียดเกี่ยวกับสิทธิบัตรการประดิษฐ์นี้และข้อมูลสำคัญ", images: "/images/info.jpg" },
    { id: 3, title: "สิทธิบัตรการออกแบบ 1", createTime: "10 กุมภาพันธ์ 67", description: "รายละเอียดเกี่ยวกับสิทธิบัตรการออกแบบนี้และข้อมูลสำคัญ", images: "/images/info.jpg" },
    { id: 1, title: "สิทธิบัตรการประดิษฐ์ 1", createTime: "02 ธันวาคม 67", description: "รายละเอียดเกี่ยวกับสิทธิบัตรการประดิษฐ์นี้และข้อมูลสำคัญ", images: "/images/info.jpg" },
    { id: 2, title: "สิทธิบัตรการประดิษฐ์ 2", createTime: "05 มกราคม 67", description: "รายละเอียดเกี่ยวกับสิทธิบัตรการประดิษฐ์นี้และข้อมูลสำคัญ", images: "/images/info.jpg" },
    { id: 3, title: "สิทธิบัตรการออกแบบ 1", createTime: "10 กุมภาพันธ์ 67", description: "รายละเอียดเกี่ยวกับสิทธิบัตรการออกแบบนี้และข้อมูลสำคัญ", images: "/images/info.jpg" },
    { id: 1, title: "สิทธิบัตรการประดิษฐ์ 1", createTime: "02 ธันวาคม 67", description: "รายละเอียดเกี่ยวกับสิทธิบัตรการประดิษฐ์นี้และข้อมูลสำคัญ", images: "/images/info.jpg" },
    { id: 2, title: "สิทธิบัตรการประดิษฐ์ 2", createTime: "05 มกราคม 67", description: "รายละเอียดเกี่ยวกับสิทธิบัตรการประดิษฐ์นี้และข้อมูลสำคัญ", images: "/images/info.jpg" },
    { id: 3, title: "สิทธิบัตรการออกแบบ 1", createTime: "10 กุมภาพันธ์ 67", description: "รายละเอียดเกี่ยวกับสิทธิบัตรการออกแบบนี้และข้อมูลสำคัญ", images: "/images/info.jpg" },
    // Add more patent items as needed
  ]);

  // Optional: Function to handle when a card is clicked
  const handlePatentClick = (patent) => {
    console.log("Patent clicked:", patent);
    // You could redirect to a detail page, for example:
    // router.push(`/patents/${patent.id}`);
  };

  return (
    <div>
      <Slider />
      <section className="patent-search">
        <div className="patent-search-section">
            <SearchInfo 
              cardItems={patentData}
              title="สืบค้นข้อมูลสิทธิบัตร"
              cardsPerPageDefault={3}
              readMoreText="อ่านรายละเอียด"
              onCardClick={handlePatentClick}
            />
        </div>
      </section>
    </div>
  );
}