import {
  PERFORM_GET_NEWS,
  performGetNewsSuccessAction,
  performGetNewsErrorAction,
} from "./news.actions";
import { all, takeLatest, call, put } from "redux-saga/effects";
import newsService from "../services/news.service";

export function* newsSaga() {
  yield all([takeLatest(PERFORM_GET_NEWS, performGetNewsSaga)]);
}
export function* performGetNewsSaga() {
  try {
    const response = yield call(newsService.getNewStories);
    yield put(performGetNewsSuccessAction(response));
  } catch (error) {
    yield put(performGetNewsErrorAction(error.message));
  }
}
