import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
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
  console.log(postData, "data");

  return (
    <>
      <div>card</div>
    </>
  );
}
