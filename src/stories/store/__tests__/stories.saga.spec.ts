import {
  PERFORM_GET_STORIES,
  PERFORM_GET_STORIES_DETAIL,
  performGetStoriesDetailAction,
} from "./../stories.actions";
import {
  storiesSaga,
  performGetStoriesSaga,
  performGetStoriesDetailSaga,
} from "../stories.sagas";
import { takeLatest, all, call, takeEvery } from "redux-saga/effects";
import storiesService from "../../services/stories.service";

describe("Stories Sagas", () => {
  it("Watches the expected actions types", () => {
    const generator = storiesSaga();
    const expectedYield = all([
      takeLatest(PERFORM_GET_STORIES, performGetStoriesSaga),
      takeEvery(PERFORM_GET_STORIES_DETAIL, performGetStoriesDetailSaga),
    ]);
    const actualYield = generator.next().value;
    expect(actualYield).toEqual(expectedYield);
  });

  describe("performGetStories saga", () => {
    const generator = performGetStoriesSaga();

    it("should call storiesService.getTopStories correctly", () => {
      // we call it with no arguments
      const expectedYield = call(storiesService.getTopStories);
      const actualYield = generator.next().value;
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
