import { StoriesActions } from "./stories.actions";
import { AppState } from "../../store";
import { createSelector } from "reselect";
import { Story } from "../services/stories.service";

interface StoryDictionary<T> {
  [Key: string]: T;
}
export interface StoriesState {
  loadingStories: boolean;
  error: string;
  storiesId: number[];
  storiesDictionary: StoryDictionary<Story>;
  loadingStoriesDetail: boolean;
  selectedStories: number[];
  mostRecentStoriesId: number[];
  loadingMostRecentStories: boolean;
  selectedMostRecentStories: number[];
}

export const initialStoriesState: StoriesState = {
  loadingStories: true,
  error: "",
  storiesId: [],
  storiesDictionary: {},
  loadingStoriesDetail: false,
  selectedStories: [],
  mostRecentStoriesId: [],
  loadingMostRecentStories: true,
  selectedMostRecentStories: [],
};

export default function storiesReducer(
  state = initialStoriesState,
  action: StoriesActions
) {
  switch (action.type) {
    case "[Stories] Perform Get Stories":
      return {
        ...state,
        loadingStories: true,
      };
    case "[Stories] Perform Get Stories Success":
      return {
        ...state,
        storiesId: action.payload,
        loadingStories: false,
      };
    case "[Stories] Perform Get Stories Error":
      return {
        ...state,
        error: action.payload,
        loadingStories: false,
      };
    case "[Stories] Perform Get Stories Detail":
      return {
        ...state,
        error: "",
        loadingStoriesDetail: true,
      };
    case "[Stories] Perform Get Stories Detail Success":
      return {
        ...state,
        loadingStoriesDetail: false,
        storiesDictionary: addStories(state.storiesDictionary, action.payload),
      };
    case "[Stories] Perform Get Stories Detail Error":
      return {
        ...state,
        loadingStoriesDetail: false,
        error: action.payload,
      };
    case "[Stories] Select Stories":
      return {
        ...state,
        selectedStories: action.payload,
      };
    case "[Stories] Perform Get Most Recent Stories":
      return {
        ...state,
        loadingMostRecentStories: true,
      };
    case "[Stories] Perform Get Most Recent Stories Success":
      return {
        ...state,
        mostRecentStoriesId: action.payload,
        loadingMostRecentStories: false,
      };
    case "[Stories] Perform Get Most Recent Stories Error":
      return {
        ...state,
        error: action.payload,
        loadingMostRecentStories: false,
      };
    case "[Stories] Select Most Recent Stories":
      return {
        ...state,
        selectedMostRecentStories: action.payload,
      };
    default:
      return state;
  }
}

const addStories = (
  storedStories: StoryDictionary<Story>,
  stories: Story[]
): StoryDictionary<Story> => {
  const storiesCopy = { ...storedStories };
  stories.forEach((story) => {
    storiesCopy[story.id] = story;
  });
  return storiesCopy;
};
const storiesState = (state: AppState): StoriesState => state.storiesState;
export const getStoriesId = createSelector(
  storiesState,
  (slice) => slice.storiesId
);
export const getStoriesError = createSelector(
  storiesState,
  (slice) => slice.error
);
export const getStoriesLoading = createSelector(
  storiesState,
  (slice) => slice.loadingStories
);

export const getSelectedStories = createSelector(
  storiesState,
  (slice) => slice.selectedStories
);
export const getStoriesDictionary = createSelector(
  storiesState,
  (slice) => slice.storiesDictionary
);
export const getLoadingStoriesDetail = createSelector(
  storiesState,
  (slice) => slice.loadingStoriesDetail
);
export const getSelectedStoriesFromDictionary = createSelector(
  getSelectedStories,
  getStoriesDictionary,
  getLoadingStoriesDetail,
  (selectedStories, storiesDictionary, loadingStoriesDetail) => {
    return !loadingStoriesDetail
      ? selectedStories.map((id) => storiesDictionary[id])
      : [];
  }
);

export const getMostRecentStoriesId = createSelector(
  storiesState,
  (slice) => slice.mostRecentStoriesId
);

export const getMostRecentStoriesLoading = createSelector(
  storiesState,
  (slice) => slice.loadingMostRecentStories
);

export const getSelectedMostRecentStories = createSelector(
  storiesState,
  (slice) => slice.selectedMostRecentStories
);
export const getSelectedMostRecentStoriesFromDictionary = createSelector(
  getSelectedMostRecentStories,
  getStoriesDictionary,
  getLoadingStoriesDetail,
  (selectedStories, storiesDictionary, loadingStoriesDetail) => {
    return !loadingStoriesDetail
      ? selectedStories.map((id) => storiesDictionary[id])
      : [];
  }
);
