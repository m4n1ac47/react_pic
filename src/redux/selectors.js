import { createSelector } from "reselect"

export const getStory = state => state.story
export const getLast = createSelector(getStory, (story) => story.first())

export const getCurrentPage = state => state.pagination.get('currentPage')
export const getPerPage = state => state.pagination.get('perPage')

export const getPaginatedRecords = createSelector(
  getStory,
  getCurrentPage,
  getPerPage,
  (story, page, perPage) => {
    return page === 1
      ? story.slice(0, perPage)
      : story.slice(((page) * perPage) - perPage, perPage * (page))
  }
)

export const getPageCount = createSelector(
  getStory,
  getPerPage,
  (story, perPage) => {
    if (story.size > 0) {
      return Math.ceil(story.size / perPage)
    } else {
      return 1
    }
  }
)