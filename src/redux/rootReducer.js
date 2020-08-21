import { combineReducers } from "redux";
import { storyReducer } from "./storyReducer";
import { paginationReducer } from "./paginationReducer";

export const rootReducer = combineReducers({
  story: storyReducer,
  pagination: paginationReducer
})
