import { all } from 'redux-saga/effects';

import imagesSaga from './imagesSaga';

export default function* rootSaga() {
    yield all([imagesSaga()]);
}
