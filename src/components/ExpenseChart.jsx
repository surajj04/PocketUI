// BarChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    const data = {
        labels: [
            'January', 'February', 'March', 'April', 
            'May', 'June', 'July', 'August', 
            'September', 'October', 'November', 'December'
        ],
        datasets: [
            {
                label: 'Monthly Expenses (in ₹)',
                data: [30000, 32000, 28000, 35000, 36000, 34000], 
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Monthly Expenses Overview',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 5000, // Adjusted for clearer visibility
                    callback: function(value) {
                        return '₹ ' + value; // Appending '₹' to each tick value
                    },
                },
                min: 20000, // Minimum value for Y-axis
                max: 50000, // Maximum value for Y-axis
            },
        },
    };

    return (
        <div style={{ width: '100%', height: '400px' }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;
