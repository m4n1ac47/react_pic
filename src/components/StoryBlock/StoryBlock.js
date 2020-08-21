import React from 'react'
import './StoryBlock.scss'
import { useDispatch, useSelector } from 'react-redux'
import { removeStory, setPage } from '../../redux/actions'
import moment from 'moment'
import { getCurrentPage, getPaginatedRecords } from '../../redux/selectors'

export const StoryBlock = ({ item }) => {
  const dispatch = useDispatch()

  const currentPage = useSelector(state => getCurrentPage(state))
  const paginatedRecords = useSelector(state => getPaginatedRecords(state))

  const imgStyle = {
    backgroundImage: `url(${item.getIn(['images', 'original', 'url'], '')})`
  }

  const title = item.get('title')
  const date = moment.unix(item.get('frontDate')).format('YYYY-MM-DD HH:mm:ss')

  const removeItem = id => {
    dispatch(removeStory(id))

    if (paginatedRecords.size - 1 === 0) dispatch(setPage(currentPage - 1))
  }

  return (
    <div className="story">
      <div className="story__img bg_cov" style={imgStyle}>
        <div className="remove-button" onClick={() => removeItem(item.get('id'))}>
          <i className="fas fa-trash"></i>
        </div>
      </div>
      <div className="story__info">
        <h2 className="story__title">{title || 'Заголовок картинки'}</h2>
        <p className="story__text">{date}</p>
      </div>
    </div>
  )
}
