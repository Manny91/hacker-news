import {
  performGetMostRecentStoriesErrorAction,
  performGetStoriesErrorAction,
  performGetStoriesSuccessAction,
  performGetMostRecentStoriesSuccessAction,
} from "./../stories.actions";
import {
  PERFORM_GET_STORIES,
  PERFORM_GET_STORIES_DETAIL,
  performGetStoriesDetailAction,
  PERFORM_GET_MOST_RECENT_STORIES,
} from "../stories.actions";
import {
  storiesSaga,
  performGetStoriesSaga,
  performGetStoriesDetailSaga,
  performGetMostRecentStoriesSaga,
} from "../stories.sagas";
import { takeLatest, all, call, takeEvery, put } from "redux-saga/effects";
import storiesService from "../../services/stories.service";

describe("Stories Sagas", () => {
  it("Watches the expected actions types", () => {
    const generator = storiesSaga();
    const expectedYield = all([
      takeLatest(PERFORM_GET_STORIES, performGetStoriesSaga),
      takeLatest(
        PERFORM_GET_MOST_RECENT_STORIES,
        performGetMostRecentStoriesSaga
      ),
      takeEvery(PERFORM_GET_STORIES_DETAIL, performGetStoriesDetailSaga),
    ]);
    const actualYield = generator.next().value;
    expect(actualYield).toEqual(expectedYield);
  });

  describe("performGetStories saga", () => {
    const generator = performGetStoriesSaga();

    it("should call storiesService.getTopStories correctly", () => {
      const expectedYield = call(storiesService.getTopStories);
      const actualYield = generator.next().value;
      expect(actualYield).toEqual(expectedYield);
    });

    it("should put performGetStoriesSuccessAction after a successful call", () => {
      const response = [1, 2, 3, 4, 5, 6];
      const expectedYield = put(performGetStoriesSuccessAction(response));
      const actualYield = generator.next(response).value;
      expect(actualYield).toEqual(expectedYield);
    });

    it("should put performGetStoriesErrorAction after a failing call", () => {
      const error = { message: "test error" };
      const expectedYield = put(performGetStoriesErrorAction(error.message));
      const actualYield = generator.throw(error).value;
      expect(actualYield).toEqual(expectedYield);
    });
  });

  describe("performGetMostRecentStories saga", () => {
    const generator = performGetMostRecentStoriesSaga();
    it("should call storiesService.getMostRecentStories correctly", () => {
      const expectedYield = call(storiesService.getMostRecentStories);
      const actualYield = generator.next().value;
      expect(actualYield).toEqual(expectedYield);
    });
    it("should put performGetMostRecentStoriesSuccessAction after a successful call", () => {
      const response = [1, 2, 3, 4, 5, 6];
      const expectedYield = put(
        performGetMostRecentStoriesSuccessAction(response)
      );
      const actualYield = generator.next(response).value;
      expect(actualYield).toEqual(expectedYield);
    });
    it("should put performGetMostRecentStoriesErrorAction after a failing call", () => {
      const error = { message: "test error" };
      const expectedYield = put(
        performGetMostRecentStoriesErrorAction(error.message)
      );
      const actualYield = generator.throw(error).value;
      expect(actualYield).toEqual(expectedYield);
    });
  });

  describe("performStoriesDetailAction saga", () => {
    const storyIds = [1, 2, 3];
    const action = performGetStoriesDetailAction(storyIds);
    const detailGenerator = performGetStoriesDetailSaga(action);

    it("should call storiesService.getStoryDetail correctly", () => {
      const expectedYield = all(
        action.payload.map((storyId) =>
          call(storiesService.getStoryDetail, storyId)
        )
      );
      const actualYield = detailGenerator.next().value;
      expect(actualYield).toEqual(expectedYield);
    });
  });
});
