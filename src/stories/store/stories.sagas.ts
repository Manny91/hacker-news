import {
  PERFORM_GET_STORIES,
  performGetStoriesSuccessAction,
  performGetStoriesErrorAction,
  PERFORM_GET_STORY_DETAIL,
  GetStoryDetailAction,
  performGetStoryDetailErrorAction,
  performGetStoryDetailSuccessAction,
} from "./stories.actions";
import { all, takeLatest, call, put } from "redux-saga/effects";
import newsService from "../services/stories.service";

export function* storiesSaga() {
  yield all([
    takeLatest(PERFORM_GET_STORIES, performGetStoriesSaga),
    takeLatest(PERFORM_GET_STORY_DETAIL, performGetStoryDetailSaga),
  ]);
}
export function* performGetStoriesSaga() {
  try {
    const response = yield call(newsService.getTopStories);
    yield put(performGetStoriesSuccessAction(response));
  } catch (error) {
    yield put(performGetStoriesErrorAction(error.message));
  }
}

export function* performGetStoryDetailSaga(action: GetStoryDetailAction) {
  try {
    const response = yield call(newsService.getStoryDetail, action.payload);
    yield put(performGetStoryDetailSuccessAction(response));
  } catch (error) {
    yield put(performGetStoryDetailErrorAction(error.message));
  }
}
