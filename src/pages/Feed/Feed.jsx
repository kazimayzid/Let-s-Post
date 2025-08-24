import { Outlet } from "react-router";
import Container from "../../components/Container/Container";
import PageTransition from "../../components/pagetransition/PageTransition";
import SideBar from "../../components/SideBar/SideBar";
import RightSideFeatures from "../../components/RightSideFeatures/RightSideFeatures";

export default function Feed() {
  return (
    <>
      <PageTransition>
        <div className="bg-blue-50 flex justify-center">
          <div className="flex justify-between bg-blue-50 ">
            <div className="w-64 fixed h-full  bg-blue-50  border-r-[1px] border-[#00000023]">
              <SideBar />
            </div>
            <div className=" flex-1 ml-64 flex  justify-start">
              <div className="w-[600px] px-4 border-r-[1px] border-[#00000023] ">
                <Outlet />
              </div>
              <div className="px-4 "><RightSideFeatures/></div>
            </div>
          </div>
        </div>
      </PageTransition>
    </>
  );
}
