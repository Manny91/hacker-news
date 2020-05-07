import { Story } from "../services/stories.service";

export const PERFORM_GET_STORIES = "[Stories] Perform Get Stories";
export const PERFORM_GET_STORIES_SUCCESS =
  "[Stories] Perform Get Stories Success";
export const PERFORM_GET_STORIES_ERROR = "[Stories] Perform Get Stories Error";
const SELECT_STORIES = "[Stories] Select Stories";
export const PERFORM_GET_STORIES_DETAIL =
  "[Stories] Perform Get Stories Detail";
export const PERFORM_GET_STORIES_DETAIL_SUCCESS =
  "[Stories] Perform Get Stories Detail Success";
export const PERFORM_GET_STORIES_DETAIL_ERROR =
  "[Stories] Perform Get Stories Detail Error";

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

export type SelectStoriesAction = {
  type: "[Stories] Select Stories";
  payload: number[];
};
export const performSelectStoriesAction = (
  payload: number[]
): SelectStoriesAction => ({
  type: SELECT_STORIES,
  payload,
});

export type GetStoriesDetailAction = {
  type: "[Stories] Perform Get Stories Detail";
  payload: number[];
};
export const performGetStoriesDetailAction = (
  payload: number[]
): GetStoriesDetailAction => ({
  type: PERFORM_GET_STORIES_DETAIL,
  payload,
});

export type GetStoriesDetailSuccessAction = {
  type: "[Stories] Perform Get Stories Detail Success";
  payload: Story[];
};
export const performGetStoriesDetailSuccessAction = (
  payload: Story[]
): GetStoriesDetailSuccessAction => ({
  type: PERFORM_GET_STORIES_DETAIL_SUCCESS,
  payload,
});

export type GetStoriesDetailErrorAction = {
  type: "[Stories] Perform Get Stories Detail Error";
  payload: string;
};
export const performGetStoriesDetailErrorAction = (
  payload: string
): GetStoriesDetailErrorAction => ({
  type: PERFORM_GET_STORIES_DETAIL_ERROR,
  payload,
});

export type StoriesActions =
  | GetStoriesAction
  | GetStoriesSuccessAction
  | GetStoriesErrorAction
  | SelectStoriesAction
  | GetStoriesDetailAction
  | GetStoriesDetailSuccessAction
  | GetStoriesDetailErrorAction;
