import { Story } from "../services/stories.service";

export const PERFORM_GET_STORIES = "[Stories] Perform Get Stories";
export const PERFORM_GET_STORIES_SUCCESS =
  "[Stories] Perform Get Stories Success";
export const PERFORM_GET_STORIES_ERROR = "[Stories] Perform Get Stories Error";
export const PERFORM_GET_STORY_DETAIL = "[Stories] Perform Get Story Detail";
export const PERFORM_GET_STORY_DETAIL_SUCCESS =
  "[Stories] Perform Get Story Detail Success";
export const PERFORM_GET_STORY_DETAIL_ERROR =
  "[Stories] Perform Get Story Detail Error";

export type GetStoriesAction = {
  type: "[Stories] Perform Get Stories";
};
export const performGetStoriesAction = (): GetStoriesAction => ({
  type: PERFORM_GET_STORIES,
});

export type GetStoriesSuccessAction = {
  type: "[Stories] Perform Get Stories Success";
  payload: number[];
};
export const performGetStoriesSuccessAction = (
  payload: number[]
): GetStoriesSuccessAction => ({
  type: PERFORM_GET_STORIES_SUCCESS,
  payload,
});

export type GetStoriesErrorAction = {
  type: "[Stories] Perform Get Stories Error";
  payload: string;
};
export const performGetStoriesErrorAction = (
  payload: string
): GetStoriesErrorAction => ({
  type: PERFORM_GET_STORIES_ERROR,
  payload,
});

export type GetStoryDetailAction = {
  type: "[Stories] Perform Get Story Detail";
  payload: number;
};
export const performGetStoryDetailAction = (
  payload: number
): GetStoryDetailAction => ({
  type: PERFORM_GET_STORY_DETAIL,
  payload,
});

export type GetStoryDetailSuccessAction = {
  type: "[Stories] Perform Get Story Detail Success";
  payload: Story;
};
export const performGetStoryDetailSuccessAction = (
  payload: Story
): GetStoryDetailSuccessAction => ({
  type: PERFORM_GET_STORY_DETAIL_SUCCESS,
  payload,
});

export type GetStoryDetailErrorAction = {
  type: "[Stories] Perform Get Story Detail Error";
  payload: string;
};
export const performGetStoryDetailErrorAction = (
  payload: string
): GetStoryDetailErrorAction => ({
  type: PERFORM_GET_STORY_DETAIL_ERROR,
  payload,
});

export type StoriesActions =
  | GetStoriesAction
  | GetStoriesSuccessAction
  | GetStoriesErrorAction
  | GetStoryDetailAction
  | GetStoryDetailSuccessAction
  | GetStoryDetailErrorAction;
