import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import showSearchSuggestionsSlice from "./showSearchSuggestionsSlice";
const store = configureStore({
     reducer:{
        app : appSlice,
        chat: chatSlice,
        showSearchSuggestions: showSearchSuggestionsSlice,
     },
})
export default store;