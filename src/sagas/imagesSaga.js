import { put, call, takeEvery, select } from 'redux-saga/effects';

import { setImages, setError } from '../actions';
import { IMAGES,IMAGE } from '../constants';
import { fetchImages ,fetchImage} from '../api';

export const getPage = state => state.nextPage;

export function* handleImagesLoad() {
    try {
        const page = yield select(getPage);
        const image = yield call(fetchImages, page);
        yield put(setImages(image));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
