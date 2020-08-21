import React from 'react'
import { NavLink } from 'react-router-dom'
import { StoryBlock } from '../components/StoryBlock/StoryBlock'
import { useSelector, useDispatch } from 'react-redux'
import { getStory, getCurrentPage, getPaginatedRecords, getPageCount } from '../redux/selectors'
import { Pagination } from '@material-ui/lab';
import { setPage } from '../redux/actions'

export const Story = () => {
  const dispatch = useDispatch()

  const story = useSelector(state => getStory(state))
  const currentPage = useSelector(state => getCurrentPage(state))
  const paginatedRecords = useSelector(state => getPaginatedRecords(state))
  const pageCount = useSelector(state => getPageCount(state))

  const handleChangePage = (_, value) => dispatch(setPage(value))

  return (
    <div className="page-wrapper">
      <div className="flex aifs aic title-cover">
        <NavLink className="backLink" to="/"><i className="fas fa-arrow-left"></i></NavLink>
        <h1 className="title">История</h1>
      </div>
      <div className="wrapper">
        {paginatedRecords.map(item => <StoryBlock key={item.get('id')} item={item} />)}
        {story.size > 0 && (
          <div className="paginationCustom">
            <Pagination count={pageCount} color="primary" page={currentPage} onChange={handleChangePage} />
          </div>
        )}
        {!paginatedRecords.size && <p>История картинок появится здесь</p>}
      </div>
    </div>
  )
}
