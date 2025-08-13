import { NavLink } from "react-router";
import logo from "../../assets/logo.png";
import SignIn from "../Container/SignIn/SignIn";
import PageTransition from "../pagetransition/PageTransition";
export default function SignUp() {
  return (
    <>
      <PageTransition>
        <div>
          <div>
            <img className="w-[250px]" src={logo} alt="" />
            <p className="font-Inter font-bold text-[30px] mt-10 text-primaryColor">
              Create an account
            </p>
          </div>
          <div className="flex flex-col gap-y-4 mt-10">
            <div className="relative">
              <input
                type="email"
                id="floating_outlined"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#183758] peer max-w-[400px]"
                placeholder=" "
              />
              <label
                for="floating_outlined"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Email
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id="text"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#183758] peer max-w-[400px]"
                placeholder=" "
              />
              <label
                for="text"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Name
              </label>
            </div>
            <div className="relative">
              <input
                type="password"
                id="floating_outlined"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#183758] peer max-w-[400px]"
                placeholder=" "
              />
              <label
                for="floating_outlined"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Password
              </label>
            </div>
          </div>
          <div className="mt-7">
            <button
              type="button"
              class="text-white bg-[#183758] hover:bg-[#183758e8] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-15 py-2.5 text-center me-2 mb-2 duration-300 cursor-pointer"
            >
              Sign Up
            </button>

            <p className="font-Roboto font-normal text-[16px] mt-[20px] text-primaryColor">
              Already have an account?{" "}
              <NavLink
                to="/welcome/signIn"
                className="text-[#1E97E1] font-Roboto font-normal text-[16px]"
              >
                Sign In
              </NavLink>
            </p>
          </div>
        </div>
      </PageTransition>
    </>
  );
}
