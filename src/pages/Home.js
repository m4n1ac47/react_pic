import React, { useMemo } from 'react'
import './Home.scss'
import { useDispatch, useSelector } from 'react-redux'
import { REQUEST_IMG } from '../redux/types'
import { getLast } from '../redux/selectors'

export const Home = () => {
  const dispatch = useDispatch()
  const picture = useSelector(state => getLast(state))

  const getImg = () => dispatch({ type: REQUEST_IMG })

  const getPic = useMemo(() => {
    if (picture) {
      return { backgroundImage: `url(${picture.getIn(['images', 'original', 'url'], '')})` }
    } else return {}
  }, [picture])

  return (
    <div className="page-wrapper">
      <div className="title-cover">
        <h1 className="title">Главная</h1>
      </div>
      <div className="wrapper">
        <div className="main-img">
          <div className="main-img__pic abs100 bg_cov" style={getPic}></div>
          <div className="abs100 flex aic jcc">
            <h1 className="main-img__title">Динамическая картинка</h1>
          </div>
        </div>
        <div className="tac">
          <div className="button tac" onClick={getImg}>Загрузить</div>
        </div>
      </div>
    </div>
  )
}
