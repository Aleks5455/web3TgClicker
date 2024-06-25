import { useEffect } from 'react';
import useGameLogic from '../utils/useGameLogic';

const EnergyRegeneration = () => {
  const { setPercent, setCurrentEnergy } = useGameLogic();

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((percent) => Math.min(1000, percent + 1));
      setCurrentEnergy((curEn) => Math.min(1000, curEn + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [setPercent, setCurrentEnergy]);

  return null;
};

export default EnergyRegeneration;
