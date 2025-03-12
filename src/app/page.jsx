"use client";

import Image from "next/image";
import Link from "next/link";
import MainMenu from "@components/MainMenu";
export default function Home() {
  return (
    <div style={{backgroundColor: '#f4e1d1'}}>
      {/* <h1 style={{textAlign: 'center'}}>หน้าหลัก</h1> */}
      <MainMenu/>
    </div>
  );
}
