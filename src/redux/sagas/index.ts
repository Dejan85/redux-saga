import { takeEvery, put } from "redux-saga/effects";

function* workerSaga() {
  console.log("Hey from worker");
  console.log(put({ type: "action from worker" }));

  yield put({ type: "action from worker" });
}

function* rootSaga() {
  yield takeEvery("hello", workerSaga);
}

export default rootSaga;
