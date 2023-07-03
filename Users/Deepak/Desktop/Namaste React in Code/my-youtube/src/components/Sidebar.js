import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faFilm,faIdCard,faFolderOpen,faClockRotateLeft,faClock,faThumbsUp,faHeart,
  faArrowTrendUp,faBagShopping,faMusic,faClapperboard,faHeadset,faNewspaper,faBook,faMedal,faShirt,faGear,faFlag,faQuestion,faCommentDots} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
 

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  
  if(!isMenuOpen) return null;

  return (
    <div>
       
      <ul className=' m-2 p-2 w-40 border-b border-black'>
        <li className='p-1 text-sm '><FontAwesomeIcon className='px-5' icon={faHouse} style={{color: "#050505", }} />Home</li>
        <li className='p-1 text-sm '><FontAwesomeIcon className='px-5' icon={faFilm} style={{color: "#050505",}} />Shorts</li>
        <li className='p-1 text-sm'><FontAwesomeIcon className='px-5' icon={faIdCard} style={{color: "#000000",}} />Subscription</li>
      </ul>
      <ul className=' m-2 p-2 w-40 border-b border-black'>
        <li className='p-1 text-sm'><FontAwesomeIcon className='px-5' icon={faFolderOpen} style={{color: "#000000",}} />Library</li>
        <li className='p-1 text-sm'><FontAwesomeIcon className='px-5' icon={faClockRotateLeft} style={{color: "#000000",}} />History</li>
       
        <li className='p-1 text-sm'><FontAwesomeIcon className='px-5' icon={faClock} style={{color: "#000000",}} />Watch Later</li>
        <li className='p-1 text-sm'><FontAwesomeIcon className='px-5' icon={faThumbsUp} style={{color: "#000000",}} />Liked Videos</li>
        <li className='p-1 text-sm'><FontAwesomeIcon className='px-5' icon={faHeart} style={{color: "#000000",}} />Favourites</li>
      </ul>
      <ul className=' m-2 p-2 w-40 border-b border-black'>
        <h1 className='px-2 font-bold mx-3'>Explore</h1>
        <a href={"/results?search_query=Trending"}>
        <li className='p-1 text-sm'><FontAwesomeIcon className='px-5' icon={faArrowTrendUp} style={{color: "#000000",}} />Trending</li>
        </a>
        <a href={"/results?search_query=Shopping"}>
        <li className='p-1 text-sm'><FontAwesomeIcon className='px-5' icon={faBagShopping} style={{color: "#000000",}} />Shopping</li>
        </a>
        <a href={"/results?search_query=Music"}>
        <li className='p-1 text-sm'><FontAwesomeIcon className='px-5' icon={faMusic} style={{color: "#000000",}} />Music</li>
        </a>
        <a href={"/results?search_query=Movies"}>
        <li className='p-1 text-sm'><FontAwesomeIcon className='px-5' icon={faClapperboard} style={{color: "#000000",}} />Movies</li>
        </a>
        <a href={"/results?search_query=Gaming"}>
        <li className='p-1 text-sm'><FontAwesomeIcon className='px-5' icon={faHeadset} style={{color: "#000000",}} />Gaming</li>
        </a>
        <a href={"/results?search_query=News"}>
        <li className='p-1 text-sm'><FontAwesomeIcon className='px-5' icon={faNewspaper} style={{color: "#000000",}} />News</li>
        </a>
        <a href={"/results?search_query=Learning"}>
        <li className='p-1 text-sm'><FontAwesomeIcon className='px-5' icon={faBook} style={{color: "#000000",}} />Learning</li>
        </a>
        <a href={"/results?search_query=Sports"}>
        <li className='p-1 text-sm'><FontAwesomeIcon className='px-5' icon={faMedal} style={{color: "#000000",}} />Sports</li>
        </a>
        <a href={"/results?search_query=Fashion"}>
        <li className='p-1 text-sm'><FontAwesomeIcon className='px-5' icon={faShirt} style={{color: "#000000",}} />Fashion</li>
        </a>
        

      </ul>
      <ul className=' m-2 p-2 w-40 border-b border-black'>
         
        <li className='p-1 text-sm'><FontAwesomeIcon className='px-5' icon={faGear} style={{color: "#000000",}} />Settings</li>
        <li className='p-1 text-sm'><FontAwesomeIcon className='px-5' icon={faFlag} style={{color: "#000000",}} />Report</li>
        <li className='p-1 text-sm'><FontAwesomeIcon className='px-5' icon={faQuestion} style={{color: "#000000",}} />Help</li>
        <li className='p-1 text-sm'><FontAwesomeIcon className='px-5' icon={faCommentDots} style={{color: "#000000",}} />Feedback</li>
      </ul>
  
    </div>
  )
}

export default Sidebar