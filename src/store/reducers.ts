import { combineReducers } from "redux";
import newsReducer from "../news/store/news.reducer";

export const reducers = combineReducers({
  newssState: newsReducer,
});
