import { NavLink } from "react-router";
import logo from "../../../assets/logo.png";
import PageTransition from "../../pagetransition/PageTransition";
export default function SignIn() {
  return (
    <>
      <PageTransition>
        <div>
          <div>
            <img className="w-[250px]" src={logo} alt="#logo" />
            <p className="font-Roboto font-black text-[42px] text-black mt-10">
              Log in to Post
            </p>
          </div>
          <div className="flex flex-col gap-y-6 mt-7">
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
                type="password"
                id="password"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#183758] peer max-w-[400px]"
                placeholder=" "
              />
              <label
                for="password"
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
              Sign In
            </button>
            <div className="flex gap-x-[100px] mt-5">
              <NavLink className="text-[#1E97E1] hover:scale-105 duration-300">
                Forgot password?
              </NavLink>
              <NavLink
                to="/signUp"
                className="text-[#1E97E1] hover:scale-105 duration-300"
              >
                Sign up to Twitter
              </NavLink>
            </div>
          </div>
        </div>
      </PageTransition>
    </>
  );
}
