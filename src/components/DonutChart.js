import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useTheme } from '@emotion/react';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ percentage, text }) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [theme.palette.primary.main, theme.palette.grey[300]],
        hoverBackgroundColor: [theme.palette.primary.dark, theme.palette.grey[300]],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '80%', // Controls the thickness of the donut
    plugins: {
      tooltip: { enabled: false },
    },
  };

  return (
    <div style={{ position: 'relative', width: '150px', height: '150px' }}>
      <Doughnut data={data} options={options} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '20px',
        fontWeight: 'bold',
        color: theme.palette.text.primary,
      }}>
        {text}
      </div>
    </div>
  );
};

export default DonutChart;