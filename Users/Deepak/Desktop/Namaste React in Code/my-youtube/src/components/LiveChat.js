import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utlis/chatSlice";
import { generateName } from "../utlis/generateName";
import { generateRandomMessage } from "../utlis/generateMessage";
import { generateProfileImage } from "../utlis/generateProfileImage";


const LiveChat = () => {
  const [liveMessage,setLiveMessage] =useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateName(),
          info: generateRandomMessage(15),
          profile: generateProfileImage()
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);

  return (<>
  <div className="h-[460px] w-full mx-2 p-2 border border-black  rounded-lg overflow-y-scroll flex flex-col-reverse">
       
       {chatMessages?.map((c, i) => (
         <ChatMessage key={i} name={c.name} message={c.info}  profile={c.profile}/>
       ))}
        
       
 
     </div>
     <form className="w-full p-2 ml-2 flex border border-black" onSubmit={(e)=>
      { e.preventDefault()
        console.log("submit",liveMessage)
        dispatch(addMessage({
          name:"Deepak",
          info : liveMessage
        }))
        setLiveMessage("")
        }}>
      <input type="text" className="w-96" value={liveMessage} onChange={(e)=> {
        setLiveMessage(e.target.value)
      }}/>
      <button className="px-2 mx-2 bg-green-100 p" >Send</button>
     </form>
     </>
    
  );
};

export default LiveChat;
