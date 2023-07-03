import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Youtube_Search_API } from "../utlis/constants";
import { showSuggestionsContainer } from "../utlis/showSearchSuggestionsSlice";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ResultsSuggestionContainer from "./ResultsSuggestionContainer";



const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();

  const showSuggestions = useSelector(
    (store) => store.showSearchSuggestions.show
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSearchSuggestions(searchQuery);
    }, 200);

    // eslint-disable-next-line
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const fetchSearchSuggestions = async (searchQuery) => {
    const data = await fetch(`${Youtube_Search_API}${searchQuery}`);
    const jsonData = await data.json();
    setSuggestions(jsonData[1]);
  };
  if (searchQuery !== "" && !suggestions) return null;
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex">
          <input
            type="text"
            placeholder="Search..."
            className="w-[550px] border rounded-s-full px-7"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => dispatch(showSuggestionsContainer(true))}
            onBlur={() => dispatch(showSuggestionsContainer(false))}
          />
          <Link to={`/results?search_query=${searchQuery}`}>
            <button className=" px-5 h-8 border border-gray-300 rounded-r-full">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </Link>
        </div>
        {showSuggestions && suggestions.length > 0 && (
          <div className="w-1/3 bg-slate-50 px-2 rounded-lg fixed">
            {suggestions.map((suggestion) => {
              return (
                <ResultsSuggestionContainer
                  suggestion={suggestion}
                  key={suggestion}
                />
              );
            })}
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
