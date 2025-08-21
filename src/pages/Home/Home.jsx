import { useSelector } from "react-redux";
import PageTransition from "../../components/pagetransition/PageTransition";
import { GoFileMedia } from "react-icons/go";
import { BsCalendar4Event } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { useState } from "react";
import { div } from "motion/react-client";
import { time, useTime } from "motion/react";
import { getDatabase, push, ref, set } from "firebase/database";
import PostCard from "../../components/PostCard/PostCard";
import moment from "moment/moment";

export default function Home() {
  const user = useSelector((state) => state.user.value);
  const db = getDatabase();

  //   Pop-up Handle ==================
  const [show, setShow] = useState(false);
  const postPopupHandle = () => setShow(true);
  const closePopupHandle = () => setShow(false);

  //   Text handle section ============
  const [post, setPost] = useState("");
  const textHandle = (e) => {
    setPost(e.target.value);
  };

  //   Post Handle section =========

  const postHandle = () => {
    set(push(ref(db, "post/")), {
      posterid: user.uid,
      posterName: user.displayName,
      posterText: post,
      time: moment().format(),
    });

    setShow(false);
  };

  return (
    <>
      <PageTransition>
        <div className="mt-5">
          <div className="border-[rgba(0,0,0,0.1)] border-[.5px] rounded-[10px] py-3 px-4">
            <div className="flex gap-x-3">
              <div className="h-[60px] w-[60px] bg-blue-100 flex items-center justify-center text-[45px] font-Inter font-bold text-primaryColor rounded-full">
                {" "}
                {user.displayName.charAt(0).toUpperCase()}
              </div>
              <div
                onClick={postPopupHandle}
                className="font-Inter font-medium border-[.5px] border-[rgba(0,0,0,0.2)] rounded-full grow-1 flex items-center pl-4 cursor-pointer"
              >
                Start a post
              </div>
            </div>
            <div className="flex justify-between px-7 mt-5">
              <div className="flex items-center justify-center gap-x-2 font-Inter font-medium border-[.5px] border-[rgba(0,0,0,0.2)] px-3 py-1 rounded-full hover:bg-white duration-200">
                <GoFileMedia />
                Media
              </div>
              <div className="flex items-center gap-x-2 font-Inter font-medium border-[.5px] border-[rgba(0,0,0,0.2)] px-3 py-1 rounded-full hover:bg-white duration-200">
                <BsCalendar4Event />
                Event
              </div>
              <div className="flex items-center gap-x-2 font-Inter font-medium border-[.5px] border-[rgba(0,0,0,0.2)] px-3 py-1 rounded-full hover:bg-white duration-200">
                <TfiWrite />
                Write Article
              </div>
            </div>
          </div>
          <div>
            <PostCard/>
          </div>
        </div>

        {show && (
          
            <div className="fixed  inset-0 bg-[#00000067] bg-opacity-40 flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl shadow-lg p-6 w-[400px] absolute ">
                <div className="flex items-center gap-x-3 mb-5">
                  <div className="h-[60px] w-[60px] bg-blue-100 flex items-center justify-center text-[45px] font-Inter font-bold text-primaryColor rounded-full">
                    {" "}
                    {user.displayName.charAt(0).toUpperCase()}
                  </div>
                  <p className="font-bold font-Inter text-[24px] text-primaryColor">
                    {user.displayName}
                  </p>
                </div>
                <button
                  onClick={closePopupHandle}
                  className="absolute top-3 right-3 text-gray-600 hover:text-black text-lg"
                >
                  ✕
                </button>
                <h2 className="text-xl font-bold font-Inter mb-4">
                  Create a Post
                </h2>
                <textarea
                  onChange={textHandle}
                  placeholder="What's on your mind?"
                  className="w-full border border-[rgba(0,0,0,0.2)] rounded-lg p-2 font-Inter resize-none focus:outline-none focus:ring-1 focus:ring-blue-400"
                  rows={4}
                />
                <div className="flex justify-end mt-4">
                  <button
                    onClick={postHandle}
                    className="text-primaryColor border-[.5px] border-[rgba(0,0,0,0.2)] hover:text-white px-4 py-2 rounded-full hover:bg-primaryColor duration-200"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
         
        )}
      </PageTransition>
    </>
  );
}
