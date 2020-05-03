import { put, call, takeEvery } from 'redux-saga/effects';
import Types from '../actions/Types';
import * as DataSourceActions from '../actions/DataSourceActions';
// attempts to login
export default (api) => {
  function* worker(action) {
    if (action.type === Types.FETCH_DATA) {
      try {
        const response = yield call(api.fetchData);
        if (response.status === 200) {
          yield put(DataSourceActions.fetchDataSuccessful(response.data));
        }
      } catch (error) {
        // console.log(error);
      }
    }
  }

  function* watcher() {
    yield takeEvery(
      [
        Types.FETCH_DATA,
      ],
      worker
    );
  }
  return {
    worker,
    watcher,
  };
};
