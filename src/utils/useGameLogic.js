import { useState, useEffect } from 'react';

const useGameLogic = () => {
  const initialState = JSON.parse(localStorage.getItem('gameState')) || {
  currentEnergy: 1000,
  percent: 1000,
  balance: 5000000,
  clickPower: 6,
  upCost: 100,
  capacityLevel: 1,
  rechargeLevel: 1,
  capacityUpCost: 300000,
  rechargeUpCost: 300000,
};

const [currentEnergy, setCurrentEnergy] = useState(initialState.currentEnergy);
const [percent, setPercent] = useState(initialState.percent);
const [balance, setBalance] = useState(initialState.balance);
const [clickPower, setClickPower] = useState(initialState.clickPower);
const [upCost, setUpCost] = useState(initialState.upCost);
const [capacityUpCost, setCapacityUpCost] = useState(initialState.capacityUpCost)
const [rechargeUpCost, setRechargeUoCost] = useState(initialState.rechargeUpCost)
const [capacityLevel, setCapacityLevel] = useState(initialState.capacityLevel);
const [rechargeLevel, setRechargeLevel] = useState(initialState.rechargeLevel);
const maxEnergy = 1000 * capacityLevel;

  const handleButtonClick = () => {
      setPercent((percent) => Math.max(0, percent - clickPower));
      setCurrentEnergy((curEn) => Math.max(0, curEn - clickPower));
      if (currentEnergy > 0) {
        if (currentEnergy <= clickPower) {
          setBalance((balance) => balance + (currentEnergy - clickPower));
        }
        setBalance((balance) => balance + clickPower);
    }
  };

  const forUpClick = () => {
    if ( balance >= upCost * 1000){
      setUpCost((upCost) => upCost + 25);
      setBalance((balance) => balance - upCost * 1000);
      setClickPower((clickPower) => clickPower + 1);
    }
  }

  const capacityClick = () => {
    if (balance >= capacityUpCost) {
      setCapacityLevel((capLvl) => capLvl + 1);
      setBalance((balance) => balance - capacityUpCost);
      setCapacityUpCost((cupUp) => cupUp += 25000);
    }
  };

  const rechargeClick = () => {
    if (balance >= rechargeUpCost) {
      setRechargeLevel((reLvl) => reLvl + 1);
      setBalance((balance) => balance - rechargeUpCost);
      setRechargeUoCost((reUp) => reUp += 25000);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((percent) => Math.min(1000 * capacityLevel, percent + 1));
      setCurrentEnergy((curEn) => Math.min(1000 * capacityLevel, curEn + 1));
    }, 6000 / rechargeLevel);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem('gameState', JSON.stringify({
      currentEnergy,
      percent,
      balance,
      clickPower,
      upCost,
      capacityLevel,
      rechargeLevel,
      capacityUpCost,
      rechargeUpCost,
    }));
  }, [currentEnergy, percent, balance, clickPower, upCost, capacityLevel, rechargeLevel, capacityUpCost, rechargeUpCost]);
  

  return {
    maxEnergy,
    currentEnergy,
    percent,
    balance,
    clickPower,
    upCost,
    capacityLevel,
    rechargeLevel,
    capacityUpCost,
    rechargeUpCost,
    setPercent,
    setCurrentEnergy,
    handleButtonClick,
    forUpClick,
    capacityClick,
    rechargeClick,
  };
};

export default useGameLogic;
