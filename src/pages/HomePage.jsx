import useGameLogic from "../utils/useGameLogic.js";
import { formatNum } from "../utils/NumberConverter.js";
import PercentCircle from "../components/ProgressCircle.jsx";
import UiButton from "../components/ui/Button";
import NavBar from "../components/NavBar.jsx";
import BalanceIcon from "/svg/JustBalance.svg";
import ClickIcon from "/img/ClickIcon.png";
import MainBG from "/img/MainBg.png";


const HomePage = () => {
  const {
    maxEnergy,
    currentEnergy,
    percent,
    balance,
    clickPower,
    upCost,
    handleButtonClick,
    forUpClick,
  } = useGameLogic();

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
            extraText={"+" + clickPower + " Just"}
            className=" unboundedMedium gap-[15px]"
            onClick={handleButtonClick}
          />
          <UiButton
            size="md"
            type="empty"
            children="For up"
            extraText={upCost + "k"}
            className=" unboundedMedium gap-[15px]"
            onClick={forUpClick}
          />
        </div>

        {/* balance */}

        <div className="flex gap-[10px] justify-start ">
          <img src={BalanceIcon} />
          <span className="unboundedLarge text-white">
            {formatNum(balance)}
          </span>
        </div>
      </div>

      {/* click */}

      <div className="relative mb-5">
        <PercentCircle percent={percent} />
        <button
          className="click-button absolute transform top-5 left-5"
          onClick={handleButtonClick}
        >
          <img className="w-[280px] h-[280px]" src={ClickIcon} alt="click" />
        </button>
      </div>
      <div className="mb-[36px]">
        <span className="text-[#FBFBFB]">{currentEnergy}/</span>
        <span className="text-[#FBFBFB]/70">{maxEnergy}</span>
      </div>
      <NavBar />
    </div>
  );
};

export default HomePage;
