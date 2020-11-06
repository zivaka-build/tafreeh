import { CallApi } from "./callApi";
import { call, put } from 'redux-saga/effects';
import Cookies from 'js-cookie';
import { STORAGE } from "../common/constants/storageConstants";
import { APIS } from "../common/config/urlConfig";
import { ACTIONS } from "../common/config/actions";
import { backdropVisible } from "../components/loaders/loaderConfig";

// generator function for user login saga
export function* loginUser(action){
    try {
        const data = action.payload;
        const loginResp = yield call(CallApi.POST, APIS.LOGIN, data);
        if (loginResp.status === 200) {
            Cookies.set(STORAGE.AUTH_TOKEN,loginResp.data.token);
          yield put({
            type: ACTIONS.LOGIN,
            payload: loginResp.data,
          });
          // eslint-disable-next-line no-unused-expressions
          action && action.callbackSuccess && action.callbackSuccess(loginResp);
        } else {
          // eslint-disable-next-line no-unused-expressions
          action && action.callbackError && action.callbackError(loginResp);
        }
      } catch (e) {
        // eslint-disable-next-line no-unused-expressions
        action && action.callbackError && action.callbackError(e);
      }
}

// create a user

export function* createUser(action){
  try {
      const data = action.payload;
      const resp = yield call(CallApi.POST, APIS.SIGN_UP, data);
      if (resp.status === 200) {
        // eslint-disable-next-line no-unused-expressions
        action && action.callbackSuccess && action.callbackSuccess(resp);
      } else {
        // eslint-disable-next-line no-unused-expressions
        action && action.callbackError && action.callbackError(resp);
      }
    } catch (e) {
      // eslint-disable-next-line no-unused-expressions
      action && action.callbackError && action.callbackError(e);
    }
}

// fetch current user detail
export function* getCurrentUser(action){
  try {
      const data = action.payload;
      const resp = yield call(CallApi.GET, APIS.ME+data.email, {},true);
      if (resp.status === 200) {
        if(!Cookies.get(STORAGE.CURRENT_USER_EMAIL)){
          Cookies.set(STORAGE.CURRENT_USER_EMAIL,data.email);
        }
        yield put({
          type: ACTIONS.GET_ME,
          payload: resp.data.user,
        });
        // eslint-disable-next-line no-unused-expressions
        action && action.callbackSuccess && action.callbackSuccess(resp);
      } else {
        // eslint-disable-next-line no-unused-expressions
        action && action.callbackError && action.callbackError(resp);
      }
    } catch (e) {
      // eslint-disable-next-line no-unused-expressions
      action && action.callbackError && action.callbackError(e);
    }
}

//update user information
export function* updateUser(action){
  try {
      backdropVisible(true);
      const data = action.payload;
      const resp = yield call(CallApi.PUT, APIS.UPDATE_USER_INFO+data.id,data.data,true);
      if (resp.status === 200) {
        yield put({
          type: ACTIONS.UPDATE_ME,
          payload: resp.data,
        });
        backdropVisible(false);
        // eslint-disable-next-line no-unused-expressions
        action && action.callbackSuccess && action.callbackSuccess(resp);
      } else {
        backdropVisible(false);
        // eslint-disable-next-line no-unused-expressions
        action && action.callbackError && action.callbackError(resp);
      }
    } catch (e) {
      backdropVisible(false);
      // eslint-disable-next-line no-unused-expressions
      action && action.callbackError && action.callbackError(e);
    }
}


//update user's password
export function* updateUserPassword(action){
  try {
      backdropVisible(true);
      const data = action.payload;
      const resp = yield call(CallApi.PUT, APIS.UPDATE_USER_PASWORD+data.id,data.data,true);
      if (resp.status === 200) {
        backdropVisible(false);
        // eslint-disable-next-line no-unused-expressions
        action && action.callbackSuccess && action.callbackSuccess(resp);
      } else {
        backdropVisible(false);
        // eslint-disable-next-line no-unused-expressions
        action && action.callbackError && action.callbackError(resp);
      }
    } catch (e) {
      backdropVisible(false);
      // eslint-disable-next-line no-unused-expressions
      action && action.callbackError && action.callbackError(e);
    }
}