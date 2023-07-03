import React from 'react'
import { Link } from 'react-router-dom'
import ScrollToTop from '../utlis/scrollToTop'

const VideoSuggestionsCard = ({info}) => {
    const {snippet} =info;
    const { channelTitle, title, thumbnails } = snippet;
  return (
     <Link to={"/watch?v=" + info.id.videoId} key={info.id.videoId}>
        <ScrollToTop/>
        <div className="flex flex-row rounded-lg mt-2  transition duration-400 ease-in-out hover:scale-[1.02] hover:shadow-slate-400">
        <img
          className="rounded-lg w-[180px] "
          alt="thumbnail"
          src={thumbnails.medium.url}
        />
        <ul key="list" className='ml-2'>
          <li key="title" className="p-1 text-xs font-bold">
            {title}
          </li>
          <li key="channelTitle" className="px-1 text-xs text-stone-500">
            {channelTitle}
          </li>
        
        </ul>
      </div>
     </Link>

  )
}

export default VideoSuggestionsCard