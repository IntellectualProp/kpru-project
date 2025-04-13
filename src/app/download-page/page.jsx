"use client";

import React, { useState, useEffect } from 'react';
import Slider from "@components/componentsHomePage/Slider";
import SearchInfo from "@components/SearchInfo/SearchInfo";
import "./DownloadPage.css";

export default function DownloadPage() {
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
  ]);
  const [patentData1, setPatentData1] = useState([
    { id: 1, title: "สิทธิบัตรการประดิษฐ์ 1111", createTime: "02 ธันวาคม 67", description: "รายละเอียดเกี่ยวกับสิทธิบัตรการประดิษฐ์นี้และข้อมูลสำคัญ", images: "/images/info.jpg" },
    { id: 2, title: "สิทธิบัตรการประดิษฐ์ 2222", createTime: "05 มกราคม 67", description: "รายละเอียดเกี่ยวกับสิทธิบัตรการประดิษฐ์นี้และข้อมูลสำคัญ", images: "/images/info.jpg" },
    { id: 3, title: "สิทธิบัตรการออกแบบ 1111", createTime: "10 กุมภาพันธ์ 67", description: "รายละเอียดเกี่ยวกับสิทธิบัตรการออกแบบนี้และข้อมูลสำคัญ", images: "/images/info.jpg" },
    { id: 1, title: "สิทธิบัตรการประดิษฐ์ 1", createTime: "02 ธันวาคม 67", description: "รายละเอียดเกี่ยวกับสิทธิบัตรการประดิษฐ์นี้และข้อมูลสำคัญ", images: "/images/info.jpg" },
    { id: 2, title: "สิทธิบัตรการประดิษฐ์ 2", createTime: "05 มกราคม 67", description: "รายละเอียดเกี่ยวกับสิทธิบัตรการประดิษฐ์นี้และข้อมูลสำคัญ", images: "/images/info.jpg" },
    { id: 3, title: "สิทธิบัตรการออกแบบ 1", createTime: "10 กุมภาพันธ์ 67", description: "รายละเอียดเกี่ยวกับสิทธิบัตรการออกแบบนี้และข้อมูลสำคัญ", images: "/images/info.jpg" },
    { id: 1, title: "สิทธิบัตรการประดิษฐ์ 1", createTime: "02 ธันวาคม 67", description: "รายละเอียดเกี่ยวกับสิทธิบัตรการประดิษฐ์นี้และข้อมูลสำคัญ", images: "/images/info.jpg" },
    { id: 2, title: "สิทธิบัตรการประดิษฐ์ 2", createTime: "05 มกราคม 67", description: "รายละเอียดเกี่ยวกับสิทธิบัตรการประดิษฐ์นี้และข้อมูลสำคัญ", images: "/images/info.jpg" },
    { id: 3, title: "สิทธิบัตรการออกแบบ 1", createTime: "10 กุมภาพันธ์ 67", description: "รายละเอียดเกี่ยวกับสิทธิบัตรการออกแบบนี้และข้อมูลสำคัญ", images: "/images/info.jpg" },
  ]);
  const [patentData2, setPatentData2] = useState([
    { id: 1, title: "สิทธิบัตรการประดิษฐ์ 1", createTime: "02 ธันวาคม 67", description: "รายละเอียดเกี่ยวกับสิทธิบัตรการประดิษฐ์นี้และข้อมูลสำคัญ", images: "/images/info.jpg" },
    { id: 2, title: "สิทธิบัตรการประดิษฐ์ 2", createTime: "05 มกราคม 67", description: "รายละเอียดเกี่ยวกับสิทธิบัตรการประดิษฐ์นี้และข้อมูลสำคัญ", images: "/images/info.jpg" },
    { id: 3, title: "สิทธิบัตรการออกแบบ 1", createTime: "10 กุมภาพันธ์ 67", description: "รายละเอียดเกี่ยวกับสิทธิบัตรการออกแบบนี้และข้อมูลสำคัญ", images: "/images/info.jpg" },
    { id: 1, title: "สิทธิบัตรการประดิษฐ์ 1", createTime: "02 ธันวาคม 67", description: "รายละเอียดเกี่ยวกับสิทธิบัตรการประดิษฐ์นี้และข้อมูลสำคัญ", images: "/images/info.jpg" },
    { id: 2, title: "สิทธิบัตรการประดิษฐ์ 2", createTime: "05 มกราคม 67", description: "รายละเอียดเกี่ยวกับสิทธิบัตรการประดิษฐ์นี้และข้อมูลสำคัญ", images: "/images/info.jpg" },
    { id: 3, title: "สิทธิบัตรการออกแบบ 1", createTime: "10 กุมภาพันธ์ 67", description: "รายละเอียดเกี่ยวกับสิทธิบัตรการออกแบบนี้และข้อมูลสำคัญ", images: "/images/info.jpg" },
    { id: 1, title: "สิทธิบัตรการประดิษฐ์ 1", createTime: "02 ธันวาคม 67", description: "รายละเอียดเกี่ยวกับสิทธิบัตรการประดิษฐ์นี้และข้อมูลสำคัญ", images: "/images/info.jpg" },
    { id: 2, title: "สิทธิบัตรการประดิษฐ์ 2", createTime: "05 มกราคม 67", description: "รายละเอียดเกี่ยวกับสิทธิบัตรการประดิษฐ์นี้และข้อมูลสำคัญ", images: "/images/info.jpg" },
    { id: 3, title: "สิทธิบัตรการออกแบบ 1", createTime: "10 กุมภาพันธ์ 67", description: "รายละเอียดเกี่ยวกับสิทธิบัตรการออกแบบนี้และข้อมูลสำคัญ", images: "/images/info.jpg" },
  ]);

  // Optional: Function to handle when a card is clicked
  const handlePatentClick = (patent) => {
    console.log("Patent clicked:", patent);
    // You could redirect to a detail page, for example:
    // router.push(`/patents/${patent.id}`);
  };
  const handlePatentClick1 = (patent) => {
    console.log("Patent clicked:", patent);
    // You could redirect to a detail page, for example:
    // router.push(`/patents/${patent.id}`);
  };
  const handlePatentClick2 = (patent) => {
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
              title="เอกสารที่เกี่ยวข้อง"
              cardsPerPageDefault={3}
              readMoreText="อ่านรายละเอียด"
              onCardClick={handlePatentClick}
            />
            <SearchInfo 
              cardItems={patentData1}
              title="แบบฟอร์มต่างๆ"
              cardsPerPageDefault={3}
              readMoreText="อ่านรายละเอียด"
              onCardClick={handlePatentClick1}
            />
            <SearchInfo 
              cardItems={patentData2}
              title="ตัวอย่างแบบฟอร์ม"
              cardsPerPageDefault={3}
              readMoreText="อ่านรายละเอียด"
              onCardClick={handlePatentClick2}
            />
        </div>
      </section>
    </div>
  );
}