import {  takeLatest, all } from 'redux-saga/effects';
import { SAGA_ACTIONS } from '../common/config/actions';
import { loginUser } from './auth.saga';
export function* sagas() {
    yield all([
        takeLatest(SAGA_ACTIONS.LOGIN,loginUser),
    ]);
}