import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import CommentReply from "./CommentReply";

import { Google_API_Key } from "../utlis/constants";
const CommentsThread = ({ videoID }) => {
  const [commentThread, setCommentThread] = useState();
  const [visibleSection, setVisibleSection] = useState();

  useEffect(() => {
    const getComments = async () => {
      const data = await fetch(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=30&videoId=${videoID}` +
          "&key=" +
          Google_API_Key
      );
      const json = await data.json();
      setCommentThread(json.items);
    };
    getComments();
  }, [videoID]);

  if (!commentThread?.length) {
    return (
      <>
        <h2 className="flex justify-center items-center mb-56 p-4 dark:bg-zinc-900">
          Comments are turned off.{" "}
        </h2>
      </>
    );
  }
  return (
    <>
      <h1 className="p-5 font-extrabold">Comments</h1>
      {commentThread.map((item) => {
        return (
          <div
            key={item.id}
            className="m-7 shadow-md rounded-lg "
          >
            <Comment
              item={item}
              repliesQty={item?.replies?.comments?.length}
              visibleSection={visibleSection}
              setVisibleSection={setVisibleSection}
            />
            {visibleSection === item.id &&
              item?.replies?.comments?.map((commentStructure) => {
                return (
                  <CommentReply
                    key={
                      commentStructure?.snippet?.parentId +
                      commentStructure?.snippet?.textOriginal
                    }
                    commentStructure={commentStructure}
                  />
                );
              })}
          </div>
        );
      })}
    </>
  );
};

export default CommentsThread;
