import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { reducers } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { sagas } from "./sagas";
import { Dispatch } from "react";
import { StoriesActions } from "../stories-module/store/stories.actions";
import { StoriesState } from "../stories-module/store/stories.reducer";

let store = null;

export function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(sagas);
  return store;
}

export type AppDispatch = Dispatch<StoriesActions>;
export interface AppState {
  storiesState: StoriesState;
}
