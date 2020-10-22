import axios from 'axios';
import Cookies from 'js-cookie';
import { STORAGE } from '../common/constants/storageConstants';
export class CallApi {
  static GET(url, params, isAuth) {
    return new Promise((resolve, reject) => {
      let headers = {};
      if (isAuth) {
        const token = Cookies.get(STORAGE.AUTH_TOKEN);
        headers = {
          Authorization: `Token ${token}`,
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
      let headers = {};
      if (isAuth) {
        const token = Cookies.get(STORAGE.AUTH_TOKEN);
        headers = {
          Authorization: `Token ${token}`,
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
          Authorization: `Token ${token}`,
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
      let headers = {};
      if (isAuth) {
        const token = Cookies.get(STORAGE.AUTH_TOKEN);
        headers = {
          Authorization: `Token ${token}`,
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

axios.interceptors.request.use(
  req=>new Promise((resolve,reject)=>{
    console.log(req)
    resolve(req);
},
(err)=>{
  console.log(err);
}
));