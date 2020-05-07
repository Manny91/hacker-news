import { all } from "redux-saga/effects";
import { storiesSaga } from "../stories-module/store/stories.sagas";

export function* sagas() {
  yield all([storiesSaga()]);
}
