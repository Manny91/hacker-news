import { all } from "redux-saga/effects";
import { newsSaga } from "../news/store/news.sagas";

export function* sagas() {
  yield all([newsSaga()]);
}
