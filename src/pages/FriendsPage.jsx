import { friendsArray } from "../utils/Friends";
import EnergyRegeneration from "../components/EnergyRegeneration";
import UiButton from "../components/ui/Button";
import NavBar from "../components/NavBar";
import MainBG from "/img/MainBg.png";

const FriendsPage = () => {
  const totalIncome = Math.round(
    friendsArray.reduce((sum, friend) => sum + friend.income, 0) / 1000
  );
  return (
    <div className="basePage relative px-5 items-center">
      <EnergyRegeneration/>
      <img
        className="h-full w-full object-center object-cover absolute -z-10"
        src={MainBG}
        alt="MainBackground"
      />

      <h1 className="mt-[175px] mb-[60px] unboundedLarge">Друзья</h1>

      <div className="flex flex-wrap justify-center gap-[10px] mb-[60px]">
        <UiButton
          size="md"
          type="empty"
          children="Друзей:"
          extraText="19"
          className=" unboundedMedium gap-[15px] py-[24px]"
        />
        <UiButton
          size="md"
          type="empty"
          children="Всего:"
          extraText={`${totalIncome}k`}
          className=" unboundedMedium gap-[15px] py-[24px]"
        />
        <div className="emptyBackground text-white border w-[350px] h-[294px] rounded-xl overflow-y-scroll custom-scrollbar">
          {friendsArray.map((friend) => (
            <div
              key={friend.id}
              className="flex items-center justify-between py-[10px] px-5"
            >
              <img src={friend.avatar} alt="avatar" width={45} height={45} />
              <span className="unboundedMedium">{friend.nickname}</span>
              <span className="text-just-blue unboundedSmall">
                + {Math.round(friend.income / 1000)}k
              </span>
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

export default FriendsPage;
