import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { div } from "motion/react-client";
import moment from "moment";
import PageTransition from "../pagetransition/PageTransition";
import { FaRegComment } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { MdOutlineIosShare } from "react-icons/md";
import EmojiPicker from "emoji-picker-react";
export default function PostCard() {
  const db = getDatabase();

  //   Data fatching section =============
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    const postRef = ref(db, "post/");
    const unsubscribe = onValue(postRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        arr.push({
          key: item.key,
          ...item.val(),
        });
      });
      setPostData(arr);
    });

    return () => unsubscribe();
  }, []);
  console.log(postData);

  // like handle section =========
  const [emoji, setEmoji] = useState(null);
  const likeHandle = (key) => {
    if (emoji === key) {
      setEmoji(null)
    }else {
      setEmoji(key)
    }
  };

  const emojiSelectHandle = (e) => {
    setEmoji(null)
  }

  return (
    <>
      {postData.map((data, i) => (
        <div
          key={i}
          className="border-[rgba(0,0,0,0.1)] border-[.5px] mt-2 rounded-[10px] p-2"
        >
          <div className="flex items-center gap-x-4">
            <div className="h-[50px] w-[50px] bg-blue-100 flex items-center justify-center text-[45px] font-Inter font-bold text-primaryColor rounded-full">
              {" "}
              {data.posterName?.charAt(0).toUpperCase()}
            </div>
            <p className="font-bold font-Inter text-[18px] text-primaryColor">
              {data.posterName}
            </p>
            <p className="font-Inter text-[14px] text-[rgba(0,0,0,0.6)]">
              {moment(data.time).fromNow()}
            </p>
          </div>
          <div className="mt-1 ml-16 font-Inter text-[16px] text-primaryColor">
            {data.posterText}
          </div>
          <div className="flex justify-between px-16 mt-6 relative">
            <div className="cursor-pointer">
              <SlLike onClick={() => likeHandle(data.key)} />
              {emoji === data.key && (
                <div className="absolute top-[-55px] left-[50px] z-10">
                  <EmojiPicker
                    reactionsDefaultOpen={true}
                    emojiStyle="twitter"
                    onEmojiClick={emojiSelectHandle}
                  />
                </div>
              )}
            </div>
            <div className="cursor-pointer">
              <FaRegComment />
            </div>
            <div className="cursor-pointer">
              <MdOutlineIosShare size={20} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
