import axios from 'axios';
import Cookies from 'js-cookie';
import { ACTIONS } from '../common/config/actions';
import { STORAGE } from '../common/constants/storageConstants';
import {store} from '../stores/index'
export class CallApi {
  static GET(url, params, isAuth) {
    return new Promise((resolve, reject) => {
      let headers = {};
      if (isAuth) {
        const token = Cookies.get(STORAGE.AUTH_TOKEN);
        headers = {
          Authorization: `bearer ${token}`,
        };
      }
      return axios({
        method: 'GET',
        url,
        headers,
        params,
      })
        .then(success => {
          return resolve(success);
        })
        .catch(error => {
          return reject(error.response);
        });
    });
  }

  static POST(url, data, isAuth) {
    return new Promise((resolve, reject) => {
      let headers = {'Content-Type':'application/json'};
      if (isAuth) {
        const token = Cookies.get(STORAGE.AUTH_TOKEN);
        headers = {
          'Content-Type':'application/json',
          Authorization: `bearer ${token}`,
        };
      }
      return axios({
        method: 'POST',
        url,
        headers,
        data,
      })
        .then(success => {
          return resolve(success);
        })
        .catch(error => {
          return reject(error.response);
        });
    });
  }

  static PUT(url, data, isAuth) {
    return new Promise((resolve, reject) => {
      let headers = {};
      if (isAuth) {
        const token = Cookies.get(STORAGE.AUTH_TOKEN);
        headers = {
          Authorization: `bearer ${token}`,
        };
      }
      return axios({
        method: 'PUT',
        url,
        headers,
        data,
      })
        .then(success => {
          return resolve(success);
        })
        .catch(error => {
          return reject(error.response);
        });
    });
  }

  static DELETE(url, data, isAuth) {
    return new Promise((resolve, reject) => {
      let headers = {'Content-Type':'application/json'};
      if (isAuth) {
        const token = Cookies.get(STORAGE.AUTH_TOKEN);
        headers = {
          Authorization: `bearer ${token}`,
        };
      }
      return axios({
        method: 'DELETE',
        url,
        headers,
        data,
      })
        .then(success => {
          return resolve(success);
        })
        .catch(error => {
          return reject(error.response);
        });
    });
  }
}

