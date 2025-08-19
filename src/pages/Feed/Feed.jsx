import { Outlet } from "react-router";
import Container from "../../components/Container/Container";
import PageTransition from "../../components/pagetransition/PageTransition";
import SideBar from "../../components/SideBar/SideBar";

export default function Feed() {
  return (
    <>
      <PageTransition>
        <Container>
          <div className="flex justify-between w-[100%] px-[200px] bg-blue-50">
            <div className="w-[15%] bg-blue-50  border-r-[1px] border-[#00000023]"><SideBar/></div>
            <div className="w-[70%] px-4 border-r-[1px] border-[#00000023]"><Outlet/></div>
            <div className="w-[15%] px-4">Others</div>
          </div>
        </Container>
      </PageTransition>
    </>
  );
}
