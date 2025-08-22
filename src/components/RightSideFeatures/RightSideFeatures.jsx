import { CiSearch } from "react-icons/ci";
import WhoToFollow from "../WhoToFollow/WhoToFollow";

export default function RightSideFeatures() {
  return (
    <>
      <div>
        <div>
          <div className="relative inline-block">
            <input
              className="border-[.5px] border-[rgba(0,0,0,0.1)] focus:outline-none w-80 mt-5 rounded-full py-1 pl-7"
              type="text"
              placeholder="Search"
            />
            <CiSearch className="absolute top-[50%] left-1 translate-[20%]" />
          </div>
        </div>
        <div><WhoToFollow/></div>
        <div></div>
      </div>
    </>
  );
}
