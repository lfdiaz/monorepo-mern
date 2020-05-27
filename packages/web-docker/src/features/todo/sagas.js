import { call, takeEvery } from "redux-saga/effects";
import { actions } from "./todosSlice";

function* sagaAction(action) {
  console.log("here");
  try {
  } catch (e) {}
}

function* exampleSaga() {
  console.log("ran");
  yield takeEvery(actions.addTodo.type, sagaAction);
}

export default exampleSaga;
