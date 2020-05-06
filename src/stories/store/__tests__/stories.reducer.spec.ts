import {
  PERFORM_GET_STORIES,
  GetStoriesAction,
  GetStoriesSuccessAction,
  PERFORM_GET_STORIES_SUCCESS,
  GetStoriesErrorAction,
  PERFORM_GET_STORIES_ERROR,
  GetStoryDetailAction,
  PERFORM_GET_STORY_DETAIL,
  PERFORM_GET_STORY_DETAIL_SUCCESS,
  GetStoryDetailSuccessAction,
} from "./../stories.actions";
import { AppState } from "../../../store";
import { OutputSelector } from "reselect";
import storiesReducer, { StoriesState } from "../stories.reducer";
import { Story } from "../../services/stories.service";

const defaultState: StoriesState = {
  loading: true,
  error: "",
  storiesId: [],
  storiesDictionary: {},
};

describe("Stories Reducer", () => {
  // this could be potentially changed to table tests I'll leave it for later
  it("Sets the expected state for performing GetStoriesAction", () => {
    const action: GetStoriesAction = { type: PERFORM_GET_STORIES };
    const expectedState = {
      ...defaultState,
      loading: true,
    };

    const actualState = storiesReducer(defaultState, action);
    expect(actualState).toEqual(expectedState);
  });

  it("Sets the expected state for performing GetStoriesSuccessAction", () => {
    const storiesId = [1, 2, 3, 4, 5, 6, 7];
    const action: GetStoriesSuccessAction = {
      type: PERFORM_GET_STORIES_SUCCESS,
      payload: storiesId,
    };
    const expectedState: StoriesState = {
      ...defaultState,
      loading: false,
      storiesId,
    };

    const actualState = storiesReducer(defaultState, action);
    expect(actualState).toEqual(expectedState);
  });

  it("Sets the expected state for performing GetStoriesErrorAction", () => {
    const payload = "error";

    const action: GetStoriesErrorAction = {
      type: PERFORM_GET_STORIES_ERROR,
      payload,
    };
    const expectedState: StoriesState = {
      ...defaultState,
      loading: false,
      error: payload,
    };

    const actualState = storiesReducer(defaultState, action);
    expect(actualState).toEqual(expectedState);
  });

  it("Sets the expected state for performing GetStoryDetailAction", () => {
    const action: GetStoryDetailAction = {
      type: PERFORM_GET_STORY_DETAIL,
      payload: 1,
    };
    const expectedState = {
      ...defaultState,
      loading: true,
    };

    const actualState = storiesReducer(defaultState, action);
    expect(actualState).toEqual(expectedState);
  });

  it("Sets the expected state for performing GetStorySuccessAction", () => {
    const story = {
      by: "theyeti",
      descendants: 16,
      id: 9129911,
      kids: [
        9129990,
        9130206,
        9130376,
        9130273,
        9131289,
        9131728,
        9137773,
        9132476,
      ],
      score: 78,
      text: "",
      time: 1425261906,
      title: "Venture Capital in the 1980s",
      type: "story",
      url: "http://reactionwheel.net/2015/01/80s-vc.html",
    } as Story;
    const action: GetStoryDetailSuccessAction = {
      type: PERFORM_GET_STORY_DETAIL_SUCCESS,
      payload: story,
    };
    const expectedState: StoriesState = {
      ...defaultState,
      loading: false,
      storiesDictionary: { 9129911: { ...story } },
    };

    const actualState = storiesReducer(defaultState, action);
    expect(actualState).toEqual(expectedState);
  });

  it("Sets the expected state for performing GetStoriesErrorAction", () => {
    const payload = "error";

    const action: GetStoriesErrorAction = {
      type: PERFORM_GET_STORIES_ERROR,
      payload,
    };
    const expectedState: StoriesState = {
      ...defaultState,
      loading: false,
      error: payload,
    };

    const actualState = storiesReducer(defaultState, action);
    expect(actualState).toEqual(expectedState);
  });
});
