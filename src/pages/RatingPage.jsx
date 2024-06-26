import { useState } from "react";
import { playerRatingArray } from "../utils/PlayerRating";
import { formatNum } from "../utils/NumberConverter.js";
import { clanRatingArray } from "../utils/ClanRating";
import EnergyRegeneration from "../components/EnergyRegeneration";
import UiButton from "../components/ui/Button";
import NavBar from "../components/NavBar";
import MainBG from "/img/MainBg.png";
import ShopTimers from "../components/ShopTimers"

const RatingPage = () => {
  const [activeButton, setActiveButton] = useState("players");

  return (
    <div className="basePage relative px-5 items-center">
      <EnergyRegeneration/>
      <ShopTimers/>
      <img
        className="h-full w-full object-center object-cover absolute -z-10"
        src={MainBG}
        alt="MainBackground"
      />

      <h1 className="mt-[175px] mb-[60px] unboundedLarge">Рейтинг</h1>

      <div className="flex flex-wrap justify-center gap-[10px] mb-[60px]">
        <UiButton
          size="md"
          type={activeButton === "players" ? "filled" : "empty"}
          onClick={() => setActiveButton("players")}
          children="Игроки"
          className=" unboundedMedium py-[14px] pr-[15px] justify-center"
        />
        <UiButton
          size="md"
          type={activeButton === "clans" ? "filled" : "empty"}
          onClick={() => setActiveButton("clans")}
          children="Кланы"
          className=" unboundedMedium py-[14px] pr-[15px] justify-center"
        />
        <div className="emptyBackground text-white border w-[350px] h-[294px] rounded-xl overflow-y-scroll custom-scrollbar">
          {activeButton === "players"
            ? playerRatingArray.map((pl) => (
                <div
                  key={pl.id}
                  className="flex items-center justify-start gap-[15px] py-[10px] px-5"
                >
                  <span
                    className={`unboundedSmall ${
                      pl.id < 3 ? "text-just-blue" : ""
                    }`}
                  >
                    {pl.id + 1}
                  </span>
                  <img src={pl.avatar} alt="avatar" width={45} height={45} />
                  <div className="flex flex-col">
                    <span className="unboundedMedium mb-2">{pl.nickname}</span>
                    <span className="text-just-blue unboundedSmall">
                      {pl.friends} friend
                    </span>
                  </div>
                </div>
              ))
            : clanRatingArray.map((clan) => (
                <div
                  key={clan.id}
                  className="flex items-center justify-start gap-[15px] py-[10px] px-5"
                >
                  <span
                    className={`unboundedSmall ${
                      clan.id < 3 ? "text-just-blue" : ""
                    }`}
                  >
                    {clan.id + 1}
                  </span>
                  <img src={clan.avatar} alt="avatar" width={45} height={45} />
                  <div className="flex flex-col">
                    <span className="unboundedMedium mb-2">
                      {clan.clanname}
                    </span>
                    <span className="text-just-blue unboundedSmall">
                      {formatNum(clan.just)} Just
                    </span>
                  </div>
                </div>
              ))}
        </div>
        <UiButton
          size="lg"
          type="filled"
          children="Пригласить друзей"
          className="unboundedSmall"
        />
      </div>
      <NavBar />
    </div>
  );
};

export default RatingPage;
