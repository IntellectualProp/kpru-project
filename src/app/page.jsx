"use client";

import Image from "next/image";
import Link from "next/link";
import MainMenu from "@components/MainMenu";
import Chart from "@components/Chart";
import Slider from "@components/Slider";
export default function Home() {
  return (
    <div>
      {/* <h1 style={{textAlign: 'center'}}>หน้าหลัก</h1> */}
      <Slider/> 
      <MainMenu/>
      <Chart/>
    </div>
  );
}
