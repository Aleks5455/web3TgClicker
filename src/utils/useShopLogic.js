import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useShopLogic = () => {
    const navigate = useNavigate();
    const location = useLocation();
  
    const initialState = JSON.parse(localStorage.getItem("shopState")) || {
      turboTapCount: 3,
      remainingTime: 10800,
    };
  
    const [turboTapCount, setTurboTapCount] = useState(initialState.turboTapCount);
    const [remainingTime, setRemainingTime] = useState(initialState.remainingTime);
  
    const handleTurboTapClick = () => {
        if (turboTapCount > 0 && location.pathname !== "/") {
          setTurboTapCount(turboTapCount - 1);
          localStorage.setItem(
            "shopState",
            JSON.stringify({
              turboTapCount: turboTapCount - 1,
              remainingTime,
            })
          );
          navigate("/");
        }
      };

      const handleFullEnergyClick = () => {
        const newRemainingTime = 10800;
        setRemainingTime(newRemainingTime);
        localStorage.setItem(
          "shopState",
          JSON.stringify({
            turboTapCount,
            remainingTime: newRemainingTime,
          })
        );
        navigate("/");
      };
      
  
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

  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;
  const timerText = `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  useEffect(() => {
    localStorage.setItem(
      "shopState",
      JSON.stringify({
        turboTapCount,
        remainingTime,
      })
    );
  }, [turboTapCount, remainingTime]);

  return {
    turboTapCount,
    timerText,
    remainingTime,
    handleTurboTapClick,
    handleFullEnergyClick,
  };
};

export default useShopLogic;
