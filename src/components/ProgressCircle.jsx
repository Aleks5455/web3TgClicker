import useGameLogic from "../utils/useGameLogic";

const PercentCircle = ({ percent }) => {
  const {
    capacityLevel
  }= useGameLogic();
  const maxValue = 1000 * capacityLevel;
  const scaledPercent = (percent / maxValue) * 100;
  const strokeDashoffset = 969 - (969 * scaledPercent) / 100;

  return (
    <div className="percent">
      <svg>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="3.23%" style={{ stopColor: "#0565F7", stopOpacity: 1 }} />
            <stop offset="96.77%" style={{ stopColor: "#87B7FF", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <circle cx="155" cy="155" r="155" className="background" />
        <circle cx="155" cy="155" r="155" className="progress" style={{ strokeDashoffset }} />
      </svg>
    </div>
  );
};

export default PercentCircle;
