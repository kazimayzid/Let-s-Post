import { NavLink, Outlet } from "react-router";
import logo from "../../assets/logo.png";
import PageTransition from "../pagetransition/PageTransition";
import Container from "../Container/Container";
import { BiSolidHomeCircle } from "react-icons/bi";
import { GoChecklist, GoHash, GoHome } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbMessage } from "react-icons/tb";
import { CiBookmark, CiCircleMore } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

export default function SideBar() {
  return (
    <>
      <PageTransition>
        <div>
          <div className="mt-6 mb-5">
            <NavLink>
              <img className="w-[150px]" src={logo} alt="" />
            </NavLink>
          </div>
          <div className="flex flex-col gap-y-3.5 ">
            <div>
              <NavLink>
                <button className="flex gap-x-1 items-center font-Inter font-medium text-[18px] text-primaryColor hover:bg-white border-[.5px] border-transparent hover:border-[#0000002a] duration-300 hover:border-[.5px] py-1.5 px-3 rounded-full">
                  <GoHome />
                  Home
                </button>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <button className="flex gap-x-1 items-center font-Inter font-medium text-[18px] text-primaryColor hover:bg-white border-[.5px] border-transparent hover:border-[#0000002a] duration-300 hover:border-[.5px] py-1.5 px-3 rounded-full">
                  <GoHash />
                  Explore
                </button>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <button className="flex gap-x-1 items-center font-Inter font-medium text-[18px] text-primaryColor hover:bg-white border-[.5px] border-transparent hover:border-[#0000002a] duration-300 hover:border-[.5px] py-1.5 px-3 rounded-full">
                  <IoNotificationsOutline />
                  Notifications
                </button>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <button className="flex gap-x-1 items-center font-Inter font-medium text-[18px] text-primaryColor hover:bg-white border-[.5px] border-transparent hover:border-[#0000002a] duration-300 hover:border-[.5px] py-1.5 px-3 rounded-full">
                  <TbMessage />
                  Messages
                </button>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <button className="flex gap-x-1 items-center font-Inter font-medium text-[18px] text-primaryColor hover:bg-white border-[.5px] border-transparent hover:border-[#0000002a] duration-300 hover:border-[.5px] py-1.5 px-3 rounded-full">
                  <CiBookmark />
                  Bookmarks
                </button>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <button className="flex gap-x-1 items-center font-Inter font-medium text-[18px] text-primaryColor hover:bg-white border-[.5px] border-transparent hover:border-[#0000002a] duration-300 hover:border-[.5px] py-1.5 px-3 rounded-full">
                  <GoChecklist />
                  Lists
                </button>
              </NavLink>
            </div>
            <div>
              {" "}
              <NavLink>
                <button className="flex gap-x-1 items-center font-Inter font-medium text-[18px] text-primaryColor hover:bg-white border-[.5px] border-transparent hover:border-[#0000002a] duration-300 hover:border-[.5px] py-1.5 px-3 rounded-full">
                  <CgProfile />
                  Profile
                </button>
              </NavLink>
            </div>
            <div>
              {" "}
              <NavLink>
                <button className="flex gap-x-1 items-center font-Inter font-medium text-[18px] text-primaryColor hover:bg-white border-[.5px] border-transparent hover:border-[#0000002a] duration-300 hover:border-[.5px] py-1.5 px-3 rounded-full">
                  <CiCircleMore />
                  More
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </PageTransition>
    </>
  );
}
