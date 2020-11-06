import {  takeLatest, all } from 'redux-saga/effects';
import { SAGA_ACTIONS } from '../common/config/actions';
import { createUser, getCurrentUser, loginUser, updateUser, updateUserPassword } from './auth.saga';
export function* sagas() {
    yield all([
        takeLatest(SAGA_ACTIONS.LOGIN,loginUser),
        takeLatest(SAGA_ACTIONS.SIGN_UP,createUser),
        takeLatest(SAGA_ACTIONS.GET_ME,getCurrentUser),
        takeLatest(SAGA_ACTIONS.UPDATE_USER,updateUser),
        takeLatest(SAGA_ACTIONS.UPDATE_USER_PASSWORD,updateUserPassword),
    ]);
}