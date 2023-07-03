import React, { useEffect, useState } from "react";
import { Google_API_Key } from "../utlis/constants";
import { useSearchParams } from "react-router-dom";
import { showSuggestionsContainer } from "../utlis/showSearchSuggestionsSlice";
import { useDispatch } from "react-redux";
import SearchResultsCard from "./SearchResultsCard";

const SearchContainer = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();
  const query = searchParams.get("search_query");

  useEffect(() => {
    const SEARCH_RESULTS_API =
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&safeSearch=moderate&key=` +
      Google_API_Key;
    fetchSearchResults(SEARCH_RESULTS_API);
    // eslint-disable-next-line
  }, [query]);

  const fetchSearchResults = async (SEARCH_RESULTS_API) => {
    const data = await fetch(SEARCH_RESULTS_API);
    const json = await data.json();
    setSearchResults(json?.items);
    console.log(json?.items);
    console.log(json?.items);
    dispatch(showSuggestionsContainer(false));
  };
  // early return
  if (!searchResults) return null;
  return (
    <>
      <div className="w-10/12 h-[44rem] overflow-y-scroll">
        {searchResults.map((result) => (
          <SearchResultsCard
            key={
              result?.id?.videoId ? result?.id?.videoId : result?.id?.channelId
            }
            data={result}
            isChannel={result?.id?.kind === "youtube#channel" ? true : false}
          />
        ))}
      </div>
    </>
  );
};

export default SearchContainer;
