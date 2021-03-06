import {  takeLatest, all } from 'redux-saga/effects';
import { SAGA_ACTIONS } from '../common/config/actions';
import { createUser, getCurrentUser, loginUser, resetPassword, sendResetLink, updateUser, updateUserPassword } from './auth.saga';
import { getCatagories, getFilteredProducts, getProductById, getProducts } from './products.saga';
export function* sagas() {
    yield all([
        takeLatest(SAGA_ACTIONS.LOGIN,loginUser),
        takeLatest(SAGA_ACTIONS.SIGN_UP,createUser),
        takeLatest(SAGA_ACTIONS.GET_ME,getCurrentUser),
        takeLatest(SAGA_ACTIONS.UPDATE_USER,updateUser),
        takeLatest(SAGA_ACTIONS.UPDATE_USER_PASSWORD,updateUserPassword),
        takeLatest(SAGA_ACTIONS.FORGOT_PASSWORD,sendResetLink),
        takeLatest(SAGA_ACTIONS.RESET_PASSWORD,resetPassword),
        takeLatest(SAGA_ACTIONS.PRODUCTS.GET_CATAGORIES,getCatagories),
        takeLatest(SAGA_ACTIONS.PRODUCTS.GET_ALL,getProducts),
        takeLatest(SAGA_ACTIONS.PRODUCTS.GET_FILTERED,getFilteredProducts),
        takeLatest(SAGA_ACTIONS.PRODUCTS.GET_BY_PRODUCT_ID,getProductById),
    ]);
}