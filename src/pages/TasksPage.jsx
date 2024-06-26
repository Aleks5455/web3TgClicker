import { formatNum } from "../utils/NumberConverter.js";
import { tasksArray } from "../utils/Tasks.js";
import NavBar from "../components/NavBar";
import ArrowIcon from "/svg/ArrowIcon.svg";
import TGIcon from "/svg/TGIcon.svg";
import MainBG from "/img/MainBg.png";
import EnergyRegeneration from "../components/EnergyRegeneration.jsx";
import ShopTimers from "../components/ShopTimers"

const TasksPage = () => {
  return (
    <div className="basePage relative px-5 items-center">
      <EnergyRegeneration/>
      <ShopTimers/>
      <img
        className="h-full w-full object-center object-cover absolute -z-10"
        src={MainBG}
        alt="MainBackground"
      />

      <h1 className="mt-[175px] mb-[60px] unboundedLarge">Задания</h1>

      <div className="w-[350px] mb-[82px]">
        {tasksArray.map((task) => (
          <button className="emptyBackground text-white border w-[350px] h-[59px] rounded-xl mb-[10px]" key={task.id}>
            <div className=" flex justify-between mx-5">
              <div className="flex items-center gap-[15px]">
                <img
                  src={task.avatar}
                  alt="image"
                  width={45}
                  height={45}
                />
                <div className="flex flex-col">
                  <span className="unboundedMedium mb-2">{task.name}</span>
                  <span className="unboundedSmall text-just-blue">
                    {formatNum(task.payment)} Just
                  </span>
                </div>
                <img src={TGIcon} alt="tgIcon" width={20} height={20} />
              </div>
              <img src={ArrowIcon} alt="arrow" className="" />
            </div>
          </button>
        ))}
      </div>

      <NavBar />
    </div>
  );
};

export default TasksPage;
