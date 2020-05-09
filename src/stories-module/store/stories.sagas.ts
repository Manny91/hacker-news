import {
  PERFORM_GET_STORIES,
  performGetStoriesSuccessAction,
  performGetStoriesErrorAction,
  PERFORM_GET_STORIES_DETAIL,
  performGetStoriesDetailErrorAction,
  GetStoriesDetailAction,
  performGetStoriesDetailSuccessAction,
  PERFORM_GET_MOST_RECENT_STORIES,
  performGetMostRecentStoriesSuccessAction,
  performGetMostRecentStoriesErrorAction,
} from "./stories.actions";
import { all, takeLatest, call, put, takeEvery } from "redux-saga/effects";
import storiesService from "../services/stories.service";

export function* storiesSaga() {
  yield all([
    takeLatest(PERFORM_GET_STORIES, performGetStoriesSaga),
    takeLatest(
      PERFORM_GET_MOST_RECENT_STORIES,
      performGetMostRecentStoriesSaga
    ),
    takeEvery(PERFORM_GET_STORIES_DETAIL, performGetStoriesDetailSaga),
  ]);
}
export function* performGetStoriesSaga() {
  try {
    const response = yield call(storiesService.getTopStories);
    yield put(performGetStoriesSuccessAction(response));
  } catch (error) {
    yield put(performGetStoriesErrorAction(error.message));
  }
}

export function* performGetMostRecentStoriesSaga() {
  try {
    const response = yield call(storiesService.getMostRecentStories);
    yield put(performGetMostRecentStoriesSuccessAction(response));
  } catch (error) {
    yield put(performGetMostRecentStoriesErrorAction(error.message));
  }
}

export function* performGetStoriesDetailSaga(action: GetStoriesDetailAction) {
  try {
    const response = yield all(
      action.payload.map((storyId) =>
        call(storiesService.getStoryDetail, storyId)
      )
    );
    yield put(performGetStoriesDetailSuccessAction(response));
  } catch (error) {
    yield put(performGetStoriesDetailErrorAction(error.message));
  }
}
