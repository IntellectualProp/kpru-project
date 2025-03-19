"use client";

import Image from "next/image";
import Link from "next/link";
import MainMenu from "@components/componentsHomePage/MainMenu";
import Chart from "@components/componentsHomePage/Chart";
import Slider from "@components/componentsHomePage/Slider";
import Activity from "@components/componentsHomePage/Activity";
export default function Home() {
  return (
    <div>
      {/* <h1 style={{textAlign: 'center'}}>หน้าหลัก</h1> */}
      <Slider/> 
      <MainMenu/>
      <Chart/>
      <Activity/>
      <footer style={{marginBottom: '150px'}}></footer>
    </div>
  );
}
