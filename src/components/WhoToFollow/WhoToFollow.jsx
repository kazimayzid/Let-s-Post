import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { div } from "motion/react-client";
import PageTransition from "../pagetransition/PageTransition";
import { NavLink } from "react-router";
import { useSelector } from "react-redux";
export default function WhoToFollow() {
  const user = useSelector((state) => state.user.value);
  const db = getDatabase();

  //   Data fatching ==============
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const userRef = ref(db, "users/");
    onValue(userRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((items) => {
        if (user.uid !== items.key) {
          arr.push({ ...items.val(), key: items.key });
        }
      });
      setUserData(arr);
    });
  }, [db]);
  console.log(userData, "data");
  console.log(user, "user");
  

  return (
    <PageTransition>
      <div className="border-[.5px] border-[rgba(0,0,0,0.1)] px-2 py-2 mt-5 rounded-[10px]">
        <p className="font-Inter font-bold text-3xl text-primaryColor">
          Who to follow
        </p>
        {userData.map((data, i) => (
          <div key={i} className="mt-4 flex justify-between items-center ">
            <div className="flex items-center gap-x-3">
              <div className="h-[50px] w-[50px] bg-blue-100 flex items-center justify-center text-[35px] font-Inter font-bold text-primaryColor rounded-full">
                {" "}
                {data.userName?.charAt(0).toUpperCase()}
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="font-Inter font-semibold text-lg text-primaryColor">
                    {data.userName}
                  </p>
                  <p className="font-Inter font-normal text-[rgba(25,63,92,0.6)] text-[16px]">
                    {data.email}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <NavLink className="font-Inter font-semibold border-[.5px] border-primaryColor px-4 py-1 rounded-full hover:bg-primaryColor hover:text-white duration-300">
                Follow
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </PageTransition>
  );
}
