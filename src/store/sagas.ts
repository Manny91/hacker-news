import { all } from "redux-saga/effects";
import { storiesSaga } from "../stories/store/stories.sagas";

export function* sagas() {
  yield all([storiesSaga()]);
}
