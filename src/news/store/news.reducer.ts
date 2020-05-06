import { NewsActions } from "./news.actions";
// import { AppState } from "../../store";

export interface NewsState {
  loading: boolean;
  error: string;
  news: any[];
}

export const initialNewsState: NewsState = {
  loading: true,
  error: "",
  news: [],
};

export default function newsReducer(
  state: NewsState = initialNewsState,
  action: NewsActions
) {
  switch (action.type) {
    case "[News] Perform Get News":
      return {
        ...state,
        loading: true,
      };
    case "[News] Perform Get News Success":
      return {
        ...state,
        loading: false,
      };
    case "[News] Perform Get News Error":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

// const newsState = (state: AppState): NewsState => state.newsState;
