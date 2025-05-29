import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register chart.js components
ChartJS.register(LineElement, PointElement, Tooltip, Legend, CategoryScale, LinearScale);

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Income',
      data: [28, 70, 68, 77, 35, 24, 18, 73, 29, 43, 19, 24],
      borderColor: '#00ffff', // Bootstrap Primary
      backgroundColor: '#00ffff',
      borderWidth: 3,
      tension: 0.4,
      fill: true,
    },
    {
      label: 'Expense',
      data: [18, 23, 79, 37, 19, 45, 55, 72, 79, 57, 32, 59],
      borderColor: '#39ff14', //neon green
      backgroundColor: '#39ff14',
      borderWidth: 3,
      tension: 0.4,
      fill: true,
    },
  ],
};
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      callbacks: {
        label: (tooltipItem) =>
          new Intl.NumberFormat('en-PH', {
            style: 'currency',
            currency: 'PHP',
          }).format(tooltipItem.parsed.y),
      },
    },
    legend: {
      position: 'top',
    },
  },
  scales: {
    y: {
      ticks: {
        callback: (value) =>
          new Intl.NumberFormat('en-PH', {
            style: 'currency',
            currency: 'PHP',
          }).format(value),
      },
      beginAtZero: true,
    },
  },
};


const SalesReport = () => {
  return (
    <div className="col d-flex">
      <div className="card border-0 flex-fill w-100">
        <div className="card-header border-0 card-header-space-between">
          <h2 className="card-header-title h4 text-uppercase">Sales Report</h2>
        </div>
        <div className="card-body d-flex flex-column">
          <div className="chart-container flex-grow-1" style={{ height: '275px' }}>
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesReport;
