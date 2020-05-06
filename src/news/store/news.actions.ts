export const PERFORM_GET_NEWS = "[News] Perform Get News";
export const PERFORM_GET_NEWS_SUCCESS = "[News] Perform Get News Success";
export const PERFORM_GET_NEWS_ERROR = "[News] Perform Get News Error";
export const PERFORM_GET_MORE_NEWS = "[News] Perform Get More News";
export const PERFORM_GET_MORE_NEWS_SUCCESS =
  "[News] Perform Get More News Success";

export type GetNewsAction = {
  type: "[News] Perform Get News";
};
export const performGetNewsAction = (): GetNewsAction => ({
  type: PERFORM_GET_NEWS,
});

type GetNewsSuccessAction = {
  type: "[News] Perform Get News Success";
  payload: any; // TODO: type
};
export const performGetNewsSuccessAction = (
  payload: any // TODO: type
): GetNewsSuccessAction => ({
  type: PERFORM_GET_NEWS_SUCCESS,
  payload,
});

export type GetNewsErrorAction = {
  type: "[News] Perform Get News Error";
  payload: string;
};
export const performGetNewsErrorAction = (
  payload: string
): GetNewsErrorAction => ({
  type: PERFORM_GET_NEWS_ERROR,
  payload,
});

export type NewsActions =
  | GetNewsAction
  | GetNewsSuccessAction
  | GetNewsErrorAction;
