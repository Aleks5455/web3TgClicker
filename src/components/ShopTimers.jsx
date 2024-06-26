import React, { useState, useEffect } from "react";

const Timers = () => {
  const initialState = JSON.parse(localStorage.getItem("shopState")) || {
    turboTapCount: 3,
    remainingTime: 10800,
  };

  const [turboTapCount, setTurboTapCount] = useState(initialState.turboTapCount);
  const [remainingTime, setRemainingTime] = useState(initialState.remainingTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTurboTapCount((turboTapCount) => Math.min(3, turboTapCount + 1));
    }, 10800 * 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((remainingTime) => Math.max(0, remainingTime - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "shopState",
      JSON.stringify({
        turboTapCount,
        remainingTime,
      })
    );
  }, [turboTapCount, remainingTime]);

};

export default Timers;
