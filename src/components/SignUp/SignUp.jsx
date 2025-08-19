import { Navigate, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import SignIn from "../SignIn/SignIn";
import PageTransition from "../pagetransition/PageTransition";
import { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
export default function SignUp() {
  const auth = getAuth();
  const db = getDatabase();
  const navigate = useNavigate();
  // EmailHandle section=============
  const [emailErr, setEmailErr] = useState("");
  const [email, setEmail] = useState("");
  const emailHandle = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };

  // NameHandle  section=================
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const nameHandle = (e) => {
    setName(e.target.value);
    setNameErr("");
  };

  // PasswordHandle section=============
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const [passwordErr, setPasswordErr] = useState("");
  const passwordHandle = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };
  const passwordShowHandle = () => {
    setPasswordShow(!passwordShow);
  };

  // Sign Up Handle section=============

  const signUpHandle = () => {
    if (!email) {
      setEmailErr("Plz enter your Email");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailErr("It's not look like an Email");
    }
    if (!name) {
      setNameErr("Plz enter your Name");
    }
    if (!password) {
      setPasswordErr("Plz set your Password");
    }

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && name && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);

          set(ref(db, "users/" + user.uid), {
            username: name,
            email: email,
            createdAt: new Date().toLocaleString(),
          });
          navigate("/signIn");
          setEmailErr("");
          setNameErr("");
          setPasswordErr("");
          setName("");
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          const errorMessage = error.message;
          if (errorMessage.includes("auth/email-already-in-use")) {
            toast.error("This email already Exist");
          }
        });
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <PageTransition>
        <div>
          <div>
            <img className="w-[250px]" src={logo} alt="" />
            <p className="font-Inter font-bold text-[30px] mt-10 text-primaryColor">
              Create an account
            </p>
          </div>
          <div className="flex flex-col  mt-10">
            <div className="relative">
              <input
                onChange={emailHandle}
                type="email"
                id="email"
                value={email}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                  emailErr ? "border-red-300" : "border-gray-300"
                }   appearance-none focus:outline-none focus:ring-0 focus:border-[#183758] peer max-w-[400px]`}
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Email
              </label>
            </div>
            <p className="font-Roboto text-red-400 text-[12px] mb-6">
              {emailErr}
            </p>

            <div className="relative max-w-[400px]">
              <input
                onChange={nameHandle}
                value={name}
                type="text"
                id="text"
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                  nameErr ? "border-red-300" : "border-gray-300"
                }   appearance-none focus:outline-none focus:ring-0 focus:border-[#183758] peer max-w-[400px]`}
                placeholder=" "
              />
              <label
                htmlFor="text"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Name
              </label>
            </div>
            <p className="font-Roboto text-red-400 text-[12px] mb-6">
              {nameErr}
            </p>

            <div className="relative max-w-[400px]">
              <input
                onChange={passwordHandle}
                value={password}
                type={passwordShow ? "text" : "password"}
                id="password"
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                  passwordErr ? "border-red-300" : "border-gray-300"
                }   appearance-none focus:outline-none focus:ring-0 focus:border-[#183758] peer max-w-[400px]`}
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Password
              </label>
              {passwordShow ? (
                <FaRegEye
                  onClick={passwordShowHandle}
                  className="absolute top-[50%] -translate-[50%] right-0"
                />
              ) : (
                <FaEyeSlash
                  onClick={passwordShowHandle}
                  className="absolute top-[50%] -translate-[50%] right-0"
                />
              )}
            </div>
            <p className="font-Roboto text-red-400 text-[12px] mb-6">
              {passwordErr}
            </p>
          </div>
          <div className="mt-7">
            <button
              onClick={signUpHandle}
              type="button"
              className="text-white bg-[#183758] hover:bg-[#183758e8] hover:border-black focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-15 py-2.5 text-center me-2 mb-2 duration-300 cursor-pointer"
            >
              Sign Up
            </button>

            <p className="font-Roboto font-normal text-[16px] mt-[20px] text-primaryColor">
              Already have an account?{" "}
              <NavLink
                to="/signIn"
                className="text-[#1E97E1] font-Roboto font-normal text-[16px] hover:scale-105 transition duration-300 inline-block  hover:underline"
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
