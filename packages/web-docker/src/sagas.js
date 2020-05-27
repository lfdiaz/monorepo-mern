import todoSagas from "./features/todo/sagas";

function* rootSaga() {
  yield [todoSagas];
}

export default rootSaga;
