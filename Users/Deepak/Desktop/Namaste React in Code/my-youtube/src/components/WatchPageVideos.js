import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import VideoSuggestionsCard from "./VideoSuggestionsCard";
import { Google_API_Key } from "../utlis/constants";

const WatchPageVideos = () => {
  const [searchParams] = useSearchParams();
  const videoID = searchParams.get("v");
  const [relatedVideoData, setRelatedVideoData] = useState([]);

  const getRelatedVideos = async () => {
    try {
      const data = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=40&relatedToVideoId=${videoID}&type=video&key=` +
          Google_API_Key
      );
      const json = await data.json();
      // console.log("dtaa",json)
      setRelatedVideoData(json.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRelatedVideos();
    // eslint-disable-next-line
  }, [videoID]);

  if(!relatedVideoData?.length){
    return null;
  }
  return (
    <>
    <div className=" mt-4 mr-6 py-2 w-[420px]">
        {relatedVideoData.map((v) => (
          <VideoSuggestionsCard info={v} />
        ))}
      </div>
    </>
    
  );
};

export default WatchPageVideos;
