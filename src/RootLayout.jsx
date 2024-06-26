import React from 'react';
import { Outlet } from 'react-router-dom';
import EnergyRegeneration from './components/EnergyRegeneration';

const RootLayout = () => {
  return (
    <>
      <EnergyRegeneration />
      <Outlet />
    </>
  );
};

export default RootLayout;
