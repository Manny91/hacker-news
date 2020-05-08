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
}

export const initialStoriesState: StoriesState = {
  loadingStories: true,
  error: "",
  storiesId: [],
  storiesDictionary: {},
  loadingStoriesDetail: false,
  selectedStories: [],
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
