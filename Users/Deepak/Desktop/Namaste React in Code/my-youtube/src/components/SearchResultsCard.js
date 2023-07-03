import React from 'react'
import { Link } from 'react-router-dom';

const SearchResultsCard = ({data}) => {
    if(!data) return null;
    const { snippet, id } = data;
  return (
     
    <Link to={`/watch?v=${id.videoId}`}>
      <div className="flex ml-[5%] w-[70%] scroll-smooth  mt-4 justify-around my-2 p-2 rounded-lg ">
        <img
          className="h-44 w-96 rounded-lg"
          src={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
        />
        <div className="w-2/3 mx-4 ">
          <p className="text-md font-bold mb-2 ">{snippet?.title}</p>
          <p className="text-md  mb-2">{snippet?.channelTitle}</p>
          <p className="text-sm ">{snippet?.description}</p>
        </div>
      </div>
    </Link>
     
    
  )
}

export default SearchResultsCard