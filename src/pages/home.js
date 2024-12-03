import React from 'react';
import { ThemeProvider } from '@emotion/react';
import DonutChart from '../components/DonutChart';
import RewardsCard from '../components/RewardsCard'; // Adjust the import path as necessary
import theme from '../theme';

const Home = () => {
  const saved = 250;
  const target = 250;
  const month = 'December';
  const multiplier = 1.2;
  const pointsEarned = saved*10;
  const totalPoints = pointsEarned*multiplier;

  return (
    <ThemeProvider theme={theme}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        minHeight: '100vh', 
        padding: '20px',
        justifyContent: 'flex-start',
      }}>
        <DonutChart percentage={(saved / target) * 100} saved={saved} target={target} month={month} />
        <RewardsCard 
          multiplier={multiplier}
          pointsEarned={pointsEarned}
          totalPoints={totalPoints}
        />
      </div>
    </ThemeProvider>
  );
};

export default Home;

//hello