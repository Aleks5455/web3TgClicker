import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '../../public/svg/HomeIcon.svg'; 
import FriendsIcon from '../../public/svg/FriendsIcon.svg';
import RatingIcon from '../../public/svg/RatingIcon.svg';
import TasksIcon from '../../public/svg/TasksIcon.svg';
import ShopIcon from "../../public/svg/ShopIcon.svg";


const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-2 bg-white/10 rounded-3xl w-[274px] h-[48px]">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? 'flex items-center justify-center w-12 h-10 bg-gradient-to-r from-indigo-300 to-blue-500 rounded-full'
            : 'flex items-center justify-center w-12 h-10 rounded-full'
        }
      >
        <img src={HomeIcon}/>
      </NavLink>
      <NavLink
        to="/friends"
        className={({ isActive }) =>
          isActive
            ? 'flex items-center justify-center w-12 h-10 bg-gradient-to-r from-indigo-300 to-blue-500 rounded-full'
            : 'flex items-center justify-center w-12 h-10 rounded-full'
        }
      >
        <img src={FriendsIcon }/>
      </NavLink>
      <NavLink
        to="/rating"
        className={({ isActive }) =>
          isActive
            ? 'flex items-center justify-center w-12 h-10 bg-gradient-to-r from-indigo-300 to-blue-500 rounded-full'
            : 'flex items-center justify-center w-12 h-10 rounded-full'
        }
      >
        <img src={RatingIcon}/>
      </NavLink>
      <NavLink
        to="/tasks"
        className={({ isActive }) =>
          isActive
            ? 'flex items-center justify-center w-12 h-10 bg-gradient-to-r from-indigo-300 to-blue-500 rounded-full'
            : 'flex items-center justify-center w-12 h-10 rounded-full'
        }
      >
        <img src={TasksIcon}/>
      </NavLink>
      <NavLink
        to="/shop"
        className={({ isActive }) =>
          isActive
            ? 'flex items-center justify-center w-12 h-10 bg-gradient-to-r from-indigo-300 to-blue-500 rounded-full'
            : 'flex items-center justify-center w-12 h-10 rounded-full'
        }
      >
        <img src={ShopIcon}/>
      </NavLink>
    </div>
  );
};

export default NavBar;
