import { Navigate, NavLink, useNavigate } from "react-router";
import logo from "../../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import SignUp from "../SignUp/SignUp";
import PageTransition from "../pagetransition/PageTransition";

export default function Welcome() {
  const navigate = useNavigate()
  const signUpHandle = () => {
    navigate("/welcome/signUp")
  }
  return (
    <>
      <PageTransition>
        <div>
        <div>
          <img className="w-[250px] mb-14" src={logo} alt="#logo" />
          <h1 className="font-Roboto font-black text-[64px]">
            Post your <span className="">thoughts</span>
          </h1>
          <p className="font-Roboto font-black text-[30px]">
            Join our community
          </p>
        </div>
        <div className="flex flex-col items-start gap-y-4 mt-8">
          <div className="flex items-center w-[400px] gap-x-2 border-[1px] border-[#E4EAED] hover:border-[#193e5b] px-12 py-2 rounded-full hover:scale-105 duration-300 cursor-pointer justify-center">
            <FcGoogle size={20} />
            <span className="font-Roboto font-medium text-[20px]">
              Sign up with Google
            </span>
          </div>

          <div
          onClick={signUpHandle}
          className="flex items-center w-[400px] gap-x-2 border-[1px] border-[#E4EAED] hover:border-[#193e5b] px-12 py-2 rounded-full hover:scale-105 duration-300 cursor-pointer justify-center">
            <span className="font-Roboto font-medium text-[20px]">
              Sign up with email
            </span>
          </div>
        </div>

        <div className="mt-[23px]">
          <p className="font-Roboto font-normal text-[14px]">
            By singing up you agree to the Terms of Service and Privacy{" "}
            <span className="block"> Policy, including Cookie Use.</span>
          </p>
          <p className="font-Roboto font-normal text-[16px] mt-[20px]">
            Already have an account?{" "}
            <span className="text-[#1E97E1] font-Roboto font-normal text-[16px]">
              Log in
            </span>
          </p>
        </div>
      </div>
      </PageTransition>
    </>
  );
}
