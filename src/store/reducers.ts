import { combineReducers } from "redux";
import storiesReducer from "../stories/store/stories.reducer";

export const reducers = combineReducers({
  storiesState: storiesReducer,
});
