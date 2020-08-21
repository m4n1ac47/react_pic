import { takeEvery, put, call } from 'redux-saga/effects'
import { FETCH_IMG, REQUEST_IMG } from './types'
import { PictureController } from '../models/pictureController'

export function* sagaWatcher() {
  yield takeEvery(REQUEST_IMG, sagaWorker)
}

function* sagaWorker() {
  const payload = yield call(PictureController.getImg)
  yield put({ type: FETCH_IMG, payload })
}
