'use client';

import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import styles from './Chart.module.css'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarCharts() {
  // ข้อมูลสำหรับกราฟแรก - ข้อมูลทรัพย์สินทางปัญญาแยกตามคณะ
  const intellectualPropertyData = {
    labels: ['คณะครุศาสตร์', 'คณะวิศวกรรม', 'คณะวิทยาการจัดการ', 'คณะพยาบาลศาสตร์'],
    datasets: [
      {
        label: 'ลิขสิทธิ์',
        data: [40, 30, 10, 20],
        backgroundColor: 'rgba(53, 162, 235, 0.7)',
        borderColor: 'rgba(53, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'สิทธิบัตร',
        data: [20, 30, 40, 20],
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'อนุสิทธิบัตร',
        data: [20, 10, 10, 10],
        backgroundColor: 'rgba(75, 192, 192, 0.7)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // ข้อมูลสำหรับกราฟที่สอง - ข้อมูลผลงานตามปีแยกตามคณะ
  const yearlyPerformanceData = {
    labels: ['คณะครุศาสตร์', 'คณะวิศวกรรม', 'คณะวิทยาการจัดการ', 'คณะพยาบาลศาสตร์'],
    datasets: [
      {
        label: 'ปี 2565',
        data: [20, 15, 23, 40],
        backgroundColor: 'rgba(153, 102, 255, 0.7)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'ปี 2566',
        data: [30, 25, 27, 40],
        backgroundColor: 'rgba(255, 159, 64, 0.7)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
      {
        label: 'ปี 2567',
        data: [40, 30, 40, 42],
        backgroundColor: 'rgba(255, 205, 86, 0.7)',
        borderColor: 'rgba(255, 205, 86, 1)',
        borderWidth: 1,
      },
    ],
  };

  // ตัวเลือกสำหรับกราฟแรก
  const intellectualPropertyOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'ข้อมูลทรัพย์สินทางปัญญาแยกตามคณะ',
        font: {
          size: 16,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'จำนวน',
        },
      },
    },
  };

  // ตัวเลือกสำหรับกราฟที่สอง
  const yearlyPerformanceOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'ผลงานตามปีการศึกษาแยกตามคณะ',
        font: {
          size: 16,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'จำนวน',
        },
      },
    },
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.chartWrapper} ${styles.leftChart}`}>
        <h2 className={styles.chartTitle}>ข้อมูลทรัพย์สินทางปัญญา</h2>
        <div className={styles.chartInner}>
          <Bar options={intellectualPropertyOptions} data={intellectualPropertyData} />
        </div>
      </div>
      <div className={`${styles.chartWrapper} ${styles.rightChart}`}>
        <h2 className={styles.chartTitle}>ผลงานตามปีการศึกษา</h2>
        <div className={styles.chartInner}>
          <Bar options={yearlyPerformanceOptions} data={yearlyPerformanceData} />
        </div>
      </div>
    </div>
  );
}