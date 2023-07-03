import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utlis/appSlice';
import {  useSearchParams } from 'react-router-dom';
import LiveChat from './LiveChat';
import WatchPageVideoInfo from './WatchPageVideoInfo';
import CommentsThread from './CommentsThread';
import WatchPageVideos from './WatchPageVideos';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    useEffect(()=>{
    dispatch(closeMenu())
    },[])
  return (
    <div className='flex flex-col w-full'>
      <div className='p-5 flex w-full'>
        <div>
        <iframe width="1000" height="500" 
        src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
        </div>
        <div className='w-full'>
         <LiveChat/>
        </div>
      </div>
      <div className='flex mx-5 justify-between '>
        <div className='flex flex-col w-[70%]'>
          <WatchPageVideoInfo/>
          <div className="flex flex-row h-[70vh] w-[100%] justify-between ">
              <div className="w-full">
                <CommentsThread videoID={searchParams.get("v")} />
              </div>
            </div>
        </div>
        <div className="w-[30%]">
            <div className="ml-5">
              <WatchPageVideos/>
            </div>
          </div>
      </div>

    
    </div>
    
  )
}

export default WatchPage