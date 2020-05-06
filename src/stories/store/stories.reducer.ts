import { StoriesActions } from "./stories.actions";
import { AppState } from "../../store";
import { createSelector } from "reselect";
import { Story } from "../services/stories.service";

interface StoryDictionary<T> {
  [Key: string]: T;
}
export interface StoriesState {
  loading: boolean;
  error: string;
  storiesId: number[];
  storiesDictionary: StoryDictionary<Story>;
}

export const initialStoriesState: StoriesState = {
  loading: true,
  error: "",
  storiesId: [],
  storiesDictionary: {},
};

export default function storiesReducer(
  state = initialStoriesState,
  action: StoriesActions
) {
  switch (action.type) {
    case "[Stories] Perform Get Stories":
    case "[Stories] Perform Get Story Detail":
      return {
        ...state,
        loading: true,
      };
    case "[Stories] Perform Get Stories Success":
      return {
        ...state,
        storiesId: action.payload,
        loading: false,
      };
    case "[Stories] Perform Get Stories Error":
    case "[Stories] Perform Get Story Detail Error":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case "[Stories] Perform Get Story Detail Success":
      return {
        ...state,
        loading: false,
        storiesDictionary: addStory(state.storiesDictionary, action.payload),
      };
    default:
      return state;
  }
}

const addStory = (
  storedStories: StoryDictionary<Story>,
  story: Story
): StoryDictionary<Story> => {
  const storiesCopy = { ...storedStories };
  storiesCopy[story.id] = story;
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
  (slice) => slice.loading
);
