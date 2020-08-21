import { List, Map } from "immutable"
import { FETCH_IMG, REMOVE_IMG } from "./types"

const initialState = List([])

export const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMG: return state.unshift(Map(action.payload))
    case REMOVE_IMG: return state.filter(story => story.get('id') !== action.payload)
    default: return state
  }
}