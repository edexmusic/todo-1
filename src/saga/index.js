import {getData} from "../api";
import {takeEvery, put, call} from "redux-saga/effects"
import {GET_LATEST_DATA} from "../containers/redux/constants";
import {setLatestData} from "../containers/redux/actions/actionCreator";

export function* workerSaga() {
    const {slideshow} = yield call(getData);
    yield put(setLatestData(slideshow));
    console.log(slideshow)
}

export function* watcherSaga() {
    yield takeEvery(GET_LATEST_DATA, workerSaga)
}

export function* rootSaga() {
    yield watcherSaga();
}