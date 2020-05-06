import {
  PERFORM_GET_STORIES,
  PERFORM_GET_STORY_DETAIL,
  performGetStoriesAction,
  performGetStoryDetailAction,
} from "./../stories.actions";
import {
  storiesSaga,
  performGetStoriesSaga,
  performGetStoryDetailSaga,
} from "../stories.sagas";
import { takeLatest, all, call } from "redux-saga/effects";
import storiesService from "../../services/stories.service";

describe("Stories Sagas", () => {
  it("Watches the expected actions types", () => {
    const generator = storiesSaga();
    const expectedYield = all([
      takeLatest(PERFORM_GET_STORIES, performGetStoriesSaga),
      takeLatest(PERFORM_GET_STORY_DETAIL, performGetStoryDetailSaga),
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

  describe("performGetPokemonDetail saga", () => {
    const storyId = 1;
    const action = performGetStoryDetailAction(storyId);
    const detailGenerator = performGetStoryDetailSaga(action);

    it("should call storiesService.getStoryDetail correctly", () => {
      const expectedYield = call(storiesService.getStoryDetail, storyId);
      const actualYield = detailGenerator.next().value;
      expect(actualYield).toEqual(expectedYield);
    });
  });
});
