import { Outlet } from "react-router";
import { SideImg } from "../../pages/SideImg/SideImg";
import Container from "../Container/Container";

export default function RootLayOut() {
  return (
    <Container>
      <div className="flex gap-x-50 items-center h-[100vh]">
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(23, 35, 83, 1) 35%, rgba(24, 59, 89, 1) 100%)",
          }}
          className=" w-[50%] flex justify-center items-center h-[100vh]"
        >
          <SideImg />
        </div>
        <div className="w-[50%]">
          <Outlet />
        </div>
      </div>
    </Container>
  );
}
