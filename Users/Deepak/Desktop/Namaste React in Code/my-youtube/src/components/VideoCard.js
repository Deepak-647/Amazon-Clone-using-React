import React from 'react'
import { convertToKAndMillion } from '../utlis/constants';

const VideoCard = ({info}) => {
    // console.log(info)
    const{snippet,statistics} = info;
    const {channelTitle,title,thumbnails}=snippet;
  return (
    <div className='p-2 w-64 cursor-pointer'>
         
        <img className='rounded-lg' alt ="thumbnail" src={thumbnails.high.url}/>
        <ul>
            <li className='font-medium text-sm'>{title}</li>
            <div className='mt-1 '>
            <li className='text-xs'>{channelTitle}</li>
            <li className='text-xs'>{convertToKAndMillion(statistics.viewCount)} views</li>
            </div>
            
        </ul>
    </div>
  )
}

export default VideoCard