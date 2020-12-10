import { call, put } from "redux-saga/effects";
import { ACTIONS } from "../common/config/actions";
import { APIS } from "../common/config/urlConfig";
import { CallApi } from "./callApi";

export function* getCatagories(action){
    try {
        const data = {};
        const resp = yield call(CallApi.GET, APIS.GET_CATAGORIES,data,true);
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

  // get all products
  export function* getProducts(action){
    try {
        const data = action.payload;
        const resp = yield call(CallApi.GET, APIS.GET_PRODUCTS,data,true);
        if (resp.status === 200) {
          
          yield put({
            type: ACTIONS.GET_ALL_PRODUCTS,
            payload: resp.data,
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

   // get all products
   export function* getFilteredProducts(action){
    try {
        const data = action.payload;
        const resp = yield call(CallApi.GET, APIS.GET_FILTERED_PRODUCTS,data,true);
        if (resp.status === 200) {
          
          yield put({
            type: ACTIONS.GET_ALL_PRODUCTS,
            payload: resp.data,
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

   // get single product by id
   export function* getProductById(action){
    try {
        const data = action.payload;
        const resp = yield call(CallApi.GET, APIS.GET_PRODUCT_BY_PRODUCT_ID+data.pid,null,true);
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