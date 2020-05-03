import { fork } from 'redux-saga/effects';
import DataSourceSaga from './DataSourceSaga';
import create from '../services/Api';

const apiService = create('http://localhost:9000');
// start the daemons
export default function* root() {
  yield fork(DataSourceSaga(apiService).watcher);
}
