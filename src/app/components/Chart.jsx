// components/BarCharts.jsx
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
  // Data for the first bar chart
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderColor: 'rgba(53, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Data for the second bar chart
  const expensesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Expenses',
        data: [8, 12, 6, 9, 4, 7],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Options for both charts
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Performance',
      },
    },
  };

  return (
    <div className="charts-container">
      <div className="chart-wrapper left-chart">
        <h2 className="chart-title">Sales Overview</h2>
        <div className="chart-inner">
          <Bar options={options} data={salesData} />
        </div>
      </div>
      <div className="chart-wrapper right-chart">
        <h2 className="chart-title">Expenses Overview</h2>
        <div className="chart-inner">
          <Bar options={options} data={expensesData} />
        </div>
      </div>
      
      <style jsx>{`
        .charts-container {
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 20px;
        }
        
        .chart-wrapper {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 16px;
          width: 100%;
        }
        
        .chart-title {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        
        .chart-inner {
          height: 300px;
          position: relative;
        }
        
        /* Media query for responsive layout */
        @media (min-width: 768px) {
          .charts-container {
            flex-direction: row;
            align-items: flex-start;
          }
          
          .left-chart {
            width: 50%;
            order: 1; /* Ensures left chart is on the left */
          }
          
          .right-chart {
            width: 50%;
            order: 2; /* Ensures right chart is on the right */
          }
        }
        
        /* Additional responsiveness for smaller screens */
        @media (max-width: 480px) {
          .chart-inner {
            height: 250px;
          }
        }
      `}</style>
    </div>
  );
}