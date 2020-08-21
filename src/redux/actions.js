import { REMOVE_IMG, SET_PAGE } from "./types";

export const removeStory = id => ({ type: REMOVE_IMG, payload: id })
export const setPage = pageNumber => ({ type: SET_PAGE, payload: pageNumber })