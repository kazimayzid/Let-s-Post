import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
export default function WhoToFollow() {
  const db = getDatabase();


//   Data fatching ==============
const [userData, setUserData] = useState([]);
  useEffect(() => {
    const userRef = ref(db, "users/" );
    onValue(userRef, (snapshot) => {
        let arr = [];
       snapshot.forEach((items) => {
        arr.push({...items.val(), key:items.key})
      })
      setUserData(arr)
    });
  }, []);
  console.log(userData, "data");
  
  return (
    <div className="border-[.5px] border-[rgba(0,0,0,0.1)] px-2 py-2 mt-5 rounded-[10px]">
      <p className="font-Inter font-bold text-3xl text-primaryColor">
        Who to follow
      </p>
    </div>
  );
}
