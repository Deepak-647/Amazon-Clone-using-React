import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import { toggleMenu } from "../utlis/appSlice";
import { Youtube_Search_API } from "../utlis/constants";
import SearchBar from "./SearchBar";
// import { Link } from "react-router-dom";

const Head = () => {
  // eslint-disable-next-line
  const [searchQuery, setSearchQuery] = useState("");
  // eslint-disable-next-line
  const [suggestions, setSuggestions] = useState([]);
  // const[showSuggestions,setShowSuggestions] =useState(false);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(Youtube_Search_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='flex justify-between items-center p-3 h-13'>
      <div className="flex items-center  ">
       <FontAwesomeIcon onClick={() => toggleMenuHandler()}
        className="cursor-pointer mx-6"
         icon={faBars} size="lg"
         style={{color: "#000000",}} 
        />
        <a href="/">
          <img
            alt="logo"
            className="h-6 ml-3"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <SearchBar />
      <div>
        <FontAwesomeIcon icon={faUser} size="lg" />
      </div>
    </div>
  );
};

export default Head;
