import { combineReducers } from "redux";
import storiesReducer from "../stories-module/store/stories.reducer";

export const reducers = combineReducers({
  storiesState: storiesReducer,
});
