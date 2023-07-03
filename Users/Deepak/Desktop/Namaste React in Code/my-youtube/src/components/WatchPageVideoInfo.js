import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { VIDEO_INFO_URL } from "../utlis/constants";
import { CHANNEL_INFO_URL } from "../utlis/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FaShare } from "react-icons/fa";
import { convertToKAndMillion } from "../utlis/constants";
import { publishedAt as publishedAtFunc } from "../utlis/publishedAt"
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { RxArrowDown } from "react-icons/rx";


const WatchPageVideoInfo = () => {
  const [videoInfo, setVidoInfo] = useState(null);
  const [channelID, setChannelID] = useState();
  const [channelInfo, setChannelInfo] = useState();
  const [searchParams] = useSearchParams();
  const videoID = searchParams.get("v");
  const [moreEnabled, setMoreEnabled] = useState(false);

  useEffect(() => {
    const getVideoInfo = async () => {
      const data = await fetch(VIDEO_INFO_URL + videoID);
      const json = await data.json();
      setVidoInfo(json);
      setChannelID(json?.items?.[0]?.snippet?.channelId);
    };
    getVideoInfo();
  }, [videoID]);

  useEffect(() => {
    const getChannelInfo = async () => {
      const data = await fetch(CHANNEL_INFO_URL + channelID);
      const json = await data.json();
      setChannelInfo(json);
    };
    getChannelInfo();
  }, [channelID]);

  const description = videoInfo?.items?.[0]?.snippet?.description || "";

  return (
    <div>
      <h1 className="font-semibold text-lg">
        {videoInfo?.items?.[0]?.snippet?.title}
      </h1>
      <div className="flex justify-between align-center">
        <div className="flex p-2 my-2">
          <img
            className="h-8 w-8 object-cover rounded-full"
            src={channelInfo?.items?.[0]?.snippet?.thumbnails?.default?.url}
            alt="channelIcon"
          />
          <div className="flex flex-col  mx-2">
            <p className="font-semibold text-sm">
              {videoInfo?.items?.[0]?.snippet?.channelTitle}
            </p>
            <p className="text-xs">
              {convertToKAndMillion(
                channelInfo?.items?.[0]?.statistics?.subscriberCount
              )}{" "}
              Subscribers
            </p>
          </div>
          <div className="mt-2 mr-2 h-7 border border-gray-400  rounded-full px-2 hover:bg-gray-200 hover:cursor-pointer">
            Join
          </div>
          <div className="mt-2 h-7 border border-black  rounded-full px-4 bg-gray-900 text-white hover:cursor-pointer hover:bg-red-700">
            Subscribe{" "}
            <FontAwesomeIcon
              icon={faBell}
              shake
              size="sm"
              style={{ color: "#fff" }}
            />
          </div>
        </div>
        <div>
          <div className="flex mt-2 mr-10">
            <button className="flex justify-center items-center ml-8 mt-4 h-7 bg-gray-100 font-semibold text-black rounded-full px-4 py-0">
              <span className="h-5 w-5 mr-2">
                <AiFillLike />
              </span>
              <span className="mr-2">
                {convertToKAndMillion(
                  videoInfo?.items?.[0]?.statistics?.likeCount
                )}
              </span>
              <span className="mr-2">|</span>
              <span className="h-5 w-5 mt-1">
                <AiFillDislike />
              </span>
            </button>
            <button className="flex ml-4 mt-4 h-7 bg-gray-100  items-center font-semibold text-black rounded-full px-2">
              <span>
                <FaShare />
              </span>
              <p className="mx-2 text-sm">Share</p>
            </button>
            <button className="flex ml-4 mt-4 h-7 bg-gray-100  items-center font-semibold text-black rounded-full px-2">
              <RxArrowDown />
              <p className="mx-2 text-sm">Download</p>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-gray-100 rounded-lg p-4 mt-3 ">
        <div className="flex font-semibold">
          <h2>
            {" "}
            {convertToKAndMillion(videoInfo?.items?.[0]?.statistics?.viewCount)} views
          </h2>
          <h2 className="ml-4">
            {publishedAtFunc(videoInfo?.items?.[0]?.snippet?.publishedAt)}
          </h2>
        </div>
        <div className=" whitespace-pre-line  scroll-hide">
          
          {moreEnabled ? description : description.slice(0, 150)}
          <h1
            className="cursor-pointer text-blue-600"
            onClick={() => setMoreEnabled((bool) => !bool)}
          >
            {moreEnabled ? " ...Show Less" : "...Show More"}
          </h1>
        </div>
      </div>

    </div>
  );
};

export default WatchPageVideoInfo;
