import { data, NavLink, Outlet } from "react-router";
import logo from "../../assets/logo.png";
import PageTransition from "../pagetransition/PageTransition";
import Container from "../Container/Container";
import { BiSolidHomeCircle } from "react-icons/bi";
import { GoChecklist, GoHash, GoHome } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbMessage } from "react-icons/tb";
import { CiBookmark, CiCircleMore } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import coverImg from "../../assets/Illustration.png";
import { useSelector } from "react-redux";
import profileImg from "../../assets/Mayzidpic.JPG";
export default function SideBar() {
  const user = useSelector((state) => state.user.value);

  return (
    <>
      <PageTransition>
        <div>
          <div className="mt-6 mb-5">
            <NavLink>
              <img className="w-[150px]" src={logo} alt="" />
            </NavLink>
          </div>
          <NavLink>
            <div className="border-[.5px] border-[rgba(0,0,0,0.1)] rounded-[10px] mr-2">
              <div className="relative">
                <div
                  className="h-[80px] w-full bg-cover bg-center bg-no-repeat border-b-[.5px] border-[#0000001e]  rounded-t-[10px]"
                  style={{ backgroundImage: `url(${coverImg})` }}
                ></div>
                <div className="h-[80px] w-[80px] bg-blue-100 flex items-center justify-center text-[45px] font-Inter font-bold text-primaryColor rounded-full bg-cover bg-center absolute top-[50%] left-[10px]">
                  {" "}
                  {user.displayName.charAt(0).toUpperCase()}
                </div>
              </div>
              <div className="mt-12 ml-3">
                <p className="font-bold font-Inter text-[24px] text-primaryColor">
                  {user.displayName}
                </p>
              </div>
            </div>
          </NavLink>
          <div className="flex flex-col gap-y-3.5 mt-5">
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
