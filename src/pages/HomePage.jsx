import MainBG from "/img/MainBg.png";
import BalanceIcon from "/public/svg/JustBalance.svg";
import ClickIcon from "/public/img/ClickIcon.png";
import UiButton from "../components/ui/Button";
import { formatNum } from "../utils/NumberConverter.js";
import PercentCircle from "../components/ProgressCircle.jsx";
import { useEffect, useState } from "react";

const HomePage = () => {

  // CLICK LOGIC

  const [percent, setPercent] = useState(1000);

  const handleButtonClick = () => {
    setPercent((percent) => Math.max(0, percent - 9));
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((percent) => Math.min(1000, percent + 1));
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  //

  return (
    <div className="basePage relative px-5 items-center">
      <img
        className="h-full w-full object-center object-cover absolute -z-10"
        src={MainBG}
        alt="MainBackground"
      />

      <div className="flex flex-col gap-[30px] mb-[81px]">
        {/* buttons */}

        <div className="flex flex-wrap justify-center gap-[10px]">
          <UiButton
            size="lg"
            type="filled"
            children="Поиск сообщества"
            className="mt-[130px] unboundedSmall"
          />
          <UiButton
            size="md"
            type="empty"
            children="Tap"
            extraText="+6 Just"
            className=" unboundedMedium gap-[15px]"
          />
          <UiButton
            size="md"
            type="empty"
            children="For up"
            extraText="100k"
            className=" unboundedMedium gap-[15px]"
          />
        </div>

        {/* balance */}

        <div className="flex gap-[10px] justify-start ">
          <img src={BalanceIcon} />
          <span className="unboundedLarge text-white">
            {formatNum(6534012)}
          </span>
        </div>
      </div>

      {/* click */}

      <div className="relative mb-5">
        <PercentCircle percent={percent} />
        <button className="click-button absolute transform top-5 left-5" onClick={handleButtonClick}>
          <img className="w-[280px] h-[280px]" src={ClickIcon} alt="click" />
        </button>
      </div>
      <span>3452</span>
    </div>
  );
};

export default HomePage;
