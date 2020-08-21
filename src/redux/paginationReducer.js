import { Map } from "immutable"
import { SET_PAGE } from "./types"

const initialState = Map(
  {
    currentPage: 1,
    perPage: 5
  }
)

export const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE: return state.set('currentPage', action.payload)
    default: return state
  }
}