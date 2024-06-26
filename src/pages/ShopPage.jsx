import useGameLogic from "../utils/useGameLogic";
import { formatNum } from "../utils/NumberConverter";
import UiButton from "../components/ui/Button";
import NavBar from "../components/NavBar";
import MainBG from "/img/MainBg.png";
import Lightning from "/svg/Lightning.svg";
import Clock from "/svg/ClockIcon.svg";
import FireIcon from "/svg/FireIcon.svg";
import ArrowIcon from "/svg/ArrowIcon.svg";
import FuelIcon from "/svg/FuelIcon.svg";
import SpeedIcon from "/svg/SpeedIcon.svg";
import clsx from "clsx";
import useShopLogic from "../utils/useShopLogic";
import EnergyRegeneration from "../components/EnergyRegeneration";

const ShopPage = () => {
  
  const {
    clickPower,
    capacityLevel,
    rechargeLevel,
    capacityUpCost,
    rechargeUpCost,
    upCost,
    balance,
    forUpClick,
    rechargeClick,
    capacityClick,
  } = useGameLogic();

  const {
    turboTapCount,
    timerText,
    remainingTime,
    handleFullEnergyClick,
    handleTurboTapClick,
  } = useShopLogic();

  return (
    <div className="basePage relative px-5 items-center">
      <EnergyRegeneration/>
      <img
        className="h-full w-full object-center object-cover absolute -z-10"
        src={MainBG}
        alt="MainBackground"
      />

      <h1 className="mt-[175px] mb-[68px] unboundedLarge">Улучшения</h1>
      <div className="flex flex-wrap gap-[10px] mb-5">
        <span className="mb-[10px] unboundedMedium">Ежедневные бустеры</span>
        <UiButton
          type={turboTapCount === 0 ? "empty" : "filled"}
          size="md"
          className="h-[100px]"
          onClick={handleTurboTapClick}
          children={
            <>
              <div className="flex flex-col items-start relative">
                <span className="unboundedMedium ml-[5px] mt-[6px] mb-[10px]">
                  Турбо тап
                </span>
                <span className="unboundedSmall ml-[5px] mt-[6px]">
                  {turboTapCount}/3
                </span>
                <img
                  src={Lightning}
                  alt="lightning"
                  width={36}
                  height={45}
                  className="mb-15 mr-5 mt-[30px] ml-[105px] absolute"
                />
              </div>
            </>
          }
        />
        <UiButton
          type={remainingTime === 0 ? "filled" : "empty"}
          size="md"
          className="h-[100px]"
          onClick={handleFullEnergyClick}
          children={
            <>
              <div className="flex flex-col items-start relative">
                <span className="unboundedMedium w-[88px] mb-[10px]">
                  Полная энергия
                </span>
                {remainingTime > 0 ? (
                  <>
                    <span className="unboundedSmall ml-[5px] mt-[6px]">
                      Осталось:
                    </span>
                    <span className="unboundedSmall ml-[5px] mt-[6px]">
                      {timerText}
                    </span>
                  </>
                ) : (
                  <span className="unboundedSmall ml-[5px] mt-[6px]">
                    Готово
                  </span>
                )}
                <img
                  src={Clock}
                  alt="lightning"
                  width={36}
                  height={45}
                  className="mb-15 mr-5 mt-[30px] ml-[105px] absolute"
                />
              </div>
            </>
          }
        />
      </div>
      <div className="flex flex-wrap mb-[34px]">
        <span className="mb-[25px]">Бустеры</span>
        <div className="emptyBackground text-white border rounded-xl w-[350px] h-[265px] flex items-center flex-col">
          <button
            className="w-[310px] h-[65px] rounded-lg mb-[10px] mx-5 mt-5"
            onClick={forUpClick}
          >
            <div className=" flex justify-between">
              <div className="flex items-center gap-[15px]">
                <div
                  className={clsx(
                    "w-[65px] h-[65px] emptyBackground rounded-xl border flex justify-center items-center",
                    balance >= upCost * 1000
                      ? "mainBackground"
                      : "emptyBackground"
                  )}
                >
                  <img src={FireIcon} alt="fire" width={28} height={36} />
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex">
                    <span className="unboundedMedium mb-2">Мультитап</span>
                    <span className="unboundedSmall ml-[15px] mt-[2.5px]">
                      {clickPower} lvl
                    </span>
                  </div>
                  <span className="unboundedSmall text-just-blue justify-start">
                    {formatNum(upCost * 1000)} Just
                  </span>
                </div>
              </div>
              <img src={ArrowIcon} alt="arrow" />
            </div>
          </button>

          <button
            className="w-[310px] h-[65px] rounded-lg mb-[10px] mx-5"
            onClick={capacityClick}
          >
            <div className=" flex justify-between">
              <div className="flex items-center gap-[15px]">
                <div
                  className={clsx(
                    "w-[65px] h-[65px] emptyBackground rounded-xl border flex justify-center items-center",
                    balance >= capacityUpCost
                      ? "mainBackground"
                      : "emptyBackground"
                  )}
                >
                  <img src={FuelIcon} alt="fire" width={33} height={35} />
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex">
                    <span className="unboundedMedium mb-2">Емкость</span>
                    <span className="unboundedSmall ml-[15px] mt-[2.5px]">
                      {capacityLevel} lvl
                    </span>
                  </div>
                  <span className="unboundedSmall text-just-blue justify-start">
                    {formatNum(capacityUpCost)} Just
                  </span>
                </div>
              </div>
              <img src={ArrowIcon} alt="arrow" />
            </div>
          </button>

          <button
            className="w-[310px] h-[65px] rounded-lg mx-5"
            onClick={rechargeClick}
          >
            <div className=" flex justify-between">
              <div className="flex items-center gap-[15px]">
                <div
                  className={clsx(
                    "w-[65px] h-[65px] emptyBackground rounded-xl border flex justify-center items-center",
                    balance >= rechargeUpCost
                      ? "mainBackground"
                      : "emptyBackground"
                  )}
                >
                  <img src={SpeedIcon} alt="fire" width={37} height={37} />
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex">
                    <span className="unboundedMedium mb-2">Перезарядка</span>
                    <span className="unboundedSmall ml-[15px] mt-[2.5px]">
                      {rechargeLevel} lvl
                    </span>
                  </div>
                  <span className="unboundedSmall text-just-blue justify-start">
                    {formatNum(rechargeUpCost)} Just
                  </span>
                </div>
              </div>
              <img src={ArrowIcon} alt="arrow" />
            </div>
          </button>
        </div>
      </div>

      <NavBar />
    </div>
  );
};

export default ShopPage;
