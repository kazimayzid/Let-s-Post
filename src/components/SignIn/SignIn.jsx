import { NavLink, useNavigate } from "react-router";
import logo from "../../assets/logo.png";
import PageTransition from "../pagetransition/PageTransition";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { userLogInfo } from "../../features/UserSlice/UserSlice";
import { ScaleLoader } from "react-spinners";
export default function SignIn() {
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Email handle section ==========
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const emailHandle = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };
  // Password handle section ==========
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const passwordHandle = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };
  // Sign is Handle section =============
  const [loder, setLoder] = useState(false);
  const signInHandle = () => {
    setLoder(true);
    if (!email) {
      setEmailErr("Enter your Email");
      setLoder(false);
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailErr("It's not look like an Email");
      setLoder(false);
    }
    if (!password) {
      setPasswordErr("Enter your Password");
      setLoder(false);
    }
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(userLogInfo(user));
          localStorage.setItem("userInfo", JSON.stringify(user));
          toast.success("Welcome to Let's Post");
          setLoder(false);
          setTimeout(() => {
            navigate("/feed");
          }, 2000);
          setEmailErr("");
          setPasswordErr("");
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/user-not-found":
              toast.error("No user found with this email");
              break;
            case "auth/wrong-password":
              toast.error("Incorrect password");
              break;
            case "auth/invalid-email":
              toast.error("Invalid email format");
              break;
          }
          setLoder(false);
        });
    }
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <PageTransition>
        <div>
          <div>
            <img className="w-[250px]" src={logo} alt="#logo" />
            <p className="font-Roboto font-black text-[42px] text-black mt-10">
              Log in to Post
            </p>
          </div>
          <div className="flex flex-col mt-7">
            <div className="relative">
              <input
                onChange={emailHandle}
                value={email}
                type="email"
                id="email"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#183758] peer max-w-[400px]"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Email
              </label>
            </div>
            <p className="mb-5 font-Roboto text-[12px] text-red-300">
              {emailErr}
            </p>
            <div className="relative">
              <input
                onChange={passwordHandle}
                value={password}
                type="password"
                id="password"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#183758] peer max-w-[400px]"
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Password
              </label>
            </div>
            <p className="mb-5 font-Roboto text-[12px] text-red-300">
              {passwordErr}
            </p>
          </div>
          <div className="mt-7">
            <button
              onClick={signInHandle}
              type="button"
              class="text-white bg-[#183758] hover:bg-[#183758e8] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-15 py-2.5 text-center me-2 mb-2 duration-300 cursor-pointer"
            >
              {loder ? <ScaleLoader height={13} color="#ffffff" /> : "Sign In"}
            </button>
            <div className="flex gap-x-[100px] mt-5">
              <NavLink className="text-[#1E97E1] hover:scale-105 duration-300">
                Forgot password?
              </NavLink>
              <NavLink
                to="/signUp"
                className="text-[#1E97E1] hover:scale-105 duration-300"
              >
                Sign up to Let's Post
              </NavLink>
            </div>
          </div>
        </div>
      </PageTransition>
    </>
  );
}
