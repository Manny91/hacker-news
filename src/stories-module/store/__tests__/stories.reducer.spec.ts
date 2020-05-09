import {
  PERFORM_GET_STORIES,
  GetStoriesAction,
  GetStoriesSuccessAction,
  PERFORM_GET_STORIES_SUCCESS,
  GetStoriesErrorAction,
  PERFORM_GET_STORIES_ERROR,
  PERFORM_GET_STORIES_DETAIL,
  GetStoriesDetailAction,
  GetStoriesDetailSuccessAction,
  PERFORM_GET_STORIES_DETAIL_SUCCESS,
  GetStoriesDetailErrorAction,
  PERFORM_GET_STORIES_DETAIL_ERROR,
  GetMostRecentStoriesSuccessAction,
  PERFORM_GET_MOST_RECENT_STORIES,
  GetMostRecentStoriesAction,
  PERFORM_GET_MOST_RECENT_STORIES_SUCCESS,
  GetMostRecentStoriesErrorAction,
  PERFORM_GET_MOST_RECENT_STORIES_ERROR,
} from "../stories.actions";
import storiesReducer, { StoriesState } from "../stories.reducer";
import { Story } from "../../services/stories.service";

const defaultState: StoriesState = {
  loadingStories: true,
  loadingStoriesDetail: false,
  selectedStories: [],
  error: "",
  storiesId: [],
  storiesDictionary: {},
  mostRecentStoriesId: [],
  loadingMostRecentStories: true,
  selectedMostRecentStories: [],
};

describe("Stories Reducer", () => {
  // this could be potentially changed to table tests I'll leave it for later
  it("Sets the expected state for performing GetStoriesAction", () => {
    const action: GetStoriesAction = { type: PERFORM_GET_STORIES };
    const expectedState = {
      ...defaultState,
      loadingStories: true,
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
      loadingStories: false,
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
      loadingStories: false,
      error: payload,
    };

    const actualState = storiesReducer(defaultState, action);
    expect(actualState).toEqual(expectedState);
  });

  it("Sets the expected state for performing GetStoriesDetailAction", () => {
    const action: GetStoriesDetailAction = {
      type: PERFORM_GET_STORIES_DETAIL,
      payload: [1, 2, 3, 4, 5],
    };
    const expectedState = {
      ...defaultState,
      loadingStoriesDetail: true,
    };

    const actualState = storiesReducer(defaultState, action);
    expect(actualState).toEqual(expectedState);
  });

  it("Sets the expected state for performing GetStoriesDetailSuccessAction", () => {
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
    const stories = [story];
    const action: GetStoriesDetailSuccessAction = {
      type: PERFORM_GET_STORIES_DETAIL_SUCCESS,
      payload: stories,
    };
    const expectedState: StoriesState = {
      ...defaultState,
      loadingStoriesDetail: false,
      storiesDictionary: { 9129911: { ...story } },
    };

    const actualState = storiesReducer(defaultState, action);
    expect(actualState).toEqual(expectedState);
  });

  it("Sets the expected state for performing GetStoriesDetailErrorAction", () => {
    const payload = "error";

    const action: GetStoriesDetailErrorAction = {
      type: PERFORM_GET_STORIES_DETAIL_ERROR,
      payload,
    };
    const expectedState: StoriesState = {
      ...defaultState,
      loadingStoriesDetail: false,
      error: payload,
    };

    const actualState = storiesReducer(defaultState, action);
    expect(actualState).toEqual(expectedState);
  });

  it("Sets the expected state for performing GetStoriesAction", () => {
    const action: GetMostRecentStoriesAction = {
      type: PERFORM_GET_MOST_RECENT_STORIES,
    };
    const expectedState = {
      ...defaultState,
      loadingMostRecentStories: true,
    };

    const actualState = storiesReducer(defaultState, action);
    expect(actualState).toEqual(expectedState);
  });

  it("Sets the expected state for performing GetMostRecentStoriesSuccessAction", () => {
    const mostRecentStoriesId = [1, 2, 3, 4, 5, 6, 7];
    const action: GetMostRecentStoriesSuccessAction = {
      type: PERFORM_GET_MOST_RECENT_STORIES_SUCCESS,
      payload: mostRecentStoriesId,
    };
    const expectedState: StoriesState = {
      ...defaultState,
      loadingMostRecentStories: false,
      mostRecentStoriesId,
    };

    const actualState = storiesReducer(defaultState, action);
    expect(actualState).toEqual(expectedState);
  });

  it("Sets the expected state for performing GetStoriesErrorAction", () => {
    const payload = "error";

    const action: GetMostRecentStoriesErrorAction = {
      type: PERFORM_GET_MOST_RECENT_STORIES_ERROR,
      payload,
    };
    const expectedState: StoriesState = {
      ...defaultState,
      loadingMostRecentStories: false,
      error: payload,
    };

    const actualState = storiesReducer(defaultState, action);
    expect(actualState).toEqual(expectedState);
  });
});
