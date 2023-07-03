import React, { useEffect, useState } from 'react'
import { Youtube_Videos_API } from '../utlis/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const VideoContainer = () => {
  const [videos,setVideos] = useState([])
  
  useEffect(()=>{
    getVideos();
  },[])
   const getVideos =async () => {
    const data =await fetch(Youtube_Videos_API)
    const json = await data.json(); 
    // console.log(json.items);
    setVideos(json.items)
     
  }
if(!videos.length){
  return <Shimmer/>
}

  return (
    <div className=' m-2 flex flex-wrap overflow-auto'>
      {videos.map(video => 
      <Link to={"watch?v="+ video.id} key={video.id}><VideoCard info={video}/></Link> )}
    </div>
  )
}

export default VideoContainer