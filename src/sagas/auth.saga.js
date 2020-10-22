import { CallApi } from "./callApi";
import { call, put } from 'redux-saga/effects';
import Cookies from 'js-cookie';
import { STORAGE } from "../common/constants/storageConstants";
import { APIS } from "../common/config/urlConfig";
import { ACTIONS } from "../common/config/actions";

// generator function for user login saga
export function* loginUser(action){
    try {
        const data = action.payload;
        const loginResp = yield call(CallApi.GET, APIS.SINGLE, data);
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
