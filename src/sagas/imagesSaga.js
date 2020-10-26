import { put, call, takeEvery } from 'redux-saga/effects';

import { setImages, setError } from '../actions';
import { IMAGES } from '../constants';
import { fetchImages } from '../api';


export function* handleImagesLoad() {
    try {
        const image = yield call(fetchImages);
        yield put(setImages(image));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
